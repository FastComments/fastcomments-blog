---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Anunciando el Factor de Confianza de FastComments[/postlink]

{{#unless isPost}}
FastComments ahora utiliza más heurísticas al determinar qué es y qué no es spam.
{{/unless}}

{{#isPost}}

### Novedades

A partir del 16 de noviembre de 2023, FastComments ha comenzado a expandir cómo determina la confiabilidad
de los usuarios para reducir la frustración al tratar con filtros de spam.

### Impacto para los Usuarios

Si eres un miembro de larga data de un sitio existente y tus comentarios han sido atrapados
por el filtro de spam, este cambio es para ti.

Hemos recibido numerosos informes de usuarios en sitios que hacen cosas que los filtros de spam no gustan, como compartir muchos enlaces y así sucesivamente, y estos
comentarios terminan en spam y son bloqueados o esperan aprobación de un moderador dependiendo del configuración del sitio.

### Impacto para Administradores de Sitio y Moderadores

1. Podrías ver menos comentarios marcados automáticamente como spam de tus usuarios más activos.
2. Esto no cambia la detección de spam basada en la lista negra de palabras/frases. La profanidad y las frases filtradas aún causarán que los comentarios vayan a spam si tienes esta configuración.

El número de Factor de Confianza en sí no está actualmente expuesto a administradores de sitio o moderadores, sin embargo
esto es algo que exploraremos en el futuro.

### Cómo se Calcula el Factor de Confianza

El Factor de Confianza es un número de `0` a `100` y se mantiene por sitio.

Las siguientes variables se utilizan para determinar el factor de confianza:

- Antigüedad de la interacción con el sitio.
- Número de comentarios aprobados.
- Número de comentarios fijados.

Si has sido miembro de un sitio durante más de seis meses y has dejado más de 50 comentarios aprobados,
tendrás un puntaje de confianza perfecto de `100`.

De lo contrario, la fórmula es la siguiente y evolucionará con el tiempo:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Donde:

    timeFactor = 100 * TiempoDesdeElPrimerComentario / SeisMeses
    commentFactor = NúmeroDeComentariosAprobados
    pinFactor = NúmeroDeComentariosFijados * 20

Puedes notar el `* 20` aquí - los comentarios fijados tienen un alto peso. Si los moderadores están fijando
tus comentarios, probablemente se te considere un usuario bastante confiable.

### Para Desarrolladores y Advertencias

En la API, `UserBadgeProgress` ahora tiene `autoTrustFactor` y `manualTrustFactor` expuestos.

`autoTrustFactor` es calculado por nosotros y no es escribible a través de la API.

Si deseas configurar el factor de confianza tú mismo, puedes definir `manualTrustFactor`. El sistema
utilizará este valor en su lugar, y nosotros continuaremos manteniendo el valor `autoTrustFactor` por separado.

### Abuso del Factor de Confianza

Como en todas las cosas, esperamos que esto sea abusado. Las personas establecerán relaciones con una comunidad y luego usarán
la cuenta para publicar spam. Sin embargo, creemos que con valores predeterminados sensatos (seis meses, 50+ comentarios), establecemos la barra
lo suficientemente alta como para que esto no valga la pena para la mayoría de los spammers. Una vez que comiencen a publicar spam, su cuenta puede ser inmediatamente
prohibida por los moderadores. En el futuro, también podemos permitir que los moderadores ajusten el factor de confianza.

### En Conclusión

Como en todos los lanzamientos importantes, estamos contentos de haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta característica. Háznoslo saber
a continuación si descubres algún problema.

¡Salud!

{{/isPost}}

---