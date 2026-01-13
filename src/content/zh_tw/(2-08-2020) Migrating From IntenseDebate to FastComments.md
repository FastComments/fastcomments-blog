---
[category:Migration]

###### [postdate]
# [postlink]從 IntenseDebate 遷移至 FastComments[/postlink]

{{#unless isPost}}
閱讀本文以展示如何將 IntenseDebate 完全遷移至 FastComments。
{{/unless}}

{{#isPost}}
## 如果你在使用 WordPress

FastComments 有一個專用的 WordPress 外掛： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

這個外掛使安裝、設置和同步變得非常簡單。如果你選擇這條路徑，你可以忽略這裡的其他指示。

## 手動通用安裝

### 導出你現有的評論

要從 IntenseDebate 的管理儀表板導出你的網站的評論和用戶數據，請轉到 Sites -> Your Site -> Tools -> XML Export。

你會注意到通過電子郵件獲得的結果文件有一個神秘的 "gz" 文件擴展名。如果你對技術比較熟悉，可能知道這代表 "gzip"，它是一種流行且高效的壓縮文件方式。

### 不要打開 "gz" 文件

默認的 Windows 10 安裝將無法打開 IntenseDebate 的文件。這沒關係，因為你在使用 FastComments 時不必這樣做。我們的後端能夠理解這個壓縮文件。

之後，如果你已登入，可以 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在這裡導入文件</a>。從下拉菜單中選擇 IntenseDebate，然後上傳你的文件。

### 等待幾分鐘

FastComments 的導入是 "非同步" 的。這意味著上傳文件和處理它是分開的步驟。

因此，根據你的文件大小，你可能會立即收到成功消息。在導入頁面的底部有一個表格 - 每一行代表一次導入嘗試。
你可以安全地刷新此頁面以查看導入的狀態以及到目前為止已導入了多少行。

### 完成時

當導入完成時，你會收到電子郵件 - 不管成功與否。當文件上傳成功且你在導入頁面上看到你的導入後，可以關閉該頁面。它的狀態將顯示為 "Requested"，當它開始時狀態將顯示為 "Running"。

重複導入多次是安全的 - 不過如果你的導入失敗，那麼 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">請聯繫我們</a>，讓我們幫助你。

### 用 FastComments 替換 IntenseDebate 代碼

這只是移除 IntenseDebate 提供的小片段並將其替換為 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們自己的代碼</a> 的問題。
你甚至可以暫時在同一網站上運行 IntenseDebate 和 FastComments 以測試和調整外觀。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以幫助你</a>。

如果你正在使用 IntenseDebate 小工具並想要替換它們，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">在這裡聯繫我們</a>。

### 同時遷移 URL

評論本身與 IntenseDebate 導出中的 "link" 字段相關聯，因此只要你的 URL 不變，切換就很簡單。如果你希望遷移 URL 並保留你的評論，那麼 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">請告訴我們</a>，並將舊的和新的 URL 發送給我們。幫助頁面允許上傳小文本文件，因此如果你要遷移的不僅僅是幾個 URL，可以創建一個 Excel 表格。

### 總結

1. 導出你的數據
2. 導入到 FastComments
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 片段替換 IntenseDebate 片段

## 為什麼 IntenseDebate 不會將我的文件發送給我？
對於較大的網站，IntenseDebate 可能無法由於技術限制而創建導出的文件。我們有能力抓取你現有的網站並提取評論，但這可能相當自定義，且由於所需時間，將要求你擁有支持套餐。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">你可以在這裡請求幫助</a>。
{{/isPost}}

---