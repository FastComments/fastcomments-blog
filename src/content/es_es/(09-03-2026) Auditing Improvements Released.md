[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Mejoras de Auditoría Publicadas[/postlink]

{{#unless isPost}}
The audit log now shows who or what each event affected by name, and you can search on it. There's also now date range, sub-tenant search, field-level diffs on updates, and matching API filters.
{{/unless}}

{{#isPost}}

### Novedades

El registro de auditoría siempre ha registrado quién realizó una acción y sobre qué se realizó. Esta versión se trata de hacer ese
registro legible y buscable sin salir de la página.

Si querías saber qué le pasó a un moderador en particular, primero tenías que encontrar su ID, y si ese
moderador había sido eliminado, no quedaba nada contra lo que buscar el ID. El evento decía que algo fue eliminado,
por quién y cuándo, pero por alguna razón los nombres faltaban.

Ahora el nombre se captura junto con el ID en el momento del evento, por lo que sobrevive al borrado y puedes buscarlo.

### La columna Affected

Hay una nueva columna **Affected** en la tabla que muestra la persona o el objeto sobre el que actuó el evento, por nombre. Para una persona
se muestra como `jsmith (jsmith@example.com)`. Para una personalización de widget o un grupo de moderación es el nombre que le diste. Para un
archivo multimedia es el nombre de archivo que subiste.

Sobre la tabla hay un cuadro de búsqueda coincidente, **Who or what was changed**. Escribe un nombre, una dirección de correo electrónico o un ID, y
encuentra los eventos que afectan a esa persona u objeto. No tienes que saber cuál de los tres tienes, y no tienes que buscar
un ID interno primero.

Los eventos creados antes de esta versión no tienen un nombre adjunto, pero aún conservan el ID que siempre tuvieron, por lo que el mismo
cuadro de búsqueda los encuentra por ID.

### Rango de fechas

La fila de filtros ahora tiene un desplegable **Date Range** con Últimos 30 días, Últimos 90 días, Último año, Todo el tiempo y **Custom range**,
que muestra los selectores de fecha Desde y Hasta.

Un rango de fechas es, de lejos, la forma más fácil de acotar una búsqueda, y combinarlo con los demás filtros es la manera más rápida
de encontrar algo.

### Cuentas gestionadas

Si tu cuenta gestiona otros tenants, hay una casilla de verificación **Include sub-tenants**. Al marcarla se buscan tu cuenta y
todos los tenants que gestionas en una sola pasada, con una columna **Tenant** que muestra de qué cuenta proviene cada evento.

Hasta ahora el registro de cada tenant solo podía leerse por separado, por lo que responder "¿alguien tocó alguna de nuestras propiedades esta semana?"
significaba entrar en cada uno por turno.

### Las actualizaciones ahora registran qué cambió

Editar a un miembro del equipo solía registrar el conjunto resultante de permisos. Eso indica cuáles son los permisos ahora, pero no
cuáles eran, por lo que "quién eliminó el acceso de facturación de esta persona, y cuándo" no tenía respuesta.

Los eventos de actualización ahora incluyen un mapa `changes` con solo los campos que realmente cambiaron, cada uno con su valor anterior y nuevo.
Los campos sin cambios se omiten, de modo que un cambio de permiso se muestra en una sola línea en lugar de un muro de booleanos.

### Descripciones y el dispositivo detrás de un cambio

Los eventos destructivos ahora llevan una frase simple describiendo lo que ocurrió, como "Removed user from the account." (Usuario eliminado de la cuenta). Las vistas de página tenían descripciones y los borrados no, lo cual era al revés.

Los eventos que modifican algo también registran el navegador que realizó el cambio. Las sesiones se registran como un hash para que las acciones de una persona puedan ser
correlacionadas sin que el registro almacene nada que pueda ser reproducido.

### Otras mejoras

- Algunas correcciones con paginación y combinaciones de filtros.
- Los eventos de inicio de sesión mostraban una columna **Who** en blanco. El nombre de usuario estaba en el registro todo el tiempo y la página no lo leía.
- La columna de acción mostraba los eventos de inicio de sesión como N/A, porque Login faltaba en la lista de nombres de acción.
- Las páginas del registro de auditoría no podían nombrar a usuarios SSO, mostrando "Missing User" en su lugar. Ahora se resuelven correctamente.
- La página es mucho más rápida en cuentas con historiales extensos.

### Para la API

El endpoint `/api/v1/audit-logs` ganó filtros coincidentes: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target`
para la búsqueda por subcadena, y `includeManagedTenants`. Las respuestas ahora incluyen `targetId`, `targetLabel` y `ua`.

Dos cambios que vale la pena notar si ya llamas a este endpoint. `before` ahora funciona por sí solo, donde antes se ignoraba
a menos que también pasaras `after`. Y `limit` ahora está limitado a 10k con un valor predeterminado de 5k. Antes era ilimitado.

### Documentación

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">La guía de la API AuditLogs</a> cubre los
nuevos parámetros de consulta, y <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">la
referencia de la estructura AuditLog</a> cubre los nuevos campos.

Si no has usado el registro de auditoría antes, [the original release post](/(3-21-2022)-audit-log-released.html) recorre
dónde se encuentra, quién puede leerlo y cuánto tiempo se conservan las entradas. Todo eso sigue sin cambios.

### En conclusión

Nos alegra poder seguir mejorando FastComments.
Si buscas algo en tu registro y no lo encuentras, cuéntanos abajo.

¡Salud!

{{/isPost}}

---