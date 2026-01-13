---

[category:Features]
###### [postdate]
# [postlink]페이지 반응 출시일[/postlink]

{{#unless isPost}}
FastComments는 이제 댓글 위젯 위에 페이지 반응과 함께 카운트를 표시하는 기능을 지원합니다.
{{/unless}}

{{#isPost}}

### 새로운 소식

FastComments는 이미 피드백 모듈을 지원하여, 댓글 영역 위에 별점, NPS 또는 다른 질문을 표시할 수 있었습니다.

하지만 많은 사용자들이 더 간단한 방법을 원했습니다. 댓글 위젯 위에 반응 아이콘을 표시하고, 이러한 아이콘을 사용자에 맞게 커스터마이즈하거나 옵션을 개별 사용자별로 설정할 수 있는 기능입니다.

오늘부로 이 기능을 출시했습니다.

모든 FastComments 요금제에서 페이지 반응 기능을 사용할 수 있습니다.

### 라이브 데모

이번 블로그 포스트에 대한 데모 페이지 반응 구성 을 활성화했습니다. 아래에서 확인할 수 있습니다!

### 문서

[페이지 반응 설정을 위한 개발자 문서를 여기에서 찾을 수 있습니다.](https://docs.fastcomments.com/guide-page-reacts.html)

### 반응 사용자 목록

페이지 반응은 특정 반응을 남긴 사용자 목록을 보여주는 툴팁을 표시하도록 설정할 수 있습니다.

### 결론

지속적인 피드백을 주신 고객님들께 감사드리며, 덕분에 이번과 같은 아이디어를 생각해낼 수 있었고 잘 최적화된 기능을 출시할 시간을 가질 수 있었습니다. 계속해서 FastComments를 사랑해 주시길 바랍니다.

감사합니다!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---