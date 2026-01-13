---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Incrustar Comentarios en un Sitio de VueJS con FastComments[/postlink]

{{#unless isPost}}
¿Necesitas incrustar comentarios en una aplicación desarrollada con Vue? Te tenemos cubierto.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

FastComments ahora tiene un componente de Vue que está al mismo nivel de características que nuestro widget VanillaJS.

Decidimos llamar a la biblioteca fastcomments-vue. Puedes encontrar el repositorio de GitHub con el código fuente <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">aquí</a>.

El repositorio también contiene ejemplos de uso del widget.

Está en NPM, que puedes encontrar <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">aquí</a>.

#### Cómo Funciona

La forma en que funciona este nuevo componente es que el componente de Vue es un contenedor alrededor del widget existente de FastComments.
 
Esto significa que si agregamos funciones a nuestros componentes existentes o corregimos errores, ¡tú seguirás beneficiándote de inmediato!

#### ¿Por Qué El Nuevo Componente?

Escribimos el widget VanillaJS de FastComments para ser el núcleo de nuestro negocio (junto con el backend central). Esto significa que lo diseñamos para ser extendido justo como lo estamos haciendo ahora.

Si bien sin esta nueva biblioteca de Vue, podrías haber integrado FastComments en tu aplicación escribiendo tu propia biblioteca, habría sido un gran obstáculo de adopción. Al soportar
Vue directamente, hacemos que la adopción de FastComments sea mucho más fácil para estos tipos de clientes.

#### Vue 3.0

Tenemos un componente construido específicamente para Vue 3.0 llamado <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### ¿Aplicaciones de Una Sola Página?

FastComments soporta SPAs en su núcleo. El componente monitorea cambios en el objeto de configuración - por lo que si actualizas la página actual (llamada urlId), el widget
se volverá a renderizar.

#### ¿Qué Cambia para Clientes Existentes?

Nada cambia para los clientes existentes - y no hay **nada** de malo en usar la versión VanillaJS de FastComments para nuevos proyectos. fastcomments-vue depende de la versión VanillaJS
de FastComments y siempre lo hará. Si lanzamos componentes de Angular o Vue, seguiremos el mismo modelo.

Nuestro widget VanillaJS es un ciudadano de primera clase de FastComments. Este lanzamiento es *aditivo* a nuestra infraestructura.

Además, el widget VanillaJS sigue siendo una gran solución para incrustar comentarios en cualquier página web que no esté usando un marco, como una página estática.

#### En Conclusión

Al lanzar la biblioteca fastcomments-vue, y futuras bibliotecas, esperamos que podamos facilitar a los desarrolladores la adopción de FastComments mientras utilizan metodologías de desarrollo modernas.

¡Salud!

{{/isPost}}