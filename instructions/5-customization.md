# Build An Alexa Trivia Skill
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-locked._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-locked._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-locked._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-locked._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-on._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/6-publication.md)

## Add Additional Languages (Optional)

You can use the Alexa Skills Kit to create skills in multiple languages. A skill can support a single language, or any combination of the available languages:
* English (US)
* English (UK)
* German

For more on developing skills in multiple languges, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages).

1. To add an additional language, simply select the Add New Language tab in Developer Portal and choose your second language. Choose and fill all necessary information like we did for the initial language of your skill. You will need to define Name and Invocation Name for the current language (e.g. German name for German skills). Then click Save to continue.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_info.PNG)

2. In the Interaction Model section, our skill shares the same intent schema and uses different sample utterances and custom slot type values in different languages. Copy the corresponding .json model from the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/models) into the "code" section in the Skill Builder to change sample utterances into your second language. We will not be using custom slots in this template, but slot type values should be put in the new language if your skill has them. For Reindeer Trivia in German, go [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-trivia/tree/master/models/de-DE.json) for a sample model.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_intent.PNG)

3. Open the source file for your Lambda function, index.js. In the languageString variable, look up the locale for your current language, edit the language strings, and other message like you did for your initial language. Also remember to edit questions in questions.js. Questions and answers are supposed to be defined using your second language.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/source_code2.png)
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_questions.PNG)

4. For better latency, deploying your code to different endpoints is recommended. Follow the Create Lambda Function instructions in Step 2 and be sure to select an appropriate Lambda region. Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. Copy the ARN for use in the Configuration section of the Amazon Developer Portal.

5. Go back to skill Configuration section, which contains Global fields for all languages. Add an extra endpoint and paste your Lambda ARN. Save your skill configuration information.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_lambda.PNG)

6. Test your skill in the second language using Service Simulator or a device.

4.  **Once you have made the updates listed on this page, you can click "Next" to move on to Publishing and Certification of your skill.**

    <a href="https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/3-7-next-button._TTH_.png" /></a>

<br/><br/>
<a href="https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/instructions/6-publication.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_publication._TTH_.png" /></a>

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
