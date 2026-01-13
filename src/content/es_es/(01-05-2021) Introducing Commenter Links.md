---
[category:Features]
###### [postdate]
# [postlink]Introduciendo Enlaces de Comentadores[/postlink]

{{#unless isPost}}
Nuestra primera versión de 2021 trae la capacidad (si se activa a nivel de inquilino) para que los usuarios agreguen su enlace de blog al comentar.
{{/unless}}

{{#isPost}}

## Novedades

Nuestra primera versión de 2021 trae la capacidad (si se activa a nivel de inquilino) para que los usuarios agreguen su enlace de blog al comentar.

## ¿Qué son los Enlaces de Comentadores?

Como vemos en este intercambio muy curioso, uno de estos usuarios tiene su nombre de usuario subrayado para indicar que es un enlace:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Enlaces de Comentadores" title="Demostración de Enlaces de Comentadores" />
</div>

Esto se debe a que el sitio ha configurado su instalación de FastComments para permitir llenar un nuevo campo al comentar, donde el
usuario puede dejar un enlace:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Entrada de Enlace de Comentador" title="Entrada de Enlace de Comentador" />
</div>

Este enlace también se puede personalizar a través de la edición de sus <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Detalles de la Cuenta</a>.

## Habilitando los enlaces de Comentadores

Al crear una <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Regla de Personalización</a> podemos habilitar el nuevo campo de entrada.
Simplemente habilite la opción "Habilitar Enlaces de Comentadores".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Habilitando Enlaces de Comentadores" title="Enlaces de Blog" />
</div>

## Sobrescribiendo el Texto del Campo de Entrada

Por defecto, el marcador de posición del campo de enlace del comentador es "Tu URL de Blog.". Esto se puede sobrescribir a través de la misma regla de personalización que utilizó para habilitar la función, haciendo clic en "Mostrar Texto Personalizado".

## Mejorando la Clasificación de Spam

Esta función tiene el efecto secundario de reducir el contenido marcado como spam que puede no ser spam. Los comentarios con poco texto y un enlace tienen una mayor probabilidad de ser clasificados como spam. Sin embargo, el enlace del comentador no afecta la clasificación de si el comentario es spam o no. Esto significa que un usuario puede comentar con su enlace de blog con un riesgo mucho menor de que el comentario sea marcado como spam.

Por estas razones, los sitios con altas cantidades de spam pueden no querer habilitar esta función, sin embargo, aquellos que no lo hagan encontrarán valor en su uso con ciertas audiencias.

## Impacto en Clientes Existentes

Si eres un cliente existente que utiliza FastComments, tus usuarios no experimentarán ningún cambio en la funcionalidad, a menos que actives esta función. Lo mismo ocurre con los nuevos clientes: encontrarás que esta función está desactivada por defecto.

## En Conclusión

Esperamos que esta función sea el comienzo de un año mejor que el anterior. ¡Felices comentarios!

{{/isPost}}