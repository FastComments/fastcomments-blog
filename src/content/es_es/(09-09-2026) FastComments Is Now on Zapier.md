[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments ya está en Zapier[/postlink]

{{#unless isPost}}
Conecta tus comentarios a miles de aplicaciones con la aplicación oficial de FastComments para Zapier. Los disparadores se activan en el momento en que se publica un comentario, y cualquier aplicación puede crear comentarios, páginas y usuarios en tu sitio.
{{/unless}}

{{#isPost}}

### Novedades

Ahora hay una aplicación oficial de FastComments en [Zapier](https://zapier.com). Inicia sesión una sola vez desde el editor de Zapier y puedes enviar cada nuevo comentario a Slack, registrarlos en una hoja de cálculo, añadir comentaristas a tu CRM, o crear comentarios a partir de una presentación de formulario, sin escribir código.

Antes de esto, integrar FastComments en otra herramienta implicaba crear tu propio receptor de webhook o programar contra la API REST. Ambas opciones siguen funcionando. La aplicación de Zapier es para los casos en los que prefieres no ejecutar nada.

### Disparadores

Tres disparadores, todos instantáneos:

- **New Comment** se activa cuando se publica un comentario. Por defecto solo se activan los comentarios aprobados y que no son spam, de modo que un Zap que publica en un canal público no filtra cosas que aún están en la cola de moderación. Hay una casilla de verificación para incluir todo.
- **Updated Comment** se activa cuando un comentario se edita, aprueba, recibe votos, se fija, o se modifica de alguna otra forma. Filtra por el campo aprobado y se convierte en un disparador de "comentario aprobado".
- **Deleted Comment** se activa cuando se elimina un comentario, proporcionando el comentario completo para tus registros.

Cada disparador tiene un filtro de dominio opcional que enumera los dominios configurados en tu cuenta, de modo que un Zap pueda vigilar un sitio entre muchos.

Los disparadores se basan en webhooks, no en sondeo. FastComments entrega el evento a Zapier en el momento en que ocurre, nada interroga tu cuenta mientras espera, y la espera no cuesta créditos de API.

### Acciones y Búsquedas

Las acciones llaman a la API de FastComments en tu nombre:

- **Create Comment** en cualquier página, como un comentarista con nombre o un usuario SSO existente, opcionalmente como respuesta.
- **Create Page**, para que una página pueda listarse y restringirse a grupos de miembros antes de su primer comentario.
- **Create SSO User**, para que los miembros de tus otras herramientas puedan comentar bajo su propia identidad.
- **Create Feed Post** y **Create Hash Tag**.
- **Flag Comment** para revisión del moderador.

Las búsquedas buscan elementos para pasos posteriores: **Find Comment** por id, **Find SSO User** por correo electrónico, y **Find Page** por ID de URL. Combina una búsqueda con la creación correspondiente en el modo "buscar o crear" de Zapier y el usuario o página faltante se crea para ti.

### Algunos Zaps para Empezar

- New Comment, luego Slack "Send Channel Message". Mapea el nombre del comentarista, el comentario y la URL de la página. Usa el filtro de dominio para dirigir cada sitio a su propio canal.
- New Comment, luego Google Sheets "Create Spreadsheet Row" con Deleted Comment añadiendo una fila como segundo Zap. La hoja se convierte en un registro de auditoría.
- Updated Comment filtrado donde Approved es verdadero, luego Gmail "Send Email" para informar al autor que su comentario está publicado.
- Typeform "New Response", luego Create Comment en tu página de testimonios con Approved sin marcar, para que revises cada uno antes de que aparezca.
- WordPress "New Post", luego Create Page, para que cada publicación se registre antes del primer comentario.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) tiene más, incluido un flujo de trabajo para aprovisionar usuarios SSO desde tu herramienta de membresía.

### Cómo se Conecta

La aplicación usa OAuth. Cuando añades un paso de FastComments, Zapier solicita tu región (Estados Unidos o UE), te envía a FastComments para iniciar sesión y muestra una página de consentimiento que nombra la aplicación, la cuenta a la que se conectará y los permisos solicitados. No se copia ninguna clave API a Zapier.

La persona que aprueba la conexión debe ser un administrador API en la cuenta. Los propietarios de la cuenta ya lo tienen y pueden concederlo a otros miembros del equipo en la página de Usuarios.

Cada conexión aparece bajo **Integrate, then Connected Apps** en tu panel, marcada como una integración oficial, con la fecha de su último uso. Revocarla allí desconecta Zapier inmediatamente. Activar un Zap crea una suscripción webhook que puedes ver en la página de Webhooks con la fuente **API**, y desactivar el Zap la elimina.

### Cuánto Cuesta

La aplicación es gratuita en todos los planes de Zapier, incluido el gratuito, y FastComments no cobra extra por ella. Los disparadores no consumen créditos de API. Las acciones y búsquedas consumen los mismos créditos que una llamada desde tu propio código, una por llamada en la mayoría de los casos.

### Documentación

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) cubre la conexión de una cuenta, cada disparador y acción con sus campos, ejemplos de Zaps y solución de problemas. La integración en sí es de código abierto en [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### En Conclusión

Abre [fastcomments.com/zapier](https://fastcomments.com/zapier) para encontrar la aplicación, conectar tu cuenta y crear tu primer Zap.

Como siempre, háznoslo saber abajo si te encuentras con algún problema.

¡Salud!

{{/isPost}}

---