---
[category:API & Development]

###### [postdate]
# [postlink]FastComments 现已支持 Angular[/postlink]

{{#unless isPost}}
需要将评论嵌入到使用 Angular 开发的应用程序中吗？我们为您提供支持。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 新功能

FastComments 现在拥有与我们的 VanillaJS 小部件功能相当的 Angular 组件。

我们决定将这个库命名为 ngx-fastcomments。您可以在 <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">这里</a> 找到包含源代码的 GitHub 仓库。

该仓库还包含以 Angular 工作区形式展示的小部件使用示例。

您可以在 NPM 上 <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">这里</a> 找到它。

#### 工作原理

这个新组件的工作方式是，Angular 组件是现有 FastComments 小部件的一个封装。

这意味着如果我们对现有组件添加新功能或修复 bug，您将立即受益！

#### 为什么要新组件？

我们编写 FastComments VanillaJS 小部件以作为我们业务的核心（以及核心后端）。这意味着我们打算像现在这样进行扩展。

虽然没有这个新的 Angular 库，您仍然可以通过编写自己的库将 FastComments 集成到您的应用程序中，但这会是一个主要的采用障碍。通过直接支持 Angular，我们让这些类型的客户采用 FastComments 变得更加容易。

#### 单页面应用程序？

FastComments 在其核心支持单页面应用程序。该组件使用变更检测监控配置对象的变化。例如，如果您更新当前页面（称为 urlId），小部件将重新渲染。这使得像切换暗模式或添加分页这样的用例更容易实现。

#### 对现有客户的影响

现有客户没有任何变化 - 使用 VanillaJS 版本的 FastComments 进行新项目是 **没有问题** 的。ngx-fastcomments 依赖于FastComments 的 VanillaJS 版本，并且将始终如此。如果我们发布新组件，我们将遵循相同的模型。

我们的 VanillaJS 小部件是 FastComments 的一个重要组成部分。这个版本完全是对我们基础设施的 *附加*。

此外，VanillaJS 小部件仍然是将嵌入式评论放入任何不使用框架的网页（例如静态页面）的绝佳解决方案。

#### 总结

通过发布 ngx-fastcomments 库和未来的库，我们希望能够使开发人员在使用现代开发方法时更容易地采用 FastComments。

干杯！

{{/isPost}}

---