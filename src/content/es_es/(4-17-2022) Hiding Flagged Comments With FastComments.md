---
[category:Moderation]

###### [postdate]

# [postlink]Ocultando Comentarios Marcados con FastComments[/postlink]

{{#unless isPost}}Se ha añadido la opción de marcar comentarios en FastComments. Además, los comentarios pueden ser ocultos según la cantidad de veces que han sido marcados.{{/unless}}

{{#isPost}}

### Novedades

Ahora los usuarios pueden marcar comentarios en hilos de comentarios alojados por FastComments. Los moderadores pueden filtrar los comentarios marcados y ver cuántas veces han sido marcados.

La plataforma también se puede configurar para ocultar automáticamente los comentarios cuando han sido marcados un cierto número de veces.

### Perspectiva del Comentador

Cuando un usuario tiene una sesión válida, puede marcar comentarios a través del menú de edición de comentarios. 

Esto es compatible con los siguientes tipos de sesión:

- Sesiones Anónimas
- Sesión de Usuario de FastComments.com (Usando Cookies de Terceros)
- SSO Seguro
- SSO Simple

Los comentarios marcados seguirán mostrándose, hasta que se alcance el umbral configurado de comentarios marcados.

### Para Moderadores

Los moderadores pueden ver comentarios marcados utilizando el filtro `Marcados`, también disponible directamente [aquí](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Además, el número de veces que un comentario ha sido marcado es visible para los Moderadores y Administradores.

Nota:

- Reiniciar el conteo de marcados para un comentario que fue `No Aprobado` a través del `Umbral de No Aprobación` lo `Re Aprobará`.
- `Re Aprobar` un comentario `Marcado` **reiniciará el conteo de marcados**.
- Esta es una función creada como conveniencia.

### Configuración

Configurar el ocultamiento automático de comentarios marcados se puede hacer en la [Página de Configuración de Moderación de Comentarios](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Clientes Existentes

Hemos completado el despliegue de esta función a todos los clientes existentes en todos los niveles. El ocultamiento automático de comentarios no aprobados no está habilitado para nuevos clientes o clientes existentes.

### En Conclusión

Esperamos que encuentres este nuevo conjunto de funciones útil y fácil de usar. 

¡Saludos!

{{/isPost}}

---