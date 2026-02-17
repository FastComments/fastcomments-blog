---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]現在可以在 UI 中配置 DKIM[/postlink]

{{#unless isPost}}
FastComments 現在提供了一個用於配置 DKIM 的 UI，使您能夠在不使用 API 的情況下更輕鬆地提高電子郵件送達率。
{{/unless}}

{{#isPost}}

### 新功能

為您的自定義電子郵件域設置 DKIM 變得更簡單了。之前，配置 DKIM 需要直接使用
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>。現在，您可以
直接在 FastComments 管理 UI 中配置 DKIM。

### 為什麼 DKIM 重要

當您自定義 FastComments 代表您發送電子郵件的發件域時，電子郵件提供商需要驗證這些電子郵件是否為合法的。DKIM（DomainKeys Identified Mail）是幫助此驗證的主要身份驗證機制之一。
如果 DKIM 配置不當，代表您的域發送的電子郵件更有可能進入垃圾郵件文件夾。

### 如何設置

導航到 <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">我的域</a> 頁面，並點擊
要配置的域的「顯示進階」選項。您將看到 DKIM 設置，您可以在此輸入您的域名、密鑰選擇器和私鑰。

保存後，該 DKIM 配置將應用於從該域發送的所有電子郵件。

### API 仍然可用

如果您更喜歡以編程方式管理 DKIM 配置，
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> 仍然可以如同以前一樣使用。

### 總結

我們希望這使得確保您的用戶能夠收到 FastComments 代表您發送的電子郵件變得更容易。如果您有任何問題，請在下面告訴我們。

乾杯！

{{/isPost}}

---