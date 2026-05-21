---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]所有 FastComments 小工具現在已經上線[/postlink]

{{#unless isPost}}
每個嵌入的 FastComments 小工具（評論計數、最近評論、熱門頁面、最近討論、評論摘要、浮動讚）現在都能實時更新。
{{/unless}}

{{#isPost}}

### 新內容

主要的評論小工具從第一天起就已經上線了。不過，較小的嵌入式小工具則不是。評論計數、「最近評論」或「熱門頁面」小工具等等，之前顯示的數字可能多達一分鐘的過時。

現在 FastComments 發送的每個小工具都訂閱了實時更新並會立即刷新 :) 這也包括評論摘要！

### 哪些小工具

所有小工具。具體來說：

- `FastCommentsCommentCount` - 每頁的評論計數
- `FastCommentsCommentCountBulk` - 在列表/歸檔頁面上更新多個計數的批量版本
- `FastCommentsRecentComments` 和 `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` 和 `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger`（浮動的評論計數徽章）
- `FastCommentsEmbedPageLikesFloating`（浮動的讚 + 評論計數）

### 你需要做什麼

沒有。 如果你已經嵌入了其中任何一個小工具，請刷新頁面一次。下次有評論被發表、編輯、刪除，或有人對頁面做出反應時，小工具將會更新。

舊的 `isLive: true` 配置標誌在評論計數小工具上現在是多餘的 - 小工具始終是實時的。

如果你從我們的 CDN 加載小工具 JS，你就是在使用新版本，包括如果你使用了我們的包裝庫（React、Vue 等）。

### 讚也實時

浮動讚小工具現在也響應讚和反應事件。點擊頁面上的心形圖標，其他打開的標籤會看到計數變化。

### 工作原理

每個小工具都開啟了一個單一的 WebSocket 連接。顯示特定頁面數據的小工具（`comment-count`（包括批量）、`reviews-summary`、`embed-page-likes-floating`）訂閱該頁面的事件流。顯示跨承租者數據的小工具（`recent-comments`、`top-pages`、`recent-discussions`）則訂閱一個精簡的每個承租者脈衝流，當該承租者中的任何內容發生變化時會發出信號。

結果是閒置的小工具幾乎不耗費資源，而活躍的小工具則在基礎變化後的一兩秒內顯示新的數字。

### 緩存一致性

支援這些小工具的服務器端緩存以前的過期時間為 60 秒。現在，當相關的評論或反應事件到達時會立即失效，因此在變更後的第一次請求返回的是最新數據，而不是緩存的版本。

### 總結

我們很高興能夠花時間測試和優化這一變化，以便我們的客戶可以享受到與以往相同的價格。我們認為實時評論摘要對我們來說是一個特別酷的區別點。

如果你發現任何問題，請在下方告訴我們。

乾杯！

{{/isPost}}