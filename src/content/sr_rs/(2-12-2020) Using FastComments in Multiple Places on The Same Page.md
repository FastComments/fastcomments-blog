---
[category:Tutorials]

###### [postdate]
# [postlink]Korišćenje FastComments na više mesta na istoj stranici[/postlink]

FastComments je fleksibilan. Pridružuje se običnom elementu na stranici tako da funkcioniše sa bilo kojim veb okvirom.

{{#unless isPost}}
Pročitajte ovaj post da vidite primer više instanci FastComments na istoj stranici.
{{/unless}}

{{#isPost}}
To znači da možemo imati onoliko diskusija na stranici koliko želimo. Na primer, ovde su dve diskusije jedna pored druge.

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
        headerHTML: '<h1>Diskutujte o mačkama</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Diskutujte o psima</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Kako to funkcioniše

Evo koda koji to omogućava. Prilagođavamo parametar urlId da svaka diskusija bude jedinstvena. Imajte na umu da koristimo id-ove, međutim možete
proslijediti bilo koji DOM element kako god želite.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Diskutujte o mačkama&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Diskutujte o psima&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---