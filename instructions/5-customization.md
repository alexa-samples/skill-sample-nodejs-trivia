# Alexa トリビアスキルの開発
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-locked.png)](4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-on.png)](5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)

## 他の言語を追加する（オプション）

Alexa Skills Kit で多言語対応のスキルを作ることができます。スキルがサポートする言語は1つだけでも良いし、利用可能な言語から複数選択することもできます。多言語スキルの開発について詳細は[こちら](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages)を参照してください。


1. 「新しい言語を追加」タブをクリックし、言語を選択するだけで言語を追加できます。１つ目の言語と同じ要領で必要な項目を埋めてください。スキル名と呼び出し名は設定中の言語にする必要があります(例えば英語の場合は英語の名前をつけます)。**「保存」** ボタンをクリックして続けてください。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/5-1-English-info.png)

2. 対話モデルのセクションでは、今回のスキルは Intent Schema は同じですが、サンプル発話とカスタムスロットタイプの値は言語毎に異なります。スキルビルダーの **Code Editor** を開き、追加した言語の Intent Schemaと、サンプル発話を編集します。この[GitHubのmodelsフォルダ](../models)から対応する言語の Intent Schema を選択し、ドラッグ＆ドロップしてコピーすることもできます。今回のテンプレートではカスタムスロットタイプは使っていませんが、使っているスキルの場合はカスタムスロットタイプの値は選択した言語にする必要があります。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/5-2-English-sample-atterances-dd.png)


3. Lambda関数のソースファイル index.js を開いてください。**languageString** の値の中から設定中の言語のロケールを探し、文字列を編集してください。questions.js 内の質問も忘れずに編集してください。質問と答えは選択中の言語で記載することになっています。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/5-3-English-source-code2.png)
	
	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/5-3-English-questions.png)
	
4. レイテンシを小さくするため、コードは異なるエンドポイントにデプロイすることをお勧めします。[ステップ2](2-lambda-function.md)の Lambda 関数作成の手順に沿って適切な Lambda のリージョンを選択するようにしてください。アメリカ向けスキルの場合は **米国東部 (バージニア北部)** または **米国西部 (オレゴン)**、イギリスとドイツ向けスキルの場合は **EU (アイルランド)** 、日本向けスキルの場合は **アジアパシフィック (東京)** を選択してください。開発者ポータルの設定のセクションで利用するため、ARNをコピーしてください。

5. スキルの設定セクションに戻ってください。エンドポイントの地理的リージョンを追加し、先ほどコピーした ARN を貼り付け、設定を保存してください。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/5-5-English-lambda.png)

6. サービスシミュレーターもしくは実機で追加した言語のテストを実施してください。

7.  このページに記載した全てのアップデートが終わったら、下のボタンをクリックして、**スキルの公開**に進んでください

[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_publication.png)](6-publication.md)
