---
[category:Features]

###### [postdate]
# [postlink]FastComments 评论数小部件[/postlink]

想在用户点击之前展示页面上的评论数量吗？使用 FastComments 没问题。

{{#isPost}}
首个系列中的多个 - FastComments 现在支持评论数小部件。

例如，这个页面有 <b><span id="fastcomments-widget-comment-count"></span></b>。这个数字是通过小部件插入的！ 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

这是一个实时计数，具有60秒的缓存以帮助更快地服务非常受欢迎的页面。这意味着您可能会看到实时计数落后于您的评论数量一 minute，但这是为了确保 FastComments 不辜负其名称。

一个更好的例子可能是博客文章列表，例如：

### 文章 #1
##### 64 条评论


### 文章 #2
##### 128 条评论


### 文章 #3
##### 256 条评论

您还可以在博客 <a href="https://blog.fastcomments.com" target="_blank">主页</a> 上查看这个实时示例。

评论数小部件不会在 iframe 中呈现，因此可以通过 CSS 进行全面自定义。它将自动继承您页面的样式 - 字体、颜色、行高等等。

要获取您帐户的评论数小部件代码，请直接访问 <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">这里</a>。

您可以通过账户页面的 UI 找到它，然后点击获取小部件代码，再点击其他小部件。

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