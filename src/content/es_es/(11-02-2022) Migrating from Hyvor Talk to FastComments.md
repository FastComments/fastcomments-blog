---
[category:Migration]
###### [postdate]
# [postlink]Migrando de Hyvor Talk a FastComments[/postlink]

{{#unless isPost}}
Lee esta publicación para ver cómo migrar completamente de Hyvor Talk a FastComments.

Si estás usando la instalación manual de código con Hyvor Talk, simplemente se trata de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/install-wizard" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Hyvor y FastComments en el mismo sitio temporalmente para probar y ajustar el aspecto y la sensación. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.

Si no estás usando la instalación basada en fragmentos de código, entonces las instrucciones variarán según tu plataforma - nuevamente <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a>.
{{/unless}}

{{#isPost}}

## Si Estás en WordPress

FastComments tiene un plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

El plugin facilita mucho la instalación, configuración y sincronización. Si optas por esta ruta, puedes ignorar el resto de las instrucciones aquí. Solo asegúrate
de que has sincronizado tus comentarios de Hyvor Talk de vuelta a tu instalación de WordPress.

Si esto no está funcionando para ti, como lo han reportado algunos de nuestros clientes, puede que quieras usar nuestro plugin de WordPress, pero realizar una importación de datos
exportando manualmente desde Hyvor Talk. Puedes encontrar importaciones de datos en [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Instalación Manual y Genérica

### Exporta Tus Comentarios Existentes

El importador de FastComments migrará tus hilos de comentarios, nombres de usuario, avatares de usuario, emojis e imágenes en línea. Movemos las imágenes a nuestros servidores sin problemas.

A partir de 2022, Hyvor Talk no exporta correos electrónicos ni votos positivos/negativos. Si puedes obtener una exportación de ellos con esta información, podemos importarlo.

### Importa el Archivo .JSON

Después de que hayas descargado la exportación de Hyvor, inicia sesión en tu panel de FastComments y ve <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona Hyvor Talk del menú desplegable y sube tu archivo.

### Espera unos minutos

La importación de FastComments es "asíncrona". Esto significa que subir el archivo y procesarlo son pasos separados.

Entonces, dependiendo del tamaño de tu archivo, podrías recibir el mensaje de éxito de inmediato. En la página de importación, en la parte inferior hay una tabla - cada fila representa un intento de importación.
Puedes actualizar esta página de manera segura para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando haya terminado

Recibirás un correo electrónico cuando la importación haya terminado - ya sea que haya tenido éxito o no. Puedes cerrar la página después de que la carga del archivo haya tenido éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando comience, el estado será "En ejecución".

Es seguro volver a importar tantas veces como sea necesario - sin embargo, si tu importación falla, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> para que podamos ayudar.

### Reemplaza el Código de Hyvor Talk con FastComments

Si estás usando la instalación basada en fragmentos de código con Hyvor, simplemente se trata de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/install-wizard" target="_blank">el nuestro</a>.
También soportamos muchos frameworks de frontend que [puedes encontrar aquí](https://fastcomments.com/install-wizard). Incluso puedes ejecutar Hyvor y FastComments en el mismo sitio temporalmente para probar y ajustar el aspecto y la sensación. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.

Si no estás usando la instalación basada en fragmentos de código, entonces las instrucciones variarán según tu plataforma - nuevamente <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a>.

Ofrecemos un asistente de instalación de autoservicio [aquí](https://fastcomments.com/install-wizard).

### Migrando URLs al mismo tiempo

Los comentarios mismos están vinculados a los campos de identificación de página en la exportación, así que, mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar URLs y mantener tus
comentarios, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">haznos saber</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite subir pequeños archivos de texto, así que si
estás migrando más que solo un par de URLs, crea una hoja de Excel.

### UE

Si estás en la UE, probablemente querrás crear tu cuenta en [eu.fastcomments.com](https://eu.fastcomments.com) para que tus datos de cliente permanezcan en la UE.

### Resumen

1. Exporta tus datos
2. Importa en FastComments
3. Cambia el fragmento de JavaScript de Hyvor por <a href="https://fastcomments.com/install-wizard" target="_blank">el de FastComments</a>

## ¿Por qué Hyvor No Me Enviará Mi Archivo?
Para sitios más grandes, Hyvor puede que no sea capaz de crear el archivo exportado debido a limitaciones técnicas de su parte. Tenemos la capacidad de raspar tu sitio existente y extraer los comentarios de él, sin embargo, esto puede ser
bastante personalizado y debido al tiempo involucrado requerirá que tengas el Paquete de Soporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puedes solicitar ayuda con esto aquí</a>.
{{/isPost}}

---