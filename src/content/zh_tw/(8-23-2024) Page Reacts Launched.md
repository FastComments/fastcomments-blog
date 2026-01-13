---

[category:Features]
###### [postdate]
# [postlink]頁面反應啟動[/postlink]

{{#unless isPost}}
FastComments 現在支持在評論小部件上方顯示頁面反應及其計數。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 已經支持我們所稱的反饋模組，您可以在評論區域上方顯示星級評分、NPS 或其他問題。

然而，許多用戶想要更簡單的功能 - 在評論小部件上方顯示一些帶有反應的圖標，能夠自定義這些圖標，甚至可能根據用戶自定義選項，等等。

截至今天，我們已經推出了這個功能。

所有 FastComments 計畫現在都可以使用頁面反應。

### 在線示範

我們已為這篇博文啟用了頁面反應配置的示範，您可以在下面找到它！

### 文檔

[您可以在這裡找到設置頁面反應的開發者文檔。](https://docs.fastcomments.com/guide-page-reacts.html)

### 反應用戶列表

頁面反應還可以配置顯示一個工具提示，揭示留下特定反應的用戶列表。

### 總結

我們感謝那些不斷給予反饋的客戶，讓我們能夠想到這樣的想法，並且也給我們時間推出經過良好優化的功能。我們希望您繼續喜愛 FastComments。

乾杯！

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---