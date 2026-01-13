---
[category:Features]
###### [postdate]
# [postlink]FastComments Recibe @menciones[/postlink]

{{#unless isPost}}
¿Alguna vez has querido @mencionar a uno o más usuarios en un comentario? Ahora puedes.
{{/unless}}

{{#isPost}}

### Novedades

Mientras que anteriormente FastComments notificaba a los usuarios si respondiste a sus comentarios, no había forma de etiquetar a varias personas en un solo comentario. Además, estas
notificaciones se enviaban en lotes cada hora. Con `@menciones`, ahora es posible etiquetar a uno o más usuarios y FastComments les notificará de inmediato por correo electrónico.

### Cómo Usarlo

Al escribir `@`, y luego el inicio del nombre de un usuario, aparecerá una lista de resultados de búsqueda.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Uso de Menciones" title="Demostración de @menciones" />
</div>

Simplemente haz clic en el nombre del usuario que deseas etiquetar.

Además, puedes usar las teclas de flecha arriba y abajo para navegar por esta lista y presionar enter para seleccionar, o escape para salir.

Sabemos que puede que desees usar el símbolo `@` sin etiquetar a un usuario. FastComments detectará esto y no interrumpirá tu experiencia de escritura.

### Quién lo Recibe

Todos los clientes actuales y nuevos de FastComments, en todos los niveles, ahora tienen acceso a `@menciones`. Las `@menciones` han sido portadas a versiones anteriores del
widget de comentarios, también.

### Cómo Funciona la Autocompletar

Los usuarios mostrados en la lista autocompletada están determinados por:

- Usuarios que han comentado en la misma página o hilo.
- Usuarios que han creado sus cuentas de FastComments a través del mismo sitio.
- Moderadores del sitio actual.
- Usuarios de SSO que pertenecen al inquilino actual.

### Editando Comentarios

Las menciones se pueden agregar a comentarios existentes editándolos. Sin embargo, la aplicación `Moderate Comments` actualmente no autocompleta las `@menciones`.

### Consideraciones Futuras

En el futuro, los usuarios que tengan FastComments abierto en una ventana del navegador recibirán una notificación cuando sean mencionados, si están suscritos a las notificaciones.

### En Conclusión

Como el resto de FastComments, esperamos que encuentres esta función rápida y fácil de usar.

¡Salud!

{{/isPost}}

---