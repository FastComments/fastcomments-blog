[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments 現已在 Zapier 上[/postlink]

{{#unless isPost}}
使用官方的 FastComments Zapier 應用程式，將您的評論連接到數千個應用程式。觸發器會在評論發佈的瞬間觸發，任何應用程式都可以在您的網站上建立評論、頁面和使用者。
{{/unless}}

{{#isPost}}

### 最新功能

現在在 [Zapier](https://zapier.com) 上有官方的 FastComments 應用程式。只需在 Zapier 編輯器中登入一次，即可將每條新評論傳送至 Slack、記錄到試算表、將評論者加入您的 CRM，或從表單提交建立評論，全部不需撰寫程式碼。

在此之前，將 FastComments 與其他工具整合需要自行架設 webhook 接收器或使用 REST API 撰寫程式碼。這兩種方式仍然可用。Zapier 應用程式適用於您不想自行執行任何程式的情況。

### 觸發器

三個觸發器，全部即時：

- **New Comment** 在評論發佈時觸發。預設僅觸發已批准且非垃圾的評論，避免將仍在審核佇列中的內容洩漏至公開頻道的 Zap。可勾選復選框以包含所有評論。
- **Updated Comment** 在評論被編輯、批准、投票、置頂或其他變更時觸發。可在 approved 欄位上過濾，將其變為「已批准評論」觸發器。
- **Deleted Comment** 在評論被刪除時觸發，並提供完整的評論內容供您記錄。

每個觸發器都有可選的網域過濾器，列出您帳號中設定的網域，讓 Zap 能夠監控多個站點中的其中一個。

這些觸發器是透過 webhook 而非輪詢實作。FastComments 會在事件發生的瞬間將其傳送至 Zapier，期間不會輪詢您的帳號，且等待不會消耗 API 點數。

### 動作與搜尋

動作會代表您呼叫 FastComments API：

- **Create Comment** 在任何頁面上建立評論，可使用具名評論者或現有的 SSO 使用者，亦可選擇作為回覆。
- **Create Page**，讓頁面在第一條評論之前即可被列出並限制給特定會員群組。
- **Create SSO User**，讓來自其他工具的會員能以自己的身份進行評論。
- **Create Feed Post** 與 **Create Hash Tag**。
- **Flag Comment** 以供審核員檢查。

搜尋用於在後續步驟中查找資料：**Find Comment** 依 ID、**Find SSO User** 依電子郵件、以及 **Find Page** 依 URL ID。將搜尋與相對應的建立動作配合使用 Zapier 的「find or create」模式，即可自動為您建立缺少的使用者或頁面。

### 幾個入門 Zap 範例

- 新評論 → Slack「Send Channel Message」；對應評論者名稱、評論內容與頁面 URL。使用網域過濾器將每個站點導向其專屬頻道。
- 新評論 → Google Sheets「Create Spreadsheet Row」，再以 Deleted Comment 追加一列作為第二個 Zap。此試算表即成為稽核紀錄。
- 已批准的更新評論 → Gmail「Send Email」，通知作者其評論已上線。
- Typeform「New Response」→ 在您的見證頁面建立評論，且不勾選 Approved，讓您在評論顯示前先行審核。
- WordPress「New Post」→ Create Page，確保每篇文章在第一條評論前已被註冊。

[指南](https://docs.fastcomments.com/guide-installation-zapier.html) 提供更多資訊，包括從您的會員工具配置 SSO 使用者的工作流程。

### 連接方式

此應用程式使用 OAuth。當您新增 FastComments 步驟時，Zapier 會詢問您的區域（美國或歐盟），將您導向 FastComments 進行登入，並顯示授權頁面，列出應用程式名稱、將要連接的帳號以及請求的權限。Zapier 不會複製任何 API 金鑰。

批准連接的人必須是該帳號的 API 管理員。帳號擁有者已具備此權限，且可在「使用者」頁面將其授予其他團隊成員。

每個連接會顯示在儀表板的 **Integrate** → **Connected Apps** 中，標示為官方整合，並顯示最近使用時間。於此撤銷即會立即斷開 Zapier 連接。啟用 Zap 會建立 webhook 訂閱，您可在 Webhooks 頁面看到來源為 **API**，關閉 Zap 則會移除該訂閱。

### 成本說明

此應用程式在所有 Zapier 計畫（包括免費方案）中皆為免費，FastComments 也不會額外收費。觸發器不會消耗 API 點數。動作與搜尋會消耗與您自行呼叫相同的點數，通常每次呼叫消耗一點。

### 文件說明

[Zapier 指南](https://docs.fastcomments.com/guide-installation-zapier.html) 包含帳號連接說明、每個觸發器與動作的欄位、範例 Zap 以及故障排除。此整合的原始碼於 [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier) 開放。

### 結論

前往 [fastcomments.com/zapier](https://fastcomments.com/zapier) 找到此應用程式，連接您的帳號，並建立您的第一個 Zap。

如往常一樣，若有任何問題，請在下方告訴我們。

乾杯!

{{/isPost}}

---