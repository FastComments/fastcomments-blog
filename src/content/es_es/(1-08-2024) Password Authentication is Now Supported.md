---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Ahora se Soporta la Autenticación por Contraseña[/postlink]

{{#unless isPost}}
Con esta actualización, FastComments ahora admite la autenticación tradicional basada en contraseña además del sistema basado en correo electrónico existente.
{{/unless}}

{{#isPost}}

### Novedades

Desde su lanzamiento, FastComments se autenticaba a través de enlaces mágicos enviados por correo electrónico. Esto se debía a que podíamos consolidar nuestros mecanismos de inicio de sesión en el mismo sistema utilizado
cuando un usuario deja su primer comentario y verifica/inicia sesión a través de un enlace basado en correo electrónico. Sin embargo, no todos los servidores de correo son iguales, y a veces
recibir un enlace podría tardar minutos. Esto fue muy frustrante para algunos de nuestros usuarios.

A finales de 2023, ¡FastComments ahora admite la autenticación a través de contraseñas! En la página de inicio de sesión ahora hay dos pestañas: una para iniciar sesión a través de correo electrónico y otra para hacerlo
a través de contraseña.

### Cómo Establecer una Contraseña

Puedes establecer una contraseña yendo a [Mi Cuenta -> Detalles de la Cuenta -> Cambiar Contraseña](https://fastcomments.com/auth/my-account/edit-details/change-password).

Simplemente solicita un enlace de reinicio. Se enviará un enlace a tu correo electrónico y al hacer clic en este, podrás establecer una nueva contraseña. El enlace solo funciona una vez y expira si no se utiliza.

### Almacenamiento y Seguridad de Contraseñas

Las contraseñas no se almacenan. Más bien, las contraseñas se almacenan hashadas con un salt de 11 rondas utilizando bcrypt. La concurrencia en el sistema basado en contraseñas es limitada
y monitoreada para prevenir varios tipos de ataques relacionados con contraseñas.

### El Futuro

En el futuro, planeamos soportar 2FA también.

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háznoslo saber
abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---