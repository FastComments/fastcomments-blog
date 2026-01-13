---
[category:Performance]
###### [postdate]
# [postlink]Indexando sus Hilos de Comentarios en Motores de Búsqueda[/postlink]

{{#unless isPost}}
Hemos mejorado la información que los motores de búsqueda ven al rastrear su sitio con FastComments.
{{/unless}}

{{#isPost}}

## Novedades

Anteriormente, cuando los motores de búsqueda rastreaban sitios web con FastComments instalado, solo indexaban los comentarios de la primera página (los 30 principales).

Esto era porque anteriormente los motores de búsqueda veían lo mismo que usted al visitar su sitio.

Ahora, cuando un motor de búsqueda visita su sitio, se cargarán todos los comentarios.

## Impacto en el Rango de Página

Los motores de búsqueda modernos toman en cuenta muchas cosas al clasificar una página, incluyendo la relevancia del contenido en la página en comparación con lo que usted está buscando, e incluso cosas como
el tiempo de carga de esa página.

Este cambio significará que el contenido completo de sus hilos de comentarios estará disponible para su indexación, aumentando potencialmente la relevancia de las búsquedas. También muestra compromiso, que
es algo que el motor de búsqueda puede usar para clasificar.

Un posible inconveniente es el rendimiento, ya que ahora estamos cargando más comentarios; sin embargo, en nuestras pruebas encontramos que se necesitarían cientos, si no miles, de comentarios
en un hilo para ralentizar FastComments hasta el punto de afectar los tiempos de carga de su página y causar un cambio en el rango.

Por ejemplo, nuestra página de demostración con más de 100 comentarios, aún <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">obtiene una puntuación de 99/100 de Google PageSpeed Insights</a>.

## Las Pruebas que Realizamos

Aseguramos que los motores de búsqueda ahora vean todo el hilo de comentarios de una página, y probamos el rendimiento de cargar hilos de comentarios completos de una vez.

## Impacto en Clientes Existentes

Si usted es un cliente existente que utiliza FastComments, el cambio ya se ha aplicado a su cuenta, y no se requiere ninguna acción adicional. Una vez que los motores de búsqueda reindexen sus páginas
todos los comentarios en esas páginas deberían ser indexados.

## En Conclusión

Esperamos que encuentre útil esta actualización y su documentación. ¡Felices comentarios!

{{/isPost}}