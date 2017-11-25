# Build An Alexa Trivia Skill
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-on._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](./5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

## Setting up Your Alexa Skill in the Developer Portal

There are two parts to an Alexa skill.  The first part is the [Voice User Interface (VUI)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface).  This is where we define how we will handle a user's voice input, and which code should be executed when specific commands are uttered.  The second part is the actual code logic for our skill, and we will handle that on [page #2](./2-lambda-function.md) of this instructions guide.

1.  **Go to the [Amazon Developer Portal](http://developer.amazon.com).  In the top-right corner of the screen, click the "Sign In" button.** </br>(If you don't already have an account, you will be able to create a new one for free.)

    <a href="http://developer.amazon.com" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-1-developer-portal._TTH_.png" /></a>

2.  **Once you have signed in, click the Alexa button at the top of the screen.**

    <a href="https://developer.amazon.com/edw/home.html#/" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-2-alexa-button._TTH_.png" /></a>

3.  **On the Alexa page, choose the "Get Started" button for the Alexa Skills Kit.**

    <a href="https://developer.amazon.com/edw/home.html#/skills/list" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-3-alexa-skills-kit._TTH_.png" /></a>

4.  **Select "Add A New Skill."** This will get you to the first page of your new Alexa skill.

    <a href="https://developer.amazon.com/edw/home.html#/skill/create/" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-4-add-a-new-skill._TTH_.png" /></a>

5.  **Fill out the Skill Information screen.**  Make sure to review the tips we provide below the screenshot.

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-5-skill-information._TTH_.png" />

    ### Skill Information Tips
    1.  **Skill Type** For this skill, we are creating a skill using the Custom Interaction Model.  This is the default choice.

    2.  **Language** Choose the first language you want to support.  You can add additional languages in the future, but we need to start with one.  (This guide is using U.S. English to start.)

    3.  **Name** This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to.

    4.  **Invocation Name** This is the name that your users will need to say to start your skill.  We have provided some common issues developers encounter in the list below, but you should also review the entire [Invocation Name Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill).

        | Invocation Name Requirements | Examples of incorrect invocation names |
        | ---------------------------- | -------------------------------------- |
        | The skill invocation name must not infringe upon the intellectual property rights of an entity or person. | korean air; septa check |
        | Invocation names should be more than one word (unless it is a brand or intellectual property), and must not be a name or place | horoscope; trivia; guide; new york |
        | Two word invocation names are not allowed when one of the words is a definite article, indefinite article, or a preposition | any poet; the bookie; the fool |
        | The invocation name must not contain any of the Alexa skill launch phrases and connecting words.  Launch phrase examples include "launch," "ask," "tell," "load," and "begin."  Connecting word examples include "to," "from," "by," "if," "and," "whether." | trivia game for star wars; better with bacon |
        | The invocation name must not contain the wake words "Alexa," "Amazon," "Echo," or the words "skill" or "app." | hackster initial skill; word skills |
        | The invocation name must be written in each language you choose to support.  For example, the German version of your skill must have an invocation name written in German, while the English (US) version must have an invocation name written in English. | kitchen stories (German skill) |

    5.  **Audio Player** For this Trivia Skill, we won't be using any audio files, so you can select No for this option.  If you would like to learn more about adding audio to your skills, please check out our [Audio Player Guide](https://github.com/alexa/skill-sample-nodejs-audio-player).

6.  **Click the Next button to move to the Interaction Model.**

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-6-next-button._TTH_.png" />

7.  Click on the **Launch Skill Builder** (Beta) button . This will launch the new Skill Builder Dashboard.

    ![Launch Skill Builder](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-7-skill-builder-launch._TTH_.png)

8.  Click on the "Code Editor" item under **Dashboard** on the top left side of the skill builder.


9.  In the textfield provided, replace any existing code with the code provided in the [Interaction Model](../InteractionModel.json), then click "Apply Changes" or "Save Model".


8.  Click on the "Add+" button near **Intents** on the top left corner of the dashboard.

    ![Add Intent Button](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-8-intents-button._TTH_.png)

9.  In the textbox provided, enter the new intent name: **AnswerIntent.**, and click the **Create Intent** button.

    ![Add Intent](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-9-add-custom-intent._TTH_.png)

10. Add 10-15 sample utterances for your intent.  These are the things a user would say to make this intent happen.  Here are a few examples:

    * {Answer} is my answer
    * {Answer}
    * is it {Answer}
    * my answer is {Answer}

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-10-sample-utterances._TTH_.png)

11. Click on the **Save Model** button, and then click on the **Build Model** button.

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-12-skill-builder-build-save-model._TTH_.png)

<!--
7.  **Fill out the Interaction Model screen.**  Below the screenshot, we have provided links to the content you need to include in each box.

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-7-interaction-model._TTH_.png" />

    ### Interaction Model Tips
    1.  **Intent Schema** An intent schema defines the actions that we want our users to be able to take.  We will dive into modifying this schema later in this guide, so for now, just copy and paste this code into the Intent Schema box. ([Read more about Defining the Voice Interface](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface))

        ```JAVASCRIPT
        { "intents": [
            { "intent": "GetNewFactIntent" },
            { "intent": "AMAZON.HelpIntent" },
            { "intent": "AMAZON.StopIntent" },
            { "intent": "AMAZON.CancelIntent" }
        ]}
        ```
        ([get this code on GitHub](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/speechAssets/intentSchema.json))

        We have four intents in this schema.  The first, "GetNewFactIntent" is what we will use to catch all of our user's requests for a new fact.  The remaining three are built-in intents that are provided by Amazon.  They capture, respectively, user intents for help, stopping, and cancelling what Alexa is currently doing.

    2.  **Sample Utterances** Sample utterances are a guide for Alexa to figure out how to map what a user says to your Intents that we defined earlier.  For now, you just need to copy these sample utterances into the Sample Utterances box in your browser.

        ```javascript
        GetNewFactIntent a fact
        GetNewFactIntent a space fact
        GetNewFactIntent tell me a fact
        GetNewFactIntent tell me a space fact
        GetNewFactIntent give me a fact
        GetNewFactIntent give me a space fact
        GetNewFactIntent tell me trivia
        GetNewFactIntent tell me a space trivia
        GetNewFactIntent give me trivia
        GetNewFactIntent give me a space trivia
        GetNewFactIntent give me some information
        GetNewFactIntent give me some space information
        GetNewFactIntent tell me something
        GetNewFactIntent give me something
        ```
        ([get this on GitHub](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/sampleUtterances_en_US.json))

        Once you have added these sample utterances to your skill, you can click the "Save" button to verify that your interaction model is built properly without any errors.
-->

12.  If your interaction model builds successfully, click on **Configuration button** to move on to Configuration. In our next step of this guide, we will be creating our Lambda function in the AWS developer console, but keep this browser tab open, because we will be returning here on [Page #3: Connect VUI to Code](./3-connect-vui-to-code.md).
     ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-13-skill-builder-configuration.png)

     If you get an error from your interaction model, check through this list:

     *  **Did you copy & paste the provided code into the appropriate boxes?**
     *  **Did you accidentally add any characters to the Interaction Model or Sample Utterances?**

<br/><br/>
<a href="./2-lambda-function.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_lambda_function._TTH_.png" /></a>

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
