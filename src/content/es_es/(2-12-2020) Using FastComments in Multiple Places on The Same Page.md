---
[category:Tutorials]

###### [postdate]
# [postlink]Usando FastComments en Múltiples Lugares en la Misma Página[/postlink]

FastComments es flexible. Se adjunta a un elemento regular en una página, por lo que funciona con cualquier marco web.

{{#unless isPost}}
Lee esta publicación para ver un ejemplo de múltiples instancias de FastComments en la misma página.
{{/unless}}

{{#isPost}}
Esto significa que podemos tener tantos hilos en una página como queramos. Por ejemplo, aquí hay dos hilos uno al lado del otro.

<style>
.content {
    max-width: 1220px;
}

.content .widgets {
    text-align: center;
}

.content .widget {
    display: inline-block;
    width: 49%;
    vertical-align: top;
}

#fastcomments-widget {
    display: none;
}

@media(max-width: 768px) {
    .content .widget {
        display: block;
        width: 100%;
    }
}
</style>

<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?cats',
        headerHTML: '<h1>Discutir Gatos</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Discutir Perros</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Cómo funciona

Aquí está el código que hace que esto suceda. Personalizamos el parámetro urlId para hacer que cada hilo sea único. Ten en cuenta que usamos IDs, sin embargo, puedes
pasar cualquier elemento del DOM consultado de la manera que desees.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Discutir Gatos&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Discutir Perros&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---