---
[category:API & Development]

###### [postdate]
# [postlink]新聚合 API 發布[/postlink]

{{#unless isPost}}
FastComments 為其客戶提供無與倫比的數據訪問，並提供靈活快速的聚合 API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技術術語

### 更新內容

FastComments 為其客戶提供無與倫比的數據訪問，並提供靈活的聚合 API。這個 API 讓您可以計算、調查、切片和聚合
您的評論、投票和 **34 種其他資源**！

### 範例 - 根據電子郵件和頁面計算評論

例如，通過新的 API，我們可以按照頁面 (`urlId`) 和用戶電子郵件 (`commenterEmail`) 獲得評論的計數：  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

這將給我們類似的結果：

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

或者我們可能想要計算已批准和未批准的評論：

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

給我們的結果是：

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

該 API 還支持查詢過濾器和更深入的分組。

### 文件

[您可以在這裡找到完整的文檔。](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### 動機

我們希望客戶能夠建立儀表板以監控其帳戶，生成報告，處理客戶請求，並根據需要調查其數據。

### 誰能使用和限制

所有 FastComments 客戶均可訪問該 API。您的使用受到可用 API 點數的限制，這些點數會根據您購買的套餐而有所不同。

### 總結

像所有主要版本一樣，我們很高興能夠花時間優化、測試並正式發布這些變更。如果您發現任何問題，請在下方告訴我們。

乾杯！

{{/isPost}}