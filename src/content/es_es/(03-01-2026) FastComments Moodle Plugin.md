---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin de FastComments para Moodle[/postlink]

{{#unless isPost}}
FastComments ahora tiene un plugin dedicado para Moodle con SSO, comentarios en hilos y chat colaborativo para tus cursos.
{{/unless}}

{{#isPost}}

### Novedades

Estamos emocionados de anunciar el plugin oficial de FastComments para Moodle. Si has estado usando Moodle y querías añadir comentarios en vivo,
en hilos o chat colaborativo a tus cursos, este plugin lo hace simple. Reemplaza el antiguo enfoque manual en PHP
con un verdadero plugin de Moodle que se instala en minutos e integra con tus cuentas de usuario existentes en Moodle. El plugin funciona
con Moodle 4.1 en adelante, y el código fuente está disponible en [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Empezando

Para instalar, descarga el ZIP del [repositorio de GitHub](https://github.com/FastComments/fastcomments-moodle) y extráelo
a `<moodle-root>/local/fastcomments`. Luego, inicia sesión como administrador del sitio y visita **Administración del sitio > Notificaciones**.
Moodle detectará el nuevo plugin y ejecutará la instalación automáticamente.

Una vez instalado, dirígete a **Administración del sitio > Plugins > Plugins locales > FastComments** para configurar. Necesitarás tu
**ID de inquilino** (encontrado en tu panel de control de FastComments) y tu **Secreto API** si deseas utilizar SSO Seguro, lo cual recomendamos.

Ten en cuenta que la descarga manual desde GitHub es temporal mientras esperamos la aprobación del plugin en el directorio de plugins de Moodle. Una vez aprobado, podrás instalarlo directamente desde el instalador de plugins de Moodle.

### Estilos de Comentario

El plugin soporta tres estilos de comentarios, por lo que puedes elegir el que mejor funcione para tus estudiantes y la estructura de tu curso.

El modo **Comentarios** coloca un widget completo de comentarios debajo del contenido de la página. Los estudiantes reciben respuestas en hilos, @menciones,
votaciones y retrocesos, un editor de texto enriquecido y la campana de notificaciones para suscribirse a nuevos comentarios en una página.

<div class="text-center">
    <div class="sm">Comentarios en una página de curso</div>
    <img src="images/moodle-course-comments.png" alt="Comentarios del Curso" title="Comentarios del Curso" />
</div>

El modo **Chat Colaborativo** añade una barra en la parte superior de la página que invita a los usuarios a seleccionar texto y comenzar una discusión. El
texto destacado está anclado al contenido, por lo que la conversación permanece vinculada exactamente a lo que se está discutiendo. También
muestra usuarios en línea y el número de discusiones activas. Este modo no genera un widget en la parte inferior.

<div class="text-center">
    <div class="sm">Chat colaborativo anclado al texto seleccionado</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Colaborativo" title="Chat Colaborativo" />
</div>

**Chat Colaborativo + Comentarios** te ofrece ambos al mismo tiempo. Los estudiantes pueden resaltar texto para discusiones en línea y también
usar el widget completo de comentarios debajo del contenido. Esto es genial para cursos donde deseas tanto retroalimentación rápida en línea como
conversaciones más largas en hilos.

<div class="text-center">
    <div class="sm">Ambos estilos de comentario activos en una página</div>
    <img src="images/moodle-page-comments.png" alt="Comentarios de Página" title="Comentarios de Página" />
</div>

### SSO Automático

El plugin soporta tres modos de SSO. **SSO Seguro** es la opción recomendada. Firma la identidad del usuario en el servidor con
HMAC-SHA256 usando tu Secreto API, por lo que las credenciales nunca se exponen en el cliente. Con SSO Seguro, los administradores de Moodle se
sincronizan automáticamente como moderadores de FastComments, lo que significa que los administradores de tu sitio pueden moderar comentarios sin ninguna
configuración adicional. Los avatares de usuario, nombres y direcciones de correo electrónico se transmiten de manera segura.

**SSO Simple** transmite los datos del usuario (nombre, correo electrónico, avatar) del lado del cliente sin una firma. Es rápido de configurar pero menos seguro
que el enfoque HMAC. Finalmente, **Ninguno** desactiva el SSO por completo, por lo que los usuarios comentan anónimamente.

### Preferencias de Notificación de Usuario

Los estudiantes pueden gestionar sus configuraciones de notificación de FastComments directamente desde su perfil de Moodle. En la sección **FastComments**
pueden alternar las notificaciones de respuesta (recibir un correo electrónico cuando alguien responde a su comentario) y las 
notificaciones de suscripción (recibir correos electrónicos por los hilos a los que se han suscrito). Esto mantiene todo en un solo lugar y brinda a los estudiantes
control sobre cuántos correos electrónicos reciben.

### En Conclusión

El plugin de Moodle está disponible ahora. Para la guía completa de configuración, consulta la
[Guía de Integración de Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), y el código fuente está en
[GitHub](https://github.com/FastComments/fastcomments-moodle). ¡Déjanos saber abajo si tienes alguna opinión!

¡Saludos!

{{/isPost}}

---