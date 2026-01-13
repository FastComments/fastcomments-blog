---
[category:Migration]
###### [postdate]
# [postlink]Muut 댓글에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽고 Muut에서 FastComments로 완전히 마이그레이션하는 방법을 알아보세요.

Muut가 제공하는 작은 코드를 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드</a>로 교체하는 간단한 문제입니다.
Muut와 FastComments를 같은 사이트에서 임시로 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.
{{/unless}}

{{#isPost}}
### 기존 댓글 내보내기

FastComments 가져오기 도구는 댓글, 사용자 이름, 사용자 아바타 및 인라인 이미지를 마이그레이션합니다. 이미지는 우리의 서버로 원활하게 이동됩니다.

Muut의 관리 대시보드에서 사이트의 댓글 및 사용자 데이터를 내보내려면 통합으로 이동한 후 JSON 내보내기를 선택하세요.

이메일을 통해 받는 결과 파일이 수수께끼 같은 "gz" 파일 확장자를 가지고 있는 것을 알 수 있습니다. 기술적으로 조금 더 숙련된 분이라면 "gzip"을 의미하며 파일을 압축하는 인기 있고 효율적인 방법이라는 것을 알 수 있을 것입니다.

### "gz" 파일을 열지 마세요

기본 Windows 10 설치는 Muut에서 온 파일을 열 수 없습니다. 그러나 FastComments를 사용하면 그럴 필요가 없습니다. 우리의 백엔드는 이 압축된 파일을 이해합니다.

그 후 로그인 상태라면 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져올 수 있습니다</a>. 드롭다운에서 Muut를 선택하고 파일을 업로드합니다.

웹사이트의 URL을 입력해야 합니다. 이는 Muut가 내보내기에서 해당 정보를 제공하지 않기 때문입니다.

### 몇 분 기다리세요

FastComments 가져오기는 "비동기적"입니다. 즉, 파일을 업로드하고 처리하는 단계가 별개입니다.

따라서 파일 크기에 따라 바로 성공 메시지를 받을 수 있습니다. 가져오기 페이지 하단에는 테이블이 있으며 각 행은 가져오기 시도를 나타냅니다.
이 페이지를 새로 고쳐도 안전하게 가져오기 상태와 지금까지 몇 개의 행이 가져와졌는지 확인할 수 있습니다.

### 완료되면

가져오기가 완료되면 이메일을 받게 됩니다 - 성공 여부에 관계없이. 파일 업로드가 성공하고 가져오기가 가져오기 페이지에 표시되면 페이지를 닫을 수 있습니다. 상태가 "요청됨"으로 표시되고 시작되면 상태는 "실행 중"으로 바뀝니다.

필요한 만큼 여러 번 재가져오는 것은 안전합니다 - 그러나 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">저희에게 연락</a>하여 도움을 받을 수 있도록 하세요.

### Muut 코드를 FastComments로 교체하기

Muut가 제공하는 작은 코드를 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드</a>로 교체하는 간단한 문제입니다.
Muut와 FastComments를 같은 사이트에서 임시로 실행하여 모양과 느낌을 테스트하고 조정할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

### 동시에 URL 마이그레이션하기

댓글 자체는 Muut 내보내기의 "링크" 필드에 연결되어 있으므로 URL이 변경되지 않는 한 전환이 쉽습니다. URL을 마이그레이션하고 댓글을 유지하려면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">구стар 알려주세요</a> 이전 URL과 새 URL을 저희에게 보내주세요. 도움 페이지에서는 작은 텍스트 파일을 업로드할 수 있으므로, URL이 몇 개 이상인 경우 Excel 시트를 작성하세요.

### 요약

1. 데이터를 내보내기
2. FastComments로 가져오기
3. Muut JavaScript 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments의</a> 것으로 교체하기

## 왜 Muut가 내 파일을 보내주지 않나요?
대규모 사이트의 경우 Muut가 기술적 제한으로 인해 내보낸 파일을 생성할 수 없을 수 있습니다. 우리는 기존 사이트를 스크랩하여 댓글을 가져오는 능력이 있지만, 이는 상당히 커스터마이즈 될 수 있으며, 소요되는 시간 때문에 지원 패키지가 필요합니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 도움을 요청할 수 있습니다</a>.
{{/isPost}}

---