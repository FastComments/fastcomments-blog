[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Comentar sin elegir un nombre de usuario[/postlink]

{{#unless isPost}}
FastComments can now hand each new visitor a unique, neutral username so they never have to invent one. The shared Default Username also no longer gets "taken" by the first person to use it.
{{/unless}}

{{#isPost}}

### Novedades

Si tu sitio no tiene inicio de sesión, a un visitante que quiere dejar un comentario se le ha pedido dos cosas: un correo electrónico y un nombre de usuario.  
El correo es fácil, pero el nombre de usuario tiene que ser único, será público y deben pensarlo en ese momento.

Esta versión elimina ese paso. Activa **Generate Usernames Automatically** en la personalización de tu widget, y cada nuevo visitante llega con un nombre como `BraveOtter4172` ya rellenado. Puede conservarlo o sobrescribirlo. De cualquier forma, llega a la caja de comentarios más rápido.

### Activarlo

Abre tu <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,  
busca la sección **Anonymization** y marca **Generate Usernames Automatically**. No hay nada más que configurar.

Funciona con o sin **Allow Anonymous Comments**. Si aún deseas un correo de cada comentarista, desactiva los comentarios anónimos. Los visitantes ingresan su correo, el nombre de usuario se genera para ellos, y eso es todo. Si no necesitas un correo, activa los comentarios anónimos y un visitante puede comentar sin escribir nada más que el propio comentario.

### Lo que ven los visitantes

El campo de nombre de usuario se rellena previamente con el nombre generado. Es un campo de entrada ordinario, así que cualquiera que quiera ser conocido como algo diferente simplemente lo reemplaza. No se oculta nada y no se obliga a nada.

Los nombres constan de dos palabras y un número, por lo que son legibles y neutrales. Nadie termina como `user_83729`.

### Cada nombre es único

Un nombre generado se verifica contra las cuentas existentes antes de ofrecerse, y se reserva para la sesión del navegador de ese visitante, de modo que el siguiente visitante no reciba el mismo. Los usuarios conectados, usuarios SSO y visitantes que ya han comentado nunca reciben un nombre nuevo. Conservan el que ya tienen.

Un visitante que regresa e ingresa un correo que ya ha usado se asocia a su cuenta existente, de modo que una segunda visita no crea una segunda identidad aunque el navegador se haya limpiado entre ambas.

### Corrección de error - El nombre de usuario predeterminado ahora es realmente compartido

Algunos de ustedes han estado usando **Default Username** con un valor como "Anonymous" para acercarse a esto. Eso tenía una trampa. Los nombres de usuario son únicos, así que el primer visitante que comenta como "Anonymous" con su correo posee el nombre, y al siguiente visitante con un correo diferente se le indica que el nombre de usuario está "taken".

Eso se ha corregido. El nombre de usuario predeterminado ahora se trata como un nombre de pantalla compartido en lugar de una identidad. Cada visitante que lo mantiene tiene su propia cuenta detrás de escena, y todos aparecen como "Anonymous". Los nombres de usuario que los visitantes escriben por sí mismos siguen teniendo que ser únicos, como antes.

Si configuras ambos, el nombre generado gana.

### Documentación

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a>
cubre la opción y cómo interactúa con las demás configuraciones de comentarios anónimos.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a>
cubre el comportamiento del nombre compartido.

### En conclusión

Esta característica surgió a partir de un cliente que administra un sitio donde los visitantes son pacientes que pueden dejar solo una pieza de retroalimentación. Pedirles un correo y un nombre de usuario único era una pregunta de más. Si una configuración está entre tus lectores y la caja de comentarios, háznoslo saber abajo.

¡Saludos!

{{/isPost}}