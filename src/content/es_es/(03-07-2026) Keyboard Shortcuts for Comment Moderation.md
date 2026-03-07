---
[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Atajos de teclado para la moderación de comentarios[/postlink]

{{#unless isPost}}
Los usuarios avanzados ahora pueden moderar comentarios completamente desde el teclado con un conjunto completo de atajos para navegación, acciones y más.
{{/unless}}

{{#isPost}}

### Novedades

La página de Moderación de Comentarios ahora soporta atajos de teclado completos. Navega entre comentarios, aprueba, elimina, prohíbe,
marca como spam, alterna contexto, ve registros y más, todo sin tocar el mouse.

Esto es muy importante para equipos que moderan altos volúmenes de comentarios. Cada acción que anteriormente requería mover el mouse y hacer clic en un botón
ahora está a solo una pulsación de tecla de distancia.

### Ejemplo de flujo

Digamos que tienes una cola de comentarios para revisar. Presiona **j** para enfocar el primer comentario. Presiona **c** para expandir su
contexto y ver el hilo circundante. Suena bien, así que presiona **c** nuevamente para colapsar el contexto, luego **a** para aprobarlo.
Presiona **j** para pasar al siguiente comentario y repite. Si algo parece extraño, presiona **s** para marcarlo como spam o **d** para
eliminarlo. Puedes trabajar a través de toda una página de comentarios sin tener que alcanzar nunca el mouse.

### Navegación

Presiona **j** para mover el enfoque al siguiente comentario y **k** para mover al anterior. El comentario enfocado se resalta
con un contorno azul para distinguirlo de los comentarios seleccionados (marcados).

Presiona **x** o **Enter** para alternar la selección en el comentario enfocado. Mantén presionada **Shift** y presiona **j** o **k** para seleccionar
el comentario actual y mover el enfoque en un solo movimiento, útil para seleccionar rápidamente un grupo de comentarios.

### Acciones

Con un comentario enfocado, los atajos de una sola tecla activan las mismas acciones que los botones de la barra de herramientas:

- **a** - Alternar aprobar / desaprobar
- **s** - Alternar spam / no spam
- **d** - Eliminar
- **u** - Restaurar
- **r** - Alternar revisado / no revisado
- **e** - Editar
- **b** - Prohibir / gestionar prohibición
- **p** - Alternar fijar / des fijar
- **f** - Desmarcar
- **i** - Ver todos desde IP
- **t** - Establecer factor de confianza
- **m** - Gestionar insignias
- **l** - Ver registros
- **c** - Alternar contexto

### Atajos globales

Algunos atajos funcionan independientemente de si hay un comentario enfocado:

- **Ctrl+a** - Seleccionar todos los comentarios
- **Ctrl+z** - Deshacer la última acción
- **/** - Enfocar el input de búsqueda
- **[** y **]** - Navegar a la página anterior o siguiente

### Ayuda y guías

Presiona **?** en cualquier momento para abrir un diálogo de ayuda que lista cada atajo disponible.

Presiona **g** para alternar el modo "guías", que superpone pequeñas insignias en los botones de acción del comentario enfocado mostrando
la tecla de atajo correspondiente. Esto es útil mientras aprendes los atajos.

Todos los atajos están suprimidos cuando escribes en el cuadro de búsqueda o en cualquier otro campo de entrada, y cuando un diálogo está abierto.
Presiona **Escape** para desenfocar un input enfocado y volver al modo de atajo.

### Documentación

Para una referencia completa, consulta la <a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">Guía de Moderación</a>.

### En conclusión

Esperamos que los atajos de teclado hagan que la moderación de alto volumen sea más rápida y cómoda. Los atajos siguen convenciones
familiares para los usuarios de herramientas como Gmail y GitHub, por lo que deberían sentirse naturales de inmediato.

¡Háznos saber abajo si tienes alguna pregunta o comentario!

¡Saludos!

{{/isPost}}