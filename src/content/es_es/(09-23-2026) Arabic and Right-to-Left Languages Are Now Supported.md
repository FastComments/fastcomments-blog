[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Árabe y los Idiomas de Derecha a Izquierda Ahora Son Compatibles[/postlink]

{{#unless isPost}}
FastComments ahora habla árabe, y cada parte de FastComments se muestra de derecha a izquierda para árabe y hebreo. Los contadores como "3 comentarios" también usan ahora la forma plural correcta en cada idioma.
{{/unless}}

{{#isPost}}

### Novedades

El árabe es ahora un idioma compatible, con el código de locale `ar`. El widget de comentarios, los demás widgets incrustables, los correos electrónicos, el panel de control y el sitio de marketing están todos traducidos.

El árabe también se escribe de derecha a izquierda, por lo que añadirlo implicó enseñar a FastComments a organizarse en ambas direcciones. Esa corrección también se aplica al hebreo.

### Diseño de Derecha a Izquierda

Cuando el locale es árabe o hebreo, toda la interfaz se invierte. El avatar, el nombre y los controles de respuesta en un comentario cambian de lado, los menús y desplegables se abren hacia el borde correcto, y las flechas apuntan en la dirección en que lees. Esto cubre el widget de comentarios y sus extensiones como chat en vivo y encuestas, los widgets de tickets, chat colaborativo y resumen de reseñas, los correos electrónicos y el panel de control.

No hay nada que configurar, salvo establecer tu locale manualmente para tu usuario si lo deseas.

### Los Comentarios Mantienen su Propia Dirección

A veces una sección de comentarios está en varios idiomas. Un comentario en inglés en una página árabe, o un comentario en árabe en una página en inglés, debe seguir leyendo de forma natural.

Cada comentario y nombre de usuario sigue la dirección de su propio texto. En una página en inglés, una respuesta en árabe se lee de derecha a izquierda mientras que los comentarios a su alrededor se leen de izquierda a derecha, y lo inverso ocurre en una página árabe. Los bloques de código dentro de los comentarios siempre se leen de izquierda a derecha, ya que el código lo hace.

### Configuración del Locale

Por defecto, el widget toma el locale del navegador del visitante, por lo que los hablantes de árabe obtienen árabe automáticamente. Para forzarlo, establece el locale en la página de personalización del widget bajo "Locale / Language", o en código:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Si utilizas SSO, pasa `locale: 'ar'` en el objeto de usuario para que sus correos electrónicos también lleguen en árabe.

### Plurales, Hechos Correctamente

El inglés tiene dos formas para un conteo: "1 comentario" y "2 comentarios". El árabe tiene formas separadas para uno, dos, de tres a diez, y de once a noventa y nueve, y vuelve a usar el singular para cien. El ruso, ucraniano, polaco, croata, serbio, esloveno y hebreo también tienen sus propias reglas.

Hasta ahora FastComments solo conocía "uno" y "todo lo demás", por lo que un lector ruso podía ver la forma nominal incorrecta para 2 o 5 comentarios. Cada cadena con un conteo ahora elige la forma correcta para su idioma, en el widget, los correos electrónicos y el panel de control.

Mientras estábamos allí, revisamos cada cadena de conteo en todos los idiomas. Eso reveló una serie de traducciones erróneas antiguas que ahora están corregidas. Por ejemplo, en algunos idiomas la palabra para "reply" era el verbo "to reply", de modo que un comentario mostraba "1 Reply" como equivalente a "1 To reply".

Si has personalizado el texto de un conteo, como la etiqueta "comments", tu texto sigue utilizándose para cada conteo.

### Encontrar tu idioma

Los selectores de idioma en el panel de control ahora muestran el nombre propio de cada idioma junto al inglés, como "Arabic (العربية)" y "German (Germany) (Deutsch)". Si alguien llega al idioma incorrecto, aún puede encontrar el suyo.

### Documentación

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Guía de Idiomas Compatibles</a> lista cada código de locale y cubre el comportamiento de derecha a izquierda. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">La opción locale</a> cubre forzar un locale en el widget.

Esto se basa en [nuestra primera versión de localización](/(2-05-2020)-fastcomments-gets-localized.html) de 2020, que comenzó con tres idiomas. Ahora contamos con veintiocho locales.

### En Conclusión

Nos alegra poder llevar FastComments a los hablantes de árabe, y ofrecer una mejor experiencia a los hablantes de hebreo. Si detectas una traducción que suena incorrecta en tu idioma, háznoslo saber abajo y la corregiremos.

¡Saludos!

{{/isPost}}