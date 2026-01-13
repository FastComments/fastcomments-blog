---
[category:UI & Customization]

###### [postdate]
# [postlink]Los Tamaños de Página Ahora Son Personalizables[/postlink]

{{#unless isPost}}
FastComments ha tenido un tamaño de página fijo de 30 comentarios desde su lanzamiento. ¡Ahora esto es personalizable!
{{/unless}}

{{#isPost}}

### Novedades

Tus hilos de comentarios ahora pueden tener tamaños de paginación variables, y esto puede ser personalizable globalmente en tu cuenta, o a nivel de sitio, o incluso a nivel de página. Esto puede ser deseable si quieres que ciertas páginas muestren menos o más comentarios antes de que el usuario tenga que paginar.

Esto también afecta el desplazamiento infinito, y cualquier marco o integración que renderice comentarios de FastComments.

Los tamaños de página pueden variar desde `10` hasta `200`. El valor predeterminado sigue siendo `30`.

### Cómo Obtenerlo

Simplemente ve a la confiable [Interfaz de Personalización del Widget](https://fastcomments.com/auth/my-account/customize-widget) y define tu tamaño de página.

Ten en cuenta que FastComments precalcula los comentarios mostrados en cada página, por lo que cambiar este parámetro provocará que nuestro sistema recalcule todos tus hilos de comentarios. Esto no causará ningún tiempo de inactividad, pero puede tardar unos minutos en reflejarse el cambio.

### Documentación

La documentación actualizada sobre los tamaños de página se puede encontrar en [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Cambios Importantes

Como parte de este cambio, dos traducciones definidas en el widget de comentarios han sido renombradas. `PREV_30` y `NEXT_30` ahora son `PREV` y `NEXT`, respectivamente, y contienen una variable `[count]`.

Si has definido traducciones para los botones de paginación a través de la Interfaz de Personalización del Widget, entonces ya hemos migrado estas por ti. Si estás pasando las traducciones en algún tipo de integración a través de código, tendrás que actualizar estas:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háznoslo saber abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---