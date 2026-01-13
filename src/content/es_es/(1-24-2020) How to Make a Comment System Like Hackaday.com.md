---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Cómo crear un sistema de comentarios como Hackaday.com[/postlink]

{{#unless isPost}}
Aquí exploraremos la creación de un hilo de comentarios que se asemeje al de Hackaday.

Si haces clic en el enlace de esta publicación, el estilo general de la página, así como el Blog de FastComments, cambiarán.

{{/unless}}

{{#isPost}}
###### 24 de enero de 2020
<div class="post-header">
    <div class="by left">por: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ¿QUÉ PASÓ AQUÍ?

Esta publicación es una demostración de cómo utilizar FastComments para hacer un sistema de comentarios que se asemeje a https://hackaday.com.

No sugerimos que los copies. Pero esto demuestra la flexibilidad de FastComments.

¡Hacer que FastComments se vea así es simple!
¡Hemos creado una interfaz para ello! Por ejemplo, aquí está la configuración que usamos para hacer que FastComments coincida con esta página:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Configuraciones de FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Si deseas hacerlo en código, es igual de fácil.

Solo tenemos que establecer algunas opciones. Bueno, siete. Aquí está el fragmento de código (CSS personalizado omitido). Solo se puede insertar tanto CSS de esta manera. Recomendamos que uses
la interfaz anterior para definir el CSS. También lo minimizará por ti, mientras que definir la propiedad customCSS no aplicará optimizaciones de minificación.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] PENSAMIENTOS SOBRE "CÓMO HACER UN SISTEMA DE COMENTARIOS COMO HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comentarios';
        },
        headerHTML: '<h1>Deja una Respuesta</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

¿Entonces qué significa cada uno de estos?
- commentCountFormat = El formato del título sobre el hilo de comentarios. "[count]" se reemplaza con el conteo real localizado.
- commentCountUpdated = Una función que se llama cuando cambia el conteo de comentarios. La usamos para establecer el conteo de comentarios en la
parte superior de la página.
- headerHTML = HTML que se muestra sobre el cuadro de "deja una respuesta". En este caso lo usamos para insertar un elemento de encabezado.
- hideAvatars = Hackaday no tiene avatares. Así que lo establecemos en verdadero para ocultarlos.
- inputAfterComments = Reposiciona el cuadro de respuesta en la parte inferior del feed de comentarios.
- absoluteDates = Cambia el formato de fecha predeterminado (es decir, "Hace 11 minutos") a una fecha absoluta.
- customCSS = Estilo personalizado

Todas las opciones de configuración están documentadas <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">aquí</a>.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comentarios';
    };
</script>

{{/isPost}}

---