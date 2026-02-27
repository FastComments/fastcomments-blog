---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Actualización de la Frecuencia de Notificaciones por Correo Electrónico[/postlink]

{{#unless isPost}}
Los usuarios ahora pueden controlar con qué frecuencia reciben notificaciones por correo electrónico para nuevos comentarios y respuestas, cada minuto, resumen horario o resumen diario, con configuraciones separadas para respuestas y notificaciones de admin, además de anulación por suscripción.
{{/unless}}

{{#isPost}}

### Novedades

Hemos añadido configuraciones de **Frecuencia de Notificación de Respuestas** y **Frecuencia de Notificación de Admin** que controlan con qué frecuencia recibes notificaciones por correo electrónico para respuestas y nuevos comentarios, respectivamente. Las tres opciones para cada una son:

- **Cada minuto** - recibe un correo electrónico en cuanto lleguen nuevos comentarios (verificado cada minuto).
- **Resumen horario** - recibe un resumen agrupado de nuevos comentarios una vez por hora.
- **Resumen diario** - recibe un resumen agrupado de nuevos comentarios una vez al día.

La Frecuencia de Notificación de Respuestas está disponible para todos los usuarios y se establece por defecto en **Cada minuto**. La Frecuencia de Notificación de Admin está disponible para los administradores del sitio y se establece por defecto en **Resumen horario**. Ten en cuenta que las notificaciones @mention siempre se envían de inmediato, independientemente de estas configuraciones.

También puedes anular la frecuencia en función de cada suscripción en la tabla de Suscripciones, para un control más detallado sobre páginas individuales.

### Cómo Configurarlo

1. Ve a tu [Configuración de Notificaciones](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa los menús desplegables de **Frecuencia de Notificación de Respuestas** y **Frecuencia de Notificación de Admin** para establecer tus frecuencias preferidas.
3. Opcionalmente, anula la frecuencia para suscripciones individuales en la tabla de Suscripciones.
4. Haz clic en **Guardar Cambios**.

### Soporte de API

El campo `notificationFrequency` en el objeto de usuario controla la frecuencia de notificaciones de respuestas, y el campo `adminNotificationFrequency` controla la frecuencia de notificaciones de admin. Las anulaciones por suscripción se pueden establecer a través del campo `notificationFrequency` de la suscripción. Consulta la [documentación de la API](https://docs.fastcomments.com/guide-api.html) para más detalles.

### En Conclusión

Esto brinda a los usuarios control sobre su bandeja de entrada sin tener que darse de baja de las páginas por completo.

¡Déjanos saber abajo si tienes algún comentario!

¡Saludos!

{{/isPost}}