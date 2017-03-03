# Step-by-Step Guide to Build a Trivia Skill

The template leverages [AWS Lambda](https://aws.amazon.com/lambda/), the [Alexa Skills Kit (ASK)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit), and the [ASK SDK](https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js), while providing the business logic, multiple language support, use cases, error handling and help functions for your skill. You just need to come up with a content idea (like "Santa Claus Trivia"), plug in your content and edit the sample provided (we walk you through how it’s done). It's a valuable way to quickly learn the end-to-end process for building and publishing an Alexa skill.

This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a skill using this trivia skill template, called ‘Reindeer Trivia’. This post assumes you have some familiarity with JavaScript/Node.js (or a similar programming language) and the Alexa Skills Kit.

Using the Alexa Skills Kit, you can build an application that can receive and respond to voice requests made on the Alexa platform.  In this tutorial, you’ll build a web service to handle notifications from Alexa and map this service to a skill in the Amazon Developer Portal, making it available on your device and to all Alexa users after certification.

 After completing this tutorial, you will know how to:

   * **Create a parameter-based skill** - This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a parameter-based skill using a template called ‘Reindeer Trivia’.
   * **Understand the basics of VUI design** - Creating this skill will help you understand the basics of creating a working Voice User Interface (VUI) while using a cut/paste approach to development. You will learn by doing, and end up with a published Alexa skill. This tutorial includes instructions on how to customize the skill and submit it for certification. For guidance on designing a voice experience with Alexa you can also [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087592).
   * **Use JavaScript/Node.js and the Alexa Skills Kit to create a skill** - You will use the template as a guide but the customization is up to you. For more background information on using the Alexa Skills Kit please [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087595).
   * **Get your skill published** - Once you have completed your skill, this tutorial will guide you through testing your skill and sending your skill through the certification process, making it available to be enabled by any Alexa user.

# Let's Get Started

## Step 1. Setting up Your Alexa Skill in the Developer Portal

Skills are managed through the Amazon Developer Portal. You’ll link the Lambda function you created to a skill defined in the [Developer Portal](https://developer.amazon.com/).

 1. Navigate to the Amazon Developer Portal. Sign in or create a free account (upper right). You might see a different image if you have registered already or our page may have changed. If you see a similar menu and the ability to create an account or sign in, you are in the right place.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/devsignin.png)

 2. Once signed in, navigate to Alexa and select **"Getting Started"** under Alexa Skills Kit.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/Getstartedask.png)

 3. Here is where you will define and manage your skill. Select **"Add a New Skill"**

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/AddnewSkill.png)

 4. Select an initial language you want to support, and then optionally add additional languages later if needed (in Step 7). Make sure the radio button for the custom interaction model is selected for “Skill Type”. Add the name of the skill. You can use “Reindeer Trivia” for this example. Remember, when you create a skill that you will publish, you will use a name that you define for your skill. That name will be the one that shows up in the Alexa App. Add the invocation name. Since we are using the sample, type “Reindeer Trivia”. We will not use Audio Player for this skill, select "No". **Note**: "Global Fields" information apply to all languages supported by the skill. Finally, select **Next**.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/skill_information.PNG)

 5. Now, notice you're in the Interaction Model section.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/interactionmodel.PNG)

 6. Next, we need to define our skill’s Interaction Model. Let’s begin with the intent schema. In the context of Alexa, an intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots. We will not be using custom slots in this template, but they are very useful if you want to parameterize your intents. Note: You will need to define both custom slot type values and sample utterances in language that matches current language tab.

* Review the intent schema below. This is written in JSON and provides the information needed to map the intents we want to handle programmatically.  Copy/Paste the intent schema in the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/speechAssets/IntentSchema.json) to Intent Schema section in Developer Portal.

* You will see the intents for getting a answer from user, and then a collection of built-in intents to simplify handling common user tasks. Help intent will handle any time the user asks for help, stop and cancel are built-in intents to make it easier for you to handle when a user wants to exit the application. For more on the use of built-in intents, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents).

