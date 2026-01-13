---
[category:Tutorials]

###### [postdate]
# [postlink]在同一页面多个地方使用 FastComments[/postlink]

FastComments 是灵活的。它可以附加到页面上的一个常规元素，因此可以与任何网页框架一起使用。

{{#unless isPost}}
阅读此帖子以查看在同一页面上多个实例的 FastComments 示例。
{{/unless}}

{{#isPost}}
这意味着我们可以在页面上拥有任意数量的线程。例如，这里有两个并排的线程。

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
        headerHTML: '<h1>讨论猫</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>讨论狗</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### 它是如何工作的

这是实现此功能的代码。我们自定义 urlId 参数以使每个线程唯一。请注意，我们使用 ids，您可以以任何您喜欢的方式传入查询的 DOM 元素。


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;讨论猫&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;讨论狗&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---