---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Incrusta YouTube, SoundCloud y más en los Comentarios[/postlink]

{{#unless isPost}}
Los comentaristas ahora pueden pegar un código de inserción y hacer que el video o reproductor se muestre directamente dentro del comentario. Está deshabilitado por defecto, activa por sitio y restringido a proveedores de confianza.
{{/unless}}

{{#isPost}}

### Novedades

A la gente le encanta compartir un video o una pista en una discusión. Hasta ahora, pegar un incrustado de YouTube o SoundCloud en un comentario no hacía mucho. El `<iframe>` crudo se eliminaba por motivos de seguridad, o se envolvía como un bloque de código.

Ahora puedes activar los incrustados de medios para tu sitio. Cuando está activado, un comentarista puede pegar el código de inserción directamente del proveedor y se muestra en línea, de la misma manera que lo haría en cualquier otra página.

Aquí tienes el tipo de fragmento que la gente copia de un botón de "Compartir" o "Incrustar":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Reproductor de video de YouTube" frameborder="0" allowfullscreen></iframe></div>

Pega eso en un comentario con incrustaciones habilitadas y obtienes el reproductor real.

### Solo Proveedores Confiables

Permitir iframes arbitrarios en tu página es un riesgo de seguridad real, así que no simplemente abrimos la puerta. Los incrustados están restringidos a una lista incorporada de proveedores confiables, incluyendo YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch y Dailymotion.

Si un comentario contiene un iframe apuntando a cualquier otro lugar, el iframe se elimina cuando se guarda el comentario. La misma sanitización que protege contra las etiquetas `<script>` y trucos `onload=` sigue activa en cada comentario. Los incrustados son solo una concesión adicional, cuidadosamente delimitada sobre eso.

### Agregando Tus Propios Proveedores

Si utilizas un proveedor que no está en la lista incorporada, puedes permitirlo. Hay un campo "Dominios de Incrustación Adicionales" donde puedes listar nombres de host adicionales de confianza, además de los proveedores incorporados.

La coincidencia se hace por el nombre de host exacto, así que añade el host completo del que se carga la incrustación, por ejemplo `player.example.com`. Cualquier cosa que no listes se mantiene bloqueada.

### Cómo Habilitarlo

Es una configuración por sitio en la página de personalización del widget, justo al lado de las opciones de carga de imágenes. Marca "¿Permitir Incrustaciones de Medios?" y guarda. No se necesita código ni redeploy.

Como nuestras otras configuraciones de contenido, esto es por regla de personalización, así que puedes habilitar los incrustados en un sitio o un conjunto de páginas y dejarlos apagados en otros lugares.

### Funciona en Ambos Editores

Pegar funciona tanto en el cuadro de comentarios plano como en el editor WYSIWYG. En el cuadro plano, el código de inserción se ingresa como texto y se convierte en un reproductor al enviar. En el editor WYSIWYG, la incrustación aparece como un bloque de inmediato, con un pequeño botón de eliminación en la esquina, así que es fácil de borrar si fue un error.

### En Conclusión

Los incrustados están desactivados por defecto, por lo que nada cambia para tu sitio a menos que decidas activarlos. Cuando lo hagas, tus comentaristas obtienen una forma más agradable de compartir videos y pistas, y tú mantienes las mismas garantías de seguridad que ya tenías.

Actívalo, pega un video y déjanos saber qué piensas a continuación.

¡Saludos!

{{/isPost}}