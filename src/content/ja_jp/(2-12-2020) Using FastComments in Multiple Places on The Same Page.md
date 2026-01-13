---
[category:Tutorials]

###### [postdate]
# [postlink]同じページでのFastCommentsの複数の場所での使用[/postlink]

FastCommentsは柔軟性があります。ページ上の通常の要素に接続するため、どのWebフレームワークでも機能します。

{{#unless isPost}}
この投稿を読んで、同じページ上でのFastCommentsの複数のインスタンスの例を見てください。
{{/unless}}

{{#isPost}}
これにより、ページ上に必要なだけのスレッドを持つことができます。たとえば、ここには横に並んだ2つのスレッドがあります。

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
        headerHTML: '<h1>猫について話す</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>犬について話す</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### 仕組み

これがこれを実現するコードです。urlIdパラメータをカスタマイズして、それぞれのスレッドをユニークにしています。idを使用していますが、好きな方法でクエリされた任意のDOM要素を渡すことができることに注意してください。


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;猫について話す&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;犬について話す&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---