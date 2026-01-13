---
[category:Features]

###### [postdate]
# [postlink]Lanzamiento de Nombres de Usuario[/postlink]

{{#unless isPost}}
FastComments siempre ha soportado nombres de usuario para usuarios de SSO. Sin embargo, esto nunca se había expuesto a los comentaristas regulares. ¡Hoy eso cambia!
{{/unless}}

{{#isPost}}

### Novedades

FastComments siempre ha soportado nombres de usuario para usuarios de SSO. Sin embargo, esto nunca se había expuesto a los comentaristas regulares. ¡Hoy eso cambia!

En la página de [Detalles de la Cuenta](https://fastcomments.com/auth/my-account/edit-details) ahora puedes completar un nuevo campo `Display Name`. `Display Name` se
mostrará en tus comentarios y tus perfiles.

### Emojis

En el pasado, los usuarios tenían dificultades para usar emojis en los nombres de usuario ya que necesitaban ingresar su nombre de usuario para iniciar sesión. Sin embargo, ahora `Display Name` puede contener emojis.

### Unicidad y Abuso

El propósito de `Display Name` es que no es único. Si dos usuarios de FastComments.com, en dos comunidades muy diferentes, tienen nombres similares, nos gustaría
que pudieran simplemente establecer su nombre de usuario preferido. Sin embargo, no podemos restringir dónde comentan las personas con su cuenta global de FastComments, por lo que a veces esto puede
resultar en confusión.

Tener un nombre similar al de otro usuario, o a un moderador, por sí mismo no es un caso de abuso. Sin embargo, si abusas de esto al suplantar intencionadamente a otros usuarios, podemos
desactivar esta función en tu cuenta, y estarás limitado a usar solo `username`.

### Iniciar Sesión

Aún usas tu nombre de usuario para iniciar sesión - **¡no tu nombre de usuario visible!**

### Para Desarrolladores y Errores

Los objetos `User` regulares expuestos a través de la API ahora tienen `displayName`.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar correctamente esta función. Háznoslo saber
a continuación si descubres algún problema.

¡Saludos!

{{/isPost}}