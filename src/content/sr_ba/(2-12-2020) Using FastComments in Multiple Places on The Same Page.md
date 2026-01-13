---
[category:Tutorials]

###### [postdate]
# [postlink]Korištenje FastComments na više mjesta na istoj stranici[/postlink]

FastComments je fleksibilan. Priključuje se redovnom elementu na stranici tako da funkcioniše sa bilo kojim web okvirima.

{{#unless isPost}}
Pročitajte ovaj post da vidite primjer više instanci FastComments na istoj stranici.
{{/unless}}

{{#isPost}}
To znači da možemo imati onoliko tema na stranici koliko želimo. Na primjer, ovdje su dvije teme jedna pored druge.

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
        headerHTML: '<h1>Rasprava o mačkama</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Rasprava o psima</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Kako to radi

Evo koda koji omogućava ovo. Prilagođavamo parametar urlId kako bismo svaku temu učinili jedinstvenom. Imajte na umu da koristimo ids, ali možete
proslijediti bilo koji DOM element upitom na bilo koji način koji vam odgovara.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Rasprava o mačkama&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Rasprava o psima&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---