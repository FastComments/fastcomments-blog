---
[category:API & Development]

###### [postdate]
# [postlink]Marca Blanca de FastComments[/postlink]

{{#unless isPost}}
La Marca Blanca, con integración completa de API y herramientas de automatización, llega a FastComments.
{{/unless}}

{{#isPost}}

## Novedades

FastComments ahora puede integrarse con otras aplicaciones y revendedores de terceros a través de la Marca Blanca. La Marca Blanca te permite crear cuentas de FastComments (llamadas inquilinos), usuarios, moderadores y más.

Ahora ofrecemos una [API completa](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) para automatizar la integración
con terceros.

Ahora puedes, a través de la API:

- Crear clientes (inquilinos secundarios) que son gestionados por tu inquilino.
- Administrar los paquetes disponibles para tus clientes y cómo manejarás la facturación.
- Agregar y gestionar usuarios en tus inquilinos gestionados.
- Agregar y gestionar moderadores en tus inquilinos gestionados.
- Invitar a moderadores y enviar enlaces de inicio de sesión a los usuarios del inquilino.

## Facturación

Con la facturación, hay dos opciones:

1. A través de FastComments Flex, el uso de tus inquilinos secundarios se envuelve automáticamente y se factura al inquilino principal. Esto se puede monitorear a través de la [Página de Análisis de Facturación](https://fastcomments.com/auth/my-account/analytics/billing).
2. A través de FastComments Pro, tienes acceso para crear un número fijo de inquilinos secundarios por un precio mensual fijo.

## Eliminación de Marca

Los inquilinos gestionados pueden tener la eliminación de marca habilitada, lo que elimina nuestros logotipos del widget de comentarios.

## Cómo Obtener la Marca Blanca

Actualmente, los planes FastComments Flex y Pro ofrecen acceso a la API de Marca Blanca.

## Scripts y Ejemplos

Un script de ejemplo que usa la API para configurar un inquilino con usuarios y moderadores [está disponible aquí](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Validación Completa

Cada recurso de la API contiene validaciones y restricciones completas, con mensajes de error útiles, para guiarte en su uso correcto.

<div class="code"><div class="title">Ejemplo de Error Detallado</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Un usuario con ese id no existe en este inquilino. Crea el usuario primero y luego hazlo moderador.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Otros Casos de Uso

Las APIs de [usuarios de inquilino](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) y [moderadores](https://docs.fastcomments.com/guide-api.html#moderator-structure) también se pueden utilizar para
agregar y gestionar estos recursos en tu propio inquilino, independientemente de la marca blanca.

## Documentación

Puedes encontrar la documentación completa de la Marca Blanca y cómo usar la API [aquí](https://docs.fastcomments.com/guide-white-labeling.html).

## En Conclusión

Esperamos que encuentres útil esta actualización y su documentación. ¡Feliz integración!

{{/isPost}}