---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]El Sistema de Transporte de Enrutamiento Automático de FastComments[/postlink]

{{#unless isPost}}
¡Presentamos el Sistema de Transporte de Enrutamiento Automático de FastComments!
{{/unless}}

{{#isPost}}

## Introducción

El Sistema de Transporte de Enrutamiento Automático de FastComments (FARTS) es nuestra capa de transporte y servicio. FARTS ayuda con la congestión, enrutando el tráfico basado en la ubicación del usuario y potencialmente la carga en el futuro. Consiste en varios sistemas diferentes, una capa DNS geo-consciente, un proxy de DB, replicación de DB, gestión de certificados SSL, un proxy inverso y un CDN que utiliza una caché LRU en disco para almacenar activos en el borde.

## Activo-ACTIVO

La última versión de FART contiene un proxy y una capa de replicación integrados para nuestra base de datos. Esto permite que FastComments sea Activo-ACTIVO con disponibilidad de escritura global, lo que asegura que nuestros FARTS sean eventualmente consistentes. [Más detalles aquí](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un enfoque que tomamos al principio fue ver si podíamos crear un fork activo-activo de MongoDB. Uno de nuestros ingenieros (Sloperators) pudo lograr esto con Opus 4.6, sin embargo, decidimos que el riesgo de hacer esto era mayor que construir nuestro propio sistema aislado.

## Rust a Escala

Parte de la motivación para crear FART fue reemplazar algunos servicios existentes escritos en Java. Después de pensar en ello un tiempo, decidimos consolidar estos en un único servicio en Rust para reducir la sobrecarga de tiempo de ejecución. Este fue un compromiso aceptable ya que no desplegamos FART a menudo. FART se compila con LTO, por lo que realmente podemos dejarlo funcionar.

Hemos pasado mucho tiempo tratando de ajustar el viejo sistema de Java con diferentes GCs, etc., y eventualmente decidimos que Rust asíncrono + Mimalloc funcionaban significativamente mejor en el mismo hardware con requerimientos de memoria mucho más bajos, así que cambiar fue una decisión sencilla.

Rust resultó ser realmente excelente para el código relacionado con redes que usa montones compartidos y bloqueos. Sin embargo, no es impermeable a los problemas de tiempo de ejecución. Quizás valga la pena mencionar que el código escrito por LLMs en Rust es bastante propenso a bloqueos, y una forma de evitarlo es diseñar sistemas como máquinas de estado fáciles de entender, en lugar de solo montones de async/await.

## El Maestro FART

Cada implementación contiene su propio Maestro FART. El maestro es responsable de orquestar crons, webhooks, y así sucesivamente.

## Impacto en el Cliente

El sistema FART ha estado en producción durante aproximadamente un año. Solo recientemente hicimos la migración a la implementación Activo-ACTIVO. Hay cierto impacto al leer sus propias escrituras a través de regiones, lo cual se cubre en el blog post vinculado anteriormente y [en la documentación](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART trabaja en silencio en segundo plano, aunque su presencia siempre se siente. Esperamos que encuentren que nuestros sistemas son más rápidos para sus casos de uso (principalmente las acciones de los usuarios que resultan en cambios en los datos serán más rápidas en algunas regiones).

## Implementaciones

La implementación utiliza el mismo sistema de orquestación global que usamos para desplegar los servicios en sí. La documentación de FART recomienda a Sloperators nunca confiar en un despliegue, siempre verificar la carga útil antes de liberar.

Las alertas de FART después del despliegue siguen una política de escalamiento: primero la sala, luego el piso, luego el edificio.

## En Conclusión

Dicen que internet es una serie de tubos, pero en realidad es una serie de toots.

Como todas las grandes versiones, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar correctamente este cambio. Estamos emocionados por lo que viene en camino. FastComments debería escalar mejor y tener mejor tiempo de actividad a largo plazo con este trabajo. Como dice el libro de jugadas de FART: "Si hueles algo, di algo". Háganos saber a continuación si descubre algún problema.

{{/isPost}}

---