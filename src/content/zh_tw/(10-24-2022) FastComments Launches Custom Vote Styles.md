---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments 推出自訂投票樣式[/postlink]

{{#unless isPost}}
曾經想過從預設的上/下投票樣式切換到一個普通的心形圖示嗎？現在您可以了。
{{/unless}}

{{#isPost}}

### 新功能

之前，要自訂投票欄位，必須撰寫自訂的程式碼和CSS。這也意味著如果您想做一些事情，例如啟用匿名投票，但禁用下票，這不僅需要自訂程式碼，而且投票請求無法在伺服器端驗證。這意味著人們可以直接呼叫伺服器匿名地下票，這在某些社群中發生過。

我們現在在平台中引入了 `voteStyle` 的概念，第一個新的投票樣式是許多人所要求的心形圖示。

通過小部件自訂UI定義時，這也為平台添加了驗證，從而徹底防止下票，這樣駭客就無法繞過UI將用戶下票到無法接受的地步，這是在啟用匿名投票的情況下可能發生的情況。

### 如何使用

前往 [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) 並在 `Vote Style` 下選擇 `Heart`。

### 文件

該功能的正式文檔在 [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style) 上可用。

### 誰可以使用

所有當前和新的 FastComments 客戶，無論任何層級，現在均可訪問自訂投票樣式。該功能僅支持 v2 的評論小部件及以後版本。

### 優化

不同投票樣式的程式碼未包含在小部件的客戶端下載中，除非啟用，以防止產品的臃腫。

### 未來展望

我們現在有能力添加不同類型的投票和反應，這在未來可能會實現。

### 總結

像 FastComments 的其他部分一樣，我們希望您覺得這個功能快速且易於使用。

乾杯！

{{/isPost}}

---