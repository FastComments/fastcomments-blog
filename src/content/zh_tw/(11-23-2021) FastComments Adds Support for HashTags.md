---
[category:Features]

###### [postdate]
# [postlink]FastComments 新增對 #HashTags 的支援[/postlink]

{{#unless isPost}}
曾經想為一個主題或資訊添加 #標籤 嗎？現在你可以了。
{{/unless}}

{{#isPost}}

### 新功能

在留言時，使用者現在可以輸入一個或多個 `#hashtags`。點擊留言中的 `#hashtag` 將會帶你到顯示相同標籤的其他留言的視圖。

此外，`#hashtags` 還可以用來連結到外部的內容。隨著此版本的推出，我們也啟用了 [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)，這使得可以在你的帳戶中預填 hashtags。

當預填 hashtags 時，我們可以為每個標籤定義一個 URL。這意味著 `#hashtags` 也可以用來連結到，例如，票證號碼或 CRM 中的文件。

`#` 符號也可以根據要求進行自定義。

### 如何使用

當你輸入 `#`，然後開始輸入一個 hashtag，將會顯示一個搜索結果的列表。

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags 使用示範" title="#hashtags 演示" />
</div>

只需點擊你希望添加的標籤。

此外，你可以使用上下箭頭鍵來瀏覽此列表，按下回車鍵選擇，或按下 Esc 離開。

我們知道你可能希望在不添加 hashtag 的情況下使用 `#` 符號。FastComments 將會檢測到這一點，而不會干擾你的輸入體驗。

### 添加標籤

如果你想使用的 hashtag 不在建議列表中，FastComments 將自動在後台創建這個標籤。

自動創建 `#hashtag` 可根據文檔 [這裡](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation) 禁用。

### 誰能使用

所有現有和新的 FastComments 客戶，無論是什麼層級，現在都可以使用 `#hashtags`。`#hashtags` 也已經被回朔到較早版本的留言小工具中。

### 自動完成功能如何運作

自動完成列表中顯示的標籤僅來自你的帳戶。HashTags 不會在 FastComments 租戶之間共享。

### 文檔

有專門的 `#hashtags` 文檔。請參見這裡： https://docs.fastcomments.com/guide-hashtags.html

### 總結

像 FastComments 的其他功能一樣，我們希望你發現這個功能快速且易於使用。

乾杯！

{{/isPost}}

---