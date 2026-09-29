[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]不需選擇使用者名稱的評論[/postlink]

{{#unless isPost}}
FastComments 現在可以為每位新訪客提供一個唯一且中性的使用者名稱，讓他們不必自行創造。共享的預設使用者名稱也不再會被第一位使用者「佔用」。
{{/unless}}

{{#isPost}}

### 新功能

如果您的網站沒有登入機制，想要留下評論的訪客會被要求提供兩樣資訊：電子郵件和使用者名稱。電子郵件很簡單，但使用者名稱必須是唯一的、會公開顯示，且他們必須立即想出來。

此版本移除了這一步。於您的小工具自訂中開啟 **Generate Usernames Automatically**，每位新訪客將自動帶有類似 `BraveOtter4172` 的名稱預先填入。他們可以保留或自行覆寫。無論哪種方式，都能更快抵達評論框。

### 開啟方式

開啟您的 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">小工具自訂</a>，找到 **Anonymization**（匿名化）區段，勾選 **Generate Usernames Automatically**。不需要其他設定。

此功能在有或沒有 **Allow Anonymous Comments**（允許匿名評論）時皆可運作。如果您仍希望每位評論者提供電子郵件，請關閉匿名評論。訪客只需輸入電子郵件，使用者名稱會自動處理，僅此而已。若不需要電子郵件，開啟匿名評論，訪客即可僅輸入評論內容即可發表。

### 訪客看到的畫面

使用者名稱欄位會預先填入產生的名稱。這是一個普通的輸入框，想使用其他名稱的使用者只需自行替換。沒有任何隱藏或強制的項目。

名稱由兩個單詞加上一個數字組成，易於閱讀且保持中性。沒有人會變成 `user_83729`。

### 每個名稱皆唯一

產生的名稱在提供之前會先檢查是否已存在於帳號中，且會為該訪客的瀏覽器會話保留，避免下一位訪客取得相同名稱。已登入的使用者、SSO 使用者，以及已發表過評論的訪客不會被分配新名稱，會保留原有名稱。

再次造訪的訪客若輸入先前使用過的電子郵件，系統會將其對應至既有帳號，因此即使瀏覽器資料在兩次造訪間被清除，也不會產生第二個身分。

### 錯誤修正 - 預設使用者名稱現在真正共享

有些使用者使用 **Default Username** 並設定為「Anonymous」以接近此功能。這裡有個問題。使用者名稱必須唯一，因此第一位以「Anonymous」且提供電子郵件的訪客會佔有該名稱，接下來使用不同電子郵件的訪客則會被告知名稱已被佔用。

此問題已修正。預設使用者名稱現在被視為共享的顯示名稱，而非身份識別。每位保留該名稱的訪客在幕後都有自己的帳號，且皆顯示為「Anonymous」。訪客自行輸入的使用者名稱仍需保持唯一，與之前相同。

如果同時設定兩者，產生的名稱會優先使用。

### 文件說明

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">自動產生使用者名稱指南</a>說明此選項以及它如何與其他匿名評論設定互動。

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">預設使用者名稱指南</a>說明共享名稱的行為。

### 總結

此功能源自一位客戶的網站，訪客是可能只留下單一回饋的患者。要求他們提供電子郵件與唯一的使用者名稱實在是多餘的問題。如果有任何設定阻礙您的讀者使用評論框，請在下方告訴我們。

敬上！

{{/isPost}}