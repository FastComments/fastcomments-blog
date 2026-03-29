---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]¡FastComments está listo para el espacio![/postlink]

{{#unless isPost}}
Hemos completado nuestra migración de base de datos activa-activa, brindando verdadera redundancia multi-regional a FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artículo contiene jerga técnica

### Novedades

Cada [punto de presencia](https://sophon.fastcomments.com/) de FastComments ahora toma escrituras localmente y las replica de forma asíncrona a todos los demás nodos. Esto proporcionará una mayor durabilidad en comparación con el sistema anterior, además de hacer que las herramientas de moderación sean más rápidas para los usuarios en algunas regiones, con algunos compromisos.

"Listo para el espacio" es un poco optimista, pero la idea es que podríamos desplegar FastComments en diferentes planetas y eventualmente el sistema terminaría sincronizado. Los usuarios en Plutón, sin embargo, tendrían que esperar alrededor de un día para ver los cambios reflejados en su página de factura próxima, ya que actualmente solo un maestro por región puede agregar información de facturación.

### Algo de historia, por qué el cambio

Cuando FastComments se lanzó originalmente, teníamos una arquitectura muy típica. Teníamos una capa de proxy, una capa de aplicación, una base de datos, algunas réplicas, luego más tarde réplicas en diferentes regiones y proveedores de nube para mayor redundancia.

Eventualmente movimos las réplicas de DB a todas las zonas donde se encuentran la mayoría de nuestros usuarios y también desplegamos la aplicación allí, y creamos nuestro propio sistema de DNS y proxy (descrito en una publicación de blog posterior) para dirigir las solicitudes al nodo de aplicación más cercano. Esto hace que las lecturas sean rápidas, pero las escrituras más lentas, ya que ahora, en lugar de esperar un viaje de ida y vuelta por HTTP al backend, esperas un viaje de ida y vuelta a un nodo cercano, y ese nodo podría hacer múltiples escrituras de base de datos de vuelta al primario. ¡No es bueno!

Así que para combatir esto reestructuramos muchas áreas de la aplicación para aceptar un `readPreference` en los argumentos de función, de modo que los llamadores puedan decidir cuán obsoletas están bien con que sean sus lecturas, y además hicimos que más escrituras (como escribir estadísticas de moderadores en acciones de moderación) sean fire-and-forget. No ideal, pero aceleró las cosas significativamente.

Un problema con el que nos encontramos al ejecutar Mongo globalmente son las divisiones de red. Si se desconectan suficientes nodos, las lecturas se detienen ya que cada nodo se vuelve incierto sobre si es aceptable servir lecturas. Hay algunas maneras de sortear esto, pero los casos extremos se complican. Este no es un problema teórico: ocurrió suficientes veces causando páginas a las 3 AM que nos cansamos de ello, incluso tratando de ajustar Mongo para estar bien con la incertidumbre de la elección de replicaset hasta un minuto de diferencia. Lamentablemente, las redes de Sao Paulo a Falkenstein, por ejemplo, simplemente no eran muy buenas a través de algunos de nuestros proveedores de hosting. Ajustar el control de congestión y demás ayudó, pero no resolvió el problema.

La solución dorada, suponiendo que estés de acuerdo con ciertos compromisos, es la capacidad de aceptar las escrituras localmente en ese nodo (que tiene hardware decente, RAID, etc., que es poco probable que falle) y decirle al usuario que sus datos están guardados. También puedes tener en ese punto de presencia un segundo nodo como una réplica caliente para durabilidad.

Así que esto es en lo que terminamos. Oregón, Virginia, Falkenstein, Sao Paulo, Singapur, son todos sus propios conjuntos de réplicas y aceptan escrituras. La implementación de la UE (aunque solo hay tres PoPs) tiene el mismo comportamiento.

### Cómo funciona

Parte de esto se cubre en la sección anterior, pero el TL;DR es que es CRDT-lite. Creamos un proxy (en Rust, porque por supuesto) que se encuentra entre la aplicación y Mongo y lo hace multi-maestro. El proxy es consciente de sus pares, gestiona los puntos de control, la replicación, la supervisión y la sincronización inicial. Es un reemplazo multi-maestro para el sistema de replicación de Mongo, incluyendo algunos comandos DDL.

**La diferencia con otras herramientas** es que **no sigue el oplog**. Seguir el oplog o usar flujos de cambios no funcionaría, porque solo te muestra el estado final del objeto después de la escritura, lo que hace imposible manejar conflictos. Necesitas capturar cada operación `$set`, `$inc` y replicar esa operación en sí.

Esta es una solución específica de dominio. No funcionaría para todos los productos. Podrías decir que es diseño impulsado por el dominio :). Funciona para nosotros porque desde el principio tuvimos mucho cuidado de solo `$set` los campos que cambiamos en los documentos: nunca usamos `replaceOne` de Mongo, por ejemplo. Lo mismo con los contadores. Nunca haces `SET VOTES = 5`. En cambio, escribirías `INCREMENT VOTES BY 5`, ya que esto permite consistencia eventual. Los bloqueos distribuidos se manejan **evitándolos por completo**. Solo un nodo por clúster tiene una bandera establecida para ejecutar crons. Aunque esto puede parecer limitado, podemos comprar servidores con terabytes de RAM, por lo que podemos aceptar este compromiso para reducir el riesgo y la complejidad.

### Leyendo tus propias escrituras

Para los desarrolladores que usan la API, deberías poder leer tus propias escrituras como antes (hacer una llamada a la API para crear un comentario, luego listar comentarios y ver la nueva entrada en esa lista). **La advertencia** es que no puedes hacer esto entre regiones. Si tu backend se ejecuta en solo una región, como us-west, entonces deberías poder leer tus propias escrituras, excepto en el evento de que entre tu escritura y tu lectura, ese nodo se caiga **y** tu caché DNS se actualice para apuntar al siguiente nodo más cercano. Siempre que esto no suceda, leer tus propias escrituras es confiable.

### Pruebas y la migración

Aproximadamente la mitad del código en el sistema es el arnés de pruebas, el marco y las pruebas. Aún así, el lanzamiento fue un poco accidentado, tomando más tiempo de inactividad (1 hora para la UE y 20 minutos para us-global) del deseado, pero estamos contentos de haber superado este hito y agradecemos tu paciencia.

### En conclusión y lo que esto significa para ti

FastComments debería ser ahora más rápido y más duradero que nunca, y ahora podemos volver a trabajar en características :)

¡Salud!

{{/isPost}}

---