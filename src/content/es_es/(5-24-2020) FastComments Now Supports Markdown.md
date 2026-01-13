---
[category:Features]

###### [postdate]
# [postlink]FastComments Ahora Soporta Markdown[/postlink]

¡Una experiencia de comentarios más rica ha llegado a FastComments con el uso de Markdown!

{{#isPost}}

Markdown es un conjunto de convenciones para estilizar texto. Por ejemplo, para crear una palabra en negrita podríamos \*\*hacer esto\*\*. 
Insertar enlaces normales significa simplemente pegar la URL en bruto, y las imágenes funcionan como antes.

Aquí hay una hoja de trucos de Markdown, proporcionada por Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### ¿Qué sintaxis de Markdown soporta FastComments?

Soportamos completamente Markdown, excepto los encabezados. Al definir un encabezado, simplemente lo renderizamos como texto normal ya que distraen del flujo de la conversación. Los encabezados
son para contenido como publicaciones de blogs y documentos, no para conversaciones.

FastComments siempre ha soportado imágenes a través de la sintaxis [img]...[/img]. Esto seguirá siendo soportado ya que es más fácil de entender que el de Markdown.

### Mezclando contenido

Un solo comentario puede contener todas las formas de formato: markdown, enlaces, imágenes, fragmentos de código y tablas.

### Evitando ataques XSF/XSS

Anteriormente, FastComments enviaba texto plano a través de la red y lo analizaba en el cliente. Ahora, HTML se envía a través de la red, y mantenemos dos versiones de cada comentario
en nuestra base de datos para soportar funcionalidades como la edición de comentarios.

Enviar HTML directamente a los comentarios tiene sus riesgos, por lo que todos los comentarios generados se analizan y limpian para prevenir ataques de sitios cruzados y de marcos cruzados.

### Exportaciones de datos

Al exportar comentarios, obtendrás la versión que el usuario vio cuando escribió su comentario. Si deseas obtener el HTML sin procesar, contáctanos.

### Preocupaciones de rendimiento

La acumulación de características tiene la costumbre de ralentizar las cosas. Eso no es lo que queremos hacer en FastComments. 
Agregar esta función ha **reducido** el tamaño de nuestro widget del lado del cliente en ~400 bytes, de 9.53kb a 9.12kb, lo que significa tiempos de carga de página más rápidos.

Si bien teóricamente esta función podría ralentizar el mecanismo de guardado de comentarios, no hemos visto ninguna degradación del rendimiento y, como siempre, estamos monitoreando nuestras APIs.

### ¿Cómo lo obtengo?

El soporte para Markdown se ha desplegado automáticamente a todos nuestros clientes. No deberías ver demasiados cambios en el contenido publicado en tu sitio, excepto que ahora los usuarios pueden poner en negrita, subrayar y hacer algunas cosas elegantes
como crear tablas simples.

Como con todos los lanzamientos de funciones, esperamos tus comentarios y, aunque tenemos muchas pruebas automatizadas... si ves algún problema, ¡háznoslo saber!

Felices comentarios.

{{/isPost}}

---