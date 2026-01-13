---
[category:Moderation]
###### [postdate]
# [postlink]髒話遮蔽更新[/postlink]

{{#unless isPost}}
FastComments 髒話偵測和遮蔽功能獲得升級
{{/unless}}

{{#isPost}}

### 新內容

之前，FastComments 只允許在整個帳戶上定義一個全局的字詞黑名單。

這個被遮蔽的詞彙清單，或者用於垃圾郵件偵測的詞彙清單，無法按語言定義。它也只能包含
單個詞彙，而不能是短語。

現在，以下升級已經完成：

1. 黑名單可以按區域（語言 + 地區）定義。
2. 除了單個詞彙外，短語現在也可以被遮蔽或用於垃圾郵件偵測。
3. 更新髒話偵測配置現在是*即時*和*當下*的。之前，變更可能需要長達五分鐘才能生效。

### 如何使用

詞彙黑名單的鏈接沒有變化，仍然位於 [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) 並且
仍然可以從 `Moderate Comments -> Moderation Settings -> Edit Word Blacklist` 進入。

在這個頁面上，您現在會看到一個語言下拉菜單，以便根據區域自訂黑名單。

選擇區域後，您可以定義要遮蔽的詞彙或短語。

### 限制

每個區域最多可以定義 5,000 個詞彙或短語。如果您需要提高這個限制，請聯繫支援。

### 現在生效！

您對被遮蔽的詞彙或短語清單所做的任何更改，現在都會立即應用到系統中。

### 誰可以使用

所有當前和新的 FastComments 客戶，無論任何等級，現在都可以使用新的 *詞彙* 和 *短語* 黑名單功能。

### 總結

和 FastComments 的其他功能一樣，我們希望您覺得這個功能快速且易於使用。

乾杯！

{{/isPost}}

---