```JSON
{
  "intents": [
    {
      "intent": "AnswerIntent",
      "slots": [
        {
          "name": "Answer",
          "type": "AMAZON.NUMBER"
        }
      ]
    },
    {
      "intent": "DontKnowIntent"
    },
    {
      "intent": "AMAZON.StartOverIntent"
    },
    {
      "intent": "AMAZON.RepeatIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.YesIntent"
    },
    {
      "intent": "AMAZON.NoIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/intent_schema.PNG)

 7. The next step is to build the utterance list.

    Given the flexibility and variation of spoken language in the real world, there will often be many different ways to express the same request. Providing these different phrases in your sample utterances will help improve voice recognition for the abilities you add to Alexa. It is important to include as wide a range of representative samples as you can -– all the phrases that you can think of that are possible in use (though do not include samples that users will never speak). Alexa also attempts to generalize based on the samples you provide to interpret spoken phrases that differ in minor ways from the samples specified.

    Now it's time to add the utterances. Select and copy/paste the sample utterances from [GitHub](https://github.com/alexa/skill-sample-nodejs-trivia/tree/master/speechAssets) with your initial language. For example, if your select English (US) as initial language above, then you will need to copy/paste SampleUtterances_en_US.txt in previous link. An example of utterances is listed below. Once they are copied, the screen should look similar to the following image:

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/sample_utterances_us.PNG)

 8. Select **Save**. You should see the interaction model being built (this might a take a minute or two). If you select next, your changes will be saved and you will go directly to the Configuration screen. After selecting Save, it should now look like this:

    ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/interactionmodel_build_success.PNG)

Next we will configure the AWS Lambda function that will host the logic for our skill.

## Step 2: Creating Your Skill Logic Using AWS Lambda

### Installing and Working with the Alexa Skills Kit SDK for Node.js (alexa-sdk)

To make the development of skills easier, we have created the Alexa SDK for Node.js. We will be using this module to deploy the sample. The Alexa SDK is available on [Github](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) and can be deployed as a Node package from within your Node.js environment.

 1. First, you will need to download the sample repository
    * On GitHub, navigate to the [Trivia skill repository](https://github.com/alexa/skill-sample-nodejs-trivia). Click download (the green button) to download the repository to your local machine.

 2. To leverage the SDK for ASK you will need to install Node.js and update npm. To set this up on your machine, [follow these steps](https://docs.npmjs.com/getting-started/installing-node).

 3. Once you have the source downloaded, Node installed and npm updated, you are ready to install the Alexa SDK. Install this in the same directory as your src/index.js file for your skill. Change the directory to the src directory of your skill, and then in the command line, type:

    ```
    npm install --save alexa-sdk
    ```
    Once this is installed you will need to include the **node_modules** directory with the source code for your skill when you compress the src for uploading to AWS Lambda. Let's do this with the example.

 4. Navigate to where you downloaded the sample repository and installed the Alexa SDK in step 3. Select the **src** directory.

 5. Compress the files inside the src directory into a zip file. **Remember**, do not compress the src directory itself, just the files within the directory, the index.js file and the node_modules folder. Your compressed file should show up in the src directory. You will use this file in a later step.

### Create an AWS Account

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_home.png)

  1. Open [aws.amazon.com](https://aws.amazon.com/) and then choose **‘Create a Free Account’**

* Follow the online instructions. Do not worry about the IAM role, we will do that later.
* You will need a Valid Credit Card to set up your account (note the AWS Free Tier will suffice however. You can find out more about the free tier [here](https://aws.amazon.com/free/)).
* Part of the sign-up procedure involves receiving a phone call and entering a PIN using the phone keypad.

 2. Sign in to the AWS Console

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_login.png)

 3. It can sometimes take a couple of minutes for your new AWS account to go live. You will receive an e-mail when your account is active.

### Create an AWS Lambda Function

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability.

**Note: If you are new to Lambda and would like more information, visit the [Lambda Getting Started Guide](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).**

 1. **IMPORTANT**: For Regions (upper right) , Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. These are the only two regions currently supported for Alexa skill development on AWS Lambda, and choosing the right region will guarantee lower latency.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_region.png)

 2. Select **Lambda** from Compute services (upper left)

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_lambda.png)

 3. Select **“Create a Lambda Function”** to begin the process of defining your Lambda function.

 4. In **‘Select Blueprint’** page, select **“Blank Function”**

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/blank_function.PNG)

 5. Now, you need to configure the event that will trigger your function to be called. As we are building skills with the Alexa Skills Kit, click on the gray dash-lined box and select Alexa Skills Kit from the dropdown menu.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_lambda_ask.png)

 6. Choose **Next** to continue.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_next.png)

 7. You should now be in the **"Configure Function"** section. Enter the Name, Description, and select "Node 4.3" as the Runtime for your skill as in the example.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_config_function.PNG)

 8. Select the **‘Code Entry Type’** as **‘Upload Zip File’** and upload the zip file containing the example you created in Step 1. **Note:** This zip file should contain the contents of the src directory, including the node_modules subfolder.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_upload_zip.png)

 9. Set your handler and role as follows:

    * Keep Handler as ‘index.handler’
    * Drop down the “Role” menu and select **“Create a new custom role”**. (Note: if you have already used Lambda you may already have a ‘lambda_basic_execution’ role created that you can use.) This will launch a new tab in the IAM Management Console.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_role.png)

 10. You will be asked to set up your Identity and Access Management or “IAM” role if you have not done so. AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. We need to create a role that allows our skill to invoke this Lambda function. In the Role Summary section, select "Create a new IAM Role" from the IAM Role dropdown menu. The Role Name and policy document will automatically populate.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/hide-details.jpg)

 11. Select **“Allow”** in the lower right corner and you will be returned to your Lambda function.


 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/allowrole.png)

 12. Keep the Advanced settings as default. Select **‘Next’** and review. You should see something like below. Then select **‘Create Function’**:

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/CreateFunctionbuitton.PNG)

 13. Congratulations, you have created your AWS Lambda function. **Copy** the ARN for use in the Configuration section of the Amazon Developer Portal.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/ARN.PNG)

## Step 3: Add Your Lambda Function to Your Skill

 1. Navigate back to [developer.amazon.com](https://developer.amazon.com/) and select your skill from the list. You can select the skill name or the edit button.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/edit.PNG)

 2. Select the Configuration section. Add the ARN from the Lambda function you created in the AWS Console earlier. Select the **Lambda ARN (Amazon Resource Name)** radio button and tick the corresponding region. Then, select **“No”** for account linking since we will not be connecting to an external account for this tutorial. Paste the ARN you copied earlier into the Endpoint field. Then select **Next**. **Note:** the region(s) here should match the region(s) of your Lambda function(s).

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/configuration.PNG)

 3. You have now completed the initial development of your skill. Now it's time to test.

## Step 4: Testing Your Skill

 1. In the Test area, we are going to enter a sample utterance in the Service Simulator section and see how Alexa will respond. In this example, we have called the skill ‘Reindeer Trivia’. This is the ‘Invocation Name’ we set up in the “Skill Information” section.

    * In the Service Simulator, type **‘open reindeer trivia’** and select **“Ask Reindeer Trivia”**.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/ask_test.PNG)

 2. You should see the formatted JSON request from the Alexa Service and the response coming back. Verify that you get a correct Lambda response, and notice the card output. You will want to customize this output later.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/servicessimulator.PNG)

 3. (Optional) Testing with your device. This is optional as you can do all the testing in the portal. Assuming your Alexa device is on-line (and logged in with the same account as your developer account), you should now see your skill enabled in the Alexa app and ask Alexa to launch your skill. For more information on testing an Alexa skill and registering an Alexa-enabled device, [check here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill).

### Not working (getting an invalid response)?
* Do you have the right ARN copied from your Developer Portal/Skill into your your Lambda function?
* Are you calling the right invocation name?
* Are you saying launch, start or open?
* Are you sure you have no other skills in your accounts with the same invocation name?
* For this template specifically, you should have a minimum of 20 questions for a good customer experience.

## Step 5: Make it Yours

 1. In the Skill Information section in the Developer Console, edit the Skill Information Tab to reflect your new trivia skill:

   * Provide a skill name that represents the new skill you are creating.
   * Come up with a cool Invocation Name that users will use to invoke your skill.  Ensure that the invocation name you choose stays clear of pitfalls listed in the table below. Column on the right provides examples of invocation names that will definitely fail certification.

   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/invocation_name_requirements._TTH_.png)
   * Create a fun icon. Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. Need help finding an image? See PixelBay as a possible source for royalty-free images. Use an image editor (such as Paint on Windows or Preview on Mac) to change the size of the image.

   Everything else can stay as-is for now in the Developer Portal

 2. Open the source file for your Lambda function, index.js, in an editor of your choice. This is in the src directory of the repository you downloaded earlier. Look for corresponding locale strings in languageStrings object. "Ctrl-F" **en** for English and **de** for German. If there are different expressions between U.S. and U.K, we encourage you to specify them using **en-US** and **en-GB** while keeping a generic **en** for other countries. You can learn more about how language resources are looked up by visiting [i18next's documentation](http://i18next.com/translate/). You will see all strings defined for current language in the Reindeer Trivia example. **Note**: **'%s'** in the string represents code logic variable.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/source_code1.png)
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/source_code2.png)

 3. Change the GAME_NAME variable to the name of your skill.

 ```JSON
 "GAME_NAME": "Reindeer Trivia"
 ```

 4. Update your questions. The questions.js file contains all the questions that will be mapped to the custom slots you defined earlier in your skill. Locate the directory you downloaded earlier, and open the questions.js file with your favorite text editor. Look for corresponding language question list by "Ctrl-F" **QUESTIONS_EN_US** for English(U.S.), **QUESTIONS_EN_GB** for English(U.K.) and **QUESTIONS_DE_DE** for German. Each language block contains a list of questions. Here is a snippet of code for reference.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/questions.PNG)
Simply replace the reindeer questions with yours in current language.
**Note**: 
* The first answer should be the correct answer. The script logic will randomize the questions and answers for you. You'll need at least four answers for each question, but more will increase user engagement.
* You’ll need a bare minimum of seven question-and-answer sets, but we recommend at least 20. The best user experiences will have 100 or more.

 5.  In order to control who accesses your web service, we should validate the Application Id in requests made to your web service. Let’s go back to your Alexa skill in your Developer Portal for a moment. Copy in your Application Id from the ‘Skill Information’ section in your developer portal

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/changeAppId.PNG)


 6. Copy the Application Id into the value of the APP_ID variable in index.js. 
 ```JSON
 var APP_ID = undefined;  // TODO replace with your app ID.
 ```

 7. A minimum of 20 questions is needed to get started, but about 100 is a good number to keep users engaged. The more the better.

 8. Be sure to select **SAVE** when you are all done. Note: we test initially in the Developer Portal, not in our Lambda function (AWS).

 9. Log back into your AWS console and upload the changes you have just made. First you will need to zip up the files into a new archive. You can do this by selecting the files that you need in the src directory (the node_modules directory and your updated index.js) into a new archive. Be sure that you compress the files in the folder, not the folder itself.

 10. Select your Lambda function and on the Code tab, select “Upload” to add the archive you just created.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/upload_zip.PNG)

 11. Once you have successfully added the file you will see it on the screen, then select “Save”.

 12. Repeat the tests you performed earlier to ensure your changes are functioning properly. See step 4 for a review of how to performs functional tests.

## Step 6: Add Additional Languages (Optional)
You can use the Alexa Skills Kit to create skills in multiple languages. A skill can support a single language, or any combination of the available languages:
* English (US)
* English (UK)
* German

For more on developing skills in multiple languges, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages).

1. To add an additional language, simply select the Add New Language tab in Developer Portal and choose your second language. Choose and fill all necessary information like we did for the initial language of your skill. You will need to define Name and Invocation Name for the current language (e.g. German name for German skills). Then click Save to continue.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_info.PNG)

2. In the Interaction Model section, our skill shares the same intent schema and uses different sample utterances and custom slot type values in different languages. Copy intent schema from the intent schema in the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-trivia/blob/master/speechAssets/IntentSchema.json) and change sample utterances into your second language. We will not be using custom slots in this template, but slot type values should be put in the new language if your skill has them. For Reindeer Trivia in German, go [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-trivia/tree/master/speechAssets/SampleUtterances_de_DE.txt) for sample utterances.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_intent.PNG)

3. Open the source file for your Lambda function, index.js. In the languageString variable, look up the locale for your current language, edit the language strings, and other message like you did for your initial language. Also remember to edit questions in questions.js. Questions and answers are supposed to be defined using your second language.
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/source_code2.png)
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_questions.PNG)

4. For better latency, deploying your code to different endpoints is recommended. Follow the Create Lambda Function instructions in Step 2 and be sure to select an appropriate Lambda region. Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. Copy the ARN for use in the Configuration section of the Amazon Developer Portal.

5. Go back to skill Configuration section, which contains Global fields for all languages. Add an extra endpoint and paste your Lambda ARN. Save your skill configuration information.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/german_lambda.PNG)

6. Test your skill in the second language using Service Simulator or a device.


## Step 7: Publish Your Skill

Now we need to go back to our Developer Portal to test and edit our skill and we will be ready for certification.

 1.  In your skills Test section, enter your Utterances into the Simulator to make sure everything is working with your new questions.

 2.  Optionally, you can test with your Alexa-enabled device to make sure everything is working correctly. You may find a few words that need to be changed for a better user experience.

 Some things to think about:

  * Is every question pronounced correctly?
  * Do you need to change any words to avoid poor pronunciations?

You can use the Voice Simulator in the Test section to simulate Alexa’s responses. In the Voice Simulator, type in each question that you are using to test how Alexa will say it. Use additional punctuation or possibly SSML if you need to better control how Alexa responds. You can find out more about [SSML here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

  * Have you added in YOUR Application Id as per the previous instruction?

 3. Select the Publishing Information area of your skill next:

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/publishing.PNG)

For Global fields, choose an proper category. **IMPORTANT**: Add the text “This is based on the Trivia Skill Template” to the Testing Instructions section. This alerts the Certification team of your submission using this standardized template, smoothing the road to a faster publish. Also select the countries that you want your skill to be available in.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/publishing_us.PNG)

For other publishing information:

   * Spend some time coming up with an enticing, succinct description. This is the only place you have to attract new users. These descriptions show up on the list of [skills available](http://alexa.amazon.com/#skills) in the Alexa app.
   * In your example phrases, be sure that the examples you use match the utterances that you created in the Interaction Model section. Remember, there are built-in intents such as help and cancel. You can learn more about [built-in intents here](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents#Available%20Built-in%20Intents). You can also review the list of [supported phrases](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation) to begin a conversation.

     An incorrect example phrase is the most likely reason why your skill submission may fail. Here are the four most important failure points for example phrases.
     1. Example phrases do not adhere to supported phrases.</br>
         *Example: Alexa start over (You cannot use wake word without the invocation name. Further, start over can be a response from the user when the stream is open, in which case, wake word and invocation name do not make sense.)</br>*
         *Example: Alexa, Social Headline (A supported format would be Alexa, launch Social Headline)*
     2. Example phrases are not modeled on sample utterances specified in skill’s intent schema
     3. First example phrase does not contain wake word and invocation name</br>
         *Example: Incorrect example phrase - Alexa, where can I eat (Missing invocation name)*
     4. Example phrases do not provide a contextual response. These are the invariably the phrases users are most likely to try the first time they interact with the skill. Therefore, make sure that they work well and provide a good user experience.

 4. Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. If there is any question the Amazon certification team will fail your Alexa skill submission.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_english.png)

   Once you have uploaded your icons, you should see a success message at the bottom of the screen. Finally, **select Next**.

 4. (Optional) For multi-language skills, once you finish and save publishing information for your initial language, you will need to do it again for your second language. Under your second language tab, select publishing infomation, and add additional publishing region(s) to the global fields and all other customer facing information in non-global fields.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/publishing_de.png)

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/publishing_de_phrases.PNG)

 5.  Privacy and Compliance. On the Privacy and Compliance section, select ‘No’ for spending real money, collecting personal information and children restriction. Privacy and Terms URL’s are optional. Choose to certify that your skill can be imported to and exported from the selected regoins.

 6. Select **“Save”**. If your skill supports multiple languages, then you will need to complete Privacy and Compliance for each language before submission.
    ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/privacy.png)

 7. Select “Submit for Certification”
    ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/check_privacy.PNG)

 8. Finally, confirm your submission. Select “Yes” to submit your skill.



Congratulations! You have successfully submitted your skill for publication. You will receive progress e-mails and possibly other suggestions from the team on how you can make your skill even better. You can update your skills at any time.

## Check out These Other Developer Resources

* [Alexa Skills Kit (ASK)](https://developer.amazon.com/ask)
* [Alexa Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html)
* [Knowledge Base](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Intro to Alexa Skills Kit  - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Voice Design 101 - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1087594)
* [Developer Office Hours](https://attendee.gotowebinar.com/rt/8389200425172113931)
* [Developing Skills in Multiple Languages](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages)

