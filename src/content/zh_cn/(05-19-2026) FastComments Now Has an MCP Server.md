---
[category:Features]  
[category:API & Development]  
[category:Integrations]  
###### [postdate]  
# [postlink]FastComments 现在拥有 MCP 服务器[/postlink]  
  
{{#unless isPost}}  
您现在可以将 Claude Code、Claude Desktop、Cursor 或任何其他 Model Context Protocol 客户端指向 FastComments，并直接调用我们的 API。  
{{/unless}}  
  
{{#isPost}}  
  
### 重要新功能  
  
FastComments 现在提供托管的 [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) 服务器。MCP 是 AI 编程助手用于调用服务器端工具的开放标准。将您的客户端指向一个 URL，它可以列出您的评论、对其进行审核、管理 SSO 用户、配置小部件，以及执行 [API](https://docs.fastcomments.com/guide-api.html) 提供的任何其他操作。  
  
### 它的所在位置  
  
从您的 FastComments 仪表板中，打开 **集成，然后是 MCP 服务器**，或者直接访问  
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup)。  
选择您希望客户端使用的 API 密钥，页面会生成一个预填充的 URL 和用于 Claude Code 及 Claude Desktop / Cursor 配置文件的复制粘贴片段。  
  
### Claude Code  
  
一个命令来注册：  
  
    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'  
  
然后在会话中输入 `/mcp` 将显示连接并列出服务器暴露的每个工具。可询问诸如“显示 /blog/launch 上的最后 20 条标记评论”、“在我所有站点上阻止此评论者”或“我们在过去一周的垃圾邮件捕获率是多少”等问题。Claude 会通过正确的工具调用进行路由。  
  
### Claude Desktop 和 Cursor  
  
将此块添加到您的客户端的 MCP 配置中（对于 Claude Desktop 为 `claude_desktop_config.json`，对于 Cursor 为 `mcp.json`）：  
  
```json  
{  
  "mcpServers": {  
    "fastcomments": {  
      "type": "http",  
      "url": "https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY"  
    }  
  }  
}  
```  
  
重新启动客户端，服务器将在您配置的任何其他 MCP 服务器旁边出现。  
  
### 安全性  
  
API 密钥嵌入在 URL 中，因此将 URL 本身视为一个秘密。请勿在公共聊天、截图或提交中粘贴它。如果密钥被泄露，请从 [API 密钥页面](https://fastcomments.com/auth/my-account/api-secret) 进行轮换，并重新复制设置页面上的代码片段。为了限制代理可以执行的操作，为每个助手生成一个专用的 API 密钥，并将其锁定到正确的域。设置页面上的下拉菜单允许您一键交换代码片段使用的密钥。  
  
### 我们为何构建它  
  
人们越来越多地使用代理工具进行与 SaaS 产品互动的日常任务。任何将 Claude 或 Cursor 会话连接到管理其审核队列，或自定义代理以突出值得置顶的线程的人，现在都可以完全跳过包装层。  
  
### 总结  
  
在您的仪表板中打开 [集成，然后是 MCP 服务器](https://fastcomments.com/auth/my-account/mcp-setup)，复制您最喜欢的 MCP 客户端的代码片段，你就可以开始使用了。完整文档请参阅 [LLM Kit 指南](https://docs.fastcomments.com/guide-llm-kit.html)。  
  
如往常一样，如果您遇到任何问题，请在下方告诉我们。  
  
干杯！  
  
{{/isPost}}