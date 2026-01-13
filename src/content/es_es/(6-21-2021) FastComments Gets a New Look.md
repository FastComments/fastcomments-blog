---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Tiene un Nuevo Aspecto[/postlink]

{{#unless isPost}} FastComments ha sido actualizado. Infórmate sobre la actualización y cómo puedes obtenerla. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Un Nuevo Aspecto

Hasta hoy, el aspecto y la sensación del widget de comentarios de FastComments solo había evolucionado de manera incremental. Hoy, estamos lanzando una versión completamente nueva!

Consulta la comparación a continuación (desliza el control deslizante para comparar):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Clientes Existentes

Dado que gran parte de nuestra base de usuarios personaliza el widget de comentarios, hemos mantenido la nueva interfaz de usuario completamente separada. No deberías ver ningún cambio hasta que seas migrado.

### Quién Lo Recibe

Los nuevos clientes que se registren a partir de hoy recibirán automáticamente el nuevo diseño. Todos nuestros marcos, bibliotecas y complementos han recibido actualizaciones para incorporar la nueva versión del widget de comentarios de FastComments.

### Fin de Vida de la Versión Anterior

Actualmente no estamos estableciendo un fin de vida para la versión anterior del widget de comentarios. Esto no significa que no anunciemos uno en el futuro. Sin embargo, cuando lo hagamos, daremos un margen razonable (6 - 12 meses desde el anuncio hasta la deprecación).

Nuestra suite de pruebas automatizadas ha sido actualizada para soportar diferentes versiones del widget de comentarios, por lo que la versión anterior seguirá recibiendo pruebas automatizadas continuas.

### Modo Oscuro y Otras Características

El nuevo diseño soporta el modo oscuro, al igual que el widget de comentarios original. Todas las flags de características y configuraciones han sido migradas.

En términos de Modo Oscuro, con la antigua interfaz de usuario de comentarios, los recursos para Modo Oscuro siempre se incluían en la carga de la página incluso si no se utilizaban. Esto representaba aproximadamente 2kb adicionales que siempre se descargaban al cliente, incluso si no eran necesarios.

La nueva versión del widget de comentarios solo obtiene estos recursos, incluido el estilo, si es necesario.

### Avatar Predeterminado

El avatar predeterminado utilizado en la nueva interfaz de usuario es diferente. Al migrar, el avatar predeterminado utilizado en todo el producto en el panel de administración y en todos los correos electrónicos de notificación también se actualizará.

### Implicaciones de la Regla de Personalización

Estamos al tanto de que al realizar cambios de estilo en el widget de comentarios de cara al público, podemos romper las personalizaciones de nuestros clientes. No te preocupes, te hemos cubierto y hemos revisado el estilo de cada widget personalizado para asegurarnos de que no haya retrocedido. Sin embargo, si estás viendo problemas, háznoslo saber.

### Implicaciones de Rendimiento

El tamaño total del widget de comentarios aumentó de 15.4kb a 17.4kb. Si bien creemos que un ligero aumento en el tamaño del paquete por lo mucho mejor que se ve la interfaz de usuario vale la pena, hemos planeado medidas para reducirlo nuevamente.

En general, la nueva interfaz de usuario se carga más rápido, ya que más recursos ahora están empaquetados juntos, resultando en menos solicitudes.

### Cómo Migrar

#### A través del Soporte

Simplemente contacta a tu representante de soporte, o inicia la conversación [aquí](https://fastcomments.com/auth/my-account/help).

#### WordPress

Si estás usando **WordPress**, simplemente actualiza a la última versión y actualiza cualquier estilo personalizado que puedas tener.

#### Integraciones Personalizadas

Si estás usando el widget de comentarios **VanillaJS**, simplemente cambia:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

A:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Si estás usando las bibliotecas de **React, Angular o Vue**, simplemente actualiza a la versión 2.

### Algunas Estadísticas Técnicas

Desde la concepción, diseño e implementación, este fue un proyecto de dos meses que abarcó más de **100 archivos** y cambió más de **nueve mil líneas de código**.

También hemos renovado completamente nuestro sistema de construcción para poder tener una base de código compartida entre versiones del widget de comentarios. Este sistema nos permite usar expresiones de tiempo de compilación para incluir solo el código para la versión apropiada de la interfaz de usuario, reduciendo el tamaño del paquete del widget.

### Pensando en el Futuro

El diseño anterior nos duró desde 2019 hasta mediados de 2021. Esperamos que este nuevo aspecto nos lleve más lejos en el futuro, y nuestra nueva infraestructura para gestionar múltiples versiones de la interfaz de usuario de comentarios permitirá que FastComments crezca sin interrupción a nuestra base de clientes con el tiempo.

¡Feliz comentario!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---