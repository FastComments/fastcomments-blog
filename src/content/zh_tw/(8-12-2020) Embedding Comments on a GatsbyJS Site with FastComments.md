---
[category:Integrations]
###### [postdate]
# [postlink]在 GatsbyJS 網站上嵌入 FastComments 評論[/postlink]

{{#unless isPost}}
您現在可以使用 FastComments 將評論嵌入使用 Gatsby 建立的網站中！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 新消息

我們最近推出了針對 FastComments 的 <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React 元件</a>。

這為我們帶來了許多機會 - 包括將 FastComments 與 Gatsby 集成。

#### 如果您編寫了自己的包裝器

如果您為 FastComments 編寫了自己的 React 包裝器 - 考慮用我們的新版本替換它。我們將為您維護這個抽象 - 並且它包含許多
巧妙的功能，例如 <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">配置變更時自動重載</a>。

#### 它是如何工作的

由於 FastComments 擁有一個 React 元件作為我們核心小部件的包裝器 - 這只是使用我們的 React 庫在客戶端實例化小部件的問題。

我們全面支持這個元件並會持續更新它。

#### 有範例嗎？

我們已經開始設置範例，您可以在 <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">這裡</a>找到。

#### 夜間模式

我們有一個範例是「夜間模式」 - 在背景為黑色 (或非常暗) 的網站上渲染 FastComments: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>。

此外，由於小部件會根據配置變更而回應，這意味著您可以有一種模式來切換網站主題，並輕鬆告訴 fastcomments-react 更新。

#### 結論

我們希望您發現將 FastComments 集成到您的 Gatsby 網站中快速而簡單。

乾杯！

{{/isPost}}

---