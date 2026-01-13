---
[category:API & Development]
###### [postdate]
# [postlink]FastComments 使用 React[/postlink]

{{#unless isPost}}
需要将评论嵌入到使用 React 开发的应用程序中吗？我们可以帮你。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 有什么新变化

FastComments 现在有一个与我们的 VanillaJS 小部件功能相当的 React 组件。

我们决定将这个库命名为 fastcomments-react。你可以在 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">这里</a> 找到包含源代码的 GitHub 仓库。

该仓库还包含小部件的示例用法。

它已在 NPM 上，你可以在 <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">这里</a> 找到。

#### 它是如何工作的

这个新组件的工作方式是 React 组件是现有 FastComments 小部件的一个包装器。

这意味着如果我们向现有组件添加功能或修复错误，你会立即受益！

#### 为什么要新的组件？

我们编写了 FastComments VanillaJS 小部件作为我们业务的核心（连同核心后端）。这意味着我们设计它是为了扩展，就像我们现在所做的那样。

虽然在没有这个新的 React 库的情况下，你可以通过编写自己的库将 FastComments 集成到你的应用程序中，但这将是一个主要的采用障碍。通过直接支持 React，我们让这些类型的客户更容易采用 FastComments。

#### 单页面应用程序？

FastComments 从核心支持 SPAs。该组件监视 config 对象的变化 - 所以如果你更新当前页面（称为 urlId），小部件将重新渲染。

#### 对现有客户的变化

现有客户没有任何改变 - 使用 VanillaJS 版本的 FastComments 来进行新项目**没有**任何问题。fastcomments-react 一直依赖于 FastComments 的 VanillaJS 版本。如果我们发布 Angular 或 Vue 组件，我们将遵循相同的模型。

我们的 VanillaJS 小部件是 FastComments 的一流公民。这个发布完全是对我们基础设施的*附加*。

此外，VanillaJS 小部件仍然是将嵌入式评论放入任何未使用框架的网页（如静态页面）的一个不错解决方案。

#### 结论

通过发布 fastcomments-react 库和未来的库，我们希望能让开发者在使用现代开发方法时更容易采用 FastComments。

干杯！

{{/isPost}}

---