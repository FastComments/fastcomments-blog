---
[category:Features]
###### [postdate]
# [postlink]Correos Electrónicos de Notificación Habilitados Para Suscripciones[/postlink]

{{#unless isPost}}
FastComments ahora envía correos electrónicos a los usuarios para las páginas a las que están suscritos.
{{/unless}}

{{#isPost}}

### Novedades

Con FastComments, los usuarios pueden hacer clic en el ícono de campana en un widget de comentarios para suscribirse a esa página. Les notificaremos
cuando se dejen nuevos comentarios en esa página, o cuando haya un nuevo comentario en un hilo de respuestas del que formen parte.

Hemos estado haciendo esto durante años; sin embargo, no enviábamos correos electrónicos para estas notificaciones, solo eran visibles en nuestro panel de control.

Ahora enviaremos correos electrónicos para estas notificaciones.

### Nuevos Tipos de Correos Electrónicos

Ahora enviamos dos nuevos tipos de correos electrónicos. El primero es cuando solo tienes un par de notificaciones. Simplemente listaremos
los nuevos comentarios en el correo electrónico para ti.

El segundo tipo de correo electrónico que recibirás contiene enlaces a cada página para la cual recibiste notificaciones. Esto se envía
cuando recibes muchas notificaciones.

Estos correos electrónicos de notificación son solo para nuevos comentarios en páginas a las que estás suscrito.

### Programa de Notificaciones por Correo Electrónico

Los correos electrónicos de notificación se envían cada hora para prevenir correos excesivos. La excepción es si la página en cuestión tiene más de diez mil
comentarios, en cuyo caso solo enviaremos notificaciones para esa página una vez al día.

### Para Propietarios de Sitios - Personalizando Los Correos Electrónicos

Pronto estará disponible una nueva plantilla de correo electrónico `Nuevos Comentarios de Suscripción` para personalizar.

### Para Desarrolladores y Advertencias

Para los Usuarios de SSO, no enviaremos los correos electrónicos de notificación por defecto. Tendrás que pasar una nueva bandera: `optedInSubscriptionNotifications: true` en el objeto del usuario, o
en la carga útil del widget de comentarios, para habilitar estas nuevas notificaciones.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y liberar correctamente esta función. Déjanos saber
a continuación si descubres algún problema.

¡Saludos!

{{/isPost}}

---