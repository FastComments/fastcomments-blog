---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]El Sistema de Transporte Automático de Enrutamiento de FastComments[/postlink]

{{#unless isPost}}
¡Presentamos el Sistema de Transporte Automático de Enrutamiento de FastComments!
{{/unless}}

{{#isPost}}

## Introducción

El Sistema de Transporte Automático de Enrutamiento de FastComments (FARTS) es nuestra capa de transporte y servicio. FARTs ayudan con la congestión, enrutando el tráfico según la ubicación del usuario y potencialmente la carga en el futuro. Consiste en varios sistemas diferentes, una capa de DNS consciente del geolocalización, un proxy de base de datos, replicación de DB, gestión de certificados SSL, un proxy inverso y CDN que utiliza una caché LRU en disco para almacenar activos en el borde. El sistema admite modos de conmutación por error silenciosos y ruidosos. Se prefiere el silencioso en producción.

## Activo-Activo

La última versión de FART contiene una capa de proxy y replicación integrada para nuestra base de datos. Esto permite que FastComments sea Activo-Activo con disponibilidad de escritura global, lo que permite que nuestros FARTS sean eventualmente consistentes. [Más detalles aquí](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un enfoque que realmente tomamos al principio fue ver si podíamos crear un fork de MongoDB. Uno de nuestros ingenieros (Sloperators) pudo lograr esto con Opus 4.6, sin embargo, decidimos que el riesgo de hacerlo era mayor que construir nuestro propio sistema aislado.

Lo último que querrías con algo como FART es saber que llegó, pero no puedes rastrear la fuente. Hemos agregado monitoreo y diagnósticos para monitorear la replicación activo-activo a un nivel granular.

## Rust a Escala

Parte de la motivación para crear FART fue reemplazar algunos servicios existentes escritos en Java. Después de reflexionar sobre ello durante un tiempo, decidimos consolidar estos en un solo servicio en Rust para reducir la sobrecarga de tiempo de ejecución. Este fue un compromiso aceptable ya que no desplegamos FART con frecuencia. FART se compila con LTO, por lo que realmente podemos dejarlo funcionar.

Hemos pasado mucho tiempo tratando de ajustar el antiguo sistema Java con diferentes GCs, etc., y eventualmente decidimos que el Rust asíncrono + Mimalloc funcionaba significativamente mejor en el mismo hardware con requerimientos de memoria mucho más bajos, así que el cambio fue un no-brainer.

## El Maestro FART

Cada implementación contiene su propio Maestro FART. El maestro es responsable de orquestar crons, webhooks, y demás.

## Impacto en el Cliente

El sistema FART ha estado en producción durante aproximadamente un año. Solo recientemente hicimos la migración a la implementación Activo-Activo. El nuevo sistema nos proporciona mayor visibilidad sobre la latencia en todo el sistema, así como una menor carga de mantenimiento, por lo que ahora podemos dedicar más tiempo a las características.

FART trabaja silenciosamente en segundo plano, aunque su presencia siempre se siente. Esperamos que encuentres que nuestros sistemas son más rápidos para tus casos de uso (principalmente las acciones del usuario que resultan en cambios en los datos serán más rápidas en algunas regiones).

## Implementaciones

La implementación utiliza el mismo sistema de orquestación global que usamos para desplegar los propios servicios. La documentación de FARTS recomienda a los sloperators que nunca confíen en un despliegue, siempre verifiquen la carga útil antes de liberarla.

Las alertas de FART posteriores al despliegue siguen una política de escalada: primero la sala, luego el piso, luego el edificio.

## En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente este cambio. Estamos emocionados por lo que viene en el futuro. FastComments debería escalar mejor y tener mejor disponibilidad a largo plazo con este trabajo. Como dice el libro de jugadas de FART: "Si hueles algo, di algo". Háznoslo saber a continuación si descubres algún problema.

{{/isPost}}

---