---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Los idiomas utilizados en los comentarios ahora pueden ser limitados[/postlink]

{{#unless isPost}}
Algunas comunidades quieren restringir los idiomas utilizados. Esto ahora se puede hacer con FastComments.
{{/unless}}

{{#isPost}}

### Novedades

FastComments siempre ha tratado de soportar la mayor cantidad de idiomas y locales posibles.

Sin embargo, algunas comunidades quieren limitar los idiomas utilizados para comunicarse y escribir comentarios.

En lugar de imponer esto como una regla, y potencialmente prohibir a los usuarios, ahora se puede configurar explícitamente en la plataforma.

### Cómo configurarlo

En la misma interfaz de personalización de widgets con la que probablemente estés familiarizado, ahora puedes seleccionar uno o más idiomas en los que se pueden escribir comentarios.

La plataforma, al enviar un comentario, intentará determinar el idioma del comentario en tiempo real. Si la confianza en el idioma determinado es superior al 70%, y coincide con un idioma permitido, entonces el comentario es aceptado.

Si el comentario escrito no está en un idioma definido por tu configuración, se mostrará un mensaje de error al usuario en su propio idioma.

### Impacto para desarrolladores

Esta configuración afectará también a los comentarios guardados a través de la API.

Recibirás un error como el siguiente:

            status: 'failed',
            reason: `El comentario parece ser uno de estos idiomas: [es], pero solo se permiten [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Un mensaje de error en el idioma del usuario."

### En conclusión

Como todas las versiones importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háznos saber
abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---