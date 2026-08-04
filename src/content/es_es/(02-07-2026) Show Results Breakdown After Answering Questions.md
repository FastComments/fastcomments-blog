[category:Features]
[category:Ratings & Reviews]
###### [postdate]
# [postlink]Mostrar Desglose de Resultados Después de Responder Preguntas[/postlink]

{{#unless isPost}}
FastComments ahora permite mostrar a los usuarios un desglose agregado de todas las respuestas después de que respondan una pregunta de calificación o encuesta.
{{/unless}}

{{#isPost}}

### Novedades

Al recopilar comentarios mediante calificaciones de estrellas, NPS, pulgar arriba/abajo o preguntas de control deslizante, ahora puedes mostrar a los usuarios un desglose agregado de resultados inmediatamente después de que respondan.

Anteriormente, los usuarios respondían una pregunta y simplemente veían su selección resaltada. Ahora, con la nueva configuración **Show Results Breakdown After Answering**, ven cómo ha respondido el resto de usuarios en esa página.

### Cómo se ve

Para **Star ratings**, el desglose muestra la calificación promedio con estrellas parcialmente llenas, un gráfico de barras de distribución por estrella con porcentajes y el recuento total de respuestas.

Para **NPS questions**, muestra la puntuación NPS junto con los porcentajes de Promotores, Pasivos y Detractores con barras codificadas por colores.

Para **Thumbs Up/Down**, los usuarios ven la división porcentual entre pulgar arriba y pulgar abajo.

Para **Slider questions**, se muestra el valor promedio y el recuento total de respuestas.

Las sub‑preguntas también obtienen su propio desglose individual.

### Cómo habilitarlo

1. Ve a [Customize UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Edita tu regla de personalización (o crea una nueva).
3. En la configuración de la pregunta, marca **Show Results Breakdown After Answering**.
4. Guarda.

¡Eso es todo! El desglose aparecerá para los usuarios en esa página después de que envíen su respuesta.

### Rendimiento

Los datos del desglose se agregan por página y se almacenan en caché en el servidor, por lo que no añaden una carga significativa. Cuando un usuario envía una nueva respuesta, la caché se actualiza para que el desglose refleje los datos más recientes de inmediato.

### Modo oscuro

El desglose es totalmente compatible con el modo oscuro. Cuando tu sitio usa un fondo oscuro, las barras, etiquetas y colores de texto se adaptan automáticamente.

### En conclusión

Esta función brinda a los usuarios prueba social y contexto inmediato después de responder, lo que puede aumentar la participación en tus calificaciones y encuestas. Funciona con los cuatro tipos de preguntas y no requiere cambios de código para habilitarla.

¡Esperamos que disfrutes esta incorporación! Déjanos saber abajo si tienes algún comentario.

¡Saludos!

{{/isPost}}