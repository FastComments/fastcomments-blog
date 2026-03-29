---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments 現在有一個專用的 Moodle 插件，提供 SSO、串聯評論和協作聊天室功能，適用於您的課程。
{{/unless}}

{{#isPost}}

### 新消息

我們很高興地宣布正式推出 FastComments 的 Moodle 插件。如果您一直在使用 Moodle 並且希望為您的課程添加即時、串聯評論或協作聊天室，這個插件使這一切變得簡單。它用一個恰當的 Moodle 插件替代了舊有的手動 PHP 方法，安裝只需幾分鐘，並能與您現有的 Moodle 用戶帳戶集成。該插件適用於 Moodle 4.1 及更高版本，源代碼可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上獲得。

### 開始使用

要安裝，請從 [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) 獲取該插件，然後通過您的 Moodle 網站的插件安裝程序進行安裝。或者，您可以下載它並將其解壓到 `<moodle-root>/local/fastcomments`，然後以站點管理員身份登錄並訪問 **網站管理 > 通知**。Moodle 將檢測到新插件並自動運行安裝。

安裝完成後，前往 **網站管理 > 插件 > 本地插件 > FastComments** 進行配置。如果您希望使用安全的 SSO（我們推薦這個選擇），您將需要您的 **Tenant ID**（在您的 FastComments 儀表板中找到）和您的 **API Secret**。

### 評論樣式

該插件支持三種評論樣式，因此您可以選擇最適合您的學生和課程結構的模式。

**評論**模式在頁面內容下方放置一個完整的評論小工具。學生可以回覆串聯評論、@提及、上讚和下讚，還有豐富文本編輯器和用於訂閱頁面新評論的通知鈴。

<div class="text-center">
    <div class="sm">課程頁面的評論</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**協作聊天**模式在頁面頂部添加一個工具條，提示用戶選擇文本並開始討論。所選的文本與內容綁定，因此對話始終與正在討論的內容保持一致。它還顯示在線用戶和當前活躍討論的數量。該模式不會渲染底部小工具。

<div class="text-center">
    <div class="sm">與所選文本綁定的協作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**協作聊天 + 評論**同時提供這兩種功能。學生可以選擇文本進行內聯討論，還可以在內容下方使用完整的評論小工具。這對於您希望同時獲得快速內聯反饋和較長串聯對話的課程非常合適。

<div class="text-center">
    <div class="sm">頁面上同時激活的兩種評論樣式</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 自動 SSO

該插件支持三種 SSO 模式。**安全 SSO** 是推薦的選擇。它以 HMAC-SHA256 在伺服器端簽署用戶身份，使用您的 API Secret，因此憑證永遠不會在客戶端暴露。使用安全 SSO，Moodle 管理員會自動同步為 FastComments 模oder，這意味著網站管理員可以在沒有任何額外設置的情況下管理評論。用戶的頭像、姓名和電子郵件地址均會安全傳遞。

**簡單 SSO** 在客戶端傳遞用戶數據（姓名、電子郵件、頭像）而不帶簽名。設置簡單，但安全性不如 HMAC 方法高。最後，**無**會完全禁用 SSO，因此用戶可以匿名評論。

### 用戶通知偏好

學生可以直接從其 Moodle 個人資料中管理 FastComments 通知設置。在 **FastComments** 部分，他們可以切換回覆通知（當有人回覆他們的評論時會收到電子郵件）和訂閱通知（對所訂閱的線程接收電子郵件）。這將所有內容集中在一個地方，並讓學生控制他們收到的電子郵件數量。

### 總結

Moodle 插件現在已經可以使用。欲查看完整的設置指南，請參考 [Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html)，源代碼位於 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上。如果您有任何反饋，請在下方告訴我們！

乾杯！

{{/isPost}}