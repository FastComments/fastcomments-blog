---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]基于 ChatGPT 4 的新垃圾邮件过滤器。[/postlink]

{{#unless isPost}}
FastComments 增加了垃圾邮件过滤器选项。
{{/unless}}

{{#isPost}}

### 新变化

FastComments 继续改进其朴素贝叶斯垃圾邮件分类器，但我们为垃圾邮件检测器系列增加了一个新选项。

现在可以使用 OpenAI 提供的 ChatGPT 4 检测垃圾邮件。

### 获取方式

要配置使用哪个垃圾邮件检测器，请在您的管理仪表板中查看审核设置页面。基于 GPT4 的垃圾邮件检测器的收费标准为每使用 `1000` 个令牌 `$0.08`。

该垃圾邮件检测器仅对 Flex 计划的客户可用，因为它根据使用的令牌进行收费。

### 优化

我们首先将所有内容通过共享的朴素贝叶斯分类器，以减少对 OpenAI 的调用。这可以为您节省处理非常明显的垃圾邮件的费用。对于额外狡猾的垃圾邮件，我们再调用 OpenAI 来查看内容是否看起来像垃圾邮件。

### 结果

我们观察到启用此功能的社区立即改善。

### 文档

这可以通过您管理仪表板中的审核设置页面进行设置。

[文档也可以在这里找到](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### 结论

我们感谢持续给予我们反馈的客户，促使我们能有这样的想法。我们希望您继续喜爱 FastComments。

干杯！

{{/isPost}}

---