[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Añade Encuestas en Vivo a tus Comentarios con FastComments[/postlink]

{{#unless isPost}}
¡Los comentarios ahora tienen encuestas en vivo! Los lectores votan dentro del mismo hilo, los resultados se actualizan en tiempo real para todos en la página, y las encuestas funcionan tanto en el widget web como en nuestros SDKs para iOS, Android y React Native.
{{/unless}}

{{#isPost}}

### What's New

Esta versión añade **Encuestas en Vivo**. Una encuesta se adjunta a un comentario y se muestra dentro de él. Los lectores hacen clic en una opción para votar, sin salir del hilo, y los resultados se actualizan en tiempo real para todos los que ven la página a medida que llegan los votos. No hay recarga, y nadie tiene que contar las respuestas manualmente.

<img src="images/fc-live-polls.png" alt="Un comentario con una encuesta que pregunta qué formato debería tener la próxima reunión, mostrando Presencial al 34%, En línea al 21% y Híbrido al 45%, con 53 respuestas" title="Encuestas en Vivo" class="lozad" />

Dado que la encuesta es un comentario, la conversación permanece adjunta a ella. La gente vota y luego responde para explicar por qué.

### Creating a Poll

Cuando las encuestas están activas, el editor de comentarios muestra un botón de encuesta. Al hacer clic se abre un editor de encuestas bajo el campo de texto, donde puedes configurar:

- **La pregunta**, hasta 200 caracteres.
- **Las opciones**, de 2 a 10.
- **Cuándo se cierra**: nunca, o después de 1 día, 3 días o 1 semana. Una encuesta cerrada muestra sus resultados finales y deja de aceptar votos.
- **Privacidad**: anónima, visible para administradores, o pública.
- **Requerir Voto para Ver Resultados**, lo que mantiene los resultados ocultos para cada visitante hasta que voten o la encuesta se cierre.

Luego escribe tu comentario y publícalo como de costumbre. Las encuestas funcionan en comentarios nuevos y en respuestas.

### Voting

Cada persona recibe un voto por encuesta y puede cambiarlo mientras la encuesta está abierta. A menos que la encuesta requiera votar primero, los lectores pueden hacer clic en **Mostrar resultados** para ver la situación antes de elegir.

La privacidad se establece por encuesta y se muestra justo debajo de las opciones, de modo que los votantes sepan quién puede ver su voto antes de emitirlo. Las encuestas anónimas (por defecto) solo muestran totales, y nadie, incluidos los administradores, puede ver quién votó por qué. En encuestas visibles para administradores, los administradores y moderadores pueden abrir **Ver quién votó**. En encuestas públicas, cualquiera puede.

### Turning It On

Las encuestas están desactivadas por defecto. Abre tu <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personalización del Widget</a>, marca **Enable Polls**, y elige quién puede crearlas:

- **Solo Administradores/Moderadores** (por defecto), para cuando deseas gestionar las encuestas tú mismo.
- **Todos**, para cuando deseas que tu comunidad se pregunte entre sí.

Votar requiere un usuario conectado por defecto. Marca **Allow Anonymous Poll Votes** para permitir que cualquiera vote. Para mantener la equidad, los votos anónimos están limitados a tres por dirección IP por encuesta por hora.

Como cualquier regla de personalización, esto puede aplicarse a todo tu sitio, a un dominio o a una sola página.

### Notifications

El autor de una encuesta recibe notificaciones sobre las respuestas a medida que llegan: una notificación, agrupada cuando muchas personas votan al mismo tiempo, y un correo electrónico diario cuando la encuesta recibió nuevas respuestas ese día. Solo el primer voto cuenta como respuesta, por lo que si alguien cambia de opinión no se envían más notificaciones. Las notificaciones siguen la privacidad de la encuesta, por lo que una encuesta anónima solo indica cuántas nuevas respuestas llegaron, nunca quién.

### Native Mobile SDKs

Las encuestas no están solo en el widget web. Nuestros SDK nativos renderizan la tarjeta de la encuesta, el editor de encuestas, los resultados en vivo y la lista de votantes con componentes nativos reales, y leen la misma configuración del widget desde tu panel. Activa las encuestas una vez y aparecerán en tu sitio y en tus aplicaciones.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, a través de Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, como `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, en NPM.

Los SDK de iOS y Android también pueden publicar una encuesta desde tu propia interfaz. En iOS se ve así:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

Los READMEs para <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> y <a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, y el <a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">registro de cambios de React Native</a>, cubren los detalles, incluido cómo restilizar los colores de la encuesta para que coincidan con tu aplicación.

### The API

Las encuestas también están en la API REST. Puedes crear una encuesta junto con su comentario pasando `poll` a `POST /api/v1/comments`, o agregar, editar, cerrar y eliminar una más tarde con `/api/v1/polls/:commentId`. Los votos pueden listarse, enviarse y eliminarse con `/api/v1/poll-votes`, lo que facilita exportar los resultados a una hoja de cálculo o a tu propio CMS. La API sigue la misma configuración que el widget, y los votos individuales en encuestas anónimas no pueden leerse a través de ella.

### Overhead

El código de la encuesta no se carga a menos que las encuestas estén habilitadas, por lo que no ralentiza el widget de comentarios para los demás.

### Documentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">La guía de Encuestas en Vivo</a> cubre la activación de encuestas, quién puede crearlas, votos anónimos, privacidad de los votantes, notificaciones y la API.

### Try It

Hay una encuesta en vivo en la <a href="https://fastcomments.com/product/live-polls" target="_blank">demostración de Encuestas en Vivo</a>. Vota en ella, abre la página en una segunda pestaña y observa cómo se mueven los resultados. También puedes publicar tu propia encuesta allí.

### In Conclusion

Si tus hilos siguen convirtiéndose en recuentos de cabezas, prueba las encuestas y cuéntanos a continuación qué te gustaría ver a continuación.

¡Saludos!

{{/isPost}}

---