[category:Migration]
###### [postdate]
# [postlink]2026 年從 Commento 和 Cusdis 遷移[/postlink]

{{#unless isPost}}
託管的 Commento 與 Cusdis 服務已停止回應。以下說明如何遷移至 FastComments，以及如果您從未匯出過資料，我們如何協助從 Internet Archive 復原您的評論。
{{/unless}}

{{#isPost}}

如果您網站的評論區變成空白，這篇文章適合您。它說明了變更內容、如果您有匯出檔案該如何匯入，以及如果沒有，我們如何協助您從 Internet Archive 取回評論。

## What Happened

以下是我們截至 2026 年 11 月 1 日的觀測結果：

- **Commento.** commento.io、其 API 與小工具腳本全部回傳 404。Internet Archive 的抓取顯示該站在 2026 年 5 月 25 日仍可運作，至 2026 年 6 月 11 日已回傳 404。
- **Cusdis.** cusdis.com 及其 API 回傳 Cloudflare 錯誤 521，表示 Cloudflare 後端的伺服器已關閉。抓取顯示該站在 2026 年 8 月 27 日仍可運作，至 2026 年 10 月 16 日已回傳 521。小工具腳本仍會載入，導致您的頁面只顯示一個空白的評論框。

我們尚未發現任何一個專案的關閉公告。如果您自行託管 Commento 或 Cusdis，您的安裝不受此影響，且可以在準備遷移時自行匯出。

## Find Your Data

您可以採取的路徑取決於您手頭的資源：

1. **您有匯出檔案。** 也請搜尋您的收件匣，因為 Commento 會以「.gz」檔案透過電子郵件寄送匯出。直接跳到匯入步驟。
2. **您自行託管。** 從您自己的儀表板匯出，然後依照匯入步驟操作。
3. **您使用了託管服務卻沒有匯出檔案。** 原本用來匯出的儀表板已不存在。請閱讀下方的復原說明。

## Import an Export File

登入後，前往<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">此處匯入檔案</a>。從下拉選單中選擇 **Commento (.gz, .json)** 或 **Cusdis (.json)**，然後上傳您的檔案。無需先解壓 Commento 的 .gz 檔案。

匯入會在背景執行，完成後您會收到電子郵件。重新匯入是安全的，因為每則評論會依其原始 ID 匹配並直接更新。

我們為每種格式提供了更詳細的指南：<a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> 與 <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>。它們原本從託管儀表板請求匯出的步驟已不再適用，但匯入細節仍然適用。

## Recover Your Comments From the Internet Archive

Commento 與 Cusdis 都是透過 JavaScript 從各自的伺服器載入評論。當 Internet Archive 使用瀏覽器抓取頁面時，會將這些回應與頁面一起保存。這些已保存的回應即包含評論串。

我們自行測試過。<a href="https://web.archive.org" target="_blank">Wayback Machine</a> 保存了超過 12,000 份 Commento 的評論回應以及 448 個 Cusdis 專案的抓取，且最新的資料來自 2026 年。我們沒有自助工具，會代為執行復原，請<a href="https://fastcomments.com/contact-us" target="_blank">與我們聯繫</a>以開始。

### Check Your Own Site First

在 Wayback Machine 中開啟您較常更新的文章，將網址替換成您自己的：

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

捲動至評論區。如果您的評論出現，表示該存檔包含此串。若未出現，請使用頁面上方的日曆切換不同年份。單篇文章顯示空白並不代表整個網站皆無資料，無論結果如何都請與我們聯繫。

### How the Recovery Works

1. **告訴我們您的網域。** 如果您使用了 Cusdis，還請提供您的 App ID（即您網站程式碼片段中的 `data-app-id` 值）。我們會要求您證明對該網域的所有權，因為這些評論屬於您的網站。
2. **我們尋找您的評論串。** 會收集您網站的抓取資料，並確認每筆屬於您的網域與頁面。Commento 的復原較耗時，因為存檔未依網站索引，我們必須逐一檢視。
3. **我們向您展示搜尋結果。** 您將看到恢復了多少頁面與評論，以及最新評論的日期，所有匯入動作尚未開始。
4. **我們將評論串匯入您的帳號。** 之後您可在審核儀表板中編輯或刪除任何評論。

### What Comes Back

<div class="pretty-table wide-table">

| 資料 | Commento | Cusdis |
| --- | --- | --- |
| 評論文字 | 是 | 是 |
| 作者顯示名稱 | 是 | 是 |
| 評論日期 | 是 | 是 |
| 回覆串接 | 是 | 是 |
| 投票分數 | 是 | Cusdis 沒有投票 |
| 頁面位址 | 是 | 是，雖然某些網站僅儲存路徑，我們需要您的網域 |
| 作者電子郵件 | 否 | 否 |
| 仍待審核的評論 | 否 | 否 |
| 最後一次抓取之後撰寫的評論 | 否 | 否 |
| 存檔從未抓取的頁面 | 否 | 否 |

</div>

### What to Expect

此復原是基於快照，因此請預期會有缺口。對於經常被抓取且近期較受歡迎的頁面效果最佳。

我們的測試顯示了範圍差異。於一個部落格，30 次查詢返回 810 則評論，分佈於 19 個頁面。另一個仍顯示評論的網站，最新的存檔止於 2023 年 10 月，而實際頁面持續到 2025 年 3 月。最後一次抓取與服務關閉之間撰寫的任何內容皆不在存檔中。

缺少的電子郵件同樣重要。復原的評論會保留作者名稱，但無法對應至 FastComments 帳號，且作者不會收到新回覆的通知。

## Replace the Widget

無論您選擇哪條路徑，都需要將舊的程式碼片段從網站移除。對於 Commento，請移除以下程式碼，若您使用評論計數，亦請移除 `count.js`：

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

對於 Cusdis，請移除以下程式碼：

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

接著加入我們的程式碼：

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

我們也支援多種前端框架，您可以在<a href="https://fastcomments.com/install-wizard" target="_blank">此處</a>找到。無需等復原完成即可切換。讀者可立即開始評論，且復原的串會在匯入後加入相同頁面。

### If Your URLs Are Changing

匯入的評論會綁定於頁面 URL，若 URL 不變，串會自動對應。若 URL 變更，請先匯入，然後在「管理資料」下使用「遷移評論」工具將其移至新位置。

## EU

如果您位於歐盟，建議在<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 建立帳號，以確保客戶資料留在歐盟境內。

## Recap

1. 在收件匣或其他地方尋找匯出檔案。
2. 若有檔案，前往<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">匯入頁面</a>上傳。
3. 若沒有，於 Wayback Machine 檢查您的網站，並<a href="https://fastcomments.com/contact-us" target="_blank">與我們聯繫</a>提供您的網域。
4. 用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們的程式碼</a>取代舊的片段。

敬上!

{{/isPost}}

---