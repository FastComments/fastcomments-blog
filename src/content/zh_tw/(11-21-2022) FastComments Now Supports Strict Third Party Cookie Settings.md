---
[category:Security]

###### [postdate]
# [postlink]FastComments 現在支持嚴格的第三方 Cookie 設定[/postlink]

{{#unless isPost}}
到目前為止，FastComments 需要啟用第三方 Cookie 才能完全運作。現在情況已不再如此！
{{/unless}}

{{#isPost}}

### 新功能

在注重隱私的瀏覽器中，預設禁用第三方 Cookie 正在成為常態。這方面的例子是 Apple 的 iOS Safari，在那裡
如果你留下電子郵件以使用 FastComments 評論、驗證該評論，然後返回該頁面留下另一條評論或回覆
某人，你會發現你留下的任何進一步評論都會標記為未驗證。

這只會發生在預設設定中，該設定在評論上顯示 `Unverified` 標籤。然而，這可能影響到其他功能，例如
如果自動批准僅針對已驗證的評論啟用的話。

可以想像，這會導致用戶在驗證其評論後，點擊「保持登錄」，但當他們訪問你的網站或應用程序時，仍然未登錄的情況。請注意，這不適用於 SSO 集成，因為 SSO 不依賴於
Cookie。

現在，通過在小部件設定中啟用一個稱為 `Enable Third-Party Cookie Popup` 的新設定，這個問題得到了解決，
因為它會彈出一個窗口以獲取用戶的 Cookie。現在這僅在他們與評論小部件互動時發生，但結果是
評論將從他們的 FastComments.com 會話中發佈，標記其評論為已驗證，等等。

### 獲取方式與文檔

所有 FastComments 的客戶在所有層級上現在都能訪問此功能。查看 [文檔](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) 以了解如何啟用第三方 Cookie 繞過。

### 總結

就像所有主要版本一樣，我們很高興能抽出時間來優化、測試和正確發布這個功能。如果您發現任何問題，請在下面告訴我們。

乾杯！

{{/isPost}}

---