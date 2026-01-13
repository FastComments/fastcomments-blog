---
[category:API & Development]

###### [postdate]
# [postlink]새 집계 API 출시[/postlink]

{{#unless isPost}}
FastComments는 고객에게 유연하고 빠른 집계 API를 통해 데이터에 대한 뛰어난 접근성을 제공합니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사는 기술 용어를 포함하고 있습니다.

### 새로운 내용

FastComments는 고객에게 유연한 집계 API로 데이터에 대한 뛰어난 접근성을 제공합니다. 이 API는 댓글, 투표 및 **34개의 더 많은 리소스**를 계산하고 조사하며 나누고 집계할 수 있게 해줍니다!

### 예시 - 이메일 및 페이지별 댓글 수 세기

예를 들어, 새로운 API를 사용하여 페이지(`urlId`)와 사용자 이메일(`commenterEmail`)별로 댓글 수를 얻을 수 있습니다:  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

이렇게 하면 다음과 같은 결과를 얻을 수 있습니다:

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

아니면 승인된 댓글과 미승인 댓글을 세고 싶을 수도 있습니다:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

결과는 다음과 같습니다:

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

이 API는 쿼리 필터 및 더 깊이 있는 그룹화를 지원합니다.

### 문서

[전체 문서는 여기에서 확인할 수 있습니다.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### 동기

우리는 고객이 대시보드를 구축하여 계정을 모니터링하고, 보고서를 작성하며, 고객 요청을 처리하고, 필요한 경우 데이터를 조사할 수 있기를 원합니다.

### 접근 대상 및 제한

모든 FastComments 고객은 API에 접근할 수 있습니다. 사용량은 구매한 패키지에 따라 다르게 제공되는 API 크레딧에 따라 제한됩니다.

### 결론

모든 주요 릴리스와 마찬가지로, 우리는 이러한 변경 사항을 최적화하고 테스트하는 데 시간을 할애할 수 있어서 기쁩니다. 문제가 발견되면 아래에 알려주세요.

건배!

{{/isPost}}

---