---
[category:Security]

###### [postdate]
# [postlink]使用单点登录保护评论线程[/postlink]

{{#unless isPost}}
觉得你的评论线程不公开？已经设置了SSO进行身份验证？这可能适合你。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 介绍

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(详细信息点击这里)</a> 为你的用户提供了一种发表评论的方式，而无需登录到其他平台。

然而，仅靠这一点并不能保护你的评论线程，因为默认情况下，评论数据是公开可用的信息——任何可以查看页面的人都可以查看评论。然而，这一更新改变了这一点。

#### 无需编码的设置

我们可以通过创建一个 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">自定义规则</a> 来防止在设置SSO时查看和互动我们的评论线程。

在进行设置时，搜索SSO，你会找到这个选项：

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="通过SSO锁定评论的配置选项" alt="通过SSO锁定评论的配置选项" class="lozad" />
</div>

启用它并保存自定义规则。

#### 仅保护特定的域或页面

要仅保护特定的域或页面，我们只需配置自定义规则即可。

在自定义用户界面的顶部，我们会找到两个输入框，域和URL ID。

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="按页面或域的配置选项" alt="按页面或域的配置选项" class="lozad" />
</div>

要仅保护特定域，请在“域”字段中输入相关域名。

要保护特定页面，请在“URL ID”字段中输入页面URL。如果你与FastComments有自定义集成，可以在这里输入种类ID，而不是URL。

#### 超越阅读的保护

启用此选项将保护该页面或域，防止评论，除非用户通过SSO登录。

#### 注意事项

在你的SSO集成之前创建评论的任何用户将无法看到这些评论，除非他们通过你的SSO集成登录。

#### 总结

我们希望你发现本指南对你有帮助且易于阅读。如有任何问题，请随时在下面评论。

干杯！

{{/isPost}}

---