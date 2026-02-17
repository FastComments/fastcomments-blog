---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Actualización de Frecuencia de Notificaciones por Email[/postlink]

{{#unless isPost}}
Los usuarios ahora pueden controlar con qué frecuencia reciben notificaciones por email para nuevos comentarios y respuestas: cada minuto, resumen horario o resumen diario, con una sola configuración compartida, además de anulaciones por suscripción.
{{/unless}}

{{#isPost}}

### Novedades

Hemos añadido una configuración de **Frecuencia de Notificación de Nuevos Comentarios** que controla con qué frecuencia recibes notificaciones por email tanto para notificaciones de respuestas como para notificaciones de inquilinos (nuevo comentario). Las tres opciones son:

- **Cada minuto** - recibe un email tan pronto como lleguen nuevos comentarios (verificado cada minuto).
- **Resumen horario** - recibe un resumen agrupado de nuevos comentarios una vez por hora.
- **Resumen diario** - recibe un resumen agrupado de nuevos comentarios una vez al día.

Esta configuración está disponible tanto para administradores de inquilinos como para comentaristas, y se aplica a todos los correos electrónicos de notificación de comentarios. Ten en cuenta que las notificaciones de @menciones siempre se envían de inmediato, independientemente de esta configuración.

También puedes anular la frecuencia en una base por suscripción en la tabla de Suscripciones, para un control más detallado sobre páginas individuales.

### Cómo Configurarlo

1. Ve a tus [Configuraciones de Notificación](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa el menú desplegable de **Frecuencia de Notificación de Nuevos Comentarios** para establecer tu frecuencia preferida.
3. Opcionalmente, anula la frecuencia para suscripciones individuales en la tabla de Suscripciones.
4. Haz clic en **Guardar Cambios**.

La configuración predeterminada es **Cada minuto**, que coincide con el comportamiento anterior.

### Soporte de API

La frecuencia de notificación también está disponible a través de la API. La configuración a nivel de usuario es el campo <div class="code">notificationFrequency</div>, y las anulaciones por suscripción se pueden establecer a través del campo <div class="code">notificationFrequency</div> de la suscripción. Consulta la [documentación de la API](https://docs.fastcomments.com/guide-api.html) para más detalles.

### En Conclusión

Esto le da a los usuarios control sobre su bandeja de entrada sin tener que darse de baja de las páginas por completo. Una configuración ahora cubre tanto las notificaciones de respuesta como las de inquilino, facilitando su gestión.

¡Déjanos saber abajo si tienes algún comentario!

¡Saludos!

{{/isPost}}