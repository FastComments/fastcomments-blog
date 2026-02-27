---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nuevas Alertas de Inicio de Sesión desde IP[/postlink]

{{#unless isPost}}
FastComments ahora envía un correo electrónico de alerta de seguridad cuando se detecta un inicio de sesión desde una nueva dirección IP, incluyendo la ubicación aproximada, para ayudar a los usuarios a detectar accesos no autorizados.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ahora envía automáticamente un correo electrónico de alerta de seguridad cuando detectamos que se inicia sesión en su cuenta desde una dirección IP que no hemos visto antes. El correo incluye:

- La **ubicación aproximada** (ciudad y país) del inicio de sesión.
- La **dirección IP** utilizada.
- La **hora** del inicio de sesión.
- Un enlace directo para **cambiar su contraseña** si el inicio de sesión no fue usted.

Esto se aplica a todos los métodos de inicio de sesión: inicio de sesión basado en contraseña, enlaces mágicos y flujos de autenticación de dos factores.

### Privacidad

No almacenamos su dirección IP en crudo. Solo almacenamos una forma ofuscada para fines de comparación de seguridad. La ubicación aproximada se determina en el momento del inicio de sesión y no se almacena.

**Su IP no se comparte con un tercero** para determinar la ubicación. Albergamos nuestro propio servicio que extrae la ubicación aproximada de una copia de la base de datos de MaxMind (actualizada semanalmente).

### Cuándo se Envian las Alertas

Una alerta se envía cuando **todas** las siguientes son verdaderas:

- El inicio de sesión fue exitoso.
- No es el primer inicio de sesión del usuario.
- La dirección IP no ha sido vista en un inicio de sesión exitoso anterior para esa cuenta.

Esto significa que no recibirá una alerta en su primer inicio de sesión, y no recibirá alertas repetidas para la misma IP.

### En Conclusión

Este es un paso más hacia la protección de su cuenta. Si recibe una alerta que no reconoce, le recomendamos cambiar su contraseña de inmediato.

¡Háganos saber abajo si tiene algún comentario!

¡Saludos!

{{/isPost}}