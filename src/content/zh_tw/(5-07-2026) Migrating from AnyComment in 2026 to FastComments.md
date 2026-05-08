---
[category:Migration]
###### [postdate]
# [postlink]在2026年從AnyComment遷移至FastComments[/postlink]

{{#unless isPost}}
閱讀此文章，了解如何在2026年完全從AnyComment遷移到FastComments。
{{/unless}}

{{#isPost}}

我們有許多客戶詢問在2026年從AnyComment遷移的相關事宜。

## AnyComment在WordPress中運行

AnyComment是一個WordPress插件。與像Disqus或Hyvor Talk這樣的獨立平台不同，它並不運行自己的後端——您的評論直接存儲在您的WordPress數據庫中，與核心WordPress使用的同一個`wp_comments`表中。這對於遷移來說是一個好消息：無需處理單獨的AnyComment匯出，也不需要與任何第三方服務器協調。您的數據已經在您自己的服務器上。

這意味著標準的FastComments WordPress遷移流程可以不經任何額外步驟地處理AnyComment。

## 選項1：FastComments WordPress插件（建議）

最簡單的方式是安裝<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress插件</a>。該插件會指導您將WordPress安裝與FastComments鏈接，並自動複製您現有的評論數據。無需手動下載或上傳任何內容。數據將從您的WordPress數據庫複製到我們的服務器，因此遷移完成後，這將減輕您的服務器負擔。

大多數遷移在幾分鐘內完成。

數據傳輸完成後，停用AnyComment。評論將繼續由FastComments提供，並且如果您啟用該功能，插件會保持您的WordPress數據庫同步作為備份，這樣您永遠擁有您的數據。

## 選項2：WordPress XML匯出

如果您更願意手動遷移，或是您已經不再使用WordPress並且只有備份XML，請使用WordPress的內建匯出功能。

1. 在您的WordPress後台，前往**工具 -> 匯出**並下載XML文件。
2. 登錄到您的FastComments儀表板，然後<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">點此匯入文件</a>。
3. 從下拉菜單選擇**WordPress (.xml)**並上傳您的文件。

由於AnyComment寫入`wp_comments`，每個AnyComment的線程都位於該XML中，與其他WordPress評論並行。匯入器會自動將它們匹配到正確的帖子。

## 替換AnyComment小工具

如果您使用了選項1，FastComments WordPress插件已經在您的網站上替換了AnyComment——只需在遷移完成後停用AnyComment。

如果您使用了選項2並且保留了WordPress安裝，請在遷移後安裝FastComments插件，以處理小工具的渲染和持續同步。如果您完全不再使用WordPress，請在您的新網站上使用我們的<a href="https://fastcomments.com/install-wizard" target="_blank">安裝代碼片段</a>——我們支持許多前端框架，您可以在<a href="https://fastcomments.com/install-wizard" target="_blank">這裡找到</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我們可以提供幫助</a>。

## 歐盟

如果您在歐盟，您可能希望在<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>上創建帳戶，以便您的客戶數據保持在歐盟內。

## 重點回顧

1. 安裝FastComments WordPress插件，讓它複製您的數據，**或**從WordPress匯出為XML並在匯入頁面上上傳
2. 停用AnyComment
3. 如果您也不再使用WordPress，請在新網站上更換小工具代碼

{{/isPost}}

---