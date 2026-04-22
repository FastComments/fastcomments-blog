---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]La Página de Moderación Ya Está Activa[/postlink]

{{#unless isPost}}
La página de moderación de FastComments ahora muestra una notificación en vivo cuando llegan nuevos comentarios que coinciden con tus filtros actuales.
{{/unless}}

{{#isPost}}

### Novedades

La página de moderación siempre ha sido una herramienta poderosa para gestionar comentarios. Podías filtrar por estado, buscar por texto, filtrar por página
o usuario, y realizar acciones masivas. Pero para ver nuevos comentarios tenías que actualizar la página.

¡No más! La página de moderación ahora muestra cuándo llegan nuevos comentarios que coinciden con tus filtros actuales. Aparece un banner en la parte superior de la lista de comentarios informándote cuántos nuevos comentarios están esperando, y al hacer clic se cargan en línea sin necesidad de una actualización completa de la página.

El mensaje "nuevos comentarios para tus filtros" debería ser casi instantáneo en la mayoría de las circunstancias.

### Evaluación de Filtros

La capa de transporte evalúa todos los filtros de moderación del lado del servidor. Esto incluye filtros de estado (necesita revisión, necesita aprobación, spam, marcado,
prohibido), filtros de cadena (ID de usuario, URL de página, dominio), e incluso búsqueda de texto. El texto citado como `"frase exacta"` realiza un
coincidencia exacta que no distingue mayúsculas de minúsculas, mientras que los términos no citados realizan coincidencias difusas que tampoco distinguen mayúsculas de minúsculas.

Esto significa que si estás filtrando comentarios de spam, no recibirás notificaciones sobre comentarios aprobados. Si estás buscando comentarios
que contengan una frase específica, solo los comentarios que coincidan activan el banner.

### Grupos de Moderación

Si tu cuenta utiliza grupos de moderación para restringir qué moderadores pueden ver qué comentarios, estas restricciones se aplican completamente
para las notificaciones en vivo. La capa de transporte hace una llamada de regreso al servidor de aplicaciones para construir el filtro, que incluye restricciones de grupo
basadas en los grupos asignados al moderador. Este filtro se almacena en caché durante la duración de la conexión WebSocket y se actualiza cada vez que
el moderador cambia los filtros.

### Eventos Perdidos

Si la conexión de un moderador se cae temporalmente (problemas de red, suspensión de la laptop, etc.), el sistema se pone al día automáticamente al reconectarse para que
no te pierdas ningún trabajo.

### Rendimiento

Diseñamos esta función para que tenga un impacto mínimo en el tiempo de carga de la página de moderación.

### Multi-Región

Esta función funciona sin problemas con nuestra arquitectura globalmente distribuida, por lo que los equipos de moderación distribuidos globalmente obtienen la misma vista en vivo.

### En Conclusión

Esperamos que esta función ahorre tiempo a los moderadores y haga que la experiencia de moderación sea más receptiva. Como siempre, agradecemos a nuestros clientes por
sus comentarios y su apoyo.

¡Saludos!

{{/isPost}}