---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]El Entrenamiento de Detección de Spam Ahora es Por Inquilino[/postlink]

{{#unless isPost}}
FastComments ha estado entrenando su clasificador de prevención de spam durante años. Ahora, las
capacidades de entrenamiento se han actualizado.
{{/unless}}

{{#isPost}}

### Novedades

Cuando marcas un comentario como spam, o no spam, FastComments aprende de esto para la
detección de spam futura.

Sin embargo, este aprendizaje sucedía en el mismo lugar para todos. Es decir, el entrenamiento
de spam de otro inquilino afectaba al tuyo. Hay ventajas y desventajas en esto. Primero, te beneficias automáticamente
de lo que otros moderadores consideran spam. La desventaja es que si cometen un error o si
tienen contenido que es diferente al tuyo.

Por ejemplo, si otro inquilino tiene una audiencia relacionada con simuladores de carreras, podrían estar
marcando comentarios con "spam de criptomonedas" como spam, mucho. Como resultado, el clasificador comienza a
relacionar el texto relacionado con criptomonedas como spam.

Pero, digamos que tienes un sitio que está orientado a criptomonedas. Ahora muchos de tus comentarios comienzan a ser
marcados como spam cuando no lo son. Algunos de ellos podrían ser justificadamente spam, pero muchos podrían no serlo.

### Entrenamiento Aislado

Cuando un nuevo inquilino se une a FastComments, por defecto su detección de spam será entrenada en
el trabajo pasado de otros inquilinos.

A medida que comienzas a marcar comentarios como spam/no spam, el sistema cambiará para usar tu
propio conjunto de entrenamiento.

### Actualización 20 de Septiembre de 2023

Descubrimos que esta configuración no era ideal para todos por defecto. El Entrenamiento de Spam Aislado no es solo opt-in.
Puedes habilitar esto en la página de Configuración de Moderación seleccionando "Aislado" en la opción "Filtro de Spam".

El predeterminado ahora vuelve a ser entrenamiento "Compartido".

### En Vivo

El conjunto de entrenamiento para tu inquilino ahora se reconstruye siempre que marcas un comentario como spam o no spam.

Anteriormente, el sistema reconstruía el índice de spam periódicamente. Esto se hacía para proteger al sistema contra
cargas excesivas. Después de un par de años, hemos descubierto que la carga del entrenamiento continuo no es muy alta, así que hemos
actualizado el sistema para que actualice automáticamente el índice cada vez que haces un cambio.

Estos índices se almacenan en el borde en nuestros servidores de aplicación, y todos se actualizan independientemente para
mantener el sistema rápido y receptivo.

### Cómo Obtenerlo

¡Esta función ha sido implementada para todos los clientes!

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y liberar correctamente esta función. Háganos saber
abajo si descubres algún problema.

¡Salud!

{{/isPost}}

---