[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]无需选择用户名的评论[/postlink]

{{#unless isPost}}
FastComments 现在可以为每位新访客分配一个唯一且中性的用户名，这样他们就不必自己想出用户名。共享的默认用户名也不再会被第一个使用它的人“占用”。 
{{/unless}}

{{#isPost}}

### 新功能

如果您的站点没有登录功能，想要发表评论的访客需要提供两项信息：电子邮件和用户名。电子邮件很简单，但用户名必须是唯一的、公开的，而且他们必须立即想出一个。

此版本去除了这一步骤。 在您的小部件自定义中打开 **Generate Usernames Automatically**，每位新访客都会自动填入类似 `BraveOtter4172` 的名称。他们可以保留该名称或自行更改。无论哪种方式，都能更快进入评论框。

### 开启方法

打开您的 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">小部件自定义</a>，找到 **Anonymization** 部分，并勾选 **Generate Usernames Automatically**。无需其他配置。

它在启用或未启用 **Allow Anonymous Comments** 时均可工作。如果您仍希望每位评论者提供电子邮件，请关闭匿名评论。访客输入电子邮件，用户名由系统自动处理，仅此而已。如果您不需要电子邮件，请开启匿名评论，访客即可仅填写评论内容而无需其他输入。

### 访客看到的内容

用户名字段会预先填入生成的名称。这是普通的输入框，想使用其他名称的用户只需自行替换。没有任何隐藏或强制的内容。

这些名称由两个单词加一个数字组成，易于阅读且保持中性。不会出现 `user_83729` 之类的名称。

### 每个名称都是唯一的

在提供生成的名称之前，会先检查其是否已存在于账户中，并为该访客的浏览器会话保留该名称，以防下一个访客获得相同的名称。已登录用户、SSO 用户以及已发表评论的访客永远不会被分配新名称。他们会保留已有的名称。

再次访问的访客如果输入之前使用过的电子邮件，会匹配到其已有账户，因此即使中间清除了浏览器，也不会在第二次访问时创建第二个身份。

### 错误修复 - 默认用户名现在真正共享

有些用户使用了 **Default Username** 并将其值设为 “Anonymous”，以实现大部分功能。但这存在一个问题。用户名必须唯一，因此第一个使用其电子邮件以 “Anonymous” 发表评论的访客拥有了该名称，而下一个使用不同电子邮件的访客则会收到用户名已被占用的提示。

此问题已修复。默认用户名现在被视为共享的显示名称，而非身份标识。每位保留该名称的访客在后台都有各自的账户，且都显示为 “Anonymous”。访客自行输入的用户名仍需保持唯一，和之前一样。

如果同时设置两者，生成的名称将优先使用。

### 文档

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Generate Usernames Automatically 指南</a> 介绍了该选项以及它与其他匿名评论设置的交互方式。

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Default Username 指南</a> 说明了共享名称的行为。

### 结论

此功能来源于一位客户的站点，访客是可能只会留下一次反馈的患者。要求他们提供电子邮件和唯一用户名显得多余。如果有任何设置阻碍了读者与评论框的交互，请在下方告诉我们。

干杯!

{{/isPost}}