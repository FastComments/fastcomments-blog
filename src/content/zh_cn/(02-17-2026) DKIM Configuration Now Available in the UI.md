---
[category:功能]
[category:电子邮件]

###### [postdate]
# [postlink]DKIM配置现已在UI中可用[/postlink]

{{#unless isPost}}
FastComments 现在提供了一个用于配置 DKIM 的用户界面，使得在不使用 API 的情况下提升电子邮件的送达率变得更加简单。
{{/unless}}

{{#isPost}}

### 新特性

为您的自定义电子邮件域设置 DKIM 变得更加简单。之前，配置 DKIM 需要直接使用
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">域配置 API</a>。现在，您可以
直接在 FastComments 管理界面中配置 DKIM。

### 为什么 DKIM 重要

当您为 FastComments 代表您发送的电子邮件自定义发件域时，电子邮件提供商需要验证这些电子邮件是否合法。DKIM（域名密钥识别邮件）是帮助实现此目的的关键认证机制之一。
如果没有适当的 DKIM 配置，代表您域发送的电子邮件更可能进入垃圾邮件文件夹。

### 如何设置

导航至 <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">我的域名</a> 页面，点击您要配置的域名的“显示高级选项”。您将看到 DKIM 设置，在这里可以输入您的域名、密钥选择器和私钥。

保存后，DKIM 配置将应用于来自该域发送的所有电子邮件。

### API 仍然有效

如果您更喜欢以编程方式管理 DKIM 配置，<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">域配置 API</a> 将继续按照之前的方式工作。

### 结论

我们希望这使您更容易确保您的用户收到 FastComments 代表您发送的电子邮件。如果您有任何问题，请在下面告知我们。

干杯！

{{/isPost}}

---