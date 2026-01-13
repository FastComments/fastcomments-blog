---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]從 Disqus 遷移到 FastComments[/postlink]

{{#unless isPost}}
閱讀這篇文章以了解如何從 Disqus 完全遷移到 FastComments。

如果您使用的是 Disqus 的通用網站整合，那麼只是刪除他們提供的小片段，並用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的</a>來替換它。
您甚至可以暫時在同一網站上同時運行 Disqus 和 FastComments，以進行測試和調整外觀。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

如果您沒有使用通用網站整合，那麼根據您的平台，說明將會有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">請與我們聯繫</a>。
{{/unless}}

{{#isPost}}
Disqus 有很多地方做得很好，但他們的不足之處正是 FastComments 可以介入的地方。

## 如果您使用 WordPress

FastComments 擁有專用的 WordPress 插件：<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

這個插件使得安裝、設置和同步變得非常簡單。如果您走這條路，您可以忽略這裡的其餘指示。

## 手動通用安裝

### 匯出您的現有評論

FastComments 匯入器將遷移您的評論、用戶名、用戶頭像和內嵌圖像。我們會無縫地將圖像移到我們的伺服器上。

Disqus 做得好的其中一件事是他們如何處理數據匯出。您會注意到，按照他們的指南步驟<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">這裡</a>操作後，您通過電子郵件獲得的結果文件有一個神秘的 "gz" 文件擴展名。如果您對技術稍微了解，您可能知道這代表 "gzip"，這是一種流行而高效的文件壓縮方式。

### 不要打開 "gz" 文件

默認的 Windows 10 安裝無法打開來自 Disqus 的文件。這沒關係，因為您在使用 FastComments 時無需開啟它。我们的后端可以理解這個壓縮文件，所以您只需按照他們的指示<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">這裡獲取該文件</a>。

之後，如果您已登錄，您可以去<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">這裡導入該文件</a>。從下拉菜單中選擇 Disqus 並上傳您的文件。

### 等待幾分鐘

FastComments 的匯入是 "異步" 的。這意味著上傳文件和處理它是分開的步驟。

因此，根據您的文件大小，您可能會立即獲得成功消息。在匯入頁面底部有一個表格 - 每一行代表一次匯入嘗試。
您可以安全地刷新此頁面以查看您的匯入狀態以及到目前為止已匯入的行數。

### 完成後

當匯入完成時，無論成功與否，您都會收到電子郵件。在文件上傳成功後，您可以關閉頁面，並在匯入頁面看到您的匯入情況。狀態會顯示為 "請求"，當它開始時狀態會顯示為 "運行中"。

可以安全地重新匯入多次 - 但是如果您的匯入失敗，則<a href="https://fastcomments.com/auth/my-account/help" target="_blank">請與我們聯繫</a>以便我們提供幫助。

### 用 FastComments 替換 Disqus 代碼

如果您使用的是 Disqus 的通用網站整合，那麼只需刪除他們提供的小片段，並用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的</a>來替換它。
您甚至可以暫時在同一網站上同時運行 Disqus 和 FastComments，以進行測試和調整外觀。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

如果您沒有使用通用網站整合，那麼說明將會根據您的平台有所不同 - 再次<a href="https://fastcomments.com/auth/my-account/help" target="_blank">請與我們聯繫</a>。

### 同時遷移網址

評論本身與 Disqus 匯出的 "鏈接" 字段相關聯，因此只要您的網址不變，切換就很簡單。如果您想遷移網址並保留您的評論，則<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告訴我們</a>，提供舊網址和新網址。幫助頁面允許上傳小型文本文件，因此如果您遷移的網址超過幾個，請創建一個 Excel 表格。

### 回顧

1. 匯出您的數據
2. 將其導入 FastComments
3. 用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a>JavaScript 片段替換 Disqus 的

## 為什麼 Disqus 不會發送我的文件？
對於大型網站，Disqus 可能因其技術限制無法創建匯出的文件。我們有能力從您現有的網站抓取數據並提取評論，但這可能需要一定的定制，並由於所需時間將要求您擁有支持套餐。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在這裡請求幫助</a>。
{{/isPost}}