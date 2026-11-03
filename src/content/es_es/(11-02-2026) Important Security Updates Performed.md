[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Actualizaciones de Seguridad Importantes Realizadas[/postlink]

{{#unless isPost}}
Actualizamos el sistema operativo en todos nuestros servidores para corregir una vulnerabilidad reciente de TCP en Linux, y actualizamos Node.js para incorporar su lanzamiento de seguridad de octubre. No se requiere ninguna acción de su parte.
{{/unless}}

{{#isPost}}

### Novedades

Recientemente completamos dos actualizaciones de seguridad en la infraestructura de FastComments: una actualización del sistema operativo para corregir una vulnerabilidad en el código TCP del kernel de Linux, y una actualización de Node.js para incorporar el último lanzamiento de seguridad.

### Kernel de Linux

Todos nuestros servidores han sido parcheados y ahora ejecutan un kernel que incluye la corrección para <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Se trata de un uso después de liberar (use‑after‑free) en el código TCP IPv4 del kernel. El kernel podría liberar las opciones IP adjuntas a una conexión mientras otra CPU aún las estaba leyendo, por ejemplo mientras construía la respuesta SYNACK durante un apretón de manos TCP. La corrección espera hasta que ninguna CPU pueda seguir leyendo esa memoria antes de liberarla.

### Node.js

FastComments funciona sobre Node.js, y hemos actualizado a la versión 24.22.1, la versión parcheada de la rama 24.x del <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">lanzamiento de seguridad de Node.js de octubre de 2026</a>.

Esa versión corrige 10 vulnerabilidades en las versiones compatibles de Node.js. 8 de ellas afectan a la rama 24.x, y 4 de esas se califican como altas: dos en la validación TLS de direcciones IP, una en el manejo de nombres DNS y una en el decodificador Brotli. También actualiza dependencias empaquetadas, incluyendo OpenSSL, c-ares, Undici y el paquete de certificados CA.

### Qué necesita hacer

Nada. Estas actualizaciones son completamente de nuestra parte, por lo que sus widgets, integraciones API y configuraciones SSO no requieren cambios.

### En conclusión

Mantener nuestra infraestructura parcheada es una parte continua de operar FastComments, y continuaremos aplicando actualizaciones como estas a medida que se publiquen. Si tiene alguna pregunta, háganosla saber a continuación.

¡Saludos!

{{/isPost}}