---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]¡FastComments está listo para el espacio![/postlink]

{{#unless isPost}}
Hemos completado nuestra migración de base de datos activa-activa, trayendo verdadera redundancia multi-región a FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este artículo contiene jerga técnica

### Novedades

Cada [punto de presencia](https://sophon.fastcomments.com/) de FastComments ahora realiza escrituras localmente y las replica de forma asincrónica a todos los demás nodos. Esto proporcionará mayor durabilidad sobre el sistema anterior, además de hacer que las herramientas de moderación sean más rápidas para los usuarios en algunas regiones, con algunos compromisos.

"Listo para el espacio" es un poco optimista, pero la idea es que podríamos implementar FastComments en diferentes planetas y eventualmente el sistema estaría sincronizado. Sin embargo, los usuarios en Plutón tendrían que esperar unas 24 horas para ver los cambios reflejados en su página de factura, ya que actualmente solo un maestro por región puede agregar información de facturación.

### Algo de historia, por qué el cambio

Cuando FastComments se lanzó originalmente, teníamos una arquitectura muy típica. Teníamos una capa de proxy, una capa de aplicación, una base de datos, algunas réplicas, y luego más tarde réplicas a través de regiones y proveedores de nube para mayor redundancia.

Eventualmente movimos las réplicas de la base de datos a todas las zonas donde se encuentran la mayoría de nuestros usuarios y también desplegamos la aplicación allí, y creamos nuestro propio sistema de DNS y proxy (descrito en una entrada de blog posterior) para enrutar solicitudes al nodo de aplicación más cercano. Esto hace que las lecturas sean rápidas, pero las escrituras más lentas, ya que ahora, en lugar de esperar un viaje de ida y vuelta de HTTP al backend, esperas un viaje de ida y vuelta HTTP a un nodo cercano, y ese nodo podría hacer múltiples escrituras en la base de datos de vuelta al primario. ¡No es bueno!

Así que, para combatir esto, reestructuramos muchas áreas de la aplicación para tomar un `readPreference` en los argumentos de función, para que los llamadores puedan decidir qué tan obsoletas están bien con que sean sus lecturas, y además hicimos más escrituras (como escribir estadísticas de moderador sobre acciones de moderadores) de tipo fire-and-forget. No ideal, pero aceleró las cosas significativamente.

Un problema que encontramos al ejecutar Mongo de manera global son las divisiones de la red. Si se cortan suficientes nodos, las lecturas se detienen ya que cada nodo se vuelve incierto sobre si es aceptable servir lecturas. Hay algunas maneras de sortear esto, pero los casos extremos se complican. Este no es un problema teórico: sucedió suficientes veces, causando páginas a las 3 AM que nos cansamos de ello, incluso intentando ajustar Mongo para estar bien con la incertidumbre de la elección del conjunto de réplica hasta un minuto de diferencia. Lamentablemente, las redes de Sao Paulo a Falkenstein, por ejemplo, simplemente no eran muy buenas a través de algunos de nuestros proveedores de alojamiento. Ajustar el control de congestión y tales cosas ayudó, pero no resolvió el problema.

La solución de santo grial, asumiendo que estás bien con ciertos compromisos, es la capacidad de aceptar las escrituras localmente en ese nodo (que tiene hardware decente, RAID, etc., que es poco probable que falle) y decir al usuario que sus datos están guardados. También puedes tener en ese punto de presencia un segundo nodo como una réplica caliente para durabilidad.

Así que esto es donde terminamos. Oregón, Virginia, Falkenstein, Sao Paulo, Singapur, son todos sus propios conjuntos de réplicas y aceptan escrituras. La implementación de la UE (aunque solo tiene tres PoPs) tiene el mismo comportamiento.

### Cómo funciona

Parte de esto se cubre en la sección anterior, pero el TL;DR es que es CRDT-ligeramente. Creamos un proxy (en Rust, porque claro) que se encuentra entre la aplicación y Mongo y lo hace multi-maestro. El proxy es consciente de los pares, gestiona puntos de control, replicación, monitoreo y sincronización inicial. Es un reemplazo multi-maestro para el sistema de replicación de Mongo, incluyendo para algunos comandos DDL.

**La diferencia con otras herramientas** es que **no sigue el oplog**. Seguir el oplog, o usar flujos de cambios, no funcionaría, porque solo te muestra el estado final del objeto después de la escritura, siendo imposible manejar conflictos. Necesitas capturar cada operación `$set`, `$inc` y replicar esa operación en sí misma.

Esta es una solución específica del dominio. No funcionaría para todos los productos. Podrías decir que es diseño orientado al dominio :). Funciona para nosotros porque desde el principio solo `$set` los campos que cambiamos en los documentos - nunca usamos `replaceOne` de Mongo, por ejemplo. Lo mismo con los contadores. **Nunca** haces `SET VOTES = 5`. En cambio, escribirías `INCREMENT VOTES BY 5`, ya que esto permite consistencia eventual. Los bloqueos distribuidos se manejan mediante **no**. Solo un nodo por clúster tiene una bandera configurada para ejecutar cron. Aunque esto puede parecer limitado, podemos comprar servidores con terabytes de RAM, así que podemos asumir este compromiso para reducir el riesgo y la complejidad.

### Leyendo tus propias escrituras

Para los desarrolladores que usan la API, deberías poder leer tus propias escrituras como antes (haz una llamada a la API para crear un comentario, luego lista comentarios y ve la nueva entrada en esa lista). **La advertencia** es que no puedes hacer esto entre regiones. Si tu backend se ejecuta en solo una región, como us-west, entonces deberías poder leer tus propias escrituras, excepto en el evento de que entre tu escritura y tu lectura, ese nodo se caiga **y** tu caché de DNS se actualice para apuntar al siguiente nodo más cercano. Siempre que esto no suceda, leer tus propias escrituras es confiable.

[También puedes fijar qué punto de presencia atacas. Más información aquí.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Pruebas y la migración

Aproximadamente la mitad del código en el sistema es el arnés de pruebas, el marco y las pruebas. Aún así, la liberación fue un poco accidentada, tomando más tiempo de inactividad (1 hora para la UE y 20 minutos para us-global) de lo deseado, pero estamos contentos de haber superado este hito y ¡gracias por tu paciencia!

### En conclusión y lo que esto significa para ti

FastComments ahora debería ser más rápido y más duradero que nunca, y ahora podemos volver a trabajar en características :)

¡Salud!

{{/isPost}}

---