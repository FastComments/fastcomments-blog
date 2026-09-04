[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Los usuarios prohibidos ahora son buscables[/postlink]

{{#unless isPost}}
The Banned Users page now has a search row, so you can find a ban by email, name, who issued it, or the comment that caused it.
{{/unless}}

{{#isPost}}

### Novedades

La página de Usuarios prohibidos bajo Moderar comentarios ahora tiene una fila de búsqueda encima de la tabla. Hasta ahora, la única forma de navegar por esa lista era mediante los controles de Página y Cantidad por página, lo cual está bien cuando tienes una docena de prohibiciones y resulta doloroso cuando tienes varios miles.

Hay tres controles: **Search By** elige el campo, **Match** elige Contains o Equals, y **Value** es lo que buscas.

### Qué puedes buscar

**Search By** ofrece cinco opciones:

- **Any Field** - busca todo lo siguiente a la vez
- **Email** - la dirección prohibida
- **Name** - el nombre del comentarista
- **Banned By** - el moderador que emitió la prohibición
- **Banned For Saying** - el texto del comentario que provocó la prohibición del usuario

Los últimos cuatro coinciden con las columnas del mismo nombre en la tabla, por lo que el menú desplegable se lee igual que el elemento que filtra.

### Contiene vs Igual

**Contains** encuentra tu valor en cualquier parte del campo. **Equals** coincide con todo el campo.

Contains es la opción que deseas la mayor parte del tiempo. Buscar `bademail.com` encuentra todas las prohibiciones en ese dominio, incluido el veto con comodín `*@bademail.com`, porque las prohibiciones con comodín se almacenan con su asterisco intacto.

Equals es para cuando tienes el valor exacto y no deseas coincidencias aproximadas. Buscar en Email `spammer@example.com` con Equals devuelve esa única prohibición y nada más.

Ambos son insensibles a mayúsculas y minúsculas en todos los campos. Esto importa más de lo que parece: cuando se crea una prohibición a partir de un comentario, solo la mitad del dominio de la dirección se convierte a minúsculas, por lo que una prohibición puede almacenarse genuinamente como `MixedCase@Example.com`. Buscar `mixedcase@example.com` la encuentra.

### Dos búsquedas que vale la pena conocer

**Banned For Saying** busca el texto del comentario que desencadenó la prohibición. Si una frase o enlace en particular se ha difundido, puedes obtener a todos los que fueron prohibidos por ello en una sola consulta.

**Banned By** busca al moderador que emitió la prohibición. Si deseas revisar las decisiones de un moderador específico, o estás incorporando a alguien y quieres ver qué ha estado haciendo, está a una búsqueda de distancia.

### Funciona con paginación y compartición

La búsqueda se guarda en la URL de la página, por lo que al paginar los resultados se mantiene aplicada y puedes enviar una lista filtrada a otro moderador copiando la URL, de la misma manera que ya compartes enlaces de moderación. Iniciar una nueva búsqueda te lleva de vuelta a la primera página, y **Clear** te devuelve a la lista completa.

### Documentación

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">La sección de prohibición de usuarios de la Guía de moderación</a> cubre la fila de búsqueda en detalle.

### En conclusión

Esta surgió al observar cómo se usa realmente la página. Las prohibiciones se acumulan silenciosamente durante años, y luego, un día, necesitas encontrar una en particular y no hay forma de hacerlo. Ahora la hay.

Déjanos saber a continuación si hay algún campo que te gustaría poder buscar y que no esté en la lista.

¡Saludos!

{{/isPost}}