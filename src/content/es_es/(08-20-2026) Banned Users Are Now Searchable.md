[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Los usuarios prohibidos ahora son buscables[/postlink]

{{#unless isPost}}
La página de usuarios prohibidos ahora tiene una fila de búsqueda, para que puedas encontrar una prohibición por correo electrónico, nombre, quién la emitió o el comentario que la provocó.
{{/unless}}

{{#isPost}}

### What's New

La página de usuarios prohibidos bajo Moderar Comentarios ahora tiene una fila de búsqueda encima de la tabla. Hasta ahora, la única forma de navegar por esa lista era mediante los controles de Página y Cantidad por Página, lo cual está bien cuando tienes una docena de prohibiciones y resulta doloroso cuando tienes varios miles.

Hay tres controles: **Search By** elige el campo, **Match** elige Contiene o Igual, y **Value** es lo que estás buscando.

### Qué puedes buscar

**Search By** ofrece cinco opciones:

- **Any Field** - busca todo lo siguiente a la vez
- **Email** - la dirección prohibida
- **Name** - el nombre registrado en la prohibición
- **Banned By** - el moderador que emitió la prohibición
- **Banned For Saying** - el texto del comentario que provocó la prohibición del usuario

Los últimos cuatro coinciden con las columnas del mismo nombre en la tabla, por lo que el menú desplegable se lee igual que el elemento que filtra.

### Contiene vs Igual

**Contains** encuentra tu valor en cualquier parte del campo. **Equals** coincide con todo el campo.

Contiene es lo que normalmente deseas. Buscar `bademail.com` encuentra todas las prohibiciones en ese dominio, incluido el veto comodín `*@bademail.com`, porque las prohibiciones comodín se almacenan con su asterisco intacto.

Igual es para cuando tienes el valor exacto y no deseas coincidencias aproximadas. Buscar en Email `spammer@example.com` con Igual devuelve esa única prohibición y nada más.

Ambos son insensibles a mayúsculas y minúsculas en todos los campos. Esto importa más de lo que parece: cuando una prohibición se crea a partir de un comentario, solo la mitad del dominio de la dirección se convierte a minúsculas, por lo que una prohibición puede almacenarse genuinamente como `MixedCase@Example.com`. Buscar `mixedcase@example.com` la encuentra.

### Dos búsquedas que vale la pena conocer

**Banned For Saying** busca el texto del comentario que desencadenó la prohibición. Si una frase o enlace particular se ha difundido, puedes obtener a todos los que fueron prohibidos por ello en una sola consulta.

**Banned By** busca al moderador que emitió la prohibición. Si deseas revisar las decisiones de un moderador específico, o estás incorporando a alguien y quieres ver qué ha estado haciendo, está a una búsqueda de distancia.

### Funciona con paginación y compartición

La búsqueda se guarda en la URL de la página, por lo que al paginar los resultados se mantiene aplicada y puedes enviar una lista filtrada a otro moderador copiando la URL, de la misma manera que ya compartes enlaces de moderación. Iniciar una nueva búsqueda te lleva de vuelta a la primera página, y **Clear** te devuelve a la lista completa.

### La búsqueda por nombre coincide con lo que ves

Una prohibición almacena el nombre que el usuario tenía cuando lo prohibiste, pero la tabla muestra el nombre que tiene ahora. No siempre son los mismos, y una prohibición que creaste ingresando una dirección de correo electrónico no tiene ningún nombre almacenado.

Por lo tanto, la búsqueda por Nombre resuelve el usuario detrás de cada prohibición y coincide con el nombre que la tabla está mostrando. Si alguien fue prohibido como "OldHandle" y desde entonces cambió a "NewHandle", ambos lo encuentran. Si prohibiste una dirección y la tabla muestra un nombre para ella, buscar ese nombre funciona.

### Documentación

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">La sección de prohibición de usuarios de la Guía de Moderación</a> cubre la fila de búsqueda en detalle.

### En conclusión

Esta surgió al observar cómo se usa realmente la página. Las prohibiciones se acumulan silenciosamente durante años, y luego, un día, necesitas encontrar una en particular y no hay forma de hacerlo. Ahora la hay.

Déjanos saber a continuación si hay algún campo que te gustaría poder buscar y que no esté en la lista.

¡Saludos!

{{/isPost}}

---