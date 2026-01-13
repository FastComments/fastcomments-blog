---
[category:Analytics]
###### [postdate]
# [postlink]FastComments 現在可以顯示評論查看次數[/postlink]

{{#unless isPost}}
FastComments 現在支持在每條評論旁邊顯示一個計數，當用戶查看評論時，這個計數會實時增長。
{{/unless}}

{{#isPost}}

### 新增功能

FastComments 現在支持在每條評論旁邊顯示一個計數，當用戶查看評論時，這個計數會實時增長。評論是否被查看取決於用戶的帳戶或匿名會話。它支持 SSO（安全 SSO 和簡單 SSO）。

### 在線演示

我們特別為這篇部落格文章啟用了評論查看次數！查看每條評論旁邊的計數！

### 文檔

[您可以在這裡找到有關設置查看次數的開發者文檔。](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### 性能

計數不會立即更新，會有一個小的（最多三秒）延遲，因為計數會被聚合然後通過網絡發送。這是一種優化，以便當您有一個直播事件，而幾千人平均在頁面上查看大約 10 條評論時，我們不會立即向每位用戶發送數百萬次更新（`3000 users x 3000 page loads = ~9 million changes`），以免拖慢他們的瀏覽器或使用所有的網絡帶寬。

### 總結

我們感謝持續給予我們反饋的客戶，讓我們能夠想到這樣的想法，並也給予我們時間來推出優化良好的功能。我們希望您繼續喜愛 FastComments。

乾杯！

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---