---
[category:Features]

###### [postdate]
# [postlink]FastComments 現在支援 Markdown[/postlink]

FastComments 帶來了更豐富的評論體驗，現在支援使用 Markdown！

{{#isPost}}

Markdown 是一套用於格式化文本的約定。例如，要創建一個粗體字，我們可以 \*\*這樣做\*\*。
插入正常的鏈接只需粘貼原始 URL，圖像的使用方式不變。

這裡是由 Github 提供的 Markdown 記憶牌: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>。

### FastComments 支援哪些 Markdown 語法？

我們全面支援 Markdown，除了標題。當定義標題時，我們會將其視為普通文本渲染，因為它們會分散對話的流暢性。標題適用於像博客文章和文檔的內容 - 而不是對話。

FastComments 一直以來都支持使用 [img]...[/img] 語法插入圖像。這將繼續得到支持，因為它比 Markdown 的方式更容易理解。

### 混合內容

單個評論可以包含所有格式 - markdown、鏈接、圖像、代碼片段和表格。

### 避免 XSF/XSS 攻擊

此前，FastComments 通過網路傳送純文本，並在客戶端解析。現在，HTML 會通過網路傳送，我們在數據庫中保持每條評論的兩個版本，以支援編輯評論等功能。

直接將 HTML 發送到評論中存在風險 - 所以所有生成的評論都會被解析和清理，以防止跨站和跨框架攻擊。

### 數據導出

導出評論時，您將獲得用戶在輸入評論時看到的版本。如果您想獲取原始 HTML，請聯繫我們。

### 性能問題

功能膨脹有拖慢速度的習慣。這不是我們在 FastComments 想要做的事情。
添加這個功能已 **減少** 我們客戶端小部件的大小約 400 字節 - 從 9.53kb 減少到 9.12kb - 意味著頁面加載更快。

雖然從理論上講，這個功能可能會減慢評論保存機制，但我們尚未看到任何性能降級，並始終在監控我們的 API。

### 我該如何獲得它？

Markdown 支援已自動部署到我們所有的客戶。您應該不會看到太多發布在您網站上的內容變化 - 除了現在用戶可以加粗、下劃線，還可以做一些花哨的事情，如創建簡單的表格。

和所有功能發布一樣，我們期待聽到反饋，雖然我們有許多自動化測試… 如果您看到任何問題 - 請告訴我們！

祝您評論愉快。

{{/isPost}}

---