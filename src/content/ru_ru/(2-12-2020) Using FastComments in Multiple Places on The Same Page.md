---
[category:Tutorials]

###### [postdate]
# [postlink]Использование FastComments в нескольких местах на одной странице[/postlink]

FastComments гибкий. Он прикрепляется к обычному элементу на странице, поэтому работает с любым веб-фреймворком.

{{#unless isPost}}
Прочтите этот пост, чтобы увидеть пример нескольких экземпляров FastComments на одной странице.
{{/unless}}

{{#isPost}}
Это означает, что у нас может быть столько потоков на странице, сколько мы захотим. Например, здесь два потока рядом.

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
        headerHTML: '<h1>Обсуждение кошек</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Обсуждение собак</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Как это работает

Вот код, который делает это возможным. Мы настраиваем параметр urlId, чтобы сделать каждый поток уникальным. Обратите внимание, что мы используем id, однако вы можете
передать любой элемент DOM, запрашиваемый любым удобным для вас способом.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Обсуждение кошек&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Обсуждение собак&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---