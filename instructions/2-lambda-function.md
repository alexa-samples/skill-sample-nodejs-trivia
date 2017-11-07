# Alexa トリビアスキルの開発
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-on.png)](2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off.png)](3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)

## Amazon Web Services を使い Lambda 関数をセットアップする

### Alexa Skills Kit SDK for Node.js (alexa-sdk) のインストールと利用

スキルの開発を簡単にするため **Alexa SDK for Node.js** を作りました。サンプルのデプロイのためにこのモジュールを利用します。Alexa SDKは[Github](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)から入手でき、あなたの Node.js 環境に対して Node Package としてデプロイされます。

1. 最初にサンプルリポジトリをダウンロードする必要があります。

  GitHubでサンプルスキルのリポジトリ「[Trivia skill repository](https://github.com/alexa/skill-sample-nodejs-trivia/tree/ja-JP)」の**ja-JP**ブランチを開いてください。**「Clone or Download」** (緑のボタン)をクリックした後、**「Download ZIP」** (青いボタン)をクリックして、リポジトリをローカルコンピュータにダウンロードします。

  ![GitHubからダウンロード](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-1-download-trivia-repository.png)

2. ZIPファイルをダウンロードしたら、ローカルコンピュータの任意の場所で解凍してください。

3. SDK for ASK を利用するため、Node.js をインストールし nmp を最新バージョンにアップデートしてください。これらを自分のコンピュータでのセットアップする手順は、[こちら](https://docs.npmjs.com/getting-started/installing-node)を参照してください。

4. ソースのダウンロードと Node.js のインストール、npm のアップロードができたら、Alexa SDKをインストールするための準備は完了です。Alexa SDKを lambda/custom/index.js ファイルと同じディレクトリにインストールします。スキルの custom ディレクトリに移動し、コマンドラインで次のようにタイプしてください:

  `
  npm install --save alexa-sdk
  `
    
  Alexa SDK がインストールされたら、ソースファイルを圧縮して AWS Lambda にアップロードする際、**node_modules** ディレクトリをスキルのソースコードに含める必要があります。

5. ステップ4 のサンプルリポジトリのダウンロード、および Alexa SDK をインストールしたところに移動してください。 つまり、**lambda/custom** ディレクトリの下に移動してください。

  ![custom diretory](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-4-src-directory.png)

6. custom ディレクトリに含まれるファイルを圧縮しzipファイルを作成してください。 **重要** : custom ディレクトリ自体を圧縮しないでください。ディレクトリ内のファイル、つまり index.js と question.js、node_modules フォルダの３つを圧縮してください。圧縮ファイルは custom ディレクトリの中に作成されているはずです。このzipファイルは後のステップで利用します。

  ![アーカイブ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-5-archive.png)

7. [aws.amazon.com](http://aws.amazon.com)にサインインしてコンソールを開きます。まだアカウントを持っていない場合は、アカウントを作成する必要があります。[新規AWSアカウントの作成手順](../set-up-aws.md)を参考にしてください。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-1-sign-in-to-the-console.png)

8.  **AWS リージョン** を確認します。Alexa Skills Kit が利用できる Lambda のリージョンは2017年11月時点では、アジアパシフィック (東京)、米国東部 (バージニア北部)、米国西部 (オレゴン)、EU (アイルランド)の４つです。スキルのユーザーに最も近いリージョンを選択します。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-8-check-region.png)

9.  **関数の作成** ボタンをクリックします。画面の右上にあります。初めて Lambda 関数を作成する場合、このボタンは表示されません。その場合は画面中央に表示されるブルーの **「いますぐ始める」** ボタンをクリックしてください。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-4-create-a-lambda-function.png)

10.  画面の上にあるメニューバーから **サービス** を選び、検索窓に **Lambda** と入力します。サービス一覧からも選択することができます。Lambda は「コンピューティング」のセクションにあります。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-2-services-lambda.png)

11. このスキルでは、ブループリントのテンプレートは使用しないので、画面右上の **「一から作成」** ボタンをクリックします。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-11-create-from-scratch.png)

12.  **基本的な情報** この画面は Lambda 関数で重要な項目を入力します。これらの値はあなたにしか見えませんが、関数名は何か意味のある名前をつけるようにしてください。もし、特に案がないのであれば、ここでは「TriviaSkill」でも良いでしょう。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-7-configure-your-function.png)

13.  **Lambda 関数用 IAM ロールの設定**  ロールがまだない場合は[初めてLambda用ロールを作成する場合の手順](../lambda-role.md)を参考に作成します。すでにこの手順を行なったことがある場合は、 **既存のロール** の値を「lambda\_basic\_execution」に設定してください。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-9-lambda-function-role.png)
	
14. ここまでの設定が終わったら **「関数の作成」** ボタンをクリックします。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-11-create-function-button.png)

15.  **トリガーの設定** 「トリガー」のタブをクリックしてトリガーの設定画面を表示し、**「＋トリガーを追加」** をクリックします。点線枠のボックスをクリックするとポップアップメニューが表示されます。リストから **Alexa Skills Kit** を選択します。Alexa Skills Kit を選択したら、**「設定」** タブをクリックして、コードの編集画面に戻ります。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-6-configure-your-trigger.png)

16. **関数コード**セクション内の **コードエントリタイプ** のプルダウンメニューから **「.ZIPファイルをアップロード」** を選択し、[ステップ1](1-voice-user-interface.md)で作成した zip ファイルをアップロードします (**注:** このzipファイルはcustomディレクトリの中身と、node_modulesサブフォルダが含まれています）。ハンドラは「index.handler」のままにしてください。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-16-code-entry-type.png)

17. その他の項目はデフォルトのままにして、画面上の **「保存」** ボタンをクリックします。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-17-save-lambda-function.png)
	
18. 最後のステップです。右上に表示されている ARN の文字列をコピーしてください。この値はこのガイドの次のセクションで必要になります。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/2-18-copy-ARN.png)

[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_connect_vui_to_code.png)](3-connect-vui-to-code.md)
