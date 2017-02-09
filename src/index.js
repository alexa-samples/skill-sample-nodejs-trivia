/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports en-US lauguage.
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-trivia
 **/

'use strict';

const Alexa = require('alexa-sdk');
const questions = require('./question');

const GAME_NAME = 'Reindeer Trivia'; // TODO Be sure to change this for your skill.
const ANSWER_COUNT = 4; // The number of possible answers per trivia question.
const GAME_LENGTH = 5;  // The number of questions per trivia game.
const GAME_STATES = {
    TRIVIA: '_TRIVIAMODE', // Asking trivia questions.
    START: '_STARTMODE', // Entry point, start the game.
    HELP: '_HELPMODE', // The user is asking for help.
};
const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL)

function populateGameQuestions() {
    const gameQuestions = [];
    const indexList = [];
    let index = questions.length;

    if (GAME_LENGTH > index) {
        throw new Error('Invalid Game Length.');
    }

    for (let i = 0; i < questions.length; i += 1) {
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (let j = 0; j < GAME_LENGTH; j += 1) {
        const rand = Math.floor(Math.random() * index);
        index -= 1;

        const temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

/**
 * Get the answers for a given question, and place the correct answer at the spot marked by the
 * correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
 * only ANSWER_COUNT will be selected.
 * */
function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    const answers = [];
    const answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]].slice();

    let index = answersCopy.length;
    let temp;

    if (index < ANSWER_COUNT) {
        throw new Error('Not enough answers for question.');
    }

    // Shuffle the answers, excluding the first element which is the correct answer.
    for (let j = 1; j < answersCopy.length; j += 1) {
        const rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (let i = 0; i < ANSWER_COUNT; i += 1) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function isAnswerSlotValid(intent) {
    const answerSlotFilled = intent && intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    const answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value, 10));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value, 10) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value, 10) > 0;
}

function handleUserGuess(userGaveUp) {
    const answerSlotValid = isAnswerSlotValid(this.event.request.intent);
    let speechOutput = '';
    let speechOutputAnalysis = '';
    const gameQuestions = this.attributes.questions;
    let correctAnswerIndex = parseInt(this.attributes.correctAnswerIndex, 10);
    let currentScore = parseInt(this.attributes.score, 10);
    let currentQuestionIndex = parseInt(this.attributes.currentQuestionIndex, 10);
    const correctAnswerText = this.attributes.correctAnswerText;

    if (answerSlotValid && parseInt(this.event.request.intent.slots.Answer.value, 10) === this.attributes.correctAnswerIndex) {
        currentScore += 1;
        speechOutputAnalysis = 'correct. ';
    } else {
        if (!userGaveUp) {
            speechOutputAnalysis = 'wrong. ';
        }

        speechOutputAnalysis += `The correct answer is ${correctAnswerIndex}: ${correctAnswerText}. `;
    }

    // Check if we can exit the game session after GAME_LENGTH questions (zero-indexed)
    if (this.attributes.currentQuestionIndex === GAME_LENGTH - 1) {
        speechOutput = userGaveUp ? '' : 'That answer is ';
        speechOutput += `${speechOutputAnalysis}You got ${currentScore.toString()} out of ${
            GAME_LENGTH.toString()} questions correct. Thank you for playing!`;

        this.emit(':tell', speechOutput);
    } else {
        currentQuestionIndex += 1;
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
        const spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
        const roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex);
        const questionIndexForSpeech = currentQuestionIndex + 1;
        let repromptText = `Question ${questionIndexForSpeech.toString()}. ${spokenQuestion} `;

        for (let i = 0; i < ANSWER_COUNT; i += 1) {
            repromptText += `${(i + 1).toString()}. ${roundAnswers[i]}. `;
        }

        speechOutput += userGaveUp ? '' : 'That answer is ';
        speechOutput += `${speechOutputAnalysis}Your score is ${currentScore.toString()}. ${repromptText}`;

        Object.assign(this.attributes, {
            speechOutput: repromptText,
            repromptText,
            currentQuestionIndex,
            correctAnswerIndex: correctAnswerIndex + 1,
            questions: gameQuestions,
            score: currentScore,
            correctAnswerText:
                questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0],
        });

        this.emit(':askWithCard', speechOutput, repromptText, GAME_NAME, repromptText);
    }
}

const newSessionHandlers = {
    /**
     * Entry point. Start a new game on new session. Handle any setup logic here.
     */
    'NewSession': function () {
        this.handler.state = GAME_STATES.START;
        if (this.event.request.type === 'LaunchRequest') {
            this.emitWithState('StartGame', true);
        } else if (this.event.request.type === 'IntentRequest') {
            console.log(`current intent: ${this.event.request.intent.name
                }, current state:${this.handler.state}`);
            const intent = this.event.request.intent.name;
            this.emitWithState(intent);
        }
    },

    'SessionEndedRequest': function () {
        const speechOutput = 'OK, Goodbye!';
        this.emit(':tell', speechOutput);
    },
};

