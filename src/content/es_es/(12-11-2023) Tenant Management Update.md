---
[category:Features]
###### [postdate]
# [postlink]Actualización de Gestión de Inquilinos[/postlink]

{{#unless isPost}}
¡FastComments ha mejorado la interacción para gestionar tus inquilinos!
{{/unless}}

{{#isPost}}

### Novedades

A partir del 11 de diciembre de 2023, FastComments ahora cuenta con la capacidad de cambiar de inquilinos sin suplantar a otros usuarios inquilinos.

### Público Objetivo

Esta actualización no está destinada a comentaristas o administradores de sitio que gestionan un solo sitio. Esto beneficia a los administradores que gestionan muchos sitios o inquilinos solamente.

### Impacto para Administradores

Anteriormente, crear inquilinos y cambiar de usuario era un problema. Algunos puntos de dolor comunes eran:

1. Tenías que crear un usuario al crear tu inquilino, ya que ese usuario "poseía" el inquilino.
2. Esto significaba que tenías que usar un nuevo correo electrónico para cada sitio, incluso si querías usar un solo correo/cuenta para muchos sub-inquilinos.
3. Cambiar de inquilinos requería suplantación, lo que significaba que tus usuarios debían duplicarse en todos los inquilinos, con los mismos permisos, y así sucesivamente.

Ahora:

1. No se requiere la creación de un usuario al crear un inquilino.
2. Cualquier usuario Super Admin con los permisos apropiados tiene los mismos permisos en todos los sub-inquilinos.
3. Hay un botón de `Switch` en la lista de inquilinos que retiene tu usuario y permisos actuales, pero cambia a qué inquilino estás conectado.
4. Si eres un administrador de un inquilino padre, tienes permisos de moderador en sub-inquilinos al usar el widget de comentarios.

Los eventos aún se registran en el Registro de Auditoría para el inquilino al que cambiaste.

### Suplantación

Aún puedes suplantar usuarios. Cambia a un inquilino y ve a la página de `Users`.

### Para Desarrolladores y Precauciones

Al usar la API `POST /tenants`, el campo `email` ahora es opcional. La documentación ha sido actualizada.

### Actualizaciones Futuras

En el futuro habrá más acciones administrativas en la lista de inquilinos, como eliminar inquilinos y así sucesivamente.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háganos saber
abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---