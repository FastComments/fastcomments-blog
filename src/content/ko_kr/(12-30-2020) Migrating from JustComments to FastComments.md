---
[category:Migration]
###### [postdate]
# [postlink]JustComments에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽고 JustComments에서 FastComments로 완전히 마이그레이션하는 방법을 확인하세요.

일반적으로 그들이 제공하는 작은 코드 조각을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 것</a>으로 교체하는 문제입니다.
같은 사이트에서 JustComments와 FastComments를 일시적으로 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.
{{/unless}}

{{#isPost}}

2021년부터 JustComments는 서비스가 종료됩니다. FastComments에서는 플랫폼으로 쉽게 전환할 수 있도록 했습니다.

FastComments는 당신이 익숙한 많은 기능과 그 이상을 제공합니다.

## 요금제 차이

JustComments는 크레딧 기반 시스템을 사용하는 반면, FastComments는 3단계로 구성된 계층 모델을 사용합니다. FastComments의 $5/월 요금제가
한 달에 최대 1M 페이지 로드를 지원합니다. 그 외에 Pro 및 Enterprise 요금제가 있으며, 자세히는 <a href="https://fastcomments.com/traffic-pricing" target="_blank">요금제 페이지</a>를 참조하십시오.

## WordPress를 사용하는 경우

FastComments는 전용 WordPress 플러그인을 제공합니다: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

이 플러그인은 설치, 설정 및 동기화 과정을 매우 쉽게 만들어 줍니다. 그러나 JustComments는 FastComments처럼 당신의 WordPress 설치로 댓글을 다시 동기화하지 않습니다.
이는 동기화 후 아래의 내보내기 및 가져오기 단계를 따라야 함을 의미합니다.

## 기존 댓글 내보내기

FastComments 수입기는 당신의 댓글, 사용자 이름, 사용자 아바타, 그리고 인라인 이미지를 마이그레이션합니다. 이미지는 우리의 서버로 매끄럽게 이동됩니다.

JustComments에서 댓글 데이터를 다운로드하려면 계정 페이지로 이동하십시오.

## FastComments 관리자에 가져오기

JustComments에서 생성된 파일을 여는 것에 대해 걱정하지 마세요.

로그인되어 있다면 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져올 수 있습니다</a>.

드롭다운에서 JustComments를 선택하고 파일을 업로드하십시오.

### 페이지 식별자

가져올 때 페이지 URL 또는 "항목 ID"를 선택할 수 있는 옵션이 표시됩니다. 어떤 것을 선택해야 할지 확실치 않다면 페이지 URL을 선택하십시오. JustComments와 통합하여 위젯 구성에서 항목 ID를 지정하는 경우 항목 ID를 선택하십시오.

### 몇 분 기다리기

FastComments 수입은 "비동기"입니다. 즉, 파일 업로드와 처리 단계가 별도입니다.

따라서 파일 크기에 따라 즉시 성공 메시지를 받을 수 있습니다. import 페이지 하단에는 테이블이 있으며, 각 행은 하나의 가져오기 시도를 나타냅니다.
현재 가져오기 진행 상황과 몇 개의 행이 가져와졌는지 확인하기 위해 이 페이지를 안전하게 새로 고칠 수 있습니다.

### 완료되면

가져오기가 완료되면 이메일을 받게 됩니다 - 성공 여부에 관계없이. 파일 업로드가 성공하고 가져온 것이 Imports 페이지에 표시되면 페이지를 닫아도 됩니다. 상태는 "요청됨"과 같이 표시되며, 시작되면 상태는 "실행 중"이 됩니다.

필요한 만큼 재가져오기를 하는 것은 안전합니다 - 그러나 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에 문의하십시오</a> 우리가 도와드릴 수 있습니다.

### JustComments 코드를 FastComments로 교체하기

JustComments WordPress 플러그인을 사용하고 있지 않다면, 그들이 제공하는 작은 코드 조각을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 것</a>으로 교체하는 것뿐입니다.
같은 사이트에서 JustComments와 FastComments를 일시적으로 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

### 동시에 URL 마이그레이션하기

댓글 자체는 기본적으로 JustComments 내보내기에서 "pageUrl" 필드에 연결되어 있으므로 URL이 변경되지 않는 한 전환이 쉽습니다. URL을 마이그레이션하고 댓글을 유지하려면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에게 알려주십시오</a> 이전과 새 URL을 보내주시면 됩니다. 도움 페이지에서는 작은 텍스트 파일을 업로드할 수 있으므로,
두 개 이상의 URL을 마이그레이션하는 경우 Excel 시트를 작성하십시오.

## 요약

1. 데이터를 내보내기
2. FastComments로 가져오기
3. WordPress가 아닌 경우 JustComments JavaScript 코드 조각을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments의 것으로 교체하기</a>

{{/isPost}}