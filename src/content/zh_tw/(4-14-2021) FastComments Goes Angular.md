---
[category:API & Development]

###### [postdate]
# [postlink]FastComments 推出 Angular 版本[/postlink]

{{#unless isPost}}
需要將評論嵌入使用 Angular 開發的應用程式中嗎？我們幫您解決。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 新聞

FastComments 現在有一個與我們的 VanillaJS 小部件功能相當的 Angular 組件。

我們決定將這個庫命名為 ngx-fastcomments。您可以在 <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">這裡</a> 找到包含源代碼的 GitHub 倉庫。

該倉庫還包含以 Angular 工作區形式顯示小部件的示例用法。

您可以在 NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">這裡</a> 找到它。

#### 工作原理

這個新組件的工作原理是 Angular 組件包裝了現有的 FastComments 小部件。

這意味著如果我們向現有組件添加功能或修復錯誤，您會立即受益！

#### 為什麼需要新組件？

我們編寫了 FastComments VanillaJS 小部件，作為我們業務的核心（以及核心後端）。這意味著我們設計它的方式就是為了能夠像現在這樣擴展。

雖然在沒有這個新的 Angular 庫的情況下，您可以通過編寫自己的庫將 FastComments 集成到您的應用程序中，但這將是一個值得克服的重大障礙。通過直接支持 Angular，我們使這些類型的客戶更容易採用 FastComments。

#### 單頁應用程式？

FastComments 在核心上支持單頁應用程式。該組件使用變更檢測監控配置對象的變化。例如，如果您更新當前頁面（稱為 urlId），小部件將會重新渲染。這使得像切換深色模式或添加分頁的用例容易實現。

#### 對現有客戶的變化

對現有客戶來說，沒有任何變化——使用 FastComments 的 VanillaJS 版本來用於新項目是**沒有問題**的。ngx-fastcomments 依賴於 FastComments 的 VanillaJS 版本，並將一直依賴。如果我們發布新組件，我們將遵循相同的模型。

我們的 VanillaJS 小部件是 FastComments 的一級公民。此版本完全是對我們基礎架構的*增強*。

此外，VanillaJS 小部件仍然是將嵌入式評論放入任何不使用框架的網頁（如靜態頁面）的良好解決方案。

#### 總結

透過發布 ngx-fastcomments 庫及未來的庫，我們希望能夠使開發者在使用現代開發方法論的同時，更輕鬆地接受 FastComments。

乾杯！

{{/isPost}}

---