---
[category:Migration]
###### [postdate]
# [postlink]Migrando de Commento a FastComments[/postlink]

{{#unless isPost}}
Lee esta publicación para ver cómo migrar completamente de Commento a FastComments.

## Problemas a tener en cuenta

Commento no nos proporciona URLs completas. Lo que ofrecen es solo el nombre de dominio al que pertenece un hilo de comentarios - como "fastcomments.com/some-page".
Esto significa que el importador de FastComments tiene que asumir cuál es el protocolo, y por defecto usa https. Si realizas la importación y no ves tus datos,
puedes querer verificar que tu sitio esté debidamente asegurado.
{{/unless}}

{{#isPost}}
### Exporta tus Comentarios Existentes

Para exportar los datos de Comentarios y Usuarios de tu sitio desde Commento, ve a su panel de administración en General y luego en Exportar Datos.

Notarás que el archivo resultante que recibes por correo tiene una misteriosa extensión de archivo "gz". Si tienes un poco más de conocimientos técnicos, probablemente sepas que esto significa "gzip" y es una forma popular y eficiente de comprimir archivos.

### No abras el archivo "gz"

Una instalación predeterminada de Windows 10 no podrá abrir el archivo de Commento. No hay problema, porque no es necesario con FastComments. Nuestro backend entiende este archivo comprimido.

Después de eso, si estás logueado, puedes ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona Commento del menú desplegable y sube tu archivo.

### Espera unos minutos

La importación de FastComments es "asíncrona". Esto significa que subir el archivo y procesarlo son pasos separados.

Así que, dependiendo del tamaño de tu archivo, podrías recibir el mensaje de éxito de inmediato. En la página de importación, en la parte inferior, hay una tabla - cada fila representa un intento de importación.
Puedes refrescar esta página de forma segura para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando esté listo

Recibirás un correo cuando la importación esté completa - ya sea que haya tenido éxito o no. Puedes cerrar la página después de que la carga del archivo haya tenido éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando comience, el estado será "Ejecutándose".

Es seguro reimportar tantas veces como sea necesario - sin embargo, si tu importación falla, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> para que podamos ayudarte.

### Reemplaza el Código de Commento con el de FastComments

Es simplemente una cuestión de eliminar el pequeño fragmento que te da Commento y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Commento y FastComments en el mismo sitio de forma temporal para probar y ajustar la apariencia y la sensación. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

### Migrando URLs al mismo tiempo

Los comentarios en sí están vinculados a los campos "link" en la exportación de Commento, así que mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar URLs y mantener tus
comentarios, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">háznoslo saber</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite cargar archivos de texto pequeños, así que si
estás migrando más de un par de URLs, crea una hoja de Excel.

### Resumen

1. Exporta tus datos
2. Importa en FastComments
3. Intercambia el fragmento de JavaScript de Commento por <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

## Problemas a tener en cuenta

Commento no nos proporciona URLs completas. Lo que ofrecen es solo el nombre de dominio al que pertenece un hilo de comentarios - como "fastcomments.com/some-page".
Esto significa que el importador de FastComments tiene que asumir cuál es el protocolo, y por defecto usa https. Si realizas la importación y no ves tus datos,
puedes querer verificar que tu sitio esté debidamente asegurado.

## ¿Por qué Commento no me enviará mi archivo?
Para sitios más grandes, Commento podría no ser capaz de crear el archivo exportado debido a limitaciones técnicas de su lado. Tenemos la capacidad de raspar tu sitio existente y extraer los comentarios de él, sin embargo, esto puede ser
bastante personalizado y debido al tiempo involucrado requerirá que tengas el Paquete de Soporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puedes solicitar ayuda con esto aquí</a>.
{{/isPost}}

---