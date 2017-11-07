# Alexa トリビアスキルの開発
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](/1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-on.png)](4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)


## Alexa スキルをテストする

ここまでで、[音声ユーザーインターフェース](1-voice-user-interface.md)と [Lambda 関数](2-lambda-function.md)を作成し、それらを[接続](3-connect-vui-to-code.md)させました。 これであなたのスキルをテストする準備が整いました。

1. [Amazon開発者ポータル](https://developer.amazon.com/edw/home.html#/skills/list)に戻り、あなたが作ったスキルを選択します。

2. 左側にある **テスト** タブを開きます。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-2-test-tab.png)

3. **ボイスシミュレーター** 

   今回のスキルに限らず、どのスキルにおいてもボイスシミュレーターは便利なテストツールです。単語や文章をボックスの中に入力し、「聴く」ボタンをクリックすると Alexa がそれをどのように発音するか確認することができます。Alexa の発音を変えたい時は Speech Synthesis Markup Language [(SSML)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)を利用できます。例えば次の例を試してみてください。

	`<say-as interpret-as="number">12345</say-as>`
		
	`<say-as interpret-as="ordinal">12345</say-as>`
		
	`<say-as interpret-as="digits">12345</say-as>`
    
   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-3-voice-simulator.png)

   Alexa が期待通りの発音をするか確認するために、必要に応じてボイスシュミレーターを使用してください。

4. **サービスシミュレーター**

   スキルが期待通りの動作をすることを確認するために、サービスシミュレーターを使用します。 **発話を入力してください** ボックスの中に「トナカイトリビアを開いて」と入力します。

   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-4-service-simulator.png)
    
   ### サービスシミュレーターのヒント
    * **[スキル名]を呼び出す** ボタンをクリックすると、 **サービスリクエスト** と **サービスレスポンス** ボックスに JSON データが表示されます。
    * 右の **聴く** ボタンをクリックするとレスポンスの内容を Alexa が読み上げる音声を聞くことができます。
    * もし、 **The remote endpoint could not be called, or the response it returned was invalid** というレスポンスを受け取ったら、それは何らかの設定が適切でない可能性があります。 AWS Lambda のテストツールも利用して問題を解決してください。

5. **AWS Lambda のテストイベント設定** サービスシミュレーターの **サービスリクエスト** ボックスと **サービスレスポンス** ボックスについて説明しました。この **リクエスト** の値を利用することで、Lambda 関数をアップデートした場合も直接テストすることができます。 次のような手順で行います。

  1. サービスシミュレーターでレスポンスを取得し、リクエストの内容をコピーしてください。もしくは、以下のテキストをコピーして使っても構いません。

	  ```javascript
				{
				"session": {
			   		"new": true,
			   		"sessionId": "SessionId.679b7c2c-896a-444f-8fe7-db23988da6c6",
			   		"application": {
			   			"applicationId": "amzn1.ask.skill.1cc37b3e-80fd-4f39-b03c-1a84e270440c"
			   			},
				    "attributes": {},
				    "user": {
						"userId":"amzn1.ask.account.AGMUAQRFYL2WI64E6KXT56LV4VYDP666NCBQMH7RCZ23ISDMDXUVUYL5MBXRTAWAMLFYDWPBHPUDCEVTMFR3NRY2PDURGK5APO7NI4HR6GBUUSXRTT65IAPNUIGLOEJIXGH46Z3IJLL7KRJS7TV73SYYMGZ2CBUULONI5UXVYIKNANXDUOWLPBFQNVTL5J2Q53QDCDEYBEGJ3CA"
					}
				},
				"request": {
					"type": "IntentRequest",
					"requestId": "EdwRequestId.13ddb717-f8cd-4807-a63f-603415170c90",
					"intent": {
			 			"name": "DontKnowIntent",
			 			"slots": {}
					},
					"locale": "ja-JP",
					"timestamp": "2017-11-05T08:52:22Z"
				},
				"context": {
			   "AudioPlayer": {
			      "playerActivity": "IDLE"
			   },
			   "System": {
			      "application": {
			        "applicationId": "amzn1.ask.skill.1cc37b3e-80fd-4f39-b03c-1a84e270440c"
			      },
			      "user": {
					"userId":"amzn1.ask.account.AGMUAQRFYL2WI64E6KXT56LV4VYDP666NCBQMH7RCZ23ISDMDXUVUYL5MBXRTAWAMLFYDWPBHPUDCEVTMFR3NRY2PDURGK5APO7NI4HR6GBUUSXRTT65IAPNUIGLOEJIXGH46Z3IJLL7KRJS7TV73SYYMGZ2CBUULONI5UXVYIKNANXDUOWLPBFQNVTL5J2Q53QDCDEYBEGJ3CA"
			      },
			      "device": {
			        "supportedInterfaces": {}
			      }
			    }
			  },
			  "version": "1.0"
			}
	  ```

  2. **AWS マネジメントコンソール**で Lambda 関数を開き、**テストイベントの選択**メニューから**テストイベントの設定**を選択します。
	
       ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-2-configure-test-event.png)
    
  3. イベントテンプレートのドロップダウンリストから **Alexa Start Session** を選択します。 実際はどのイベントテンプレートを選んでも良いのですが、覚えやすいのでここでは **Alexa Start Session** を利用します。 これは Lambda 関数をアップデートして **保存してテスト** を選ぶたびに実行されます。

       ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-3-alexa-start-session.png)

  4. テキストボックスの内容を削除し、サービスシミュレーターから取得したリクエストの内容を貼り付け、「作成」ボタンをクリックします。

       ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-4-paste-request.png)
   

  5. テストイベントの選択メニューから作成した **startTest** を選択して **テスト** ボタンをクリックします。これにより Lambda 関数に対して設定したテストの内容が実行されます。
    
       ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-5-execution-test.png)
     
     テストにより4つのことが確認できます。

     *  **レスポンス** 「実行結果」内に表示されます。

      ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-5-1-execution-result.png)
      
     *  **実行結果の統計値の概要** ここには所用時間や課金時間、設定済みリソース、使用メモリなどが表示されます。

     *  **ログ出力**  Lambda 関数のコード内で console.log() を適切に使うことで、 関数内で何が起こっているかトラッキングすることができます。何か問題が起きた時に原因を特定する場合に役に立つでしょう。より高度なスキルを作るようになった時、ログの有用性に気づくはずです。

      ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/4-5-5-2-summary.png)

     *  **[CloudWatch](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:) ログへのリンク**  ログには **全て** のレスポンスとエンドユーザーとのやりとりが記録されます。これはとても有益で、とくに自分のデバイスでスキルをテストする時に非常に役に立ちます。

   6. **その他のテスト方法**

       * [Echosim.io](https://echosim.io) はブラウザベースのAlexaスキルのテストツールです。実機デバイスがなくてもテストできるので便利です。
	    * [Unit Testing with Alexa](https://github.com/alexa/alexa-cookbook/tree/master/testing/postman/README.md) は [Postman](http://getpostman.com) と [Amazon API Gateway](http://aws.amazon.com/apigateway)を使用したモダンなユニットテストのアプローチです。

6. サンプルスキルが正常に動作することを確認できたら、このスキルを**カスタマイズ**しましょう。

[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_customization.png)](5-customization.md)
