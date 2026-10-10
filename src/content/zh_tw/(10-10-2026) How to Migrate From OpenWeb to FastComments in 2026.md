[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]如何在 2026 年從 OpenWeb 遷移到 FastComments[/postlink]

{{#unless isPost}}
一份針對出版商逐項遷移 OpenWeb（前身為 Spot.IM）的指南：哪些功能 1:1 對應、哪些不同、CSV 匯入如何運作、SSO 握手如何變更，以及一步步的切換計畫。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

本指南適用於目前使用 OpenWeb 且需要遷移計畫的產品與工程主管以及社群經理。它會逐一檢視每個 OpenWeb 介面，列出 FastComments 的對應項目，並明確說明哪些地方沒有 1:1 對應。

### 為什麼現在

2026 年 9 月 30 日，特拉維夫地方法院應其貸款人 Mars Growth Capital 的請求，指派臨時接管人管理 OpenWeb，該貸款人對公司資產與帳戶擁有第一順位留置權，並正著手對 OpenWeb 的以色列資產、銀行帳戶與智慧財產權執行（<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>）。次日（<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>）臨時受託人 Adv. Ehud Gindes 被任命。2026 年早些時候，OpenWeb 最大的客戶之一 Microsoft 終止合作，並因流量爭議（OpenWeb 否認）扣留付款（<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>）。

OpenWeb 表示平台仍在運作。法院監督、貸款人對您評論小工具所依賴的智慧財產權執行留置權，以及受託人負責保值，這些都不是出版商在核心互動介面下想要的條件。如果您尚未完整匯出資料，請先立即執行，於本指南的其他步驟之前完成。

### 開始前需要的準備

在觸碰任何程式碼前先收集以下項目：

- **您的 OpenWeb 評論匯出。** OpenWeb 提供 Export API（v4），會產生 ZIP 壓縮的 CSV 檔案，每檔最多 100,000 筆評論，日期範圍最長一個月，下載連結於一週後失效（<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>）。請求您需要的所有時間窗口，並將檔案安全保存。若您的 OpenWeb 聯絡人過去提供過管理面板的 CSV 匯出，也請保留。FastComments 匯入工具會讀取 OpenWeb CSV，欄位包括 `id`、`post_id`、`parent_comment_id`、`user_name`、`user_display_name`、`content`、`written_at`、`message_status`、`likes_count`、`dislikes_count`、`reports_count` 與 `url`。
- **您的 Spot ID 與文章 ID 清單。** 您傳遞給 launcher 的每個 `data-post-id` 會成為 FastComments 的 URL ID。若您的文章 ID 為 CMS 文章 ID，請記下產生方式，以便在 FastComments 端輸出相同值。
- **您的 SSO 使用者清單。** 具體而言是您在 OpenWeb 註冊的 `primary_key` 與 `user_name`。匯入時會以使用者名稱比對評論作者，因此請在 FastComments SSO payload 中傳遞相同的使用者名稱。
- **您的審核員清單與角色。** 包含管理員、審核員與記者帳號，以及各自負責的版塊。
- **您的審核設定。** 包含全站政策（全部批准、發佈後審核、需要批准）、每篇文章的覆寫、限制詞彙清單、靜音與封鎖使用者。
- **自訂 CSS 與佈景設定。** 從管理面板匯出所有自訂項目，以便在 FastComments 小工具的客製化頁面中重建。
- **Launcher 在您模板中的位置**，包括任何使用 Reactions、Topic Tracker、Spotlight、通知鈴或獨立廣告卻未包含對話的頁面。

### OpenWeb 文章 ID 如何映射到 FastComments URL ID

FastComments 會將評論串與 `urlId` 連結。預設情況下，URL ID 為清理過的頁面 URL，但您可以自行設定任意字串，這正是 OpenWeb 匯入器的做法：它會讀取 `post_id` 欄位，並將其作為每篇文章的 FastComments URL ID。它同時會將 `url` 欄位儲存為顯示 URL，讓審核連結與通知郵件指向正確頁面。

因此在您的模板中，原本傳遞 `data-post-id="POST_ID"` 與 `data-post-url="ARTICLE_URL"` 給 OpenWeb 的地方，改為傳遞 `urlId: 'POST_ID'` 與 `url: 'ARTICLE_URL'` 給 FastComments。匯入的串會直接對應到現有串，無需重新導向或 URL 重寫。參見 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">the URL ID docs</a>。

若您希望未來以 URL 為鍵而非文章 ID，先匯入後可在「管理資料」下的「遷移評論」工具，批次將串從文章 ID 移至 URL。

### 功能對照表

| OpenWeb | FastComments | 備註 |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | 預設即為即時。新評論會先收在「顯示 N 條新評論」按鈕後，或使用 `showLiveRightAway` 立即顯示。 |
| Likes and dislikes on comments | Up and down votes | 匯入會保留 `likes_count` 與 `dislikes_count`。心形樣式與「停用投票」為設定選項。 |
| Reactions (article-level icons) | Page Reacts | 可在頁面上設定圖示集合，並記憶每位使用者的選擇。 |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` 限制巢狀深度。請參考下方匯入說明。 |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` 可於全站或特定 URL 模式下設定預設排序。 |
| User profiles | User profiles | 頭像、簡介、徽章、karma、活動、私訊。支援 SSO 使用者。 |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | 於 SSO payload 中設定。無需後端查詢。 |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | 審核員可於小工具或儀表板釘選。AI 代理模板可自動釘選最高票評論。 |
| In Conversation Polls | Polls on comments | 2~10 個選項、關閉日期、隱私模式、建立者限制。 |
| Ask Me Anything formats | No dedicated product | 以普通串作為專屬 URL，作者的 SSO 使用者帶 `displayLabel`，將介紹貼文釘選，讀者在頂層評論提問，作者回覆，並利用提及與回覆通知互動。 |
| Live Blog | No 1:1 equivalent | 有 Live Chat 小工具與聊天模式評論。編輯端的即時部落格仍保留在您的 CMS 中。 |
| Topic Tracker (follow topics and authors) | Page subscriptions | 使用者訂閱頁面，而非主題或作者。無跨文章追蹤。 |
| Notification Bell | Notification bell in the widget | 回覆、提及、串活動、投票、訂閱、徽章、私訊。 |
| Email notifications | Email notifications with templates | 依使用者 SSO 標記選擇加入。可自訂模板與品牌寄件者。 |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | 無需 register-user 呼叫。伺服器端簽署 payload，傳遞給小工具。 |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | 同樣的 payload。後端在使用者登入後簽署。 |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | 讀者透過 email 連結登入，無密碼。 |
| Moderation policy per article | Customization rules per URL ID pattern | 批准模式、垃圾郵件過濾等可依 `*/section/*` 模式變化。 |
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | 代理在乾跑模式下啟動，且可要求人工批准。 |
| Restricted words | Word blacklist | 約 450 預設片語，可編輯。 |
| User muting | Block User | 於評論選單中對單一讀者封鎖。 |
| Bans | Bans | 永久、時限、影子、IP 雜湊、加別名等。 |
| Moderation Panel | Moderate Comments dashboard | 篩選、批次撤銷、審核群組、摘要郵件一鍵批准。 |
| Notification Webhook | Webhooks | 評論建立、更新、刪除。無每位使用者的通知 webhook。 |
| Engagement dashboard | Analytics | 在線使用者、熱門頁面、頁面載入、評論、投票、每日帳號統計。無廣告收入報表。 |
| In-conversation ads, Standalone Ad | None | FastComments 不投放廣告。您自行保留廣告堆疊。 |
| Social Reviews (star ratings) | Ratings and Reviews | 同帳號下的獨立產品。 |
| Popular in the Community | Recent Discussions and Top Pages widgets | 透過評論活動驅動再循環。 |
| Comment Counter | Comment count widgets | 單一與批次。 |
| Export Comments API | CSV export, API, webhooks | 隨時於儀表板匯出。 |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com 於 EU 保存資料。提供 DPA。 |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | 原生 UI、SSO、即時更新、串接、審核操作。 |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` 與 `destroy()` 用於 SPA。 |

以下各小節將逐一說明每個功能群組的細節。

### Conversation, Votes and Reactions

OpenWeb 的 Conversation 為即時串。FastComments 的評論小工具同樣支援即時：評論、編輯、刪除、投票與審核操作皆會推送給所有觀看該串的使用者（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>）。預設情況下，其他人的新評論會先收在「顯示 2 條新評論」按鈕後，避免頁面在讀者閱讀時跳動。若為即時活動，可設定 `showLiveRightAway` 立即顯示，並使用 `newCommentsToBottom` 讓新評論向下排列，如同聊天。

讚與倒讚會變成上下投票。匯入器會保留每則評論的兩個計數。若您的社群習慣單一讚，請在小工具客製化頁面將投票樣式切換為心形。投票亦可完全關閉。

OpenWeb Reactions 為文章層級的圖示小工具（<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>），FastComments 的對應為 Page Reacts：可設定一組圖示，附加於評論小工具，且會記憶每頁與每位使用者的選擇（<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>）。Reactions 計數不在 OpenWeb 匯出中，故會從零開始。

排序直接對應。OpenWeb 的 `data-sort-by` 值 best、newest、oldest 分別對應 Most Relevant、Newest First、Oldest First。可於程式碼或客製化規則中使用 `defaultSortDirection`（`MR`、`NF`、`OF`）設定預設。讀者可在小工具內切換。

`data-read-only="true"` 會變為 `readonly: true`，阻止新評論、投票、編輯與刪除。`data-post-staleness-days` 沒有直接對應，但可透過客製化規則對特定 URL ID 模式套用 `readonly`，亦可根據文章年齡在模板中切換。`data-messages-count` 為每頁顯示的評論數量，可在小工具客製化頁面設定 10~200 條不等。

### Replies and Threading

FastComments 預設支援無限制巢狀深度；`maxReplyDepth` 可限制深度（`1` 會產生平面兩層結構）。OpenWeb CSV 包含 `parent_id` 與 `parent_comment_id` 欄位。現行匯入器會將每筆資料以頂層評論的方式匯入該頁面，依日期排序，保留作者、時間戳、投票、舉報次數與審核狀態，**不會重建父子樹**。若您的串回覆密集，請在傳送匯出時告知我們，我們可在匯入時處理串的樹狀結構，而非留下平面串。

### User Profiles and Badges

FastComments 使用者（含 SSO 使用者）皆有頭像、顯示名稱、簡介、社群連結、徽章、karma、評論數、公開活動資訊流與私訊功能（<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>）。每項功能皆可於 SSO payload 或全域設定中停用。

OpenWeb 的 Author Badge 需要呼叫 `GET /sso/v1/user/{primary_key}` 取得作者資訊，並將回傳的 ID 放入 `data-author-id`。在 FastComments 中，只要在使用者的 SSO payload 中設定 `displayLabel: 'Author'`（或任意最多 100 字元的標籤），再加上 `isAdmin` 或 `isModerator` 即可。標籤會顯示在每則評論的名稱旁。若需更豐富的系統，可於「自訂」→「徽章」設定圖像或文字徽章，依評論數、投票、釘選、資深度等門檻自動頒發，或手動指定，並可透過 SSO payload 的 `badgeConfig` 直接指派（<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>）。

### Pinned Comments, Polls and Q&A

任何審核員皆可在小工具的評論選單或審核儀表板上釘選或取消釘選評論。釘選的評論會即時推送給所有串內使用者。若想自動化，可使用 AI Agents 功能的「Top Comment Pinner」模板，當評論達到投票門檻時自動釘選（<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>）。

OpenWeb 的 In Conversation Polls 允許工作人員在頂層評論附加 2~4 個選項的投票。FastComments 的投票同樣附加於評論，支援 2~10 個選項、可選關閉日期、結果隱私（匿名、僅管理員、全部可見）以及「投票才能看結果」模式。您可設定誰能建立投票（關閉、管理員與審核員、全部），以及匿名讀者是否可投票。投票亦會在公共 API 中曝光，方便從 CMS 建立。

OpenWeb 曾提供 Ask Me Anything 形式。FastComments 沒有獨立的 Q&A 產品，實務上可將其視為普通串，使用專屬 URL ID：來賓的 SSO 使用者帶有 `displayLabel`，將介紹貼文釘選，讀者在頂層評論提問，來賓在串內回覆，並利用提及與回覆通知拉回對話。可在窗口關閉後設定 `noNewRootComments`，僅允許回覆。

Community Spotlight（OpenWeb 的 email 收集、計數與重導卡）無對應功能。小工具支援透過 `headerHTML` 在評論輸入框上方插入自訂 HTML，適合 CTA 文字，但不支援 email 捕獲表單。

### Live Blog

FastComments 沒有 Live Blog 產品。OpenWeb 的 Live Blog 為編輯端產品：記者在管理面板發佈更新，內含嵌入連結、推文與影片，讀者即時跟隨（<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>）。

FastComments 為即時報導提供讀者端：Live Chat 小工具 (`embed-live-chat.min.js`) 用於串流聊天，評論小工具可在聊天模式下使用 `showLiveRightAway` 加 `newCommentsToBottom`，與您的即時報導同步。編輯端的更新仍建議保留在您的 CMS 或專屬 Live Blog 工具中，並在下方嵌入 FastComments 供討論。評論內支援 YouTube、SoundCloud 等多媒體嵌入，讓工作人員的更新可帶有豐富媒體。

### Topic Tracker, Notifications and Email

OpenWeb 的 Topic Tracker 讓讀者追蹤來自頁面中 metadata 的主題與作者，並在新文章符合時通知（<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>）。FastComments 沒有跨文章的主題或作者追蹤。讀者只能訂閱單一頁面的通知鈴，並依訂閱頻率（每分鐘、每小時摘要或每日摘要）接收更新。若跨文章追蹤對您的留存至關重要，這將是您失去的功能。

通知鈴的其他功能皆有對應。小工具的鈴會在未讀計數變紅，列出：回覆給您的、您參與的串的回覆、提及、您評論的投票、已訂閱頁面的活動、徽章頒發與私訊（<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>）。應用內通知透過 WebSocket 即時推送。回覆與提及的郵件每分鐘發送一次，僅限已批准的評論。

對於 SSO 使用者，請在 payload 中傳遞 `optedInNotifications` 與 `optedInSubscriptionNotifications`，FastComments 會在下次頁面載入時更新偏好。郵件需要在 payload 中提供 email 位址。郵件模板可於「自訂」→「郵件模板」依類型與語系編輯，並支援使用自有域名與 DKIM 發送。審核員與管理員會收到每日、每週或每月的摘要，內含一鍵批准、回覆與垃圾郵件連結。

OpenWeb 的 Notification Webhook 會將每位使用者的通知事件（`replied-message`、`liked-message`、`topic-by-keyword` 等）推送至您的端點。FastComments 的 webhook 僅涵蓋評論資源：建立、更新、刪除，且可任意新增訂閱端點（<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>）。若您原本使用 webhook 供給自家郵件系統，需改為在評論事件上重建邏輯，或直接讓 FastComments 發送郵件。

### SSO: From codeA/codeB to a Signed Payload

OpenWeb 的握手流程包含六個步驟：等待 `spot-im-api-ready`、OpenWeb 產生 `codeA`、您的前端將其送至後端、後端驗證使用者並呼叫 `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`、OpenWeb 回傳 `codeB`，最後前端將 `codeB` 交回 OpenWeb（<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>）。登出呼叫 `window.SPOTIM.logout()`。

FastComments 的 Secure SSO 不需往返，也不需要您自行新增端點。當您為已登入使用者渲染頁面時，後端會序列化使用者資料、Base64 編碼，並使用 HMAC‑SHA256 以您的 API secret 簽名。小工具會將 payload 隨請求送出，FastComments 會驗證簽名（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>）。Node 範例：

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

時間戳為 epoch 毫秒，若超過兩天則會被拒絕。對於未登入的讀者，省略三個簽名欄位，只傳 `loginURL`（或 `loginCallback` 函式），小工具會顯示登入提示而非編輯器。完整的 Node、Java 與 PHP 範例可於 <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a> 取得。

使用者會在首次載入頁面時自動建立。您不會批次註冊使用者。因為 OpenWeb 匯入器會以 `user_name` 比對評論作者，只要 SSO payload 中的 `username` 與原始 `user_name` 相同，該使用者即可在首次載入串時取得其匯入的評論，且之後可自行編輯或刪除。FastComments 亦提供 SSO 使用者 API，若您想預先建立使用者。

每次傳送 payload 時，FastComments 會根據 payload 更新使用者記錄，故顯示名稱或頭像變更會在下次頁面檢視時同步。將欄位設為 `null` 可清除該資訊。

若您使用 OpenWeb 的第三方 SSO（Auth0、Gigya、Piano）透過 `window.SPOTIM.startSSOForProvider`，FastComments 的流程相同：在提供者驗證使用者後，您的後端建構並簽署 payload。FastComments 不需要特定提供者的整合設定。

另外兩種選項：Simple SSO 直接從前端傳遞未簽名的使用者物件，適用於無後端的平台，且在有 email 時視為已驗證（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>）。SAML 2.0 讓員工透過 Okta、Azure AD 或 ADFS 登入 FastComments 後台，並支援角色映射，僅在企業方案提供（<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>）。

### Moderation

OpenWeb 的每篇文章審核政策 API 有四種值：`spot_policy`、`approve_all`、`publish_and_moderate`、`require_approval`。FastComments 在審核設定中提供相同的行為：自動批准開關、僅對使用者首次評論需要批准、以及僅自動批准已驗證（登入或 SSO）評論。規則可全站套用，或依 URL ID 模式（如 `*/politics/*`）套用，以重現分區政策。所有評論（即使已批准）皆會出現在「審核評論」儀表板，預設即為「發佈後審核」模式（<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>）。

匯入會保留審核狀態。OpenWeb 的 `message_status` 為 `approved` 時匯入為已批准且已審核；`rejected` 會匯入為垃圾郵件且已審核；其他狀態則匯入為未批准未審核，會出現在審核佇列。`reports_count` 會成為評論的舉報次數。

FastComments 的自動審核採多層次而非單一系統（如 Aida）：

- 垃圾郵件分類器，持續訓練，可於所有租戶共享或僅限您的租戶，具信任因子，對長期或常被釘選的使用者放寬過濾。
- 可選的 ChatGPT 4 垃圾郵件檢查（Flex 計費）。
- 圖片內容審核，提供低、中、高靈敏度。
- 約 450 預設詞彙的黑名單，可編輯，匹配時以星號遮蔽。這裡放置您在 OpenWeb 的限制詞彙。
- 舉報門檻，達到 N 次舉報自動隱藏評論。
- 重複與近似訊息防止，永遠開啟。
- AI Agents：事件驅動的代理，具明確工具白名單（標記垃圾、批准、鎖定、釘選、私訊警告、封鎖、頒發徽章、回覆）。每個代理在乾跑模式下啟動，敏感工具可需人工批准，且每個動作皆記錄理由與信心分數。

OpenWeb 的使用者靜音 API 允許一位 SSO 讀者靜音另一位。FastComments 的對應是評論選單中的 Block User，任何已登入讀者皆可使用。封鎖則是審核員的操作：可永久、設定時長、影子封鎖（使用者仍看見自己的評論，其他人看不到），亦可依雜湊 IP、加別名的 email 等方式執行。封鎖名單可依 email、名稱、審核員與觸發封鎖的評論搜尋。

「審核評論」儀表板支援篩選（需審核、需批准、垃圾、已舉報、來自封鎖使用者）與文字搜尋，支援批次撤銷與暫停、對大量佇列的「全選符合項」功能、審核群組（如只讓體育編輯看到體育串）、每則評論的日誌（說明為何發送或未發送郵件），以及可分享的過濾連結。審核員僅能使用儀表板，無法變更設定或匯入資料。

### Analytics

FastComments Analytics 會即時顯示各站點與每頁的在線使用者、依評論或即時讀者排序的熱門頁面，以及每日的頁面載入、評論、投票與新帳號統計（<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>）。審核員統計則另行顯示。計數接近即時，最多延遲一分鐘，且每一次頁面載入都會被計入，而非抽樣。

您不會在此看到任何廣告填充、CPM 或收入相關資訊，因為 FastComments 完全不投放廣告。若您原本依賴 OpenWeb 的儀表板進行參與度與收入的報表，這部分將改由您自己的廣告堆疊負責。

### Monetization

OpenWeb 在 Conversation 內與周圍投放廣告，並提供 Standalone Ad 單元，需透過您的 OpenWeb 聯絡人設定（<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>）。FastComments 不在小工具內投放廣告，也不分潤，亦不載入第三方廣告或追蹤腳本。小工具本身是一個 iframe，您在其上方與下方的廣告位由您自行管理。

此取捨相當明確：您失去 OpenWeb 所付的廣告收入，卻獲得固定、可預測的成本，以及不會向頁面增加廣告請求的小工具。Flex 與 Pro 計畫會移除品牌標示，Pro 與 Enterprise 計畫提供白標化。

### Data Export and Privacy

所有評論資料可隨時於 FastComments 儀表板匯出為 CSV，日期使用 UTC ISO 格式，且相同資料亦可透過 API 取得。Webhook 會持續同步。匯入檔案在匯入完成後即會從 FastComments 刪除。

針對 GDPR 與 CCPA，OpenWeb 提供匯出與刪除 API，刪除的使用者評論會保留在隨機的訪客帳號下（<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>）。FastComments 支援資料匯出與刪除請求，提供資料處理協議（DPA），且在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 以 EU 部署運行，資料僅在 EU 內的節點複製。若您的讀者位於歐洲，請於 EU 站點建立帳號。EU 站點的 AI 代理封鎖必須經過人工批准，以符合 DSA 第 17 條。

全球部署的評論資料會跨區域複製，包括新加坡節點，且小工具由 FastComments 自己的 DNS 與 CDN 供應。嵌入腳本大小約 30 KB（磁碟），壓縮後約 6 KB（傳輸）。

### Mobile SDKs

OpenWeb 提供 Android、iOS 與 React Native SDK，支援 Conversation、Articles、Authentication、Notifications、Reactions 與 In Conversation Polls。FastComments 提供原生 <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> 與 <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 函式庫，具備串接評論、即時 WebSocket 更新、安全 SSO、投票、提及、圖片上傳、審核操作（舉報、釘選、鎖定、封鎖）、佈景、即時聊天模式與社交動態元件。EU 站點可透過設定旗標啟用。因為沒有廣告，亦無獨立的廣告 SDK。

### Embed and SPA Integration

OpenWeb 的 launcher 與容器：

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

您的 tenant ID 可於 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed code page</a> 取得。`data-article-tags` 沒有對應，因為 FastComments 沒有主題追蹤；評論內的 hashtag 為不同功能。

對於無限捲動與單頁應用（SPA），OpenWeb 的 Virtual Pages 方式是每篇文章一個容器。FastComments 則在每個串呼叫 `FastCommentsUI(element, config)`，之後可使用 `instance.update(newConfig)` 變更 URL ID，或 `instance.destroy()` 移除（<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>）。React、Vue、Angular、SolidJS 函式庫會在 config 屬性變更時自動處理。生命週期回呼（`onInit`、`onRender`、`commentCountUpdated`、`onReplySuccess`、`onVoteSuccess`、`onAuthenticationChange`、`onCommentSubmitStart`）取代您先前監聽的 `spot-im-*` DOM 事件。

索引頁面的評論計數使用評論計數小工具，支援單一或批次。為了 SEO，評論會直接渲染到頁面供搜尋引擎爬蟲抓取，而非放在 iframe 中，故不需要 SEO API 呼叫進行設定。

### Step-by-Step Cutover

**1. 建立帳號並設定基礎。** 前往 fastcomments.com 或 eu.fastcomments.com 註冊。於小工具客製化頁面設定審核、詞彙黑名單、投票樣式、預設排序與自訂 CSS。新增審核員與審核群組。若您有大量管理員，支援為您匯入。

**2. 執行首次匯入。** 前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>，選擇 OpenWeb（.csv）並上傳。匯入會以背景工作執行，頁面會顯示列數與狀態，完成後會收到郵件通知（<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>）。每個 OpenWeb 訊息 ID 會對應為 FastComments 評論 ID，重新匯入不會產生重複。

**3. 驗證計數。** 將作業列數與您的匯出比較。於審核儀表板開啟幾個高流量的 URL ID，抽查作者、日期、投票總數與審核狀態。確認被拒絕的評論顯示為垃圾，待審核的則在佇列中。

**4. 建立 SSO payload。** 在後端實作上述簽名程式碼，使用與 OpenWeb 相同的 `id` 與 `username`。在測試環境的頁面上使用員工帳號測試：該使用者匯入的評論應顯示為其所有，且編輯與刪除功能出現在評論選單中。

**5. 在測試模板上替換嵌入碼。** 用 FastComments 片段取代 launcher 與容器，將 `data-post-id` 對映為 `urlId`、`data-post-url` 對映為 `url`。移除 `window.SPOTIM.logout()` 與 `spot-im-*` 監聽，或映射至相應回呼。將 CSS 以客製化規則方式加入，而非硬編碼，確保每次 FastComments 更新時皆能測試。

**6. 平行運行。** 在部分版塊或一定比例的文章上使用 FastComments，其他仍保留 OpenWeb。OpenWeb 端不需變更。觀察審核佇列與分析頁面。此期間 FastComments 的評論不會出現在 OpenWeb 匯出中，請於最終匯入前完成平行期，避免遺漏。

**7. CSP 與 DNS。** 若您使用 Content‑Security‑Policy，允許 `cdn.fastcomments.com` 與 `fastcomments.com`（或 `eu.fastcomments.com`）於 `script-src`、`frame-src`、`connect-src`，並在移除 launcher 後刪除 `spot.im` 與 `openweb.com` 的條目。您的 DNS 不需變更，因為 URL ID 保持相同，無需重新導向。

**8. 最終匯入與正式上線。** 再次匯出涵蓋平行期的 OpenWeb 資料，重新上傳（重新匯入安全），然後在所有頁面部署模板變更，移除 launcher、Reactions、Topic Tracker、Spotlight、通知鈴與廣告容器。

**9. 上線檢查清單。**

- 在兩個瀏覽器上確認生產環境文章的即時評論可見。
- SSO 登入、登出，並以真實訂閱者帳號發表評論。
- 審核員收到摘要並能從中批准。
- 回覆與提及郵件送達且連結正確頁面。
- 封鎖名單與詞彙黑名單已填入。
- Page Reacts 與評論計數小工具正確呈現，取代原先的 Reactions 與計數器。
- CSP 報告無異常。
- 最後一次將匯出計數與儀表板數據比對。

### 您失去的與不同的地方

直接說明差距：

- **Live Blog**：無對應。請保留於 CMS 或專屬 Live Blog 工具，FastComments 只負責下方討論。
- **Topic Tracker**：無跨文章的主題或作者追蹤。僅支援頁面訂閱。
- **Community Spotlight**：無 CTA 卡片產品。`headerHTML` 可在編輯框上方顯示訊息，但不提供 email 捕獲。
- **廣告收入**：無。小工具本身不含廣告。
- **Notification webhook**：僅提供評論事件 webhook，無每位使用者的通知事件。
- **匯入時的串樹**：目前匯入器會將回覆平鋪為頂層評論。如需重建樹狀結構，請提前告知我們。
- **Reactions 歷史**：文章層級的 reaction 計數不在評論匯出中，會從零開始。
- **Polls 歷史**：投票定義與投票結果不在評論匯出中，僅匯入投票的評論文字，投票本身不會被匯入。
- **登入模型**：未使用 SSO 的讀者改以 magic‑link 方式登入，無密碼或社交登入按鈕。
- **人工審核人員**：OpenWeb 內建 Aida 團隊。FastComments 提供工具、分類器與 AI 代理，實際審核人員由您自行安排。

您獲得的則是：只需一段小腳本且不產生廣告請求的小工具、可讓單人管理大型站點的審核功能與批次操作、以簽名函式取代複雜的 SSO 協議，以及不受法院監督的供應商。

### 時程與免費匯入優惠

對於具備單一 SSO 整合與數十萬評論的出版商，建議規劃 1–2 週：1–2 天完成匯出與首次匯入，數天完成 SSO 與模板調整，平行運行窗口，最後匯入與切換。FastComments 已在大規模環境中驗證此流程：United Cloud 管理超過十個入口網站與數百萬評論，itsfoss.com 亦透過相同自助匯入器搬遷了 88,000 筆評論歷史。

FastComments 會免費匯入您的 OpenWeb CSV，協助您在切換期間平行運行 OpenWeb 與 FastComments，並在遷移過程中提供支援，包括串樹與使用者匹配等問題。企業方案提供 SLA、營業時間內一小時內回覆支援，以及在您自有雲帳號中部署隔離雲端（<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>）。Flex 計費模式適合想先行使用、無合約的站點。

請寫信至 <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a>，提供您的匯出規模與 SSO 設定，我們會回覆您具體方案。

### 結論

今天就把匯出檔案拉下來。其餘遷移工作屬機械性：相同的文章 ID 會變成 URL ID，相同的使用者名稱透過 SSO 取得其評論，審核狀態會保留，嵌入碼只要直接替換。FastComments 與 OpenWeb 的差異已在上方列出，您可依據事實自行決策。

Cheers!{{/isPost}}

---