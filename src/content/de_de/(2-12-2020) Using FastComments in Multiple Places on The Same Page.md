---
[category:Tutorials]

###### [postdate]
# [postlink]FastComments an mehreren Stellen auf derselben Seite verwenden[/postlink]

FastComments ist flexibel. Es wird an ein reguläres Element auf einer Seite angehängt, sodass es mit jedem Web-Framework funktioniert.

{{#unless isPost}}
Lies diesen Beitrag, um ein Beispiel für mehrere Instanzen von FastComments auf derselben Seite zu sehen.
{{/unless}}

{{#isPost}}
Das bedeutet, wir können so viele Threads auf einer Seite haben, wie wir möchten. Zum Beispiel sind hier zwei Threads nebeneinander.

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
        headerHTML: '<h1>Über Katzen diskutieren</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Über Hunde diskutieren</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### So funktioniert es

Hier ist der Code, der dies ermöglicht. Wir passen den Parameter urlId an, um jeden Thread einzigartig zu machen. Beachte, dass wir IDs verwenden, du kannst jedoch
jedes DOM-Element auf jede Weise, die du möchtest, abfragen.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Über Katzen diskutieren&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Über Hunde diskutieren&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---