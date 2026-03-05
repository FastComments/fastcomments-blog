---
[category:Features]
###### [postdate]
# [postlink]Los Comentarios Ahora Son Editables Con FastComments[/postlink]

{{#unless isPost}}
Una actualización muy esperada, ahora puedes editar los comentarios dejados con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

Los comentarios dejados con FastComments ahora pueden ser editados, ya sea que estés conectado o no.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demostración de Edición"></video>

Entendiblemente, ha sido una de nuestras características más solicitadas, y estamos felices de alcanzar este hito con nuestra base de usuarios.

#### Cómo Funciona

Los usuarios conectados siempre pueden editar sus comentarios. Para los comentaristas anónimos, nuestros servidores proporcionan una ventana temporal de 24 horas para que editen su comentario después de comentarlo, siempre que no cierren su navegador. Por ejemplo, esto significa que un comentarista anónimo puede comentar y luego editar su comentario para corregir cualquier error tipográfico, ¡sin necesidad de iniciar sesión!

Si el comentarista anónimo cierra su navegador, no podrá editar su comentario a menos que haga clic en el enlace mágico enviado a su correo electrónico.

Para mayor seguridad, la clave de edición temporal será invalidada en cualquier intento de adivinar la clave incorrectamente.

#### ¿Por Qué Ahora, Después de Tanto Tiempo?

Al igual que con todos los cambios en el widget del lado del cliente, tenemos que tener cuidado de no inflar su tamaño. Esta función añade un tamaño considerable a la base de código de comentarios central (alrededor de 1kb comprimido - un aumento de aproximadamente el 10%).
Queríamos asegurarnos de que esto no disminuyera el rendimiento de FastComments y de que funcionara correctamente con nuestras funciones de comentarios en vivo. Además, queríamos que la función pudiera acomodar el caso de uso más común de nuestros clientes: los comentarios anónimos.

#### Editando Comentarios en Vivo

Al igual que comentar y votar, la edición ocurre en vivo. Si dos usuarios están en la misma página y un usuario edita su comentario, el otro usuario lo verá actualizado.

#### Habilitando la Edición de Comentarios

Hemos terminado de implementar la edición de comentarios por defecto para todos nuestros clientes. Actualmente, no se puede desactivar.

#### ¿Qué Sigue?

Planeamos lanzar la capacidad de eliminar comentarios también en una futura actualización.

#### Integraciones de Terceros

Editar un comentario hará que el evento se propague a cualquier integración que tengas, como WordPress. Si usas nuestro plugin de WordPress, entonces agregar un comentario actualiza tu instalación de WordPress en segundo plano para que retengas una copia de tus datos. Si editas un comentario, seguimos la misma lógica y actualizamos la copia en tu instalación de WordPress. Esto se aplica a otras integraciones, no solo WordPress.

#### En Conclusión

Sabemos que esta función ha sido muy esperada por algunos. Al igual que con todos los lanzamientos importantes, estamos contentos de haber podido tomar el tiempo para optimizar, probar y lanzar adecuadamente esta característica.

¡Salud!

{{/isPost}}