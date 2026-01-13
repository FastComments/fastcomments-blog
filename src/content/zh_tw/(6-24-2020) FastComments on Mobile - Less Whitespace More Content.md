---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments 在行動裝置上的應用 - 減少空白區域增加內容[/postlink]

{{#unless isPost}}
我們改善了 FastComments 在行動裝置上的可讀性和外觀。
{{/unless}}

{{#isPost}}
#### 問題

當我們第一次發佈 FastComments 時，我們希望設計既時尚又能在行動裝置和桌面瀏覽器上運行良好。然而，隨著我們添加更多功能並觀察用戶如何與 FastComments 互動，我們意識到在我們的行動 UI 上浪費了許多螢幕空間，因為我們試圖讓它看起來「漂亮」。

因此，我們想出了一個折衷方案。

#### 解決方案

在這裡，您可以看到之前的情況，我們的空間利用並不高效。

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobile Version Before"
        title="Mobile Version Before"
        class='lozad' />
</div>

現在，我們用水平螢幕空間取代了垂直螢幕空間。

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobile Version After"
        title="Mobile Version After"
        class='lozad' />
</div>

    
#### 自訂規則影響

我們知道當我們對公共評論小部件進行樣式更改時，可能會破壞客戶的自訂。請放心，我們已經檢查了所有客戶的自訂小部件樣式，以確保它們不會損壞。不過如果您遇到問題，請告訴我們。

#### 性能影響

這次更改使小部件的大小增加了約 300 字節，總共達到 10.1kb。對於所有增加小部件大小的版本，我們將尋找方法將其縮減回來。

祝您評論愉快！

{{/isPost}}