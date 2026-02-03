---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Ahora Está Distribuido Globalmente[/postlink]

{{#unless isPost}}
FastComments ha hecho la transición a una nueva arquitectura para un mejor rendimiento global.
{{/unless}}

{{#isPost}}

### Novedades

Anteriormente, FastComments tenía una arquitectura muy tradicional para una aplicación web. Teníamos nuestros servidores de aplicaciones, bases de datos y algunos otros servicios. Esto se duplicó en dos regiones (us-west y eu). Si estabas en Francia y querías ver un hilo de comentarios de un cliente alojado en nuestro centro de datos global, tus solicitudes tendrían que ir hasta us-west para obtener los datos de los comentarios.

¡Ya no más! Ahora los datos de los comentarios y todos los activos multimedia están replicados globalmente para los clientes en nuestro despliegue global, y para los clientes en nuestro despliegue en la UE, tenemos tres puntos de presencia en la UE donde se replica la información. Tus solicitudes van al nodo más cercano en la UE.

### Cómo Funcionaba Anteriormente

Excepto por las bases de datos que tenían varios réplicas activas en distintas regiones y proveedores de nube, todos los servicios estaban desplegados en una instancia por tipo de servicio. Esto significaba que para cada región teníamos un servidor de aplicaciones, un servidor pubsub y un servidor de medios. El plan era escalar verticalmente mientras pudiéramos, ya que esto mantenía las cosas simples. Escribir código era fácil: siempre sabías que podías "leer tus propias escrituras" al acceder a la base de datos. La infraestructura era fácil, excepto por las actualizaciones de seguridad que tomaban un minuto de inactividad.

### El Problema

El problema empezó, evidentemente, cuando alcanzábamos la capacidad. Así que optimizábamos, y luego eventualmente teníamos que aumentar el tamaño de la instancia para ese servicio.

Esto comenzó a resultar prohibitivo en términos de costos en Linode, donde una instancia de $144 es aproximadamente equivalente, según nuestras pruebas de passmark, a un nodo de $20 en OVH, y aunque cambiáramos de proveedor de alojamiento tendríamos puntos únicos de fallo por todas partes, y proveedores como OVH tienden a tener tiempos de resolución más largos que Linode para problemas de mantenimiento.

### RiR :)

Durante los primeros años, los servicios de PubSub y Medios en FastComments fueron escritos en Java. Se eligió Java por ser relativamente de alto rendimiento en relación al esfuerzo invertido, y después de años de ajustar el GC, probar G1GC, Shenandoah y Z1, decidimos que no más Java. El overhead en el uso de memoria era simplemente demasiado y dado que estos servicios eran muy estables una vez completados, los beneficios de Java se desvanecieron. Además, estos servicios tendían a lidiar con el problema del "thundering herd", lo que significaba que la JVM intentaba manejar el tráfico pico cuando el JIT aún no se había activado. Estos servicios eran candidatos ideales para cambiar a C++ o Rust.

Se eligió Rust ya que no somos expertos en C++ y cometer un error en el código de red podría exponer los datos de un cliente a otro. Rust nos ayuda a prevenir este tipo de problemas.

Queríamos consolidar estos servicios de todos modos, así que, aunque podríamos haber hecho *otro* pase optimizándolos quizás con GraalVM, decidimos movernos a Rust y terminar con eso.

La migración no estuvo exenta de problemas. Estos servicios tienen que terminar SSL, soportar HTTP 1.1, HTTP/2, y así sucesivamente. Hacen cosas como gestionar muchos flujos de datos de manera concurrente, leyendo medios desde una caché lru en disco, S3, bases de datos, y comunicándose en una red de malla. El ecosistema de Java, Vertx y Netty, era muy bueno para estas cosas. Estamos empujando el ecosistema de bibliotecas hasta su límite, y no tener mucha experiencia con las bibliotecas de Rust significaba que tuvimos pruebas y errores. Esto causó algo de inactividad, y nos disculpamos por ello.

También experimentamos con diferentes administradores de memoria, decantándonos por mimalloc para nuestros servidores DNS personalizados y libc para la capa de transporte. No ejecutamos Nginx o Apache, sino que utilizamos nuestra propia combinación de un servidor DNS personalizado que enruta clientes globalmente basado en un índice en memoria reconstruido semanalmente de Maxmind y nuestra capa de transporte en Rust que mantiene una malla con las otras instancias de transporte. El transporte termina SSL, maneja el trabajo de pubsub y es nuestro CDN. El beneficio de esto es menos overhead al mover cosas entre servicios, y menos overhead/abstracción de infraestructura. El inconveniente es la visibilidad, así que buenas métricas son importantes.

En términos de rendimiento resultante, los servicios en Rust usaron aproximadamente entre el 10% y el 30% de la memoria de los de Java, a pesar de todo nuestro trabajo. Leí libros como Java Concurrency in Practice por diversión, así que aunque no soy un experto, sé una o dos cosas sobre escribir servicios rápidos en la JVM, y fue mucho más fácil lograrlo con Rust. Además, los picos de mensajes a grandes cantidades de suscriptores apenas registrarían uso de CPU cuando los servicios de la JVM gastarían el 40% de su tiempo en GC, a pesar de escribir nuestro código más como un motor de juegos y menos como un servidor típico. No puedo decir que sea un gran fan de Rust, pero para servicios que realizan mucho trabajo y no cambian mucho después del desarrollo inicial, es perfecto. Nuestra lógica de negocio principal sigue en TypeScript.

### La Nueva Arquitectura

La nueva arquitectura ya no tiene nodos "mascota". En su lugar, cada servidor es un clon completo con todos los mismos servicios y una configuración casi idéntica. Cada uno ejecuta el transporte, DNS, el servidor de aplicaciones y una copia de la base de datos. Todos los nodos mantienen Cifrado de Disco Completo con desbloqueo automático usando Dropbear.

Cada servidor ejecuta el transporte de enrutamiento que termina solicitudes y las maneja ya sea como un websocket, flujo http o solicitud cdn. Estos servidores se conectan entre sí y cualquier uno dado proporciona un mapeo de la red global a su servidor DNS local para indicar al DNS en tiempo real dónde está cada nodo en vivo a nivel global.

Uno de los beneficios de la nueva arquitectura es la redundancia. Si un cliente en una región nos golpea con mucha fuerza, las otras regiones permanecen en línea.

El código de la aplicación ahora tiene que ser muy consciente de qué consultas pueden ir al nodo más cercano o cuáles deben ir a la base de datos primaria, que puede estar lejos. Cometer un error puede disminuir drásticamente el rendimiento. Esto también significa que las escrituras desde algunas regiones pueden ser lentas, y esto requiere un ajuste y optimización cuidadosos. Ahora seguimos un patrón internamente en el código donde todos los métodos que acceden a la base de datos toman un argumento readPreference, para que los llamadores hasta la parte superior tengan que decidir explícitamente cómo consultar.

El beneficio es un muy buen escalado horizontal para lecturas. FastComments es muy pesado en lecturas, ¡pero no debemos olvidar a nuestros moderadores! Los moderadores trabajan día tras día a través del globo y queremos que su experiencia siga siendo buena. Como parte de este despliegue hemos estado trabajando con algunos de ellos para asegurar que las herramientas de moderación sigan siendo rápidas.

También podemos seleccionar hardware a mano, lo cual es divertido y gratificante. Los nuevos servidores son una mezcla de i5-13500 y cajas Ryzen 5 5600X, y la UE tiene algunos Xeons más antiguos. En nuestras pruebas de referencia, todos estos fueron mucho más rápidos que los servidores más caros que estábamos explorando en otros proveedores. El inconveniente es más trabajo de configuración, pero hemos automatizado esto, junto con la monitorización del disco SMART para fallos y así sucesivamente.

Hacer este tipo de cosas significa que podemos seguir ofreciendo precios competitivos.

### El Despliegue

El despliegue durante los últimos meses mientras reescribimos los servicios y cambiamos a nuevos proveedores de alojamiento ha sido accidentado; te agradecemos por tu paciencia.

En el despliegue inicial, nuestras métricas mostraron un aumento en las solicitudes que tardan más de 100 ms. Intentamos no tener muchas solicitudes que tomen tanto tiempo para cualquier cosa.

<div class="text-center">
    <div class="sm">Progreso Gradual</div>
    <img src="images/slow-reqs.png" alt="Solicitudes Lentas" title="Solicitudes Lentas" />
</div>

Todavía estamos avanzando gradualmente en la mejora del rendimiento para algunas regiones. Gracias a todos los que han proporcionado comentarios hasta ahora.

### Consideraciones Al Usar La API

La API sigue siendo muy consistente: puedes leer tus propias escrituras, para mantener la compatibilidad hacia atrás y mantener las cosas simples para los desarrolladores. Para permitir que los desarrolladores elijan rendimiento sobre consistencia, planeamos exponer el parámetro readPreference. El beneficio es que también podemos ofrecer un descuento por créditos para estas llamadas a la API.

Todos los puntos finales públicos, como el de servir el widget de comentarios público, siempre leen de la base de datos más cercana (local) en ese nodo.

### ¿Por Qué No Simplemente Usar Un CDN Regular?

Los hilos de comentarios no son estáticos, son en vivo, y aplicar un flujo en vivo sobre datos estáticos obsoletos tampoco funciona ya que cuando ves un hilo como usuario anónimo obtienes una "sesión anónima". En esta sesión anónima puedes hacer cosas como bloquear y señalar a otros usuarios, y tienes que mostrar si el usuario anónimo le gustó un comentario determinado, y así sucesivamente. Los hilos de comentarios también pueden estar bloqueados tras SSO, autenticación o grupos de usuarios.

Finalmente, el tipo de "mejora progresiva" donde los datos dinámicos se mapean a los datos estáticos del CDN te da una mala experiencia donde el contenido salta o cambia después de unos segundos. Preferimos no hacer eso.

### ¿Quién Tiene Mis Datos Ahora?

Tus datos ya no están almacenados en Linode. Están replicados en vivo entre Hetzner y OVH con cifrado de disco completo, y toda la comunicación entre servidores backend se realiza con TLS. Mantenemos un par de instancias heredadas de Linode para proxies de webhook salientes, pero no se almacena ningún dato o medio en Linode.

### En Conclusión

Como todas las versiones importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y liberar correctamente este cambio. FastComments debería escalar mejor y tener mejor tiempo de actividad a largo plazo con este trabajo. Háznoslo saber abajo si descubres algún problema.

{{/isPost}}

---