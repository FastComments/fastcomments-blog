---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]使用FastComments React Native将实时聊天添加到原生应用程序中[/postlink]

{{#unless isPost}}
经过几个月的工作，我们很高兴地宣布fastcomments-react-native-sdk现在已正式发布版本1.0。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 新功能

在FastComments，我们推出了一种新的方式来构建React Native应用程序。之前，您需要使用我们围绕VanillaJS库构建的react-native包装。这由于需要一个Web视图 - 应用程序中的浏览器 - 来加载我们的库，因此引入了几个内存和延迟问题。

我们现在已经**完全**将FastComments移植到React Native，并编写了自己的所见即所得编辑器，以完全消除对Web视图的需求。

该库支持不同的皮肤和布局。例如，这里是Erebus皮肤，这是一个实时聊天风格的深色皮肤：

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

该库可在[GitHub上的FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk)以及
[NPM上](https://www.npmjs.com/package/fastcomments-react-native-sdk)获得。

### 可自定义

新的原生库设计为可自定义，就像现有的Web库一样。

您可以：

- 自定义库使用的所有资产和图标。
- 通过从顶部传递Styles对象自定义库中每个组件的样式。
- 自定义所有翻译。
- 使用预定义的或社区开发的皮肤之一。
- 使用Web库支持的许多相同配置选项。

### 完整功能列表

该库支持许多功能。以下是一个不完整的列表：

- [x] 阻塞
- [x] 聊天反应
- [x] 子评论和回复
- [x] 自定义样式（按类型样式表）
- [x] 表情符号
- [x] 举报
- [x] Gif浏览器 - 具有默认趋势 + 搜索功能。图像和搜索通过代理匿名处理。
- [x] 实时评论
- [x] 媒体选择与上传
- [x] 原生所见即所得编辑器，支持图像。
- [x] 通知服务（在后台获取用户未读通知以推送给他们等）
- [x] 通知列表（点击铃铛时显示）。支持订阅。
- [x] 分页（按钮）
- [x] 分页（无限滚动）
- [x] 钉住评论
- [x] 安全、简单的SSO和匿名评论。
- [x] 几种预定义皮肤。
- [x] 显示/隐藏评论切换
- [x] 主题
- [x] 用户活动指示器
- [x] 投票

### 工作原理

该库是FastComments客户端在TypeScript和React Native中的完整重写。

### 长期计划

从长远来看，我们将同时维护VanillaJS库和react-native库，以及未来可能开发的任何原生库。

### 下一步是什么？

我们期待用户和社区的反馈，以便随着时间的推移改进该库，正如我们对Web生态系统所做的那样。

### 结论

我们知道这个库已经让一些人期待已久。和所有重大版本一样，我们很高兴能够花时间优化、测试并正确发布这个库。

干杯！

{{/isPost}}

---