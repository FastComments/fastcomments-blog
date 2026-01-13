---
[category:Moderation]

###### [postdate]
# [postlink]发布审核组[/postlink]

{{#unless isPost}}
有多种类型的内容，并希望不同的审核团队处理自己的内容？现在使用 FastComments，您可以做到这一点！
{{/unless}}

{{#isPost}}

## 新功能

以前，审核员在访问审核评论页面时，会看到您帐户中的所有评论。如果您有多种类型的内容，所有审核员都会看到完全相同的列表。对于较大的网站，这可能会导致对哪些审核员审核哪些内容的混淆。

我们现在提供了仅根据审核员的组显示需要审核的评论的功能。

## 评论如何被放入组中

首先，必须设置一个自定义集成，以便在评论被留下时，FastComments 知道生成的评论应该进入哪个组。

[请参阅此处以了解如何设置集成。](https://docs.fastcomments.com/guide-customizations-and-configuration.html#moderation-group-ids)

## 添加组

通过简单地访问新的 [审核组页面](https://fastcomments.com/auth/my-account/moderate-comments/moderation-groups)，我们可以定义具有自己名称的组，查看集成所需的生成 ID，甚至监控每组中的审核员和评论数量。

然后，您可以像往常一样编辑审核员，并且将有一个新选项可以选择他们的组。

请注意，审核员和评论都可以属于多个组。

有关添加组的详细文档， [查看文档！](https://docs.fastcomments.com/guide-moderation.html#moderation-groups)。

## 迁移现有评论

通过支持请求，FastComments.com 可以将您的评论迁移到您指定的组中 - 请告知我们！

## 验证集成

您可以通过检查审核组页面中的评论计数来验证集成是否正确设置。

## 对现有客户的影响

如果您是使用 FastComments 的现有客户，该功能已经在您的帐户中可用。

如果您不进行任何更改以使用此功能，您的审核员将不会体验到其工作流程的任何变化。

## 总结

我们希望您觉得此更新及其文档对您有用。祝您评论愉快！

{{/isPost}}