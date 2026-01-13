---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Ahora Puede Mostrar Contadores de Vistas de Comentarios[/postlink]

{{#unless isPost}}
FastComments ahora soporta mostrar un conteo al lado de cada comentario que se incrementa en tiempo real a medida que los usuarios ven los comentarios.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ahora soporta mostrar un conteo al lado de cada comentario que se incrementa en tiempo real a medida que los usuarios ven los comentarios. Si un comentario es visto o no se determina por la cuenta del usuario o la sesión anónima. Soporta SSO (tanto SSO Seguro como SSO Simple).

### Demostración en Vivo

¡Hemos habilitado los contadores de vistas de comentarios para esta publicación de blog específicamente! ¡Mira el conteo al lado del ojo en cada comentario!

### Documentación

[Puedes encontrar la documentación para desarrolladores sobre cómo configurar Contadores de Vistas aquí.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Rendimiento

Los conteos no se actualizan de inmediato, hay un pequeño retraso (de hasta tres segundos) mientras los conteos se agregan y luego se envían a través de la red. Esta es una optimización para que si tienes un evento en vivo, y unas pocas miles de personas ven, digamos, 10 comentarios en promedio en la página, no enviemos instantáneamente millones de actualizaciones (`3000 usuarios x 3000 cargas de página = ~9 millones de cambios`) a cada usuario y ralentizamos su navegador o usamos todo su ancho de banda de red.

### En Conclusión

Agradecemos a nuestros clientes que nos dan comentarios continuos para que podamos pensar en ideas como esta y también nos den el tiempo para lanzar características bien optimizadas. Esperamos que continúes amando FastComments.

¡Saludos!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---