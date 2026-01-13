---
[category:Features]

###### [postdate]

# [postlink]Actualización de Insignias de Abril[/postlink]

{{#unless isPost}}Se han realizado algunos cambios en las insignias, se han añadido algunas funciones y se han realizado mejoras para evitar que las insignias desaparezcan cuando se realiza un reprocesamiento.{{/unless}}

{{#isPost}}

### Novedades - Apilamiento de Insignias

Antes de ayer, si tenías un conjunto de insignias en tu comunidad como las siguientes:

- Nuevo Comentador (1 comentario)
- Miembro de la Comunidad (50 comentarios)
- Experto (500 comentarios)

... y un usuario termina con 500 comentarios, se mostrarán las insignias en sus comentarios así:

    [Nuevo Comentador] [Miembro de la Comunidad] [Experto]

En este escenario en particular, probablemente solo queramos que se muestre la insignia de `Experto`. Bueno, la mayoría de nuestros clientes quieren esto, pero no todos. No todos nuestros inquilinos tienen la misma configuración y lo reconocemos.

Sin embargo, para las comunidades que siguen el patrón anterior, que son la mayoría, desean que los comentarios muestren la insignia más prestigiosa.

Para manejar este caso de uso, hemos añadido el concepto de una insignia **reemplazando** otra insignia. Al hacer esto, podemos crear un flujo de insignias que un usuario puede ganar:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Apilamiento de Insignias" title="Apilamiento de Insignias" />
</div>

Internamente, llamamos a esto *apilamiento de insignias*. La nueva insignia se "apila" sobre la antigua.

Podemos configurar esto editando una insignia y diciendo que reemplaza a otra:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Configuración de Apilamiento de Insignias" title="Configuración de Apilamiento de Insignias" />
</div>

Obviamente, esto puede volverse difícil de rastrear, por lo que la lista de insignias también se ha actualizado para proporcionar más información, incluyendo
qué insignia reemplaza a qué.

### Novedades - Mejoras en el Reprocesamiento

Cuando haces un cambio en una insignia, tenemos que revisar a todos tus usuarios y determinar si aún deberían "ganar" la insignia,
y actualizar todos los estilos de insignia mostrados y las cachés para que la última versión se muestre.

El reprocesamiento ya no elimina una insignia de un usuario al guardar, incluso si ya no cumple con los criterios **a menos que los criterios configurados cambien**.

Administradores, noten que pueden disminuir los criterios de umbral para una insignia sin que el reprocesamiento elimine esa insignia. Solo **aumentar** el umbral causará reprocesamiento que puede eliminar la insignia en algunos casos.

Para más información, sigue leyendo en *La Perspectiva del Comentador*.

### La Perspectiva del Comentador

Reprocesar insignias es muy arriesgado, ya que a los usuarios les encantan sus insignias, ¡y lo reconocemos! No queremos quitar la insignia de un usuario porque
ganaron la insignia de Respuesta debido a que 100 usuarios respondieron a sus comentarios, y luego 10 usuarios más eliminan sus comentarios, o son eliminados por moderadores.

La insignia debería quedarse, y se queda, excepto...

Al reprocesar, no sabemos que esos comentarios anteriores existen, por lo que la insignia podría eliminarse de algunos usuarios si una insignia se edita, como si el estilo
se actualiza, o si se configura el apilamiento de insignias.

Esto es lo que ocurrió el 17 de abril de 2023 cuando lanzamos *Apilamiento de Insignias* y algunas comunidades habilitaron la función.

Se observaron dos escenarios:

1. Los usuarios encontraron que algunas de sus insignias aparecieron como eliminadas. Lo que realmente sucedió fue que todas menos las insignias más prestigiosas se ocultaron.
   - **Puedes mostrar todas tus insignias si lo deseas.** Simplemente haz clic en el menú de tres puntos en la esquina superior derecha de tu perfil y haz clic en `Gestionar Insignias`.
2. Algunas insignias sí fueron eliminadas para algunos usuarios, como en el ejemplo de la insignia de Respuesta mencionado anteriormente. Para prevenir que esto ocurra en el futuro,
    mejoramos el sistema de reprocesamiento para que la insignia no se elimine a menos que los criterios de la insignia en sí cambien y ya no cumplas con los criterios; sin embargo,
    desaconsejamos a los administradores de la comunidad hacer esto porque, nuevamente, a los usuarios les encantan sus insignias.

### Para Moderadores

No hay cambios desde la perspectiva de un moderador, excepto que verás menos insignias mostradas en la mayoría de los casos. En su lugar, verás la más prestigiosa de
las insignias de ti y de los miembros de tu comunidad mostrada.

### Clientes Existentes

¡Hemos completado el lanzamiento de esta función a todos los clientes existentes en todos los niveles! El apilamiento de insignias no está habilitado por defecto y debe configurarse manualmente.

### En Conclusión

Esperamos que encuentres este nuevo conjunto de funciones y arreglos útiles y fáciles de usar.

¡Saludos!

{{/isPost}}

---