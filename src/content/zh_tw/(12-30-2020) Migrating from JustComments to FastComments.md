---
[category:Migration]
###### [postdate]
# [postlink]從 JustComments 遷移到 FastComments[/postlink]

{{#unless isPost}}
閱讀本文以查看如何完全從 JustComments 遷移到 FastComments。

這通常只需移除他們提供的小程式碼片段，並用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的程式碼</a> 替換即可。
您甚至可以在同一網站上暫時運行 JustComments 和 FastComments，以測試和調整外觀。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助您</a>。
{{/unless}}

{{#isPost}}

從 2021 年開始，JustComments 將關閉。在 FastComments，我們已經讓您輕鬆切換到我們的平台。

您會發現 FastComments 提供許多您習慣的功能，還有更多。

## 價格差異

雖然 JustComments 使用基於信用的系統，但 FastComments 使用分級模型，提供三個級別可供選擇。使用 FastComments，我們的 $5/月 計劃
涵蓋每月最多 100 萬次頁面加載。超過這個數量的為 Pro 和 Enterprise 計劃，您可以在我們的 <a href="https://fastcomments.com/traffic-pricing" target="_blank">定價頁面</a> 查看。

## 如果您使用 WordPress

FastComments 有一個專用的 WordPress 插件： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

這個插件使安裝、設置和同步變得非常容易。然而，JustComments 不會像 FastComments
那樣將您的評論同步回您的 WordPress 安裝。這意味著在同步後，您需要按照下面的導出和導入步驟進行操作。

## 導出您現有的評論

FastComments 匯入工具將遷移您的評論、用戶名稱、用戶頭像和內嵌圖像。我們將無縫地將圖像移到我們的伺服器上。

要從 JustComments 下載您的評論數據，請轉到您的帳戶頁面。

## 將數據導入 FastComments 管理後台

無需擔心打開 JustComments 導出的文件。

如果您已登錄，可以 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">點擊這裡導入該文件</a>。

從下拉菜單中選擇 JustComments 並上傳您的文件。

### 頁面識別符

在進行導入時，您將看到選擇頁面 URL 或“項目 ID”的選項。如果您不確定應該選擇哪一個，請選擇頁面 URL。如果您與 JustComments
的集成中在小部件配置中指定了項目 ID，則選擇項目 ID。

### 等待幾分鐘

FastComments 的匯入是“異步”的。這意味著上傳文件和處理之間是分開的步驟。

因此，根據您的文件大小，您可能會立即收到成功消息。在匯入頁面的底部有一個表格 - 每一行代表一次匯入嘗試。
您可以安全地刷新此頁面以查看您的匯入狀態以及到目前為止已匯入的行數。

### 完成後

當匯入完成時，您將收到一封電子郵件 - 無論成功與否。文件上傳成功後，您可以關閉頁面，並在匯入頁面看到匯入結果。狀態會顯示為“已請求”，當它開始時狀態將顯示為“運行中”。

重新導入多次是安全的 - 但是如果您的匯入失敗，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">與我們聯繫</a>，以便我們可以提供幫助。

### 用 FastComments 替換 JustComments 代碼

如果您不使用 JustComments 的 WordPress 插件，那麼只需移除他們提供的小程式碼片段，並用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的程式碼</a> 替換即可。
您甚至可以在同一網站上暫時運行 JustComments 和 FastComments，以測試和調整外觀。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助您</a>。

### 同時遷移 URL

評論本身在 JustComments 導出中默認綁定到“pageUrl”字段，因此只要您的 URL 不更改，切換就簡單。如果您想遷移 URL 並保留您的
評論，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告訴我們</a>，並提供舊的和新的 URL。幫助頁面允許上傳小文本文件，因此如果
您要遷移的不僅僅是幾個 URL，請創建一個 Excel 表。

## 總結

1. 導出您的數據
2. 將其導入 FastComments
3. 如果不在 WordPress 上，將 JustComments 的 JavaScript 代碼片段更換為 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a>

{{/isPost}}