---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments 獲得全新外觀[/postlink]

{{#unless isPost}} FastComments 已經更新。了解更新內容以及您如何獲得它。 {{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 全新外觀

直到今天，FastComments 評論小工具的外觀和感覺僅有逐步演變。今天，我們發布了一個全新版本！

查看下方的比較（拖動滑塊進行比較）：

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### 現有用戶

由於我們的許多用戶自定義評論小工具，我們將新的 UI 完全分開。您在遷移之前不應該看到任何更改。

### 誰可以獲得

從今天開始註冊的新客戶將自動獲得新設計。我们所有的框架、庫和插件都已經更新，以納入新版的 FastComments 評論小工具。

### 先前版本的生命結束

我們目前並未設定先前版本的評論小工具的生命終止。這並不意味著未來不會宣布。然而，當我們這樣做時，將給予合理的緩衝期（從公告到不再支持的 6 到 12 個月）。

我們的自動化測試套件已更新，以支持不同版本的評論小工具，因此先前版本仍將持續接受自動化測試。

### 黑暗模式及其他功能

新設計支持黑暗模式，就像原始的評論小工具一樣。所有功能標誌和設定都已遷移。

在黑暗模式方面，在舊的評論 UI 中，黑暗模式的資源在頁面加載時始終包含，即使未被使用。這大約是每次都下載到客戶端的額外 2kb，即使不需要。

新版本的評論小工具僅在需要時獲取這些資源，包括樣式。

### 預設頭像

新 UI 中使用的預設頭像不同。遷移時，整個產品中在管理儀表板和所有通知電子郵件中使用的預設頭像也將更新。

### 自定義規則的影響

我們意識到，當我們對面向公眾的評論小工具進行樣式更改時，可能會破壞我們客戶的自定義。不用擔心，我們已經仔細檢查每個人的自定義小工具樣式以確保其未回退。然而，如果您看到問題，請告訴我們。

### 性能影響

評論小工具的總大小從 15.4kb 增加到 17.4kb。雖然我們認為在 UI 美觀提升的情況下，稍微增加打包大小是值得的，但我們已經計劃措施將其降低回去。

總的來說，新 UI 加載更快，因為更多的資產現在被捆綁在一起，因此請求更少。

### 如何遷移

#### 通過支持

只需聯繫您的支持代表，或在[這裡](https://fastcomments.com/auth/my-account/help)開始對話。

#### WordPress

如果您使用的是 **WordPress**，只需升級到最新版本並更新您可能擁有的任何自定義樣式。

#### 自定義集成

如果您使用的是 **VanillaJS** 評論小工具，只需更改：

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

至：

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

如果您使用的是 **React、Angular 或 Vue** 庫，只需升級到版本 2。

### 一些技術統計

從構思、設計到實施，這是一個為期兩個月的項目，涉及 **100+ 文件** 並更改了 **九千多行代碼**。

我們還徹底改造了我們的構建系統，以便能夠在評論小工具的不同版本之間擁有共享的代碼基礎。這個系統允許我們使用編譯時表達式僅包括適當版本的 UI 代碼，降低了小工具包的大小。

### 前瞻性思維

先前的設計從 2019 年持續到 2021 年中期。我们希望這個新外觀能讓我們更進一步，而我們的新基礎設施用於管理多個版本的評論 UI 將允許 FastComments 隨著時間的推移而不斷增長，而不會中斷我們的客戶基礎。

愉快的評論！

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---