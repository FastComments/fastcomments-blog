[category:Migration]
###### [postdate]
# [postlink]Migrando de Cusdis a FastComments[/postlink]

{{#unless isPost}}
Lee este artículo para ver cómo migrar completamente de Cusdis a FastComments, incluyendo tus hilos, estado de moderación y URLs de página.
{{/unless}}

{{#isPost}}

Cusdis es un sistema de comentarios ligero y de código abierto. Si lo has superado y deseas funciones como filtrado de spam, votos, reacciones, notificaciones, SSO y un panel completo de moderación, FastComments ahora importa tus datos de Cusdis directamente.

## Exporta tus comentarios existentes

Desde tu panel de control de Cusdis, solicita una exportación completa de datos. Cusdis te proporciona un único archivo JSON que contiene tus proyectos, páginas y cada comentario, junto con sus hilos y estado de aprobación. Dependiendo de la configuración de Cusdis, la exportación se envía por correo electrónico o se descarga de inmediato.

No hay nada que editar o descomprimir. Mantén el archivo ".json" tal cual, y nuestro backend lo lee directamente.

## Importa a FastComments

Una vez que hayas iniciado sesión, ve <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>. Selecciona **Cusdis (.json)** del menú desplegable y sube tu archivo.

### Espera unos minutos

La importación de FastComments es "asíncrona". Subir el archivo y procesarlo son pasos separados. Para un archivo pequeño, el mensaje de éxito aparece de inmediato. En la parte inferior de la página de importación hay una tabla, y cada fila representa un intento de importación. Actualiza la página para ver el estado y cuántos comentarios se han importado hasta ahora.

### Cuando haya terminado

Recibirás un correo electrónico cuando la importación termine, ya sea que tenga éxito o no. Es seguro cerrar la página después de que la carga haya tenido éxito y veas tu importación listada con un estado de "Requested" o "Running". Reimportar es seguro. FastComments coincide cada comentario con su id original de Cusdis, por lo que ejecutar la importación nuevamente actualiza tus comentarios existentes en lugar de crear duplicados. Si una importación falla, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contáctanos</a> y te ayudaremos.

## Qué se importa

- **Threaded replies.** Cusdis anida respuestas varios niveles profundos, y FastComments reconstruye la estructura completa de padres e hijos.
- **Moderation status.** Los comentarios aprobados permanecen aprobados. Los comentarios que aún están pendientes de aprobación llegan a tu cola de moderación de FastComments para que puedas revisarlos.
- **Authors.** El nombre y correo electrónico de cada comentarista se transfieren, y los usuarios registrados de FastComments se emparejan por correo electrónico.
- **Formatting.** Los comentarios de Cusdis están escritos en Markdown. FastComments renderiza ese mismo Markdown, incluidos enlaces, imágenes y saltos de línea, por lo que tus hilos se leen exactamente como antes.

Los comentarios que fueron eliminados en Cusdis se dejan atrás, por lo que tus hilos importados permanecen limpios.

## Reemplaza el widget de Cusdis

Una vez que tus datos estén transferidos, elimina el pequeño fragmento de Cusdis de tu sitio y reemplázalo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el nuestro</a>. Puedes ejecutar Cusdis y FastComments en paralelo durante un tiempo para probar primero el aspecto y la sensación. Soportamos muchos frameworks front-end, los cuales <a href="https://fastcomments.com/install-wizard" target="_blank">puedes encontrar aquí</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudarte con eso</a>.

### Migrar URLs al mismo tiempo

Cusdis vincula cada comentario a la URL de su página, por lo que mientras tus URLs no cambien, el cambio es fácil. Si tus URLs también están cambiando, importa primero tus datos de Cusdis y luego usa la herramienta integrada <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> bajo Manage Data para mover tus comentarios a las nuevas ubicaciones. Puedes ingresar un dominio completo, una URL completa o un ID de URL tanto para la ubicación antigua como la nueva, de modo que un solo par "de" y "a" mueve todas las páginas coincidentes de una vez. Se ejecuta como un trabajo en segundo plano y te envía un correo electrónico cuando termina.

Si prefieres que lo manejemos nosotros (si tienes muchas páginas), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">avísanos</a> las URLs antiguas y nuevas.

## EU

Si estás en la UE, probablemente querrás crear tu cuenta en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que los datos de tus clientes permanezcan en la UE.

## Resumen

1. Exporta tus datos de Cusdis como JSON
2. Cárgalo en la página de importación de FastComments y selecciona **Cusdis (.json)**
3. Reemplaza el fragmento de Cusdis con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">el de FastComments</a>

{{/isPost}}

---