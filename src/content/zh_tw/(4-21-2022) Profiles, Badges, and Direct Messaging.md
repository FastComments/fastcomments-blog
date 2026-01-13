---
[category:Features]

###### [postdate]

# [postlink]用戶檔案、徽章和直接消息[/postlink]

{{#unless isPost}}在這次釋出中，我們有許多功能可以獎勵使用 FastComments 的社群並幫助他們進行溝通。{{/unless}}

{{#isPost}}

### 新的內容
FastComments 正式發布了用戶檔案和相關功能。

### 用戶檔案

用戶的檔案由他們的名字、是否在線、最近的活動以及在其檔案上留言的地方組成。

他們的徽章及獲得徽章的進展也會在這裡顯示。

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments User Profile" title="FastComments User Profile"></video>
</div>

用戶可以通過點擊評論線程中的其頭像來查看自己的檔案，或 [訪問其帳戶頁面](https://fastcomments.com/auth/my-account)。

此外，您可以從用戶的檔案直接發送消息。

### 用戶檔案模態
當用戶的頭像被選中時，檔案模態會打開。這也已為版主添加到評論管理頁面。

### 用徽章獎勵用戶

徽章是近期加入 FastComments 的另一項功能，讓您能夠獎勵社群中的用戶。創建徽章非常簡單：

<div class="text-center">
    <img src="/images/create-badge.png" alt="Create a Badge" title="Create a Badge" />
</div>

徽章可以根據以下條件頒發：

- 留下的評論數量
- 獲得的讚成票數
- 收到的回覆數量
- 鎖定的評論數量
- 老兵（從第一次評論以來的時間）
- 深夜評論
- 快速回覆時間
- 特定頁面回覆
- 版主 - 刪除的評論數量
- 版主 - 批准的評論數量
- 版主 - 未批准的評論數量
- 版主 - 審核過的評論數量
- 版主 - 標記為垃圾郵件的評論數量
- 版主 - 標記為非垃圾郵件的評論數量

如您所見，我們可以獎勵用戶的情況種類繁多。

我們可以定義多個 *級別* 的徽章。例如，我們可以添加 `評論數` 的徽章，設置 10、100 和 1000 條評論的門檻。隨著用戶在您的社群中互動，他們獲得的徽章會隨時間 **堆疊**。

我們不能忘記 *版主*。在許多社群中，這是一份無人感謝的工作。通過為他們配置版主徽章，給您的版主一些值得炫耀的東西。

我們還支持一些獨特的案例，例如 `夜貓子` 和 `快速回覆時間` 徽章，以表彰那些深夜活躍或快速回覆的成員。`快速回覆時間` 在使用 FastComments 的即時功能時效果最佳。

當新徽章創建時，它們會自動加入符合條件的社群現有成員。

### 直接消息

客戶自 FastComments 發布以來就要求能夠直接消息用戶。經過兩年，我們高興地宣布這項功能，並感謝那些耐心等待的人。

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direct Messaging" title="FastComments Direct Messaging"></video>
</div>

直接消息允許社群中的成員彼此私信，但這也為版主和管理員提供了一個聯繫評論者的有用工具。

與 FastComments 的大多數功能一樣，所有直接消息功能都是即時的。

#### 非同步直接消息

當您給用戶發送消息時，他們可能會處於離線狀態。在這種情況下，我們將發送電子郵件通知用戶他們有新消息。

#### 通過電子郵件直接消息

當用戶通過電子郵件收到消息時，他們可以通過回覆該電子郵件來回覆。

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM Email" title="DM Email" />
</div>

當他們這樣做時，他們的回覆將 **即時** 顯示在他們檔案的消息標籤中。

### 安全的 SSO

FastComments 用戶檔案與現有的安全 SSO 安裝完全兼容。

用戶的隱私設置等可以通過 SSO 載荷中的 `isProfileActivityPrivate` 標誌進行配置。

默認情況下，`isProfileActivityPrivate` 為 true。

### 現有客戶

我們已經將這項功能的推出完成到所有現有客戶的所有等級。

### 配置隱私

通過查看您的檔案，有以下選擇：

- 禁用對您檔案的評論。
- 防止其他人查看您的活動。
- 防止其他人直接消息您。

### 收集的數據

用戶檔案是根據我們今天擁有的數據創建的，例如他們的名字、最近留下的評論等等。

我們不會收集其他數據來擴展用戶的檔案。我們喜歡將用戶檔案視為論壇中典型用戶的檔案。

### 總結

我們認為這些功能大大擴展了 FastComments 作為平台的能力，我們希望您覺得它們實用且易於使用。

乾杯！

{{/isPost}}

---