---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Cómo Eliminar Anuncios de los Comentarios de Disqus[/postlink]

{{#unless isPost}}
En el plan gratuito de Disqus, tu sección de comentarios viene con anuncios adjuntos. Hay dos formas de deshacerte de ellos. La mejor también hace que tus comentarios se carguen más rápido y evita que tus lectores sean rastreados.
{{/unless}}

{{#isPost}}

Disqus paga por su plan gratuito colocando anuncios en tu sección de comentarios, justo debajo de tu contenido, en el mismo lugar donde tus lectores van a hablar contigo. Esos anuncios no son tuyos. No los eliges y no ganas un centavo con ellos. Ese es el intercambio por el nivel gratuito.

Hay dos formas reales de eliminarlos.

## Opción 1: Mejora tu plan de Disqus

La ruta más directa es pagar a Disqus. Sus planes de pago desactivan los anuncios. Puedes encontrar las opciones actuales en la <a href="https://disqus.com/pricing/" target="_blank">página de precios de Disqus</a>.

Esto funciona, pero vale la pena aclarar qué es lo que estás comprando. Estás pagando para deshacerte de una desventaja. Los anuncios desaparecen y el resto de Disqus permanece igual: el área de comentarios aún carga un pesado conjunto de scripts de terceros, y tus lectores aún son rastreados a través de los sitios que lo integran. Estás pagando para eliminar los anuncios, no para hacer que la sección de comentarios sea más ligera o más privada.

## Opción 2: Cambia a una plataforma que nunca muestre anuncios

La otra forma de eliminar los anuncios es utilizar una plataforma de comentarios que no los ejecute en primer lugar. :)

Por solo $0.99/mes, FastComments proporciona una funcionalidad profunda optimizada para el rendimiento sin rastreo ni anuncios.

## Mantienes cada comentario

La parte que más les preocupa a las personas es perder su discusión existente. FastComments tiene un importador de Disqus integrado que trae tus comentarios, nombres de usuario, avatares de usuario, imágenes en línea, votos y marcas de tiempo. Incluso movemos todas las imágenes a nuestra propia CDN por ti.

Si deseas el recorrido completo y detallado, tenemos una guía dedicada: [Migrando de Disqus a FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). La versión corta está a continuación.

## Cómo Cambiar en Tres Pasos

### 1. Exporta tus comentarios de Disqus

Sigue <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">los propios pasos de exportación de Disqus</a>. Te enviarán por correo electrónico un archivo con una extensión "gz". No necesitas abrirlo ni descomprimirlo, y una instalación predeterminada de Windows no puede hacerlo de todos modos. Nuestro backend lee ese archivo comprimido directamente.

### 2. Importa el archivo en FastComments

Una vez que haya iniciado sesión, dirígete a la <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">página de importación</a>, selecciona Disqus en el menú desplegable y sube el archivo tal cual. La importación se ejecuta en segundo plano; la página se actualizará automáticamente mientras se ejecuta para mostrarte un conteo en vivo de la cantidad de comentarios descubiertos e importados. Es seguro volver a importar tantas veces como necesites.

### 3. Cambia el fragmento de Disqus por el nuestro

Elimina el código de incrustación de Disqus de tus páginas y añade <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">el fragmento de FastComments</a> en su lugar. Siempre que las URL de tus páginas permanezcan iguales, tus comentarios importados se alinearán exactamente donde estaban.

## ¿En WordPress?

Si tu sitio funciona en WordPress, omite los pasos manuales e instala el <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin de FastComments para WordPress</a>. Se encarga de la instalación, configuración y sincronización por ti, y luego puedes desactivar Disqus.

## Prueba Antes de Comprometerte

No tienes que activar el cambio todo de una vez. Puedes ejecutar Disqus y FastComments en la misma página temporalmente para comparar la apariencia y la sensación antes de hacer el cambio completo. Si deseas ayuda con alguno de estos pasos, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> y te ayudaremos a resolverlo.

¿No estás seguro de cuánto te costará FastComments? Todos los planes son libres de anuncios, y puedes verificar tu número en el <a href="https://fastcomments.com/pricing-calculator" target="_blank">calculador de precios</a>. Si estás en la UE, puedes crear tu cuenta en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que tus datos permanezcan en la UE.

## Resumen

1. Exporta tus datos de Disqus
2. Impórtalos a FastComments
3. Cambia el fragmento de Disqus por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

Eso es todo. Sin anuncios en tu sección de comentarios, páginas más ligeras y cada comentario que ya tenías.

¡Saludos!

{{/isPost}}

---