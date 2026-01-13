---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG 편집기가 베타에서 나왔습니다[/postlink]

{{#unless isPost}}
고객들은 이제 보이는 앵커 태그를 사용하지 않는 새로운 편집기를 선택할 수 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

FastComment의 사용자들은 항상 `<b>이것</b>`과 같은 앵커 탭으로 댓글을 포맷할 수 있는 능력을 갖고 있었습니다. 이는 과거에 인터넷 포럼을 사용한 경험이 있는 누구에게나 익숙하지만, 일부 사용자와 커뮤니티는 다른 동작을 기대합니다.

이제 앵커 태그 없이 댓글 영역에서 텍스트 스타일을 지정할 수 있으며, 입력 텍스트를 `contenteditable`로 전환할 수 있습니다.

시연을 위해 이 블로그에서 이 기능이 활성화되었습니다.

고급 편집기는 이전 편집기와 동일한 외관을 가지고 있으며, 단지 보이는 앵커 태그를 사용하지 않습니다.

### 고급 편집 활성화하기

위젯 사용자 정의에서 `Advanced Editor`를 간단히 활성화하고 저장하면 됩니다. 문서는 [여기](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg)에서 확인할 수 있습니다.

### 개발자를 위한 정보 & 주의사항

코드에서 이를 활성화하는 문서는 [여기](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg)에서 찾을 수 있지만, 페이지 로드 시 전송되는 데이터가 줄어들기 때문에 위젯 사용자 정의 UI를 사용하는 것을 권장합니다.

내용이 편집 가능한 HTML은 이전의 텍스트 영역 편집기와 약간 다르므로, API에서 댓글을 파싱할 때 이를 염두에 두십시오.

### 최적화

이 새로운 기능이 활성화되면 백그라운드에서 로드되는 확장으로 추가하여 댓글 위젯의 크기가 커지는 것을 방지했습니다. 이로 인해 기본 댓글 위젯이 작고 가벼운 상태를 유지합니다.

### 결론

모든 주요 릴리스와 마찬가지로, 이 기능을 최적화하고 테스트하며 제대로 출시할 수 있어 기쁩니다. 문제가 발견되면 아래에 알려주세요.

감사합니다!

{{/isPost}}

---