[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]阿拉伯语和从右到左语言现已支持[/postlink]

{{#unless isPost}}
FastComments 现在支持阿拉伯语，并且 FastComments 的每个部分都为阿拉伯语和希伯来语采用从右到左的布局。像 “3 comments” 这样的计数现在也会在每种语言中使用正确的复数形式。
{{/unless}}

{{#isPost}}

### 新功能

阿拉伯语现已成为受支持的语言，语言代码为 `ar`。评论小部件、其他可嵌入小部件、电子邮件、仪表板以及营销站点均已完成翻译。

阿拉伯语也是从右到左书写的，因此添加它意味着让 FastComments 能够在两种方向上进行布局。此修复同样适用于希伯来语。

### 从右到左布局

当语言环境为阿拉伯语或希伯来语时，整个界面会镜像翻转。评论中的头像、名称和回复控件会交换位置，菜单和下拉列表会向正确的边缘展开，箭头指向阅读方向。这包括评论小部件及其扩展，如实时聊天和投票，工单、协作聊天和评论摘要小部件，电子邮件以及仪表板。

无需任何配置，除非您希望为用户手动设置语言环境。

### 评论保持各自的方向

有时评论区会包含多种语言。英文评论出现在阿拉伯语页面，或阿拉伯语评论出现在英文页面，都应保持自然阅读。

每条评论和用户名遵循其自身文本的方向。在英文页面上，阿拉伯语回复从右到左显示，而周围的评论从左到右显示；在阿拉伯语页面上则相反。评论中的代码块始终从左到右阅读，因为代码本身就是如此。

### 设置语言环境

默认情况下，小部件会从访客的浏览器获取语言环境，因此阿拉伯语使用者会自动获得阿拉伯语。若需强制设置，可在小部件自定义页面的 “Locale / Language” 下设置语言环境，或在代码中：

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

如果使用单点登录（SSO），请在用户对象上传递 `locale: 'ar'`，以便他们的电子邮件也以阿拉伯语发送。

### 复数形式，正确处理

英语对计数有两种形式：“1 comment”和“2 comments”。阿拉伯语对一、二、三到十、以及十一到九十九都有不同的形式，且在一百时再次使用单数形式。俄语、乌克兰语、波兰语、克罗地亚语、塞尔维亚语、斯洛文尼亚语和希伯来语也各自有其规则。

直到现在，FastComments 只识别 “one” 与 “everything else”，因此俄语读者在看到 2 条或 5 条评论时会出现错误的名词形式。现在，所有带计数的字符串都会根据其语言选择正确的形式，适用于小部件、电子邮件和仪表板。

在此过程中，我们审查了每种语言中的所有计数字符串。发现了一些旧的误译现已修正。例如，在少数语言中，回复的词是动词 “to reply”，导致评论显示 “1 Reply” 相当于 “1 To reply”。

如果您自定义了计数文本，例如 “comments” 标签，您的文本仍会用于所有计数。

### 查找您的语言

仪表板中的语言选择器现在会在英文名称旁显示每种语言的本地名称，例如 “Arabic (العربية)” 和 “German (Germany) (Deutsch)”。如果用户进入了错误的语言页面，仍然可以找到自己的语言。

### 文档

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Supported Languages 指南</a> 列出了所有语言代码并涵盖了从右到左的行为。<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">locale 选项</a> 说明了如何在小部件中强制设置语言环境。

这基于 2020 年的 [our first localization release](/(2-05-2020)-fastcomments-gets-localized.html)，当时仅支持三种语言。现在我们已支持二十八种语言环境。

### 结论

我们很高兴能够为阿拉伯语使用者提供 FastComments，并为希伯来语使用者带来更好的体验。如果您发现您语言中的翻译有误，请在下方告诉我们，我们会进行修复。

干杯!

{{/isPost}}

---