[category:Migration]
###### [postdate]
# [postlink]Migrando de Commento y Cusdis en 2026[/postlink]

{{#unless isPost}}
Los servicios alojados de Commento y Cusdis han dejado de responder. Aquí se explica cómo pasar a FastComments y cómo podemos ayudar a recuperar sus comentarios del Internet Archive si nunca los exportó.
{{/unless}}

{{#isPost}}

Si la sección de comentarios de su sitio se ha quedado en blanco, este artículo es para usted. Cubre lo que cambió, cómo importar una exportación si la tiene, y cómo podemos ayudarle a recuperar sus comentarios del Internet Archive si no lo hizo.

## Qué sucedió

Esto es lo que vemos a partir del 1 de noviembre de 2026:

- **Commento.** commento.io, su API y su script de widget devuelven un 404. Las capturas del Internet Archive muestran el sitio funcionando el 25 de mayo de 2026 y devolviendo un 404 a partir del 11 de junio de 2026.
- **Cusdis.** cusdis.com y su API devuelven el error 521 de Cloudflare, lo que significa que el servidor detrás de Cloudflare está caído. Las capturas muestran que funcionaba hasta el 27 de agosto de 2026 y devolvía un 521 a partir del 16 de octubre de 2026. El script del widget aún se carga, por lo que su página muestra un cuadro vacío donde estaban los comentarios.

No hemos encontrado un aviso de cierre de ninguno de los proyectos. Si aloja usted mismo Commento o Cusdis, su instalación no se ve afectada por esto, y puede exportar desde ella cuando esté listo para migrar.

## Encuentre sus datos

La ruta que tome depende de lo que tenga:

1. **Tiene un archivo de exportación.** Busque también en su bandeja de entrada, ya que Commento envía sus exportaciones por correo electrónico como un archivo ".gz". Salte a los pasos de importación.
2. **Usted aloja usted mismo.** Exporte desde su propio panel de control y luego siga los pasos de importación.
3. **Usó el servicio alojado y no tiene exportación.** El panel desde el que exportaría ya no está disponible. Lea la sección de recuperación a continuación.

## Importar un archivo de exportación

Una vez que haya iniciado sesión, vaya <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Seleccione **Commento (.gz, .json)** o **Cusdis (.json)** del menú desplegable y cargue su archivo. No es necesario descomprimir primero un archivo ".gz" de Commento.

La importación se ejecuta en segundo plano y recibirá un correo electrónico cuando finalice. Reimportar es seguro, porque cada comentario se empareja con su id original y se actualiza en su lugar.

Tenemos una guía más larga para cada formato: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> y <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Sus pasos para solicitar una exportación desde el panel alojado ya no se aplican, pero los detalles de importación sí.

## Recuperar sus comentarios del Internet Archive

Commento y Cusdis cargan los comentarios con JavaScript desde sus propios servidores. Cuando el Internet Archive captura una página con un navegador, puede guardar esas respuestas junto con la página. esas respuestas guardadas contienen los hilos de comentarios.

Lo probamos nosotros mismos. La <a href="https://web.archive.org" target="_blank">Wayback Machine</a> contiene más de 12 000 respuestas de comentarios de Commento capturadas y capturas de 448 proyectos de Cusdis, y las más recientes son de 2026. No disponemos de una herramienta de autoservicio para esto. Realizamos la recuperación por usted, así que <a href="https://fastcomments.com/contact-us" target="_blank">escríbanos</a> para comenzar.

### Verifique su propio sitio primero

Abra una de sus publicaciones más activas en la Wayback Machine, reemplazando la dirección con la suya:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Desplácese hasta la sección de comentarios. Si sus comentarios aparecen, el archivo tiene ese hilo. Si no aparecen, pruebe con otro año usando el calendario en la parte superior de la página. Un resultado en blanco en una publicación no descarta el resto de su sitio, así que escríbanos de cualquier manera.

### Cómo funciona la recuperación

1. **Díganos su dominio.** Si usó Cusdis, también envíe su App ID, el valor `data-app-id` en el fragmento de su sitio. Le pediremos que demuestre que controla el dominio, ya que estos comentarios pertenecen a su sitio.
2. **Encontramos sus hilos.** Recopilamos las capturas de su sitio y verificamos que cada una pertenezca a su dominio y página. Las recuperaciones de Commento tardan más, porque el archivo no indexa sus capturas por sitio y debemos leer todas.
3. **Le mostramos lo que encontramos.** Verá cuántas páginas y comentarios se recuperaron, y la fecha del comentario más reciente, antes de que se importe nada.
4. **Importamos los hilos en su cuenta.** Luego podrá editar o eliminar cualquier comentario desde su panel de moderación.

### Qué se recupera

| Datos | Commento | Cusdis |
| --- | --- | --- |
| Texto del comentario | Sí | Sí |
| Nombre para mostrar del autor | Sí | Sí |
| Fecha del comentario | Sí | Sí |
| Estructura de respuestas | Sí | Sí |
| Puntuación de votos | Sí | Cusdis no tiene votos |
| Dirección de la página | Sí | Sí, aunque algunos sitios solo almacenaron una ruta, por lo que necesitamos su dominio |
| Correo electrónico del autor | No | No |
| Comentarios aún pendientes de aprobación | No | No |
| Comentarios escritos después de la última captura | No | No |
| Páginas que el archivo nunca capturó | No | No |

### Qué esperar

Esta es una recuperación a partir de instantáneas, así que planifique posibles lagunas. Funciona mejor para páginas que fueron lo suficientemente populares como para ser capturadas con frecuencia y recientemente.

Dos resultados de nuestras pruebas muestran el rango. En un blog, 30 búsquedas devolvieron 810 comentarios en 19 páginas. En otro sitio, que aún muestra sus comentarios, la copia archivada más reciente se detuvo en octubre de 2023 mientras la página en vivo continuó hasta marzo de 2025. Cualquier cosa escrita entre la última captura y el cierre no está en el archivo.

Los correos electrónicos faltantes también importan. Los comentarios recuperados conservan el nombre del autor, pero no pueden asociarse a una cuenta de FastComments, y sus autores no recibirán notificaciones sobre nuevas respuestas.

## Reemplazar el widget

Cualquiera que sea la ruta que tomó, el fragmento antiguo debe eliminarse de su sitio. Para Commento, elimine esto, junto con `count.js` si usa contadores de comentarios:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Para Cusdis, elimine esto:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Luego añada <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

También soportamos muchos frameworks de front end, que <a href="https://fastcomments.com/install-wizard" target="_blank">puede encontrar aquí</a>. No es necesario esperar a que termine una recuperación antes de cambiar. Sus lectores pueden comenzar a comentar de inmediato, y los hilos recuperados se unen a las mismas páginas cuando se importan.

### Si sus URLs están cambiando

Los comentarios importados están vinculados a la URL de su página, por lo que si sus URLs permanecen iguales, los hilos se alinean por sí mismos. Si están cambiando, importe primero, luego use la herramienta <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrar Comentarios</a> bajo Gestionar Datos para moverlos a las nuevas ubicaciones.

## UE

Si está en la UE, probablemente querrá crear su cuenta en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que los datos de sus clientes permanezcan en la UE.

## Recapitulación

1. Busque un archivo de exportación, incluido en su correo electrónico.
2. Si tiene uno, cárguelo en la <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">página de importación</a>.
3. Si no lo tiene, verifique su sitio en la Wayback Machine y <a href="https://fastcomments.com/contact-us" target="_blank">escríbanos</a> con su dominio.
4. Reemplace el fragmento antiguo por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.

¡Saludos!

{{/isPost}}

---