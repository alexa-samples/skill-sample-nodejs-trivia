# Crea una skill de Trivia con Alexa 
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-on._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./4-testing.md)[![Personalización](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](./5-customization.md)[![Publicación](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

1.  **Ir a el[Portal de Desarrollador Amazon](http://developer.amazon.com?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=trivia-nodejs-V2_GUI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_trivia-nodejs-V2_GUI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).  En la parte superior derecha de la pantalla, click en el botón "Sign In".**
(Si no tienes una cuenta, puedes registra una nueva cuenta gratis.)

2.  Una vez que hayas abierto la sesión, mueve el mouse hacia **Your Alexa Consoles** en la parte de arriba de la pantalla y selecciona nueva **Skills (New)** Link.

3.  Desde **Alexa Skills Console (New Console)** selecciona **Create Skill** el botón cercano a la parte superior de la pantalla.

4. Dale un nombre a tu nueva Skill (*Name**). Este es el nombre que aparecerá en la tieda de skill de amazon, y el nombre de tu usuario como referencia. Presiona next.

5. Selecciona modelo **Custom** en la parte superior de la pagina para agregar tu skill y selecciona el botón **Create Skill** en la parte superior derecha.

6. **Crea el "Interaction Model" para tu skill**
	1. En la parte izquierda del panel de navegación. selecciona la **Invocation** tab. Entra a **Skill Invocation Name**. Este es el nombre que tus usuarios van a necesitar decir para usar tu aplicación.
	2. Siguiente, selecciona el **JSON Editor** tab. En el texto que aparece ahi, reemplaza cualquier tipo de codigo con el [Interaction Model](../models) (Asegurate de seleccionar el modelo que coincide con tu idioma, en este caso español MX), y da click en "Build Model".

	**Nota:** Tú deberias notar que **Intents** y **Slot Types** se rellenarán basados en el JSON Interaction Model que acabas de aplicar a tu skill. Sé libre de explorar cambios en esa parte, para aprender acerca de **Intents**, **Slots**, y **Utterances** abre nuestro [technical documentation en una nueva pestaña](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=trivia-nodejs-V2_GUI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_trivia-nodejs-V2_GUI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).

7. **Opcional:** Selecciona un intent expandiento el menú de **Intents** en la parte izquierda del menú de navegación. Agrega más ejemplos de utterances para tus nuevos generados intents. Piensa en todas las diferentes maneras en que el usuario puede pedir que un especifico intent suceda. Se agregaron algunos ejemplos. Asegurate de dar click en **Save Model** y en **Build Model** después de que termines de realizar tus cambios aquí.

8. Si tu interaction model se creó satisfactoriamente, continua con el siguiente paso. Sí no, deberia aparecer un error. Intenta resolver los errores que aparecieron. En la siguiente etapa de esta guía, vamos a crear una Lambda function en el AWS developer console, pero manten está pestaña abierta, porque vamos a regresar a ella en [Page #3: Connect VUI to Code](./3-connect-vui-to-code.md).


     Si tienes errores en tu interaction model, puedes revisar esta lista:

     *  **¿Copiaste y pegaste el código proporcionado de manera correcta?**
     *  **¿Accidentalmente agregaste algun caractér al Interaction Model ó a los ejemplos de Utterances?**

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_lambda_function._TTH_.png)](./2-lambda-function.md)
