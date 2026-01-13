---
[category:Features]
###### [postdate]
# [postlink]Los Comentadores Ahora Pueden Eliminar Sus Comentarios[/postlink]

{{#unless isPost}}
Una actualización muy esperada, ahora puedes eliminar los comentarios que dejaste con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

#### Qué Hay de Nuevo

Como se anunció recientemente, los comentarios dejados con FastComments ahora pueden ser editados, ya sea que estés conectado o no.

<img src="images/fc-deleting-demo.gif" alt="GIF de Demostración de Eliminación (11mb)" title="Demostración de Eliminación" />

Como seguimiento, se ha lanzado la capacidad de eliminar tus comentarios. Comprensiblemente, al igual que la edición de comentarios, ha sido una de nuestras características más solicitadas, y estamos felices de alcanzar este hito con nuestra base de usuarios.

#### Cómo Funciona

La eliminación de comentarios funciona de la misma manera que la edición: los usuarios conectados siempre pueden editar y eliminar sus comentarios. Para los comentadores anónimos, nuestros servidores proporcionan una ventana temporal de 24 horas para que editen o eliminen su comentario después de comentar, siempre que no cierren su navegador. Por ejemplo, esto significa que un comentador anónimo puede comentar y luego editar su comentario para corregir cualquier error tipográfico, o eliminarlo, ¡sin necesidad de iniciar sesión!

Si el comentador anónimo cierra su navegador, no podrá editar ni eliminar su comentario, a menos que haga clic en el enlace mágico enviado a su correo electrónico.

Para mayor seguridad, la clave de edición temporal será invalidada en cualquier intento de adivinar la clave incorrectamente.

#### ¿Por Qué Ahora, Después de Tanto Tiempo?

La razón de esto es la misma que la de por qué la edición tardó tanto en ser lanzada. Queríamos asegurarnos de que esto no disminuyera el rendimiento de FastComments y queríamos asegurarnos de que funcionara correctamente con nuestras funciones de comentario en vivo. Además, queríamos que la característica atendiera el caso de uso más común de nuestros clientes: el comentario anónimo.

#### Eliminando Comentarios en Vivo

Al igual que comentar y votar, la eliminación ocurre en vivo. Si dos usuarios están en la misma página, y un usuario elimina su comentario, el otro usuario verá que ha sido eliminado.

#### Habilitando la Eliminación de Comentarios

Hemos terminado de implementar la edición y eliminación de comentarios por defecto para todos nuestros clientes. Actualmente, no puede desactivarse.

#### Integraciones de Terceros

Eliminar un comentario hará que el evento se propague a cualquier integración que tengas, como WordPress. Si usas nuestro complemento de WordPress, entonces agregar un comentario actualiza tu instalación de WordPress en segundo plano para que retengas una copia de tus datos. Si eliminas comentarios, seguimos la misma lógica y lo eliminamos de tu instalación de WordPress. Esto aplica a otras integraciones, no solo a WordPress.

#### En Conclusión

Sabemos que esta característica ha sido muy esperada por algunos. Como todos los lanzamientos importantes, nos alegra que pudiésemos tomarnos el tiempo para optimizar, probar y lanzar correctamente esta función.

¡Salud!

{{/isPost}}

---