---
[category:API & Development]
###### [postdate]
# [postlink]在 VanillaJS 单页应用中使用 FastComments[/postlink]

{{#unless isPost}}
虽然我们有专门的 React 和 VueJS 组件，但原生小部件也可以用于单页应用程序中。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 目标读者

本文面向开发人员。

#### 介绍

FastComments VanillaJS 小部件的示例用法大多数是一个非常简单的代码片段，加载当前页面 URL 的评论线程。这是因为
这是绝大多数客户的使用案例，但最近我们看到越来越多的开发者构建 SPA 并使用 FastComments。

首先，请记住 FastComments 拥有专门的 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> 和 <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> 组件，所以如果你使用这些库，请查看它们，这样你就不必为 FastComments 构建自己的包装。

但是，如果你使用 VanillaJS 构建应用程序，你可以动态初始化和更新评论小部件。

#### 首先，URL 和 URL ID

FastComments 有两个标识符用于与评论线程相关的页面或文章。在配置对象中，它们是 "url" 和 "urlId" 属性。

URL 是评论小部件的 URL。理想情况下，你应该能够从应用程序外部访问此 URL。它将在通知电子邮件和
管理员工具中作为链接公开。

URL ID 是一个字符串，可以是 URL 或 ID - 只要它表示当前页面，它可以是任何值。如果你有文章、帖子或页面 ID，你可以使用它
作为这个值，而不是页面 URL。URL ID 之所以独立，是因为你可能希望在 URL 中存储额外信息，这会使该 URL 对页面不唯一。

请注意，我们已在 TypeScript 中记录了小部件支持的完整配置 <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">在 GitHub 上</a>。

#### 具体内容和真实演示

当小部件被实例化时，捕获你通常会调用的 FastCommentsUI 函数的结果：

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

然后，你可以在实例对象上调用 "update" 方法来更新配置。这将刷新组件：

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

你可以在此 <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">fiddle 中看到一个工作示例</a>。

请注意，在此示例中我们使用 document.getElementById，但你可以使用任何机制来获取目标元素。

#### 注意事项

虽然只更新 "urlId" 是可行的，但即使它们相同，你也应该同时更新 "urlId" 和 "url"，以确保来自通知电子邮件和
审核工具的链接正常工作。仅更新 "url" 是不够的 - 评论与 "urlId" 相关联。

#### 结论

我们希望你觉得本指南有帮助。如果有任何问题，欢迎在下方评论。

干杯！

{{/isPost}}

---