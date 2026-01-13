---
[category:Security]

###### [postdate]
# [postlink]FastComments Ahora Soporta Configuraciones Estrictas de Cookies de Terceros[/postlink]

{{#unless isPost}}
¡Hasta ahora, FastComments requería que las cookies de terceros estuvieran habilitadas para funcionar completamente! ¡Esto ya no es así!
{{/unless}}

{{#isPost}}

### Novedades

La desactivación de cookies de terceros por defecto se está convirtiendo en la norma en navegadores enfocados en la privacidad. Un ejemplo de esto es Safari de Apple en iOS, donde
si dejas tu correo electrónico para comentar con FastComments, verificas ese comentario y luego regresan a esa página para dejar otro comentario, o responder
a alguien, verás que cualquier comentario adicional que dejes será marcado como no verificado.

Esto solo ocurrirá con la configuración predeterminada que muestra una etiqueta de `No Verificado` en los comentarios. Sin embargo, esto puede impactar otras cosas como las aprobaciones automáticas
si las aprobaciones automáticas están habilitadas solo para comentarios verificados.

Como puedes imaginar, esto puede resultar en un comportamiento frustrante donde un usuario verifica su comentario, hace clic en "Mantenerme conectado", y no
está conectado cuando visita tu sitio o aplicación. Ten en cuenta que esto no se aplica a las integraciones SSO, ya que SSO no depende
de cookies.

Ahora, con una nueva configuración que se puede habilitar llamada `Habilitar Popup de Cookies de Terceros` en la configuración del widget, este problema se resuelve al
abrir un popup que obtiene la cookie del usuario. Por ahora, esto solo ocurre si interactúan con el widget de comentarios, pero el resultado es que
el comentario se publicará desde su sesión de FastComments.com, marcando su comentario como verificado, y así sucesivamente.

### Cómo Obtenerlo y Documentación

Todos los clientes de FastComments en todos los niveles ahora tienen acceso a esta función. Consulta [la documentación](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) para aprender cómo habilitar la
bypass de cookies de terceros.

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y liberar adecuadamente esta función. Háznoslo saber
abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---