---
[category:Moderation]

###### [postdate]

# [postlink]使用 FastComments 隱藏被標註的評論[/postlink]

{{#unless isPost}}FastComments 已新增標註功能。此外，根據被標註的次數，可以隱藏評論。{{/unless}}

{{#isPost}}

### 新功能

用戶現在可以通過 FastComments 托管的評論主題標註評論。版主可以過濾被標註的評論，並查看它們被標註的次數。

該平台還可以配置為當評論被標註達到一定數量時自動隱藏評論。

### 評論者的觀點

當用戶擁有有效的會話時，他們可以通過評論編輯菜單來標註評論。

這與以下會話類型兼容：

- 匿名會話
- FastComments.com 用戶會話（使用第三方 Cookie）
- 安全 SSO
- 簡單 SSO

在達到配置的標註閾值之前，標註的評論將繼續顯示。

### 對版主的說明

版主可以通過使用 `Flagged` 過濾器查看被標註的評論，該過濾器也可直接在 [這裡](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50) 獲得。

此外，被標註的評論的標註次數對版主和管理員可見。

注意：

- 對於通過 `Un-Approve Threshold` 被 `Un-Approved` 的評論，重置標註次數將會 `Re-Approve` 該評論。
- `Re-Approving` 被 `Flagged` 的評論將 **重置標註次數**。
- 這是一個方便的功能。

### 設定

可在 [評論管理設定頁面](https://fastcomments.com/auth/my-account/moderate-comments/settings) 設定自動隱藏被標註的評論。

### 現有客戶

我們已經將此功能推廣到所有層級的現有客戶。新客戶或現有客戶不啟用自動隱藏未批准的評論。

### 總結

我們希望您發現這組新功能有用且易於使用。

乾杯！

{{/isPost}}

---