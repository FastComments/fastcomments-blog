---
[category:Security]

###### [postdate]
# [postlink]審計日誌已釋出[/postlink]

{{#unless isPost}}FastComments 現在提供有關所有通過平台進行的修改的詳細日誌。{{/unless}}

{{#isPost}}

### 新功能

自三月以來，FastComments 的 Pro 計劃現在包括詳細的審計功能，並適用於所有現有的企業客戶。

所有管理行為，無論是數據訪問、修改評論，還是解除封鎖用戶，均會在審計日誌中進行跟蹤和索引。

### 如何使用

要訪問審計日誌，可前往 `管理數據`，然後選擇 `審計日誌`。可以直接訪問的鏈接在 [這裡](https://fastcomments.com/auth/my-account/manage-data/audit-logs)。

首先，您將看到如下頁面：

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

在這裡，您可以根據用戶名、IP 地址、操作類型或資源進行搜索。

例如，按資源過濾：

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

我們還可以深入查看審計日誌中的條目，也可以看到被更改的相關對象。

例如，我們可以查看封鎖用戶的條目：

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

在這裡我們可以看到是誰封鎖了用戶（用戶名為 `winrid`）。我們可以看到這是一個永久封鎖，我們還有被封鎖的用戶 ID 和電子郵件，以及被封鎖的原因文本。

我們可以看到創建封鎖的 IP，但原始評論者的 IP 為了隱私故意省略。

要查看 `winrid` 的所有事件，我們只需點擊右側的過濾圖標，位於他們的用戶名旁邊。

### 限制訪問

審計日誌中的數據只能由擁有 `管理數據` 權限的用戶訪問。

### 保存期限

審計日誌中的所有條目保留兩年。然而，當您的帳戶被刪除時，審計日誌將被清除。

### API 訪問

[審計日誌 API 的文檔在這裡。](https://docs.fastcomments.com/guide-api.html#audit-log-structure) 您會發現，根據您的使用情況，審計日誌可以以幾種不同的方式進行排序和分頁。

### 現有客戶

如果您在 Pro 或同等計劃中，您會發現審計日誌已自動啟用！如果您想獲得訪問權限，請聯繫您的支持代表。

### 遺漏的內容

唯一被省略的更改類型是實際的評論及其投票。這是因為我們發現客戶主要關心管理方面的內容，而不一定對審計人們的評論感興趣。這些類型的行為也會給日誌增加相當大的噪音。

不過，如果這是一個需求，請聯繫我們，我們可以討論為您啟用這個功能。

### 總結

我們希望您覺得這部分功能有用，UI 使用簡便，API 反應迅速。

祝好！

{{/isPost}}