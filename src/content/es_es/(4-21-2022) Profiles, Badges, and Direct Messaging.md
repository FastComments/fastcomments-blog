---
[category:Features]

###### [postdate]

# [postlink]Perfiles, Insignias y Mensajería Directa[/postlink]

{{#unless isPost}}En esta versión tenemos muchas características que recompensan a las comunidades que utilizan FastComments y les ayudan a comunicarse.{{/unless}}

{{#isPost}}

### Novedades
FastComments ha lanzado oficialmente Perfiles de Usuario y características relacionadas.

### Perfiles de Usuario

El perfil de un usuario consiste en su nombre, si está en línea, su actividad reciente y un lugar para comentar en su perfil.

Sus insignias y el progreso para ganar insignias, también se muestran aquí.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Perfil de Usuario de FastComments" title="Perfil de Usuario de FastComments"></video>
</div>

Los usuarios pueden ver su propio perfil haciendo clic en su avatar en un hilo de comentarios, o [yendo a su página de cuenta](https://fastcomments.com/auth/my-account).

Además, puedes enviar un mensaje directo a un usuario desde su perfil.

### Modal de Perfil de Usuario
Cuando se selecciona el avatar de un usuario, se abrirá el Modal de Perfil. Esto también se ha añadido para los moderadores en la página de Moderación de Comentarios.

### Recompensar a los Usuarios con Insignias

Las insignias son otra adición reciente a FastComments que te permiten recompensar a los usuarios de tu comunidad. Crear una insignia es fácil:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Crear una Insignia" title="Crear una Insignia" />
</div>

Las insignias se pueden otorgar basándose en las siguientes condiciones:

- Número de Comentarios Dejado
- Número de Votos Positivos Ganados
- Número de Respuestas Recibidas
- Número de Comentarios Fijados
- Veterano (tiempo desde el primer comentario)
- Comentando Tarde en la Noche
- Tiempo de Respuesta Rápido
- Responder a Página Específica
- Moderadores - Número de Comentarios Borrados
- Moderadores - Número de Comentarios Aprobados
- Moderadores - Número de Comentarios No Aprobados
- Moderadores - Número de Comentarios Revisados
- Moderadores - Número de Comentarios Marcados como Spam
- Moderadores - Número de Comentarios Marcados como No Spam

Como puedes ver, hay muchos tipos de situaciones por las que podemos premiar a los usuarios.

Podemos definir múltiples *niveles* de insignias. Por ejemplo, podríamos añadir insignias de `Conteo de Comentarios` con umbrales de 10, 100 y 1000 comentarios dejados. A medida que los usuarios
interactúan en tu comunidad, sus insignias ganadas **se acumularán** con el tiempo.

No olvidemos a los *Moderadores*. En muchas comunidades, este es un trabajo ingrato. Dale a tus moderadores algo para mostrar configurando insignias de Moderador para ellos.

También apoyamos algunos casos únicos, como las insignias de `Ave Nocturna` y `Tiempo de Respuesta Rápido` para reconocer a miembros que están activos tarde en la noche, o que responden
rápidamente. `Tiempo de Respuesta Rápido` funciona mejor cuando se utilizan las características en vivo de FastComments.

Cuando se crean nuevas insignias, se añadirán automáticamente a los miembros existentes de tu comunidad que califiquen.

### Mensajería Directa

Los clientes han solicitado la capacidad de Mensajería Directa a los usuarios desde el lanzamiento de FastComments. Después de dos años, estamos felices de finalmente anunciar esta función, y agradecer
a aquellos que han esperado pacientemente.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Mensajería Directa de FastComments" title="Mensajería Directa de FastComments"></video>
</div>

La Mensajería Directa permite a los miembros de una comunidad enviarse mensajes entre sí de forma privada, pero también sirve como una herramienta útil para que los Moderadores y Administradores se
comuniquen con los comentaristas.

Como la mayoría de FastComments, todas las funciones de Mensajería Directa son en vivo.

#### Mensajería Directa Asincrónica

Cuando envías un mensaje a un usuario, puede estar desconectado. En este caso, le enviaremos un correo electrónico informándole que tiene un nuevo mensaje.

#### Mensajería Directa a través de Correo Electrónico

Cuando un usuario recibe un mensaje por correo electrónico, tiene la capacidad de responder a través de ese correo.

<div class="text-center">
    <img src="/images/email-dm.png" alt="Correo de DM" title="Correo de DM" />
</div>

Cuando lo haga, su respuesta aparecerá **en vivo** para el otro usuario en la pestaña de Mensajes de su perfil.

### SSO Seguro

Los Perfiles de Usuario de FastComments son totalmente compatibles con las instalaciones de SSO Seguro existentes.

Cosas como la configuración de privacidad del usuario también se pueden configurar a través de la bandera `isProfileActivityPrivate` en la carga útil de SSO.

Por defecto, `isProfileActivityPrivate` es verdadero.

### Clientes Existentes

Hemos completado el despliegue de esta función a todos los clientes existentes en todos los niveles.

### Configuración de Privacidad

Al ver tu perfil, hay opciones para:

- Desactivar los comentarios en tu perfil.
- Evitar que tu actividad sea visible para otros.
- Evitar que otros te envíen mensajes directos.

### Datos Recopilados

Los Perfiles de Usuario se crean en función de los datos que tenemos hoy, como su nombre, qué comentarios han dejado recientemente, etc.

No estaremos recopilando datos adicionales para expandir los perfiles de los usuarios. Nos gusta pensar en los Perfiles de Usuario más como un perfil típico de usuario en un foro.

### En Conclusión

Creemos que estas características amplían enormemente FastComments como plataforma, y esperamos que las encuentres útiles y fáciles de usar.

¡Salud!

{{/isPost}}

---