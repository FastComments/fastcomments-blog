[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Cómo migrar de OpenWeb a FastComments en 2026[/postlink]

{{#unless isPost}}
Una guía característica por característica para editores que se trasladan de OpenWeb (anteriormente Spot.IM): qué se corresponde 1:1, qué es diferente, cómo funciona la importación CSV, cómo cambia el apretón de manos SSO y un plan de transición paso a paso.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artículo contiene jerga técnica

Esta guía es para líderes de producto y de ingeniería y gerentes de comunidad que ejecutan OpenWeb hoy y necesitan un plan para migrar. Recorre cada superficie de OpenWeb, nombra el equivalente en FastComments y dice claramente dónde no hay coincidencia 1:1.

### Por qué ahora

El 30 de septiembre de 2026 el Tribunal de Distrito de Tel Aviv ordenó el nombramiento de un receptor temporal sobre OpenWeb a solicitud de su prestamista, Mars Growth Capital, que posee un gravamen de primera prioridad sobre los activos y cuentas de la compañía y está moviéndose para hacerlo cumplir contra los activos israelíes, cuentas bancarias y propiedad intelectual de OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Un fiduciario temporal, el Abg. Ehud Gindes, fue nombrado al día siguiente (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). A principios de 2026 Microsoft, uno de los mayores clientes de OpenWeb, terminó su compromiso y retuvo pagos por una disputa de tráfico que OpenWeb rechaza (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb dice que la plataforma sigue operando. La supervisión judicial, un prestamista que hace cumplir gravámenes sobre la IP de la que depende su widget de comentarios, y un fiduciario cuyo trabajo es preservar el valor de los activos no son condiciones que un editor quiera bajo una superficie de compromiso central. Si aún no ha extraído una exportación completa de datos, hágalo primero, hoy, antes de cualquier otra cosa en esta guía.

### Lo que necesita antes de comenzar

Recoja esto antes de tocar cualquier código:

- **Su exportación de comentarios de OpenWeb.** OpenWeb expone una API de Exportación (v4) que produce archivos CSV comprimidos, con un máximo de 100 000 comentarios por archivo, con ventanas de rango de fechas de hasta un mes y enlaces de descarga que expiran después de una semana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Solicite cada ventana que necesite y guarde los archivos en un lugar seguro. Si su contacto de OpenWeb le ha proporcionado una exportación CSV del Panel de administración en el pasado, guarde también esa. El importador de FastComments lee el CSV de OpenWeb con columnas como `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` y `url`.
- **Su Spot ID y la lista de IDs de publicaciones.** Cada `data-post-id` que pasa al lanzador se convierte en un ID de URL de FastComments. Si sus IDs de publicación son IDs de artículos del CMS, anote cómo se generan para que pueda emitir los mismos valores del lado de FastComments.
- **Su lista de usuarios SSO.** Específicamente los valores `primary_key` y `user_name` que registró con OpenWeb. La autoría del comentario se empareja por nombre de usuario durante la importación, por lo que desea pasar los mismos nombres de usuario en la carga útil SSO de FastComments.
- **Su lista de moderadores y roles.** Cuentas de administrador, moderador y periodista, y qué secciones modera cada una.
- **Su configuración de moderación.** Política del sitio (aprobar todo, publicar y moderar, requerir aprobación), anulaciones por artículo, lista de palabras restringidas, usuarios silenciados y prohibidos.
-.
- **CSS personalizado y configuraciones de tema.** Exporte cualquier cosa que tenga en el Panel de administración para que pueda reconstruirla en la página de personalización del widget de FastComments.
- **Dónde vive el lanzador en sus plantillas**, incluidas cualquier página que ejecute Reacciones, Topic Tracker, Spotlight, la Campana de Notificaciones o un Anuncio Independiente sin una Conversación.

### Cómo los IDs de publicación de OpenWeb se asignan a los IDs de URL de FastComments

FastComments vincula un hilo de comentarios a un `urlId`. Por defecto el ID de URL es la URL de página limpiada, pero puede establecerlo a cualquier cadena, y eso es exactamente lo que hace el importador de OpenWeb: lee la columna `post_id` y la usa como el ID de URL de FastComments para cada comentario de ese artículo. También almacena la columna `url` como la URL de visualización para que los enlaces de moderación y los correos de notificación apunten a la página correcta.

Así que la regla para sus plantillas es: dondequiera que haya pasado `data-post-id="POST_ID"` y `data-post-url="ARTICLE_URL"` a OpenWeb, pase `urlIdDeUrl: 'POST_ID'` y `url: 'ARTICLE_URL'` a FastComments. Los hilos importados se alinean con los hilos en vivo sin redirecciones ni reescritura de URL. Vea <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">la documentación de ID de URL</a>.

Si prefiere clavear los hilos por URL en el futuro en lugar de por ID de publicación, importe primero y luego use la herramienta Migrar Comentarios bajo Administrar datos para mover hilos del ID de publicación a la URL en bloque.

### El mapa de características

| OpenWeb | FastComments | Notas |
| --- | --- | --- |
| Conversación con actualizaciones en tiempo real | Widget de comentarios con comentarios en vivo | En vivo por defecto. Los nuevos comentarios se colapsan detrás de un botón "Mostrar N nuevos comentarios", o aparecen instantáneamente con `showLiveRightAway`. |
| Me gusta y no me gusta en los comentarios | Votos positivos y negativos | La importación conserva `likes_count` y `dislikes_count`. El estilo de corazón y "desactivar votación" son opciones de configuración. |
| Reacciones (iconos a nivel de artículo) | Reacciones de página | Conjunto de iconos configurable en la página, recordado por usuario. |
| Respuestas y subhilos | Respuestas en subhilos, profundidad ilimitada | `maxReplyDepth` limita la anidación. Ver la nota de importación sobre subhilos más abajo. |
| Ordenación: mejor, más reciente, más antiguo | Más relevante, más reciente primero, más antiguo primero | `defaultSortDirection` establece el predeterminado por sitio o por patrón de URL. |
| Perfiles de usuario | Perfiles de usuario | Avatar, biografía, insignias, karma, actividad, mensajes directos. Funciona para usuarios SSO. |
| Insignia de autor | `displayLabel`, `isAdmin`, `isModerator`, insignias | Establecido en la carga útil SSO. No se necesita llamada de búsqueda en backend. |
| Actualizaciones de Live Blog fijadas, comentarios destacados | Fijar y desafijar en cualquier comentario | Moderadores fijan desde el widget o el panel. Una plantilla de agente IA fija los comentarios con más votos. |
| Encuestas en conversación | Encuestas en comentarios | De 2 a 10 opciones, fechas de cierre, modos de privacidad, restricciones de creador. |
| Formatos de Pregúntame cualquier cosa | Sin producto dedicado | Ejecutar como un subhilo con el usuario SSO del autor etiquetado y la pregunta fijada. |
| Live Blog | Sin equivalente 1:1 | Widget de Live Chat y comentarios en modo chat existen. El blog en vivo editorial permanece en su CMS. |
| Rastreador de temas (seguir temas y autores) | Suscripciones a páginas | Los usuarios siguen una página, no un tema o autor. No hay seguimiento entre artículos. |
| Campana de notificaciones | Campana de notificaciones en el widget | Respuestas, menciones, actividad de subhilo, votos, suscripciones, insignias, mensajes directos. |
| Notificaciones por correo electrónico | Notificaciones por correo electrónico con plantillas | Opt‑in por usuario mediante banderas SSO. Plantillas personalizadas, remitente con marca. |
| Apretón de manos SSO (codeA/codeB) | SSO seguro (carga útil HMAC‑SHA256) | Sin llamada register‑user. Firmar una carga útil en el servidor, pasarla al widget. |
| SSO de terceros (Auth0, Gigya, Piano) | SSO seguro después de que su proveedor autentique | Misma carga útil. Su backend la firma una vez que el usuario ha iniciado sesión. |
| Identidad (pantallas de registro de OpenWeb) | Inicio de sesión con enlace mágico, SSO simple | Los lectores inician sesión con un enlace de correo electrónico. Sin contraseñas. |
| Política de moderación por artículo | Reglas de personalización por patrón de ID de URL | Modo de aprobación, filtro de spam y más varían según patrones `*/section/*`. |
| Moderación AI Aida | Clasificadores de spam, opción ChatGPT 4, moderación de imágenes, Agentes IA | Los agentes comienzan en ejecución en seco y pueden requerir aprobación humana. |
| Palabras restringidas | Lista negra de palabras | ~450 frases predeterminadas, editables. |
| Silenciamiento de usuarios | Bloquear usuario | Bloqueo por lector desde el menú de comentarios. |
| Prohibiciones | Prohibiciones | Permanente, temporizada, sombra, con hash de IP, y consciente de alias. |
| Panel de moderación | Panel de moderar comentarios | Filtros, acciones masivas con deshacer, grupos de moderación, correos digest con aprobación con un clic. |
| Webhook de notificaciones | Webhooks | Comentario creado, actualizado, eliminado. No webhook de notificaciones por usuario. |
| Panel de participación | Analítica | Usuarios en línea, páginas principales, cargas de página, comentarios, votos, cuentas por día. No informes de ingresos publicitarios. |
| Anuncios en conversación, anuncio independiente | Ninguno | FastComments no muestra anuncios. Usted mantiene su propia pila de anuncios alrededor del widget. |
| Reseñas sociales (valoraciones de estrellas) | Valoraciones y reseñas | Producto separado en la misma cuenta. |
| Popular en la comunidad | Widgets de discusiones recientes y páginas principales | Recirculación impulsada por la actividad de comentarios. |
| Contador de comentarios | Widgets de recuento de comentarios | Individual y masivo. |
| API de exportación de comentarios | Exportación CSV, API, webhooks | Exportar desde el panel en cualquier momento. |
| Exportar y eliminar datos de usuario (GDPR/CCPA) | Eliminación de cuenta y datos, región UE | eu.fastcomments.com mantiene los datos en la UE. DPA disponible. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | UI nativa, SSO, actualizaciones en vivo, subhilos, acciones de moderación. |
| Lanzador, páginas virtuales, SDK React | Script de inserción, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` y `destroy()` para SPA. |

El resto de esta sección revisa cada grupo en detalle.

### Conversación, Votos y Reacciones

La Conversación de OpenWeb es un subhilo en tiempo real. El widget de comentarios de FastComments también lo es: comentarios, ediciones, eliminaciones, votos y acciones de moderación se envían a todos los que ven el subhilo (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Por defecto, los nuevos comentarios de otras personas aparecen detrás de un botón "Mostrar 2 nuevos comentarios" para que la página no salte bajo el lector. Para eventos en vivo, establezca `showLiveRightAway` para que se rendericen inmediatamente, y `newCommentsToBottom` si desea que fluyan hacia abajo como un chat.

Los me gusta y no me gusta se convierten en votos positivos y negativos. El importador conserva ambos recuentos por comentario. Si su comunidad está acostumbrada a un solo me gusta, cambie el estilo de voto a corazones en la página de personalización del widget. La votación también puede desactivarse por completo.

Las Reacciones de OpenWeb son un widget separado con dos a cuatro íconos etiquetados en el artículo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a</a>). El equivalente en FastComments es Reacciones de página: un conjunto configurable de imágenes de reacción adjuntas al widget de comentarios, recordado por página y por usuario (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Los recuentos de reacciones no forman parte de la exportación de comentarios de OpenWeb, por lo que comienzan en cero.

La ordenación se asigna directamente. Los valores `data-sort-by` de OpenWeb: best, newest y oldest corresponden a Más relevante, Más reciente primero y Más antiguo primero. Establezca el predeterminado con `defaultSortDirection` (`MR`, `NF`, `OF`) en código o en una regla de personalización. Los lectores pueden cambiarlo en el widget.

`data-read-only="true"` se convierte en `readonly: true`, lo que bloquea nuevos comentarios, votos, ediciones y eliminaciones. `data-post-staleness-days` no tiene equivalente directo, pero una regla de personalización puede aplicar `readonly` a un patrón de ID de URL, y también puede cambiarlo desde sus plantillas según la antigüedad del artículo. `data-messages-count` es el tamaño de página, configurado en la página de personalización del widget entre 10 y 200 comentarios.

### Respuestas y subhilos

FastComments admite anidamiento ilimitado por defecto; `maxReplyDepth` lo limita (`1` produce una estructura plana de dos niveles). El CSV de OpenWeb incluye columnas `parent_id` y `parent_comment_id`. El importador actual importa cada fila como un comentario de nivel superior en su página, en orden de fecha, con autor, marca de tiempo, votos, recuento de denuncias y estado de aprobación intactos. No reconstruye el árbol padre‑hijo. Si sus subhilos tienen muchas respuestas, indíquenos al enviar la exportación y manejaremos el subhilo como parte de la importación en lugar de dejarle con un subhilo aplanado.

### Perfiles de usuario e insignias

Los usuarios de FastComments, incluidos los usuarios SSO, obtienen un perfil con avatar, nombre visible, biografía, enlaces sociales, insignias, karma, recuento de comentarios, un feed de actividad pública y mensajes directos (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Cada una de las superficies de actividad, comentarios de perfil y DM pueden desactivarse por usuario en la carga útil SSO o globalmente en la configuración.

La Insignia de autor de OpenWeb requiere que llame a `GET /sso/v1/user/{primary_key}` para el autor y coloque el ID devuelto en `data-author-id`. En FastComments, establezca `displayLabel: 'Author'` (o cualquier etiqueta de hasta 100 caracteres) en la carga útil SSO del usuario, y `isAdmin` o `isModerator` para el personal. La etiqueta se muestra junto a su nombre en cada comentario. Para un sistema más rico, configure insignias bajo Personalizar, Insignias: insignias de imagen o texto, otorgadas automáticamente según umbrales (recuento de comentarios, votos positivos, comentarios fijados, estado de veterano, velocidad de respuesta) o manualmente, y asignables desde la carga útil SSO con `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Comentarios fijados, encuestas y preguntas y respuestas

Cualquier moderador puede fijar o desafijar un comentario desde el menú de comentarios en el widget o desde el panel de moderación. Los comentarios fijados se envían en vivo a todos en el subhilo. Si desea automatizarlo, la función de Agentes IA incluye una plantilla Top Comment Pinner que fija un comentario de nivel superior una vez que supera un umbral de votos (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Las encuestas en conversación de OpenWeb permiten al personal adjuntar una encuesta de 2 a 4 opciones a un comentario de nivel superior. Las encuestas de FastComments también se adjuntan a un comentario, con 2 a 10 opciones, una fecha de cierre opcional, privacidad de resultados (anónima, solo administradores, todos) y un modo "votar para ver resultados". Usted elige quién puede crear encuestas (desactivado, administradores y moderadores, todos) y si los lectores anónimos pueden votar. Las encuestas también están expuestas en la API pública para crearlas desde su CMS.

OpenWeb ha ejecutado formatos de Pregúntame cualquier cosa en su plataforma. FastComments no tiene un producto Q&A separado. El reemplazo práctico es un subhilo normal en un ID de URL dedicado: el usuario SSO del invitado lleva un `displayLabel`, usted fija el comentario de introducción, los lectores hacen preguntas en comentarios de nivel superior, el invitado responde dentro del subhilo, y las notificaciones de menciones y respuestas atraen a la gente de vuelta. Establezca `noNewRootComments` después de que la ventana se cierre para que solo continúen las respuestas.

Community Spotlight (el recolector de correos, contador y tarjetas de redirección de OpenWeb) no tiene equivalente. El widget admite HTML de encabezado personalizado sobre la entrada de comentarios mediante `headerHTML`, lo que cubre una llamada a la acción pero no un formulario de captura de correo.

### Live Blog

No existe FastComments Live Blog. El Live Blog de OpenWeb es un producto editorial: reporteros asignados en el Panel de administración publican actualizaciones con enlaces incrustados, tweets y video, y los lectores siguen la cobertura (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Lo que FastComments ofrece para la cobertura en vivo es el lado del lector: un widget de Live Chat (`embed-live-chat.min.js`) para chat en streaming, y el widget de comentarios en modo chat (`showLiveRightAway` más `newCommentsToBottom`) junto a su cobertura en vivo. Para las actualizaciones editoriales, los editores que se trasladan de OpenWeb las mantienen en su CMS o una herramienta de blog en vivo dedicada y embeben FastComments debajo para la discusión. Los incrustados de medios (YouTube, SoundCloud y otros) son compatibles dentro de los comentarios, por lo que las actualizaciones del personal publicadas como comentarios incluyen medios enriquecidos.

### Rastreador de temas, notificaciones y correo electrónico

El Rastreador de temas de OpenWeb permite a un lector seguir temas y autores extraídos de los metadatos de la página y recibir notificaciones cuando coinciden nuevos artículos (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments no tiene seguimiento de temas o autores entre artículos. Los lectores se suscriben a una página desde la campana de notificaciones y reciben actualizaciones para ese subhilo, con la frecuencia elegida por suscripción: cada minuto, resumen horario o resumen diario. Si el seguimiento entre artículos es importante para sus métricas de retención, esta es una función que pierde.

Todo lo demás en la Campana de notificaciones se asigna. El widget tiene una campana que se vuelve roja con el recuento de no leídos y lista: respuestas a usted, respuestas en un subhilo donde comentó, menciones, votos positivos en sus comentarios, actividad en páginas suscritas, premios de insignias y mensajes directos (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Las notificaciones dentro de la aplicación son en tiempo real mediante WebSocket. Los correos de respuesta y mención se envían cada minuto solo para comentarios aprobados.

Para usuarios SSO, pase `optedInNotifications` y `optedInSubscriptionNotifications` en la carga útil y FastComments actualiza sus preferencias en la siguiente carga de página. Los correos necesitan una dirección de correo en la carga útil. Las plantillas de correo son editables por tipo y por locale bajo Personalizar, Plantillas de correo, y el envío desde su propio dominio con DKIM es compatible. Los moderadores y administradores reciben un resumen diario, semanal o mensual con aprobación, respuesta y enlaces de spam con un clic.

El Webhook de notificaciones de OpenWeb publica eventos de notificación por usuario (`replied-message`, `liked-message`, `topic-by-keyword`, etc.) a su endpoint. Los webhooks de FastComments cubren el recurso de comentario: creado, actualizado y eliminado, con tantos endpoints suscriptores como desee (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Si estaba usando el webhook de notificaciones para alimentar su propio sistema de correo, reconstruirá esa lógica sobre eventos de comentarios, o permitirá que FastComments envíe los correos.

### SSO: De codeA/codeB a una carga útil firmada

El apretón de manos de OpenWeb tiene seis pasos: esperar `spot-im-api-ready`, OpenWeb genera `codeA`, su cliente lo envía a su backend, su backend confirma al usuario y llama `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb devuelve `codeB`, y su cliente devuelve `codeB` a OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). El cierre de sesión llama `window.SPOTIM.logout()`.

FastComments Secure SSO no tiene ida y vuelta y no requiere un nuevo endpoint en su lado. Cuando renderiza la página para un usuario conectado, su backend serializa al usuario, lo codifica en Base64 y lo firma con HMAC‑SHA256 usando su secreto API. El widget envía la carga útil con sus solicitudes y FastComments verifica la firma (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). En Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

La marca de tiempo está en milisegundos desde la época y se rechaza si tiene más de dos días. Para un lector desconectado, omita los tres campos firmados y pase solo `loginURL` (o una función `loginCallback`) y el widget muestra un aviso de inicio de sesión en lugar de un compositor. Ejemplos completos en Node, Java y PHP están en el <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repositorio de ejemplos de código</a>.

Los usuarios se crean en la primera carga de página. No registra a nadie en bloque. Debido a que el importador de OpenWeb coincide los autores de comentarios por `user_name`, un usuario cuya carga útil SSO lleva el mismo `username` reclama sus comentarios importados la primera vez que carga un subhilo y puede editarlos o eliminarlos a partir de entonces. También existe una API de usuarios SSO si desea pre‑crear usuarios.

Cada vez que se envía la carga útil, FastComments actualiza el registro de usuario a partir de ella, por lo que un nombre visible o avatar cambiado en su lado se propaga en la siguiente vista de página. Establezca un campo a `null` para borrarlo.

Si utilizó el SSO de terceros de OpenWeb con Auth0, Gigya o Piano mediante `window.SPOTIM.startSSOForProvider`, el flujo de FastComments es el mismo que arriba: una vez que su proveedor ha autenticado al usuario, su backend construye y firma la carga útil. No hay integración específica del proveedor que configurar en el lado de FastComments.

Existen dos opciones más. Simple SSO pasa el objeto de usuario sin firmar desde el cliente, para plataformas sin backend, y marca la actividad como verificada cuando hay un correo electrónico (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 firma a su personal en el propio panel de FastComments a través de Okta, Azure AD o ADFS, con asignación de roles, y está disponible en planes Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderación

La API de Política de moderación por artículo de OpenWeb tiene cuatro valores: `spot_policy`, `approve_all`, `publish_and_moderate` y `require_approval`. FastComments configura los mismos comportamientos en Configuración de moderación: aprobación automática activada o desactivada, aprobación requerida solo para el primer comentario de un usuario, y auto‑aprobación solo de comentarios verificados (con sesión iniciada o SSO). Las reglas se aplican a nivel de sitio o a un patrón de ID de URL como `*/politics/*`, que es cómo reproducir la política por sección. Cada comentario, aprobado o no, aparece en el panel Moderar Comentarios, por lo que el modelo publicar‑luego‑revisar es la vista predeterminada allí (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

La importación lleva el estado de moderación. `message_status` de OpenWeb con valor `approved` se importa como aprobado y revisado; `rejected` se importa como spam y revisado; cualquier otro valor se importa sin aprobar y sin revisar, por lo que aparece en su cola de moderación. `reports_count` se convierte en el recuento de denuncias del comentario.

La moderación automatizada en FastComments es en capas en lugar de un solo sistema como Aida:

- Un clasificador de spam, entrenado continuamente, disponible como modelo compartido entre todos los inquilinos o aislado a su inquilino, con un factor de confianza que relaja el filtrado para usuarios de larga data o frecuentemente fijados.
- Una verificación opcional de spam con ChatGPT 4 en facturación Flex.
- Moderación de contenido de imágenes con sensibilidad baja, media o alta para imágenes subidas.
- Una lista negra de palabras de aproximadamente 450 frases predeterminadas, editable, que oculta coincidencias con asteriscos. Aquí es donde van sus palabras restringidas de OpenWeb.
- Umbrales de denuncias que ocultan automáticamente un comentario después de N reportes.
- Prevención de mensajes repetidos y casi duplicados, siempre activada.
- Agentes IA: agentes impulsados por eventos con una lista explícita de herramientas permitidas (marcar spam, aprobar, bloquear, fijar, advertir por DM, prohibir, otorgar insignia, responder). Cada agente comienza en ejecución en seco, las herramientas sensibles pueden estar detrás de una aprobación humana, y cada acción se registra con una justificación y puntuación de confianza.

La API de Silenciamiento de usuarios de OpenWeb permite que un lector SSO silencie a otro. El equivalente en FastComments es Bloquear usuario en el menú de comentarios, disponible para cualquier lector con sesión iniciada. Las prohibiciones son una acción de moderador: permanente o por una duración establecida, opcionalmente una prohibición sombra (el usuario ve su comentario publicado pero nadie más lo ve), opcionalmente por IP con hash, con alias adicionales de un correo tratado como una dirección. La lista de usuarios prohibidos se puede buscar por correo, nombre, moderador y el comentario que desencadenó la prohibición.

El panel Moderar Comentarios admite filtros (necesita revisión, necesita aprobación, spam, denunciado, de usuarios prohibidos) y búsqueda de texto, acciones masivas con deshacer y pausa, "seleccionar todo lo que coincide" para colas muy grandes, grupos de moderación para que su sección deportiva solo vea subhilos deportivos, registros por comentario que muestran por qué un correo se envió o no, y enlaces filtrados compartibles. Los moderadores solo tienen el panel; no pueden cambiar configuraciones ni importar datos.

### Analítica

FastComments Analítica muestra usuarios en línea ahora mismo en sus sitios y por página, páginas principales por comentarios o por lectores en vivo, y series diarias para cargas de página, comentarios, votos y cuentas creadas (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Las estadísticas de moderadores son separadas. Los recuentos son casi en tiempo real, con un retraso máximo de un minuto, y cada carga de página se cuenta en lugar de muestrearse.

Lo que no encontrará es cualquier información sobre relleno de anuncios, CPM o ingresos, porque no hay anuncios. Si el panel de OpenWeb era su fuente para informes de compromiso a ingresos, esos informes pasan a su propia pila de anuncios.

### Monetización

OpenWeb coloca anuncios dentro y alrededor de la Conversación y ofrece una unidad de Anuncio independiente, con campañas configuradas a través de su contacto de OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments no muestra anuncios en el widget, no tiene reparto de ingresos, y no carga scripts de anuncios o seguimiento de terceros. El widget es un iframe que usted coloca; los espacios publicitarios arriba y abajo son suyos y se ejecutan a través de lo que ya usa.

El intercambio es explícito: pierde lo que OpenWeb le pagaba, y gana un costo fijo y predecible y un widget que no añade solicitudes de anuncios a su página. La marca se elimina en los planes Flex y Pro, y el etiquetado blanco está disponible en los planes Pro y Enterprise.

### Exportación de datos y privacidad

Todas las exportaciones de datos de comentarios desde el panel de FastComments como CSV en cualquier momento, con fechas en formato UTC ISO, y los mismos datos están disponibles a través de la API. Los webhooks cubren la sincronización continua. Los archivos de importación se eliminan de FastComments tan pronto como la importación se completa.

Para GDPR y CCPA, OpenWeb proporciona una API de exportación y eliminación donde los comentarios de usuarios eliminados permanecen adjuntos a una cuenta de invitado aleatoria (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments admite solicitudes de exportación y eliminación de datos, ofrece un Acuerdo de Procesamiento de Datos, y ejecuta una implementación separada en la UE en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> con datos replicados solo dentro de los puntos de presencia de la UE. Cree su cuenta allí si sus lectores están en Europa. En la región UE, las prohibiciones de agentes IA siempre requieren aprobación humana para cumplir con el Artículo 17 del DSA.

Los datos de comentarios en la implementación global se replican en regiones, incluido un nodo en Singapur, y el widget se sirve desde el DNS y CDN propios de FastComments. El script de inserción ocupa menos de 30 KB en disco y alrededor de 6 KB comprimido en la transmisión.

### SDKs móviles

OpenWeb ofrece SDKs para Android, iOS y React Native con Conversación, Artículos, Autenticación, Notificaciones, Reacciones y Encuestas en conversación. FastComments ofrece bibliotecas nativas <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> y <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> con comentarios en subhilos, actualizaciones en vivo mediante WebSocket, SSO seguro, votación, menciones, carga de imágenes, acciones de moderación (denunciar, fijar, bloquear, bloquear), tematización, modo de chat en vivo y un componente de feed social. La región UE es una bandera de configuración. No hay SDK de anuncios separado porque no hay anuncios.

### Inserción e integración SPA

El lanzador y contenedor de OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

El equivalente de FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Su ID de inquilino está en la <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">página de código de inserción</a> una vez que tenga una cuenta. `data-article-tags` no tiene equivalente ya que no hay seguimiento de temas; los hashtags dentro de los comentarios son una característica diferente.

Para desplazamiento infinito y aplicaciones de una sola página, el enfoque de Páginas Virtuales de OpenWeb es un contenedor por artículo. En FastComments llama a `FastCommentsUI(element, config)` por subhilo y luego `instance.update(newConfig)` para cambiar el ID de URL o `instance.destroy()` para eliminarlo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Las bibliotecas React, Vue, Angular y SolidJS manejan esto cuando cambia la prop de configuración. Los callbacks de ciclo de vida (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) reemplazan los eventos DOM `spot-im-*` que escuchaba.

Los recuentos de comentarios en páginas de índice usan el widget de recuento de comentarios, individual o masivo. Para SEO, los comentarios se renderizan directamente en la página para los rastreadores de motores de búsqueda en lugar de dentro del iframe, por lo que no hay llamada a la API SEO que configurar.

### Corte paso a paso

**1. Crear la cuenta y configurar lo básico.** Regístrese en fastcomments.com o eu.fastcomments.com. Configure sus ajustes de moderación, lista negra de palabras, estilo de voto, orden predeterminado y CSS personalizado en la página de personalización del widget. Añada moderadores y grupos de moderación. Si tiene muchos usuarios administradores, el soporte los importa por usted.

**2. Ejecutar una primera importación.** Vaya a <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, elija OpenWeb (.csv) y cargue. La importación se ejecuta como un trabajo en segundo plano; la página muestra el recuento de filas y el estado, y recibe un correo cuando se completa (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Cada ID de mensaje de OpenWeb se convierte en el ID de comentario de FastComments, por lo que volver a ejecutar una importación no crea duplicados.

**3. Verificar recuentos.** Compare el recuento de filas del trabajo con su exportación. Abra algunos ID de URL de alto tráfico en el panel de moderación y verifique manualmente autores, fechas, totales de votos y estados de aprobación. Confirme que los comentarios rechazados aparecen como spam y los pendientes están en la cola.

**4. Construir la carga útil SSO.** Implemente el código de firma anterior en su backend, usando el mismo `id` y `username` que usó con OpenWeb. Pruebe con una cuenta de personal en una página de pruebas: los comentarios importados del usuario aparecen como suyos, y la edición y eliminación aparecen en su menú de comentarios.

**5. Cambiar la inserción en una plantilla de pruebas.** Reemplace el lanzador y contenedor con el fragmento de FastComments, asignando `data-post-id` a `urlId` y `data-post-url` a `url`. Elimine `window.SPOTIM.logout()` y los listeners `spot-im-*`, o asígnelos a los callbacks. Aplique su CSS en una regla de personalización en lugar de en código para que se pruebe en cada versión de FastComments.

**6. Ejecutar en paralelo.** Coloque FastComments en una sección o un porcentaje de artículos mientras OpenWeb permanece en el resto. No se necesita cambiar nada del lado de OpenWeb. Observe la cola de moderación y la página de analítica. Los lectores que comenten en páginas de FastComments durante esta ventana no están en su exportación de OpenWeb, por lo que planifique la importación final antes de que empiecen, no después.

**7. CSP y DNS.** Si ejecuta una Content‑Security‑Policy, permita `cdn.fastcomments.com` y `fastcomments.com` (o `eu.fastcomments.com`) para `script-src`, `frame-src` y `connect-src`, y elimine las entradas `spot.im` y `openweb.com` una vez que el lanzador desaparezca. No hay cambios en su propio DNS. No se necesitan redirecciones porque los ID de URL coinciden.

**8. Importación final y puesta en marcha.** Obtenga una exportación adicional de OpenWeb que cubra la ventana de ejecución paralela, cárguela (re‑importar es seguro), luego despliegue el cambio de plantilla en todas las páginas y elimine el lanzador, Reacciones, Rastreador de temas, Spotlight, la campana y los contenedores de anuncios.

**9. Lista de verificación para el día de lanzamiento.**

- Comentarios en vivo visibles en un artículo de producción desde dos navegadores.
- Inicio y cierre de sesión SSO y un comentario bajo una cuenta real de suscriptor.
- Los moderadores reciben el resumen y pueden aprobar desde él.
- Los correos de respuesta y mención llegan y enlazan a la página correcta.
- Lista de prohibiciones y lista negra de palabras pobladas.
- Reacciones de página y recuentos de comentarios renderizados donde antes estaban Reacciones y el contador.
- Informes CSP limpios.
- Una última comparación de recuento de comentarios entre su exportación y el panel.

### Lo que pierde y lo que es diferente

Ser directo sobre las brechas:

- **Live Blog.** No hay equivalente. Manténgalo en su CMS o una herramienta de blog en vivo y coloque FastComments debajo.
- **Rastreador de temas.** No hay seguimiento de temas o autores entre artículos. Solo suscripciones a páginas.
- **Community Spotlight.** No hay producto de tarjeta CTA. `headerHTML` le brinda un mensaje sobre el compositor, no una captura de correo.
- **Ingresos por anuncios.** Ninguno. El widget está libre de anuncios por diseño.
- **Webhook de notificaciones.** Los webhooks están en eventos de comentarios, no en eventos de notificación por usuario.
- **Subhilos en importación.** El importador actual aplana las respuestas a comentarios de nivel superior en la misma página. Avísenos si necesita reconstruir el árbol.
- **Historial de reacciones.** Los recuentos de reacciones a nivel de artículo no están en la exportación de comentarios y comienzan de cero.
- **Historial de encuestas.** Las definiciones y votos de encuestas no están en la exportación de comentarios; el texto del comentario de la encuesta se importa, la encuesta no.
- **Modelo de inicio de sesión.** Los lectores sin SSO inician sesión con un enlace mágico en lugar de una contraseña o botón de inicio de sesión social.
- **Personal de moderación humana.** OpenWeb incluye un equipo de moderación con Aida. FastComments proporciona herramientas, clasificadores y agentes; los humanos son suyos.

Lo que gana, en el mismo espíritu: un widget que añade un pequeño script y no solicita anuncios, moderación que una sola persona puede gestionar para un sitio grande con acciones masivas y agentes, SSO que es una función de firma en lugar de un protocolo, y un proveedor que no está bajo supervisión judicial.

### Cronograma y la oferta de importación gratuita

Planifique una a dos semanas para un editor con una integración SSO y unos cientos de miles de comentarios: uno o dos días en la exportación y primera importación, unos días en SSO y plantillas, una ventana de ejecución paralela, luego la importación final y el cambio. La plataforma ya maneja esta escala: United Cloud opera más de diez portales y millones de comentarios en FastComments, y itsfoss.com trasladó un historial de 88 000 comentarios de otro proveedor mediante el mismo importador autoservicio.

FastComments importa su exportación CSV de OpenWeb de forma gratuita, le ayuda a ejecutar OpenWeb y FastComments en paralelo durante la transición, y ayuda con la migración misma, incluyendo preguntas de subhilos y coincidencia de usuarios. Los planes Enterprise incluyen un SLA, respuestas de soporte dentro de una hora durante el horario laboral, y la opción de una implementación de Nube aislada en su propia cuenta de nube (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). La tarificación basada en uso Flex está disponible para sitios que desean comenzar sin contrato.

Escriba a <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> con el tamaño de su exportación y su configuración SSO y le responderemos con un plan.

### En conclusión

Obtenga su exportación hoy. El resto de la migración es mecánico: los mismos ID de publicación se convierten en ID de URL, los mismos nombres de usuario reclaman sus comentarios mediante SSO, el estado de moderación se mantiene, y la inserción es un intercambio directo. Los lugares donde FastComments difiere se enumeran arriba para que pueda decidir con los hechos frente a usted.

¡Saludos!

{{/isPost}}

---