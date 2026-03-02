---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle 插件[/postlink]

{{#unless isPost}}
FastComments 現在擁有一個專用的 Moodle 插件，提供單一登入、串接評論和為您的課程提供協同聊天功能。
{{/unless}}

{{#isPost}}

### 新功能

我們很高興地宣布正式推出 FastComments 的 Moodle 插件。如果您一直在使用 Moodle 並希望為您的課程添加即時、串接的評論或協同聊天，這個插件讓一切變得簡單。它用一個合適的 Moodle 插件取代了舊的手動 PHP 方法，安裝只需幾分鐘，並與您現有的 Moodle 用戶帳戶整合。該插件支持 Moodle 4.1 及以上版本，源代碼可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 獲得。

### 開始使用

要安裝，請從 [GitHub repository](https://github.com/FastComments/fastcomments-moodle) 下載 ZIP 檔並將其解壓縮到 `<moodle-root>/local/fastcomments`。然後以網站管理員身份登錄，並訪問 **網站管理 > 通知**。Moodle 將檢測到新插件並自動運行安裝。

安裝完成後，前往 **網站管理 > 插件 > 本地插件 > FastComments** 進行配置。如果您想使用安全的單一登入，我們建議您需要您的 **Tenant ID**（可以在您的 FastComments 儀表板中找到）以及您的 **API Secret**。

請注意，從 GitHub 手動下載是暫時的，我們在等待插件在 Moodle 插件目錄中獲得批准。一旦獲得批准，您將能夠直接從 Moodle 的插件安裝器中安裝它。

### 評論樣式

該插件支持三種評論樣式，您可以選擇最適合您的學生和課程結構的樣式。

**評論** 模式在頁面內容下方放置完整的評論小部件。學生可以進行串接回覆、@提及、投票和反對投票、使用豐富文本編輯器，以及訂閱頁面新評論的通知鈴聲。

<div class="text-center">
    <div class="sm">課程頁面的評論</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**協作聊天** 模式在頁面頂部添加一個欄，提示用戶選擇文本並開始討論。所選文本將固定於內容上，因此對話將始終與正在討論的主題相關。它還顯示在線用戶和活躍討論的數量。此模式不會呈現底部小部件。

<div class="text-center">
    <div class="sm">固定於選定文本的協作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**協作聊天 + 評論** 同時提供這兩者。學生可以突出顯示文本以進行內聯討論，並在內容下方使用完整的評論小部件。這對於需要快速內聯反饋和較長的串接對話的課程非常合適。

<div class="text-center">
    <div class="sm">頁面上同時啟用兩種評論樣式</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 簡單有效的 SSO

該插件支持三種 SSO 模式。**安全 SSO** 是推薦選項。它使用您的 API Secret 在伺服器端簽署用戶身份，因此憑據從未在客戶端暴露。使用安全 SSO 時，Moodle 管理員會自動同步為 FastComments 模oderator，這意味著您的網站管理員可以管理評論，而無需任何額外設置。用戶的頭像、姓名和電子郵件地址都會安全地傳遞。

**簡單 SSO** 在客戶端無簽名地傳遞用戶數據（姓名、電子郵件、頭像）。它設置迅速，但不如 HMAC 方法安全。最後，**無** 則完全禁用 SSO，因此用戶以匿名方式評論。

### 用戶通知偏好

學生可以直接從他們的 Moodle 個人資料管理 FastComments 通知設置。在 **FastComments** 部分他們可以切換回覆通知（當有人回覆他們的評論時收到電子郵件）和訂閱通知（為他們訂閱的主題收到電子郵件）。這樣可以將所有內容集中在一個地方，讓學生控制他們接收的電子郵件數量。

### 總結

Moodle 插件現已可用。如需完整的設置步驟，請查看 [Moodle 整合指南](https://docs.fastcomments.com/guide-moodle.html)，源代碼位於 [GitHub](https://github.com/FastComments/fastcomments-moodle)。如果您有任何反饋，請在下面告訴我們！

乾杯！

{{/isPost}}

---