---
[category:Tutorials]
###### [postdate]
# [postlink]簡化您的 FastComments 安裝除錯過程[/postlink]

{{#unless isPost}}
留言未顯示？設定似乎未生效？找出這些問題變得簡單多了。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

#### 新消息

在 <a href="https://fastcomments.com">FastComments</a>，我們剛推出了一個 Google Chrome 瀏覽器擴充功能。這個擴充功能將幫助您了解評論小工具正在接收的配置，以及為什麼它可能不顯示。

您可以在這裡找到這個擴充功能：<a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### 如何使用

如果您發現評論小工具未加載，或是您定義的某些配置未顯示，請嘗試安裝<a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">這個擴充功能</a>並在相關頁面上開啟它。要在工具列中看到圖示，您可能需要點擊右上角的拼圖圖標來將它固定，如下所示：

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="如何固定擴充功能" title="如何固定擴充功能" class="lozad" />
</div>

這個擴充功能可以幫助除錯兩類錯誤。第一種，若小工具根本未包含在頁面上，或在腳本中存在重大錯字。

第二種是如果某些配置似乎沒有生效。

要進行除錯，您只需單擊圖示。

如果工具在頁面上找不到評論小工具，您將看到一個大紅錯誤：

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="未找到 Embed.js 範例" title="未找到 Embed.js 範例" class="lozad" />
</div>

如果找到了一個或多個小工具的實例，您將看到它們的配置分別顯示：

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="多個配置範例" title="多個配置範例" class="lozad" />
</div>

此外，FastComments 除錯工具還會顯示常見問題的警告 - 例如當沒有評論時，小工具在只讀模式下不顯示。

#### “最終”實例設定？

您可能會看到除錯工具顯示兩組配置 - 一組標為“傳遞給小工具”，另一組標為“最終”。

“傳遞給小工具”的配置，顧名思義，就是您傳遞給小工具的配置。一些值由 embed.js 隱式傳遞，例如 URL 或頁面標題 - 這些都包含在內。

“最終”配置是小工具用於渲染自身的所有內容。這可能意味著自填值（例如實例 ID），或 <b>來自小工具自定義管理頁面的值</b>。

#### 它是如何工作的

評論小工具將其配置存儲在除錯工具可以找到的地方，然後除錯工具掃描您當前所在的頁面以尋找小工具的實例並加載到內存中。

#### 這個擴充功能收集了什麼資訊？

FastComments 除錯工具不會聯繫任何 FastComments 伺服器。事實上，除非您開啟它，否則小工具甚至不會檢查您所在頁面的內容。

#### 總結

我們希望提供更多這樣的工具能讓所有類型的客戶設置 FastComments 變得更容易。請在下面的評論區告訴我們這對您有何幫助。

我們知道在某些情況下，您仍然可能需要協助 - 為此，仍然有<a href="https://fastcomments.com/auth/my-account/help" target="_blank">客戶支持頁面</a>。

乾杯！

{{/isPost}}

---