[category:Migration]
###### [postdate]
# [postlink]Migrando de AnyComment en 2026 a FastComments[/postlink]

{{#unless isPost}}
Lee este post para ver cómo migrar completamente de AnyComment a FastComments en 2026.
{{/unless}}

{{#isPost}}

Hemos tenido un número de clientes preguntando sobre la migración de AnyComment en 2026.

## AnyComment vive dentro de WordPress

AnyComment es un plugin de WordPress. A diferencia de plataformas independientes como Disqus o Hyvor Talk, no ejecuta su propio backend; tus comentarios se almacenan directamente en tu base de datos de WordPress, en la misma tabla `wp_comments` que utiliza el núcleo de WordPress. Esta es una excelente noticia para la migración: no hay ninguna exportación separada de AnyComment que manejar, y no hay servidor de terceros con el que coordinarse. Tus datos ya están en tu propio servidor.

Esto significa que el flujo de migración estándar de FastComments para WordPress maneja AnyComment sin pasos adicionales.

## Opción 1: El Plugin de WordPress de FastComments (Recomendado)

El camino más fácil es instalar el <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin de WordPress de FastComments</a>. El plugin te guía a través de la vinculación de tu instalación de WordPress con FastComments, y copia automáticamente tus datos de comentarios existentes. No hay nada que descargar o subir manualmente. Los datos se copian de tu base de datos de WordPress a nuestros servidores, por lo que esto también aliviará la carga de tus servidores una vez que la migración esté completa.

La mayoría de las migraciones terminan en un par de minutos.

Después de que los datos se transfieran, desactiva AnyComment. Los comentarios seguirán siendo gestionados por FastComments, y el plugin mantiene tu base de datos de WordPress sincronizada como una copia de seguridad (si habilitas esa función), así que siempre posees tus datos.

## Opción 2: Exportación XML de WordPress

Si prefieres migrar manualmente, o ya has salido de WordPress y solo tienes un XML de respaldo, utiliza la exportación integrada de WordPress.

1. En tu administrador de WordPress, ve a **Herramientas -> Exportar** y descarga el archivo XML.
2. Inicia sesión en tu panel de FastComments y ve <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">aquí para importar el archivo</a>.
3. Selecciona **WordPress (.xml)** del menú desplegable y sube tu archivo.

Dado que AnyComment escribe en `wp_comments`, cada hilo de AnyComment está en ese XML junto con tus otros comentarios de WordPress. El importador los empareja automáticamente con la publicación correcta.

## Reemplazando el Widget de AnyComment

Si utilizaste la Opción 1, el plugin de WordPress de FastComments ya reemplaza AnyComment en tu sitio; simplemente desactiva AnyComment después de que termine la migración.

Si utilizaste la Opción 2 y estás manteniendo tu instalación de WordPress, instala el plugin de FastComments después para manejar la representación del widget y la sincronización continua. Si estás moviéndote completamente fuera de WordPress, inserta nuestro <a href="https://fastcomments.com/install-wizard" target="_blank">fragmento de instalación</a> en tu nuevo sitio; soportamos muchos frameworks de frontend que <a href="https://fastcomments.com/install-wizard" target="_blank">puedes encontrar aquí</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Podemos ayudar con eso</a>.

## UE

Si estás en la UE, probablemente querrás crear tu cuenta en <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> para que tus datos de cliente se mantengan en la UE.

## Resumen

1. Instala el plugin de WordPress de FastComments y deja que copie tus datos, **o** exporta desde WordPress como XML y súbelo en la página de importación.
2. Desactiva AnyComment.
3. Si también dejas WordPress, cambia el código del widget en tu nuevo sitio.

{{/isPost}}