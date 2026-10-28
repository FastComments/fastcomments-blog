[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Los Comentarios Ahora Se Traducen para Cada Lector[/postlink]

{{#unless isPost}}
FastComments ahora puede traducir los propios comentarios, no solo el widget que los rodea. Actívalo por sitio o por página, automáticamente o con un botón Traducir, y cada lector verá la conversación en su propio idioma con el original a un clic de distancia.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ha sido traducido a veintiocho idiomas desde hace tiempo, por lo que los botones, etiquetas y correos electrónicos ya aparecen en el idioma del lector. Los comentarios no. Un comentario en español en una página en inglés permanecía en español, y cualquiera que no lo leía lo pasaba por alto.

Esta versión añade **Traducción de Comentarios**. Cuando está activada, un comentario escrito en un idioma distinto al del lector se muestra traducido, con una pequeña línea debajo que indica de dónde proviene y un enlace **Mostrar original** para ver lo que realmente se escribió.

<img src="images/fc-comment-translation-auto.png" alt="Un lector en inglés viendo un comentario en español traducido, con una línea Traducido del español y un enlace Mostrar original debajo" title="Traducción Automática de Comentarios" class="lozad" />

### Dos Modos

**Automático** traduce al instante. Cada comentario en otro idioma llega traducido, y el lector puede cambiar al original si lo desea. Este es el modo para una comunidad que escribe genuinamente en dos o más idiomas y quiere que todos lean la misma conversación.

**Manual** añade un enlace **Traducir** a cada comentario y no hace nada hasta que se hace clic. El lector decide qué comentarios vale la pena traducir, y no se gasta nada en los que nadie solicita. Un comentario que ya está en el idioma del lector lo indica en lugar de fingir que lo traduce.

<img src="images/fc-comment-translation-manual.png" alt="Modo manual, donde un comentario en español se traduce al hacer clic y un comentario en inglés indica que ya está en el idioma del lector" title="Traducción Manual de Comentarios" class="lozad" />

En ambos modos, el idioma del lector es el que ya muestra el widget: el **Locale / Language** que configures en la regla de personalización, o el idioma del navegador del visitante si no has establecido uno. No hay nada que el visitante deba instalar, registrarse o configurar. Funciona igual ya sea que el widget esté incrustado en tu página, dentro de un creador de sitios como Google Sites, o en una página de comentarios independiente de FastComments.

### Activarlo

Abre tu <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personalización del Widget</a>, busca **Traducción de Comentarios** justo debajo de **Locale / Language**, y elige Automático o Manual. Está desactivado por defecto.

Como vive en una regla de personalización, puedes aplicarlo al alcance que desees: todo tu sitio, un dominio, o una sola página donde sepas que la audiencia es mixta. Es una configuración del lado del servidor, por lo que no puede activarse solo desde la configuración JavaScript del widget.

### Coste

Las traducciones son producidas por un modelo de lenguaje y se facturan como tokens LLM, la misma métrica que [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Cualquier plan puede activarlo.

Cada comentario se traduce una vez por idioma y la traducción se almacena con el comentario. Si mil lectores en español abren el mismo hilo en inglés, el trabajo de traducción se realiza una sola vez. Un comentario típico son unos pocos cientos de tokens, lo que a tarifas Flex equivale a aproximadamente medio centavo. Si el autor o un moderador edita un comentario, la traducción almacenada se descarta y el comentario se vuelve a traducir en la siguiente visualización, de modo que nadie lea una traducción de un texto que ya no existe.

El modo manual no cuesta nada hasta que alguien haga clic.

### Detalles

El texto traducido se trata exactamente como un comentario escrito por alguien. Pasa por la misma sanitización y reglas de enlaces que el original, por lo que una traducción no puede contener nada que el original no pudiera. Las menciones y hashtags conservan su formato.

Los comentarios que son muy extensos, o cuyo idioma no puede detectarse con confianza, se dejan tal como están en lugar de adivinar. La línea de idioma bajo un comentario traducido también está en el idioma del lector, de modo que un lector en español de un comentario en inglés ve "Traducido del inglés" y "Mostrar original".

### Sobrecarga

El código de esta nueva función no se carga a menos que esté habilitado, por lo que no ralentiza el widget de comentarios para nuestros demás usuarios.

### Documentación

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Guía de Traducción de Comentarios</a>
cubre ambos modos, la configuración de la regla y la facturación.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Guía de configuración regional</a>
cubre cómo se elige el idioma del widget en primer lugar.

### En Conclusión

Esta proviene de una asociación vecinal cuyos residentes comentan en inglés y español, y que quería que ambos grupos leyeran el mismo hilo sin pedir a nadie que instale una extensión del navegador o se registre para nada.

Si gestionas una comunidad que escribe en más de un idioma, actívalo y cuéntanos a continuación cómo se leen las traducciones.

¡Saludos!

{{/isPost}}

---