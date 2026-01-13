---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]在VueJS網站上嵌入FastComments評論[/postlink]

{{#unless isPost}}
需要在使用Vue開發的應用程序中嵌入評論嗎？我們可以幫助您。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 新聞

FastComments現在有一個與我們的VanillaJS小工具功能相當的Vue組件。

我們決定將這個庫命名為fastcomments-vue。您可以在這裡找到包含源代碼的GitHub存儲庫<a href="https://github.com/FastComments/fastcomments-vue" target="_blank">這裡</a>。

該存儲庫還包含小工具的示例用法。

它在NPM上，您可以在這裡找到<a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">這裡</a>。

#### 工作原理

這個新組件的工作方式是Vue組件是現有FastComments小工具的包裝器。

這意味著如果我們為現有組件增加功能或修復漏洞，您將立即受益！

#### 為什麼新增組件？

我們編寫了FastComments VanillaJS小工具，使其成為我們業務的核心（連同核心後端）。這意味著我們設計它的方式是可以擴展的，就像我們現在所做的。

雖然在沒有這個新的Vue庫的情況下，您可以通過編寫自己的庫將FastComments集成到您的應用程序中，但這將是採用的一個主要障礙。通過直接支持
Vue，我們使這類客戶更容易採用FastComments。

#### Vue 3.0

我們為Vue 3.0專門構建了一個組件，稱為<a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>。

#### 單頁應用程序？

FastComments在其核心支持SPA。該組件監控配置對象的變更 - 因此如果您更新當前頁面（稱為urlId），小工具將重新加載。

#### 對現有客戶的變更

對現有客戶沒有任何變化 - 使用FastComments的VanillaJS版本來進行新項目也**沒有**任何問題。fastcomments-vue依賴於FastComments的VanillaJS版本並將始終如此。如果我們釋放Angular或Vue組件，將遵循相同的模型。

我們的VanillaJS小工具是FastComments的一級公民。這次發布對我們的基礎設施是完全*附加式*的。

此外，VanillaJS小工具仍然是將嵌入式評論放入任何不使用框架的網頁上的一個很好的解決方案，例如靜態頁面。

#### 總結

通過發布fastcomments-vue庫和未來的庫，我們希望可以使開發者在使用現代開發方法的同時更容易採用FastComments。

乾杯！

{{/isPost}}

---