---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Todos los widgets de FastComments ya están en vivo[/postlink]

{{#unless isPost}}
Cada widget de FastComments incrustado (conteos de comentarios, comentarios recientes, páginas principales, discusiones recientes, resumen de reseñas, likes flotantes) ahora se actualiza en tiempo real.
{{/unless}}

{{#isPost}}

### Novedades

El widget principal de comentarios ha estado en vivo desde el primer día. Sin embargo, los widgets incrustados más pequeños no lo estaban. Los conteos de comentarios, los widgets de "comentarios recientes" o "páginas principales", etc., mostraban un número que podía estar desactualizado hasta un minuto.

Ahora, cada widget que envía FastComments se suscribe a actualizaciones en vivo y se actualiza de inmediato :) ¡Esto incluye los resúmenes de reseñas también!

### Qué Widgets

Todos ellos. Concretamente:

- `FastCommentsCommentCount` - el conteo de comentarios por página
- `FastCommentsCommentCountBulk` - la versión a granel que actualiza muchos conteos en una página de lista/archivo
- `FastCommentsRecentComments` y `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` y `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (el badge de conteo de comentarios flotante)
- `FastCommentsEmbedPageLikesFloating` (el conteo de likes + comentarios flotantes)

### Lo Que Necesitas Hacer

Nada. Si ya tienes algunos de estos incrustados, actualiza la página una vez. La próxima vez que se publique, edite, elimine un comentario o alguien reaccione a una página, el widget se actualizará.

La antigua configuración `isLive: true` en los widgets de conteo de comentarios ahora es redundante: los widgets siempre están en vivo.

Si cargas el JS del widget desde nuestro CDN, tienes la nueva versión, incluso si utilizas alguna de nuestras bibliotecas envolventes (React, Vue, etc).

### Los Likes También Están Vivos

El widget de likes flotantes también responde ahora a eventos de likes y reacciones. Haz clic en el corazón en una página y otras pestañas abiertas verán el conteo cambiar.

### Cómo Funciona

Cada widget abre una única conexión WebSocket. Los widgets que muestran datos para una página específica (`comment-count` (incluyendo a granel), `reviews-summary`, `embed-page-likes-floating`) se suscriben a la transmisión de eventos de esa página. Los widgets que muestran datos que abarcan un inquilino (`recent-comments`, `top-pages`, `recent-discussions`) se suscriben a una transmisión de pulso por inquilino que envía una señal cada vez que algo en ese inquilino cambia.

El resultado es que un widget inactivo cuesta efectivamente nada y un widget activo muestra un número fresco dentro de uno o dos segundos de cambio subyacente.

### Coherencia de Caché

Las cachés del lado del servidor que respaldan estos widgets solían expirar con un TTL de 60 segundos. Ahora se invalidan en el momento en que aterriza un comentario o evento de reacción relevante, por lo que la primera solicitud después de un cambio devuelve datos frescos, no la versión en caché.

### En Conclusión

Estamos contentos de haber podido tomarnos el tiempo para probar y optimizar este cambio para que nuestros clientes lo disfruten al mismo precio de siempre. Creemos que los resúmenes de reseñas en vivo son un diferenciador especialmente atractivo para nosotros.

Déjanos saber abajo si ves algo raro.

¡Saludos!

{{/isPost}}

---