---
[category:API & Development]

###### [postdate]
# [postlink]使用 FastComments 設定單一登入 (SSO)[/postlink]

{{#unless isPost}}
FastComments 提供了各種平台及自訂整合的 SSO 解決方案。
{{/unless}}

{{#isPost}}

# 概述

## 什麼是 SSO？

SSO，或單一登入，是一組用來讓您或您的使用者使用 FastComments 而無需創建另一個帳號的約定。

假設您不允許匿名評論，則需要帳號來使用 FastComments 發表評論。我們使這一註冊過程變得非常簡單 - 使用者只需在評論時留下他們的電子郵件。不過，我們了解即便如此也可能給某些網站帶來不必要的摩擦。

## 我該如何獲取 SSO？

所有帳號類型目前都可以使用 SSO 以及支援。然而，最大 SSO 使用者數量將根據您的套餐而有所不同。

### WordPress 使用者

如果您使用我們的 <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> 插件，則無需撰寫任何代碼！只需前往插件的管理頁面，點擊 SSO 設定，然後啟用。

這會帶您進入一個一鍵點擊的向導，該向導將創建您的 API 密鑰，將其發送到您的 WordPress 安裝並開啟 SSO。我們已為您將其整合為單個按鈕點擊。

請注意，如果您是首次安裝該插件，則必須完成設置過程，才能看到包含 SSO 設定按鈕的管理頁面。

### 自訂整合

FastComments SSO 使用 HMAC-SHA256 加密作為實現 SSO 的機制。我們將首先介紹整體架構，提供範例和詳細步驟。然而，在本文結尾處有 **從 Disqus 和 Commento 遷移** 的說明。

流程如下：

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

您不必為 FastComments SSO 編寫任何新的 API 端點。只需使用您的密鑰對用戶的信息進行加密，並將有效載荷傳遞到評論小部件。

我們提供了幾種語言/運行時的完整功能代碼範例，包括 NodeJS、Java/Spring 和純 PHP。儘管在 NodeJS 範例中我們使用了 ExpressJS，在 Java 範例中則使用了 Spring，但在這些運行時中，實現 FastComments SSO 不需要任何框架/庫 - 原生的加密包就可以工作。

您可以在這裡找到代碼範例庫：

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO 代碼範例</a>

#### 獲取您的 API 密鑰

您的 API 秘密可以從 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">這個頁面</a> 獲取。您也可以通過前往我的帳號，點擊 API/SSO 磁貼，然後點擊“獲取 API 密鑰”來找到這個頁面。

#### 評論小部件參數

有關評論小部件的高級 API 文檔可以在 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">這裡</a> 找到，並點擊“顯示高級選項”。在頁面中搜索 SSO。

讓我們更詳細地討論這些參數的含義。

評論小部件接受一個配置對象 - 如果您使用 FastComments 傳遞客戶 id（稱為 tenantId），則已經傳遞了這個對象。

要啟用 SSO，傳遞一個新的 "sso" 對象，該對象必須具有以下參數。這些值應在 **伺服器端** 生成。

- userDataJSONBase64：用戶的 JSON 格式數據，然後進行 Base64 編碼。
- verificationHash：根據 UNIX_TIME + userDataJSONBase64 創建的 HMAC-SHA256 散列。
- timestamp：當前的 unix 時間。**不得為未來的時間，或過去三小時以上的時間。**
- loginURL：評論小部件可以顯示以讓用戶登錄的 URL。
- logoutURL：評論小部件可以顯示以讓用戶登出的 URL。
- loginCallback：提供的情況下，作為登錄 URL 的一個函數，當用戶點擊登錄按鈕時，評論小部件將調用該函數。
- logoutCallback：提供的情況下，作為登出 URL 的一個函數，當用戶點擊登出按鈕時，評論小部件將調用該函數。

#### 用戶對象

用戶對象包含以下架構：

- id (string, required) (最大 1k 字符)
- email (string, required) (最大 1k 字符)。注意：必須是唯一的。
- username (string, required) (最大 1k 字符)。注意：用戶名不能是電子郵件。不必是唯一的。
- avatar (string, optional) (最大 3k 字符)
- optedInNotifications (boolean, optional)
- displayLabel (string, optional, 最大 100 字符)。此標籤將顯示在他們的名稱旁邊。
- websiteUrl (string, optional, 最大 2000 字符)。用戶的名稱將鏈接到此。

#### 通知

要啟用或禁用通知，請將 optedInNotifications 的值設置為 true 或 false。用戶第一次使用該值加載 SSO 有效載荷時，他們的通知設置將被更新。

#### VIP 用戶與特殊標籤

您可以通過使用可選的 "displayLabel" 欄位，在用戶的名稱旁邊顯示特殊標籤。

#### 未經身份驗證的用戶

要表示未經身份驗證的用戶，請簡單地不填充 userDataJSONBase64、verificationHash 或 timestamp。提供 loginURL。

#### 序列化和雜湊用戶數據的直接範例

更多範例詳細信息請參考 <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">這裡 (js)</a>、<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">這裡 (java)</a> 和 <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">這裡 (php)</a>。

### 從 Disqus SSO 遷移

Disqus 和 FastComments SSO 之間最大的區別在於 Disqus 使用 SHA1 進行加密，而我們使用 SHA256。這意味著從 Disqus 遷移非常簡單 - 將使用的雜湊算法從 SHA1 更改為 SHA256，然後更新傳遞給 UI 的屬性名稱。

### 從 Commento SSO 遷移

Commento 採用截然不同的 SSO 方法 - 他們要求您擁有一個端點，以便他們調用來驗證用戶。FastComments 則正好相反 - 輕鬆地使用您的秘密金鑰編碼和雜湊用戶信息並傳遞下去。

我們知道任何整合都可能是一個複雜且痛苦的過程。請隨時聯繫您的代表或使用 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">支援頁面</a>。

{{/isPost}}

---