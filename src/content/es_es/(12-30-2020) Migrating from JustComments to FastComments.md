---
[category:Migration]
###### [postdate]
# [postlink]Migrando de JustComments a FastComments[/postlink]

{{#unless isPost}}
Lee este post para ver cómo migrar completamente de JustComments a FastComments.

Usualmente se trata de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar JustComments y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia y la sensación. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.
{{/unless}}

{{#isPost}}

A partir de 2021, JustComments cerrará. En FastComments hemos facilitado el cambio a nuestra plataforma.

Te darás cuenta de que FastComments ofrece muchas de las mismas características a las que estás acostumbrado, y más.

## Diferencias de Precios

Mientras que JustComments utiliza un sistema basado en créditos, FastComments utiliza un modelo por niveles con tres niveles disponibles. Con FastComments, nuestro plan de $5/mes
cubre hasta 1M de cargas de página al mes. Más allá de eso, están los planes Pro y Enterprise, que puedes ver en nuestra <a href="https://fastcomments.com/traffic-pricing" target="_blank">página de precios</a>.

## Si estás en WordPress

FastComments tiene un plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

El plugin facilita mucho la instalación, configuración y sincronización. Sin embargo, JustComments no sincroniza tus comentarios de vuelta a tu instalación de WordPress como lo hace FastComments.
Esto significa que después de la sincronización tendrás que seguir los pasos de exportación e importación a continuación.

## Exporta tus Comentarios Existentes

El importador de FastComments migrará tus comentarios, nombres de usuario, avatares de usuario e imágenes en línea. Moveremos las imágenes a nuestros servidores sin problemas.

Para descargar tus datos de comentarios de JustComments, ve a tu página de Cuenta.

## Importa en el Administrador de FastComments

No te preocupes por abrir el archivo resultante de JustComments.

Si estás registrado puedes ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>.

Selecciona JustComments del menú desplegable y sube tu archivo.

### Identificadores de Página

Al importar, verás la opción de elegir URL de Página o "ID de Elemento". Si no estás seguro de cuál elegir, elige URL de Página. Si tienes una integración con JustComments
donde especificas el ID de Elemento en la configuración del widget, selecciona ID de Elemento.

### Espera unos minutos

La importación de FastComments es "asíncrona". Esto significa que subir el archivo y procesarlo son pasos separados.

Así que, dependiendo del tamaño de tu archivo, podrías recibir el mensaje de éxito inmediatamente. En la página de importación, en la parte inferior hay una tabla - cada fila representa un intento de importación.
Puedes refrescar esta página con seguridad para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando termine

Recibirás un correo electrónico cuando la importación haya finalizado - ya sea que haya tenido éxito o no. Puedes cerrar la página después de que la subida del archivo haya tenido éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando inicie, el estado será "En Progreso".

Es seguro reinportar tantas veces como sea necesario - sin embargo, si tu importación falla <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> para que podamos ayudarte.

### Reemplaza el Código de JustComments con FastComments

Si no estás utilizando el plugin de JustComments para WordPress, entonces simplemente se trata de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar JustComments y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia y la sensación. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.

### Migrando URLs al mismo tiempo

Los comentarios están vinculados a los campos "pageUrl" por defecto en la exportación de JustComments, así que mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar URLs y mantener tus
comentarios, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">háznoslo saber</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite subir pequeños archivos de texto, así que si
estás migrando más que solo un par de URLs, crea una hoja de Excel.

## Resumen

1. Exporta tus datos
2. Importa en FastComments
3. Si no estás en WordPress, intercambia el fragmento de JavaScript de JustComments por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

{{/isPost}}