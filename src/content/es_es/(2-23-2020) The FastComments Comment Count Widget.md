---
[category:Features]

###### [postdate]
# [postlink]El Widget de Conteo de Comentarios de FastComments[/postlink]

¿Quieres mostrar el número de comentarios en una página antes de que un usuario haga clic? No hay problema con FastComments.

{{#isPost}}
El primero de muchos por venir - FastComments ahora soporta widgets de conteo de comentarios.

Por ejemplo, esta página tiene <b><span id="fastcomments-widget-comment-count"></span></b>. ¡Ese número se inserta a través del widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Es un conteo en vivo, con una caché de 60 segundos para ayudar a servir páginas muy populares más rápido. Esto significa que puede que veas que el conteo en vivo se retrasa respecto al conteo de
tus comentarios por un minuto, pero eso es para asegurar que FastComments esté a la altura de su nombre.

Un mejor ejemplo puede ser una lista de publicaciones de blog, por ejemplo:

### Publicación #1
##### 64 Comentarios


### Publicación #2
##### 128 Comentarios


### Publicación #3
##### 256 Comentarios

También puedes ver un ejemplo en vivo de esto en el <a href="https://blog.fastcomments.com" target="_blank">inicio del blog</a>.

El widget de Conteo de Comentarios no se renderiza en un iframe, por lo que es completamente personalizable a través de CSS. Heredará automáticamente el estilo de tu página: fuentes, colores, alturas de línea, y así sucesivamente.

Para acceder al código del widget de Conteo de Comentarios para tu cuenta, simplemente ve <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">aquí</a>.

Puedes encontrarlo a través de la interfaz de usuario en la página de la cuenta, luego haciendo clic en Obtener Código del Widget y luego en Otros Widgets.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---