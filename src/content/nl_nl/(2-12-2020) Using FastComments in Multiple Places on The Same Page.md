---
[category:Tutorials]

###### [postdate]
# [postlink]FastComments op Meerdere Plaatsen Op Dezelfde Pagina Gebruiken[/postlink]

FastComments is flexibel. Het voegt zich toe aan een regulier element op een pagina, zodat het met elke webframework werkt.

{{#unless isPost}}
Lees deze post om een voorbeeld te zien van meerdere instanties van FastComments op dezelfde pagina.
{{/unless}}

{{#isPost}}
Dit betekent dat we zoveel threads op een pagina kunnen hebben als we willen. Bijvoorbeeld, hier zijn twee threads naast elkaar.

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
        headerHTML: '<h1>Bespreek Katten</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Bespreek Honden</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Hoe het werkt

Dit is de code die dit mogelijk maakt. We passen de urlId-parameter aan om elke thread uniek te maken. Merk op dat we ids gebruiken, maar je kunt
elke DOM-element doorzoeken op de manier die je wilt.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Bespreek Katten&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Bespreek Honden&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---