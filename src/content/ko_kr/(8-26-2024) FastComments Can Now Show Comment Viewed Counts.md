---
[category:Analytics]
###### [postdate]
# [postlink]FastComments가 이제 댓글 조회 수를 표시할 수 있습니다[/postlink]

{{#unless isPost}}
FastComments는 이제 사용자가 댓글을 조회할 때 실시간으로 증가하는 댓글 옆에 조회 수를 표시하는 기능을 지원합니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

FastComments는 이제 사용자가 댓글을 조회할 때 실시간으로 증가하는 댓글 옆에 조회 수를 표시하는 기능을 지원합니다. 댓글이 조회되었는지 여부는 사용자의 계정 또는 익명 세션에 따라 결정됩니다. SSO(안전한 SSO 및 단순 SSO 모두)를 지원합니다.

### 실시간 데모

이번 블로그 게시물에 대해 댓글 조회 수를 활성화했습니다! 각 댓글 옆에 있는 눈 아이콘 옆의 수를 확인하세요!

### 문서

[댓글 조회 수 설정에 대한 개발자 문서는 여기에서 확인할 수 있습니다.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### 성능

조회 수는 즉시 업데이트되지 않으며, 조회 수가 집계되고 네트워크를 통해 전송되기까지 약간의 지연(최대 3초)이 있습니다. 이는 라이브 이벤트가 있을 경우, 몇 천 명이 페이지에서 평균적으로 10개의 댓글을 조회하는 경우, 모든 사용자에게 수백만 개의 업데이트를 즉시 전송하지 않고 브라우저를 느려지게 하거나 모든 네트워크 대역폭을 사용하지 않도록 최적화된 것입니다.

### 결론

지속적으로 피드백을 주시는 고객님께 감사드리며, 이러한 아이디어를 생각해내고 잘 최적화된 기능을 출시할 시간을 주셔서 감사합니다. 앞으로도 FastComments를 계속 사랑해주시길 바랍니다.

감사합니다!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---