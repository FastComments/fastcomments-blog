---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Actualización de la Frecuencia de Notificaciones por Correo Electrónico[/postlink]

{{#unless isPost}}
Los usuarios ahora pueden controlar con qué frecuencia reciben notificaciones por correo electrónico para nuevos comentarios y respuestas, cada minuto, resumen horario o resumen diario, con una única configuración compartida, además de anulación por suscripción.
{{/unless}}

{{#isPost}}

### Novedades

Hemos añadido una configuración de **Frecuencia de Notificación de Nuevos Comentarios** que controla con qué frecuencia recibes notificaciones por correo electrónico tanto para notificaciones de respuestas como para notificaciones de inquilinos (nuevo comentario). Las tres opciones son:

- **Cada minuto** - recibir un correo electrónico tan pronto como lleguen nuevos comentarios (comprobado cada minuto).
- **Resumen horario** - recibir un resumen agrupado de nuevos comentarios una vez por hora.
- **Resumen diario** - recibir un resumen agrupado de nuevos comentarios una vez al día.

Esta configuración está disponible tanto para administradores de inquilinos como para comentaristas, y se aplica a todos los correos electrónicos de notificación de comentarios. Ten en cuenta que las notificaciones @mention se envían siempre de inmediato, independientemente de esta configuración.

También puedes anular la frecuencia en base a cada suscripción en la tabla de Suscripciones, para un control más detallado sobre páginas individuales.

### Cómo Configurarlo

1. Ve a tus [Configuraciones de Notificación](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa el menú desplegable de **Frecuencia de Notificación de Nuevos Comentarios** para establecer tu frecuencia preferida.
3. Opcionalmente, anula la frecuencia para suscripciones individuales en la tabla de Suscripciones.
4. Haz clic en **Guardar Cambios**.

El valor predeterminado es **Cada minuto**, que coincide con el comportamiento anterior.

### Soporte API

La frecuencia de notificación también está disponible a través de la API. La configuración a nivel de usuario es el campo `notificationFrequency`, y las anulaciones por suscripción se pueden establecer a través del campo `notificationFrequency` de la suscripción. Consulta la [documentación de la API](https://docs.fastcomments.com/guide-api.html) para más detalles.

### En Conclusión

Esto le da a los usuarios control sobre su bandeja de entrada sin tener que cancelar la suscripción de las páginas por completo. Ahora, una configuración cubre tanto las notificaciones de respuestas como las de inquilinos, lo que simplifica la gestión.

¡Déjanos saber abajo si tienes algún comentario!

¡Saludos!

{{/isPost}}

---