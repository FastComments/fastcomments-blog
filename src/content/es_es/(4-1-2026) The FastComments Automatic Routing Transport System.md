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

El Sistema de Transporte Automático de Enrutamiento de FastComments (FARTS) es nuestra capa de transporte y servicio. FARTS ayuda con la congestión, enrutando
el tráfico en función de la ubicación del usuario y potencialmente la carga en el futuro. Se compone de varios sistemas diferentes, una capa DNS geo-consciente, un proxy de DB, replicación de DB, gestión de certificados SSL, un proxy inverso, y un CDN que utiliza una caché LRU en disco para almacenar activos en el borde.

## Activo-A activo

La última versión de FART contiene un proxy integrado y una capa de replicación para nuestra base de datos. Esto permite que FastComments sea Activo-A activo
con disponibilidad de escritura global, lo que asegura que nuestros FARTS sean eventualmente consistentes. [Más detalles aquí](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un enfoque que realmente tomamos temprano fue ver si podíamos crear un fork activo-activo de MongoDB. Uno de nuestros ingenieros (Sloperators) pudo lograr esto con Opus 4.6, sin embargo, decidimos que el riesgo de hacerlo era mayor que construir nuestro propio sistema aislado.

## Rust a Escala

Parte de la motivación para crear FART fue reemplazar algunos servicios existentes escritos en Java. Después de reflexionar un tiempo, decidimos consolidar estos en un solo servicio de Rust para reducir la sobrecarga en tiempo de ejecución. Este fue un compromiso aceptable ya que no desplegamos FART a menudo. FART se compila con LTO, así que realmente podemos dejarlo funcionar.

Hemos pasado mucho tiempo tratando de ajustar el antiguo sistema de Java con diferentes recolectores de basura, etc., y eventualmente decidimos que Rust asincrónico + Mimalloc funcionaron significativamente
mejor en el mismo hardware con requisitos de memoria mucho más bajos, así que cambiar fue una decisión obvia.

Rust resultó ser realmente excelente para el código relacionado con la red que utiliza montones compartidos y bloqueos. Sin embargo, no es impermeable a problemas en tiempo de ejecución.
Vale la pena mencionar que el código escrito por LLMs en Rust es bastante propenso a interbloqueos, y una forma de evitarlo es diseñar sistemas como máquinas de estado fáciles de entender, en lugar de simplemente montones de async/await.

## El Maestro de FART

Cada implementación contiene su propio Maestro de FART. El maestro es responsable de orquestar crons, webhooks, y así sucesivamente.

## Impacto en el Cliente

El sistema FART ha estado en producción durante aproximadamente un año. Solo recientemente hicimos la migración a la implementación Activo-A activo.
Hay cierto impacto al leer tus propias escrituras a través de regiones, lo cual está cubierto en el blog post enlazado anteriormente y [en la documentación](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART trabaja silenciosamente en segundo plano, aunque su presencia siempre se siente. Esperamos que encuentres que nuestros sistemas son más rápidos para tus casos de uso (principalmente las acciones de los usuarios que resultan en cambios en los datos serán más rápidas en algunas regiones).

## Implementaciones

La implementación utiliza el mismo sistema de orquestación global que usamos para desplegar los propios servicios. La documentación de FART recomienda a los Sloperators que nunca confíen en un despliegue, siempre verifiquen la carga útil antes de liberar.

Las alertas de FART post-implementación siguen una política de escalación: primero la sala, luego el piso, luego el edificio.

## En Conclusión

Dicen que internet es una serie de tubos, pero en realidad es una serie de pedos.

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y liberar adecuadamente este cambio. Estamos emocionados por lo que viene a continuación.
FastComments debería escalar mejor y tener mejor tiempo de actividad a largo plazo con este trabajo. Como dice el manual de FART: "Si hueles algo, di algo". Déjanos saber abajo si descubres algún problema.

{{/isPost}}