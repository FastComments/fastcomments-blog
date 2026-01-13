---
[category:Features]
###### [postdate]
# [postlink]介绍评论者链接[/postlink]

{{#unless isPost}}
我们2021年的第一次发布带来了用户在评论时添加博客链接的能力（如果在租户级别启用）。
{{/unless}}

{{#isPost}}

## 新变化

我们2021年的第一次发布带来了用户在评论时添加博客链接的能力（如果在租户级别启用）。

## 什么是评论者链接？

正如我们在这个非常有趣的交流中看到的，其中一个用户的用户名被下划线标记，以表示它是一个链接：

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="评论者链接" title="评论者链接演示" />
</div>

这是因为网站已配置其FastComments安装，以允许在评论时填写一个新字段，用户可以留下一个链接：

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="评论者链接输入" title="评论者链接输入" />
</div>

这个链接也可以通过编辑您的 <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">账户详情</a> 进行自定义。

## 启用评论者链接

通过创建一个 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定义规则</a>，我们可以启用新的输入字段。只需启用“启用评论者链接”选项。

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="启用评论者链接" title="博客链接" />
</div>

## 重写输入字段文本

默认情况下，评论者链接字段占位符为“您的博客URL。”。可以通过您用于启用此功能的相同自定义规则来重写，通过点击“显示自定义文本”。

## 改善垃圾邮件分类

此功能的副作用是减少可能不是垃圾邮件的内容被标记为垃圾邮件的情况。包含少量文本和链接的评论被归类为垃圾邮件的机会更高。然而，评论者链接不会影响评论是否为垃圾邮件的分类。这意味着用户可以带着他们的博客链接进行评论，而评论被标记为垃圾邮件的风险会大大降低。

由于这些原因，垃圾邮件较多的网站可能不希望启用此功能，但那些不启用的将会发现与某些受众使用此功能的价值。

## 对现有客户的影响

如果您是使用FastComments的现有客户，您的用户将不会体验到任何功能变化，除非您开启此功能。新客户也是如此 - 您会发现此功能默认关闭。

## 总结

我们希望此功能是比去年更好的一年的开始。祝您评论愉快！

{{/isPost}}