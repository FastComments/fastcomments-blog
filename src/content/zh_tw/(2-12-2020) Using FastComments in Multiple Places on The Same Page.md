---
[category:Tutorials]

###### [postdate]
# [postlink]在同一頁面上使用 FastComments 的多個實例[/postlink]

FastComments 是靈活的。它附加到頁面上的常規元素，因此可以與任何網頁框架一起使用。

{{#unless isPost}}
閱讀這篇文章以查看同一頁面上 FastComments 的多個實例示範。
{{/unless}}

{{#isPost}}
這意味著我們可以在頁面上擁有任意數量的主題。例如，這裡有兩個並排的主題。

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
        headerHTML: '<h1>討論貓咪</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>討論狗狗</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### 它是如何運作的

這是使這一切發生的程式碼。我們自訂 urlId 參數以使每個主題唯一。請注意，我們使用 ids，但您可以
以任何您喜歡的方式傳遞任何查詢到的 DOM 元素。

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;討論貓咪&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;討論狗狗&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---