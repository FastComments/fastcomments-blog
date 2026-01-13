---
[category:Migration]
###### [postdate]
# [postlink]從 Muut 評論遷移到 FastComments[/postlink]

{{#unless isPost}}
閱讀本篇文章以了解如何完全從 Muut 遷移到 FastComments。

這只是將 Muut 提供的小片段移除並替換為 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的代碼</a> 的問題。
您甚至可以暫時在同一網站上運行 Muut 和 FastComments 來測試和調整外觀和感覺。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助您</a>。
{{/unless}}

{{#isPost}}
### 匯出您現有的評論

FastComments 匯入工具將會遷移您的評論、用戶名稱、用戶頭像和內嵌圖片。我們將無縫地將圖片移動到我們的伺服器。

要從 Muut 的管理儀表板匯出您的網站評論和用戶數據，請轉到整合並選擇 JSON 匯出。

您會注意到，通過電子郵件獲得的結果文件有一個神秘的 "gz" 文件擴展名。如果您比較懂技術，您可能會知道這代表 "gzip"，這是一種流行且高效的文件壓縮方式。

### 不要打開 "gz" 文件

預設的 Windows 10 安裝無法打開 Muut 的文件。這沒關係，因為使用 FastComments 您不需要這樣做。我們的後端可以理解這個壓縮的文件。

之後，如果您已登錄，可以去 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">這裡匯入文件</a>。從下拉菜單中選擇 Muut 並上傳您的文件。

您必須輸入您網站的網址。因為 Muut 在匯出中並未提供這些信息。

### 等待幾分鐘

FastComments 的匯入是 "異步" 的。這意味著上傳文件和處理它是兩個獨立的步驟。

因此，根據您的文件大小，您可能會立即收到成功消息。在匯入頁面的底部有一個表格 - 每行代表一次匯入嘗試。
您可以安全地刷新此頁面以查看匯入的狀態以及迄今為止已匯入的行數。

### 完成後

當匯入完成時，無論成功與否，您都會收到一封電子郵件。您可以在文件上傳成功並在匯入頁面上看到您的匯入後關閉該頁面。它的狀態會顯示為 "已請求"，當它開始時狀態會顯示為 "運行中"。

您可以安全地重複匯入多次 - 不過如果您的匯入失敗，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">聯繫我們</a> ，以便我們可以提供幫助。

### 用 FastComments 替換 Muut 代碼

這只是將 Muut 提供的小片段移除並替換為 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的代碼</a> 的問題。
您甚至可以暫時在同一網站上運行 Muut 和 FastComments 來測試和調整外觀和感覺。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助您</a>。

### 同時遷移 URL

評論本身與 Muut 匯出中的 "鏈接" 字段相關聯，因此只要您的 URL 不變，切換就很簡單。如果您想遷移 URL 並保留您的
評論，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告訴我們</a>，發送給我們舊的和新的 URL。幫助頁面允許上傳小的文本文件，因此如果
您正在遷移的不僅僅是幾個 URL，請創建 Excel 表格。

### 總結

1. 匯出您的數據
2. 匯入 FastComments
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> 代碼替換 Muut 的 JavaScript 片段

## 為什麼 Muut 不會發送我的文件？
對於較大網站，Muut 可能無法因技術限制而創建匯出文件。我們可以抓取您現有網站並提取評論，但這可能相當定制，且由於所需的時間將要求您擁有支持套餐。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在這裡請求幫助</a>。
{{/isPost}}

---