---
[category:Features]

###### [postdate]
# [postlink]De FastComments Commentaantal Widget[/postlink]

Wil je het aantal reacties op een pagina tonen voordat een gebruiker klikt? Geen probleem met FastComments.

{{#isPost}}
De eerste van vele die komen - FastComments ondersteunt nu commentaantal widgets.

Bijvoorbeeld, deze pagina heeft <b><span id="fastcomments-widget-comment-count"></span></b>. Dat nummer wordt via de widget ingevoegd! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Het is een live telling, met een cache van 60 seconden om zeer populaire pagina's sneller te bedienen. Dit betekent dat je de live telling mogelijk een minuut achter kunt laten bij het aantal
van je reacties, maar dat is om ervoor te zorgen dat FastComments zijn naam waarmaakt.

Een beter voorbeeld kan een lijst van blogposts zijn, bijvoorbeeld:

### Bericht #1
##### 64 Reacties


### Bericht #2
##### 128 Reacties


### Bericht #3
##### 256 Reacties

Je kunt ook een live voorbeeld hiervan zien op de blog <a href="https://blog.fastcomments.com" target="_blank">startpagina</a>.

De Commentaantal widget wordt niet weergegeven in een iframe, zodat deze volledig aanpasbaar is via CSS. Het zal automatisch de stijl van je pagina overnemen - lettertypes, kleuren, lijnhoogtes, enzovoort.

Om toegang te krijgen tot de code van de Commentaantal widget voor je account ga je eenvoudig <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">hier</a>.

Je kunt het vinden via de UI via de accountpagina, daarna op Widgetcode verkrijgen klikken en vervolgens op Overige Widgets.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---