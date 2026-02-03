---
[category:API & Development]
###### [postdate]
# [postlink]Los Webhooks llegan a FastComments[/postlink]

{{#unless isPost}}
FastComments ahora puede llamar a tu API para la creación, actualización y eliminación de comentarios.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

Con FastComments ahora es posible invocar un endpoint de API cada vez que un comentario se agrega, actualiza o elimina de nuestro sistema. 

Lo logramos con webhooks asíncronos sobre HTTP/HTTPS.

#### Cómo Usarlo

Primero, navega a la <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">admin de Webhooks</a>. Esto es accesible a través de Gestionar Datos -> Webhooks.

Desde allí puedes especificar endpoints para cada tipo de evento de comentario.

Para cada tipo de evento, asegúrate de hacer clic en **Enviar Carga de Prueba** para asegurarte de que configuraste tu integración correctamente. Consulta la siguiente sección, "Pruebas", para más detalles.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Ejemplo de Configuración de Webhooks" title="Ejemplo de Configuración de Webhooks" class="lozad" />
</div>

#### Pruebas

En el <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">admin de Webhooks</a> hay botones de "Enviar Carga de Prueba" para cada tipo de evento (Crear, Actualizar, Eliminar). Los eventos Crear y Actualizar envían un objeto WebhookComment de prueba, mientras que probar Eliminar enviará un cuerpo de solicitud de prueba con solo un ID.

La prueba hará dos llamadas para verificar el código de respuesta en escenarios "felices" (clave de API correcta) y "tristes" (clave de API inválida).

Cuando la prueba envía una clave de API inválida, deberías devolver un código de estado 401 para que la prueba pase completamente. Si no verificas correctamente el valor del token, verás un error como:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Fallo en la Prueba de Autenticación de Webhooks" title="Fallo en la Prueba de Autenticación de Webhooks" class="lozad" />
</div>

#### La Estructura del Objeto Comentario
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### La Estructura del Evento "Crear"

El cuerpo de la solicitud del evento "crear" es un objeto WebhookComment.

#### La Estructura del Evento "Actualizar"

El cuerpo de la solicitud del evento "actualizar" es un objeto WebhookComment.

#### La Estructura del Evento "Eliminar"

El cuerpo de la solicitud del evento "eliminar" es un objeto WebhookComment, **pero solo contiene el id**.

#### ¿Por qué tanto Crear como Actualizar usan HTTP PUT y no POST?

**Dado que todas nuestras solicitudes contienen un ID**, repetir la misma solicitud de Crear o Actualizar **no debería crear nuevos objetos de tu lado**. Esto significa que estas llamadas son idempotentes y deberían ser eventos PUT de acuerdo con la especificación HTTP.

#### Cómo Funciona

Todos los cambios en el objeto Comentario en el sistema desencadenan un evento que termina en una cola. Puedes monitorear esta cola en el <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">admin de Webhooks</a> en caso de que tu API se caiga. Si una solicitud a tu API falla, la volveremos a colocar en la cola según un calendario. Ese calendario es 1 minuto * el conteo de reintentos. Si la llamada falla una vez, intentará nuevamente en un minuto. Si falla dos veces, luego esperará dos minutos, y así sucesivamente. Esto es para que no sobrecarguemos tu API si está caído por razones relacionadas con la carga.

#### Seguridad & Token de API

En el encabezado de la solicitud pasaremos tu <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> en el parámetro llamado "token".

Si no compruebas correctamente este parámetro, tu integración no será marcada como Verificada. Esta es una medida de seguridad para garantizar que cualquier integración con FastComments sea segura.

#### En Conclusión

Esperamos que encuentres la integración de Webhook de FastComments fácil de entender y rápida de configurar.

Si tienes más preguntas, no dudes en contactar a la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de soporte al cliente</a>.

¡Saludos!

{{/isPost}}

---