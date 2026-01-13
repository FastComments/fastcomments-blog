---
[category:API & Development]

###### [postdate]
# [postlink]Cambios en la Estructura del Webhook[/postlink]

{{#unless isPost}}
Hemos realizado algunos cambios relacionados con el comportamiento de las estructuras de webhook.
{{/unless}}

{{#isPost}}

### Novedades

Antes del 14 de noviembre de 2023, hicimos los siguientes cambios en los webhooks:

#### Actualizar Webhooks

**Anteriormente**, las actualizaciones contenían la última versión de un comentario. Si dos usuarios votaban un comentario en rápida sucesión, esto
activaría dos webhooks. Sin embargo, era posible que el primer evento de webhook contuviera la **última versión**, resultando en dos
eventos de webhook idénticos:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**A partir del 14 de noviembre**, cada evento de webhook es idempotente y contiene el objeto del comentario en el momento del cambio. En el ejemplo anterior ahora recibirás dos eventos:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Eliminar Webhooks

**Anteriormente**, los webhooks de eliminación solo contenían el id del comentario. Este era un objeto como `{ id: string }`.

**A partir del 14 de noviembre**, los webhooks de eliminación contendrán el **objeto completo** del comentario en el momento de la eliminación.

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar correctamente esta función. Háganos saber
a continuación si descubre algún problema.

¡Saludos!

{{/isPost}}

---