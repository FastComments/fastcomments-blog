---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Comentarios Bloqueados Ahora Están Realmente Bloqueados[/postlink]

{{#unless isPost}}
El ícono de bloqueo finalmente aparece en los comentarios bloqueados, y los comentarios bloqueados ya no pueden ser editados o eliminados hasta que un administrador los desbloquee.
{{/unless}}

{{#isPost}}

### Novedades

Los moderadores han podido bloquear comentarios durante mucho tiempo. Bloquear un comentario impide nuevas respuestas, lo cual es útil cuando un hilo ha llegado a su fin o una sub-conversación se ha desviado.

El problema era que "bloqueado" no tenía mucho peso. Los lectores no tenían una indicación visual de que un comentario estaba bloqueado. Y aunque las nuevas respuestas estaban bloqueadas, el autor original o cualquier persona con acceso de edición aún podía editar o eliminar el comentario. Eso no está realmente bloqueado. Esta actualización soluciona ambos problemas.

### El Ícono de Bloqueo

Cuando un moderador bloquea un comentario, ahora aparece un pequeño candado en la esquina superior derecha del comentario, justo al lado del ícono de pin. Se muestra a cada lector, no solo a los moderadores. Desbloquear el comentario lo elimina.

El ícono respeta el modo claro y oscuro, al igual que el ícono de pin.

### Editar y Eliminar Están Bloqueados

Un comentario bloqueado no puede ser editado o eliminado por nadie, incluidos administradores y moderadores. Si quieres editar o eliminar un comentario bloqueado, primero desbloquéalo, realiza el cambio y luego vuelve a bloquearlo si así lo deseas.

Esto se aplica a cada camino que toca un comentario:

- El widget de usuario oculta las entradas de menú de Editar y Eliminar en comentarios bloqueados.
- Los endpoints PATCH y DELETE de la API pública devuelven un error `locked` si el comentario objetivo está bloqueado.
- La interfaz de moderación de administración presenta el error bloqueado si intentas eliminar sin desbloquear primero.

### Excepciones

Un puñado de caminos elude intencionalmente el bloqueo para poder realizar su trabajo:

- Eliminación de cuenta. Si un usuario elimina su cuenta de FastComments, sus comentarios se eliminan sin importar el estado de bloqueo.
- Limpieza de usuario de Tenant / SSO. La misma idea para la eliminación de usuario a nivel de inquilino.
- Eliminación automática programada. Si programaste un comentario para que se elimine a una hora específica, el programador no necesita preocuparse por los bloqueos.
- Limpieza de duplicados. La herramienta de deduplicación elimina duplicados bloqueados sin ceremonia.
- Prohibiciones de moderador con "eliminar todos los comentarios de este usuario". Prohibir a un usuario y barrer su historial es una acción intencional única, por lo que también elimina bloqueos.

Todo lo demás - el widget, la interfaz de moderación, la API pública, llamadores externos - respeta el bloqueo.

### Forma del Error de la API

Si llamas a la API pública para editar o eliminar un comentario bloqueado, recibirás una respuesta como:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "El comentario está bloqueado.",
    "translatedError": "Este comentario está bloqueado y no puede ser editado o eliminado. Desbloquéalo primero."
}</div>

El estado HTTP es 401. El campo `translatedError` utiliza la configuración de localización de tu inquilino y cualquier traducción personalizada que hayas configurado.

### En Conclusión

Un pequeño cambio, pero cierra una brecha que había estado abierta durante un tiempo. Bloqueado ahora significa bloqueado.

¡Saludos!

{{/isPost}}

---