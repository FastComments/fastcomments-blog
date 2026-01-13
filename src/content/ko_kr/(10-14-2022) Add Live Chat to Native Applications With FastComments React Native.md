---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]FastComments React Native로 네이티브 애플리케이션에 라이브 채팅 추가하기[/postlink]

{{#unless isPost}}
몇 달 간의 작업 끝에, fastcomments-react-native-sdk가 이제 일반 사용할 수 있는 1.0 버전으로 출시되었습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 문서에는 기술 전문 용어가 포함되어 있습니다.

### 새로운 소식

FastComments에서는 FastComments를 사용하여 React Native 애플리케이션을 구축하는 새로운 방법을 출시했습니다. 이전에는 VanillaJS 라이브러리를 감싸는 react-native 래퍼를 사용했습니다. 이는 라이브러리를 로드하기 위해 웹 뷰 - 앱 내의 브라우저 - 가 필요하여 여러 메모리 및 대기 시간 문제를 일으켰습니다.

이제 FastComments를 React Native로 **완전히** 포팅하였고, 웹 뷰의 필요성을 완전히 제거하기 위해 자체 WYSIWYG 편집기를 작성했습니다.

이 라이브러리는 다양한 스킨과 레이아웃을 지원합니다. 예를 들어, 아래는 라이브 채팅 스타일의 다크 스킨인 Erebus 스킨입니다:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

이 라이브러리는 [GitHub의 FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk)와 
[NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk)에서 사용할 수 있습니다.

### 사용자 정의 가능

새로운 네이티브 라이브러리는 기존 웹 라이브러리처럼 사용자 정의가 가능하도록 설계되었습니다.

다음과 같은 작업을 할 수 있습니다:

- 라이브러리가 사용하는 모든 자산과 아이콘을 사용자 정의할 수 있습니다.
- 최상단에서 Styles 객체를 전달하여 라이브러리의 모든 구성 요소의 스타일을 사용자 정의할 수 있습니다.
- 모든 번역을 사용자 정의할 수 있습니다.
- 미리 정의된 스킨이나 커뮤니티에서 개발한 스킨 중 하나를 사용할 수 있습니다.
- 웹 라이브러리가 지원하는 많은 구성 옵션을 사용할 수 있습니다.

### 전체 기능 목록

이 라이브러리는 많은 기능을 지원합니다. 불완전한 목록은 다음과 같습니다:

- [x] 차단
- [x] 채팅 반응
- [x] 자식 댓글 및 답글
- [x] 사용자 정의 스타일 (타입이 지정된 스타일시트)
- [x] 이모티콘
- [x] 신고
- [x] GIF 브라우저 - 기본 트렌딩 및 검색 기능 포함. 이미지 및 검색은 프록시로 익명화됨.
- [x] 실시간 댓글
- [x] 미디어 선택 및 업로드
- [x] 이미지 지원이 포함된 네이티브 WYSIWYG 편집기.
- [x] 알림 서비스 (사용자의 읽지 않은 알림을 백그라운드에서 가져와 푸시하는 등)
- [x] 알림 리스트 (종 소리 클릭 시 표시). 구독 지원.
- [x] 페이지 매김 (버튼)
- [x] 페이지 매김 (무한 스크롤)
- [x] 댓글 고정
- [x] 안전하고 간단한 SSO 및 익명 댓글 작성.
- [x] 여러 개의 미리 정의된 스킨.
- [x] 댓글 보이기/숨기기 토글
- [x] 스레드
- [x] 사용자 활동 지표
- [x] 투표

### 작동 방식

이 라이브러리는 TypeScript와 React Native로 FastComments 클라이언트를 완전히 다시 작성한 것입니다.

### 장기 계획

장기적으로 우리는 VanillaJS 라이브러리와 react-native 라이브러리를 병행하여 유지 관리하며, 향후 개발할 수 있는 모든 네이티브 라이브러리도 포함할 것입니다.

### 다음은 무엇인가요?

우리는 사용자의 피드백과 커뮤니티의 피드백을 통해 시간이 지나면서 이 라이브러리를 개선해 나가기를 기대합니다. 이는 우리가 웹 생태계에서 수행해 온 방식과 같습니다.

### 결론

우리는 이 라이브러리가 일부 사용자에 의해 오랫동안 기다려졌음을 알고 있습니다. 모든 주요 릴리스와 마찬가지로, 이 라이브러리를 최적화하고 테스트하며 제대로 출시할 수 있는 시간을 가질 수 있어 기쁩니다.

건배!

{{/isPost}}

---