---
[category:Migration]
###### [postdate]
# [postlink]從 Yotpo 遷移到 FastComments[/postlink]

{{#unless isPost}}
正在尋找 Yotpo 的替代方案？此文章詳細介紹如何將產品評論從 Yotpo 遷移到 FastComments，哪些內容會被保留，這些平台的比較，以及對您的商店會有什麼改變。
{{/unless}}

{{#isPost}}

我們持續收到 Shopify 商家詢問關於 Yotpo 的替代方案以及如何將他們的產品評論從該平台轉移。這篇文章將涵蓋在選擇 Yotpo 替代品時需要考量的事項，FastComments 遷移的完整過程，以及一旦轉移至 FastComments 後的變化。

## 本文適合誰

本指南適用於正在使用 Yotpo 進行產品評論的電子商務商家和商店擁有者，尋求更快、更輕量或更經濟的替代方案。我們所接觸的大多數商家使用 Shopify，但 FastComments 同樣適用於 WooCommerce 商店、BigCommerce、自訂商店和無頭設置。無論您的商店運行在哪裡，遷移過程都是相同的。

## 為什麼要轉移

- FastComments 速度快。Yotpo 需要加載近一兆字節的 JavaScript 及多次第三方請求，這可能會使產品頁面變慢。
- 評論不會即時顯示。顧客提交評論後，頁面會告訴他們查看收件箱，評論僅在延遲後顯示。
- FastComments 提供更線性的定價，沒有按層級設置的功能限制。

FastComments 以單一約 30KB 的小工具實時提供星級評分和評論串。新評論在顧客提交的瞬間流入每一個打開的頁面，無需重新加載！我們的流量計劃涵蓋評分、AI 審核、多狀態審核、提問功能及完整數據匯出。許多客戶的支出僅為一美元，對於更大的組織，我們也提供每位管理員和審核員的定價。

## 實時體驗

FastComments 摘要小工具是實時的，就像我們的評論和聊天小工具。如果留下了評論，評分會立即更新而不需要刷新。這對於產品發布非常有用。

如果您決定移動或在不同平台上運行不同的商店，FastComments 也在 Shopify 以外的地方運行。

## Yotpo 與 FastComments 一覽

以下是商家在尋找 Yotpo 替代品時通常會詢問的幾個維度的快速對比：

- 小工具大小: Yotpo 在多次請求中需要 800KB+ 的 JavaScript，而 FastComments 只需要在一次請求中加載 38KB。
- 實時評論: Yotpo 必須重新加載頁面才能顯示新評論。FastComments 在每個打開的頁面上實時推送新星級和評論。
- 定價: Yotpo 根據評論數量在分級計劃中定價，並有功能限制。FastComments 根據頁面流量進行固定定價，並在每個計劃中包含所有功能。
- 照片和視頻評論: 兩者均支持。
- 問答評論: Yotpo 將問答作為附加模組出售。FastComments 通過內建的提問功能包括此功能。
- AI 審核: Yotpo 提供基本的自動發布規則。FastComments 包含可配置每條評論的評分和審計日誌的 AI 代理，以及手動和自動發布配置。
- 數據匯出: Yotpo 在高級計劃中限制完整匯出。FastComments 在每個計劃中提供完整的 CSV 和 JSON 匯出。
- 從競爭對手遷移: Yotpo 會收取遷移顧問費用。FastComments 通過支持票免費處理此事。

## 遷移過程

Yotpo 沒有乾淨的自助匯出功能來相對應於公共匯入者結構，因此我們通過支持團隊而非標準的匯入頁面來處理 Yotpo 的遷移。整體過程是：

1. 開啟一個 <a href="https://fastcomments.com/contact-us" target="_blank">支持票</a>，告訴我們您要從 Yotpo 遷移。
2. 我們會發送給您有關如何從 Yotpo 匯出數據的說明。匯出內容包括評論、評分、照片、認證買家標記和串聯回覆。
3. 您將匯出文件通過票據發送回給我們。
4. 我們將每個字段映射到 FastComments，並將其加載到與您的帳戶相關的臨時租戶中，以便您在數據上線前預覽結果。
5. 當您批准預覽後，我們會將數據推廣到您的生產租戶中。

大多數 Yotpo 的遷移在我們收到匯出後一周內完成。

## 會保留什麼

映射涵蓋了 Yotpo 對每條評論存儲的所有內容：

- 星級評分和綜合產品評分
- 評論文本、串聯回覆及回覆時間戳
- 照片和視頻附件（我們將文件移動到我們的 CDN）
- 認證買家的標記
- 客戶標識符，以確保在客戶檔案上的評論數量與之前匹配
- 提交時間戳，以保持您產品頁面上的時間順序

如果您有 Yotpo 的問答，這些將映射到 FastComments 的提問功能中相同的產品串。

## 替換小工具

數據遷移完成後，將產品頁面模板中的 Yotpo 小工具替換為 FastComments 小工具。我們是一個 Shopify 應用程序，因此對於大多數商店來說，這是在主題中的一行代碼。<a href="https://fastcomments.com/install-wizard" target="_blank">安裝嚮導</a> 涵蓋了 Shopify、無頭設置和主要前端框架。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

如果您想在完全切換前比較外觀和感受，可以暫時在單一產品上並排運行 Yotpo 和 FastComments。

## 歐盟

如果您在歐盟，請在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 上創建帳戶，以便您的客戶數據留在歐盟內。

## 關於從 Yotpo 切換的常見問題

### FastComments 比 Yotpo 便宜嗎？

在幾乎每種情況下，都是的。FastComments 以一個固定的流量計劃運行，包含所有功能，而 Yotpo 則按照評論數量在分級計劃中收費，並加上超出費用。請在 <a href="https://fastcomments.com/pricing-calculator" target="_blank">定價計算器</a> 中計算您商店的成本。

### 我可以在切換時保留我的 Yotpo 評論嗎？

可以。遷移保留每一條評論、每一個評分、每一個照片和視頻附件、每一個串聯回覆及每一個認證買家的標記。提交時間戳也會轉移，確保您的產品頁面上的時間順序保持不變。

### FastComments 在 Shopify 以外的地方運行嗎？

可以。FastComments 支持 Shopify、WordPress、WooCommerce、BigCommerce、自訂商店和無頭設置。<a href="https://fastcomments.com/install-wizard" target="_blank">安裝嚮導</a> 涵蓋了主要的前端框架。

### 我可以先並排運行 Yotpo 和 FastComments 嗎？

可以。在臨時預覽中，在單一產品頁面上放置兩個小工具，以比較它們在您的商店中的外觀和感受，然後在準備好完全切換時刪除 Yotpo。

### Yotpo 的忠誠計劃、Yotpo 短信或 Yotpo 郵件怎麼辦？

FastComments 是一個評論和即時評論平台。不處理忠誠計劃、SMS 行銷或電子郵件行銷活動。如果您當前使用這些 Yotpo 產品，您需要在將評論切換到 FastComments 時保留它們或轉移到專用工具上。

請注意，我們希望開發此功能，如果您有興趣成為這些功能的 Beta 測試者，我們會很樂意將其納入我們的短期路線圖中。

### 我的星級評分仍會在我的產品頁面上顯示嗎？

會的。FastComments 小工具會在 Yotpo 小工具之前的位置呈現總星級評分、個別評論星級和評論數量。每條評論的 HTML 結構都設計使搜索引擎能夠在頁面上提取評分數據。

### 從 Yotpo 切換到 FastComments 會影響我的 SEO 嗎？

如果您的產品頁面 URL 保持不變，那就不會。評論內容將轉移到相同 URL 上的新小工具，搜索引擎將看到相同產品的評論仍在相同頁面上。如果您在轉移過程中更改了 URL，請將舊的和新的 URL 對發送給我們，以便匯入工具做映射。

### 有免費試用嗎？

每個 FastComments 計劃都提供免費試用。您可以創建一個帳戶，進行匯入預覽，並在承擔付費計劃之前在臨時租戶上查看小工具。

## 總結

1. <a href="https://fastcomments.com/contact-us" target="_blank">開啟支持票</a>，告訴我們您想從 Yotpo 遷移
2. 匯出您的 Yotpo 數據並通過票據發送給我們
3. 在臨時租戶中預覽匯入
4. 將 Yotpo 小工具替換為 FastComments 小工具在您的產品頁面模板上

{{/isPost}}

---