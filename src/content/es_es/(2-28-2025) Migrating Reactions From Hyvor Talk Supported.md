---
[category:Migration]

###### [postdate]
# [postlink]La migración de reacciones desde Hyvor Talk ahora está soportada[/postlink]

{{#unless isPost}}
Cuando importas tu exportación de datos desde Hyvor Talk, ahora podemos migrar tus reacciones a nivel de página.
{{/unless}}

{{#isPost}}

### Novedades

Cuando importas comentarios para migrarlos desde Hyvor Talk, FastComments ahora puede importar tus reacciones de página. Además, detectaremos si
los hilos de comentarios en las páginas están cerrados o no, y migrar ese estado también.

Reejecutar la importación no causará duplicación de recuentos ni perderá ningún valor de reacción de antes de la importación.

### Cómo Configurar Reacciones

La visualización de reacciones de página no es automática. Para empezar, tendrás que actualizar la configuración de tu widget:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Estrella deslumbrada
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Corazón rojo
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Cara con boca abierta
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Cara llorando
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Cara con lágrimas de alegría
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Cara enojada
            ]
        }
    });
</script>
```

Los ids deben coincidir con los de la exportación de Hyvor Talk. Este ejemplo utiliza los valores correctos.

Tendrás que obtener tus propias imágenes de reacción. Pueden ser cualquier formato, incluidos GIFs. El ejemplo anterior utiliza algunos del proyecto OpenMoji.

### En Conclusión

Como en todos los lanzamientos importantes, nos alegra haber podido tomarnos el tiempo para optimizar, probar y lanzar adecuadamente esta función. Háznoslo saber
más abajo si descubres algún problema.

¡Saludos!

{{/isPost}}

---