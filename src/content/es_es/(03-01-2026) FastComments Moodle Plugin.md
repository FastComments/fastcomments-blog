---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments para Moodle[/postlink]

{{#unless isPost}}
FastComments ahora tiene un plugin dedicado para Moodle con SSO, comentarios en hilo y chat colaborativo para tus cursos.
{{/unless}}

{{#isPost}}

### Novedades

Estamos emocionados de anunciar el plugin oficial de FastComments para Moodle. Si has estado utilizando Moodle y querías agregar comentarios en vivo, en hilo o chat colaborativo a tus cursos, este plugin lo hace simple. Reemplaza el antiguo enfoque manual de PHP con un plugin adecuado para Moodle que se instala en minutos e integra con tus cuentas de usuario de Moodle existentes. El plugin funciona con Moodle 4.1 y versiones posteriores, y el código fuente está disponible en [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Empezando

Para instalar, descarga el ZIP desde el [repositorio de GitHub](https://github.com/FastComments/fastcomments-moodle) y extráelo en `<moodle-root>/local/fastcomments`. Luego inicia sesión como administrador del sitio y visita **Administración del sitio > Notificaciones**. Moodle detectará el nuevo plugin y ejecutará la instalación automáticamente.

Una vez instalado, dirígete a **Administración del sitio > Plugins > Plugins locales > FastComments** para configurarlo. Necesitarás tu **ID de inquilino** (encontrado en tu panel de control de FastComments) y tu **Secreto API** si quieres usar SSO Seguro, lo cual recomendamos.

Ten en cuenta que la descarga manual desde GitHub es temporal mientras esperamos la aprobación del plugin en el directorio de plugins de Moodle. Una vez aprobado, podrás instalarlo directamente desde el instalador de plugins de Moodle.

### Estilos de Comentarios

El plugin admite tres estilos de comentarios, para que puedas elegir el que mejor funcione para tus estudiantes y la estructura del curso.

**Modo Comentarios** coloca un widget de comentarios completo debajo del contenido de la página. Los estudiantes obtienen respuestas en hilo, @menciones, votaciones a favor y en contra, un editor de texto enriquecido, y el timbre de notificaciones para suscribirse a nuevos comentarios en una página.

<div class="text-center">
    <div class="sm">Comentarios en una página del curso</div>
    <img src="images/moodle-course-comments.png" alt="Comentarios del Curso" title="Comentarios del Curso" />
</div>

**Modo Chat Colaborativo** agrega una barra en la parte superior de la página que invita a los usuarios a seleccionar texto y comenzar una discusión. El texto resaltado está anclado al contenido, por lo que la conversación permanece vinculada exactamente a lo que se está discutiendo. También muestra usuarios en línea y el número de discusiones activas. Este modo no renderiza un widget inferior.

<div class="text-center">
    <div class="sm">Chat colaborativo anclado al texto seleccionado</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Colaborativo" title="Chat Colaborativo" />
</div>

**Chat Colaborativo + Comentarios** te ofrece ambos al mismo tiempo. Los estudiantes pueden resaltar texto para discusiones en línea y también usar el widget de comentarios completo debajo del contenido. Esto es genial para cursos donde quieres tanto retroalimentación rápida en línea como conversaciones en hilo más largas.

<div class="text-center">
    <div class="sm">Ambos estilos de comentarios activos en una página</div>
    <img src="images/moodle-page-comments.png" alt="Comentarios de Página" title="Comentarios de Página" />
</div>

### SSO Que Funciona

El plugin admite tres modos de SSO. **SSO Seguro** es la opción recomendada. Firma la identidad del usuario en el servidor con HMAC-SHA256 utilizando tu Secreto API, por lo que las credenciales nunca se exponen en el cliente. Con SSO Seguro, los administradores de Moodle se sincronizan automáticamente como moderadores de FastComments, lo que significa que tus administradores de sitio pueden moderar comentarios sin ninguna configuración adicional. Los avatares de los usuarios, nombres y direcciones de correo electrónico se transmiten de manera segura.

**SSO Simple** pasa los datos del usuario (nombre, correo electrónico, avatar) del lado del cliente sin una firma. Es rápido de configurar pero menos seguro que el enfoque HMAC. Finalmente, **Ninguno** desactiva completamente el SSO, por lo que los usuarios comentan de forma anónima.

### Preferencias de Notificación del Usuario

Los estudiantes pueden gestionar sus configuraciones de notificación de FastComments directamente desde su perfil de Moodle. En la sección **FastComments** pueden activar o desactivar las notificaciones de respuestas (recibir un correo cuando alguien responde a su comentario) y las notificaciones de suscripción (recibir correos por los hilos a los que se han suscrito). Esto mantiene todo en un solo lugar y le da a los estudiantes control sobre cuántos correos reciben.

### En Conclusión

El plugin de Moodle está disponible ahora. Para la guía completa de configuración, consulta la
[Guía de Integración de Moodle](https://docs.fastcomments.com/guide-moodle.html), y el código fuente está en
[GitHub](https://github.com/FastComments/fastcomments-moodle). ¡Háznos saber abajo si tienes algún comentario!

¡Saludos!

{{/isPost}}

---