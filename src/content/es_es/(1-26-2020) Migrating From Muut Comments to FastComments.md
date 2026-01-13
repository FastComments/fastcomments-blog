---
[category:Migration]
###### [postdate]
# [postlink]Migrando de Muut Comments a FastComments[/postlink]

{{#unless isPost}}
Lee esta publicación para ver cómo migrar completamente de Muut a FastComments.

Simplemente se trata de eliminar el pequeño fragmento que Muut te proporciona y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Muut y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.
{{/unless}}

{{#isPost}}
### Exporta tus comentarios existentes

El importador de FastComments migrará tus comentarios, nombres de usuario, avatares de usuario e imágenes en línea. Moveremos las imágenes a nuestros servidores sin problemas.

Para exportar los datos de Comentarios y Usuarios de tu sitio desde Muut, ve a su panel de administración en Integraciones y luego Exportación JSON.

Notarás que el archivo resultante que recibes por correo tiene una misteriosa extensión de archivo "gz". Si eres un poco más técnico, quizás sepas que esto significa "gzip" y es una forma popular y eficiente de comprimir archivos.

### No abras el archivo "gz"

Una instalación por defecto de Windows 10 no podrá abrir el archivo de Muut. Eso está bien, porque no tienes que hacerlo con FastComments. Nuestro backend entiende este archivo comprimido.

Después de eso, si has iniciado sesión, puedes ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona Muut del menú desplegable y sube tu archivo.

Tendrás que ingresar la URL de tu sitio web. Esto se debe a que Muut no nos proporciona esa información en la exportación.

### Espera unos minutos

La importación de FastComments es "asincrónica". Esto significa que subir el archivo y procesarlo son pasos separados.

Así que, dependiendo del tamaño de tu archivo, podrías recibir el mensaje de éxito de inmediato. En la página de importación, al final hay una tabla; cada fila representa un intento de importación.
Puedes refrescar esta página con seguridad para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando haya terminado

Recibirás un correo electrónico cuando la importación esté terminada, ya sea que tenga éxito o no. Puedes cerrar la página después de que la carga del archivo tenga éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando comience, el estado será "En ejecución".

Es seguro volver a importar tantas veces como sea necesario; sin embargo, si tu importación falla, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">póntelo en contacto con nosotros</a> para que podamos ayudar.

### Reemplaza el código de Muut con FastComments

Simplemente se trata de eliminar el pequeño fragmento que Muut te proporciona y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Muut y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

### Migrando URLs al mismo tiempo

Los comentarios en sí están vinculados a los campos "enlace" en la exportación de Muut, así que mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar URLs y mantener tus
comentarios, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">infórmanos</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite subir archivos de texto pequeños, así que si
estás migrando más que un par de URLs, crea una hoja de Excel.

### Recapitulación

1. Exporta tus datos
2. Importa a FastComments
3. Cambia el fragmento de JavaScript de Muut por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

## ¿Por qué Muut no me enviará mi archivo?
Para sitios más grandes, Muut podría no ser capaz de crear el archivo exportado debido a limitaciones técnicas de su parte. Tenemos la capacidad de raspar tu sitio existente y extraer los comentarios de él, sin embargo, esto puede ser
bastante personalizado y debido al tiempo involucrado requerirá que tengas el Paquete de Soporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puedes solicitar ayuda con esto aquí</a>.
{{/isPost}}

---