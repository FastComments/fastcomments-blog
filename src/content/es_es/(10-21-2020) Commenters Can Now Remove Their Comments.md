---
[category:Features]
###### [postdate]
# [postlink]Los Comentadores Ahora Pueden Eliminar Sus Comentarios[/postlink]

{{#unless isPost}}
Una actualización muy esperada, ahora puedes eliminar tus comentarios dejados con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Novedades

Como se anunció recientemente, los comentarios dejados con FastComments ahora pueden ser editados, ya sea que estés conectado o no.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demostración de Eliminación"></video>

Como continuación, se ha lanzado la capacidad de eliminar tus comentarios. Entendiblemente, al igual que la edición de comentarios, ha sido una de nuestras características más solicitadas, y estamos felices de alcanzar este hito con nuestra base de usuarios.

#### Cómo Funciona

La eliminación de comentarios funciona de la misma manera que la edición: los usuarios conectados siempre pueden editar y eliminar sus comentarios. Para los comentadores anónimos, nuestros servidores proporcionan una ventana temporal de 24 horas para que editen o eliminen su comentario después de comentar, siempre que no cierren su navegador. Por ejemplo, esto significa que un comentador anónimo puede comentar y luego editar su comentario para corregir errores tipográficos, o eliminarlo, ¡sin nunca tener que iniciar sesión!

Si el comentador anónimo cierra su navegador, no podrá editar o eliminar su comentario a menos que haga clic en el enlace mágico enviado a su correo electrónico.

Para mayor seguridad, la clave de edición temporal se invalidará en cualquier intento de adivinar la clave incorrectamente.

#### ¿Por Qué Ahora, Después de Tanto Tiempo?

La razón de esto es la misma que la del por qué la edición tardó tanto en ser lanzada. Queríamos asegurarnos de que esto no disminuyera el rendimiento de FastComments y queríamos asegurarnos de que funcionara adecuadamente con nuestras funciones de comentarios en vivo. Además, queríamos que la característica se adaptara al caso de uso más común de nuestros clientes: comentarios anónimos.

#### Eliminando Comentarios En Vivo

Al igual que comentar y votar, la eliminación sucede en vivo. Si dos usuarios están en la misma página y un usuario elimina su comentario, el otro usuario verá que se ha eliminado.

#### Habilitando la Eliminación de Comentarios

Hemos terminado de implementar la edición y eliminación de comentarios por defecto para todos nuestros clientes. Actualmente, no se puede desactivar.

#### Integraciones de Terceros

Eliminar un comentario hará que el evento se propague a cualquier integración que tengas, como WordPress. Si utilizas nuestro plugin de WordPress, entonces agregar un comentario actualiza tu instalación de WordPress en segundo plano para que retengas una copia de tus datos. Si eliminas comentarios, seguimos la misma lógica y lo eliminamos de tu instalación de WordPress. Esto se aplica a otras integraciones, no solo WordPress.

#### En Conclusión

Sabemos que esta característica ha sido muy esperada por algunos. Como todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función.

¡Salud!

{{/isPost}}