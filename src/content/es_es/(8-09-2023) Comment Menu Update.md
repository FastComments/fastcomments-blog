---
[category:API & Development]
###### [postdate]
# [postlink]Actualización del Menú de Comentarios[/postlink]

{{#unless isPost}}
Esta actualización es principalmente para los desarrolladores que personalizan FastComments. Hemos realizado algunos cambios en la API y algunas optimizaciones.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Este Artículo Contiene Jerga Técnica

### Novedades

Algunos inquilinos de FastComments personalizan el widget de comentarios. Esto crea un contrato
entre tus personalizaciones y nuestra implementación. Hacemos nuestro mejor esfuerzo para no romper este
contrato, pero como parte de este anuncio tenemos un pequeño cambio que rompe la compatibilidad.

### Para Desarrolladores

Un selector CSS para el menú de comentarios ha sido cambiado.

Antiguo:

    .comment .menu .menu-content

Nuevo:

    .menu-content

### Inquilinos Existentes

Si ya estás utilizando el selector "menu-content" - ¡felicitaciones! Hemos revisado todos nuestros
inquilinos que utilizan este selector y hemos actualizado sus configuraciones de widget para prevenir
rupturas.

Déjanos saber si tienes algún problema.

### Razonamiento

Desde que se creó el widget de comentarios, el menú de comentarios era puramente un desplegable impulsado por CSS. Esta
es una forma simple y rápida de implementar un menú desplegable que también no requiere mucho código - un objetivo de diseño
de FastComments.

Sin embargo, a lo largo de los años ha acumulado problemas.

Por un lado, cuando el área de comentarios tiene una altura específica y es desplazable, como sucede con el Chat en Vivo,
acceder al menú hacia la parte inferior es difícil ya que el menú intentará ir más allá del
área de contenido desplazable. Esto hace que parte del menú sea invisible y requiere que
muevas el ratón y vuelvas a pasar el cursor sobre el menú para hacer el trabajo que estabas tratando de realizar. Consideramos
que era frustrante de usar.

Se realizaron algunos trucos, como invertir la dirección del menú **hacia arriba**,
pero esto tampoco funciona si la altura del widget no es lo suficientemente alta y hay muchos elementos de acción
en el menú - como para administradores. En este caso, sería ideal hacer caer el menú hacia
abajo más allá del área de contenido desplazable.

### Beneficios de Tamaño

Un beneficio de este cambio es que pudimos abstraer mucho código en un
módulo de carga asíncrona. Esto nos permitirá expandir las acciones que puedes realizar sobre los datos de comentarios sin hacer
que la carga inicial del widget sea pesada. Esto introduce una llamada de red la primera vez que pasas el cursor
sobre el menú de edición, pero el paquete inicial es muy pequeño (< 1kb) así que esto no debería ser muy notorio.

Es muy difícil continuar evolucionando el software y también disminuir su tamaño con el tiempo. Generalmente, el software
comienza rápido y se vuelve lento. Así que siempre estamos felices de trabajar para mantener FastComments rápido:

    Antes: 28.76kb comprimido (108.02kb total)
    Después: 28.39kb comprimido (105.79kb total)

Menos código también significa menos código para que tu navegador lo analice al cargar la página. El impacto de esto se ampliará a medida que se añadan más funciones.

### Beneficios de Rendimiento

El antiguo menú renderizaba todos los elementos del menú y cargaba todas las extensiones para ver si las extensiones
tenían elementos que agregar, y también las renderizaba - por cada comentario - para que el contenido estuviera listo para tu ratón.

Generalmente hay solo entre 30 y 100 objetos, así que esto tiende a no ser un gran problema, pero el impacto estaba creciendo. El nuevo sistema elimina esta preocupación
ya que el menú ahora solo se renderiza bajo demanda.

La compensación es que el nuevo menú se posiciona y se renderiza utilizando JS para lograr lo que queremos. Continuaremos
optimizándolo en la medida de lo posible, sin embargo, actualmente funciona bien.

### En Conclusión

Gracias a nuestros clientes por su paciencia al implementar estos cambios. Esperamos que
continúes amando FastComments.

¡Salud!

{{/isPost}}