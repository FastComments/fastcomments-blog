---
[category:Integraciones]
###### [postdate]
# [postlink]Incorporando Comentarios en un Site de GatsbyJS con FastComments[/postlink]

{{#unless isPost}}
¡Ahora puedes usar FastComments para incorporar comentarios en un sitio creado con Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

Recientemente hemos lanzado nuestro <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">componente de React</a> para FastComments.

Esto abre muchas oportunidades, incluyendo la integración de FastComments con Gatsby.

#### Si Escribiste Tu Propio Wrapper

Si escribiste tu propio wrapper de React para FastComments, considera reemplazarlo con el nuestro. Mantendremos esta abstracción por ti, y contiene muchas cosas útiles, como <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">recarga automática en cambios de configuración</a>.

#### Cómo Funciona

Dado que FastComments tiene un componente de React como wrapper alrededor de nuestro widget principal, solo es cuestión de usar nuestra biblioteca de React para instanciar el widget del lado del cliente.

Apoyamos completamente este componente y lo actualizaremos.

#### ¿Ejemplos?

Hemos comenzado a configurar ejemplos, que puedes encontrar <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">aquí</a>.

#### Modo Nocturno

Uno de los ejemplos que tenemos es el "modo nocturno", que renderiza FastComments en un sitio con un fondo negro (o muy oscuro): <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Además, dado que el widget responde a cambios de configuración, esto significa que puedes tener un modo para alternar el tema de tu sitio y decirle fácilmente a fastcomments-react que se actualice.

#### En Conclusión

Esperamos que encuentres que integrar FastComments en tu sitio de Gatsby sea rápido y fácil.

¡Saludos!

{{/isPost}}

---