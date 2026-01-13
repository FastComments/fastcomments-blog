---
[category:Tutorials]

###### [postdate]
# [postlink]Używanie FastComments w wielu miejscach na tej samej stronie[/postlink]

FastComments jest elastyczny. Przywiązuje się do zwykłego elementu na stronie, więc działa z każdą ramą webową.

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć przykład wielu instancji FastComments na tej samej stronie.
{{/unless}}

{{#isPost}}
Oznacza to, że na stronie możemy mieć tyle wątków, ile chcemy. Na przykład, oto dwa wątki obok siebie.

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
        headerHTML: '<h1>Omówmy koty</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Omówmy psy</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Jak to działa

Oto kod, który to umożliwia. Dostosowujemy parametr urlId, aby każdy wątek był unikalny. Zauważ, że używamy id, jednak możesz
przekazać dowolny element DOM, który został zapytany w sposób, jaki chcesz.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Omówmy koty&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Omówmy psy&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---