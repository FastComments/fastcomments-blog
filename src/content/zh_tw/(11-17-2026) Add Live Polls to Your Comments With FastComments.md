[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]在您的評論中加入即時投票與 FastComments[/postlink]

{{#unless isPost}}
現在評論支援即時投票！讀者直接在討論串中投票，結果即時更新給頁面上的所有人，投票功能可在網頁小工具以及我們的 iOS、Android 和 React Native SDK 中使用。
{{/unless}}

{{#isPost}}

### What's New

此版本加入 **Live Polls**。投票附加在評論上，並在其中呈現。讀者點選選項投票，無需離開討論串，且隨著投票進入，結果即時更新給所有觀看頁面的人。無需重新整理，也不必手動統計回覆。

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

由於投票本身就是一則評論，對話會持續附著在上面。人們投票後，會回覆說明原因。

### Creating a Poll

當投票功能開啟時，評論編輯器會出現投票按鈕。點擊它會在文字輸入框下方開啟投票編輯器，您可以設定：

- **問題**，最多 200 個字元。
- **選項**，2 到 10 個。
- **何時關閉**：永不，或在 1 天、3 天或 1 週後關閉。關閉的投票會顯示最終結果並停止接受投票。
- **隱私**：匿名、僅管理員可見，或公開。
- **需要投票才能查看結果**，此設定會在觀眾投票或投票關閉前隱藏結果。

然後照常撰寫評論並發佈。投票可用於新評論與回覆。

### Voting

每人對每個投票只能投一次票，且在投票開放期間可以更改。除非投票設定為必須先投票，否則讀者可點選 **顯示結果** 以在選擇前查看目前狀況。

隱私設定以投票為單位，顯示於選項下方，讓投票者在投票前知道誰能看到自己的投票。匿名投票（預設）僅顯示總數，無人（包括管理員）能看到誰投了哪個選項。對於管理員可見的投票，管理員與版主可開啟 **查看誰投票**。公開投票則任何人皆可查看。

### Turning It On

投票預設為關閉。開啟您的 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">小工具自訂</a>，勾選 **Enable Polls**，並選擇誰可以建立投票：

- **Admins/Moderators Only**（預設），適用於您自行執行投票的情況。
- **Everyone**，適用於讓社群成員相互提問的情況。

投票預設需要已登入的使用者。勾選 **Allow Anonymous Poll Votes** 可允許任何人投票。為了公平，匿名投票每個 IP 位址在每個投票每小時限制為三票。

如同所有自訂規則，此設定可套用於整個網站、單一網域或單一頁面。

### Notifications

投票的作者會即時收到回應通知：當大量使用者同時投票時會合併通知，且在當天投票有新回應時會收到每日電子郵件。只有首次投票算作回應，因此更改投票不會產生額外通知。通知遵循投票的隱私設定，匿名投票僅會顯示有多少新回應，永不透露是誰。

### Native Mobile SDKs

投票不僅限於網頁小工具。我們的原生 SDK 會以真實的原生元件呈現投票卡、投票編輯器、即時結果與投票者清單，且會從您的儀表板讀取相同的小工具設定。只要開啟一次投票功能，即可在網站與應用程式中顯示。

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0，透過 Swift Package Manager。
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0，作為 `com.fastcomments:android-sdk:2.1.0`。
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0，於 NPM。

iOS 與 Android SDK 也可以從您自己的 UI 發佈投票。iOS 範例如下：

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

<a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> 與
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a> 的 README，以及
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native 變更紀錄</a>，說明了細節，包括如何重新設計投票顏色以符合您的應用程式。

### The API

投票也支援於 REST API。您可以在 `POST /api/v1/comments` 時傳遞 `poll` 來同時建立投票與評論，或之後使用 `/api/v1/polls/:commentId` 來新增、編輯、關閉或移除投票。投票可透過 `/api/v1/poll-votes` 列出、投下或移除，這讓將結果匯出至試算表或自家 CMS 變得簡單。API 遵循與小工具相同的設定，且匿名投票的個別投票無法透過 API 讀取。

### Overhead

除非啟用投票，否則不會載入投票程式碼，因此不會拖慢其他使用者的評論小工具。

### Documentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Live Polls 指南</a> 介紹了如何啟用投票、誰能建立投票、匿名投票、投票者隱私、通知以及 API。

### Try It

在 <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls 示範</a> 中有即時投票。對其投票，然後在第二個分頁開啟該頁面，即可看到結果變化。您也可以在那裡發佈自己的投票。

### In Conclusion

如果您的討論串不斷變成人數統計，試試投票功能，並在下方告訴我們您希望接下來看到什麼。

敬上！

{{/isPost}}

---