---
[category:UI & Customization]

###### [postdate]
# [postlink]頁面大小現在可以自訂[/postlink]

{{#unless isPost}}
FastComments 自推出以來一直固定顯示 30 則評論，現在可以自訂了！
{{/unless}}

{{#isPost}}

### 新消息

您的評論串現在可以擁有不同的分頁大小，這可以在您的帳戶、網站，或甚至是頁面層級進行全局自訂。這在您希望某些頁面顯示較少或較多評論而不需要分頁時非常有用。

這也影響到無限滾動，以及任何從 FastComments 顯示評論的框架或整合。

頁面大小可以從 `10` 到 `200` 不等。默認仍然是 `30`。

### 如何獲得

只需前往值得信賴的 [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) 並定義您的頁面大小。

請注意，FastComments 會預先計算每頁顯示的評論，因此更改此參數會觸發我們的系統重新計算您所有的評論串。這不會導致任何停機，但可能需要幾分鐘時間才能顯示更改。

### 文檔

有關頁面大小的最新文檔可在 [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size) 找到。

### 重大變更

作為此變更的一部分，評論小工具中定義的兩個翻譯已被重新命名。 `PREV_30` 和 `NEXT_30` 現在分別為 `PREV` 和 `NEXT`，並包含一個 `[count]` 變量。

如果您通過 Widget Customization UI 定義了分頁按鈕的翻譯，那麼我們已經為您遷移了這些。如果您通過代碼在某種整合中傳遞翻譯，您將需要更新這些：

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### 總結

像所有重大版本一樣，我們很高興能花時間來優化、測試並正確推出這個功能。如果您發現任何問題，請在下方告訴我們。

乾杯！

{{/isPost}}

---