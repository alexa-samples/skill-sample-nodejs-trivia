# Alexa トリビアスキルの開発
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-on.png)](1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-off.png)](2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off.png)](3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)

## 開発者ポータルで Alexa スキルの設定を行う

スキルの管理は Amazon 開発者ポータルで行います。作成する Lambda 関数と[開発者ポータル](https://developer.amazon.com/)で定義するスキルの関連付けを後ほど行います。

1. まず [Amazon開発者ポータル](http://developer.amazon.com) を開き、右上にある **サインイン** ボタンをクリックします。もし、まだアカウントを持っていない場合でも、無料で新規アカウントを作成することができます。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-1-developer-portal.png)

2. サインイン後、画面の上にある **ALEXA** タブをクリックします。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-2-alexa-button.png)

3. **ALEXA** のページが開いたら、**Alexa Skills Kit** の **始める** ボタンをクリックします。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-3-alexa-skills-kit.png)

4. **新しいスキルを追加する** ボタンをクリックします。 

  新しい Alexa スキルの設定画面の最初のページが開きます。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-4-add-a-new-skill.png)

5. **スキル情報** ページに必要な情報を入力してください。 

  入力の際、下記のヒントを参考にしてください。

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-5-skill-information.png)

  ### スキル情報 TIPS

   1.  **スキルの種類** 	今回のは「カスタム対話モデル」を使用してスキルを作成します。デフォルトで選択されます。

   2.  **言語** 	サポートしたい最初の言語を選択します。後から他の言語を追加することもできます。(このガイドでは「Japanese」を選択して始めます。)

   3.  **スキル名**　Alexa スキルストアでユーザーに表示される名前です。ユーザーがスキル名を指定するときに使います。

   4.  **呼び出し名**　ユーザーがスキルを呼び出す際に使う名前です。以下に開発者にありがちな問題の例をいくつかあげておきますが、まずは[カスタムスキルの呼び出し名を決定する](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill)に目を通して置くと良いでしょう。
    
   5.  **AudioPlayer** 今回の豆知識スキルではオーディオファイルは使用しないので「いいえ」を選択してください。スキルにオーディオを追加する方法について知りたい場合は、[Audio Player ガイド](https://github.com/alexa/skill-sample-nodejs-audio-player)を参照してください。

6. **次へ** ボタンをクリックし **対話モデル** のページに移動します。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-6-next-button.png)

7. **スキルビルダーを起動する** ボタンをクリックします。スキルビルダーのダッシュボードが開きます。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-7-skill-builder-launch.png)

8. ダッシュボードの左上にある **Intents** の右にある **Add+** をクリックします。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-8-intents-button.png)

9. 現れたテキストボックスの中にインテント名: **GetAnswerIntent** を入力し **「Create Intent」** ボタンをクリックします。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-9-add-custom-intent-GetAnserIntent.png)

10. テキストボックスに、ユーザーがクイズの回答を番号で答える際のサンプル発話 (Sample Utterances) をできるだけ多く追加してください。以下にいくつかの例をあげます。**{Answer}** の部分がスロットと呼ばれる変数になります。
	
 * {Answer} です
 * {Answer} かな
 * {Answer} だと思う
 * {Answer}<br>

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-10-sample-utterances.png)

11. 画面右側のボックスを見ると {Answer} スロットが追加されていることがわかります。スロットには数字や日付、都市名といったスロットタイプを指定する必要があります。ここではユーザーは数字を使って答えるため、**AMAZON.NUMBER** を選択します。スロットタイプについて詳しくは[こちら](https://developer.amazon.com/ja/docs/custom-skills/slot-type-reference.html)を参照してください。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-11-slots-setting.png)

12. ステップ10と同様の手順で、今度はユーザーが質問に答えられない場合のサンプル発話 **DontKnowIntent** も追加しましょう。以下に入力例をあげます。

 * パス
 * スキップ
 * わかりません
 * 知りません
 
 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-12-dontknowintent-utterance.png)

13. ここまでの入力が完了したら **Save Model** ボタンをクリックし、続いて **Build Model** ボタンをクリックします。ビルドには少々時間がかかります。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-12-skill-builder-build-save-model.png)

14. 対話モデルが問題なくビルドされたら、 **Configuration** ボタンをクリックし、設定の画面に移動してください。このガイドの次のステップでは、AWS 開発者コンソールから Lambda 関数を作成します。このブラウザのタブは開いたままにしておいてください。[3ページ: VUIとコードを接続する](3-connect-vui-to-code.md)で再びこの画面に戻ってきます。

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/trivia/1-13-skill-builder-configuration.png)

  もし、対話モデルでエラーが発生するようであれば、下記を確認してください。

  * コードを正しく適切なボックスにコピー&ペーストしましたか？
  * 対話モデルもしくはサンプル発話に誤った文字を入力していませんか？

15. ここまで終わったら、下のボタンをクリックして Lambda 関数に進んでください。

[![Lambda関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_lambda_function.png)](2-lambda-function.md)
