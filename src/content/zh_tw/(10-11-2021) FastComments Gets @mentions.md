---
[category:Features]
###### [postdate]
# [postlink]FastComments 支援 @mentions[/postlink]

{{#unless isPost}}
曾經想過在評論中 @提及一個或多個用戶嗎？現在你可以了。
{{/unless}}

{{#isPost}}

### 新功能

之前，FastComments 會在你回覆他們的評論時通知用戶，但無法在單一評論中標註多個人。此外，這些通知每小時批次發送一次。現在有了 `@mentions`，可以標註一個或多個用戶，FastComments 將立即通過電子郵件通知他們。

### 如何使用

當你輸入 `@`，然後是用戶名稱的開頭時，將會出現搜尋結果列表。

<div class="text-center">
    <img src="images/fc-mentions.png" alt="提及使用" title="@mentions 示範" />
</div>

簡單地點擊你想標註的用戶名稱。

此外，您可以使用上下箭頭鍵來瀏覽此列表，並按 Enter 鍵選擇，或按 Esc 鍵退出。

我們知道你可能想在不標註用戶的情況下使用 `@` 符號。FastComments 將檢測到這一點並不會打擾你的輸入體驗。

### 誰可以使用

所有當前和新加入的 FastComments 客戶，在所有層級上，現在都可以使用 `@mentions`。`@mentions` 已向早期版本的評論小部件回退。

### 自動完成是如何運作的

自動完成列表中顯示的用戶由以下因素決定：

- 在同一頁面或主題中評論的用戶。
- 通過相同網站創建其 FastComments 帳戶的用戶。
- 當前網站的管理員。
- 屬於當前租戶的 SSO 用戶。

### 編輯評論

可以通過編輯現有評論來添加提及。然而，`Moderate Comments` 應用目前不支持自動完成 `@mentions`。

### 未來考量

未來，當有用戶在瀏覽器窗口中打開 FastComments 時，如果他們選擇接收通知，則在被提及時將會收到提示。

### 總結

就像 FastComments 的其他部分一樣，我們希望您覺得這個功能快速且易於使用。

乾杯！

{{/isPost}}

---