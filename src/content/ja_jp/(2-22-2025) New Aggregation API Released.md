---
[category:API & Development]

###### [postdate]
# [postlink]新しい集約APIがリリースされました[/postlink]

{{#unless isPost}}
FastCommentsは、柔軟で迅速な集約APIを使用して、お客様にデータへの比類のないアクセスを提供します。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> このアーティクルには専門用語が含まれています

### 新機能

FastCommentsは、柔軟な集約APIを使用して、お客様にデータへの比類のないアクセスを提供します。このAPIを使用すると、コメント、投票、および**34のその他のリソース**をカウント、調査、スライス、集約できます！

### 例 - メールとページによるコメントのカウント

例えば、新しいAPIを使用して、ページ（`urlId`）とユーザーのメール（`commenterEmail`）によるコメントのカウントを取得できます：  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

これは次のような結果を返します：

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

また、承認されたコメントと未承認のコメントをカウントしたい場合もあります：

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

これにより、次のような結果が得られます：

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

このAPIは、クエリフィルターやより詳細なグループ化もサポートしています。

### ドキュメンテーション

[ここで完全なドキュメンテーションを見つけることができます。](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### 動機

お客様がアカウントを監視するためのダッシュボードを構築したり、レポートを作成したり、顧客のリクエストを処理したり、必要に応じてデータを調査できるようにしたいと考えています。

### 誰がアクセスできるか & 制限

すべてのFastCommentsの顧客はAPIにアクセスできます。使用は、購入したパッケージに応じて異なる利用可能なAPIクレジットに基づいて制限されます。

### 結論

すべての主要なリリースのように、これらの変更を最適化し、テストし、適切にリリースするための時間を取れたことを嬉しく思います。問題があれば、下にお知らせください。

乾杯！

{{/isPost}}

---