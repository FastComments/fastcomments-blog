[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Mejoras de Auditoría Publicadas[/postlink]

{{#unless isPost}}
El registro de auditoría ahora muestra quién o qué afectó cada evento por nombre, y puedes buscar en él. También hay ahora rango de fechas, búsqueda de sub‑inquilinos, diferencias a nivel de campo en actualizaciones y filtros de API coincidentes.
{{/unless}}

{{#isPost}}

### Novedades

El registro de auditoría siempre ha registrado quién realizó una acción y sobre qué se realizó. Esta versión se trata de hacer que ese registro sea legible y buscable sin salir de la página.

Si querías saber qué le sucedió a un moderador en particular, primero tenías que encontrar su ID, y si ese moderador había sido eliminado, no quedaba nada contra lo que buscar el ID. El evento indicaba que algo fue eliminado, por quién y cuándo, pero por alguna razón los nombres faltaban.

Ahora el nombre se captura junto con el ID en el momento del evento, por lo que sobrevive a la eliminación y puedes buscarlo.

### La columna Afectado

Hay una nueva columna **Affected** en la tabla que muestra la persona u objeto sobre el que actuó el evento, por nombre. Para una persona se muestra como `jsmith (jsmith@example.com)`. Para una personalización de widget o un grupo de moderación es el nombre que le asignaste. Para un archivo multimedia es el nombre de archivo que subiste.

Sobre la tabla hay un cuadro de búsqueda coincidente, **Who or what was changed**. Escribe un nombre, una dirección de correo electrónico o un ID, y encontrará los eventos que afectan a esa persona u objeto. No tienes que saber cuál de los tres tienes, y no tienes que buscar primero un ID interno.

Los eventos creados antes de esta versión no tienen un nombre adjunto, pero aún conservan el ID que siempre tuvieron, por lo que el mismo cuadro de búsqueda los encuentra por ID.

### Rango de fechas

La fila de filtros ahora tiene un menú desplegable **Date Range** con Últimos 30 días, Últimos 90 días, Último año, Todo el tiempo y **Custom range**, que muestra los selectores de fecha Desde y Hasta.

Un rango de fechas es, de lejos, la forma más fácil de limitar una búsqueda, y combinarlo con los demás filtros es la manera más rápida de encontrar algo.

### Cuentas gestionadas

Si tu cuenta gestiona otros inquilinos, hay una casilla de verificación **Include sub-tenants**. Al marcarla, se busca en tu cuenta y en cada inquilino que gestiona en una sola pasada, con una columna **Tenant** que muestra de qué cuenta proviene cada evento.

Hasta ahora, el registro de cada inquilino solo podía leerse por separado, por lo que responder “¿alguien tocó alguna de nuestras propiedades esta semana?” implicaba cambiar a cada uno por turno.

### Las actualizaciones ahora registran lo que cambió

Editar a un miembro del equipo solía registrar el conjunto resultante de permisos. Eso te indica cuáles son los permisos ahora, pero no cuáles eran, por lo que “quién eliminó el acceso de facturación de esta persona y cuándo” no tenía respuesta.

Los eventos de actualización ahora incluyen un mapa `changes` solo con los campos que realmente cambiaron, cada uno con su valor anterior y nuevo. Los campos sin cambios se omiten, de modo que un cambio de permiso se muestra en una sola línea en lugar de una pared de booleanos.

### Descripciones y el dispositivo detrás de un cambio

Los eventos destructivos ahora incluyen una frase simple que describe lo que ocurrió, como “Usuario eliminado de la cuenta.” Las vistas de página tenían descripciones y los borrados no, lo cual estaba al revés.

Los eventos que cambian algo también registran el navegador que realizó el cambio. Las sesiones se registran como un hash para que las acciones de una persona puedan correlacionarse sin que el registro almacene nada que pueda reproducirse.

### Otras mejoras

- Algunas correcciones con la paginación y combinaciones de filtros.
- Los eventos de inicio de sesión mostraban una columna **Who** en blanco. El nombre de usuario estaba en el registro todo el tiempo y la página no lo leía.
- La columna de acción mostraba los eventos de inicio de sesión como N/A, porque Login faltaba en la lista de nombres de acción.
- Las páginas del registro de auditoría no podían nombrar a los usuarios SSO, mostrando “Missing User” en su lugar. Ahora se resuelven correctamente.
- La página es mucho más rápida en cuentas con historiales extensos.

### Para la API

El endpoint `/api/v1/audit-logs` obtuvo filtros coincidentes: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` para la búsqueda por subcadena, y `includeManagedTenants`. Las respuestas ahora incluyen `targetId`, `targetLabel` y `ua`.

Dos cambios que vale la pena señalar si ya llamas a este endpoint. `before` ahora funciona por sí solo, donde antes se ignoraba a menos que también pasaras `after`. Y `limit` ahora está limitado a 10k, donde antes no tenía techo. El valor predeterminado sigue sin cambios en 1k.

### Documentación

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">Guía de la API AuditLogs</a> cubre los nuevos parámetros de consulta, y <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">la referencia de la estructura AuditLog</a> cubre los nuevos campos.

Si no has usado el registro de auditoría antes, [la publicación original del lanzamiento](/(3-21-2022)-audit-log-released.html) recorre dónde se encuentra, quién puede leerlo y cuánto tiempo se conservan las entradas. Todo eso sigue sin cambios.

### En conclusión

Nos alegra poder seguir mejorando FastComments.
Si buscas algo en tu registro y no lo encuentras, cuéntanos abajo.

¡Salud!

{{/isPost}}

---