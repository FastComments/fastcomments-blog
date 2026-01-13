---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]새로운 ChatGPT 4 기반 스팸 필터.[/postlink]

{{#unless isPost}}
FastComments는 스팸 필터 옵션 목록에 추가합니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

FastComments는 Naïve-Bayes 스팸 분류기를 계속 개선하고 있으며, 스팸 탐지기군에 새로운 옵션을 추가했습니다.

이제 OpenAI에서 제공하는 ChatGPT 4를 사용하여 스팸을 감지할 수 있습니다.

### 설정하기

어떤 스팸 탐지기를 사용할지 구성하려면 관리 대시보드의 중재 설정 페이지를 확인하세요. GPT4 기반 스팸 탐지기는 `$0.08`에 `1000` 토큰마다 청구됩니다.

이 스팸 탐지기는 사용된 토큰에 따라 청구되므로 Flex 계획을 이용하는 고객만 사용할 수 있습니다.

### 최적화

모든 콘텐츠를 먼저 공유 Naïve-Bayes 분류기를 통해 통과시켜 OpenAI 호출을 제한합니다. 이는 매우 명백한 스팸에 대해 비용을 절약합니다. 더 교묘한 스팸에 대해서는 OpenAI에 전화를 걸어 콘텐츠가 스팸처럼 보이는지 확인합니다.

### 결과

이 기능을 활성화한 커뮤니티에서 즉각적인 개선을 관찰했습니다.

### 문서화

이는 관리 대시보드의 중재 설정 페이지를 통해 설정할 수 있습니다.

[문서화는 여기에서도 찾을 수 있습니다](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### 결론

아이디어를 생각할 수 있도록 지속적인 피드백을 주시는 고객님들께 감사드립니다. 앞으로도 FastComments를 좋아해 주시기를 바랍니다.

건배!

{{/isPost}}

---