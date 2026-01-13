---
[category:Features]

###### [postdate]
# [postlink]Soporte Sencillo para Fragmentos de Código con FastComments[/postlink]

Algunos de nuestros clientes tienen sitios y blogs relacionados con el desarrollo de software. En estas comunidades es común compartir fragmentos de código. Aquí te mostramos cómo FastComments lo hace fácil.

{{#isPost}}

FastComments permite compartir código simplemente pegándolo en el cuadro de comentarios. Puede mezclarse con otro texto e imágenes, y no requiere que añadas manualmente ningún tipo de etiquetas de "código" para agregar el formato. ¡Simplemente pega!

Aquí hay una rápida demostración mostrándolo en acción.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demostración de Compartición de Fragmentos de Código" title="Demostración de Compartición de Fragmentos de Código"></video>

### Implicaciones de Rendimiento

Agregar esta función ha sumado solo ~150 bytes al widget del lado del cliente ya que la mayor parte de la funcionalidad se maneja del lado del servidor. De hecho, si lo agrupas con las recientes características de Markdown agregadas, el tamaño del widget en realidad ha disminuido con estas nuevas funciones.

### Cosas a Tener en Cuenta

Si tienes una comunidad que comparte mucho código, deberías considerar aumentar el tamaño máximo de los comentarios para facilitar el intercambio de fragmentos de código. Esto se hace a través de la pestaña "Personalizar" en el panel de administración.

### Detección de Código

Con el fin de mantener el tamaño del widget del lado del cliente bajo, solo detectaremos automáticamente el código pegado para lenguajes tipo C y Python (Java, JavaScript, CSS, C++, por ejemplo) que usen "{" o espacios para el flujo de control. Si comúnmente usas un lenguaje que no está siendo detectado automáticamente, contáctanos.

Para insertar manualmente un bloque de código, escribe un comentario como: ```<code>(defun someLispCode(1, 2, 3))</code>```. Podemos detectar automáticamente alrededor de 150 lenguajes.

### Migrando Comentarios Existentes

Si te gustaría migrar a FastComments y tienes muchos comentarios que contienen fragmentos de código que te gustaría formatear correctamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">podemos ayudarte</a>.

### En Conclusión

¡Eso es todo! Hemos implementado esto en todas las comunidades en línea de FastComments.

¡Feliz comentado!

{{/isPost}}