---
[category:Tutorials]

###### [postdate]
# [postlink]Използване на FastComments на множество места на една и съща страница[/postlink]

FastComments е гъвкав. Той се прикрепя към обикновен елемент на страница, така че работи с всяка уеб рамка.

{{#unless isPost}}
Прочетете тази публикация, за да видите пример за множество инстанции на FastComments на една и съща страница.
{{/unless}}

{{#isPost}}
Това означава, че можем да имаме толкова теми на страница, колкото желаем. Например, ето две теми една до друга.

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
        headerHTML: '<h1>Обсъждане на котки</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Обсъждане на кучета</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Как работи

Ето кода, който прави това да се случи. Ние персонализираме параметъра urlId, за да направим всяка тема уникална. Обърнете внимание, че използваме ids, но можете
да предадете всякакъв DOM елемент, запитан по какъвто начин желаете.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Обсъждане на котки&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Обсъждане на кучета&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---