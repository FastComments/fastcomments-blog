---
[category:Performance]
###### [postdate]
# [postlink]FastComments Actualizado a HTTP/2[/postlink]

{{#unless isPost}}
¡Hemos hecho algunas actualizaciones de infraestructura que mejoran aún más el rendimiento de FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

Desde su lanzamiento, FastComments ha estado en HTTP/1.1. Recientemente, hemos cambiado toda nuestra infraestructura
en todas las regiones a HTTP/2.

### Impacto

Esta actualización mantiene a FastComments al día con los estándares modernos mientras proporciona algunas
mejoras de rendimiento. La desventaja es que algunos navegadores más antiguos ya no son compatibles.

### Navegadores y Clientes Obsoletos

Puedes encontrar [navegadores no soportados aquí](https://caniuse.com/http2). El principal problema será IE11, que
solo tiene soporte parcial; sin embargo, estos usuarios deberían cambiar a Edge.

Chrome, Firefox y otros han soportado HTTP/2 durante años, por lo que consideramos seguro hacer este cambio.

### Beneficios de Rendimiento

FastComments ya está bastante optimizado en términos de activos servidos y su orden. Por ejemplo,
el widget de comentarios solo realiza unas pocas solicitudes para cargar: el iframe inicial, luego el script que incluye estilos para reducir el número de solicitudes, y luego
la solicitud a la API para obtener toda la información necesaria. Comparado con muchos otros servicios, es bastante compacto.

Entonces, este no es un caso en el que HTTP/2 realmente ayuda mucho. El principal beneficio de HTTP/2 es hacer solicitudes concurrentes.

Sin embargo, ¡HTTP/2 nos ayuda con la compresión! Los encabezados ahora se envían en un protocolo binario que
es más compacto, y ciertos complementos con muchos activos se cargarán mucho más rápido, ya que las solicitudes
pueden ser envidadas en paralelo.

### En Conclusión

Gracias a nuestros clientes por su paciencia al implementar estos cambios. Esperamos que
sigas amando FastComments.

¡Saludos!

{{/isPost}}

---