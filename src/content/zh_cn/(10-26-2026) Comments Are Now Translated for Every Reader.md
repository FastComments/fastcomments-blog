[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]评论现在为每位读者提供翻译[/postlink]

{{#unless isPost}}
FastComments 现在可以翻译评论本身，而不仅仅是围绕它们的小部件。可以在每个站点或每个页面上开启，自动或通过翻译按钮，所有读者都能看到用自己语言呈现的对话，原文只需一次点击即可查看。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 已经被翻译成二十八种语言有一段时间了，因此按钮、标签和电子邮件已经可以显示为读者的语言。  
评论没有。  
西班牙语评论在英文页面上仍然是西班牙语，任何不懂的人都会直接跳过。

此版本新增 **Comment Translation**。当开启时，用读者语言之外的语言撰写的评论会显示  
翻译后的内容，下面有一行小字说明来源，并提供 **Show original** 链接以查看实际写的内容。

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### 两种模式

**Automatic** 预先翻译。每条其他语言的评论都会以翻译形式出现，读者如果想要可以切换回原文。  
这是针对真正使用两种或多种语言撰写的社区的模式，且希望所有人阅读同一对话。

**Manual** 为每条评论添加 **Translate** 链接，只有在点击后才会进行翻译。  
读者决定哪些评论值得翻译，  
未被请求的评论不会产生费用。已经是读者语言的评论会直接显示，而不会假装翻译。

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

在两种模式下，读者的语言就是小部件当前显示的语言：您在自定义规则中设置的 **Locale / Language**，或如果未设置则使用访客浏览器语言。  
访客无需安装、注册或配置任何东西。它在小部件嵌入您的页面、站点构建器（如 Google Sites）中，  
或在独立的 FastComments 评论页面上，都以相同方式工作。

### 开启方式

打开您的 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>，  
在 **Locale / Language** 下方找到 **Comment Translation**，并选择 Automatic 或 Manual。默认情况下是关闭的。

因为它基于自定义规则，您可以按需范围化：整个站点、单个域名，或您知道受众混合的单个页面。  
这是服务器端设置，不能仅通过小部件的 JavaScript 配置来开启。

### 成本说明

翻译由语言模型生成，并按 LLM 令牌计费，与  
[AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html) 使用相同计量。任何套餐都可以开启此功能。

每条评论每种语言只翻译一次，翻译结果与评论一起存储。如果有一千名西班牙语读者  
打开同一英文线程，翻译工作只会执行一次。典型评论几百个令牌，按 Flex  
费率约为半美分。如果作者或版主编辑了评论，已存的翻译会被丢弃，下一次查看时重新翻译，因此不会出现已不存在文本的翻译。

手动模式在有人点击之前不产生费用。

### 细节说明

翻译后的文本被视为用户实际输入的评论。它会经过与原文相同的清理和链接规则，  
因此翻译不会携带原文无法包含的内容。提及和标签保持原有格式。

对于非常长的评论，或语言无法自信检测的情况，保持原文不做猜测。  
翻译后评论下方的语言行也会使用读者的语言，因此西班牙语读者看到英文评论时会看到 “Traducido del inglés” 和 “Mostrar original”。 

### 额外开销

此新功能的代码仅在启用时才加载，因此不会拖慢其他用户的评论小部件。

### 文档

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">评论翻译指南</a>
涵盖两种模式、规则设置以及计费。  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">语言区域指南</a>
说明小部件的语言最初是如何选择的。

### 结论

此功能来源于一个社区协会，居民使用英文和西班牙文评论，他们希望两个群体  
阅读同一主题，而无需让任何人安装浏览器扩展或注册任何服务。

如果您运营的社区使用多种语言撰写，请开启此功能并在下方告诉我们翻译效果如何。

干杯!

{{/isPost}}

---