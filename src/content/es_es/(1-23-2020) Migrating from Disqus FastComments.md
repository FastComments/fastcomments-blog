---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrando de Disqus a FastComments[/postlink]

{{#unless isPost}}
Lee este artículo para ver cómo migrar completamente de Disqus a FastComments.

Si estás utilizando la Integración de Sitio Genérico con Disqus, entonces simplemente es cuestión de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Disqus y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

Si no estás utilizando la Integración de Sitio Genérico, entonces las instrucciones variarán según tu plataforma - nuevamente <a href="https://fastcomments.com/auth/my-account/help" target="_blank">póngase en contacto con nosotros</a>.
{{/unless}}

{{#isPost}}
Hay muchas cosas que Disqus hace bien, pero donde fallan es donde FastComments entra en acción.

## Si Estás en WordPress

FastComments tiene un plugin dedicado para WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

El plugin hace que la instalación, configuración y sincronización sean muy fáciles. Si tomas este camino puedes ignorar el resto de las instrucciones aquí.

## Instalación Manual y Genérica

### Exporta tus Comentarios Existentes

El importador de FastComments migrará tus comentarios, nombres de usuario, avatares de usuario e imágenes en línea. Moveremos las imágenes a nuestros servidores sin problemas.

Una cosa que Disqus hace bien es cómo manejan la exportación de datos. Notarás después de seguir los pasos en su guía <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">aquí</a> que el archivo resultante que recibes por correo electrónico tiene una misteriosa extensión de archivo "gz". Si eres un poco más técnico, es posible que sepas que esto significa "gzip" y es una forma popular y eficiente de comprimir archivos.

### No abras el archivo "gz"

Una instalación predeterminada de Windows 10 no podrá abrir el archivo de Disqus. Está bien, porque no tienes que hacerlo con FastComments. Nuestro backend entiende
este archivo comprimido, así que todo lo que tienes que hacer es seguir sus instrucciones <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">aquí para obtener dicho archivo</a>.

Después de eso, si estás logueado puedes ir <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona Disqus del menú desplegable y sube tu archivo.

### Espera unos minutos

La importación de FastComments es "asíncrona". Esto significa que subir el archivo y procesarlo son pasos separados.

Así que, dependiendo del tamaño de tu archivo, puedes recibir el mensaje de éxito de inmediato. En la página de importación, en la parte inferior hay una tabla: cada fila representa un intento de importación.
Puedes actualizar esta página de manera segura para ver el estado de tu importación y cuántas filas se han importado hasta ahora.

### Cuando haya terminado

Recibirás un correo electrónico cuando la importación esté completa, ya sea que tenga éxito o no. Puedes cerrar la página después de que la carga del archivo tenga éxito y veas tu importación en la página de Importaciones. Tendrá un estado como "Solicitado" y cuando comience, el estado será "Ejecutándose".

Es seguro reimportar tantas veces como sea necesario; sin embargo, si tu importación falla, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">póngase en contacto con nosotros</a> para que podamos ayudar.

### Reemplaza el Código de Disqus con FastComments

Si estás utilizando la Integración de Sitio Genérico con Disqus, entonces simplemente es cuestión de eliminar el pequeño fragmento que te dan y reemplazarlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>.
Incluso puedes ejecutar Disqus y FastComments en el mismo sitio temporalmente para probar y ajustar la apariencia. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

Si no estás utilizando la Integración de Sitio Genérico, entonces las instrucciones variarán según tu plataforma - nuevamente <a href="https://fastcomments.com/auth/my-account/help" target="_blank">póngase en contacto con nosotros</a>.

### Migrando URLs al mismo tiempo

Los comentarios en sí están vinculados a los campos "enlace" en la exportación de Disqus, así que mientras tus URLs no cambien, el cambio es fácil. Si deseas migrar URLs y mantener tus
comentarios, entonces <a href="https://fastcomments.com/auth/my-account/help" target="_blank">háznoslo saber</a> enviándonos las URLs antiguas y nuevas. La página de ayuda permite subir pequeños archivos de texto, así que si
estás migrando más de un par de URLs, crea una hoja de Excel.

### Resumen

1. Exporta tus datos
2. Importa en FastComments
3. Intercambia el fragmento de JavaScript de Disqus con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

## ¿Por Qué Disqus No Me Enviará Mi Archivo?
Para sitios más grandes, Disqus puede no ser capaz de crear el archivo exportado debido a limitaciones técnicas de su parte. Tenemos la capacidad de raspar tu sitio existente y extraer los comentarios de él; sin embargo, esto puede ser
bastante personalizado y, debido al tiempo involucrado, requerirá que tengas el Paquete de Soporte. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puedes solicitar ayuda con esto aquí</a>.
{{/isPost}}