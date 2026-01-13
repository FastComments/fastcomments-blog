---
[category:API & Development]

###### [postdate]
# [postlink]新聚合API发布[/postlink]

{{#unless isPost}}
FastComments为客户提供无与伦比的数据访问，采用灵活快速的聚合API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 新动态

FastComments为客户提供无与伦比的数据访问，采用灵活的聚合API。此API允许您计算、调查、切片和聚合
您的评论、投票以及**34个其他资源**！

### 示例 - 按电子邮件和页面计算评论

例如，使用新的API，我们可以按页面(`urlId`)和用户电子邮件(`commenterEmail`)获取评论计数：  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

这将给我们类似于以下内容的结果：

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

或者我们可能想计算获得批准和未获得批准的评论：

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

给我们的结果是：

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

该API还支持查询过滤和更深入的分组。

### 文档

[您可以在这里找到完整文档。](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### 动机

我们希望客户能够构建仪表板以监控其帐户，生成报告，处理客户请求，并根据需要调查其数据。

### 谁可以使用及限制

所有FastComments客户均可访问该API。您的使用限制基于您可用的API积分，这将根据您所购买的套餐有所不同。

### 结论

与所有重大版本发布一样，我们很高兴能够花时间优化、测试并正确发布这些更改。如果您发现任何问题，请在下面告诉我们。

干杯！

{{/isPost}}

---