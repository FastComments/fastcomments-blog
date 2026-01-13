---
[category:Tutorials]

###### [postdate]
# [postlink]Korišćenje FastComments na Više Mesta Na Istojoj Stranici[/postlink]

FastComments je fleksibilan. Priključuje se regularnom elementu na stranici tako da funkcioniše sa bilo kojim web okvirom.

{{#unless isPost}}
Pročitajte ovaj post da biste videli primer više instanci FastComments na istoj stranici.
{{/unless}}

{{#isPost}}
To znači da možemo imati onoliko thread-ova na stranici koliko želimo. Na primer, ovde su dva thread-a jedan pored drugog.

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
        headerHTML: '<h1>Diskutujte o Mačkama</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Diskutujte o Psima</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Kako to funkcioniše

Evo koda koji ovo omogućava. Prilagođavamo urlId parametar da bismo svaki thread učinili jedinstvenim. Imajte na umu da koristimo id-eve, međutim, možete
proslediti bilo koji DOM element upitom na bilo koji način koji želite.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Diskutujte o Mačkama&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Diskutujte o Psima&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---