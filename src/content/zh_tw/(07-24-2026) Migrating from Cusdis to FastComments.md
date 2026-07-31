[category:Migration]
###### [postdate]
# [postlink]從 Cusdis 遷移至 FastComments[/postlink]

{{#unless isPost}}
閱讀此文章以了解如何完整地將 Cusdis 遷移至 FastComments，包括您的討論串、審核狀態和頁面 URL。
{{/unless}}

{{#isPost}}

Cusdis 是一個輕量級、開源的評論系統。如果您已經超出其使用範圍，且需要垃圾訊息過濾、投票、回應、通知、單一登入 (SSO) 以及完整的審核儀表板等功能，FastComments 現在可以直接匯入您的 Cusdis 資料。

## 匯出您現有的評論

在您的 Cusdis 控制台中，請求完整的資料匯出。Cusdis 會提供一個包含您的專案、頁面以及所有評論的單一 JSON 檔案，內含評論串與審核狀態。根據您的 Cusdis 設定，匯出檔案會以電子郵件寄送給您，或是立即下載。

無需編輯或解壓縮。請保持 \".json\" 檔案原樣，我們的後端會直接讀取它。

## 匯入至 FastComments

Once you're logged in, go <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">此處匯入檔案</a>. 從下拉選單中選擇 **Cusdis (.json)**，然後上傳您的檔案。

### 等待幾分鐘

FastComments 的匯入是「非同步」的。上傳檔案與處理檔案是分開的步驟。對於小檔案，成功訊息會立即顯示。 在匯入頁面的底部有一個表格，每一列代表一次匯入嘗試。重新整理頁面即可查看狀態以及目前已匯入的評論數量。

### 完成時

匯入完成（無論成功與否）時，您都會收到電子郵件。上傳成功且您看到匯入項目顯示為「Requested」或「Running」狀態後，即可安全關閉此頁面。

重新匯入是安全的。FastComments 會依照原始的 Cusdis ID 匹配每則評論，因此再次執行匯入會更新現有評論，而不會產生重複。如果匯入失敗，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">請與我們聯繫</a>，我們會協助您。

## 匯入內容

- **分層回覆。** Cusdis 允許回覆多層巢狀，FastComments 會重建完整的父子結構。
- **審核狀態。** 已批准的評論保持已批准。仍在等待審核的評論會進入您的 FastComments 審核佇列，供您檢查。
- **作者。** 每位評論者的姓名與電子郵件會被保留，且已註冊的 FastComments 使用者會以電子郵件匹配。
- **格式。** Cusdis 的評論使用 Markdown 撰寫。FastComments 會呈現相同的 Markdown，包括連結、圖片與換行，讓您的討論串顯示與之前完全相同。

在 Cusdis 中已刪除的評論不會被匯入，讓您匯入的討論串保持乾淨。

## 取代 Cusdis 小工具

資料完成遷移後，請從網站中移除小型的 Cusdis 代碼片段，並嵌入<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我們自己的</a>。您可以先同時運行 Cusdis 與 FastComments，以測試外觀與使用感受。我們支援多種前端框架，<a href="https://fastcomments.com/install-wizard" target="_blank">您可以在此找到</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以協助您</a>。

### 同時遷移 URL

Cusdis 會將每則評論與其頁面 URL 連結，只要您的 URL 沒有變動，切換就很簡單。如果您的 URL 也在變更，請先匯入 Cusdis 資料，然後在「管理資料」下使用內建的 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> 工具，將評論搬移至新位置。您可以為舊位置與新位置輸入整個網域、完整 URL，或 URL ID，這樣只需一組「從」與「到」即可一次搬移所有符合的頁面。此作業會以背景任務執行，完成後會發送電子郵件通知您。

如果您希望我們代為處理（例如頁面數量眾多），<a href="https://fastcomments.com/auth/my-account/help" target="_blank">請告訴我們</a>舊的與新的 URL。

## 歐盟

如果您位於歐盟，建議在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 建立帳號，以確保您的客戶資料留在歐盟境內。

## 重點回顧

1. 從 Cusdis 匯出資料為 JSON
2. 在 FastComments 匯入頁面上傳檔案，並選擇 **Cusdis (.json)**
3. 將 Cusdis 代碼片段替換為<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a>

{{/isPost}}

---