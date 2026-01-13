---
[category:Migration]
###### [postdate]
# [postlink]從 Commento 遷移到 FastComments[/postlink]

{{#unless isPost}}
閱讀本篇文章以了解如何全面遷移從 Commento 到 FastComments。

## 注意事項

Commento 不提供完整的 URL。他們所提供的僅僅是評論串所屬的域名 - 像是 "fastcomments.com/some-page"。這意味著 FastComments 的導入工具必須假設協議是什麼，默認為 https。如果你執行導入後，未看到你的數據，你可能需要檢查你的網站是否已妥善保護。
{{/unless}}

{{#isPost}}
### 匯出現有的評論

要從 Commento 匯出你網站的評論和用戶數據，請從他們的管理面板進入一般設置，然後選擇匯出數據。

你會注意到通過電子郵件收到的結果文件具有神秘的 "gz" 文件擴展名。如果你稍微懂一些技術，你可能知道這代表 "gzip"，這是一種流行且高效的文件壓縮方式。

### 不要打開 "gz" 文件

預設的 Windows 10 安裝無法打開來自 Commento 的文件。這沒關係，因為你不需要這樣做，FastComments 的後端能夠理解這個壓縮文件。

之後，如果你已登錄，可以 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在這裡導入該文件</a>。從下拉菜單中選擇 Commento 並上傳你的文件。

### 等待幾分鐘

FastComments 的導入是 "異步" 的。這意味著上傳文件和處理是兩個不同的步驟。

因此，根據你的文件大小，你可能會立即收到成功消息。在導入頁面的底部有一個表格 - 每一行代表一次導入嘗試。你可以安全地刷新此頁面以查看你的導入狀態及目前已導入多少行。

### 完成時

當導入完成時，你會收到一封電子郵件 - 無論成功與否。文件上傳成功後，你可以關閉該頁面，並在導入頁面中查看到你的導入。狀態會顯示為 "已請求"，當開始時狀態會顯示為 "運行中"。

可以安全地重新導入多次 - 但是如果你的導入失敗，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">聯繫我們</a>，讓我們幫助你。

### 用 FastComments 替換 Commento 代碼

這只是簡單地刪除 Commento 提供的小片段，並用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們自己的</a> 代碼替換掉而已。你甚至可以臨時在同一個網站上運行 Commento 和 FastComments，以測試和調整外觀和感覺。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供協助</a>。

### 同時遷移 URL

評論本身與 Commento 匯出中的 "link" 字段綁定，因此，只要你的 URL 不變，切換就很簡單。如果你想要遷移 URL 並保留你的評論，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告訴我們</a>，提供舊的和新的 URL。幫助頁面允許上傳小文本文件，所以如果你要遷移的 URL 超過幾個，請創建一個 Excel 表格。

### 總結

1. 匯出你的數據
2. 導入到 FastComments 
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 片段替換 Commento 的片段

## 注意事項

Commento 不提供完整的 URL。他們所提供的僅僅是評論串所屬的域名 - 像是 "fastcomments.com/some-page"。這意味著 FastComments 的導入工具必須假設協議是什麼，默認為 https。如果你執行導入後，未看到你的數據，你可能需要檢查你的網站是否已妥善保護。

## 為什麼 Commento 不會寄送我的檔案？
對於較大型的網站，Commento 可能無法因為他們那邊的技術限制而創建匯出文件。我們有能力抓取你現有的網站並提取評論，但這可能會相對自定義，並且由於涉及的時間，你需要擁有支持套餐。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">你可以在這裡請求幫助</a>。
{{/isPost}}

---