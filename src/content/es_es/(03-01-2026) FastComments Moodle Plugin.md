---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin de FastComments para Moodle[/postlink]

{{#unless isPost}}
FastComments ahora tiene un plugin dedicado para Moodle con SSO, comentarios anidados y chat colaborativo para tus cursos.
{{/unless}}

{{#isPost}}

### Novedades

Estamos emocionados de anunciar el plugin oficial de FastComments para Moodle. Si has estado utilizando Moodle y deseas agregar
comentarios en vivo, anidados o un chat colaborativo a tus cursos, este plugin lo hace simple. Reemplaza el antiguo enfoque
manual en PHP por un plugin de Moodle adecuado que se instala en minutos e integra con tus cuentas de usuario de Moodle existentes.
El plugin funciona con Moodle 4.1 y versiones posteriores, y el código fuente está disponible en [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Comenzando

Para instalar, descarga el plugin desde el [Directorio de Plugins de Moodle](https://moodle.org/plugins/local_fastcomments) e instálalo
a través del instalador de plugins de tu sitio Moodle. Alternativamente, puedes descargarlo y extraerlo en
`<moodle-root>/local/fastcomments`, luego inicia sesión como administrador del sitio y visita **Administración del Sitio > Notificaciones**.
Moodle detectará el nuevo plugin y ejecutará la instalación automáticamente.

Una vez instalado, dirígete a **Administración del Sitio > Plugins > Plugins locales > FastComments** para configurarlo. Necesitarás tu
**ID de Inquilino** (encontrado en tu panel de FastComments) y tu **API Secret** si deseas utilizar SSO Seguro, que recomendamos.

### Estilos de Comentarios

El plugin admite tres estilos de comentarios, por lo que puedes elegir el que mejor funcione para tus estudiantes y la estructura de tu curso.

**Modo Comentarios** coloca un widget completo de comentarios debajo del contenido de la página. Los estudiantes obtienen respuestas anidadas, menciones, 
votación a favor y en contra, un editor de texto enriquecido, y la campana de notificaciones para suscribirse a nuevos comentarios en una página.

<div class="text-center">
    <div class="sm">Comentarios en una página del curso</div>
    <img src="images/moodle-course-comments.png" alt="Comentarios del curso" title="Comentarios del curso" />
</div>

**Modo Chat Colaborativo** agrega una barra en la parte superior de la página que invita a los usuarios a seleccionar texto y comenzar una discusión. El
texto resaltado está anclado al contenido, por lo que la conversación se mantiene ligada exactamente a lo que se está discutiendo. También
muestra usuarios en línea y el número de discusiones activas. Este modo no renderiza un widget inferior.

<div class="text-center">
    <div class="sm">Chat colaborativo anclado al texto seleccionado</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Colaborativo" title="Chat Colaborativo" />
</div>

**Modo Chat Colaborativo + Comentarios** te ofrece ambos al mismo tiempo. Los estudiantes pueden resaltar texto para discusiones en línea y también
utilizar el widget completo de comentarios debajo del contenido. Esto es genial para cursos donde quieres tanto comentarios rápidos en línea como
conversaciones más largas y anidadas.

<div class="text-center">
    <div class="sm">Ambos estilos de comentarios activos en una página</div>
    <img src="images/moodle-page-comments.png" alt="Comentarios de la página" title="Comentarios de la página" />
</div>

### SSO Automático

El plugin admite tres modos de SSO. **SSO Seguro** es la opción recomendada. Firma la identidad del usuario del lado del servidor con
HMAC-SHA256 utilizando tu API Secret, por lo que las credenciales nunca se exponen en el cliente. Con SSO Seguro, los administradores de Moodle son
sincronizados automáticamente como moderadores de FastComments, lo que significa que tus administradores del sitio pueden moderar comentarios sin ninguna
configuración adicional. Los avatares de usuario, nombres y direcciones de correo electrónico se transmiten de manera segura.

**SSO Simple** pasa los datos del usuario (nombre, correo electrónico, avatar) del lado del cliente sin una firma. Es rápido de configurar, pero menos seguro
que el enfoque HMAC. Finalmente, **Ninguno** desactiva completamente el SSO, por lo que los usuarios comentan de forma anónima.

### Preferencias de Notificación del Usuario

Los estudiantes pueden gestionar su configuración de notificaciones de FastComments directamente desde su perfil de Moodle. En la sección de **FastComments**
pueden activar o desactivar las notificaciones de respuestas (recibir un correo electrónico cuando alguien responde a su comentario) y las notificaciones de
suscripción (recibir correos para los hilos a los que se han suscrito). Esto mantiene todo en un solo lugar y le da a los estudiantes control sobre la
cantidad de correo electrónico que reciben.

### En Conclusión

El plugin de Moodle está disponible ahora. Para la guía completa de instalación, consulta la
[Guía de Integración de Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), y el código fuente está en
[GitHub](https://github.com/FastComments/fastcomments-moodle). ¡Déjanos saber a continuación si tienes algún comentario!

¡Saludos!

{{/isPost}}

---