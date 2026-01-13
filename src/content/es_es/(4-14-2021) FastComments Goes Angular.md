---
[category:API & Development]

###### [postdate]
# [postlink]FastComments se vuelve Angular[/postlink]

{{#unless isPost}}
¿Necesitas incrustar comentarios en una aplicación desarrollada con Angular? Te tenemos cubierto.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

FastComments ahora tiene un componente de Angular que está a la par de características con nuestro widget VanillaJS.

Decidimos llamar a la biblioteca ngx-fastcomments. Puedes encontrar el repositorio de GitHub con el código fuente <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">aquí</a>.

El repositorio también contiene ejemplos de uso del widget en forma de un espacio de trabajo de Angular.

Puedes encontrarlo en NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">aquí</a>.

#### Cómo Funciona

La forma en que funciona este nuevo componente es que el componente Angular es un envoltorio alrededor del widget FastComments existente.

Esto significa que si agregamos características a nuestros componentes existentes o corregimos errores, ¡tú también te beneficiarás de inmediato!

#### ¿Por Qué El Nuevo Componente?

Escribimos el widget FastComments VanillaJS para ser el núcleo de nuestro negocio (junto con el backend principal). Esto significa que lo diseñamos para que se pudiera extender tal como lo estamos haciendo ahora.

Aunque sin esta nueva biblioteca de Angular, podrías haber integrado FastComments en tu aplicación escribiendo tu propia biblioteca, habría sido un obstáculo importante para la adopción. Al soportar Angular directamente, facilitamos la adopción de FastComments para estos tipos de clientes.

#### ¿Aplicaciones de Página Única?

FastComments soporta SPAs en su núcleo. El componente monitorea cambios en el objeto de configuración utilizando detección de cambios. Por ejemplo, si actualizas la página actual (llamada urlId) el widget se volverá a renderizar. Esto hace que casos de uso como alternar el modo oscuro o agregar paginación sean fáciles de implementar.

#### ¿Qué Cambia Para Los Clientes Existentes?

No cambia nada para los clientes existentes - y no hay **nada** de malo en usar la versión VanillaJS de FastComments para nuevos proyectos. ngx-fastcomments depende de la versión VanillaJS de FastComments y siempre lo hará. Si lanzamos nuevos componentes, seguiremos el mismo modelo.

Nuestro widget VanillaJS es un ciudadano de primera clase de FastComments. Esta versión es completamente *aditiva* a nuestra infraestructura.

Además, el widget VanillaJS sigue siendo una gran solución para incrustar comentarios en cualquier página web que no esté utilizando un framework, como una página estática.

#### En Conclusión

Al lanzar la biblioteca ngx-fastcomments, y futuras bibliotecas, esperamos facilitar a los desarrolladores la adopción de FastComments mientras utilizan metodologías modernas de desarrollo.

¡Saludos!

{{/isPost}}

---