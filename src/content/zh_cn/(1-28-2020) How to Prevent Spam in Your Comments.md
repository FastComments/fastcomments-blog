---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]如何防止评论中的垃圾邮件[/postlink]

没有办法做到 100% 防止垃圾邮件。但是 FastComments 部署了多项措施来帮助。

{{#isPost}}

## 网站管理员文档

FastComments 的默认安装启用了垃圾邮件和亵渎语言过滤。

这些默认设置在防止垃圾邮件和对大多数社区不太干扰之间达成了一种平衡。

[您可能想查看 moderation 指南](https://docs.fastcomments.com/guide-moderation.html)。

## 工作原理

我们的垃圾邮件过滤器使用 [Naive Bayes 分类器](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) 来识别垃圾邮件。

它会根据管理员标记为垃圾邮件和非垃圾邮件的内容随着时间的推移进行训练。

FastComments 在您的网站上以 iframe 的形式运行。这使得自动化垃圾邮件机器人更难以针对您的评论区域。然而，如果他们确实这样做，并且我们的分类器判断他们的评论是“垃圾邮件”，则这些评论将对您的用户隐藏。与所有其他评论一样，它们也会在仪表板的 [moderation 页面](https://fastcomments.com/auth/my-account/moderate-comments) 中标记为“需要审核”。

但是，亵渎语言过滤默认不会导致评论被隐藏。它只会用星号掩盖“脏话”。

## 完全阻止垃圾邮件

默认情况下，FastComments 会允许垃圾邮件，但会将其隐藏并标记为待审核。

如果您想告诉用户他们的评论被检测为垃圾邮件，并要求他们修改，可以在 [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings) 中启用 `Block Spam` 设置来完成。

## 隐藏亵渎评论

通过在 [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings) 中启用 `Automatically Send Profane Comments to Spam` 可以隐藏亵渎评论。

## 设置

亵渎语言和垃圾邮件过滤都可以在 [Moderation Settings](https://fastcomments.com/auth/my-account/moderate-comments/settings) 页面单独关闭。

## 评论验证

FastComments 采用了一个验证系统，默认情况下，[未验证的评论](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) 对所有用户可见，标记为未验证。

通过允许用户在没有完全登录的情况下发表评论，这降低了进入讨论的门槛。未验证标签可以通过自定义规则隐藏。

未验证评论默认是可见的，但可以隐藏，直到通过电子邮件验证为止，方法是启用 `Only Auto Approve Verified Comments`。

请注意，使用 SSO 时，所有评论始终是经过验证的。如果用户在经过验证的会话中登录，他们的评论也将始终经过验证。

未验证的评论也可以安排删除。

## 对评论者的说明

如果您的评论被检测为垃圾邮件，您会立刻看到一条消息。这是为了让您知道评论必须经过审核才能显示给其他人。垃圾邮件检测无法做到 100% 准确，因此我们理解您可能会有一些沮丧。如果您的评论是合法的，网站管理员应该能够识别并将您的评论标记为非垃圾邮件。

{{/isPost}}

---