---

[category:Features]
###### [postdate]
# [postlink]Página Reacciona Lanzada[/postlink]

{{#unless isPost}}
FastComments ahora soporta mostrar reacciones de página junto con conteos sobre el widget de comentarios.
{{/unless}}

{{#isPost}}

### Novedades

FastComments ya había soportado lo que llamamos nuestro módulo de Feedback, donde podías mostrar una calificación de estrellas, NPS u otra pregunta sobre el área de comentarios.

Sin embargo, muchos usuarios quieren algo más simple: mostrar algunos íconos con reacciones sobre el widget de comentarios, poder personalizar esos íconos, tal vez personalizar las opciones por usuario, y así sucesivamente.

A partir de hoy hemos lanzado esta característica.

Todos los planes de FastComments ahora tienen acceso a Página Reacciona.

### Demo en Vivo

Hemos habilitado una configuración de demo de Página Reacciona específicamente para esta publicación de blog, ¡puedes encontrarla a continuación!

### Documentación

[Puedes encontrar la documentación para desarrolladores sobre cómo configurar Página Reacciona aquí.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista de Usuarios Reaccionantes

Página Reacciona también se puede configurar para mostrar un tooltip que revela la lista de usuarios que dejaron una reacción específica.

### En Conclusión

Agradecemos a nuestros clientes que nos brindan retroalimentación continua para que podamos pensar en ideas como esta y también nos dan el tiempo para lanzar características bien optimizadas. Esperamos que sigas amando FastComments.

¡Salud!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---