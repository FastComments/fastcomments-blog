---
[category:Migration]

###### [postdate]
# [postlink]Migrando de IntenseDebate a FastComments[/postlink]

{{#unless isPost}}
Lee esta publicación para demostrar cómo migrar completamente de IntenseDebate a FastComments.
{{/unless}}

{{#isPost}}
## Si estás en WordPress

FastComments tiene un plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

El plugin facilita mucho la instalación, configuración y sincronización. Si eliges este camino, puedes ignorar el resto de las instrucciones aquí.

## Instalación Manual y Genérica

### Exporta tus Comentarios Existentes

Para exportar los datos de Comentarios y Usuarios de tu sitio desde IntenseDebate, ve a su panel de administración en Sites -> Your Site -> Tools -> XML Export.

Notarás que el archivo resultante que recibes por correo tiene una misteriosa extensión de archivo "gz". Si eres un poco más técnico, podrías saber que esto significa "gzip" y es una manera popular y eficiente de comprimir archivos.

### No abras el archivo "gz"

Una instalación predeterminada de Windows 10 no podrá abrir el archivo de IntenseDebate. Está bien, porque no es necesario con FastComments. Nuestro backend entiende este archivo comprimido.

Después de eso, si has iniciado sesión, puedes ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona IntenseDebate en el menú desplegable y carga tu archivo.

### Espera unos minutos

La importación de FastComments es "asíncrona". Esto significa que cargar el archivo y procesarlo son pasos separados.

Así que, dependiendo del tamaño de tu archivo, podrías recibir el mensaje de éxito de inmediato. En la página de importación, en la parte inferior hay una tabla - cada fila representa un intento de importación. 
Puedes actualizar esta página de forma segura para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando haya terminado

Recibirás un correo electrónico cuando la importación haya finalizado - ya sea que haya tenido éxito o no. Puedes cerrar la página después de que la carga del archivo tenga éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando comience, el estado será "En ejecución".

Es seguro volver a importar tantas veces como sea necesario - sin embargo, si tu importación falla, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> para que podamos ayudar.

### Reemplaza el Código de IntenseDebate con FastComments

Simplemente se trata de eliminar el pequeño fragmento que IntenseDebate te proporciona y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar IntenseDebate y FastComments en el mismo sitio temporalmente para probar y ajustar el aspecto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.

Si estás usando widgets de IntenseDebate y deseas reemplazarlos, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos aquí</a>.

### Migrando URLs al mismo tiempo

Los comentarios están vinculados a los campos "link" en la exportación de IntenseDebate, por lo que mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar las URLs y mantener tus 
comentarios, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">infórmanos</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite cargar pequeños archivos de texto, así que si 
estás migrando más que un par de URLs, crea una hoja de Excel.

### Resumen

1. Exporta tus datos
2. Importa en FastComments
3. Cambia el fragmento JavaScript de IntenseDebate por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

## ¿Por Qué IntenseDebate No Me Enviará Mi Archivo?
Para sitios más grandes, IntenseDebate podría no poder crear el archivo exportado debido a limitaciones técnicas de su parte. Nosotros tenemos la capacidad de raspar tu sitio existente y extraer los comentarios, sin embargo, esto puede ser 
bastante personalizado y debido al tiempo involucrado requerirá que tengas el Paquete de Soporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puedes solicitar ayuda con esto aquí</a>.
{{/isPost}}