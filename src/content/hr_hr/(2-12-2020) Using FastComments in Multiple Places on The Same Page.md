---
[category:Tutorials]

###### [postdate]
# [postlink]Korištenje FastComments na Više Mjesta Na Istojoj Stranici[/postlink]

FastComments je fleksibilan. Priključuje se redovitom elementu na stranici tako da radi s bilo kojim web okvirom.

{{#unless isPost}}
Pročitajte ovaj post kako biste vidjeli primjer višestrukih instanci FastComments na istoj stranici.
{{/unless}}

{{#isPost}}
To znači da možemo imati onoliko razgovora na stranici koliko želimo. Na primjer, ovdje su dva razgovora jedan pored drugog.

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
        headerHTML: '<h1>Raspravite o Mačkama</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Raspravite o Psima</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Kako to radi

Evo koda koji to omogućuje. Prilagođavamo parametar urlId kako bismo svaki razgovor učinili jedinstvenim. Napomena da koristimo ids, međutim, možete
proslijediti bilo koji DOM element upitom na bilo koji način koji vam se sviđa.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Raspravite o Mačkama&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Raspravite o Psima&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---