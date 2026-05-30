---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]如何從 Disqus 評論中移除廣告[/postlink]

{{#unless isPost}}
在免費的 Disqus 計劃中，你的評論區附帶廣告。有兩種方法可以去除它們。較好的選擇還能讓你的評論加載更快並保持讀者不被追蹤。
{{/unless}}

{{#isPost}}

Disqus 透過在你的評論區放置廣告來支付其免費計劃的成本，這些廣告會出現在你的內容下面，正是在讀者與你交流的地方。這些廣告不是你的。你無法選擇它們，並且你不會從中賺得一分錢。這就是免費等級的交易。

確實有兩種方法可以移除它們。

## 選項 1：升級你的 Disqus 計劃

直接的路徑是支付給 Disqus。他們的付費計劃可以關閉廣告。你可以在 <a href="https://disqus.com/pricing/" target="_blank">Disqus 價格頁面</a> 找到當前的選擇。

這樣做可以，但需要明確你實際上在購買什麼。你是支付來解決一個缺點。廣告消失了，而 Disqus 的其他部分保持不變：評論區仍然加載大量的第三方腳本，並且你的讀者在已嵌入的網站上仍然會被追蹤。你是支付來移除廣告，而不是為了讓評論區更輕量或更私密。

## 選項 2：切換到一個從未顯示廣告的平台

移除廣告的另一種方法是使用一個從一開始就不運行廣告的評論平台。 :)

只需每月 $0.99，FastComments 提供深度性能優化的功能，且無需追蹤或廣告。

## 你保留每條評論

人們最擔心的部分是失去他們現有的討論。FastComments 內置了 Disqus 匯入器，可以將你的評論、用戶名稱、用戶頭像、內嵌圖片、投票和時間戳帶過來。我們甚至為你將所有圖片轉移到我們自己的 CDN。

如果你想要完整的詳細步驟，我們有一個專門的指南：[從 Disqus 遷移到 FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html)。下面是簡要版。

## 三個步驟切換

### 1. 從 Disqus 匯出你的評論

遵循 <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus 的匯出步驟</a>。他們會向你發送一個擴展名為 "gz" 的文件。你不需要打開或解壓縮它，默認的 Windows 安裝也無法這樣做。我們的後端可以直接讀取該壓縮文件。

### 2. 將文件匯入到 FastComments

一旦你登錄，前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">匯入頁面</a>，從下拉選單中選擇 Disqus，並按原樣上傳該文件。匯入會在背景運行；頁面會自動更新，顯示檢測到的評論數量和已匯入的數量。隨時可以安全地重新匯入多次。

### 3. 用我們的代碼替換 Disqus 的片段

從你的頁面中移除 Disqus 嵌入代碼，並替換為 <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments 的片段</a>。只要你的頁面 URL 保持不變，匯入的評論將恰好位於原來的位置。

## 在 WordPress 上？

如果你的網站運行在 WordPress 上，跳過手動步驟，安裝 <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress 插件</a>。它會為你處理安裝、設置和同步，然後你可以停用 Disqus。

## 在承諾前先測試

你不必一次性完成切換。你可以暫時在同一頁面上運行 Disqus 和 FastComments，來比較外觀和感覺，然後再完全切換過來。如果你需要任何幫助，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">隨時聯繫我們</a>，我們會幫助你。

不確定 FastComments 的費用？每個計劃都無廣告，你可以在 <a href="https://fastcomments.com/pricing-calculator" target="_blank">價格計算器</a> 上查看你的數字。如果你在歐盟，可以在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 上創建帳戶，以便你的數據保留在歐盟內。

## 回顧

1. 從 Disqus 匯出你的數據
2. 將其匯入 FastComments
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> 片段替換 Disqus 的

就這樣。你的評論區沒有廣告，頁面更輕便，並且保留了你已有的每條評論。

乾杯！

{{/isPost}}

---