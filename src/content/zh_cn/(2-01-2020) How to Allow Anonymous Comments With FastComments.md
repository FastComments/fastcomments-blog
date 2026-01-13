---
[category:Tutorials]

###### [postdate]
# [postlink]如何在 FastComments 中允许匿名评论[/postlink]

{{#unless isPost}}
默认情况下，如果您未登录，FastComments 需要提供电子邮件才能评论。我们使用此电子邮件自动为用户创建帐户，并让他们验证他们的评论。
为了允许匿名评论，您只需创建一个自定义规则。定义您希望
允许匿名评论的域名，以及可选的页面。
{{/unless}}

{{#isPost}}
默认情况下，如果您未登录，FastComments 需要提供电子邮件才能评论。我们使用此电子邮件自动为用户创建帐户，并让他们验证他们的评论。
为了允许匿名评论，您只需创建一个自定义规则。定义您希望
允许匿名评论的域名，以及可选的页面。

这意味着您可以按页面控制在哪里允许匿名评论。

<img 
    src="images/fc-allow-anon.png"
    alt="允许匿名评论"
    class='lozad' />

{{/isPost}}

---