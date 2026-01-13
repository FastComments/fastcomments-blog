---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lanza Estilos de Voto Personalizados[/postlink]

{{#unless isPost}}
¿Alguna vez has querido cambiar del estilo de voto predeterminado de arriba/abajo a solo un simple icono de corazón? Ahora puedes.
{{/unless}}

{{#isPost}}

### Novedades

Anteriormente, para personalizar la barra de votación, era necesario escribir código y CSS personalizados. Esto también significaba que si querías hacer algo como habilitar votaciones anónimas, pero deshabilitar los votos negativos, esto no solo requería código personalizado, sino que las solicitudes de voto no podían ser validadas del lado del servidor. Esto significaba que las personas aún podían votar negativamente de manera anónima al llamar al servidor directamente, lo que sucedía en algunas comunidades.

Ahora hemos introducido el concepto de `voteStyle` en la plataforma, siendo el primer nuevo estilo de voto el icono de corazón que muchos han solicitado.

Cuando se define a través de la interfaz de personalización del widget, esto también agrega validación a la plataforma, lo que evita que se voten negativamente en absoluto, de modo que los hackers ya no puedan eludir la interfaz de usuario y votar negativamente a un usuario hasta la desaparición, como podría suceder si se habilitara el voto anónimo. 

### Cómo Usarlo

Ve a la [Interfaz de Personalización del Widget](https://fastcomments.com/auth/my-account/customize-widget) y selecciona `Heart` bajo `Vote Style`.

### Documentación

Los documentos oficiales para esta función están [disponibles en docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Quién lo Obtiene

Todos los clientes actuales y nuevos de FastComments, en todos los niveles, ahora tienen acceso a estilos de voto personalizados. Esta función solo es compatible con la versión 2 del widget de comentarios en adelante.

### Optimizaciones

El código para los diferentes estilos de voto no está incluido en la descarga del cliente del widget a menos que esté habilitado, para evitar el exceso de carga del producto.

### Mirando Hacia Adelante

Ahora tenemos la capacidad de agregar diferentes tipos de votaciones y reacciones, lo que podríamos hacer en el futuro.

### En Conclusión

Al igual que el resto de FastComments, esperamos que encuentres esta función rápida y fácil de usar.

¡Saludos!

{{/isPost}}

---