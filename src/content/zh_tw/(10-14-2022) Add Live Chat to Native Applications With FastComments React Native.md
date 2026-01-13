---
[category:整合]
[category:API 與開發]
###### [postdate]
# [postlink]將即時聊天功能添加到使用 FastComments 的原生應用程序中[/postlink]

{{#unless isPost}}
經過幾個月的努力，我們很高興地宣布 fastcomments-react-native-sdk 現在已經達到 1.0 版本，並對外發布。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 此文章包含技術術語

### 新聞

在 FastComments，我們推出了使用 FastComments 建立 React Native 應用程序的新方式。之前，您需要使用我們的 react-native 包裝器來包裝 VanillaJS 庫。這引入了幾個記憶體和延遲問題，因為需要使用網頁視圖 - 您應用程序中的瀏覽器 - 來加載我們的庫。

我們現在已經 **完全** 將 FastComments 移植到 React Native，並編寫了我們自己的所見即所得編輯器，以完全消除對網頁視圖的需求。

該庫支持不同的外觀和佈局。例如，這裡是 Erebus 外觀，它是一種即時聊天風格的暗色主題：

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

該庫可以在 [GitHub 的 FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) 上找到，以及在 [NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk) 上可用。

### 可自訂

新的原生庫設計成可自訂，就像現有的網頁庫一樣。

您可以：

- 自訂庫使用的所有資產和圖標。
- 通過從頂部傳遞一個樣式對象，自訂庫中每個組件的樣式。
- 自訂所有翻譯。
- 使用預定義或社群開發的外觀之一。
- 使用許多網頁庫支持的相同配置選項。

### 完整功能列表

該庫支持許多功能。不完整的列表如下：

- [x] 阻止
- [x] 聊天反應
- [x] 子評論和回覆
- [x] 自訂樣式（作為類型樣式表）
- [x] 表情符號
- [x] 旗標
- [x] Gif 瀏覽器 - 帶有默認的熱門 + 搜索功能。圖片和搜索通過代理匿名化。
- [x] 實時評論
- [x] 媒體選擇和上傳
- [x] 原生所見即所得編輯器，支持圖片。
- [x] 通知服務（在背景中獲取用戶的未讀通知以推送給他們等）
- [x] 通知列表（點擊鈴鐺時顯示）。支持訂閱。
- [x] 分頁（按鈕）
- [x] 分頁（無限滾動）
- [x] 固定評論
- [x] 安全、簡單的單一登入和匿名評論。
- [x] 幾個預定義的外觀。
- [x] 顯示/隱藏評論切換
- [x] 主題
- [x] 用戶活動指標
- [x] 投票

### 它是如何運作的

該庫是 FastComments 客戶端用 TypeScript 和 React Native 完全重寫的結果。

### 長期計劃

長期來看，我們將平行維護 VanillaJS 庫和 react-native 庫，以及我們可能開發的任何未來原生庫。

### 接下來是什麼？

我們期待來自用戶和社群的反饋，以便隨著時間的推移改進這個庫，正如我們對網頁生態系統所做的那樣。

### 總結

我們知道這個庫被一些人期待已久。就像所有重大版本發布一樣，我們很高興能夠花時間對其進行優化、測試和妥善發布。

乾杯！

{{/isPost}}

---