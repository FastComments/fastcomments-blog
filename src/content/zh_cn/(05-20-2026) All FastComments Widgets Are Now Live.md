---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]所有 FastComments 小部件现已上线[/postlink]

{{#unless isPost}}
每个嵌入的 FastComments 小部件（评论计数、最新评论、热门页面、近期讨论、评论摘要、浮动点赞）现在都实时更新。
{{/unless}}

{{#isPost}}

### 新变化

主评论小部件从一开始就一直在线。然而，较小的嵌入式小部件并非如此。评论计数、“最新评论”或“热门页面”小部件等，过去最多会显示一个已经过期一分钟的数字。

现在，FastComments 发布的每个小部件都订阅实时更新，并立即刷新 :) 这包括评论摘要！

### 哪些小部件

所有小部件。具体如下：

- `FastCommentsCommentCount` - 每页的评论计数
- `FastCommentsCommentCountBulk` - 在列表/归档页面上更新多个计数的批量版本
- `FastCommentsRecentComments` 和 `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` 和 `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` （浮动评论计数徽章）
- `FastCommentsEmbedPageLikesFloating` （浮动点赞 + 评论计数）

### 你需要做什么

无须任何操作。如果你已经嵌入了这些小部件，请刷新页面一次。下次有人发表评论、编辑、删除或对页面进行反应时，小部件将会更新。

在评论计数小部件上，旧的 `isLive: true` 配置标志现在是多余的 - 小部件始终处于在线状态。

如果你从我们的 CDN 加载小部件 JS，那么你使用的就是新版本，包括如果你使用我们的任何封装库（React、Vue 等）。

### 点赞也实时

浮动点赞小部件现在也响应点赞和反应事件。点击页面上的心形图标，其他打开的标签页会看到计数发生变化。

### 工作原理

每个小部件打开一个单一的 WebSocket 连接。显示特定页面数据的小部件（`comment-count`（包括批量）、`reviews-summary`、`embed-page-likes-floating`）订阅该页面的事件流。显示跨租户数据的小部件（`recent-comments`、`top-pages`、`recent-discussions`）订阅每个租户的脉冲流，每当该租户中的任何内容发生变化时，都会发出信号。

结果是，空闲的小部件几乎不消耗任何资源，而活跃的小部件在底层变化后的一两秒内显示出最新数据。

### 缓存一致性

支持这些小部件的服务器端缓存过去的过期时间为 60 秒 TTL。现在，它们在相关评论或反应事件到达时立即失效，因此变化后的第一次请求返回的是新数据，而不是缓存版本。

### 总结

我们很高兴能够花时间测试和优化这一变化，以便我们的客户以与往常相同的价格享受。我们认为，实时评论摘要是我们特别 cool 的一个差异化特点。

如果你发现任何问题，请在下方告知我们。

干杯！

{{/isPost}}