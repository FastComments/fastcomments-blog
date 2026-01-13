---
[category:Analytics]
###### [postdate]
# [postlink]FastComments 现在可以显示评论查看次数[/postlink]

{{#unless isPost}}
FastComments 现在支持在每条评论旁边显示一个计数，随着用户查看评论实时增加。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 现在支持在每条评论旁边显示一个计数，随着用户查看评论实时增加。评论是否被查看由用户的账户或匿名会话决定。它支持单点登录（包括安全单点登录和简单单点登录）。

### 实时演示

我们专门为这篇博客文章启用了评论查看计数！查看每条评论旁边的眼睛旁的计数！

### 文档

[您可以在这里找到设置查看计数的开发者文档。](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### 性能

计数并非立即更新，计数的聚合和随后发送到网络之间有小的延迟（最多三秒）。这是一种优化，以便如果您有一个实时事件，并且有几千人平均在页面上查看10条评论，我们不会立即向每个用户发送数百万个更新（`3000 users x 3000 page loads = ~9 million changes`），从而拖慢他们的浏览器或占用他们的网络带宽。

### 总结

我们感谢我们的客户提供持续的反馈，这样我们才能想到这样的创意，并给予我们时间推出优化良好的功能。我们希望您继续喜爱FastComments。

干杯！

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---