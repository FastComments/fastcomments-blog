---

[category:Features]
###### [postdate]
# [postlink]页面反应已推出[/postlink]

{{#unless isPost}}
FastComments 现在支持在评论小部件上方显示页面反应及其计数。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 已经支持我们所称的反馈模块，您可以在评论区上方显示评分、NPS 或其他问题。

然而，许多用户希望能更简单 - 在评论小部件上方显示一些带有反应的图标，能够自定义这些图标，可能根据每个用户自定义选项等等。

截至今天，我们推出了这一功能。

所有 FastComments 计划现在都可以访问页面反应。

### 现场演示

我们为这篇博客文章专门启用了演示页面反应配置，您可以在下面找到它！

### 文档

[您可以在这里找到设置页面反应的开发者文档。](https://docs.fastcomments.com/guide-page-reacts.html)

### 反应用户列表

页面反应还可以配置为显示工具提示，揭示留下特定反应的用户列表。

### 结论

我们感谢给我们持续反馈的客户，使我们能够想到这样的创意，并且给我们时间推出经过良好优化的功能。我们希望您继续喜爱 FastComments。

谢谢！

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---