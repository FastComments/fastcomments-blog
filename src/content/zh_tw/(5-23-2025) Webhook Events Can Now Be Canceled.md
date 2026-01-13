---
[category:API & Development]

###### [postdate]
# [postlink]Webhook 事件現在可以被取消[/postlink]

{{#unless isPost}}
在 webhook 處理隊列中的事件可以被取消，因此它們不再重試。
{{/unless}}

{{#isPost}}

### 新功能

之前，取消 webhook 事件是通過提交支持票來實現的。現在可以通過訪問
[日誌頁面](https://fastcomments.com/auth/my-account/manage-data/webhooks/logs) 並點擊事件旁邊的 `x` 來自助取消。

此外，webhook 日誌的 UI 已經變得更快了。

### 總結

我們希望您覺得這次更新有幫助，並繼續享受使用 FastComments 的過程。

{{/isPost}}

---