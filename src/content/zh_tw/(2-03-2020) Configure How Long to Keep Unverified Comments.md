---
[category:Tutorials]

###### [postdate]
# [postlink]配置保留未驗證評論的時間長度[/postlink]

默認情況下，FastComments 將保留您的未驗證評論三天。

### “未驗證”是什麼意思？

當用戶評論並留下他們的電子郵件時，FastComments 將發送電子郵件請求他們驗證其評論。
這有助於打擊垃圾郵件，並突出顯示作者真正想展示的評論。

如果您啟用 <a href="https://blog.fastcomments.com/(2-01-2020)-how-to-allow-anonymous-comments-with-fastcomments.html" target="_blank">匿名評論</a>
他們甚至不需要留下電子郵件！

但現在您可以配置保留這些評論的時間 - 也許您甚至不想自動刪除它們！這一切都可以在管理評論 -> 編輯管理設置中配置

{{#isPost}}

默認情況下，您的評論管理設置可能看起來像這樣，自動刪除已啟用，存活時間為三天：

<img 
    src="images/fc-unverified-comments-expiration.png"
    alt="評論管理 UI"
    title="評論管理 UI"
    class='lozad' />
    
如果我們想將這些未驗證評論的存活時間設置為 300 天，我們只需像這樣拖動滑塊：
    
<img 
    src="images/fc-unverified-comments-expiration02.png"
    alt="評論管理 UI"
    title="評論管理 UI"
    class='lozad' />

... 然後點擊保存。

這就是全部。祝您評論愉快。
{{/isPost}}

---