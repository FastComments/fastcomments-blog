---
[category:Moderación]
###### [postdate]
# [postlink]Actualización de enmascaramiento de palabras groseras[/postlink]

{{#unless isPost}}
La detección y enmascaramiento de palabras groseras de FastComments recibe una actualización
{{/unless}}

{{#isPost}}

### Novedades

Anteriormente, FastComments solo permitía definir una lista negra global única de palabras en toda tu cuenta.

Esta lista de palabras a enmascarar, o para usar en la detección de spam si se desea, no podía definirse por idioma. También podía contener
solo una lista de palabras, y no frases.

Ahora, se han realizado las siguientes mejoras:

1. La lista negra se puede definir por localidad (idioma + región).
2. Además de palabras, ahora se pueden enmascarar frases o usarlas para la detección de spam.
3. Actualizar la configuración de detección de palabras groseras ahora es *en vivo* y *inmediato*. Anteriormente, podía tardar hasta cinco minutos en aplicar los cambios.

### Cómo usarlo

El enlace a la lista negra de palabras no ha cambiado y sigue estando en [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) y 
sigue siendo accesible desde `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

En esta página, ahora verás un menú desplegable de idiomas para personalizar la lista negra por localidad.

Al seleccionar una localidad, puedes definir palabras o frases a enmascarar.

### Limitaciones

Se pueden definir hasta 5,000 palabras o frases por localidad. Si necesitas aumentar este límite, comunícate con soporte.

### ¡Está en vivo!

Cualquier cambio que realices en la lista de palabras o frases a enmascarar se aplica al sistema inmediatamente.

### Quién lo recibe

Todos los clientes actuales y nuevos de FastComments, en todos los niveles, ahora tienen acceso a las nuevas funciones de lista negra de *palabras* y *frases*.

### En conclusión

Como el resto de FastComments, esperamos que encuentres esta función rápida y fácil de usar.

¡Saludos!

{{/isPost}}

---