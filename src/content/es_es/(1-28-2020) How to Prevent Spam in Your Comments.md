---
[category:Moderación]
[category:Tutoriales]
###### [postdate]
# [postlink]Cómo Prevenir Spam en Tus Comentarios[/postlink]

No hay forma de combatir el spam al 100%. Pero FastComments implementa una serie de medidas para ayudar.

{{#isPost}}

## Documentación para Administradores del Sitio

Una instalación predeterminada de FastComments tiene habilitados tanto el filtrado de Spam como de Lenguaje Grosero.

Estas configuraciones predeterminadas logran un equilibrio entre prevenir el spam y no ser demasiado intrusivas para la mayoría de las comunidades.

[Quizás quieras consultar la guía de moderación](https://docs.fastcomments.com/guide-moderation.html).

## Cómo Funciona

Nuestro filtro de spam utiliza un [clasificador de Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) para identificar el spam.

Se entrena con el tiempo basándose en lo que los administradores marcan como spam y no spam.

FastComments se ejecuta en un iframe en tu sitio. Esto hace que sea más difícil para los bots de spam automatizados dirigirse a tu sección de comentarios. Sin embargo, si lo hacen
y nuestro clasificador determina que sus comentarios son "spammys", serán ocultados de tus usuarios. Al igual que todos los demás comentarios, también se marcan como
"necesita revisión" en la [página de moderación](https://fastcomments.com/auth/my-account/moderate-comments) del panel de control.

El filtrado de lenguaje grosero, sin embargo, no resulta en comentarios ocultos por defecto. Simplemente enmascarará las "malas palabras" con asteriscos.

## Bloqueo Completo de Spam

Por defecto, FastComments permitirá el spam, pero lo ocultará y lo marcará para revisión.

Si deseas avisar al usuario que su comentario fue detectado como spam y pedirle que lo revise, esto se puede hacer en [Configuraciones de Moderación](https://fastcomments.com/auth/my-account/moderate-comments/settings)
habilitando la configuración `Block Spam`.

## Ocultando Comentarios Groseros

Los comentarios groseros pueden ser ocultados habilitando `Automatically Send Profane Comments to Spam` en [Configuraciones de Moderación](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Configuraciones

Tanto el filtrado de lenguaje grosero como el de spam se pueden desactivar individualmente en la página de [Configuraciones de Moderación](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verificación de Comentarios

FastComments emplea un sistema de verificación donde, por defecto, [los comentarios no verificados](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) se marcan como tales para que todos los usuarios lo vean.

Permitir a los usuarios comentar sin estar completamente conectados reduce la barrera de entrada para participar en una discusión. La etiqueta de no verificado se puede ocultar mediante reglas de personalización.

Los comentarios no verificados se muestran por defecto, pero se pueden ocultar hasta que sean verificados por correo electrónico, activando `Only Auto Approve Verified Comments`.

Ten en cuenta que con SSO, todos los comentarios siempre están verificados. Si un usuario está en una sesión verificada, sus comentarios también estarán siempre verificados.

Los comentarios no verificados también se pueden programar para su eliminación.

## Para Comentadores

Si tu comentario es detectado como spam, verás un mensaje de inmediato. Esto es para informarte que el comentario deberá ser revisado
antes de que se muestre a otros. La detección de spam no puede ser 100% precisa, así que entendemos si experimentas algo de frustración. Si tu comentario es legítimo, el
administrador del sitio debería reconocerlo y marcar tu comentario como no-spam.

{{/isPost}}

---