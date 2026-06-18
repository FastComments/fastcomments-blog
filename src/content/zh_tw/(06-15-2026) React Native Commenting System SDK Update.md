---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native 評論系統 SDK 更新[/postlink]

{{#unless isPost}}
我們從頭重建了 fastcomments-react-native-sdk：新的、更高效的狀態管理、使用設計標記的重新設計、專用的即時聊天小工具，以及一流的網頁支持。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 新的變化

我們剛剛發布了版本 5.1 的 `fastcomments-react-native-sdk`，這是我們的 React Native 庫，使用真正的本地組件來呈現評論和聊天，而不是 WebView。

我們重寫了內部結構，重新設計了整體外觀，添加了即時聊天小工具，將 SDK 帶入網頁，並將其升級到最新的 React Native 和 React。

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### 為什麼有兩個 React Native 庫？

快速說明一下，因為我們常常會被問到這個問題。我們提供兩種選擇：

- `fastcomments-react-native` 是我們網頁小工具的薄包裝，運行於 WebView 中。這是獲得所有功能的最快方式，並且會自動受益於網頁修復。
- `fastcomments-react-native-sdk`（這一個）使用本地的 React Native 組件而不使用 WebView 來呈現 UI。它更靈活，完全可以主題化，並且感覺像是本地的，因為它真的就是本地的。

對於最佳體驗，我們建議使用 SDK。本文的其餘部分將介紹 5.0 中的變更。

### 新的狀態管理

這一變更的主要驅動是確保我們的庫忠實於我們的名稱並保持快速。我們有幾位客戶抱怨其性能，因此現在已經修正。

SDK 最初將其評論樹保存在 Hookstate 中。這樣是可行的，但隨著線程和即時更新的增長，情況開始變慢。

我們用 Zustand 和一個扁平的索引存儲取代了 Hookstate。評論現在以 `byId` 映射的形式存在，並搭配 `childrenByParent`、`rootOrder` 和 `pinnedIds` 索引，而不是嵌套在狀態中的樹。

好處：

- 實時事件（新評論、投票、編輯）變成了 O(1) 的變更，而不需要遍歷和克隆樹。
- 我們去掉了在每次獲取時運行的兩個完整樹 JSON 深度克隆。
- 組件僅訂閱它們所讀取的片段，這是標準的選擇器模型，因此對一個評論的投票只會影響那個評論。

最後一點比聽起來更重要。通過基於選擇器的訂閱，只有當其自身數據改變時，行才會重新渲染。

### 基於標記的重新設計

舊的外觀是一堆硬編碼的樣式。新的默認值是從一組語義設計標記 (`FastCommentsTheme`) 生成的：顏色、間距、圓角、字體大小、字體粗細和頭像大小。整個樣式樹基於這些標記推導而成。

這意味著重新設計只需一個屬性：

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

黑暗模式只需一組標記：

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

重新設計本身是一個更乾淨、現代中性的外觀：髮線分隔符、圓形投票按鈕和標籤、填充的主要按鈕、圓形頭像，以及一致的字型比例。`styles` 屬性仍然存在以便進行手術性重寫，因此現有的整合仍然運作。

### 專用的即時聊天小工具

我們新增了 `FastCommentsLiveChat`，這是一個基於相同引擎的聊天預設，與我們的 Android SDK 聊天視圖相對應：按時間順序的消息，最新的在底部，作曲器位於列表下方，帶有連接點和用戶計數的實時標題條，自動滾動在您閱讀較舊的消息時暫停，並且滾動向上時支持無限歷史。每個預設都可以通過 `config` 進行覆蓋。

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### 現在也在網頁上

同樣的 SDK 現在通過 `react-native-web` 在網頁上運行。豐富文本編輯器（由 `react-native-enriched` 提供支持）在 iOS、Android 和瀏覽器上以相同的方式渲染，因此編輯體驗在單一實現下始終如一。評論列表原本會剪裁的覆蓋層（菜單、GIF 選擇器、通知列表）在網頁版本中錨定在其觸發器下方。

您可以在實時的 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">組件瀏覽器</a> 中試用每個小工具，這是在瀏覽器中通過 `react-native-web` 運行的 SDK。

### 與 React Native 保持同步

5.0 是在 React Native 0.81 和 React 19 上構建和測試的，並且其目標是新架構（Fabric），這是本地豐富文本編輯器所需的。在這裡保持更新並不是繁瑣的工作：編輯器、手勢處理和渲染隨著 React Native 的發展而變得更快、更正確，我們寧願平穩地接受這些升級，而不是在數年之後才落後。

### 結論

這次重寫的目的是為了讓 React Native SDK 與我們的其他庫享有同樣的一流地位：一個快速且可預測的數據模型，一個可以用一個屬性主題化的外觀，一個聊天小工具，以及網頁支持，所有這些都建立在現代的 React Native 基礎上。

您可以在 <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> 上找到該 SDK，源代碼及示例可以在 <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a> 獲取，並且每個小工具都在 <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">組件瀏覽器</a> 中實時運行。如果您遇到任何問題，請在下方告訴我們。

祝好！

{{/isPost}}

---