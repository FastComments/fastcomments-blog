---
[category:API & Development]
###### [postdate]
# [postlink]FastComments se vuelve React[/postlink]

{{#unless isPost}}
¿Necesitas integrar comentarios en una aplicación desarrollada con React? Te tenemos cubierto.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

FastComments ahora tiene un componente de React que está a la par en características con nuestro widget VanillaJS.

Decidimos llamar a la biblioteca fastcomments-react. Puedes encontrar el repositorio de GitHub con el código fuente <a href="https://github.com/FastComments/fastcomments-react" target="_blank">aquí</a>.

El repositorio también contiene ejemplos de uso del widget.

Está en NPM, que puedes encontrar <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">aquí</a>.

#### Cómo Funciona

La forma en que funciona este nuevo componente es que el componente de React es un envoltorio alrededor del widget FastComments existente.

Esto significa que si agregamos características a nuestros componentes existentes o corregimos errores, ¡todavía te beneficiarás de inmediato!

#### ¿Por Qué El Nuevo Componente?

Escribimos el widget FastComments VanillaJS para ser el núcleo de nuestro negocio (junto con el backend central). Esto significa que lo diseñamos para ser ampliado justo de la manera en que lo estamos haciendo ahora.

Aunque sin esta nueva biblioteca de React, podrías haber integrado FastComments en tu aplicación escribiendo tu propia biblioteca, habría sido un gran obstáculo para la adopción. Al soportar React directamente, facilitamos mucho la adopción de FastComments para este tipo de clientes.

#### ¿Aplicaciones de Página Única?

FastComments soporta SPAs en su núcleo. El componente monitorea cambios en el objeto de configuración, así que si actualizas la página actual (llamada urlId), el widget se volverá a renderizar.

#### ¿Qué Cambia para los Clientes Existentes?

Nada cambia para los clientes existentes, y **no hay nada** de malo en usar la versión VanillaJS de FastComments para nuevos proyectos. fastcomments-react depende de la versión VanillaJS de FastComments y siempre lo hará. Si lanzamos componentes para Angular o Vue, seguiremos el mismo modelo.

Nuestro widget VanillaJS es un ciudadano de primera clase de FastComments. Esta versión es completamente *aditiva* a nuestra infraestructura.

Además, el widget VanillaJS sigue siendo una gran solución para integrar comentarios embebidos en cualquier página web que no esté usando un marco, como una página estática.

#### En Conclusión

Al lanzar la biblioteca fastcomments-react, y futuras bibliotecas, esperamos que podamos facilitar a los desarrolladores la adopción de FastComments mientras utilizan metodologías de desarrollo modernas.

¡Saludos!

{{/isPost}}

---