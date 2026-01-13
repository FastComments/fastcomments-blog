---
[category:API & Development]

###### [postdate]
# [postlink]Webhook 結構變更[/postlink]

{{#unless isPost}}
我們對 webhook 結構進行了一些行為相關的變更。
{{/unless}}

{{#isPost}}

### 新的變化

在 2023 年 11 月 14 日之前，我們對 webhook 做了以下變更：

#### 更新 Webhook

**之前**，更新會包含評論的最新版本。如果兩位用戶快速相繼對一條評論進行投票，這將觸發兩個 webhook。但第一個 webhook 事件可能包含 **最新版本**，導致兩個相同的 webhook 事件：

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**自 11 月 14 日起**，每個 webhook 事件都是冪等的，並包含變更時的評論對象。在上述例子中，您現在將獲得兩個事件：

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### 刪除 Webhook

**之前**，刪除 webhook 只包含評論 id。這是一個像 `{ id: string }` 的對象。

**自 11 月 14 日起**，刪除 webhook 將包含在移除時的 **整個** 評論對象。

### 總結

與所有重大版本一樣，我們很高興能夠花時間優化、測試並正確釋放此功能。如果您發現任何問題，請在下方告訴我們。

乾杯！

{{/isPost}}

---