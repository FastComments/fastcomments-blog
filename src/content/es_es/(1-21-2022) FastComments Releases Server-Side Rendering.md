---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Lanza Renderizado del Lado del Servidor[/postlink]

{{#unless isPost}}
Agrega comentarios a tu sitio sin el uso de JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

## Novedades

Desde su lanzamiento a principios de 2020, FastComments ha utilizado exclusivamente JavaScript para renderizar el widget de comentarios.

¿Qué pasaría si te dijéramos que podrías tener casi toda la misma funcionalidad esencial, pero sin usar JS?

<div class="text-center">
    <div class="sm">Esta es una captura de pantalla, deja de intentar hacer clic en ella.</div>
    <img src="images/ssr-demo.png" alt="Demostración de SSR" title="Demostración de SSR" />
</div>

La captura de pantalla anterior es el widget de comentarios de FastComments, sin JavaScript. [Puedes ver esta página, sin JavaScript, aquí.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Cómo Usarlo

Si estás usando WordPress, la versión 3.10.1 del plugin FastComments agrega automáticamente soporte para SSR como una alternativa para los usuarios que navegan con JS deshabilitado.

Para implementaciones personalizadas, obtén la interfaz de usuario para un hilo de comentarios, simplemente llama a `/ssr/comments` para esa página:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Donde `$urlId` es la url, o id, de la página. La documentación sobre esto está [aquí](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Por ejemplo, con PHP podemos enviar un iframe a la página que renderiza el hilo de comentarios dentro:

<div class="code"><div class="title">Ejemplo de SSR Basado en PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

También podríamos hacer una llamada a la API para obtener el HTML de un hilo de comentarios, y renderizarlo o almacenarlo.

La documentación completa está disponible en los [Documentos de SSR en docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Porque nos encantan los acrónimos que suenan a empresa, no te preocupes, SSR admite SSO. [Un ejemplo de Inicio de Sesión Único con SSR está aquí.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Localización

El endpoint basado en SSR localiza automáticamente la respuesta según los encabezados de idioma que envía el navegador. También puede usar las mismas sobreescrituras de localización que el widget basado en JavaScript.

## Por Qué Se Creó Esto

Una de las principales quejas sobre servicios como FastComments es que requieren JS. Ya hacemos que nuestro widget de comentarios sea lo más ligero posible, y aseguramos cumplir
nuestros SLAs de llamadas a la API de < 20ms, pero muchas comunidades más pequeñas no elegirán tal solución si significa agregar JS a su sitio.

Esto también abre la oportunidad de usar motores de renderizado que no tienen acceso a JavaScript.

## La Tecnología

FastComments utiliza su propio pequeño microframework para renderizar la interfaz de usuario. Este framework utiliza un enfoque similar a React, excepto que se permiten manipulaciones manuales del DOM fuera de la renderización inicial.

La biblioteca central del widget de comentarios tiene un único punto de entrada: toma un conjunto de estado y crea el HTML y CSS resultantes que deben ser renderizados. Simplemente llamamos a esto en el servidor, también. Cuando el usuario interactúa con la página, el estado se cambia y el HTML más reciente se obtiene. Esto fue construido como resultado de un hackathon que tuvo lugar como parte del nuevo año.

## Comentarios en Vivo

Dado que la interfaz de usuario es renderizada por el servidor, una sola vez, las funciones de comentarios en vivo no están disponibles.

Además, el ícono de notificaciones no está actualmente disponible. Estamos abiertos a agregar esta función en el futuro.

## Rendimiento

La interfaz de usuario renderizada en el servidor utiliza las mismas optimizaciones de almacenamiento y motor de renderizado que el widget basado en JavaScript. Para pequeños hilos de comentarios, el rendimiento es en realidad mejor, ya que el usuario no tiene que descargar un script que luego obtiene los comentarios y renderiza la interfaz de usuario.

## Crawlers y SEO

FastComments ya funciona bien con rastreadores web; si el SEO es una preocupación, no es necesario usar SSR.

## Aplicaciones Futuras

Planeamos lanzar una solución de Foro en el futuro. Tradicionalmente, los foros son paginados y renderizados del lado del servidor. Las soluciones modernas de foros se alejan de esta norma utilizando desplazamiento infinito y renderizado del lado del cliente. No creemos que esta tenga que ser la única opción para utilizar una solución de Foro de terceros.

## En Conclusión

Esperamos que encuentres esta guía útil y fácil de leer. No dudes en comentar abajo con cualquier pregunta.

¡Salud!

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---