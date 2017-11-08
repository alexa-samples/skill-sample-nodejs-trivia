Regions: [🇺🇸](../../tree/en-US)

# Alexa トリビアスキルの開発 🇯🇵
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-off.png)](instructions/1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-off._TTH_.png)](instructions/2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off._TTH_.png)](instructions/3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off._TTH_.png)](instructions/4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off._TTH_.png)](instructions/5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off._TTH_.png)](instructions/6-publication.md)

このテンプレートは、[AWS Lambda](https://aws.amazon.com/lambda/)、[Alexa Skills Kit (ASK)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)、[ASK SDK](https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js)を活用し、ビジネスロジック、多言語サポート、ユースケース、エラーハンドリング、ヘルプ機能などの実装例を提供します。
コンテンツのアイデア(例えばサンタクローストリビア)を考えて、そのコンテンツをこのサンプルに埋め込むだけで新しいスキルを作ることができます。Alexa スキルの開発から公開までのステップを一通り学習するのにとても適しています。

このチュートリアルでは、始めて Alexa スキルを作成する開発者を対象に、「トナカイトリビア」と呼ばれるトリビアスキルのテンプレートを使って、スキル開発に必要な全てのステップを説明します。JavaSciript / Node.js (もしくは類似のプログラミング言語)と Alexa Skills Kit をある程度知っていることを前提としています。

Alexa Skills Kit を利用することで、音声リクエストを受け取り、音声によるレスポンスを返すアプリケーションを Alexa サービス上に構築することができます。このチュートリアルを辿ることで、Alexa からのリクエストを処理するウェブサービスを作成し、そのサービスを Amazon 開発者ポータルに登録して、あなたのデバイスや、認定を取得すればすべてのユーザーのデバイスで利用できるようになります。

 このチュートリアルを修了すると、以下のことができるようになります。

   * **パラメータに基づくスキルを作成する** 

   このチュートリアルでは、始めて Alexa スキルを作成する開発者を対象に、「トナカイトリビア」と呼ばれるトリビアスキルのテンプレートを使って、パラメータに基づくスキル開発に必要なステップの全てを説明します。
   
   * **基本的な VUI 設計を理解する**

   開発するにあたって、テンプレートからコピー＆ペーストをしながらスキルを作成することで、音声ユーザーインターフェース (VUI) の基本を学ぶことができます。最終的にはスキルを公開することも可能です。このチュートリアルでは、スキルのカスタマイズ方法や、公開申請の方法についても説明しています。Alexa Skills Kit を使った音声エクスペリエンスの設計については[こちらのビデオ](https://goto.webcasts.com/starthere.jsp?ei=1087592)も参考になるでしょう。
   
   * **JavaScript/Node.js と Alexa Skills Kit を使ってスキルを開発する**

   スキル開発のガイドとしてテンプレートを使用しますが、あなた次第でカスタマイズすることができます。Alexa Skills Kit のより基本的な情報については [こちらのビデオ](https://goto.webcasts.com/starthere.jsp?ei=1087595)を参照してください。
   
   * **スキルを公開する** 

   スキルの開発が完了したら、このチュートリアルのガイドに従ってスキルをテストし、公開申請を行い、すべての Alexa ユーザが利用できるようにしましょう。

**それでは、始めましょう**
	
[![始めましょう](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_get_started.png)](instructions/1-voice-user-interface.md)