const createStateHandler = Alexa.CreateStateHandler;

const startStateHandlers = createStateHandler(GAME_STATES.START, {
    'StartGame': function (newGame) {
        let speechOutput = newGame ? `Welcome to ${GAME_NAME}. I will ask you ${GAME_LENGTH.toString()
        } questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ` : '';
        // Select GAME_LENGTH questions for the game
        const gameQuestions = populateGameQuestions();
        // Generate a random index for the correct answer, from 0 to 3
        const correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
        // Select and shuffle the answers for each question
        const roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex);
        const currentQuestionIndex = 0;
        const spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
        let repromptText = `Question 1. ${spokenQuestion} `;

        for (let i = 0; i < ANSWER_COUNT; i += 1) {
            repromptText += `${(i + 1).toString()}. ${roundAnswers[i]}. `;
        }

        speechOutput += repromptText;

        Object.assign(this.attributes, {
            speechOutput: repromptText,
            repromptText,
            currentQuestionIndex,
            correctAnswerIndex: correctAnswerIndex + 1,
            questions: gameQuestions,
            score: 0,
            correctAnswerText: questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0],
        });

        // Set the current state to trivia mode. The skill will now use handlers defined in triviaStateHandlers
        this.handler.state = GAME_STATES.TRIVIA;

        this.emit(':askWithCard', speechOutput, repromptText, GAME_NAME, repromptText);
    },
    'AMAZON.HelpIntent': function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState('helpTheUser', true);
    },
    'Unhandled': function () {
        this.emit('StartGame', true);
    },
    'SessionEndedRequest': function () {
        const speechOutput = 'OK, Goodbye!';
        this.emit(':tell', speechOutput);
    },
});

const triviaStateHandlers = createStateHandler(GAME_STATES.TRIVIA, {
    'AnswerIntent': function () {
        handleUserGuess.call(this, false);
    },
    'DontKnowIntent': function () {
        handleUserGuess.call(this, true);
    },
    'AMAZON.StartOverIntent': function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState('StartGame', false);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptText);
    },
    'AMAZON.HelpIntent': function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState('helpTheUser', false);
    },
    'AMAZON.StopIntent': function () {
        this.handler.state = GAME_STATES.HELP;
        const speechOutput = 'Would you like to keep playing?';
        this.emit(':ask', speechOutput, speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok, let\'s play again soon.  Goodbye!');
    },
    'Unhandled': function () {
        const speechOutput = `Try saying a number between 1 and ${ANSWER_COUNT.toString()}`;
        this.emit(':ask', speechOutput, speechOutput);
    },
    'SessionEndedRequest': function () {
        const speechOutput = 'OK, Goodbye!';
        this.emit(':tell', speechOutput);
    },
});

const helpStateHandlers = createStateHandler(GAME_STATES.HELP, {
    'helpTheUser': function (newGame) {
        const askMessage = newGame ? 'Would you like to start playing?' : 'To repeat the last question, say, repeat. Would you like to keep playing?';
        const speechOutput = `I will ask you ${GAME_LENGTH} multiple choice questions. Respond with the number of the answer. `
            + `For example, say one, two, three, or four. To start a new game at any time, say, start game. ${askMessage}`;
        const repromptText = `To give an answer to a question, respond with the number of the answer . ${askMessage}`;

        this.emit(':ask', speechOutput, repromptText);
    },
    'StartGame': function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState('StartGame', false);
    },
    'AMAZON.RepeatIntent': function () {
        this.emitWithState('helpTheUser');
    },
    'AMAZON.HelpIntent': function () {
        this.emitWithState('helpTheUser', false);
    },
    'AMAZON.YesIntent': function () {
        if (this.attributes.speechOutput && this.attributes.repromptText) {
            this.handler.state = GAME_STATES.TRIVIA;
            this.emitWithState('AMAZON.RepeatIntent');
        } else {
            this.handler.state = GAME_STATES.START;
            this.emitWithState('StartGame', false);
        }
    },
    'AMAZON.NoIntent': function () {
        const speechOutput = 'Ok, we\'ll play another time. Goodbye!';
        this.emit(':tell', speechOutput);
    },
    'AMAZON.StopIntent': function () {
        const speechOutput = 'Would you like to keep playing?';
        this.emit(':ask', speechOutput, speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok, let\'s play again soon.  Goodbye!');
    },
    'Unhandled': function () {
        const speechOutput = 'Say yes to continue, or no to end the game.';
        this.emit(':ask', speechOutput, speechOutput);
    },
    'SessionEndedRequest': function () {
        const speechOutput = 'OK, Goodbye!';
        this.emit(':tell', speechOutput);
    },
});

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandlers, startStateHandlers, triviaStateHandlers, helpStateHandlers);
    alexa.APP_ID = APP_ID;
    alexa.execute();
};
