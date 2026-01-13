---
[category:API & Development]
###### [postdate]
# [postlink]Usando FastComments en Aplicaciones de Una Sola Página en VanillaJS[/postlink]

{{#unless isPost}}
Aunque tenemos componentes dedicados para React y VueJS, el widget de Vanilla se puede usar en aplicaciones de una sola página también.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Audiencia Objetivo

Este artículo está dirigido a desarrolladores.

#### Introducción

La mayoría de los ejemplos de uso del widget FastComments VanillaJS es un fragmento de código muy simple que carga el hilo de comentarios para la URL de la página actual. Esto se debe a que
este es el caso de uso para la abrumadora mayoría de nuestros clientes, pero recientemente hemos visto un aumento de desarrolladores construyendo SPAs y utilizando FastComments.

Primero, ten en cuenta que FastComments tiene componentes dedicados para <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> y <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, así que revisa esos
enlaces si estás utilizando esas bibliotecas para que no tengas que construir tu propio envoltorio alrededor de FastComments.

Si estás construyendo tu aplicación usando VanillaJS, sin embargo, puedes instanciar y actualizar el widget de comentarios dinámicamente.

#### Primero, la URL y el ID de la URL

FastComments tiene dos identificadores para la página o artículo al que está vinculado el hilo de comentarios. En el objeto de configuración, son las propiedades "url" y "urlId".

La URL es la URL del widget de comentarios. Idealmente, deberías poder visitar esta URL desde fuera de tu aplicación. Estará expuesta como un enlace en correos electrónicos de notificación y en
herramientas de administrador.

El ID de la URL es una cadena que puede ser una URL o un ID - puede ser cualquier valor siempre que represente la página actual. Si tienes un id de publicación, artículo o página, puedes usar ese
en lugar de la URL de la página para este valor. La razón por la que el ID de la URL es separado es que puede que desees almacenar información adicional en la URL que haría que la URL no sea única para la página.

Ten en cuenta que hemos documentado la configuración completa que el widget soporta en TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">en GitHub</a>.

#### Específicos y una Demostración Real

Cuando se instancia el widget, captura el resultado de la función FastCommentsUI que normalmente llamarías:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Luego, puedes invocar un método "update" en el objeto de la instancia para actualizar la configuración. Esto refrescará el componente:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Puedes ver un ejemplo funcional <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">con este fiddle</a>.

Ten en cuenta que en este ejemplo usamos document.getElementById, pero puedes usar cualquier mecanismo que desees para obtener el elemento objetivo.

#### Problemas Comunes

Si bien actualizar solo "urlId" funcionará, deberías actualizar tanto "urlId" como "url" incluso si son iguales para que los enlaces de correos electrónicos de notificación y
las herramientas de moderación funcionen. Actualizar solo la "url" no funcionará - los comentarios están vinculados a "urlId".

#### En Conclusión

Esperamos que hayas encontrado útil esta guía. No dudes en comentar abajo con cualquier pregunta.

¡Saludos!

{{/isPost}}