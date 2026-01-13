---
[category:Tutorials]

###### [postdate]
# [postlink]Brug af FastComments på flere steder på samme side[/postlink]

FastComments er fleksibel. Den tilsluttes et almindeligt element på en side, så den fungerer med ethvert webframework.

{{#unless isPost}}
Læs dette indlæg for at se et eksempel på flere instanser af FastComments på den samme side.
{{/unless}}

{{#isPost}}
Dette betyder, at vi kan have så mange tråde på en side, som vi ønsker. For eksempel, her er to tråde ved siden af hinanden.

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
        headerHTML: '<h1>Diskuter Katte</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Diskuter Hunde</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Hvordan det fungerer

Her er koden, der får dette til at ske. Vi tilpasser urlId-parameteren for at gøre hver tråd unik. Bemærk, at vi bruger ids, men du kan
videregive ethvert DOM-element, der er forespurgt på enhver måde, du ønsker.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Diskuter Katte&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Diskuter Hunde&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---