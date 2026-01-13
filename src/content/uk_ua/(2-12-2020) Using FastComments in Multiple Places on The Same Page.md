---
[category:Tutorials]

###### [postdate]
# [postlink]Використання FastComments у кількох місцях на одній сторінці[/postlink]

FastComments є гнучким. Він прикріплюється до звичайного елемента на сторінці, тому працює з будь-яким веб-фреймворком.

{{#unless isPost}}
Прочитайте цей пост, щоб побачити приклад декількох екземплярів FastComments на одній сторінці.
{{/unless}}

{{#isPost}}
Це означає, що ми можемо мати стільки потоків на сторінці, скільки захочемо. Наприклад, ось два потоки поруч один з одним.

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
        headerHTML: '<h1>Обговорення Котів</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Обговорення Псів</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Як це працює

Ось код, що робить це можливим. Ми налаштовуємо параметр urlId, щоб зробити кожен потік унікальним. Зверніть увагу, що ми використовуємо ідентифікатори, але ви можете
вводити будь-який DOM-елемент, запитаний будь-яким способом, який вам подобається.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Обговорення Котів&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Обговорення Псів&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---