---
[category:API & Development]

###### [postdate]
# [postlink]FastComments 白標化[/postlink]

{{#unless isPost}}
白標化，搭配完整的 API 整合和自動化工具，來到 FastComments。
{{/unless}}

{{#isPost}}

## 什麼新內容

FastComments 現在可以透過白標化與其他應用程式和第三方轉售商整合。白標化允許您創建 FastComments 帳戶（稱為租戶）、使用者、管理員等。

我們現在提供 [全面的 API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) 來自動化與第三方的整合。

您現在可以透過 API：

- 創建由您的租戶管理的客戶（子租戶）。
- 管理可供客戶使用的套餐，以及如何處理計費。
- 在您的管理租戶中添加和管理使用者。
- 在您的管理租戶中添加和管理管理員。
- 邀請管理員並向租戶使用者發送登入連結。

## 計費

對於計費，有兩個選項：

1. 通過 FastComments Flex，您的子租戶的使用會自動打包並計費給父租戶。這可以通過 [計費分析頁](https://fastcomments.com/auth/my-account/analytics/billing) 進行監控。
2. 通過 FastComments Pro，您可獲得每月固定價格創建固定數量的子租戶的權限。

## 去品牌化

管理租戶可以啟用去品牌化，這將從評論小工具中刪除我們的標誌。

## 如何獲得白標化

目前，FastComments Flex 和 Pro 計劃提供對白標化 API 的訪問。

## 腳本和範例

一個使用 API 來設置租戶並包含使用者和管理員的範例腳本 [可在此找到](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling)。

## 全面驗證

每個 API 資源都包含全面的驗證和限制，並提供有助於指導您正確使用的錯誤訊息。

<div class="code"><div class="title">詳細錯誤範例</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "此租戶中不存在該 ID 的使用者。請先創建該使用者，然後將其設為管理員。",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## 其他使用案例

[租戶使用者](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) 和 [管理員](https://docs.fastcomments.com/guide-api.html#moderator-structure) API 也可以用來在您的租戶中添加和管理這些資源，而不考慮白標化。

## 文檔

您可以在 [這裡](https://docs.fastcomments.com/guide-white-labeling.html) 找到白標化的完整文檔以及如何使用 API 的說明。

## 總結

我們希望您覺得此更新及其文檔有用。祝您整合愉快！

{{/isPost}}

---