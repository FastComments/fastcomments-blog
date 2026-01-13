---
[category:Features]

###### [postdate]
# [postlink]FastComments Agrega Soporte para #HashTags[/postlink]

{{#unless isPost}}
¿Alguna vez has querido #etiquetar un tema o una pieza de información? Ahora puedes.
{{/unless}}

{{#isPost}}

### Qué Hay de Nuevo

Al comentar, los usuarios ahora pueden ingresar uno o más `#hashtags`. Al hacer clic en un `#hashtag` en un comentario, te llevará a una vista con otros comentarios
con el hashtag mostrado.

Además, los `#hashtags` se pueden utilizar para vincular a piezas de contenido externas. Junto con este lanzamiento, hemos lanzado nuestra [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
que permite la pre-población de hashtags en tu cuenta.

Al pre-poblar hashtags, podemos definir una URL para cada etiqueta. Esto significa que los `#hashtags` también se pueden usar para vincular, por ejemplo, a un número de ticket, o
a un documento en un CRM.

El símbolo `#` también se puede personalizar, bajo solicitud.

### Cómo Usarlo

Al escribir `#`, y luego el comienzo de un hashtag, aparecerá una lista de resultados de búsqueda.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Uso de HashTags" title="Demostración de #hashtags" />
</div>

Simplemente haz clic en el hashtag que deseas agregar.

Además, puedes usar las teclas de flecha arriba y abajo para navegar por esta lista, y presionar enter para seleccionar, o escape para salir.

Sabemos que puede que desees usar el símbolo `#` sin agregar un hashtag. FastComments detectará esto y no interrumpirá tu experiencia de escritura.

### Agregando Hash Tags

Si el hashtag que deseas usar no está en la lista de sugerencias, FastComments simplemente creará automáticamente el hashtag en segundo plano.

La creación automática de `#hashtag` se puede desactivar según la documentación [aquí](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Quién Lo Recibe

Todos los clientes actuales y nuevos de FastComments, en todos los niveles, ahora tienen acceso a `#hashtags`. Los `#hashtags` se han retroportado a versiones anteriores del
widget de comentarios, también.

### Cómo Funciona el Autocompletado

Las etiquetas mostradas en la lista autocompletada son solo de tu cuenta. Los HashTags no se comparten entre inquilinos de FastComments.

### Documentación

Hay documentación dedicada para `#hashtags`. Consulta aquí: https://docs.fastcomments.com/guide-hashtags.html

### En Conclusión

Como el resto de FastComments, esperamos que encuentres esta característica rápida y fácil de usar.

¡Saludos!

{{/isPost}}