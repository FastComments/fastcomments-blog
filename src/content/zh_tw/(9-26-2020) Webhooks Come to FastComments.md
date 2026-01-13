---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks 來到 FastComments[/postlink]

{{#unless isPost}}
FastComments 現在可以調用您的 API 來創建、更新和刪除評論。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 新功能

使用 FastComments 現在可以在添加、更新或刪除我們系統中的評論時調用 API 端點。

我們通過 HTTP/HTTPS 的異步 webhook 實現這一點。

#### 如何使用

首先，導航到 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks 管理</a>。您可以通過管理數據 -> Webhooks 訪問此功能。

在那裡，您可以為每種類型的評論事件指定端點。

對於每種類型的事件，請務必點擊 **發送測試有效載荷** 以確保您正確設置了集成。詳情請參見下一節“測試”。

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Webhooks 設置示例" title="Webhooks 設置示例" class="lozad" />
</div>

#### 測試

在 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks 管理</a> 中，每種類型的事件（創建、更新、刪除）都有“發送測試有效載荷”按鈕。創建和更新事件將發送一個虛擬的 WebhookComment 對象，而測試刪除將僅發送一個包含 ID 的虛擬請求主體。

測試將進行兩次調用來驗證“快樂”（正確的 API 密鑰）和“悲傷”（無效 API 密鑰）場景的響應代碼。

當測試發送無效的 API 密鑰時，您應該返回 401 的狀態碼，以使測試完全通過。如果您未正確檢查令牌的值，將看到如下錯誤：

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhooks 認證測試失敗" title="Webhooks 認證測試失敗" class="lozad" />
</div>

#### 評論對象結構
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### “創建”事件結構

“創建”事件請求主體是一個 WebhookComment 對象。

#### “更新”事件結構

“更新”事件請求主體是一個 WebhookComment 對象。

#### “刪除”事件結構

“刪除”事件請求主體是一個 WebhookComment 對象，**但僅包含 id**。

#### 為什麼創建和更新都使用 HTTP PUT 而不是 POST？

**因為我們的所有請求都包含一個 ID**，重複相同的創建或更新請求**不應該在您的端創建新的對象**。這意味著這些調用是幂等的，應該根據 HTTP 規範使用 PUT 事件。

#### 它是如何工作的

系統中對評論對象的所有更改都會觸發一個事件，該事件會進入隊列。您可以在 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks 管理</a> 中監控該隊列，以防您的 API 出現故障。如果請求您的 API 失敗，我們將按計劃重新放入隊列。該計劃為 1 分鐘 * 重試次數。如果調用失敗一次，將在一分鐘後再試。如果它失敗兩次，則會等待兩分鐘，依此類推。這樣可以防止在您因過載相關原因而下線的情況下對您的 API 造成額外負擔。

#### 安全性與 API 令牌

在請求標頭中，我們將通過名為“token”的參數傳遞您的 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API 密鑰</a>。

如果您未正確檢查此參數，您的集成將不會標記為已驗證。這是一項保護措施，以確保與 FastComments 的任何集成都安全。

#### 總結

我們希望您發現 FastComments Webhook 集成易於理解且快速設置。

如果您有進一步的問題，請隨時聯繫 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">客戶支持頁面</a>。

乾杯！

{{/isPost}}

---