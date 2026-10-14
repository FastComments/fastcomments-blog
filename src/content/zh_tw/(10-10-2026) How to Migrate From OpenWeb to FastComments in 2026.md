[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]如何在 2026 年從 OpenWeb 遷移到 FastComments[/postlink]

{{#unless isPost}}
針對從 OpenWeb（前身為 Spot.IM）遷移的出版商的功能逐項指南：哪些是一對一對應，哪些不同，CSV 匯入如何運作，SSO 握手如何變更，以及一步步的切換計畫。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 此文章包含技術術語

本指南針對目前使用 OpenWeb 並需要遷移計畫的產品與工程主管以及社群經理。它會逐一檢視每個 OpenWeb 介面，列出 FastComments 的對應項目，並明確說明哪些沒有一對一對應。

### 為何現在

2026 年 9 月 30 日，特拉維夫地方法院應其債權人 Mars Growth Capital 的請求，任命臨時接管人管理 OpenWeb，該債權人對公司資產與帳戶擁有第一順位留置權，並正著手對 OpenWeb 的以色列資產、銀行帳戶與智慧財產權執行 (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>)。次日任命了臨時受託人 Adv. Ehud Gindes (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>)。2026 年早些時候，OpenWeb 最大的客戶之一 Microsoft 終止合作，並因流量爭議扣留付款，OpenWeb 否認該爭議 (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>)。

OpenWeb 表示平台仍在運作。法院監督、債權人對您評論小工具所依賴的智慧財產權執行留置權，以及受託人負責保值的角色，都不是出版商在核心互動介面上希望面對的情況。如果您尚未完整匯出資料，請先立即執行，於本指南的其他步驟之前先完成此動作。

### 開始前需要的項目

- **Your OpenWeb comment export.** OpenWeb exposes an Export API (v4) that produces zipped CSV files, at most 100,000 comments per file, with date-range windows of up to one month and download links that expire after a week (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Request every window you need and keep the files somewhere safe. If your OpenWeb contact has provided an Admin Panel CSV export in the past, keep that too. The FastComments importer reads the OpenWeb CSV with columns such as `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` and `url`.
- **Your Spot ID and the list of post IDs.** Every `data-post-id` you pass to the launcher becomes a FastComments URL ID. If your post IDs are CMS article IDs, note how they are generated so you can emit the same values on the FastComments side.
- **Your SSO user list.** Specifically the `primary_key` and `user_name` values you registered with OpenWeb. Comment authorship is matched on username during import, so you want to pass the same usernames in the FastComments SSO payload.
- **Your moderator list and roles.** Admin, moderator and journalist accounts, and which sections each moderates.
- **Your moderation configuration.** Site-wide policy (approve all, publish and moderate, require approval), per-article overrides, restricted word list, muted and banned users.
- **Custom CSS and theme settings.** Export anything you have in the Admin Panel so you can rebuild it in the FastComments widget customization page.
- **Where the launcher lives in your templates**, including any pages that run Reactions, Topic Tracker, Spotlight, the Notification Bell or a Standalone Ad without a Conversation.

### AI 輔助遷移

FastComments 提供一個 [LLM Kit and MCP server to speed up the migration](https://docs.fastcomments.com/guide-llm-kit.html) 以加速遷移。

### OpenWeb 文章 ID 如何映射到 FastComments URL ID

FastComments ties a comment thread to a `urlId`. By default the URL ID is the cleaned page URL, but you can set it to any string, and that is exactly what the OpenWeb importer does: it reads the `post_id` column and uses it as the FastComments URL ID for every comment on that article. It also stores the `url` column as the display URL so moderation links and notification emails point at the right page.

所以您的模板規則是：無論您在 OpenWeb 中傳遞 `data-post-id="POST_ID"` 與 `data-post-url="ARTICLE_URL"`，都改為在 FastComments 中傳遞 `urlId: 'POST_ID'` 與 `url: 'ARTICLE_URL'`。匯入的串接會與即時串接對齊，且不會產生重新導向或 URL 重寫。請參閱 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">the URL ID docs</a>。

如果您偏好未來以 URL 為鍵而非文章 ID，先匯入，然後在 Manage Data 下使用 Migrate Comments 工具批次將串接從文章 ID 移至 URL。

### 功能對照表

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Notes |
| --- | --- | --- |
| 即時更新的對話 | 具即時評論功能的評論小工具 | 預設即時。新評論會折疊在「顯示 N 條新評論」按鈕後，或使用 `showLiveRightAway` 即時顯示。 |
| 評論的讚與倒讚 | 上下投票 | 匯入會保留 `likes_count` 與 `dislikes_count`。心形樣式與「停用投票」為設定選項。 |
| 反應（文章層級圖示） | 頁面反應 | 可在頁面上設定圖示集合，並記憶每位使用者的選擇。 |
| 回覆與串接 | 串接回覆，無限制深度 | `maxReplyDepth` 限制巢狀層級。 |
| 排序：最佳、最新、最舊 | 最相關、最新優先、最舊優先 | `defaultSortDirection` 設定每個站點或每個 URL 模式的預設排序。 |
| 使用者個人檔案 | 使用者個人檔案 | 頭像、簡介、徽章、積分、活動、私訊。支援 SSO 使用者。 |
| 作者徽章 | `displayLabel`、`isAdmin`、`isModerator`、徽章 | 在 SSO payload 中設定。無需後端查詢。 |
| 置頂即時部落格更新、突顯評論 | 在任何評論上置頂與取消置頂 | 版主可從小工具或儀表板置頂。AI 代理範本會置頂最高投票的評論。 |
| 對話內投票 | 評論投票 | 2 到 10 個選項、關閉日期、隱私模式、創建者限制。 |
| Ask Me Anything 形式 | 無專屬產品 | 以串接方式執行，作者的 SSO 使用者會被標籤，問題會被置頂。 |
| 即時部落格 | 無一對一對應 | 有即時聊天小工具與聊天模式評論。編輯端的即時部落格仍保留在您的 CMS 中。 |
| 主題追蹤（追蹤主題與作者） | 頁面訂閱 | 使用者追蹤頁面，而非主題或作者。無跨文章追蹤。 |
| 通知鈴鐺 | 小工具內的通知鈴鐺 | 回覆、提及、串接活動、投票、訂閱、徽章、私訊。 |
| 電子郵件通知 | 具模板的電子郵件通知 | 透過 SSO 標誌讓使用者自行選擇。自訂模板、品牌寄件者。 |
| SSO 握手（codeA/codeB） | 安全 SSO（HMAC-SHA256 payload） | 無 register-user 呼叫。於伺服器端簽署 payload，傳遞給小工具。 |
| 第三方 SSO（Auth0、Gigya、Piano） | 在您的提供者驗證後的安全 SSO | 相同的 payload。使用者登入後由您的後端簽署。 |
| 身份驗證（OpenWeb 註冊畫面） | 魔法連結登入、簡易 SSO | 讀者透過電子郵件連結登入。無需密碼。 |
| 每篇文章的審核政策 | 依 URL ID 模式的自訂規則 | 批准模式、垃圾郵件過濾等依 `*/section/*` 模式變化。 |
| Aida AI 審核 | 垃圾郵件分類器、基於 LLM 的過濾器、影像審核、AI 代理 | 代理在乾跑模式開始，且可要求人工批准。 |
| 受限詞彙 | 可依語系自訂的詞彈黑名單 | 約 450 個預設片語，可編輯。 |
| 使用者靜音 | 封鎖使用者 | 每位讀者可從評論選單封鎖。 |
| 封禁 | 封禁 | 永久、定時、影子、IP 雜湊、加別名感知。 |
| 審核面板 | 審核評論儀表板 | 篩選、可撤銷的批次操作、審核群組、一鍵批准的摘要電子郵件。 |
| 通知 Webhook | Webhooks | 評論建立、更新、刪除。無每位使用者的通知 webhook。 |
| 互動儀表板 | 分析 | 即時在線使用者、熱門頁面、頁面載入、評論、投票、每日帳號。無廣告收入報告。 |
| 對話內廣告、獨立廣告 | 無 | FastComments 不投放廣告。您自行在小工具周圍保留廣告系統。 |
| 社交評論（星級評分） | 評分與評論 | 同一帳號的獨立產品。 |
| 社群熱門 | 最近討論與熱門頁面小工具 | 由評論活動驅動的再循環。 |
| 評論計數器 | 評論計數小工具 | 單一與批次。 |
| 匯出評論 API | CSV 匯出、API、webhooks | 隨時從儀表板匯出。 |
| 匯出與刪除使用者資料（GDPR/CCPA） | 帳號與資料刪除，EU 區域 | eu.fastcomments.com 將資料保留在 EU。提供 DPA。 |
| Android、iOS、React Native SDK | Android、iOS、React Native SDK | 原生 UI、SSO、即時更新、串接、審核操作。 |
| 啟動器、虛擬頁面、React SDK | 嵌入腳本、`fcConfigs`、React、Vue、Angular、SolidJS 函式庫 | SPA 使用 `update()` 與 `destroy()`。 |

</div>

本節其餘部分將逐組詳細說明。

### 對話、投票與反應

OpenWeb 的 Conversation 是即時串接。FastComments 的評論小工具也是：評論、編輯、刪除、投票與審核操作會推送給所有觀看該串接的使用者 (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>)。預設新評論會折疊在「顯示 2 條新評論」按鈕後，以免頁面在讀者閱讀時跳動。對於即時活動，設定 `showLiveRightAway` 讓它立即呈現，若想讓新評論向下流動則使用 `newCommentsToBottom`。

讚與倒讚會變成上下投票。匯入器會保留每則評論的兩個計數。如果您的社群習慣只有單一讚，請在小工具自訂頁面將投票樣式切換為心形。投票也可以完全關閉。

OpenWeb Reactions 是一個獨立的小工具，於文章上顯示兩到四個標籤圖示 (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>)。FastComments 的對應是 Page Reacts：可設定一組反應圖示，附加於評論小工具，且會記憶每頁與每位使用者的選擇 (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>)。反應計數不在 OpenWeb 的評論匯出中，因此會從零開始。

排序直接對應。OpenWeb 的 `data-sort-by` 值 best、newest、oldest 分別對應到 Most Relevant、Newest First、Oldest First。可使用 `defaultSortDirection`（`MR`、`NF`、`OF`）在程式碼或自訂規則中設定預設。讀者可在小工具內切換。

`data-read-only="true"` 會變成 `readonly: true`，阻止新評論、投票、編輯與刪除。`data-post-staleness-days` 沒有直接對應，但可在自訂規則中對特定 URL ID 模式套用 `readonly`，亦可根據文章年齡在模板中切換。`data-messages-count` 為每頁顯示的評論數量，可在小工具自訂頁面設定，範圍 10 至 200。

### 回覆與串接

FastComments 預設支援無限制巢狀；`maxReplyDepth` 可限制深度（`1` 會產生平面兩層結構）。OpenWeb CSV 包含 `parent_id` 與 `parent_comment_id` 欄位。匯入器會讀取 `parent_comment_id`，在完整深度下重建回覆樹，因而回覆的回覆仍會嵌套在其直接父層下，且保留作者、時間戳記、投票、標記次數與審核狀態。即使回覆在檔案中出現在其父層之前，或父層來自較早的匯出視窗，仍會正確連結。若回覆的父層在所有匯出中皆缺失，則會變成頂層評論。OpenWeb 的訊息 ID 會儲存在每則評論上，因此重新匯入較舊的平面匯出時，會在原位重新串接。

### 使用者個人檔案與徽章

FastComments 使用者（包括 SSO 使用者）會擁有包含頭像、顯示名稱、簡介、社交連結、徽章、積分、評論數、公開活動資訊與私訊功能的個人檔案 (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>)。每項活動、個人檔案評論與私訊介面皆可在 SSO payload 中為單一使用者停用，或在全域設定中停用。

OpenWeb 的 Author Badge 需要呼叫 `GET /sso/v1/user/{primary_key}` 取得作者資訊，並將回傳的 ID 放入 `data-author-id`。在 FastComments 中，您只需在使用者的 SSO payload 中設定 `displayLabel: 'Author'`（或任意最多 100 字元的標籤），以及 `isAdmin` 或 `isModerator` 以標示工作人員。該標籤會顯示在每則評論的姓名旁。若想要更豐富的系統，可在 Customize → Badges 中設定圖像或文字徽章，依評論數、投票、置頂、資深度、回覆速度等門檻自動頒發，或手動頒發，並可透過 SSO payload 的 `badgeConfig` 指定 (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>)。

### 置頂評論、投票與問答

任何版主都可以在小工具的評論選單或審核儀表板中 Pin 或 Unpin 評論。置頂的評論會即時推送給所有串接的使用者。若想自動化，可使用 AI Agents 功能的 Top Comment Pinner 範本，當評論達到投票門檻時自動置頂 (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>)。

OpenWeb 的 In Conversation Polls 允許工作人員在頂層評論下附加 2 至 4 個選項的投票。FastComments 的投票同樣附加於評論，支援 2 至 10 個選項、可選的關閉日期、結果隱私模式（匿名、僅管理員、全部）以及「投票才能看結果」模式。您可設定誰能建立投票（停用、僅管理員與版主、全部），以及匿名讀者是否可投票。投票亦會在公共 API 中公開，以便從 CMS 建立。

OpenWeb 曾提供 Ask Me Anything 形式。FastComments 沒有獨立的 Q&A 產品。實務上可將其作為普通串接，使用者的 SSO 會帶有 `displayLabel`，將介紹性評論置頂，讀者在頂層評論提問，作者在串接內回覆，且提及與回覆通知會將人員拉回。於窗口關閉後，可設定 `noNewRootComments` 只允許回覆。

Community Spotlight（OpenWeb 的電子郵件收集、計數與重導卡）沒有對應產品。小工具支援透過 `headerHTML` 在評論輸入框上方加入自訂 HTML，適合行動呼籲，但不支援電子郵件捕獲表單。

### 即時部落格

FastComments 沒有即時部落格。OpenWeb 的即時部落格是一個編輯產品：記者在 Admin Panel 中發佈更新，內含嵌入連結、推文與影片，讀者即時跟隨 (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>)。

FastComments 為即時報導提供的是讀者端：Live Chat 小工具 (`embed-live-chat.min.js`) 用於串流聊天，評論小工具可在聊天模式下使用 (`showLiveRightAway` 加上 `newCommentsToBottom`) 伴隨您的即時報導。至於編輯端的更新，搬遷至 FastComments 的出版商仍需在 CMS 或專屬即時部落格工具中保留，並在下方嵌入 FastComments 供討論。評論內支援 YouTube、SoundCloud 等多媒體嵌入，讓工作人員的更新以富媒體形式呈現。

### 主題追蹤、通知與電子郵件

OpenWeb 的 Topic Tracker 讓讀者追蹤來自頁面中繼資料的主題與作者，並在新文章符合時收到通知 (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>)。FastComments 沒有跨文章的主題或作者追蹤。讀者可透過通知鈴鐺訂閱單一頁面，並依訂閱頻率（每分鐘、每小時摘要或每日摘要）收到該串接的更新。如果跨文章追蹤對您的留存率至關重要，請告訴我們，該功能已列入我們的路線圖。

通知鈴鐺的其他功能完全對應。小工具內的鈴鐺會在未讀計數變紅，列出：回覆給您的、您參與的串接回覆、提及、您評論的投票、訂閱頁面的活動、徽章頒發與私訊 (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>)。應用內通知透過 WebSocket 即時推送。回覆與提及的電子郵件每分鐘發送一次，僅限已批准的評論。

對於 SSO 使用者，請在 payload 中傳遞 `optedInNotifications` 與 `optedInSubscriptionNotifications`，FastComments 會在下次頁面載入時更新其偏好設定。電子郵件需要在 payload 中提供電子郵件地址。電子郵件模板可在 Customize → Email Templates 中依類型與語系編輯，並支援使用自有網域與 DKIM 發送。版主與管理員會收到每日、每週或每月的摘要，內含一鍵批准、回覆與垃圾郵件連結。

OpenWeb 的 Notification Webhook 會將每位使用者的通知事件（`replied-message`、`liked-message`、`topic-by-keyword` 等）POST 至您的端點。FastComments 的 webhook 僅涵蓋評論資源：建立、更新與刪除，且可訂閱任意多個端點 (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>)。若您原本使用通知 webhook 供自己的郵件系統，需改為在評論事件上重建邏輯，或讓 FastComments 直接發送電子郵件。

### SSO：從 codeA/codeB 到簽名 Payload

OpenWeb 的握手包含六個步驟：等待 `spot-im-api-ready`、OpenWeb 產生 `codeA`、您的前端將其傳至後端、後端驗證使用者並呼叫 `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`、OpenWeb 回傳 `codeB`，最後前端將 `codeB` 交回 OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>)。登出呼叫 `window.SPOTIM.logout()`。

FastComments 的 Secure SSO 不需要往返，也不需要您側的額外端點。當您為已登入使用者渲染頁面時，後端會序列化使用者、Base64 編碼，並使用您的 API secret 以 HMAC‑SHA256 簽名。小工具會在請求中傳送此 payload，FastComments 會驗證簽名 (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>)。以下為 Node 範例：

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

時間戳記為 epoch 毫秒，若超過兩天則會被拒絕。對於未登入的讀者，省略三個簽名欄位，只傳 `loginURL`（或 `loginCallback` 函式），小工具會顯示登入提示而非撰寫框。完整的 Node、Java 與 PHP 範例可在 <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a> 找到。

使用者會在首次頁面載入時建立。您不會批量註冊任何人。因為 OpenWeb 匯入器會以 `user_name` 匹配評論作者，若 SSO payload 攜帶相同的 `username`，則在首次載入串接時即取得其匯入的評論，之後即可編輯或刪除。若需要，亦可使用 SSO 使用者 API 事先建立使用者。

每次傳送 payload 時，FastComments 都會根據其更新使用者記錄，因此您側的顯示名稱或頭像變更會在下次頁面檢視時同步。若要清除欄位，將其設為 `null`。

若您使用 OpenWeb 的第三方 SSO（Auth0、Gigya、Piano）透過 `window.SPOTIM.startSSOForProvider`，FastComments 的流程相同：在提供者驗證使用者後，您的後端建構並簽署 payload。FastComments 端不需特定提供者的整合設定。

另外兩個選項：Simple SSO 直接從前端傳遞未簽名的使用者物件，適用於沒有後端的平台，且在有電子郵件時會將活動標記為已驗證 (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>)。SAML 2.0 讓您的員工透過 Okta、Azure AD 或 ADFS 登入 FastComments 儀表板，並支援角色映射，僅在企業方案提供 (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>)。

### 審核

OpenWeb 的每篇文章審核政策 API 有四個值：`spot_policy`、`approve_all`、`publish_and_moderate` 與 `require_approval`。FastComments 在審核設定中配置相同的行為：自動批准開關、首次評論需批准、僅批准已驗證（已登入或 SSO）評論。規則可全站套用，或針對 `*/section/*` 等 URL ID 模式套用，以實現分區政策。所有評論（無論是否批准）皆會出現在 Moderate Comments 儀表板，因此預設為「發佈後審核」模式 (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>)。

匯入會保留審核狀態。OpenWeb 的 `message_status` 為 `approved` 時匯入為已批准且已審核；`rejected` 會匯入為垃圾郵件且已審核；其他狀態則匯入為未批准未審核，會出現在審核佇列。`reports_count` 會成為評論的標記次數。

FastComments 的自動審核採多層次而非單一系統（如 Aida）：

- 垃圾郵件分類器，持續訓練，可作為共享模型或租戶專屬，對長期或常被置頂的使用者放寬過濾。
- 可選的 LLM 垃圾郵件檢查（Flex 計費），支援開放權重模型如 GLM‑5.3。
- 圖像內容審核，提供低、中、高靈敏度。
- 約 450 個預設詞彙的本地化黑名單，可編輯，會以星號遮蔽匹配項目。此處放置 OpenWeb 的受限詞彙。
- 標記門檻，達到 N 次標記自動隱藏評論。
- 重複與近似訊息防止，始終啟用。
- AI Agents：事件驅動的代理，具明確工具白名單（標記垃圾、批准、鎖定、置頂、警告 DM、封禁、頒發徽章、回覆），預設為乾跑模式，敏感工具可要求人工批准，所有操作皆記錄理由與信心分數。

OpenWeb 的使用者靜音 API 允許一位 SSO 讀者靜音另一位。FastComments 的對應是評論選單中的 Block User，任何已登入讀者皆可使用。封禁是版主操作：永久、定時、影子（使用者仍看到自己的評論，其他人看不到），亦可依 IP 雜湊或以 email 別名視為同一位。封禁名單可依 email、姓名、版主與觸發封禁的評論搜尋。

Moderate Comments 儀表板支援篩選（需審核、需批准、垃圾郵件、已標記、被封禁使用者）與文字搜尋，支援批次操作（可撤銷、暫停），大型佇列可「選取全部符合」；可建立審核群組，使您的體育編輯部僅看到體育串接；每則評論都有日誌顯示為何發送或未發送電子郵件；亦可產生可分享的篩選連結。版主僅有儀表板權限，無法變更設定或匯入資料。

### 分析

FastComments Analytics 顯示即時在線使用者、各站點與各頁面的即時使用者、依評論或即時使用者排序的熱門頁面，以及每日的頁面載入、評論、投票與帳號新增統計 (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>)。版主統計則分開。計數接近即時，最多延遲一分鐘，且每次頁面載入皆計入，而非抽樣。

您不會看到任何廣告填充、CPM 或收入相關資訊，因為此平台不投放廣告。若您原本依賴 OpenWeb 的儀表板進行互動與收入報告，這部分將改由您自己的廣告系統處理。

### 營收

OpenWeb 在 Conversation 內與周圍投放廣告，並提供 Standalone Ad 單元，需透過您的 OpenWeb 聯絡人設定活動 (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>)。FastComments 不在小工具內投放廣告，也不分成收入，且不載入第三方廣告或追蹤腳本。小工具本身是一個 iframe，您在其上方與下方的廣告位仍由您自行管理。

此取捨相當明確：您失去 OpenWeb 所付的廣告收入，卻獲得固定、可預測的成本，且小工具不會向您的頁面發送廣告請求。Flex 與 Pro 計畫會移除品牌標示，Pro 與 Enterprise 計畫提供白標服務。

### 資料匯出與隱私

所有評論資料可隨時從 FastComments 儀表板匯出為 CSV，日期使用 UTC ISO 格式，且相同資料亦可透過 API 取得。Webhook 會持續同步。匯入檔案在匯入完成後即從 FastComments 刪除。

對於 GDPR 與 CCPA，OpenWeb 提供匯出與刪除 API，刪除的使用者評論會保留在隨機訪客帳號下 (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>)。FastComments 支援資料匯出與刪除請求，提供資料處理協議（DPA），且在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 以 EU 部署方式僅在歐盟內複製資料。若您的讀者在歐洲，請在該區域建立帳號。EU 區域的 AI 代理封禁必須經人工批准，以符合 DSA 第 17 條。

全球部署的評論資料會跨區域複製，包括新加坡節點，且小工具由 FastComments 自己的 DNS 與 CDN 供應。嵌入腳本壓縮後約 35KB。

### 行動 SDK

OpenWeb 提供 Android、iOS 與 React Native SDK，支援 Conversation、文章、驗證、通知、反應與對話內投票。FastComments 提供原生 <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> 與 <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 函式庫，具串接評論、即時更新（WebSocket）、安全 SSO、投票、提及、圖片上傳、審核操作（標記、置頂、鎖定、封鎖）、主題樣式、即時聊天模式與社交動態元件。EU 區域可透過設定旗標啟用。因無廣告，亦無獨立的廣告 SDK。

### 嵌入與 SPA 整合

OpenWeb 的 launcher 與 container：

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments 的對應：

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

您的 tenant ID 可在 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">credentials page</a> 取得。`data-article-tags` 沒有對應，因為沒有主題追蹤；評論內的 hashtag 為不同功能。

對於無限捲動與單頁應用（SPA），OpenWeb 的 Virtual Pages 方式是每篇文章一個容器。FastComments 則在每個串接呼叫 `FastCommentsUI(element, config)`，之後可使用 `instance.update(newConfig)` 變更 URL ID，或 `instance.destroy()` 移除 (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>)。React、Vue、Angular、SolidJS 函式庫會在 config 屬性變更時自動處理。生命周期回呼（`onInit`、`onRender`、`commentCountUpdated`、`onReplySuccess`、`onVoteSuccess`、`onAuthenticationChange`、`onCommentSubmitStart`）取代了您原本監聽的 `spot-im-*` DOM 事件。

索引頁面的評論計數使用評論計數小工具，支援單一與批次。為了 SEO，評論會直接渲染到頁面供搜尋引擎爬蟲抓取，而非放在 iframe 中，故不需要 SEO API 呼叫。

### 步驟式切換

**1. 建立帳號並設定基礎。** 前往 fastcomments.com 或 eu.fastcomments.com 註冊。設定審核、詞彈黑名單、投票樣式、預設排序與小工具自訂 CSS。新增版主與審核群組。若您有大量管理員，支援為您匯入。

**2. 執行首次匯入。** 前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>，選擇 OpenWeb（.csv）並上傳。匯入會以背景工作執行，頁面會顯示列數與狀態，完成後會收到電子郵件 (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>)。每則評論會保留其 OpenWeb 訊息 ID 作為外部 ID，重新匯入時會更新既有評論而非產生重複。

**3. 驗證計數。** 將匯入的列數與您的匯出比對。於審核儀表板開啟幾個高流量的 URL ID，抽查作者、日期、投票總數與審核狀態。確認被拒絕的評論顯示為垃圾郵件，待審核的評論則在佇列中。

**4. 建立 SSO payload。** 在後端實作上述簽名程式碼，使用與 OpenWeb 相同的 `id` 與 `username`。在測試環境頁面上以工作人員帳號測試：其匯入的評論應顯示為其所有，且編輯與刪除功能出現在評論選單。

**5. 在測試模板上替換嵌入碼。** 用 FastComments 片段取代 launcher 與 container，將 `data-post-id` 映射為 `urlId`，`data-post-url` 映射為 `url`。移除 `window.SPOTIM.logout()` 與 `spot-im-*` 監聽器，或映射至相應回呼。將 CSS 放在自訂規則中，而非硬編碼，以確保每次 FastComments 更新時皆測試通過。

**6. 平行運行。** 在部分區段或部分文章使用 FastComments，其他仍保留 OpenWeb。OpenWeb 端不需變更。監控審核佇列與分析頁面。此期間 FastComments 的評論不會出現在您的 OpenWeb 匯出中，請在最終匯入前規劃好時間點，而非之後。

**7. CSP 與 DNS。** 若您使用 Content‑Security‑Policy，允許 `cdn.fastcomments.com` 與 `fastcomments.com`（或 `eu.fastcomments.com`）於 `script-src`、`frame-src`、`connect-src`，並在移除 launcher 後刪除 `spot.im` 與 `openweb.com` 的條目。您的 DNS 不需變更，因 URL ID 已匹配，無需重新導向。

**8. 最終匯入與正式上線。** 再次匯出涵蓋平行運行期間的 OpenWeb 資料，匯入（重新匯入安全），然後在所有頁面部署模板變更，移除 launcher、Reactions、Topic Tracker、Spotlight、鈴鐺與廣告容器。

**9. 上線檢查清單。**

- 在兩個瀏覽器的正式文章上看到即時評論。
- SSO 登入、登出，並以真實訂閱者帳號發表評論。
- 版主收到摘要並能從中批准。
- 回覆與提及的電子郵件送達且連結正確頁面。
- 封禁名單與詞彈黑名單已填入。
- Page Reacts 與評論計數小工具正確呈現，取代原本的 Reactions 與計數器。
- CSP 報告乾淨。
- 最後一次將匯出計數與儀表板數據比對。

### 您失去的與不同的地方

直接說明差距：

- **即時部落格。** 無對應。請保留在 CMS 或即時部落格工具中，並在其下方嵌入 FastComments。
- **主題追蹤。** 無跨文章的主題或作者追蹤。僅支援頁面訂閱。
- **Community Spotlight。** 無 CTA 卡片產品。`headerHTML` 可在撰寫框上方顯示訊息，但不支援電子郵件捕獲。
- **廣告收入。** 無。小工具本身無廣告。
- **通知 webhook。** Webhook 僅針對評論事件，非每位使用者的通知事件。
- **反應歷史。** 文章層級的反應計數不在評論匯出中，會從零開始。我們有時可從您的站點抓取。
- **投票歷史。** 投票定義與投票結果不在評論匯出中，投票的評論文字會匯入，投票本身不會。我們有時可從您的站點抓取。
- **登入模型。** 未使用 SSO 的讀者以魔法連結登入，無需密碼或社交登入按鈕。
- **人工審核人員。** OpenWeb 內建 Aida 團隊。FastComments 提供工具、分類器與代理，人工則由您自行安排。

您獲得的，同樣的精神：只需一小段腳本且不產生廣告請求的 widget、可讓單人管理大型站點的審核與批次操作、以簽名函式取代協議的 SSO，以及不受法院監督的供應商。

### 時程與免費匯入優惠

對於具備單一 SSO 整合與數十萬評論的出版商，預估需一至兩週：匯出與首次匯入 1–2 天、SSO 與模板 3–4 天、平行運行窗口，最後匯入與切換。平台已支援此規模：United Cloud 在 FastComments 上運營超過十個入口與數百萬評論，itsfoss.com 亦透過相同自助匯入器搬遷了 88,000 條評論歷史。

FastComments 會免費匯入您的 OpenWeb CSV，協助您在切換期間平行運行 OpenWeb 與 FastComments，並提供遷移支援，包括串接與使用者匹配問題。企業方案提供 99.99% SLA，且在營業時間內一小時內回覆。Flex 計費方案適合想先行使用而不簽約的站點。

<a href="https://fastcomments.com/contact-us">Write to us</a> with your export size and your SSO setup and we will come back with a plan.

### 結論

今天就匯出您的資料。記得：相同的文章 ID 會成為 URL ID，審核狀態會保留，嵌入只需直接替換。FastComments 與 OpenWeb 的差異已在上方列出，您可依據事實自行決策。 :)

Cheers!

{{/isPost}}

---