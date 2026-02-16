---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]生成的類型安全客戶端 SDK 已發布[/postlink]

{{#unless isPost}}
在我們的 TypeScript 遷移文章中提到，我們已經為十種程式語言發布了生成的類型安全客戶端 SDK。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 新聞內容

在我們的 [TypeScript 遷移文章](/blog/fastcomments-typescript-migration-completed) 中，我們提到生成的客戶端 SDK 即將推出。它們已經來了。

FastComments 現在提供官方的、類型安全的 SDK，支持 **十種語言**：

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

每個 SDK 都是根據我們的伺服器生成的相同 OpenAPI 規範生成的。類型、方法簽名以及請求/回應模型會自動與實際 API 保持同步。您的編譯器會在您的程式碼發出網路請求之前捕捉到字段名稱錯誤和遺漏的參數。

### 運作方式

TypeScript 的遷移是這一切的前提。現在我們的伺服器代碼完全類型化，我們使用 [我們的 TSOA 分支](https://github.com/FastComments/tsoa) 直接從我們的路由控制器生成 OpenAPI 3.0 規範。然後將該規範輸入到 [OpenAPI Generator](https://openapi-generator.tech/) 中，為每種語言生成客戶端庫。

當 API 發生變更時，我們的工具會檢測規範中的差異，重新生成受影響的 SDK，為每種語言運行測試，並自動提交拉取請求。我們在 Nim 中構建了一個小型管理工具，用以協調所有十個儲存庫的更新-測試-發佈周期。

### 每個 SDK 包含什麼

每個 SDK 提供兩個 API 類：

- **`DefaultApi`**: 需要您的 API 金鑰的身份驗證端點。用於伺服器端的內容管理、用戶管理、分析和批量操作。
- **`PublicApi`**: 可以安全地從瀏覽器和移動應用調用的未經身份驗證端點。這些涵蓋了獲取評論、發表、投票和其他面向客戶的操作。

所有 SDK 也包括用於與您現有身份驗證系統整合的 SSO 工具。TypeScript SDK 額外提供即時事件訂閱以實現即時評論功能。

### 文件

完整的 API 文件可在 [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html) 獲得。每個 SDK 儲存庫也包括涵蓋每個可用方法和模型的生成文件。

有關 SSO 整合的資訊，請參閱我們的 [SSO 指南](https://docs.fastcomments.com/guide-sso.html)。所有十個 SDK 都包含使用其本地加密庫的 SSO 助手。

### 結論

擁有完全類型化的伺服器使生成可靠的 OpenAPI 規範變得簡單，從這裡出發，為十種（將來可能更多！）語言生成客戶端大多是構建自動化和改善我們的類型定義的問題，以便於消費，而不會添加太多抽象來拖慢 FastComments 的運行速度！

像所有主要版本一樣，我們很高興能夠花時間來優化、測試和妥善發布這些 SDK。如果您有任何反饋或希望我們添加的語言，請在下方告訴我們。

乾杯！

{{/isPost}}

---

---