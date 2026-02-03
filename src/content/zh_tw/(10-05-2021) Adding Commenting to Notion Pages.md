---
[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]將評論添加到 Notion 頁面[/postlink]

{{#unless isPost}}
想在您的 Notion 頁面中添加評論嗎？我們可以幫您實現。
{{/unless}}

{{#isPost}}

## 更新內容

FastComments 現在已成為 embed.ly 的提供者，並因此提供 API 和服務，允許評論串嵌入支持 [oEmbed](https://oembed.com) 的應用程序中。

這意味著您現在可以輕鬆地將即時評論添加到使用 Notion、Google Sites 或 Nimbus Note 構建的網站上。

## 如何使用 - 快速示範

登錄到您的租戶後，您可以簡單訪問 [fastcomments.com/create](https://fastcomments.com/create) 創建一個對話鏈接，然後可以將其添加到您的 Notion 頁面或任何與 embed.ly 集成的應用程序中。

您可以使用您的演示嵌入鏈接 [fastcomments.com/c/demo](https://fastcomments.com/c/demo) 自己嘗試一下：

<video src="images/fastcomments-notion.mp4" controls alt="FastComments 和 Notion 示範" title="FastComments 和 Notion 示範"></video>

然後，嵌入的評論小工具可以像 FastComments 的任何其他實例一樣進行自定義。

例如，如上方視頻所示，我們可以自定義評論小工具，使得用戶只需輸入他們的姓名，而不必輸入電子郵件即可進行評論或投票。

## 更新 2023 - 支持 Super.so

您現在可以使用 FastComments 將評論添加到基於 Notion 文件構建的 Super.so 網站！ [您可以在這裡找到文檔。](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites 也得到了支持，流程類似。

1. [創建要嵌入的對話。](https://fastcomments.com/create)
2. 編輯您的 Google 網站時，導航到 `插入` -> `嵌入`。選擇 `透過 URL`。
3. 粘貼步驟 1 的 URL。
4. 按 `插入`。完成！

#### 添加嵌入鏈接

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="如何將 FastComments 添加到 Google 網站" alt="如何將 FastComments 添加到 Google 網站" />
</div>

#### 您的 Google 網站已添加評論功能！

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="完成！" alt="完成！" />
</div>

## Nimbus Note

Nimbus Note 也得到了支持，流程類似。

1. [創建要嵌入的對話。](https://fastcomments.com/create)
2. 在編輯您的筆記時，添加一個嵌入區塊。
3. 使用步驟 1 的 URL 作為要嵌入的 URL。
4. 按 `插入`。完成！

### 誰能使用

所有當前和新對 FastComments 的客戶，無論層級如何，現在都可以使用 oEmbed 支持。

### 嵌入現有對話

要嵌入現有對話，只需將傳遞給評論小工具的 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> 值輸入到創建對話頁面中作為對話名稱。

### 總結

像其他的 FastComments 一樣，我們希望您覺得這個功能快速且易於使用。

乾杯！

{{/isPost}}

---