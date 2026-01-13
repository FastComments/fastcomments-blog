---
[category:API & Development]
###### [postdate]
# [postlink]FastComments 使用 React[/postlink]

{{#unless isPost}}
需要將評論嵌入到使用 React 開發的應用程式中嗎？我們來幫你。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文章包含技術術語

#### 新聞更新

FastComments 現在有一個 React 組件，其功能與我們的 VanillaJS 小部件相當。

我們決定將這個庫命名為 fastcomments-react。你可以在這裡找到包含源代碼的 GitHub 倉庫 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">這裡</a>。

該倉庫還包含小部件的示例用法。

它已經在 NPM 上，你可以在這裡找到 <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">這裡</a>。

#### 工作原理

這個新組件的工作方式是，它的 React 組件是對現有 FastComments 小部件的包裝。

這意味著如果我們向現有組件添加功能或修復錯誤，您將會立即受益！

#### 為什麼需要這個新組件？

我們編寫 FastComments VanillaJS 小部件作為我們業務的核心（以及核心後端）。這意味著我們的設計是為了像現在這樣進行擴展。

雖然在沒有這個新的 React 庫的情況下，您可以透過編寫自己的庫將 FastComments 集成到您的應用程式中，但這將是一個重大的採用障礙。通過直接支持 React，我們使這類客戶更容易採用 FastComments。

#### 單頁應用程式？

FastComments 在其核心支持 SPA。該組件監控配置對象的變更 - 因此如果您更新當前頁面（稱為 urlId），小部件將重新渲染。

#### 現有客戶的變更

對於現有客戶來說，沒有任何變更 - 對於新項目使用 VanillaJS 版本的 FastComments **毫無問題**。fastcomments-react 依賴於 FastComments 的 VanillaJS 版本，並且始終如此。如果我們發布 Angular 或 Vue 組件，我們將遵循相同的模式。

我們的 VanillaJS 小部件是 FastComments 的一等公民。這次發布完全是對我們基礎結構的 *附加*。

此外，VanillaJS 小部件仍然是一個很好的解決方案，可以將嵌入式評論放入任何不使用框架的網頁中，例如靜態頁面。

#### 總結

通過發布 fastcomments-react 庫以及未來的庫，我們希望能使開發者在使用現代開發方法時更容易採用 FastComments。

乾杯！

{{/isPost}}

---