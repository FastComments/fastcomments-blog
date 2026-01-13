---
[category:Security]

###### [postdate]
# [postlink]Registro de Auditoría Lanzado[/postlink]

{{#unless isPost}}FastComments ahora proporciona un registro detallado de todas las modificaciones realizadas a través de la plataforma.{{/unless}}

{{#isPost}}

### Novedades

A partir de marzo, FastComments ahora incluye auditoría detallada con el plan Pro, y para todos los clientes empresariales existentes.

Todas las acciones administrativas, ya sea acceso a datos, modificación de un comentario o desbaneando un usuario, son rastreadas e indexadas en el registro de auditoría.

### Cómo Usarlo

El Registro de Auditoría se puede acceder yendo a `Gestionar Datos` y luego `Registros de Auditoría`. Un enlace directo está [aquí](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Para comenzar, verás una página como la siguiente:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Registro de Auditoría" />
</div>

Desde aquí, puedes buscar por nombre de usuario, dirección IP, tipo de acción o el recurso.

Por ejemplo, filtrando por recurso:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Selección de Recurso del Registro de Auditoría" />
</div>

También podemos profundizar en los detalles de una entrada en el registro de auditoría, e incluso ver el objeto relacionado que fue cambiado.

Por ejemplo, podemos profundizar en una entrada por banning de un usuario:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Detalles de la Entrada del Registro de Auditoría" />
</div>

Aquí podemos ver quién baneo al usuario (un usuario con el nombre de usuario `winrid`). Podemos ver que es una prohibición permanente, y también tenemos el ID del usuario y el correo electrónico baneado, junto con el texto por el cual fueron baneados.

Podemos ver la IP que creó el ban, pero la IP del comentarista original se omite intencionalmente por su privacidad.

Para ver todos los eventos de `winrid`, simplemente podemos hacer clic en el icono de filtro a la derecha, junto a su nombre de usuario.

### Restringir el Acceso

Los datos en el registro de auditoría solo pueden ser accedidos por usuarios con el permiso `Gestionar Datos`.

### Retención

Todas las entradas en el registro de auditoría se retienen durante dos años. Sin embargo, el registro de auditoría se borra cuando tu cuenta es eliminada.

### Acceso a la API

[La documentación para la API del Registro de Auditoría está aquí.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Encontrarás que el registro de auditoría se puede
ordenar y paginar de un par de maneras diferentes dependiendo de tu caso de uso.

### Clientes Existentes

Si estás en el plan Pro o equivalente, verás que el registro de auditoría ha sido habilitado automáticamente. Si deseas obtener acceso, comunícate con tu representante de soporte.

### Lo que se Omite

El único tipo de cambios que se omiten son los comentarios reales y sus votos. Esto se debe a que hemos encontrado que nuestros clientes están principalmente interesados en el lado administrativo al auditar, y no necesariamente interesados en auditar lo que las personas comentan. Estos tipos de acciones también añaden un ruido considerable al registro.

Sin embargo, si este es un requisito, contáctanos, y podemos discutir habilitar esto para ti.

### En Conclusión

Esperamos que encuentres útil esta área de nuestra oferta, que la interfaz sea fácil de usar y que la API sea rápida. 

¡Saludos!

{{/isPost}}

---