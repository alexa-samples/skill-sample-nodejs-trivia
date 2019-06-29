# Crea una skill de Trivia con Alexa
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-locked._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-on._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](./5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

## Configurando la Lambda Function utilizando Amazon Web Services

En el [primer paso de esta guia](./1-voice-user-interface.md), contruimos la Voice User Interface (VUI) para nuestra Skill de Alexa.  En esta pagina, crearemos una AWS Lambda function utlizando [Amazon Web Services](http://aws.amazon.com).  Tu puedes [leer más acerca de que es una Lambda function](http://aws.amazon.com/lambda), pero para los propositos de esta guia, tú sólo necesitas sabes que AWS Lambda es donde nuestro código vive.  Cuando un usuario le pide a Alexa usar una skill, es nuestra AWS Lambda function que interpreta la interacción adecuada, y regresa la conversación de vuelta al usuario.

1.  **Va a http://aws.amazon.com y logueate en la consola.** Si no tienes una cuenta, vas a necesitar crear una.  [Si no tienes una cuenta AWS, revisa este sitio para configurarla rapidamente.](https://github.com/alexa/alexa-cookbook/tree/master/aws/set-up-aws.md).


    [![Developer Console](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/2-1-sign-in-to-the-console._TTH_.png)](https://console.aws.amazon.com/console/home)

2.  **Click "Services" en la parte superior de la pantalla, y escribe "Lambda" en el recuadro de busqueda.**  Tu puedes encontrar Lambda tambien en la lista de servicios. Está en la sección de "Compute".

    [![Lambda](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/2-2-services-lambda._TTH_.png)](https://console.aws.amazon.com/lambda/home)

3.  **Verifica tu región AWS.** AWS Lambda solo trabaja con el Alexa Skills Kit en estas regiones: US East (N. Virginia), US West (Oregon), Asia Pacific (Tokyo)  and EU (Ireland).  Asegurate de elegir la región más cercana a tus usuarios.
ß
    ![Revisa la Región](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/2-3-check-region._TTH_.png)

4.  **Da click en el botón naranja "Create function".** Debe estar cerca a la parte superior de tu pantalla.  (Si no ves el botón, es por que nunca has creado una Lambda function antes.  Click en el botón azul "Get Started" cerca del centro de tu pantalla.)

    ![Crea una lambda function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/2-4-create-a-lambda-function._TTH_.png)

5.  Hay tres recuadros con las siguientes leyendas: "Author from scratch", "Blueprints" and "Serverless Application Repository". **Click en el botón circular "Serverless Application Repository"** Hemos creado un atajo para tener todo configurado para tu Skill.

6. **Busca el repositorio de aplicación llamado: "alexa-skills-kit-nodejs-triviaskill".** Puedes encontrarlo buscando en el recuadro de busqueda.  

7. **Click en el repositorio.** Este repositorio va a crear la Lambda function, agrega el Alexa Skills Kit como un trigger (Disparador), y configura "IAM role" para tu rol de seguridad. También agregará codigo de este repositorio de GitHub e incluirá todas las dependencias de la Lambda function así no tendrás que subirlas tu mismo al sistema.

    <!-- <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/2-5-blueprint._TTH_.png" />  <!--TODO: THIS IMAGE NEEDS TO BE CUSTOMIZED FOR YOUR SKILL TEMPLATE, THIS ONE IS OUT OF DATE. -->
8. **Click en el botón deploy** en la parte inferior de la pagina.

9. Espera a que el Estatus de todos los recursos cambie a **CREATE_COMPLETE**

10. Click en el botón **Test App** para ir a la consola de Lambda.

11. **Abre** la función que **acabas de crear** haciendo click en ella.

12. Si quieres agregar seguridad **secure this Lambda function** sigue las instrucciones de [Aquí](https://github.com/alexa/alexa-cookbook/blob/master/aws/secure-lambda-function.md)


13. Navega hacia abajo en la pagina hasta que veas **el código de la Función**.

14. Copia el [código de aquí](https://github.com/alexa/skill-sample-nodejs-trivia/blob/en-US/lambda/custom/index.js) en el cuadro de código de la función Lambda. Borra el contenido del cuadro, y pega el nuevo código. Click en "Save".

15. Tu deberias poder ver el Amazon Resource Name (ARN) El indentificador único de la función Lambda que se encuentra en la parte superior derecha de la pagina. **Copia el valor ARN de la función Lambda** para usar en la siguiente sección de esta guía.

    ![Copy ARN](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/2-12-copy-ARN._TTH_.png)
<!--TODO: THIS IMAGE NEEDS TO BE CUSTOMIZED FOR YOUR SKILL TEMPLATE. -->

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_connect_vui_to_code._TTH_.png)](./3-connect-vui-to-code.md)
