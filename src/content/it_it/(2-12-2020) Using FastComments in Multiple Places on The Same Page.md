---
[category:Tutorials]

###### [postdate]
# [postlink]Utilizzo di FastComments in più luoghi sulla stessa pagina[/postlink]

FastComments è flessibile. Si attacca a un elemento regolare su una pagina in modo da funzionare con qualsiasi framework web.

{{#unless isPost}}
Leggi questo post per vedere un esempio di più istanze di FastComments sulla stessa pagina.
{{/unless}}

{{#isPost}}
Questo significa che possiamo avere quanti più thread possibile su una pagina. Ad esempio, qui ci sono due thread affiancati.

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
        headerHTML: '<h1>Discuti di Gatti</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Discuti di Cani</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Come funziona

Ecco il codice che rende tutto questo possibile. Personalizziamo il parametro urlId per rendere ogni thread unico. Nota che usiamo gli id, tuttavia puoi
passare qualsiasi elemento DOM interrogato nel modo che preferisci.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Discuti di Gatti&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Discuti di Cani&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---