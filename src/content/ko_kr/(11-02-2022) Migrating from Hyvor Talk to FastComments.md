---
[category:Migration]
###### [postdate]
# [postlink]Hyvor Talk에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽고 Hyvor Talk에서 FastComments로 완전히 마이그레이션하는 방법을 확인하세요.

Hyvor Talk와 함께 수동 코드 설치를 사용하는 경우, 그들이 제공하는 작은 스니펫을 제거하고 <a href="https://fastcomments.com/install-wizard" target="_blank">우리의 스니펫</a>으로 교체하는 것만으로 간단합니다. 사이트에서 Hyvor와 FastComments를 일시적으로 함께 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

코드 스니펫 기반 설치를 사용하지 않는 경우, 플랫폼에 따라 지침이 달라지므로 다시 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">문의해 주세요</a>.
{{/unless}}

{{#isPost}}

## WordPress를 사용하고 있다면

FastComments에는 전용 WordPress 플러그인이 있습니다: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

이 플러그인은 설치, 설정 및 동기화를 매우 쉽게 만들어줍니다. 이 경로를 선택하면, 이곳의 나머지 지침은 무시해도 됩니다. 단, Hyvor Talk 댓글이 WordPress 설치에 동기화되었는지 확인하세요.

이 과정이 일부 고객이 보고한 대로 작동하지 않는다면, 우리의 WordPress 플러그인을 사용할 수 있지만 Hyvor Talk에서 수동으로 내보내기를 통해 데이터 가져오기를 수행해야 할 수 있습니다. 데이터 가져오기는 [데이터 관리 -> 댓글 가져오기](https://fastcomments.com/auth/my-account/manage-data/import)에서 찾을 수 있습니다.

## 수동, 일반 설치

### 기존 댓글 내보내기

FastComments 가져오기 도구는 댓글 스레드, 사용자 이름, 사용자 아바타, 이모지 및 인라인 이미지를 마이그레이션합니다. 이미지는 우리의 서버로 원활하게 이동할 것입니다.

2022년 기준으로 Hyvor Talk는 이메일이나 투표 수를 내보내지 않습니다. 이 정보가 포함된 내보내기를 받을 수 있다면, 우리는 이를 가져올 수 있습니다.

### .JSON 파일 가져오기

Hyvor에서 내보낸 파일을 다운로드한 후, FastComments 대시보드에 로그인하고 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져옵니다</a>. 드롭다운에서 Hyvor Talk를 선택하고 파일을 업로드하세요.

### 몇 분 기다리기

FastComments 가져오는 과정은 "비동기적"입니다. 즉, 파일 업로드와 처리 과정은 별개의 단계입니다.

따라서 파일 크기에 따라 즉시 성공 메시지를 받을 수도 있습니다. 가져오기 페이지 하단에는 테이블이 있습니다. 각 행은 가져오기 시도를 나타냅니다. 이 페이지를 안전하게 새로고침하여 가져오기 상태와 지금까지 몇 개의 행이 가져와졌는지 확인할 수 있습니다.

### 완료되면

가져오기가 완료되면 성공 여부에 관계없이 이메일을 받게 됩니다. 파일 업로드가 성공하면 페이지를 닫을 수 있으며, Imports 페이지에서 가져온 내용을 확인할 수 있습니다. 상태는 "요청됨"과 같으며, 시작될 때 상태는 "실행 중"이 됩니다.

필요한 만큼 여러 번 다시 가져오는 것은 안전합니다. 그러나 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">문의해 주세요</a> 하여 도와드리도록 합니다.

### Hyvor Talk 코드를 FastComments로 교체하기

Hyvor와 함께 코드 스니펫 기반 설치를 사용하는 경우, 그들이 제공하는 작은 스니펫을 제거하고 <a href="https://fastcomments.com/install-wizard" target="_blank">우리의 스니펫</a>으로 교체하는 것만으로 간단합니다. 우리는 또한 [여기에서 찾을 수 있는](https://fastcomments.com/install-wizard) 많은 프론트엔드 프레임워크를 지원합니다. 사이트에서 Hyvor와 FastComments를 일시적으로 함께 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

코드 스니펫 기반 설치를 사용하지 않는 경우, 플랫폼에 따라 지침이 달라지므로 다시 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">문의해 주세요</a>.

자체 서비스 설치 마법사를 [여기서](https://fastcomments.com/install-wizard) 제공합니다.

### URL을 동시에 마이그레이션하기

댓글은 내보내기의 페이지 ID 필드에 연결되어 있으므로, URL이 변경되지 않는 한 전환은 쉽습니다. URL을 마이그레이션하고 댓글을 유지하고 싶다면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">이전 및 새로운 URL을 보내주는 것</a>으로 알려주세요. 도움 페이지에서는 작은 텍스트 파일을 업로드할 수 있으므로, URL이 두 개 이상인 경우 Excel 시트를 작성하세요.

### EU

EU에 계시다면, 고객 데이터가 EU에 유지되도록 [eu.fastcomments.com](https://eu.fastcomments.com)에서 계정을 만드는 것이 좋습니다.

### 요약

1. 데이터를 내보내기
2. FastComments로 가져오기
3. Hyvor JavaScript 스니펫을 <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments의</a> 스니펫으로 교체하기

## Hyvor가 내 파일을 보내주지 않는 이유는 무엇인가요?
대규모 사이트의 경우 Hyvor에서 기술적인 제한으로 인해 내보낸 파일을 생성할 수 없을 수도 있습니다. 우리는 기존 사이트를 스크래핑하여 댓글을 가져올 수 있는 능력이 있지만, 이는 부담이 될 수 있으며 시간이 많이 소요되므로 지원 패키지가 필요합니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 도움을 요청할 수 있습니다</a>.
{{/isPost}}

---