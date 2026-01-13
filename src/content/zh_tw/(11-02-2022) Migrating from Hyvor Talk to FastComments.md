---
[category:Migration]
###### [postdate]
# [postlink]從 Hyvor Talk 遷移到 FastComments[/postlink]

{{#unless isPost}}
閱讀本文以了解如何將解決方案從 Hyvor Talk 完全遷移到 FastComments。

如果您使用的是與 Hyvor Talk 的手動代碼安裝，那麼只需刪除他們提供的小代碼片段，並將其替換為 <a href="https://fastcomments.com/install-wizard" target="_blank">我們自己的代碼</a>。
您甚至可以暫時在同一網站上運行 Hyvor 和 FastComments 以測試和調整外觀和感覺。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

如果您不是使用代碼片段進行安裝，則根據您的平台，說明將會有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">聯繫我們</a>。
{{/unless}}

{{#isPost}}

## 如果您使用的是 WordPress

FastComments 有一個專用的 WordPress 插件：<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

該插件使安裝、設置和同步變得非常簡單。如果您選擇這條路徑，則可以忽略此處的其餘說明。只需確保
您已將 Hyvor Talk 評論同步回您的 WordPress 安裝。

如果這對您不起作用，正如我們的一些客戶所報告的，您可能需要使用我們的 WordPress 插件，但通過手動從 Hyvor Talk 導出來執行數據導入。
您可以在 [管理數據 -> 導入評論](https://fastcomments.com/auth/my-account/manage-data/import) 中找到數據導入。

## 手動、通用安裝

### 導出您現有的評論

FastComments 的導入工具將遷移您的評論線程、用戶名、用戶頭像、表情符號和內聯圖像。我們將無縫地將圖像移動到我們的伺服器上。

截至 2022 年，Hyvor Talk 不會導出電子郵件或上下投票。如果您能夠從他們那裡獲取包含這些信息的導出，我們可以進行導入。

### 導入 .JSON 文件

在您下載 Hyvor 導出之後，登錄到您的 FastComments 儀表板並前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">此處導入文件</a>。從下拉列表中選擇 Hyvor Talk，然後上傳您的文件。

### 等待幾分鐘

FastComments 的導入是「異步」的。這意味著上傳文件和處理它是分開的步驟。

因此，根據您的文件大小，您可能會立即收到成功消息。在導入頁面的底部有一個表格 - 每一行表示一次導入嘗試。
您可以安全地刷新此頁面以查看您的導入狀態以及迄今為止已導入的行數。

### 完成後

當導入完成時，無論成功與否，您都會收到一封電子郵件。文件上傳成功之後，您可以關閉頁面，並在導入頁面上查看您的導入。它的狀態會顯示為「已請求」，當其開始時狀態會變為「運行中」。

可以安全地重新導入多次 - 但是如果您的導入失敗，請 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">聯繫我們</a>，以便我們可以提供幫助。

### 用 FastComments 替換 Hyvor Talk 的代碼

如果您使用的是與 Hyvor 的代碼片段安裝，那麼只需刪除他們提供的小代碼片段，並將其替換為 <a href="https://fastcomments.com/install-wizard" target="_blank">我們自己的代碼</a>。
我們還支持許多前端框架 [您可以在這裡找到](https://fastcomments.com/install-wizard)。您甚至可以在同一網站上暫時運行 Hyvor 和 FastComments 以測試和調整外觀和感覺。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

如果您不是使用代碼片段進行安裝，則根據您的平台，說明將會有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">聯繫我們</a>。

我們在這裡提供了一個自助服務安裝向導 [here](https://fastcomments.com/install-wizard)。

### 同時遷移 URLs

評論本身與導出中的頁面 ID 字段相關聯，因此只要您的 URLs 沒有變更，切換就很簡單。如果您想要遷移 URLs 並保留您的
評論，那麼 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">請告訴我們</a>，通過發送舊的和新的 URLs。幫助頁面允許上傳小文本文件，因此如果
您要遷移的不僅僅是幾個 URL，請創建一個 Excel 表格。

### 歐盟

如果您在歐盟，您可能希望在 [eu.fastcomments.com](https://eu.fastcomments.com) 上創建您的帳戶，以便您的客戶數據保持在歐盟內。

### 回顧

1. 導出您的數據
2. 導入到 FastComments
3. 用 <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments 的</a> JavaScript 代碼片段進行替換

## 為什麼 Hyvor 不會發送我的文件？
對於較大的網站，Hyvor 可能無法由於技術限制生成導出文件。我們有能力抓取您現有的網站並抓取其上的評論，然而，這可能是
相當自定義的並且由於涉及的時間需要您擁有支持包。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在這裡請求幫助</a>。
{{/isPost}}

---