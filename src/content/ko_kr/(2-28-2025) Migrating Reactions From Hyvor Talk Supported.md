---
[category:Migration]

###### [postdate]
# [postlink]Hyvor Talk에서의 반응 이주가 이제 지원됩니다[/postlink]

{{#unless isPost}}
Hyvor Talk에서 데이터 내보내기를 가져올 때, 이제 페이지 수준의 반응을 이주할 수 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 내용

Hyvor Talk에서 댓글을 이주하기 위해 가져올 때, FastComments는 이제 페이지 반응을 가져올 수 있습니다. 또한, 페이지의 댓글 스레드가 닫혀 있는지 여부를 감지하고 해당 상태도 이주합니다.

가져오기를 다시 실행해도 이전 가져오기 전의 반응 값이 중복되거나 손실되지 않습니다.

### 반응 설정 방법

페이지 반응 표시가 자동으로 이루어지지 않습니다. 시작하려면 위젯 구성을 업데이트해야 합니다:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // 스타에 감명받은
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // 빨간 하트
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // 입을 벌린 얼굴
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // 우는 얼굴
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // 기쁨의 눈물을 흘리는 얼굴
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // 화난 얼굴
            ]
        }
    });
</script>
```

ids는 Hyvor Talk 내보내기의 것과 일치해야 합니다. 이 예시는 올바른 값을 사용합니다.

자신만의 반응 이미지를 소스해야 합니다. 이미지는 gif를 포함하여 어떤 형식도 가능하다. 위의 예시는 OpenMoji 프로젝트에서 일부를 사용하고 있습니다.

### 결론

모든 주요 릴리스처럼, 이 기능을 최적화, 테스트 및 적절하게 릴리스할 수 있어서 기쁩니다. 문제를 발견하면 아래에 알려주세요.

감사합니다!

{{/isPost}}