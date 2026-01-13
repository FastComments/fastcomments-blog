---
[category:Features]

###### [postdate]
# [postlink]釋出顯示名稱[/postlink]

{{#unless isPost}}
FastComments 一直以來都支持 SSO 用戶的顯示名稱。然而，這從未向普通評論者公開。今天的更新改變了這一點！
{{/unless}}

{{#isPost}}

### 新功能

FastComments 一直以來都支持 SSO 用戶的顯示名稱。然而，這從未向普通評論者公開。今天的更新改變了這一點！

在 [帳戶詳情](https://fastcomments.com/auth/my-account/edit-details) 頁面上，您現在可以填寫一個新的 `Display Name` 欄位。`Display Name` 將顯示在您的評論和個人資料上。

### 表情符號

過去，用戶在用戶名中使用表情符號時遇到了困難，因為您需要輸入用戶名來登錄。然而，現在 `Display Name` 可以包含表情符號。

### 唯一性和濫用

`Display Name` 的目的並不是唯一。如果兩個 FastComments.com 用戶在兩個非常不同的主要社群中都有相似的名稱，我們希望他們只需設置自己喜好的顯示名稱。然而，我們無法限制人們使用他們的全球 FastComments 帳戶進行評論，因此有時這會導致混淆。

擁有與其他用戶或版主相似的名稱，並不能單獨構成濫用的情況。然而，如果您故意冒充其他用戶進行濫用，我們可能會禁用您帳戶上的此功能，並且您將僅限於使用 `username`。

### 登錄

您仍然使用您的用戶名登錄 - **不是您的顯示名稱！**

### 對開發者的說明與注意事項

通過 API 暴露的常規 `User` 對象現在有 `displayName`。

### 總結

像所有主要版本一樣，我們很高興能花時間優化、測試並正確釋出這個功能。如果您發現任何問題，請在下面告訴我們。

乾杯！

{{/isPost}}