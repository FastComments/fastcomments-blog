---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle 外掛[/postlink]

{{#unless isPost}}
FastComments 現在提供專門的 Moodle 外掛，具備 SSO、串疊評論和協作聊天功能，適用於您的課程。
{{/unless}}

{{#isPost}}

### 新功能

我們很高興宣布官方的 FastComments Moodle 外掛。如果您一直在使用 Moodle 並希望為您的課程添加即時、串疊評論或協作聊天，這個外掛使其變得簡單。它取代了舊有的手動 PHP 方法，提供一個適合的 Moodle 外掛，可在幾分鐘內安裝並與您現有的 Moodle 用戶帳戶集成。該外掛適用於 Moodle 4.1 及更高版本，源代碼可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上獲得。

### 開始使用

要安裝，請從 [GitHub 存儲庫](https://github.com/FastComments/fastcomments-moodle) 下載 ZIP 文件並解壓到 `<moodle-root>/local/fastcomments`。然後以網站管理員身份登錄並訪問 **網站管理 > 通知**。Moodle 將檢測到新外掛並自動運行安裝。

安裝完成後，前往 **網站管理 > 外掛 > 本地插件 > FastComments** 進行配置。如果您想使用安全的 SSO（我們推薦此選擇），您需要您的 **租戶 ID**（可在您的 FastComments 儀表板中找到）和 **API 密鑰**。

請注意，從 GitHub 的手動下載是臨時的，我們在等待該外掛在 Moodle 外掛目錄中的批准。獲得批准後，您將能夠直接從 Moodle 的外掛安裝器中安裝它。

### 評論樣式

該外掛支持三種評論樣式，您可以選擇最適合您的學生和課程結構的樣式。

**評論** 模式會在頁面內容下方顯示完整的評論小工具。學生可以獲得串疊回覆、@提及、支持和反對的選選擇、一個豐富的文本編輯器，以及訂閱新評論的通知鈴聲。

<div class="text-center">
    <div class="sm">課程頁面的評論</div>
    <img src="images/moodle-course-comments.png" alt="課程評論" title="課程評論" />
</div>

**協作聊天** 模式會在頁面頂部添加一個欄，提示用戶選擇文本並開始討論。被突出顯示的文本與內容保持固定，這樣對話可以緊密關聯到正在討論的具體內容。它還顯示在線用戶和活躍討論的數量。該模式不會渲染底部小工具。

<div class="text-center">
    <div class="sm">與選定文本相關的協作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="協作聊天" title="協作聊天" />
</div>

**協作聊天 + 評論** 同時提供這兩種功能。學生可以突出顯示文本以便進行行內討論，並且可以使用內容下方的完整評論小工具。這非常適合需要快速行內反饋和更長串疊對話的課程。

<div class="text-center">
    <div class="sm">頁面上同時啟用兩種評論樣式</div>
    <img src="images/moodle-page-comments.png" alt="頁面評論" title="頁面評論" />
</div>

### 自動 SSO

該外掛支持三種 SSO 模式。**安全 SSO** 是推薦的選項。它在伺服器端使用您的 API 密鑰與 HMAC-SHA256 簽名用戶身份，因此憑據永遠不會在客戶端暴露。有了安全 SSO，Moodle 管理員會自動同步為 FastComments 版主，這意味著您的網站管理員可以無需額外設置即可管理評論。用戶的頭像、名稱和電子郵件地址都會安全地傳遞。

**簡單 SSO** 在客戶端傳遞用戶數據（姓名、電子郵件、頭像）而不進行簽名。這種設置快速但比 HMAC 方法安全性低。最後，**無** 完全禁用 SSO，因此用戶以匿名方式評論。

### 用戶通知偏好

學生可以直接從他們的 Moodle 個人資料管理 FastComments 的通知設置。在 **FastComments** 區域，他們可以切換回覆通知（當有人回覆他們的評論時接收電子郵件）和訂閱通知（接收已訂閱主題的電子郵件）。這讓所有內容集中在一處，並使學生能夠控制接收的電子郵件數量。

### 總結

Moodle 外掛現在已經可以使用。要查看完整的設置指南，請查看 [Moodle 集成指南](https://docs.fastcomments.com/guide-installation-moodle.html)，源代碼也在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上。請在下方告訴我們您的反饋意見！

祝好！

{{/isPost}}

---