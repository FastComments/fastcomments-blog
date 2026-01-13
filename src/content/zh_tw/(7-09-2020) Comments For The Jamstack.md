---
[category:Integrations]
###### [postdate]
# [postlink]Jamstack 的評論[/postlink]

{{#unless isPost}}
舊的事物再次變得新鮮。預渲染並通過 CDN 提供網站現在被稱為「JamStack」—但它們不必完全靜態！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

<a href="https://jamstack.org/" target="_blank">Jamstack</a> 是一種編寫網站的方法，它不依賴於傳統的網絡伺服器。相反，它們是
從我們稱之為「CDN」的伺服器上提供，以確保最佳的用戶體驗（加載速度非常快）。性能對於使用 Jamstack 編寫的網站來說是重中之重—就像
FastComments 一樣。

#### 為什麼 FastComments 與 Jamstack 一起工作

FastComments 只需要在您想要添加評論的靜態頁面底部添加一小段（目前 < 11kb）代碼。因此，在典型的
Jamstack 網站上安裝 FastComments 只需幾秒鐘，就像任何靜態網站一樣。

#### 潛在問題

我們理解 Jamstack 網站並不總是從靜態內容開始。它們可能是用 Preact、React 或 Vue 等技術製作的。為了實現最大的互操作性，我們使用原生 JS 編寫了 FastComments 小工具，以便與所有主流框架兼容。然而，如果您在使用 FastComments 和選擇的框架時遇到問題，請
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告訴我們</a>。

#### 總結

我們希望您發現 FastComments 使您的用戶能夠與您的網站互動，提供反饋，並留下評論，以他們通常無法在靜態網站上做到的方式。
例如，此頁面是預渲染的，就像傳統的 Jamstack 網站一樣，您可以看到 FastComments 在底部愉快地運行。

乾杯！

{{/isPost}}

---