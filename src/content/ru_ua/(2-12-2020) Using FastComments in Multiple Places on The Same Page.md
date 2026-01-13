---
[category:Tutorials]

###### [postdate]
# [postlink]Использование FastComments в нескольких местах на одной странице[/postlink]

FastComments гибок. Он прикрепляется к обычному элементу на странице, поэтому работает с любой веб-структурой.

{{#unless isPost}}
Прочитайте этот пост, чтобы увидеть пример нескольких экземпляров FastComments на одной странице.
{{/unless}}

{{#isPost}}
Это означает, что мы можем иметь столько потоков на странице, сколько захотим. Например, вот два потока рядом друг с другом.

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
        headerHTML: '<h1>Обсудим Кошек</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Обсудим Собак</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Как это работает

Вот код, который это реализует. Мы настраиваем параметр urlId, чтобы сделать каждый поток уникальным. Обратите внимание, что мы используем идентификаторы, однако вы можете
передавать любой элемент DOM, который запрашивается любым удобным для вас способом.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Обсудим Кошек&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Обсудим Собак&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---