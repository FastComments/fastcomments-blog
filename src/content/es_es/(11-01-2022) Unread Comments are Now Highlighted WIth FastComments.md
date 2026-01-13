---
[category:UI & Customization]
###### [postdate]
# [postlink]Los Comentarios No Leídos Ahora Están Resaltados Con FastComments[/postlink]

{{#unless isPost}}
¿Alguna vez has vuelto a una página y has querido reanudar la lectura de la sección de comentarios donde la dejaste? FastComments ahora resalta los comentarios
que te perdiste, facilitando esto.
{{/unless}}

{{#isPost}}

### Novedades

¿Alguna vez has vuelto a una página y has querido reanudar la lectura de la sección de comentarios donde la dejaste? FastComments ahora resalta los comentarios
que te perdiste, facilitando esto.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar en el nuevo comentario resaltado." />
</div>

### Cómo Obtenerlo

Cualquier comentario que activó una notificación en la aplicación (respuestas, respuestas en el mismo hilo o comentarios en una página
a la que estás suscrito), se resaltará automáticamente con el avatar del usuario brillando ligeramente. El color se puede personalizar mediante CSS
usando la clase `is-unread`. El estilo predeterminado también admite el modo oscuro.

Además, se ha agregado una nueva clase CSS `24hr` a los elementos de comentario publicados en las últimas 24 horas. Puedes usar esto para estilizar
comentarios también.

### ¿Por Qué Resaltar El Avatar?

Reconocemos que puede ser preferible resaltar todo el comentario. Sin embargo, esto presenta preocupaciones de legibilidad y estilo con
nuestros clientes que han personalizado la plataforma para que coincida con su producto. Encontramos que resaltar ligeramente el avatar es un cambio bastante poco intrusivo
en la mayoría de los casos. Si se desea, el brillo se puede eliminar y cambiar mediante reglas de personalización del widget.

### En Conclusión

Sabemos que esta característica ha sido muy esperada por algunos. Pasamos tiempo eligiendo un estilo que no fuera demasiado intrusivo pero todavía útil, y podemos
hacer más ajustes basados en comentarios.

¡Saludos!

{{/isPost}}

---