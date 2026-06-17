---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native 評論系統 SDK 更新[/postlink]

{{#unless isPost}}
我們從頭重建了 fastcomments-react-native-sdk：全新的、更高效的狀態管理，使用設計標記的重新設計，專用的即時聊天小工具，以及一流的網頁支援。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 更新內容

我們剛剛發布了 `fastcomments-react-native-sdk` 的 5.1 版本，我們的 React Native 庫，它使用真正的原生組件而非 WebView 來渲染評論和聊天。

我們重寫了內部結構，重新設計了整個外觀，添加了一個即時聊天小工具，將 SDK 帶到了網頁上，並升級到了最新的 React Native 和 React。

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### 為什麼有兩個 React Native 庫？

這裡有個簡短的說明，因為我們經常收到這個問題。我們提供兩個選擇：

- `fastcomments-react-native` 是我們的網頁小工具在 WebView 上運行的薄包裝，這是獲取所有功能的最快方式，並且它會自動受益於網頁修復。
- `fastcomments-react-native-sdk`（這個）使用原生的 React Native 組件渲染 UI，而不是 WebView。它更靈活，完全可主題化，且因為是原生的，所以感覺更原生。

為了獲得最佳體驗，我們推薦使用 SDK。本文的其餘部分將討論 5.0 中的更改。

### 新的狀態管理

這一更改的主要驅動力是確保我們的庫忠於我們的名稱並保持快速。我們收到了多位客戶對其性能的抱怨，因此現在已經修復。

SDK 原本在 Hookstate 中保持其評論樹。它能工作，但隨著線程和實時更新的增長，事情開始變慢。

我們用 Zustand 和一個扁平的、索引的商店取代了 Hookstate。評論現在生活在 `byId` 地圖中，與 `childrenByParent`、`rootOrder` 和 `pinnedIds` 索引一起，而不是嵌套在狀態中的樹。

這樣的好處：

- 實時事件（新評論、投票、編輯）變成 O(1) 變更，而不是遍歷和克隆樹。
- 我們放棄了之前每次提取時都會運行的兩個完整樹 JSON 深層克隆。
- 組件只訂閱它們所需的特定切片，標準選擇器模型，因此對於一條評論的投票只會影響那條評論。

最後一點的重要性超出你的想像。通過基於選擇器的訂閱，只有當自己的數據發生變化時，該行才會重新渲染。

### 基於標記的重新設計

舊的外觀是一堆硬編碼的樣式。新的默認樣式是由一組語義設計標記（`FastCommentsTheme`）生成的：顏色、間距、圓角、字體大小、字體粗細和頭像大小。整個樣式樹都是從這些標記中派生而來。

這意味著重新設計只需一個屬性：

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

黑暗模式只需一組標記：

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

重新設計本身具有更乾淨、現代中性的外觀：細線分隔符、藥丸式投票按鈕和芯片、填充的主要按鈕、圓形頭像以及一致的字體比例。`styles` 屬性仍然存在以進行手動覆蓋，因此現有的集成繼續運作。

### 專用的即時聊天小工具

我們添加了 `FastCommentsLiveChat`，這是一個基於與我們的 Android SDK 聊天視圖相同引擎的聊天預設：按時間順序的消息最新的在底部，作曲器在列表下方，帶有連接點和用戶數的實時標題條，自動滾動的當你閱讀舊消息時暫停，以及滾動時的無限歷史。每個預設都可通過 `config` 覆蓋。

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### 現在也在網頁上

同樣的 SDK 現在通過 `react-native-web` 在網頁上運行。豐富的文本作曲器（由 `react-native-enriched` 驅動）在 iOS、Android 和瀏覽器上以相同的方式渲染，因此編輯體驗在所有地方都一致，只需一次實現。評論列表可能會裁剪的重疊元素（菜單、GIF 選擇器、通知列表）在網頁版本中都位於其觸發器下方。

### 緊跟 React Native 的步伐

5.0 是針對 React Native 0.81 和 React 19 構建和測試的，並且它針對的是新架構（Fabric），這是原生富文本編輯器要求的。在這方面保持最新並不是繁瑣的工作：編輯器、手勢處理和渲染都會隨著 React Native 的推進而變得更快、更正確，我們希望穩步接受這些升級，而不是落後幾年。

### 總結

這次重寫是為了給 React Native SDK 提供與我們其他庫同等的一流地位：快速且可預測的數據模型，一個可以通過一個屬性主題化的外觀，一個聊天小工具，以及網頁支持，所有這些都是建立在現代的 React Native 基礎上。

您可以在 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> 上找到 SDK，並在 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> 上找到源代碼及範例。如有任何問題，請告訴我們。

乾杯！

{{/isPost}}

---