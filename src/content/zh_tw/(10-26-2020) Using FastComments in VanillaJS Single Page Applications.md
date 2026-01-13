---
[category:API & Development]
###### [postdate]
# [postlink]在 VanillaJS 單頁應用程式中使用 FastComments[/postlink]

{{#unless isPost}}
雖然我們有專門的 React 和 VueJS 元件，但 vanilla 小工具也可以在單頁應用程式中使用。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 目標受眾

本文面向開發者。

#### 引言

FastComments VanillaJS 小工具的大多數示例用法是一個非常簡單的代碼片段，它加載當前頁面 URL 的評論線程。這是因為
這是我們絕大多數客戶的使用案例，但最近我們看到越來越多的開發者正在構建單頁應用程式並使用 FastComments。

首先，請記住 FastComments 有專門的 <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> 和 <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> 元件，所以如果你使用那些庫，請自行查看，以便不必為 FastComments 建立自己的包裝器。

不過，如果你是使用 VanillaJS 構建應用程式，你可以動態實例化和更新評論小工具。

#### 首先，URL 和 URL ID

FastComments 有兩個標識符，用於標識與評論線程綁定的頁面或文章。在配置對象中，它們是 "url" 和 "urlId" 屬性。

URL 是評論小工具的 URL。理想情況下，你應該能夠從應用程式外部訪問這個 URL。它將在通知電子郵件和
管理工具中被暴露為鏈接。

URL ID 是一個字符串，可以是 URL 或 ID - 它可以是任何值，只要它代表當前頁面。如果你有文章、文章或頁面的 ID，你可以使用該值
來替代此值中的頁面 URL。URL ID 分開的原因是，你可能希望在 URL 中存儲額外的信息，這會使 URL 對頁面來說不唯一。

請注意，我們已在 TypeScript 中記錄了小工具支持的完整配置 <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">在 GitHub 上</a>。

#### 具體內容和實際演示

當小工具被實例化時，捕獲來自你通常會調用的 FastCommentsUI 函數的結果：

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

然後，你可以在實例對象上調用 "update" 方法來更新配置。這將刷新組件：

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

你可以在這個 <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">fiddle</a> 上看到一個工作示例。

請注意，在這個示例中我們使用 document.getElementById，但你可以使用任何機制來獲取目標元素。

#### 注意事項

雖然只更新 "urlId" 是可行的，但你應該更新 "urlId" 和 "url"，即使它們相同，這樣來自通知電子郵件和
管理工具的鏈接才能正常工作。僅僅更新 "url" 是不夠的 - 評論是與 "urlId" 綁定的。

#### 總結

我們希望你覺得這個指南有幫助。如有任何問題，歡迎在下方評論。

乾杯！

{{/isPost}}

---