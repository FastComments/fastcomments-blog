---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments 發布伺服器端渲染[/postlink]

{{#unless isPost}}
在您的網站上添加評論功能，而不使用 JavaScript。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

## 有什麼新消息

自 2020 年初上線以來，FastComments 一直專門使用 JavaScript 來渲染評論小部件。

如果我們告訴您，您可以擁有幾乎所有相同的基本功能，但不使用 JS，您會怎麼想？

<div class="text-center">
    <div class="sm">這是一個截圖，停止嘗試點擊它。</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

上述截圖是 FastComments 的評論小部件，無需使用 JavaScript。[您可以在這裡查看此頁面，無需 JavaScript。](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## 如何使用

如果您使用 WordPress，FastComments 插件版本 3.10.1 會自動添加對 SSR 的支持，以作為用戶在禁用 JS 的情況下的備份。

對於自定義實現，獲取評論線程的 UI，只需調用該頁面的 `/ssr/comments`：

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

其中 `$urlId` 是頁面的 url 或 id。這方面的文檔在 [這裡](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id)。

例如，使用 PHP 我們可以向頁面發送一個 iframe，該 iframe 會在內部渲染評論線程：

<div class="code"><div class="title">基於 PHP 的 SSR 示例</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

我們還可以進行 API 調用來獲取評論線程的 HTML，並進行渲染或存儲。

完整文檔可在 [SSR 文檔 docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html) 獲得。

## SSO

因為我們喜歡聽起來像企業的縮寫，不用擔心，SSR 支持 SSO。[此處有一個帶 SSR 的單點登錄示例。](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## 本地化

基於 SSR 的端點會根據瀏覽器發送的語言相關標頭自動對響應進行本地化。它還可以使用與基於 JavaScript 的小部件相同的本地化覆蓋。

## 為什麼要建設這個

關於像 FastComments 這樣的服務的主要抱怨之一是它們需要 JS。我們已經使我們的評論小部件精簡到最小，並確保我們的 API 調用 SLA 低於 20 毫秒，但許多小型社區不會選擇這樣的解決方案，如果這意味著要在他們的網站上添加 JS。

這也開啟了使用無法訪問 JavaScript 的渲染引擎的可能性。

## 技術

FastComments 使用自己的一個小型微框架來渲染 UI。該框架使用與 React 類似的方法，不過允許在初始渲染之外進行手動 DOM 操作。

核心評論小部件庫有一個單一入口點 - 它接收一組狀態並創建生成的 HTML 和 CSS 供渲染。我們在伺服器上也簡單地調用這個。當用戶與頁面互動時，狀態會更改並提取最新的 HTML。這是作為新年期間舉行的黑客松的結果而建立的。

## 實時評論

由於 UI 是由伺服器一次性渲染的，因此實時評論功能不可用。

此外，通知鈴目前不可用。我們將在未來開放添加此功能的可能性。

## 性能

伺服器渲染的 UI 使用與基於 JavaScript 的小部件相同的存儲優化和渲染引擎。對於小型評論線程，性能實際上更好，因為用戶不必下載一個然後提取評論和渲染 UI 的腳本。

## 爬蟲與 SEO

FastComments 已經與網頁爬蟲良好協作；如果 SEO 是一個關注點，則不需要使用 SSR。

## 未來應用

我們計劃在未來推出論壇解決方案。傳統上，論壇是分頁的並且伺服器端渲染。現代論壇解決方案不再遵循這一常規，改用無限滾動和客戶端渲染。我們認為這不必是使用第三方論壇解決方案的唯一選擇。

## 總結

我們希望您覺得這個指南有幫助且易於閱讀。如有任何問題，請隨時在下方評論。

乾杯！

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---