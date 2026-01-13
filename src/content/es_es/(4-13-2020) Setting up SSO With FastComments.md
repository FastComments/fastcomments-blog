---
[category:API & Development]

###### [postdate]
# [postlink]Configuración de SSO Con FastComments[/postlink]

{{#unless isPost}}
FastComments proporciona soluciones de SSO para varias plataformas e integraciones personalizadas.
{{/unless}}

{{#isPost}}

# Descripción general

## ¿Qué es SSO?

SSO, o inicio de sesión único, es un conjunto de convenciones utilizadas para permitir que tú o tus usuarios usen FastComments sin tener que crear otra cuenta.

Suponiendo que no permites comentarios anónimos, se requiere una cuenta para comentar con FastComments. Hacemos que este proceso de registro sea muy fácil: el usuario solo deja su correo electrónico cuando comenta. Sin embargo, entendemos que incluso eso es una fricción adicional que algunos sitios quieren evitar.

## ¿Cómo lo obtengo?

Todos los tipos de cuenta actualmente obtienen acceso a SSO, así como soporte. Sin embargo, el número máximo de usuarios de SSO variará dependiendo de tu paquete.

### Usuarios de WordPress

Si estás utilizando nuestro <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin de WordPress</a>, ¡entonces no hay código que escribir! Simplemente ve a la página de Admin del plugin, haz clic en Configuración de SSO y luego Activa.

Esto te llevará a un asistente de un solo clic que creará tu clave API, la enviará a tu instalación de WordPress y activará SSO. Hemos consolidado esto en un solo clic para ti.

Ten en cuenta que si estás instalando el plugin por primera vez, tendrás que seguir el proceso de configuración antes de ver la página de administración con el botón de Configuración de SSO.

### Integraciones personalizadas

FastComments SSO utiliza cifrado HMAC-SHA256 como el mecanismo para implementar SSO. Primero revisaremos la arquitectura general, proporcionaremos ejemplos y pasos detallados. Sin embargo, al final de este artículo hay instrucciones para **migrar desde Disqus y Commento**.

El flujo se ve así:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagrama de SSO de FastComments" title="Diagrama de SSO de FastComments" class="lozad" />
</div>

No tienes que escribir ningún nuevo endpoint de API con FastComments SSO. Simplemente cifra la información del usuario utilizando tu clave secreta y pasa la carga útil al widget de comentarios.

Proporcionamos ejemplos de código completamente funcionales en varios lenguajes/entornos de ejecución, incluyendo NodeJS, Java/Spring y PHP puro. Aunque usamos ExpressJS en el ejemplo de NodeJS y Spring en el ejemplo de Java, no se requieren frameworks/librerías en estos entornos para implementar FastComments SSO: los paquetes nativos de criptografía funcionan.

Puedes encontrar el repositorio de ejemplos de código aquí:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Ejemplos de Código de SSO de FastComments</a>

#### Obtén tu clave secreta de API

Tu API Secreta puede ser recuperada de <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">esta página</a>. También puedes encontrar esta página yendo a Mi Cuenta, haciendo clic en el cuadro de API/SSO y luego haciendo clic en "Obtener clave secreta de API".

#### Parámetros del widget de comentarios

La documentación de API de alto nivel para el widget de comentarios se puede encontrar <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">aquí</a> haciendo clic en "Mostrar opciones avanzadas". Busca SSO en la página.

Vamos a entrar en más detalle sobre lo que significan estos parámetros.

El widget de comentarios toma un objeto de configuración: ya lo pasas si estás utilizando FastComments para pasar tu ID de cliente (llamada tenantId).

Para habilitar SSO, pasa un nuevo objeto "sso", que debe tener los siguientes parámetros. Los valores deben generarse **del lado del servidor**.

- userDataJSONBase64: Los datos del usuario en formato JSON, que luego se codifican en Base64.
- verificationHash: El hash HMAC-SHA256 creado a partir de UNIX_TIME + userDataJSONBase64.
- timestamp: La hora actual en formato unix. **No debe estar en el futuro, ni más de tres horas en el pasado.**
- loginURL: Una URL que el widget de comentarios puede mostrar para iniciar sesión al usuario.
- logoutURL: Una URL que el widget de comentarios puede mostrar para cerrar sesión al usuario.
- loginCallback: Cuando se proporciona en lugar de la URL de inicio de sesión, es una función que el widget de comentarios invocará al hacer clic en el botón de inicio de sesión.
- logoutCallback: Cuando se proporciona en lugar de la URL de cierre de sesión, es una función que el widget de comentarios invocará al hacer clic en el botón de cierre de sesión.

#### El objeto Usuario 

El objeto Usuario contiene el siguiente esquema:

- id (cadena, requerido) (máx. 1k caracteres)
- email (cadena, requerido) (máx. 1k caracteres). Nota: Debe ser único.
- username (cadena, requerido) (máx. 1k caracteres). Nota: El nombre de usuario no puede ser un correo electrónico. No tiene que ser único.
- avatar (cadena, opcional) (máx. 3k caracteres)
- optedInNotifications (booleano, opcional)
- displayLabel (cadena, opcional, máx. 100 caracteres). Esta etiqueta se mostrará junto a su nombre.
- websiteUrl (cadena, opcional, máx. 2000 caracteres). El nombre del usuario enlazará a esto.

#### Notificaciones

Para habilitar o deshabilitar notificaciones, establece el valor de optedInNotifications en verdadero o falso respectivamente. La primera vez que el usuario carga la página con este valor en la carga útil de SSO, se actualizarán sus configuraciones de notificación.

#### Usuarios VIP y Etiquetas Especiales

Puedes mostrar una etiqueta especial junto al nombre del usuario utilizando el campo opcional "displayLabel".

#### Usuarios no autenticados

Para representar a un usuario no autenticado, simplemente no llenes userDataJSONBase64, verificationHash o timestamp. Proporciona un loginURL.

#### Ejemplos directos para serializar y hash de datos del usuario

Más detalles como ejemplos <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">aquí (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">aquí (java)</a> y
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">aquí (php)</a>.


### Migrando desde Disqus SSO

Las mayores diferencias entre Disqus y FastComments SSO son que Disqus utiliza SHA1 para cifrado mientras que nosotros utilizamos SHA256.
Esto significa que migrar desde Disqus es fácil: cambia el algoritmo de hash utilizado de SHA1 a SHA256 y actualiza los nombres de propiedad enviados a la UI.

### Migrando desde Commento SSO

Commento utiliza un enfoque de SSO drásticamente diferente: requieren que tengas un endpoint que ellos invoquen para autenticar al usuario. FastComments es al revés: 
simplemente codifica y hash la información del usuario utilizando tu clave secreta y pásala.

Entendemos que cualquier integración puede ser un proceso complicado y doloroso. No dudes en contactar a tu representante o usar la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">página de soporte</a>.

{{/isPost}}

---