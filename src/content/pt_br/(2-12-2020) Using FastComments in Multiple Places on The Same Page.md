---
[category:Tutorials]

###### [postdate]
# [postlink]Usando FastComments em Vários Lugares na Mesma Página[/postlink]

FastComments é flexível. Ele se conecta a um elemento comum em uma página, funcionando com qualquer framework web.

{{#unless isPost}}
Leia este post para ver um exemplo de várias instâncias de FastComments na mesma página.
{{/unless}}

{{#isPost}}
Isso significa que podemos ter quantos threads quisermos em uma página. Por exemplo, aqui estão dois threads lado a lado.

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
        headerHTML: '<h1>Discutir Cães</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Como funciona

Aqui está o código que faz isso acontecer. Personalizamos o parâmetro urlId para tornar cada thread única. Observe que usamos IDs, mas você pode
passar qualquer elemento DOM consultado da maneira que preferir.


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
   headerHTML: '&lt;h1&gt;Discutir Cães&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---