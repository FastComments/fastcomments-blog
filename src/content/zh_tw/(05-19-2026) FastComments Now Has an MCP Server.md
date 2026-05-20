---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments 現在有 MCP 伺服器[/postlink]

{{#unless isPost}}
您現在可以將 Claude Code、Claude Desktop、Cursor 或任何其他模型上下文協議客戶端指向 FastComments，並直接調用我們的 API。
{{/unless}}

{{#isPost}}

### 新增功能

FastComments 現在提供一個託管的 [模型上下文協議](https://modelcontextprotocol.io/) (MCP) 伺服器。MCP 是開放標準，AI 編碼助手用於調用伺服器端工具。將您的客戶端指向一個 URL，便可以列出您的評論、進行版主管理、管理 SSO 用戶、配置小工具，以及任何其他 [API](https://docs.fastcomments.com/guide-api.html) 能做的事情。

### 存在的位置

從您的 FastComments 儀表板中，打開 **整合，然後是 MCP 伺服器**，或直接訪問
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup)。
選擇您希望客戶端使用的 API 金鑰，該頁面將生成一個已填充的 URL 以及 Claude Code 和 Claude Desktop / Cursor 配置文件的複製粘貼片段。

### Claude Code

註冊的指令：

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

然後在會話中輸入 `/mcp` 會顯示連接並列出伺服器所暴露的每個工具。可以詢問類似 "顯示我在 /blog/launch 上最後 20 條被標記的評論"、"在我所有網站上封鎖這位評論者" 或 "我們在過去一周的垃圾郵件捕獲率是多少" 的問題。Claude 會通過正確的工具調用進行路由。

### Claude Desktop 和 Cursor

將此區塊添加到您的客戶端的 MCP 配置中（`claude_desktop_config.json` 用於 Claude Desktop，`mcp.json` 用於 Cursor）：

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

重新啟動客戶端，伺服器將與您配置的任何其他 MCP 伺服器一起出現。

### 安全性

API 金鑰嵌入在 URL 中，因此請將 URL 本身視為秘密。不要將其粘貼到公共聊天、截圖或提交中。如果暴露了金鑰，請從 [API 金鑰頁面](https://fastcomments.com/auth/my-account/api-secret) 進行旋轉並重新從設置頁面複製片段。為了限制代理的權限，為每個助手生成專用的 API 金鑰並將其鎖定到正確的域。設置頁面上的下拉菜單允許您一鍵切換片段使用的金鑰。

### 為什麼我們構建它

人們在日常任務中與 SaaS 產品進行交互時，越來越多地使用代理工具。任何將 Claude 或 Cursor 會話連接到其版主管理隊列的用戶，或自定義代理以顯示值得固定的主題，現在都可以完全跳過包裝層。

### 結論

在您的儀表板中打開 [整合，然後是 MCP 伺服器](https://fastcomments.com/auth/my-account/mcp-setup)，複製您最喜歡的 MCP 客戶端的片段，您便可以開始使用了。完整的文檔在 [LLM Kit 指南](https://docs.fastcomments.com/guide-llm-kit.html) 中。

如常，請在下方告訴我們您是否遇到任何問題。

乾杯！

{{/isPost}}