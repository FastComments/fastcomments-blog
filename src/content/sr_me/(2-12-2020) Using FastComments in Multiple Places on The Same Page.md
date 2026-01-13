---
[category:Tutorials]

###### [postdate]
# [postlink]Korišćenje FastComments na Više Mesta Na Istoј Stranici[/postlink]

FastComments je fleksibilan. Priključuje se regularnom elementu na stranici tako da funkcioniše sa bilo kojim veb okvirom.

{{#unless isPost}}
Pročitajte ovaj post da biste videli primer više instanci FastComments na istoj stranici.
{{/unless}}

{{#isPost}}
To znači da možemo imati onoliko tema na stranici koliko želimo. Na primer, ovde su dve teme jedna pored druge.

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
        headerHTML: '<h1>Razgovarajte o Mačkama</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Razgovarajte o Psima</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Kako to funkcioniše

Evo koda koji to omogućava. Prilagođavamo parameter urlId da bismo učinili svaku temu jedinstvenom. Imajte na umu da koristimo id-eve, ali možete
proslediti bilo koji DOM element pretražen na bilo koji način koji želite.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Razgovarajte o Mačkama&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Razgovarajte o Psima&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---