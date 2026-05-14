---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Añadiendo Comentarios a Tus Cursos de D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments ahora se instala en D2L Brightspace en un solo paso a través de LTI 1.3 Dynamic Registration, con SSO automático, comentarios en hilo y chat colaborativo para cada unidad de curso.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ahora es compatible con D2L Brightspace a través del estándar IMS LTI 1.3 Advantage, que incluye Dynamic Registration.
Eso significa que no hay un plugin que instalar, no hay intercambio de claves que coordinar, y no hay cableado por curso. Tu administrador de Brightspace pega una única URL en la pantalla de registro LTI Advantage, y FastComments y Brightspace finalizan el apretón de manos automáticamente. Luego, los instructores añaden FastComments a cualquier unidad de la misma manera que añaden cualquier otra herramienta externa, y los estudiantes ven comentarios en hilo incrustados directamente en el contenido del curso.

<div class="text-center">
    <div class="sm">Comentarios en hilo incrustados como un tema dentro de una unidad de Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments funcionando dentro de una unidad de D2L Brightspace" title="FastComments en una Unidad de Brightspace" />
</div>

### Comenzando

Desde tu panel de control de FastComments, abre la [página de configuración LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
selecciona **D2L Brightspace** del menú desplegable de plataforma y haz clic en **Generar URL**. Obtendrás una URL de registro de un solo uso
que es válida por 30 minutos.

En Brightspace, tu administrador abre **Herramientas de Administración > Gestionar Extensibilidad > LTI Advantage > Registrar Herramienta**, pega la
URL en el campo **endpoint de registro de iniciación de herramienta** y envía. Brightspace realiza el apretón de manos de registro
con FastComments, intercambia claves de firma y crea la entrada de herramienta. La ventana emergente se cierra automáticamente cuando se completa.

Después del registro, el administrador habilita la herramienta y crea una implementación con el alcance de las unidades organizativas que deben tener
acceso. A partir de ese momento, FastComments aparece en el selector de contenido de cada curso bajo **Agregar Existente**.

### Añadiendo a un Curso

Dentro de cualquier unidad de curso, el instructor hace clic en **Agregar Existente**, selecciona **FastComments** de la lista de actividades, y la
herramienta se coloca como un tema en la unidad. Renombrar el tema, reordenarlo dentro de la unidad, restringirlo a grupos específicos
o condiciones de lanzamiento, y alternar la visibilidad utiliza todos los controles estándar de Brightspace. No hay una pantalla de configuración
separada de FastComments para que los instructores aprendan.

Para la inserción en línea, la misma herramienta FastComments también está disponible a través del diálogo **Insertar Cosas**
del editor HTML de Brightspace bajo **LTI Advantage**. Esto utiliza el flujo de LTI Deep Linking para insertar un hilo de comentarios directamente dentro de una lectura,
instrucciones de examen, o cualquier otro tema HTML, de modo que la discusión se sitúe junto al contenido del que se trata.

### SSO Automático

Los estudiantes nunca ven una pantalla de inicio de sesión. El lanzamiento de LTI 1.3 lleva la identidad de Brightspace del estudiante (`sub`, `name`, `email`,
y `picture`) firmada por la clave privada de Brightspace. FastComments verifica la firma contra el JWKS publicado de Brightspace,
crea una sesión de SSO Segura para el usuario y renderiza el widget de comentarios. Los comentarios se atribuyen a la cuenta de
Brightspace del estudiante, y los instructores moderan utilizando también su identidad de Brightspace.

La asignación de roles es automática. Los usuarios **Administrador** de Brightspace aparecen como administradores de FastComments, los usuarios **Instructor**
como moderadores, y todos los demás como comentaristas estándar. No hay una lista de usuarios separada que mantener en el lado de FastComments: sigue lo que dice Brightspace.

### Alcance del Hilo

Cada hilo de comentarios está vinculado a un triple: el anfitrión de Brightspace, el curso y el enlace de recurso. Eso significa que dos
cursos que usan un tema de "Reflexiones de Lectura" cada uno obtienen su propia discusión. Lo mismo ocurre si un instructor
agrega FastComments dos veces en el mismo curso (por ejemplo, una vez como tema de unidad y otra vez como una inserción en línea dentro de una
página HTML): cada colocación es su propio hilo.

La porción del anfitrión es parte del identificador del hilo a propósito. Si tu institución ejecuta múltiples instancias de Brightspace
bajo una única cuenta de FastComments, las conversaciones permanecen aisladas a cada instancia incluso cuando los IDs de curso colisionan.

### En Conclusión

Si estás utilizando D2L Brightspace, puedes estar en vivo con FastComments en una tarde: genera la URL, pégala
en Brightspace, y deja que los instructores inserten la herramienta en sus unidades. Para la guía completa paso a paso, incluyendo
solución de problemas y capturas de pantalla por página, consulta la
[Guía de Instalación LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). La misma integración también
abarca Moodle, Blackboard, Sakai, Schoology, y cualquier otra plataforma LTI 1.3 Advantage, pero Brightspace fue nuestro objetivo inicial
y el flujo es sólido allí.

¡Saludos!

{{/isPost}}

---