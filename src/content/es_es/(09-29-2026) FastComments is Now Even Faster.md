[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments es ahora aún más rápido[/postlink]

{{#unless isPost}}
Hemos eliminado una solicitud de red al cargar el widget de comentarios, reduciendo aún más los tiempos de carga.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artículo contiene jerga técnica

### Novedades

Cómo ha funcionado FastComments durante los últimos cinco años más o menos es que cargamos un pequeño script, se carga el iframe, luego el script que incluye su estilo, y después una solicitud a la API para todo lo necesario para dibujar los comentarios. Aunque suene mucho, es muy compacto comparado con la mayoría de los sistemas.

Sin embargo, ahora hay una solicitud menos. La respuesta del iframe que entrega el widget también lleva los comentarios y todos los datos que el usuario necesita inicialmente, por lo que la última solicitud a la API ha desaparecido.

La API sigue mantenida por compatibilidad retroactiva para quien dependa de ella.

### Nada que configurar

No hay ninguna configuración para esto y ninguna versión a la que actualizar. Si incrustas FastComments con nuestro script, ya lo tienes.

Tu propia página no se ve afectada de ninguna manera. El widget sigue cargándose en un iframe y sigue sin bloquear tu contenido, exactamente como antes.

### Dónde no se aplica

Algunas rutas no utilizan esto, y se comportan exactamente como siempre lo han hecho:

- Rastreadores de motores de búsqueda, que ya renderizan los comentarios directamente en la página en lugar de en un iframe
- Feeds de actividad de usuarios y filtrado de hashtags, que leen de diferentes endpoints

### En conclusión

Esperamos que sigas disfrutando de nuestra plataforma y que las mejoras que implementamos aporten valor. :)

¡Saludos!

{{/isPost}}