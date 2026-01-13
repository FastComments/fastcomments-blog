---
[category:Features]

###### [postdate]
# [postlink]El Editor WYSIWYG de FastComments ya está disponible[/postlink]

{{#unless isPost}}
Los clientes ahora pueden optar por usar el nuevo editor que no utiliza etiquetas de anclaje visibles para el formato.
{{/unless}}

{{#isPost}}

### Novedades

Los usuarios de FastComment siempre han tenido la capacidad de formatear sus comentarios con etiquetas de anclaje como `<b>esto</b>`. Esto es muy
familiar para cualquiera que haya utilizado un foro de internet en el pasado, o muchos de nuestros competidores, sin embargo, algunos usuarios y
comunidades esperan un comportamiento diferente.

Ahora puedes estilizar el texto en el área de comentarios sin etiquetas de anclaje, ya que la entrada de texto se puede cambiar a un `contenteditable`.

Con fines de demostración, esto se ha habilitado en este blog.

El editor avanzado tiene la misma apariencia que el antiguo editor, solo que no utiliza etiquetas de anclaje visibles.

### Activando la Edición Avanzada

En la Personalización del Widget, puedes simplemente habilitar `Editor Avanzado` y hacer clic en guardar. La documentación está [aquí](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Para Desarrolladores y Consideraciones

Puedes encontrar documentación para habilitar esto en el código [aquí](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), aunque recomendamos utilizar la interfaz de personalización del widget, ya que
resultará en menos datos enviados en un viaje de ida y vuelta por carga de página.

El HTML generado desde el contenido editable es ligeramente diferente al antiguo editor de textarea, así que ten esto en cuenta
si estás analizando comentarios desde la API.

### Optimización

Mantenemos el widget de comentarios sin crecer con esta nueva función al añadirlo como una extensión que se carga en segundo plano
cuando esta función está habilitada, lo que mantiene el widget de comentarios por defecto pequeño y ligero.

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háznos saber
a continuación si descubres algún problema.

¡Salud!

{{/isPost}}

---