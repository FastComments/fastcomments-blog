---
[category:UI & Customization]

###### [postdate]
# [postlink]Se ha añadido un cambio fluido al modo oscuro[/postlink]

{{#unless isPost}}
FastComments siempre ha soportado el modo oscuro. Sin embargo, anteriormente requería recargar el widget de comentarios para cambiar al modo oscuro. Esto se ha solucionado.
{{/unless}}

{{#isPost}}

### Novedades

FastComments siempre ha soportado el modo oscuro. Sin embargo, anteriormente requería recargar el widget de comentarios para cambiar al modo oscuro.

Esto significa que si un sitio utilizaba el modo oscuro, o permitía a los usuarios alternar entre los modos claro y oscuro, tendríamos que
eliminar completamente el widget de comentarios del navegador y recargarlo. Esto se hacía por razones técnicas para simplificar el producto
en el lanzamiento inicial, ya que el estado tiene que ser comunicado de ida y vuelta entre la página principal y el iframe del widget.

A la luz de que la temporada espeluznante ha terminado - se ha mejorado el cambio de modo oscuro. El widget de comentarios ahora soporta transiciones fluidas entre los modos claro
y oscuro. Sin embargo, aún requiere pasar la bandera `hasDarkBackground` cuando sea aplicable.

### Para Desarrolladores y Problemas Comunes

Para indicar al widget de comentarios que tu sitio está en modo oscuro - o tiene un fondo oscuro aplicado - debes pasar la
bandera `hasDarkBackground`. Esto no cambia. Sin embargo, ahora cuando llamas a `instance.update(newConfig)` (o cambias el estado
en una de nuestras bibliotecas como React, Svelte, etc.), detectaremos si el único parámetro cambiado es `hasDarkBackground` y, si es así,
actualizaremos el widget de comentarios de manera elegante. El widget cargará asíncronamente la extensión de modo oscuro en segundo plano y actualizará su estilo
si es necesario.

Un problema importante es que cuando pasas `newConfig` - este debe ser un objeto completamente nuevo para que esta función funcione.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háganos saber
abajo si descubres algún problema.

¡Salud!

{{/isPost}}

---