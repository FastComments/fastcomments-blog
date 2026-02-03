---
[category:Integrations]
###### [postdate]
# [postlink]Añadiendo Comentarios a un Blog de BigCommerce[/postlink]

{{#isPost}}

#### Agrega Participación de la Audiencia a Cualquier Página
¿Qué pasaría si tu audiencia pudiera comentar en tus publicaciones de blog, hacer preguntas y dar retroalimentación? Ahora pueden hacerlo con FastComments.

#### Temas Personalizados
Para agregar FastComments al blog de tu tienda BigCommerce, tendrás que editar las plantillas de tu tema. Te guiaremos a través de ello.

En el panel de control de BigCommerce, ve a Storefront -> Mis Temas.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Enlace de la Tienda" title="Enlace de la Tienda" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Enlace Mis Temas" title="Enlace Mis Temas" class="lozad" />
</div>

Bajo "Tema Actual" verás un menú desplegable con la etiqueta "Avanzado".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Menú Desplegable Avanzado del Tema" title="Menú Desplegable Avanzado del Tema" class="lozad" />
</div>

En este menú desplegable, la primera opción es "Editar Archivos del Tema". Si esta opción no es clickable, primero tendrás que copiar el tema a través de "Hacer una Copia".

Una vez que puedas abrir el editor de plantillas, verás un navegador de archivos en el lado izquierdo de tu navegador. Este es un navegador de archivos para las plantillas de tu tema.

Querrás navegar a la plantilla HTML que representa una publicación de blog. Está en templates/components/blog/post.html, como se ilustra:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Ubicación del Archivo del Editor de Publicaciones" title="Ubicación del Archivo del Editor de Publicaciones" class="lozad" />
</div>

Tu fragmento de código de FastComments, que puedes obtener de <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">aquí</a>, debe ser pegado justo después de la línea 48, que tiene el texto "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Lugar para insertar FastComments" title="Lugar para insertar FastComments" class="lozad" />
</div>

#### ¡Recuerda!
Tendrás que agregar el dominio de tu tienda a FastComments, lo cual puedes hacer <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">aquí</a>.

#### En Conclusión
Así es como debería lucir FastComments en tu blog de BigCommerce. ¡Salud!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence en un Blog de BigCommerce" title="FastCommence en un Blog de BigCommerce" class="lozad" />
</div>

{{/isPost}}

---