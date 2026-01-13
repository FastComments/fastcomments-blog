---
[category:Features]

###### [postdate]
# [postlink]FastComments가 #해시태그 지원 추가[/postlink]

{{#unless isPost}}
주제나 정보를 #태그하고 싶었던 적이 있나요? 이제 가능합니다.
{{/unless}}

{{#isPost}}

### 새로 추가된 기능

댓글을 작성할 때, 사용자들은 이제 하나 이상의 `#해시태그`를 입력할 수 있습니다. 댓글 내 `#해시태그`를 클릭하면 해당 해시태그가 포함된 다른 댓글이 표시되는 뷰로 이동합니다.

추가로, `#해시태그`는 외부 콘텐츠에 링크하는 데도 사용할 수 있습니다. 이번 출시와 함께 우리는 계정에서 해시태그를 미리 채우기 위해 [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)를 선보였습니다.

해시태그를 미리 채울 때, 각 태그에 대한 URL을 정의할 수 있습니다. 즉, `#해시태그`를 사용하여 예를 들어 티켓 번호나 CRM 내 문서에 링크할 수도 있습니다.

`#` 기호는 요청에 따라 커스터마이즈될 수 있습니다.

### 사용하는 방법

`#`를 입력한 후 해시태그의 시작 부분을 입력하면 검색 결과 목록이 나타납니다.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Usage" title="#hashtags Demo" />
</div>

추가할 해시태그를 클릭하기만 하면 됩니다.

또한, 위아래 화살표 키를 사용하여 이 목록을 탐색하고, 엔터 키를 눌러 선택하거나, 에스케이프 키를 눌러 나갈 수 있습니다.

사용자가 해시태그를 추가하지 않고 `#` 기호를 사용하고 싶을 수도 있다는 점을 잘 알고 있습니다. FastComments는 이를 감지하여 사용자의 입력 경험을 방해하지 않습니다.

### 해시태그 추가하기

사용하고자 하는 해시태그가 제안 목록에 없다면 - FastComments는 자동으로 해시태그를 백엔드에서 생성합니다.

자동 `#해시태그` 생성을 비활성화할 수 있는 방법에 대한 설명은 [여기](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation)에서 확인할 수 있습니다.

### 누가 사용할 수 있나요

모든 현재 및 신규 FastComments 고객은 모든 계층에서 `#해시태그`에 접근할 수 있습니다. `#해시태그`는 댓글 위젯의 이전 버전에도 호환되어 있습니다.

### 자동 완성 작동 방식

자동 완성 목록에 표시되는 태그는 오직 귀하의 계정에서만 가져온 것입니다. 해시태그는 FastComments 테넌트 간에 공유되지 않습니다.

### 문서화

`#해시태그`에 대한 전용 문서가 있습니다. 다음에서 확인하세요: https://docs.fastcomments.com/guide-hashtags.html

### 결론

FastComments의 나머지 기능처럼, 이 기능도 빠르고 쉽게 사용할 수 있기를 바랍니다.

건배!

{{/isPost}}

---