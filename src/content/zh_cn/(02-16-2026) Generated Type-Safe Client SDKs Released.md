---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
正如我们在 TypeScript 迁移文章中预告的那样，我们已经发布了针对十种编程语言的生成式、类型安全的客户端 SDK。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 新功能

在我们的[TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-zh_cn.html)中，我们提到生成式客户端 SDK 即将推出。它们现在已经发布。

FastComments 现在提供官方的、类型安全的 SDK，支持 **十种语言**：

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

每个 SDK 都是基于我们服务器生成的相同 OpenAPI 规范生成的。类型、方法签名以及请求/响应模型会自动与实际 API 保持同步。编译器会在代码发起网络请求之前捕获字段名拼写错误和缺少参数的问题。

### 工作原理

TypeScript 迁移是实现此功能的前提。现在我们的服务器代码已全部使用类型标注，我们使用[our fork of TSOA](https://github.com/FastComments/tsoa)直接从路由控制器生成 OpenAPI 3.0 规范。该规范随后被输入到[OpenAPI Generator](https://openapi-generator.tech/)中，以生成各语言的客户端库。

当 API 发生变化时，我们的工具会检测规范的差异，重新生成受影响的 SDK，针对每种语言运行测试，并自动打开 Pull Request。我们使用 Nim 构建了一个小型管理工具，负责在所有十个仓库中协调更新‑测试‑发布的整个流程。

### 每个 SDK 包含什么

每个 SDK 提供两个 API 类：

- **`DefaultApi`**：需要使用 API 密钥进行身份验证的端点。请在服务器端用于审核、用户管理、分析以及批量操作。
- **`PublicApi`**：无需身份验证即可调用的端点，适用于浏览器和移动应用。这些端点涵盖获取评论、发布、投票以及其他面向客户端的操作。

所有 SDK 还包含用于集成现有身份验证系统的 SSO 工具。TypeScript SDK 额外提供实时事件订阅，以实现即时评论功能。

### 文档

完整的 API 文档可在[docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html)查看。每个 SDK 仓库也包含生成的文档，覆盖所有可用的方法和模型。

有关 SSO 集成，请参阅我们的[SSO guide](https://docs.fastcomments.com/guide-sso.html)。所有十个 SDK 都提供使用其原生加密库的 SSO 辅助工具。

### 结论

拥有完整类型标注的服务器使得生成可靠的 OpenAPI 规范变得轻而易举，进而为十种（未来甚至更多！）语言生成客户端主要是构建自动化流程并改进我们的类型定义，使其易于使用，同时避免添加过多抽象导致 FastComments 变慢。

和所有重要发布一样，我们很高兴能够抽出时间对这些 SDK 进行优化、测试并正式发布。如果您有任何反馈，或希望我们添加某种语言，请在下方告诉我们。

干杯!

{{/isPost}}

---

---