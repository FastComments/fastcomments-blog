---
[category:Tutorials]
###### [postdate]
# [postlink]让您的 FastComments 安装调试变得更简单[/postlink]

{{#unless isPost}}
评论不显示？设置似乎没有应用？解决这些问题变得简单多了。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 新内容

在 <a href="https://fastcomments.com">FastComments</a>，我们刚刚发布了一款用于 Google Chrome 的浏览器扩展。该扩展将帮助您理解评论小部件正在接收的配置，以及为什么它可能不显示。

您可以在这里找到该扩展： <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### 如何使用

如果您发现评论小部件未加载，或者您定义的某些配置未显示，请尝试安装 <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">该扩展</a>
并在相关页面上打开它。要在工具栏中看到图标，您可能需要点击右上角的拼图图标，将其固定，如下所示：

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="如何固定扩展" title="如何固定扩展" class="lozad" />
</div>

该扩展可以帮助调试两类错误。第一类是如果小部件根本未包含在页面上或脚本中有重大拼写错误。

第二类是如果某些配置似乎未生效。

要调试这两种情况，您只需单击图标即可。

如果工具在页面上未找到评论小部件，您会看到一个大红色的错误：

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="未找到 Embed.js 示例" title="未找到 Embed.js 示例" class="lozad" />
</div>

如果找到一个或多个小部件实例，您将看到它们的配置单独显示：

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="多个配置示例" title="多个配置示例" class="lozad" />
</div>

此外，FastComments 调试器还会对常见问题显示警告 - 例如，如果没有评论可用，则小部件在只读模式下不会显示。

#### “最终”实例设置？

您可能会看到调试器显示两组配置 - 一组标记为“传递给小部件”，另一组标记为“最终”。

“传递给小部件”的配置，顾名思义，就是您传递给小部件的配置。一些值会通过 embed.js 隐式传递，例如 URL 或页面标题 - 并且这些值会被包含在内。

“最终”配置是小部件用于渲染自身的所有内容。这可能意味着自填的值（如实例 ID），或 <b>来自小部件自定义管理页面的值</b>。

#### 工作原理

评论小部件会将其配置存储在调试器可以找到的地方，然后调试器会扫描您所在的当前页面以查找小部件的实例，并将其加载到内存中。

#### 该扩展收集了哪些信息？

FastComments 调试工具不会与任何 FastComments 服务器通讯或发送信息。实际上，除非您打开它，小部件甚至不会检查您所在页面的内容。

#### 总结

我们希望提供更多这样的工具能让每种类型的客户设置 FastComments 更加容易。请在下面的评论区告诉我们这对您有何帮助。

我们知道，在某些情况下，您仍可能需要帮助 - 对此，您仍可以访问 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">客户支持页面</a>。

干杯！

{{/isPost}}