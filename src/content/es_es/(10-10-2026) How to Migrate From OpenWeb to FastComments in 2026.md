[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Cómo migrar de OpenWeb a FastComments en 2026[/postlink]

{{#unless isPost}}
Una guía característica por característica para editores que se trasladan de OpenWeb (anteriormente Spot.IM): qué se corresponde 1:1, qué es diferente, cómo funciona la importación CSV, cómo cambia el apretón de manos SSO y un plan de migración paso a paso.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artículo contiene jerga técnica

Esta guía es para líderes de producto e ingeniería y gestores de comunidad que utilizan OpenWeb hoy y necesitan un plan para migrar. Recorre cada superficie de OpenWeb, nombra el equivalente en FastComments y dice claramente dónde no hay una correspondencia 1:1.

### Por qué ahora

El 30 de septiembre de 2026, el Tribunal de Distrito de Tel Aviv ordenó el nombramiento de un receptor temporal sobre OpenWeb a solicitud de su prestamista, Mars Growth Capital, que posee un gravamen de primera prioridad sobre los activos y cuentas de la compañía y está intentando ejecutarlo contra los activos israelíes, cuentas bancarias y propiedad intelectual de OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Un fiduciario temporal, el abogado Ehud Gindes, fue nombrado al día siguiente (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). A principios de 2026 Microsoft, uno de los mayores clientes de OpenWeb, terminó su compromiso y retuvo pagos por una disputa de tráfico que OpenWeb rechaza (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb dice que la plataforma sigue operando. La supervisión judicial, un prestamista que ejecuta gravámenes sobre la IP de la que depende su widget de comentarios, y un fiduciario cuyo trabajo es preservar el valor de los activos no son condiciones que un editor quiera para una superficie de interacción central. Si aún no ha extraído una exportación completa de datos, hágalo primero, hoy, antes de cualquier otra cosa en esta guía.

### Qué necesitas antes de comenzar

- **Su exportación de comentarios de OpenWeb.** OpenWeb expone una API de Exportación (v4) que produce archivos CSV comprimidos, con un máximo de 100,000 comentarios por archivo, con ventanas de rango de fechas de hasta un mes y enlaces de descarga que expiran después de una semana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Solicite cada ventana que necesite y guarde los archivos en un lugar seguro. Si su contacto de OpenWeb le ha proporcionado una exportación CSV del Panel de Administración en el pasado, guarde también esa. El importador de FastComments lee el CSV de OpenWeb con columnas como `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` y `url`.
- **Su Spot ID y la lista de IDs de publicaciones.** Cada `data-post-id` que pasa al lanzador se convierte en un ID de URL de FastComments. Si sus IDs de publicación son IDs de artículos del CMS, anote cómo se generan para que pueda emitir los mismos valores en FastComments.
- **Su lista de usuarios SSO.** Específicamente los valores `primary_key` y `user_name` que registró con OpenWeb. La autoría de los comentarios se empareja por nombre de usuario durante la importación, por lo que debe pasar los mismos nombres de usuario en la carga útil SSO de FastComments.
- **Su lista de moderadores y roles.** Cuentas de administrador, moderador y periodista, y qué secciones modera cada una.
- **Su configuración de moderación.** Política del sitio (aprobar todo, publicar y moderar, requerir aprobación), anulaciones por artículo, lista de palabras restringidas, usuarios silenciados y prohibidos.
- **CSS personalizado y configuraciones de tema.** Exporte cualquier cosa que tenga en el Panel de Administración para que pueda reconstruirla en la página de personalización del widget de FastComments.
- **Dónde vive el lanzador en sus plantillas**, incluyendo cualquier página que ejecute Reacciones, Topic Tracker, Spotlight, la Campana de Notificaciones o un Anuncio Independiente sin una Conversación.

### Migración asistida por IA

FastComments proporciona un [LLM Kit y servidor MCP para acelerar la migración](https://docs.fastcomments.com/guide-llm-kit.html).

### Cómo los IDs de publicación de OpenWeb se asignan a los IDs de URL de FastComments

FastComments vincula un hilo de comentarios a un `urlId`. Por defecto el ID de URL es la URL de página limpiada, pero puede establecerse a cualquier cadena, y eso es exactamente lo que hace el importador de OpenWeb: lee la columna `post_id` y la usa como el ID de URL de FastComments para cada comentario de ese artículo. También almacena la columna `url` como la URL de visualización para que los enlaces de moderación y los correos de notificación apunten a la página correcta.

Así que la regla para sus plantillas es: donde pasaba `data-post-id="POST_ID"` y `data-post-url="ARTICLE_URL"` a OpenWeb, pase `urlId: 'POST_ID'` y `url: 'ARTICLE_URL'` a FastComments. Los hilos importados se alinean con los hilos en vivo sin redirecciones ni reescritura de URL. Vea <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">la documentación del ID de URL</a>.

Si prefiere clavear los hilos por URL en el futuro en lugar de por ID de publicación, importe primero y luego use la herramienta Migrar Comentarios bajo Administrar Datos para mover los hilos del ID de publicación a la URL en bloque.

### El mapa de características

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Notes |
| --- | --- | --- |
| Conversación con actualizaciones en tiempo real | Widget de comentarios con comentarios en vivo | En vivo por defecto. Los nuevos comentarios se colapsan detrás de un botón "Mostrar N nuevos comentarios", o aparecen instantáneamente con `showLiveRightAway`. |
| Me gusta y no me gusta en los comentarios | Votos positivos y negativos | La importación conserva `likes_count` y `dislikes_count`. El estilo de corazón y "desactivar votación" son opciones de configuración. |
| Reacciones (iconos a nivel de artículo) | Reacciones de página | Conjunto de iconos configurable en la página, recordado por usuario. |
| Respuestas y subhilos | Respuestas en subhilo, profundidad ilimitada | `maxReplyDepth` limita la anidación. |
| Ordenación: mejor, más reciente, más antiguo | Más relevante, más reciente primero, más antiguo primero | `defaultSortDirection` establece el predeterminado por sitio o por patrón de URL. |
| Perfiles de usuario | Perfiles de usuario | Avatar, biografía, insignias, karma, actividad, mensajes directos. Funciona para usuarios SSO. |
| Insignia de autor | `displayLabel`, `isAdmin`, `isModerator`, insignias | Se establece en la carga útil SSO. No se necesita llamada de búsqueda en backend. |
| Actualizaciones de Live Blog fijadas, comentarios destacados | Fijar y desafijar cualquier comentario | Los moderadores fijan desde el widget o el panel. Una plantilla de agente IA fija los comentarios con más votos. |
| Encuestas en conversación | Encuestas en comentarios | De 2 a 10 opciones, fechas de cierre, modos de privacidad, restricciones de creador. |
| Formatos Ask Me Anything | Sin producto dedicado | Ejecutar como un hilo con el usuario SSO del autor etiquetado y la pregunta fijada. |
| Live Blog | Sin equivalente 1:1 | Existe un widget de Live Chat y comentarios en modo chat. El blog en vivo editorial permanece en su CMS. |
| Topic Tracker (seguir temas y autores) | Suscripciones a páginas | Los usuarios siguen una página, no un tema o autor. No hay seguimiento entre artículos. |
| Campana de notificaciones | Campana de notificaciones en el widget | Respuestas, menciones, actividad del hilo, votos, suscripciones, insignias, mensajes directos. |
| Notificaciones por correo electrónico | Notificaciones por correo electrónico con plantillas | Opt‑in por usuario mediante banderas SSO. Plantillas personalizadas, remitente con marca. |
| Apretón de manos SSO (codeA/codeB) | SSO seguro (carga útil HMAC‑SHA256) | Sin llamada register-user. Firmar una carga útil en el servidor y pasarla al widget. |
| SSO de terceros (Auth0, Gigya, Piano) | SSO seguro después de que su proveedor autentique | Misma carga útil. Su backend la firma una vez que el usuario ha iniciado sesión. |
| Identidad (pantallas de registro de OpenWeb) | Inicio de sesión con enlace mágico, SSO simple | Los lectores inician sesión con un enlace de correo electrónico. Sin contraseñas. |
| Política de moderación por artículo | Reglas de personalización por patrón ID de URL | Modo de aprobación, filtro de spam y más varían según patrones `*/section/*`. |
| Moderación AI Aida | Clasificadores de spam, filtros basados en LLM, moderación de imágenes, agentes IA | Los agentes comienzan en ejecución de prueba y pueden requerir aprobación humana. |
| Palabras restringidas | Lista negra de palabras personalizable por localidad | ~450 frases predeterminadas, editables. |
| Silenciamiento de usuarios | Bloquear usuario | Bloqueo por lector desde el menú de comentarios. |
| Prohibiciones | Prohibiciones | Permanentes, temporales, sombra, con hash de IP, y conscientes de alias. |
| Panel de moderación | Panel de moderación de comentarios | Filtros, acciones masivas con deshacer, grupos de moderación, correos digest con aprobación de un clic. |
| Webhook de notificaciones | Webhooks | Comentario creado, actualizado, eliminado. No webhook de notificaciones por usuario. |
| Panel de compromiso | Analíticas | Usuarios en vivo, páginas principales, cargas de página, comentarios, votos, cuentas por día. No informes de ingresos publicitarios. |
| Anuncios en conversación, Anuncio independiente | Ninguno | FastComments no muestra anuncios. Usted mantiene su propia pila de anuncios alrededor del widget. |
| Reseñas sociales (valoraciones de estrellas) | Valoraciones y reseñas | Producto separado en la misma cuenta. |
| Popular en la comunidad | Widgets de discusiones recientes y páginas principales | Recirculación impulsada por la actividad de comentarios. |
| Contador de comentarios | Widgets de recuento de comentarios | Individual y masivo. |
| API de exportación de comentarios | Exportación CSV, API, webhooks | Exportar desde el panel en cualquier momento. |
| Exportar y eliminar datos de usuario (GDPR/CCPA) | Eliminación de cuenta y datos, región EU | eu.fastcomments.com mantiene los datos en la UE. DPA disponible. |
| SDKs para Android, iOS, React Native | SDKs para Android, iOS, React Native | UI nativa, SSO, actualizaciones en vivo, subhilos, acciones de moderación. |
| Lanzador, Páginas virtuales, SDK React | Script de inserción, `fcConfigs`, bibliotecas React, Vue, Angular, SolidJS | `update()` y `destroy()` para SPA. |

</div>

El resto de esta sección recorre cada grupo en detalle.

### Conversación, votos y reacciones

La Conversación de OpenWeb es un hilo en tiempo real. El widget de comentarios de FastComments también lo es: comentarios, ediciones, eliminaciones, votos y acciones de moderación se envían a todos los que ven el hilo (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Por defecto, los nuevos comentarios de otras personas aparecen detrás de un botón "Mostrar 2 nuevos comentarios" para que la página no salte bajo el lector. Para eventos en vivo, establezca `showLiveRightAway` para que se rendericen inmediatamente, y `newCommentsToBottom` si desea que fluyan hacia abajo como un chat.

Los me gusta y no me gusta se convierten en votos positivos y negativos. El importador conserva ambos recuentos por comentario. Si su comunidad está acostumbrada a un solo me gusta, cambie el estilo de voto a corazones en la página de personalización del widget. La votación también puede desactivarse por completo.

Reacciones de OpenWeb es un widget separado con dos a cuatro iconos etiquetados en el artículo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). El equivalente de FastComments es Reacciones de página: un conjunto configurable de imágenes de reacción adjuntas al widget de comentarios, recordado por página y por usuario (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Los recuentos de reacciones no forman parte de la exportación de comentarios de OpenWeb, por lo que comienzan en cero.

La ordenación se asigna directamente. Los valores `data-sort-by` de OpenWeb: best, newest y oldest corresponden a Más relevante, Más reciente primero y Más antiguo primero. Establezca el predeterminado con `defaultSortDirection` (`MR`, `NF`, `OF`) en código o en una regla de personalización. Los lectores pueden cambiarlo en el widget.

`data-read-only="true"` se convierte en `readonly: true`, lo que bloquea nuevos comentarios, votos, ediciones y eliminaciones. `data-post-staleness-days` no tiene equivalente directo, pero una regla de personalización puede aplicar `readonly` a un patrón de ID de URL, y también puede activarlo desde sus plantillas según la antigüedad del artículo. `data-messages-count` es el tamaño de página, se establece en la página de personalización del widget entre 10 y 200 comentarios.

### Respuestas y subhilos

FastComments admite anidación ilimitada por defecto; `maxReplyDepth` la limita (`1` da una estructura plana de dos niveles). El CSV de OpenWeb incluye columnas `parent_id` y `parent_comment_id`. El importador lee `parent_comment_id` y reconstruye el árbol de respuestas a plena profundidad, de modo que una respuesta a una respuesta permanece anidada bajo su padre directo, con autor, marca de tiempo, votos, recuento de denuncias y estado de aprobación intactos. Las respuestas se enlazan incluso cuando aparecen antes de su padre en el archivo, o cuando el padre se importó de una ventana de exportación anterior. Una respuesta cuyo padre falta en todas las exportaciones se convierte en un comentario de nivel superior. El ID de mensaje de OpenWeb se almacena en cada comentario, por lo que una reimportación de una importación plana anterior lo vuelve a encadenar en su lugar.

### Perfiles de usuario e insignias

Los usuarios de FastComments, incluidos los usuarios SSO, obtienen un perfil con avatar, nombre para mostrar, biografía, enlaces sociales, insignias, karma, recuento de comentarios, un feed de actividad público y mensajes directos (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Cada una de las superficies de actividad, comentarios de perfil y DM pueden desactivarse por usuario en la carga útil SSO o globalmente en la configuración.

La Insignia de autor de OpenWeb requiere que llame a `GET /sso/v1/user/{primary_key}` para el autor y coloque el ID devuelto en `data-author-id`. En FastComments usted establece `displayLabel: 'Author'` (o cualquier etiqueta de hasta 100 caracteres) en la carga útil SSO del usuario, y `isAdmin` o `isModerator` para el personal. La etiqueta se muestra junto a su nombre en cada comentario. Para un sistema más rico, configure insignias bajo Personalizar, Insignias: imágenes o insignias de texto, otorgadas automáticamente por umbrales (recuento de comentarios, votos positivos, comentarios fijados, estado veterano, velocidad de respuesta) o manualmente, y asignables desde la carga útil SSO con `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Comentarios fijados, encuestas y preguntas y respuestas

Cualquier moderador puede fijar o desafijar un comentario desde el menú de comentarios en el widget o desde el panel de moderación. Los comentarios fijados se envían en vivo a todos en el hilo. Si desea automatizarlo, la función de Agentes IA incluye una plantilla Top Comment Pinner que fija un comentario de nivel superior una vez que supera un umbral de votos (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Las encuestas en conversación de OpenWeb permiten al personal adjuntar una encuesta de 2 a 4 opciones a un comentario de nivel superior. Las encuestas de FastComments también se adjuntan a un comentario, con 2 a 10 opciones, una fecha de cierre opcional, privacidad de resultados (anónima, solo administradores, todos), y un modo "votar para ver resultados". Usted elige quién puede crear encuestas (desactivado, administradores y moderadores, todos) y si los lectores anónimos pueden votar. Las encuestas también se exponen en la API pública para crearlas desde su CMS.

OpenWeb ha ejecutado formatos Ask Me Anything en su plataforma. FastComments no tiene un producto Q&A separado. El reemplazo práctico es un hilo normal en una URL ID dedicada: el usuario SSO del invitado lleva un `displayLabel`, usted fija el comentario de introducción, los lectores hacen preguntas en comentarios de nivel superior, el invitado responde dentro del hilo, y las notificaciones de menciones y respuestas traen a la gente de vuelta. Establezca `noNewRootComments` después de que la ventana se cierre para que solo continúen las respuestas.

Community Spotlight (el recolector de correos, contador y tarjetas de redirección de OpenWeb) no tiene equivalente. El widget soporta HTML de encabezado personalizado arriba del campo de comentario mediante `headerHTML`, lo que cubre una llamada a la acción pero no un formulario de captura de correo.

### Blog en vivo

No hay Blog en vivo de FastComments. El Blog en vivo de OpenWeb es un producto editorial: reporteros asignados en el panel de administración publican actualizaciones con enlaces incrustados, tweets y videos, y los lectores siguen el flujo (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Lo que FastComments ofrece para cobertura en vivo es el lado del lector: un widget de Live Chat (`embed-live-chat.min.js`) para chat en streaming, y el widget de comentarios en modo chat (`showLiveRightAway` más `newCommentsToBottom`) junto a su cobertura en vivo. Para las actualizaciones editoriales, los editores que migran de OpenWeb las mantienen en su CMS o una herramienta de blog en vivo dedicada y embeben FastComments debajo para la discusión. Los incrustados de medios (YouTube, SoundCloud y otros) son compatibles dentro de los comentarios, por lo que las actualizaciones del personal publicadas como comentarios llevan contenido multimedia.

### Tracker de temas, notificaciones y correo electrónico

El Tracker de temas de OpenWeb permite a un lector seguir temas y autores extraídos de los metadatos de la página y recibir notificaciones cuando nuevos artículos coinciden (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments no tiene seguimiento de temas o autores entre artículos. Los lectores se suscriben a una página desde la campana de notificaciones y reciben actualizaciones para ese hilo, con la frecuencia elegida por suscripción: cada minuto, resumen horario o resumen diario. Si el seguimiento entre artículos es importante para sus métricas de retención, háganoslo saber ya que esta función está en nuestra hoja de ruta.

Todo lo demás en la Campana de notificaciones se asigna. El widget tiene una campana que se vuelve roja con el recuento de no leídos y lista: respuestas a usted, respuestas en un hilo donde comentó, menciones, votos positivos en sus comentarios, actividad en páginas suscritas, premios de insignias y mensajes directos (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Las notificaciones en la aplicación son en tiempo real sobre un WebSocket. Los correos de respuesta y mención se envían cada minuto solo para comentarios aprobados.

Para usuarios SSO, pase `optedInNotifications` y `optedInSubscriptionNotifications` en la carga útil y FastComments actualiza sus preferencias en la siguiente carga de página. Los correos necesitan una dirección de correo en la carga útil. Las plantillas de correo son editables por tipo y por localidad bajo Personalizar, Plantillas de correo, y el envío desde su propio dominio con DKIM es compatible. Los moderadores y administradores reciben un resumen diario, semanal o mensual con aprobación de un clic, respuesta y enlaces de spam.

El Webhook de notificaciones de OpenWeb publica eventos de notificación por usuario (`replied-message`, `liked-message`, `topic-by-keyword`, etc.) a su endpoint. Los webhooks de FastComments cubren el recurso de comentario: creado, actualizado y eliminado, con tantos endpoints suscriptores como desee (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Si estaba usando el webhook de notificaciones para alimentar su propio sistema de correo, reconstruirá esa lógica sobre eventos de comentario, o dejará que FastComments envíe los correos.

### SSO: De codeA/codeB a una carga útil firmada

El apretón de manos de OpenWeb tiene seis pasos: esperar `spot-im-api-ready`, OpenWeb genera `codeA`, su cliente lo envía a su backend, su backend confirma al usuario y llama a `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb devuelve `codeB`, y su cliente devuelve `codeB` a OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). El cierre de sesión llama a `window.SPOTIM.logout()`.

FastComments Secure SSO no tiene ida y vuelta ni nuevo endpoint en su lado. Cuando renderiza la página para un usuario con sesión iniciada, su backend serializa al usuario, lo codifica en Base64 y lo firma con HMAC‑SHA256 usando su secreto API. El widget envía la carga útil con sus peticiones y FastComments verifica la firma (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). En Node:

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

El timestamp es milisegundos epoch y se rechaza si tiene más de dos días. Para un lector sin sesión, omita los tres campos firmados y pase solo `loginURL` (o una función `loginCallback`) y el widget muestra un aviso de inicio de sesión en lugar de un compositor. Los ejemplos completos en Node, Java y PHP están en el <a href="https://github.com/Fastcomments/fastcomments-code-examples/tree/master/sso" target="_blank">repositorio de ejemplos de código</a>.

Los usuarios se crean en la primera carga de página. No registra a nadie en bloque. Debido a que el importador de OpenWeb empareja a los autores de comentarios por `user_name`, un usuario cuya carga útil SSO lleva el mismo `username` reclama sus comentarios importados la primera vez que carga un hilo y puede editarlos o eliminarlos a partir de entonces. También hay una API de usuario SSO si desea pre‑crear usuarios.

Cada vez que se envía la carga útil, FastComments actualiza el registro de usuario a partir de ella, por lo que un nombre para mostrar o avatar cambiado de su lado se propaga en la siguiente vista de página. Establezca un campo a `null` para borrarlo.

Si usó el SSO de terceros de OpenWeb con Auth0, Gigya o Piano vía `window.SPOTIM.startSSOForProvider`, el flujo de FastComments es el mismo que arriba: una vez que su proveedor haya autenticado al usuario, su backend construye y firma la carga útil. No hay integración específica del proveedor que configurar en FastComments.

Existen dos opciones más. SSO simple pasa el objeto de usuario sin firmar desde el cliente, para plataformas sin backend, y marca la actividad como verificada cuando hay un correo (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 firma a su personal en el propio panel de FastComments a través de Okta, Azure AD o ADFS, con mapeo de roles, y está disponible en planes empresariales (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderación

La API de Política de Moderación por artículo de OpenWeb tiene cuatro valores: `spot_policy`, `approve_all`, `publish_and_moderate` y `require_approval`. FastComments configura los mismos comportamientos en Configuración de Moderación: aprobación automática activada o desactivada, aprobación requerida solo para el primer comentario de un usuario, y auto‑aprobación solo de comentarios verificados (con sesión iniciada o SSO). Las reglas se aplican a nivel de sitio o a un patrón de ID de URL como `*/politics/*`, que es cómo reproduce la política por sección. Cada comentario, aprobado o no, llega al panel Moderar Comentarios, por lo que el modelo publicar‑luego‑revisar es la vista predeterminada allí (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

La importación lleva el estado de moderación. `message_status` de OpenWeb de `approved` se importa como aprobado y revisado; `rejected` se importa como spam y revisado; cualquier otro se importa como no aprobado y no revisado, por lo que aparece en su cola de moderación. `reports_count` se convierte en el recuento de denuncias del comentario.

La moderación automatizada en FastComments está en capas en lugar de un solo sistema como Aida:

- Un clasificador de spam, entrenado continuamente, disponible como modelo compartido entre todos los inquilinos o aislado a su inquilino, con un factor de confianza que relaja el filtrado para usuarios de larga data o frecuentemente fijados.
- Un chequeo opcional de spam LLM en facturación Flex (modelos de peso abierto como GLM-5.3 están disponibles)
- Moderación de contenido de imagen a baja, media o alta sensibilidad para imágenes subidas.
- Una lista negra de palabras localizada de aproximadamente 450 frases predeterminadas, editable, que enmascara coincidencias con asteriscos. Aquí es donde van sus palabras restringidas de OpenWeb.
- Umbrales de denuncias que ocultan automáticamente un comentario después de N reportes.
- Prevención de mensajes repetidos y casi duplicados, siempre activada.
- Agentes IA: agentes impulsados por eventos con una lista explícita de herramientas (marcar spam, aprobar, bloquear, fijar, advertir por DM, prohibir, otorgar insignia, responder). Cada agente comienza en ejecución de prueba, las herramientas sensibles pueden estar detrás de aprobación humana, y cada acción se registra con una justificación y puntuación de confianza.

La API de Silenciamiento de usuarios de OpenWeb permite que un lector SSO silencie a otro. El equivalente en FastComments es Bloquear usuario en el menú de comentarios, disponible para cualquier lector con sesión iniciada. Las prohibiciones son una acción de moderador: permanente o por duración establecida, opcionalmente una prohibición sombra (el usuario ve su comentario publicado pero nadie más lo ve), opcionalmente por IP con hash, con alias de correo tratados como una sola dirección. La lista de usuarios prohibidos se puede buscar por correo, nombre, moderador y el comentario que desencadenó la prohibición.

El panel Moderar Comentarios soporta filtros (necesita revisión, necesita aprobación, spam, denunciado, de usuarios prohibidos) y búsqueda de texto, acciones masivas con deshacer y pausa, "seleccionar todo lo que coincide" para colas muy grandes, grupos de moderación para que su escritorio deportivo solo vea hilos deportivos, registros por comentario que muestran por qué un correo se envió o no, y enlaces filtrados compartibles. Los moderadores solo tienen el panel; no pueden cambiar configuraciones ni importar datos.

### Analíticas

FastComments Analytics muestra usuarios en línea ahora mismo en sus sitios y por página, páginas principales por comentarios o por lectores en vivo, y series diarias para cargas de página, comentarios, votos y cuentas creadas (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Las estadísticas de moderador son separadas. Los recuentos son casi en tiempo real, con un retraso máximo de un minuto, y cada carga de página se cuenta en lugar de muestrearse.

Lo que no encontrará es cualquier cosa sobre relleno de anuncios, CPM o ingresos, porque no hay anuncios. Si el panel de OpenWeb era su fuente para informes de compromiso‑a‑ingresos, ese informe se traslada a su propia pila de anuncios.

### Monetización

OpenWeb coloca anuncios dentro y alrededor de la Conversación y ofrece una unidad de Anuncio independiente, con campañas configuradas a través de su contacto de OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments no muestra anuncios en el widget, no tiene reparto de ingresos, y no carga scripts de anuncios o seguimiento de terceros. El widget es un iframe que usted coloca; los espacios publicitarios arriba y abajo son suyos y se ejecutan a través de lo que ya usa.

El intercambio es explícito: pierde lo que OpenWeb le pagaba, y gana un costo fijo, predecible y un widget que no añade solicitudes de anuncios a su página. La marca se elimina en planes Flex y Pro, y el etiquetado blanco está disponible en planes Pro y Enterprise.

### Exportación de datos y privacidad

Todas las exportaciones de datos de comentarios del panel de FastComments están disponibles como CSV en cualquier momento, con fechas en formato UTC ISO, y los mismos datos están disponibles a través de la API. Los webhooks cubren la sincronización continua. Los archivos de importación se eliminan de FastComments tan pronto como la importación se completa.

Para GDPR y CCPA, OpenWeb proporciona una API de exportación y eliminación donde los comentarios de usuarios eliminados permanecen adjuntos a una cuenta de invitado aleatoria (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments soporta solicitudes de exportación y eliminación de datos, ofrece un Acuerdo de Procesamiento de Datos, y ejecuta un despliegue separado en la UE en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> con datos replicados solo dentro de los puntos de presencia de la UE. Cree su cuenta allí si sus lectores están en Europa. En la región UE, los baneos de agentes IA siempre requieren aprobación humana para cumplir con el Artículo 17 del DSA.

Los datos de comentarios en el despliegue global se replican entre regiones, incluido un nodo en Singapur, y el widget se sirve desde el propio DNS y CDN de FastComments. El script de inserción pesa alrededor de 35 kb comprimido en la transmisión.

### SDKs móviles

OpenWeb ofrece SDKs para Android, iOS y React Native con Conversación, Artículos, Autenticación, Notificaciones, Reacciones y Encuestas en conversación. FastComments ofrece bibliotecas nativas <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> y <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> con comentarios en subhilo, actualizaciones en vivo sobre WebSocket, SSO seguro, votación, menciones, carga de imágenes, acciones de moderación (denunciar, fijar, bloquear, bloquear), tematización, modo de chat en vivo y un componente de feed social. La región UE es una bandera de configuración. No hay SDK de anuncios porque no hay anuncios.

### Integración de inserción y SPA

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

Su ID de inquilino está en la <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">página de credenciales</a> una vez que tenga una cuenta. `data-article-tags` no tiene equivalente ya que no hay seguimiento de temas; los hashtags dentro de los comentarios son una característica diferente.

Para desplazamiento infinito y aplicaciones de una sola página, el enfoque de Páginas Virtuales de OpenWeb es un contenedor por artículo. En FastComments llama a `FastCommentsUI(element, config)` por hilo y luego `instance.update(newConfig)` para cambiar el ID de URL o `instance.destroy()` para eliminarlo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Las bibliotecas React, Vue, Angular y SolidJS manejan esto cuando cambia la prop de configuración. Los callbacks de ciclo de vida (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) reemplazan los eventos DOM `spot-im-*` que estaba escuchando.

Los recuentos de comentarios en páginas índice usan el widget de recuento de comentarios, individual o masivo. Para SEO, los comentarios se renderizan directamente en la página para los rastreadores de motores de búsqueda en lugar de dentro del iframe, por lo que no hay llamada API SEO para configurar.

### Corte paso a paso

**1. Crear la cuenta y configurar lo básico.** Regístrese en fastcomments.com o eu.fastcomments.com. Configure sus ajustes de moderación, lista negra de palabras, estilo de voto, orden predeterminado y CSS personalizado en la página de personalización del widget. Añada moderadores y grupos de moderación. Si tiene muchos usuarios administradores, el soporte los importa por usted.

**2. Ejecutar una primera importación.** Vaya a <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Administrar datos, Importar</a>, elija OpenWeb (.csv) y cargue. La importación se ejecuta como un trabajo en segundo plano; la página muestra el recuento de filas y el estado, y recibe un correo cuando se completa (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Cada comentario conserva su ID de mensaje de OpenWeb como ID externo, por lo que volver a ejecutar una importación actualiza los comentarios existentes en lugar de crear duplicados.

**3. Verificar los recuentos.** Compare el recuento de filas del trabajo con su exportación. Abra algunos IDs de URL de alto tráfico en el panel de moderación y verifique manualmente autores, fechas, totales de votos y estados de aprobación. Confirme que los comentarios rechazados aparecen como spam y los pendientes están en la cola.

**4. Construir la carga útil SSO.** Implemente el código de firma anterior en su backend, usando el mismo `id` y `username` que usó con OpenWeb. Pruebe con una cuenta de personal en una página de pruebas: los comentarios importados del usuario aparecen como suyos, y editar y eliminar aparecen en su menú de comentarios.

**5. Cambiar la inserción en una plantilla de pruebas.** Reemplace el lanzador y contenedor con el fragmento de FastComments, mapeando `data-post-id` a `urlId` y `data-post-url` a `url`. Elimine `window.SPOTIM.logout()` y los listeners `spot-im-*`, o mapeelos a los callbacks. Aplique su CSS en una regla de personalización en lugar de en código para que se pruebe en cada lanzamiento de FastComments.

**6. Ejecutar en paralelo.** Coloque FastComments en una sección o un porcentaje de artículos mientras OpenWeb permanece en el resto. No se necesita cambiar nada del lado de OpenWeb. Observe la cola de moderación y la página de analíticas. Los lectores que comenten en páginas de FastComments durante esta ventana no están en su exportación de OpenWeb, por lo que planifique la importación final antes de que empiecen, no después.

**7. CSP y DNS.** Si utiliza una Política de Seguridad de Contenido, permita `cdn.fastcomments.com` y `fastcomments.com` (o `eu.fastcomments.com`) para `script-src`, `frame-src` y `connect-src`, y elimine las entradas `spot.im` y `openweb.com` una vez que el lanzador desaparezca. No hay cambios en su propio DNS. No se necesitan redirecciones porque los IDs de URL coinciden.

**8. Importación final y puesta en marcha.** Obtenga una exportación adicional de OpenWeb que cubra la ventana de ejecución paralela, cárguela (re‑importar es seguro), luego despliegue el cambio de plantilla en todas las páginas y elimine el lanzador, Reacciones, Tracker de temas, Spotlight, la campana y los contenedores de anuncios.

**9. Lista de verificación para puesta en marcha.**

- Comentarios en vivo visibles en un artículo de producción desde dos navegadores.
- Inicio y cierre de sesión SSO y un comentario bajo una cuenta de suscriptor real.
- Los moderadores reciben el resumen y pueden aprobar desde él.
- Los correos de respuesta y mención llegan y enlazan a la página correcta.
- Lista de prohibiciones y lista negra de palabras pobladas.
- Reacciones de página y recuentos de comentarios renderizados donde antes estaban Reacciones y el contador.
- Informes CSP limpios.
- Una última comparación de recuentos de comentarios entre su exportación y el panel.

### Lo que pierdes y lo que es diferente

Siendo directo sobre las brechas:

- **Live Blog.** No hay equivalente. Manténgalo en su CMS o una herramienta de blog en vivo y coloque FastComments debajo.
- **Tracker de temas.** No hay seguimiento de temas o autores entre artículos. Solo suscripciones a páginas.
- **Community Spotlight.** No hay producto de tarjeta CTA. `headerHTML` le brinda un mensaje encima del compositor, no un formulario de captura de correo.
- **Ingresos por anuncios.** Ninguno. El widget está libre de anuncios por diseño.
- **Webhook de notificaciones.** Los webhooks son sobre eventos de comentarios, no sobre eventos de notificación por usuario.
- **Historial de reacciones.** Los recuentos de reacciones a nivel de artículo no están en la exportación de comentarios y comienzan en cero. A veces podemos extraerlos de su sitio.
- **Historial de encuestas.** Las definiciones y votos de encuestas no están en la exportación de comentarios; el texto del comentario de la encuesta se importa, la encuesta no. A veces podemos extraerlos de su sitio.
- **Modelo de inicio de sesión.** Los lectores sin SSO inician sesión mediante enlace mágico en lugar de una contraseña o un botón de inicio de sesión social por defecto.
- **Personal de moderación humano.** OpenWeb incluye un equipo de moderación con Aida. FastComments proporciona herramientas, clasificadores y agentes; los humanos son suyos.

Lo que gana, en el mismo espíritu: un widget que añade un pequeño script y no solicita anuncios, moderación que una persona puede ejecutar para un sitio grande con acciones masivas y agentes, SSO que es una función de firma en lugar de un protocolo, y un proveedor que no está bajo supervisión judicial.

### Cronograma y la oferta de importación gratuita

Planifique una a dos semanas para un editor con una integración SSO y varios cientos de miles de comentarios: un día o dos en la exportación y primera importación, unos días en SSO y plantillas, una ventana de ejecución paralela, luego la importación final y el cambio. La plataforma ya maneja esta escala: United Cloud ejecuta más de diez portales y millones de comentarios en FastComments, y itsfoss.com trasladó un historial de 88 000 comentarios de otro proveedor mediante el mismo importador autoservicio.

FastComments importa su exportación CSV de OpenWeb de forma gratuita, le ayuda a ejecutar OpenWeb y FastComments en paralelo durante el corte, y ayuda con la migración misma, incluyendo preguntas de subhilos y coincidencia de usuarios. Los planes Enterprise incluyen un SLA del 99,99 % y respuestas de soporte dentro de una hora durante el horario laboral. El precio basado en uso Flex está disponible para sitios que quieran comenzar sin contrato.

<a href="https://fastcomments.com/contact-us">Escríbanos</a> con su tamaño de exportación y su configuración SSO y le responderemos con un plan.

### En conclusión

Extraiga su exportación hoy. Recuerde: los mismos IDs de publicación se convierten en IDs de URL, el estado de moderación se mantiene, y la inserción es un simple intercambio. Los lugares donde FastComments difiere están listados arriba para que pueda decidir con los hechos frente a usted. :)

¡Saludos!

{{/isPost}}

---