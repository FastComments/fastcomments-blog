---
[category:Security]

###### [postdate]
# [postlink]FastComments 现在支持严格的第三方 Cookie 设置[/postlink]

{{#unless isPost}}
直到现在，FastComments 需要启用第三方 Cookie 才能正常运行。但现在情况已不再如此！
{{/unless}}

{{#isPost}}

### 新功能

在以隐私为重点的浏览器中，默认禁用第三方 Cookie 正在成为常态。例如，苹果的 iOS 上的 Safari 浏览器，如果您留下电子邮件以使用 FastComments 发表评论，验证该评论后再返回该页面留下另一个评论或回复他人，您会发现您留下的任何进一步评论将被标记为未验证。

这只会在默认设置下发生，该设置会在评论上显示“未验证”标签。然而，这可能会影响其他功能，例如，如果自动审批仅针对已验证评论启用，则会影响自动审批。

可以想象，这会导致令人沮丧的行为，用户验证了他们的评论，点击“保持我登录”，但访问您的网站或应用程序时仍然没有登录。请注意，这不适用于 SSO 集成，因为 SSO 不依赖于 Cookie。

现在，通过在小部件设置中启用一个名为`Enable Third-Party Cookie Popup`的新设置，这个问题得到了解决，该设置通过弹出窗口获取用户的 Cookie。目前这只会在用户与评论小部件交互时发生，但结果是评论将从他们的 FastComments.com 会话中发布，标记他们的评论为已验证，等等。

### 如何获取与文档

所有 FastComments 的客户现在都可以访问此功能。请查看 [文档](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass)，了解如何启用第三方 Cookie 旁路。

### 总结

像所有主要版本一样，我们很高兴能够花时间优化、测试并正确发布此功能。如果您发现任何问题，请在下方告诉我们。

干杯！

{{/isPost}}

---