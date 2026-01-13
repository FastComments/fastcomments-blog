---
[category:Migration]

###### [postdate]
# [postlink]IntenseDebate에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽고 IntenseDebate에서 FastComments로 완전히 마이그레이션하는 방법을 보여주십시오.
{{/unless}}

{{#isPost}}
## WordPress를 사용하는 경우

FastComments는 전용 WordPress 플러그인을 제공합니다: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

이 플러그인은 설치, 설정 및 동기화를 매우 쉽게 만듭니다. 이 방법을 선택하면 나머지 지침을 무시할 수 있습니다.

## 수동, 일반 설치

### 기존 댓글 내보내기

IntenseDebate의 관리 대시보드에서 사이트의 댓글 및 사용자 데이터를 내보내려면 Sites -> Your Site -> Tools -> XML Export로 이동합니다.

이메일로 받은 결과 파일의 "gz" 파일 확장자가 신비롭게 보일 것입니다. 약간 더 기술에 정통하다면 이것이 "gzip"을 의미하며, 파일을 압축하는 인기 있고 효율적인 방법이라는 것을 알 수 있습니다.

### "gz" 파일을 열지 마세요

기본 Windows 10 설치는 IntenseDebate에서 가져온 파일을 열 수 없습니다. 이것은 괜찮습니다. FastComments와 함께라면 이 파일을 열 필요가 없습니다. 우리 백엔드는 이 압축 파일을 이해합니다.

그 후, 로그인한 상태에서 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져올 수 있습니다</a>. 드롭다운에서 IntenseDebate를 선택하고 파일을 업로드하세요.

### 몇 분 기다리기

FastComments 가져오기는 "비동기식"입니다. 이는 파일을 업로드하고 처리하는 것이 별도의 단계임을 의미합니다.

따라서 파일 크기에 따라 즉시 성공 메시지를 받을 수 있습니다. 가져오기 페이지 하단에는 테이블이 있으며 각 행은 가져오기 시도를 나타냅니다.
이 페이지를 안전하게 새로 고쳐 가져오기 상태와 지금까지 얼마나 많은 행이 가져와졌는지 확인할 수 있습니다.

### 완료되면

가져오기가 완료되면 성공 여부에 관계없이 이메일을 받게 됩니다. 파일 업로드가 성공하고 Imports 페이지에서 가져온 항목을 보게 되면 페이지를 닫을 수 있습니다. 상태는 "Requested"처럼 나타나고 시작되면 상태는 "Running"이 됩니다.

필요한 만큼 안전하게 재가져올 수 있습니다 - 그러나 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">문의해 주시기 바랍니다</a> 저희가 도와드릴 수 있습니다.

### IntenseDebate 코드를 FastComments로 교체하기

단순히 IntenseDebate에서 제공한 작은 코드 조각을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드로 교체하는 것</a>입니다.
심지어 같은 사이트에서 IntenseDebate와 FastComments를 일시적으로 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">저희가 도와드리겠습니다</a>.

IntenseDebate 위젯을 사용 중이고 교체하고 싶다면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 저희에게 연락하십시오</a>.

### 동시에 URL 마이그레이션하기

댓글 자체는 IntenseDebate 내보내기의 "링크" 필드에 연결되어 있으므로 URL이 변경되지 않는 한 전환이 쉽습니다. URL을 마이그레이션하고 댓글을 유지하고 싶다면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">저희에게 알려주십시오</a> 이전 URL과 새로운 URL을 보내주시면 됩니다. 도움 페이지에서는 작은 텍스트 파일을 업로드할 수 있으므로, 여러 개 이상의 URL을 마이그레이션하는 경우 Excel 시트를 만드십시오.

### 요약

1. 데이터를 내보내기
2. FastComments로 가져오기
3. IntenseDebate JavaScript 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>로 교체하기

## 왜 IntenseDebate가 파일을 보내지 않나요?
대형 사이트의 경우 IntenseDebate는 기술적 제한으로 인해 내보낸 파일을 생성할 수 없을 수 있습니다. 우리는 기존 사이트를 스크랩하고 댓글을 가져올 수 있는 능력이 있지만, 이는 상당히 사용자 정의가 필요하며 소요되는 시간 때문에 Support Package가 필요합니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 도움을 요청하실 수 있습니다</a>.
{{/isPost}}

---