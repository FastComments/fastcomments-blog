---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]生成的类型安全客户端SDK已发布[/postlink]

{{#unless isPost}}
在我们的TypeScript迁移帖子中提到过，我们为十种编程语言发布了生成的类型安全客户端SDK。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 最新动态

在我们的[TypeScript迁移帖子](/blog/fastcomments-typescript-migration-completed)中，我们提到过生成的客户端SDK即将推出。现在它们已经到来了。

FastComments现在提供**十种语言**的官方类型安全SDK：

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

每个SDK都是基于我们的服务器生成的相同OpenAPI规范生成的。类型、方法签名和请求/响应模型与实际API保持同步。你的编译器可以在代码发起网络请求之前捕获字段名称的拼写错误和缺失的参数。

### 工作原理

TypeScript迁移是这个的前提条件。现在我们的服务器代码完全类型化，我们使用[我们对TSOA的分支](https://github.com/FastComments/tsoa)直接从我们的路由控制器生成OpenAPI 3.0规范。该规范输入到[OpenAPI Generator](https://openapi-generator.tech/)中，以生成每种语言的客户端库。

当API发生变化时，我们的工具会检测规范中的差异，重新生成受影响的SDK，为每种语言运行测试，并自动打开拉取请求。我们在Nim中构建了一个小型管理工具，协调十个仓库之间的更新-测试-发布周期。

### 每个SDK的内容

每个SDK提供两个API类：

- **`DefaultApi`**：需要你的API密钥的经过身份验证的端点。在服务器端使用这些接口进行内容审核、用户管理、分析和批量操作。
- **`PublicApi`**：可以安全从浏览器和移动应用调用的未经过身份验证的端点。这些覆盖获取评论、发布、投票和其他客户端面对的操作。

所有SDK还包括用于与现有身份验证系统集成的SSO工具。TypeScript SDK还提供实时事件订阅，以支持实时评论。

### 文档

完整的API文档可在[docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html)访问。每个SDK仓库还包括涵盖每个可用方法和模型的生成文档。

有关SSO集成，请参阅我们的[SSO指南](https://docs.fastcomments.com/guide-sso.html)。所有十个SDK都包括使用其本地加密库的SSO助手。

### 总结

拥有一个完全类型化的服务器使得生成一个可靠的OpenAPI规范变得简单，从而为十种（未来更多！）语言生成客户端主要是构建自动化并改善我们的类型定义，以使其可消费，而不增加过多的抽象来降低FastComments的速度！

与所有重大发布一样，我们很高兴能够抽出时间来优化、测试和正确发布这些SDK。如果你有任何反馈或希望我们添加一种语言，请在下方告诉我们。

干杯！

{{/isPost}}

--- 

---