---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Eliminando el iframe para SEO[/postlink]

{{#unless isPost}}
Hemos mejorado la visibilidad de tus comentarios para los motores de búsqueda y aumentado la probabilidad de que el contenido sea atribuido a tu sitio.
{{/unless}}

{{#isPost}}

## Novedades

Anteriormente, FastComments renderizaba tus hilos de comentarios en un iframe cuando eran rastreados por motores de búsqueda. Esto se debe a que la aplicación requiere el uso de iframes 
para cómo utilizamos cookies en las sesiones de tus usuarios.

Sin embargo, esto presenta un problema con los motores de búsqueda, ya que no garantizan que el contenido en el iframe sea atribuido a tu sitio.

Ahora, al renderizar comentarios, el script de integración comprobará si la página está siendo cargada por un crawler. Si es así, ¡no utilizará un iframe!

## Cuántos Comentarios Se Muestran

Se mostrarán hasta 2,000 comentarios a los motores de búsqueda para una página. Serán ordenados según tu orden de clasificación configurado por defecto.

## Las Pruebas Que Hicimos

Aseguramos que los motores de búsqueda ahora vean todo el hilo de comentarios de una página, y probamos el rendimiento de cargar hilos de comentarios completos a la vez.

## Impacto para Clientes Existentes

Si eres un cliente existente que utiliza FastComments, el cambio ya se ha aplicado a tu cuenta y no se requiere ninguna acción adicional. Una vez que los motores de búsqueda vuelvan a indexar tus páginas, 
todos los comentarios en esas páginas deberían ser indexados.

## En Conclusión

Esperamos que encuentres útil esta actualización y su documentación. ¡Feliz comentario!

{{/isPost}}