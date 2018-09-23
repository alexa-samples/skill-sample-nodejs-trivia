# Crea una skill de Trivia con Alexa
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-locked._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-locked._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-on._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](./5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

## Conecta Tu Voice User Interface a tu Lambda Function

En [page #1](./1-voice-user-interface.md) de esta guía, creamos una voice user interface para los intents y utterances que esperamos recibir de los usuarios.  On [page #2](./2-lambda-function.md), creamos una Lambda function que contiene toda la lógica para nuestra skill.  En esta pagina, conectaremos éstas dos piezas juntas.

1.  **Regresa al [Amazon Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=trivia-nodejs-V2_GUI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_trivia-nodejs-V2_GUI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) y seleciona tu skill de la lista.** Probablemente todavia tengas la pagina abierta en una pestaña de tu navegador si vas siguiendo esta guía.

2. Selecciona la pestaña **Endpoint** en la parte izquierda del panel de navegación.

3.  **Selecciona la opción "AWS Lambda ARN" para tu endpoint.** Tu tienes la opción de hospedar tu código en donde tu quieras, pero para propositos de de simplicidad y por economía, estamos usando AWS Lambda. ([Lee más de como hospedar tu skill personalizada en un web service](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-web-service?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=trivia-nodejs-V2_GUI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_trivia-nodejs-V2_GUI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).)  Con el AWS Free Tier (Promoción), tu tienes 1,000,000 de request gratis,y más 3.2 million segundos de computación en la nube por mes. Para más información en [aws.amazon.com/free](https://aws.amazon.com/free/).  Además Amazon ahora ofrece [AWS Promotional Credits para desarroladores que tengas una skill de Alexa y que tengas costos relacionados a ella](https://developer.amazon.com/alexa-skills-kit/alexa-aws-credits?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=trivia-nodejs-V2_GUI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_trivia-nodejs-V2_GUI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).

4.  Pega tu ARN (Amazon Resource Name) en el cuadro de **Default Region**.

5. Click en el botón **Save Endpoints** en la parte de arriba del panel principal.

6. **Click en el botón "Next" para continuar a la pagina #4 de esta guía.**

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_testing._TTH_.png)](./4-testing.md)
