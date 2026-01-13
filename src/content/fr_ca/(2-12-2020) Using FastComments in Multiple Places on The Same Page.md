---
[category:Tutorials]

###### [postdate]
# [postlink]Utilisation de FastComments à plusieurs endroits sur la même page[/postlink]

FastComments est flexible. Il s'attache à un élément régulier sur une page afin qu'il fonctionne avec n'importe quel cadre web.

{{#unless isPost}}
Lisez cet article pour voir un exemple de plusieurs instances de FastComments sur la même page.
{{/unless}}

{{#isPost}}
Cela signifie que nous pouvons avoir autant de fils de discussion sur une page que nous le souhaitons. Par exemple, voici deux fils de discussion côte à côte.

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
        headerHTML: '<h1>Discuter des chats</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Discuter des chiens</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Comment ça marche

Voici le code qui rend cela possible. Nous personnalisons le paramètre urlId pour rendre chaque fil unique. Notez que nous utilisons des ids, cependant vous pouvez
passer n'importe quel élément DOM interrogé de la manière que vous souhaitez.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Discuter des chats&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Discuter des chiens&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---