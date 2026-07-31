---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
在我們的 TypeScript 移植文章中預告過，我們已發布針對十種程式語言的產生式、型別安全的客戶端 SDK。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 此文章包含技術術語

### 新功能

在我們的 [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-zh_tw.html) 中，我們提到會推出產生式的客戶端 SDK。它們現在已經上線。

FastComments 現在提供官方、型別安全的 SDK，支援 **十種語言**：

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

每個 SDK 都是根據我們伺服器產生的相同 OpenAPI 規格生成的。型別、方法簽名以及請求/回應模型會自動與實際 API 保持同步。編譯器會在程式碼發出網路請求之前，捕捉欄位名稱拼寫錯誤與缺少參數的問題。

### 運作原理

TypeScript 移植是此工作的前置條件。現在我們的伺服器程式碼已完整型別化，我們使用 [our fork of TSOA](https://github.com/FastComments/tsoa) 從路由控制器直接產生 OpenAPI 3.0 規格。再將該規格交給 [OpenAPI Generator](https://openapi-generator.tech/) ，為每種語言產生客戶端函式庫。

當 API 變更時，我們的工具會偵測規格的差異，重新產生受影響的 SDK，為每種語言執行測試，並自動開立 Pull Request。我們在 Nim 中打造了一個小型管理工具，協調所有十個儲存庫的更新、測試與發布週期。

### 每個 SDK 包含什麼

每個 SDK 提供兩個 API 類別：

- **`DefaultApi`**：需要 API 金鑰的驗證端點。請在伺服器端使用，適用於審查、使用者管理、分析與批次操作。
- **`PublicApi`**：不需驗證的端點，可安全於瀏覽器與行動應用呼叫。涵蓋取得評論、發表、投票及其他面向客戶端的操作。

所有 SDK 也都包含 SSO 工具，用於與您現有的驗證系統整合。TypeScript SDK 另提供即時事件訂閱，以支援即時評論功能。

### 文件說明

完整的 API 文件可於 [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html) 取得。每個 SDK 的儲存庫也都包含產生的文件，說明所有可用的方法與模型。

欲了解 SSO 整合，請參考我們的 [SSO guide](https://docs.fastcomments.com/guide-sso.html)。所有十個 SDK 都提供使用其原生加密函式庫的 SSO 輔助工具。

### 結論

擁有完整型別化的伺服器，使得產生可靠的 OpenAPI 規格變得相當直接，進而為十種（未來甚至更多！）語言生成客戶端主要只需要建置自動化流程，並改進我們的型別定義，使其可被使用，而不必加入過多抽象層，避免拖慢 FastComments 的效能！

如同所有重要的發佈，我們很高興能花時間優化、測試並正式釋出這些 SDK。請在下方告訴我們您的回饋，或是您希望我們加入的語言。

敬祝安好！

{{/isPost}}

---

---