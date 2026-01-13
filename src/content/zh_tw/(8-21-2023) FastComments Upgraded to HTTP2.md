---
[category:Performance]
###### [postdate]
# [postlink]FastComments 升級至 HTTP/2[/postlink]

{{#unless isPost}}
我們進行了一些基礎設施升級，使 FastComments 的效能更上一層樓！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 新消息

自發布以來，FastComments 一直使用 HTTP/1.1。最近，我們已經將所有地區的整個基礎設施切換到 HTTP/2。

### 影響

此更新使 FastComments 能夠隨時保持符合現代標準，同時提供一些效能提升。缺點是某些舊版瀏覽器不再受支持。

### 已棄用的瀏覽器和客戶端

您可以在 [此處找到不支持的瀏覽器](https://caniuse.com/http2)。主要問題將是 IE11，它只有部分支持，然而這些用戶應該切換到 Edge。

Chrome、Firefox 和其他瀏覽器已支持 HTTP/2 多年，因此我們認為進行這次更改是安全的。

### 性能好處

FastComments 在資源提供及其順序方面已相當優化。例如，評論小部件只需幾個請求來加載——最初的 iframe，然後是包含樣式的腳本以減少請求數量，然後是向 API 發出請求以獲取所有所需的信息。與許多其他服務相比，這相當精簡。

因此，這並不是 HTTP/2 特別有幫助的案例。HTTP/2 的主要好處是進行並發請求。

然而，HTTP/2 確實幫助我們進行壓縮！標頭現在以二進制協議發送，這樣更為緊湊，某些擁有大量資源的插件將更快加載，因為請求可以並行進行管道化。

### 總結

感謝我們的客戶在推行這些變更時所表現出的耐心。我們希望您能繼續喜愛 FastComments。

敬上！

{{/isPost}}

---