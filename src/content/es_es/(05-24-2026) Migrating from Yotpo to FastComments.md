---
[category:Migration]
###### [postdate]
# [postlink]Migrando De Yotpo A FastComments[/postlink]

{{#unless isPost}}
¿Buscas una alternativa a Yotpo? Esta publicación explica cómo migrar reseñas de productos de Yotpo a FastComments, qué se conserva, cómo se comparan las plataformas y qué cambios hay para tu tienda.
{{/unless}}

{{#isPost}}

Hemos tenido un flujo constante de comerciantes de Shopify preguntando sobre alternativas a Yotpo y cómo trasladar sus reseñas de productos fuera de la plataforma. Esta publicación cubre qué buscar en una alternativa a Yotpo, cómo funciona la migración de FastComments de principio a fin, y qué cambia una vez que estés en FastComments.

## Para Quién Es Esta Publicación

Esta guía es para comerciantes de comercio electrónico y propietarios de tiendas que utilizan Yotpo para reseñas de productos y desean una alternativa más rápida, más ligera o más asequible. La mayoría de los comerciantes con los que hablamos están en Shopify, pero FastComments funciona igual en tiendas de WooCommerce, BigCommerce, tiendas personalizadas y configuraciones headless. El proceso de migración es el mismo sin importar dónde se ejecute tu tienda.

## Por Qué Migrar

- FastComments es rápido. Yotpo carga casi un megabyte de JavaScript y múltiples intercambios de terceros, lo que puede hacer que las páginas de productos sean lentas.
- Las reseñas no aparecen en vivo. Un comprador envía una reseña, la página le dice que revise su bandeja de entrada, y la reseña solo aparece después de un retraso.
- FastComments ofrece precios más lineales sin puertas de características detrás de niveles.

FastComments sirve calificaciones por estrellas e hilos de reseñas en un solo widget de ~30KB que se actualiza en tiempo real. Las nuevas reseñas fluyen a cada página abierta en el momento en que se publican, ¡sin necesidad de volver a cargar! Nuestro plan basado en tráfico cubre calificaciones, moderación por IA, moderación multiestado, la función de Preguntas y exportación completa de datos. Muchos clientes solo pagan un dólar, con precios por asiento de administrador y moderador disponibles para organizaciones más grandes.

## Una Experiencia En Vivo

El Widget de Resumen de FastComments está en vivo, al igual que nuestros widgets de comentarios y chat. Si se deja una reseña, las calificaciones se actualizan inmediatamente sin necesidad de refrescar. Esto puede ser útil para lanzamientos de productos.

FastComments también funciona fuera de Shopify si decides mudarte, o ejecutas diferentes tiendas en diferentes plataformas.

## Yotpo vs FastComments De Un Vistazo

Un vistazo rápido a las dimensiones que los comerciantes preguntan cuando buscan una alternativa a Yotpo:

- Peso del widget: Yotpo envía más de 800KB de JavaScript a través de varios intercambios. FastComments envía 38KB en un solo intercambio.
- Reseñas en vivo: Yotpo requiere una recarga de página para mostrar nuevas reseñas. FastComments envía nuevas estrellas y comentarios a cada página abierta en tiempo real.
- Precios: Yotpo cobra por volumen de reseñas a través de planes escalonados con puertas de características. FastComments cobra de forma plana por tráfico de página e incluye cada característica en cada plan.
- Reseñas de fotos y videos: Ambos las soportan.
- Reseñas de preguntas y respuestas: Yotpo vende Q&A como un módulo adicional. FastComments lo incluye a través de la función incorporada de Preguntas.
- Moderación por IA: Yotpo ofrece reglas básicas de auto-publicación. FastComments incluye agentes de IA con puntuación configurable por comentario y registros de auditoría, así como configuración de publicación manual y automática.
- Exportación de datos: Yotpo restringe la exportación completa detrás de niveles más altos. FastComments incluye exportación completa en CSV y JSON en cada plan.
- Migración desde un competidor: Yotpo cobra por el servicio de migración. FastComments lo maneja de forma gratuita a través de un ticket de soporte.

## Cómo Funciona La Migración

Yotpo no tiene una exportación limpia autoservicio que se mapee de forma clara a un esquema de importador público, por lo que manejamos las migraciones de Yotpo a través de nuestro equipo de soporte en lugar de la página de importación estándar. El proceso de principio a fin es:

1. Abre un <a href="https://fastcomments.com/contact-us" target="_blank">ticket de soporte</a> con nosotros y háznos saber que te estás mudando de Yotpo.
2. Te enviamos instrucciones para exportar tus datos de Yotpo. La exportación cubre reseñas, calificaciones, fotos, banderas de comprador verificado y respuestas en hilo.
3. Envías la exportación de vuelta a nosotros en el ticket.
4. Mapeamos cada campo en FastComments y lo cargamos en un inquilino de preparación ligado a tu cuenta, para que puedas previsualizar el resultado antes de que algo se publique en tu tienda.
5. Cuando apruebas la previsualización, promovemos los datos a tu inquilino de producción.

La mayoría de las migraciones de Yotpo se completan dentro de una semana desde el momento en que recibimos la exportación.

## Qué Se Preserva

El mapeo cubre todo lo que Yotpo almacena por reseña:

- Calificaciones por estrellas y la calificación agregada del producto
- Texto de la reseña, respuestas en hilo y marcas de tiempo de las respuestas
- Adjuntos de fotos y videos (movemos los archivos a nuestro CDN)
- Banderas de comprador verificado
- Identificadores de clientes, para que los recuentos de reseñas en los perfiles de clientes coincidan con lo que eran antes
- Marcas de tiempo de envío, para que el orden cronológico en tus páginas de productos se mantenga

Si tienes preguntas y respuestas de Yotpo, estas se mapean a la función de Preguntas de FastComments en los mismos hilos de productos.

## Reemplazando El Widget

Una vez que los datos estén transferidos, intercambia el widget de Yotpo en tu plantilla de página de producto por el widget de FastComments. Somos una aplicación de Shopify, por lo que para la mayoría de las tiendas esto es un bloque de una línea en tu tema. El <a href="https://fastcomments.com/install-wizard" target="_blank">asistente de instalación</a> cubre Shopify, configuraciones headless y los principales marcos front-end. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

Puedes ejecutar Yotpo y FastComments lado a lado en un solo producto temporalmente si quieres comparar el aspecto y la sensación antes de hacer el cambio completo.

## UE

Si estás en la UE, crea tu cuenta en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que los datos de tus clientes permanezcan en la UE.

## Preguntas Comunes Sobre La Transición Desde Yotpo

### ¿Es FastComments más barato que Yotpo?

En casi todos los casos, sí. FastComments opera con un plan plano basado en tráfico que incluye todas las características, donde Yotpo cobra por reseña en planes escalonados y añade tarifas por excedentes. Calcula los números para tu tienda en el <a href="https://fastcomments.com/pricing-calculator" target="_blank">calculador de precios</a>.

### ¿Puedo mantener mis reseñas de Yotpo cuando cambie?

Sí. La migración preserva cada reseña, cada calificación, cada adjunto de foto y video, cada respuesta en hilo y cada bandera de comprador verificado. Las marcas de tiempo de envío se transfieren para que el orden cronológico en tus páginas de productos se mantenga igual.

### ¿FastComments funciona fuera de Shopify?

Sí. FastComments funciona en Shopify, WordPress, WooCommerce, BigCommerce, tiendas personalizadas y configuraciones headless. El <a href="https://fastcomments.com/install-wizard" target="_blank">asistente de instalación</a> cubre los principales marcos front-end.

### ¿Puedo ejecutar Yotpo y FastComments lado a lado primero?

Sí. Monta ambos widgets en una sola página de producto durante la previsualización de preparación para comparar cómo se ven y se sienten en tu tienda, y luego retira Yotpo cuando estés listo para hacer el cambio completo.

### ¿Qué pasa con Yotpo Loyalty, Yotpo SMS o Yotpo Email?

FastComments es una plataforma de reseñas y comentarios en vivo. No maneja programas de lealtad, marketing por SMS o campañas de marketing por correo electrónico. Si utilizas esos productos de Yotpo hoy, querrás mantenerlos o trasladarlos a una herramienta dedicada cuando cambies reseñas a FastComments.

Ten en cuenta que nos gustaría desarrollar esta funcionalidad, y si estás interesado en ser un beta tester para estas, estaremos encantados de agregar esto a nuestra hoja de ruta a corto plazo.

### ¿Seguirán mostrando mis calificaciones por estrellas en mis páginas de productos?

Sí. El widget de FastComments renderiza la calificación agregada por estrellas, las estrellas de reseñas individuales y el recuento de reseñas en los mismos lugares donde lo hacía el widget de Yotpo. El HTML de cada reseña está estructurado para que los motores de búsqueda puedan recoger los datos de calificación en la página.

### ¿Cambiar de Yotpo a FastComments afectará mi SEO?

Si las URLs de tus páginas de productos permanecen igual, no. El contenido de las reseñas se mueve al nuevo widget en las mismas URLs, y los motores de búsqueda ven los mismos productos con las mismas reseñas en las mismas páginas. Si estás cambiando URLs como parte del movimiento, envíanos los pares de URLs antiguas y nuevas en el ticket de soporte para que el importador pueda mapearlos.

### ¿Hay una prueba gratuita?

Cada plan de FastComments comienza con una prueba gratuita. Puedes crear una cuenta, ejecutar la previsualización de importación y ver el widget en un inquilino de preparación antes de comprometerte a un plan de pago.

## Resumen

1. <a href="https://fastcomments.com/contact-us" target="_blank">Abre un ticket de soporte</a> informándonos que quieres migrar desde Yotpo
2. Exporta tus datos de Yotpo y envíalos a nosotros en el ticket
3. Previsualiza la importación en un inquilino de preparación
4. Intercambia el widget de Yotpo por el widget de FastComments en tu plantilla de página de producto

{{/isPost}}

---