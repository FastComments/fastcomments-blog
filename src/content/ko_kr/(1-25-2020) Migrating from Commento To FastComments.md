---
[category:Migration]
###### [postdate]
# [postlink]Commento에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽어 Commento에서 FastComments로 완전히 마이그레이션하는 방법을 확인하세요.

## 주의사항

Commento는 전체 URL을 제공하지 않습니다. 그들이 제공하는 것은 댓글 스레드가 속한 도메인 이름일 뿐입니다 - "fastcomments.com/some-page"와 같습니다.
이것은 FastComments 가져오기 도구가 프로토콜을 가정해야 함을 의미하며, 기본값은 https입니다. 가져오기를 실행했는데 데이터가 보이지 않는다면
사이트가 적절하게 보안 설정되어 있는지 확인하십시오.
{{/unless}}

{{#isPost}}
### 기존 댓글 내보내기

Commento의 관리 대시보드에서 사이트의 댓글 및 사용자 데이터를 내보내려면 일반을 클릭한 다음 데이터 내보내기를 선택하세요.

이메일로 받는 파일에 신비로운 "gz" 파일 확장자가 있다는 것을 알 수 있습니다. 약간 기술적인 지식이 있다면 이는 "gzip"을 의미하며, 파일을 압축하는 인기 있고 효율적인 방법이라는 것을 알 것입니다.

### "gz" 파일 열지 마세요

기본 Windows 10 설치는 Commento에서 제공하는 파일을 열 수 없습니다. 괜찮습니다. FastComments에서는 열 필요가 없습니다. 우리의 백엔드는 이 압축 파일을 이해합니다.

그 후, 로그인한 상태에서 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져올 수 있습니다</a>. 드롭다운에서 Commento를 선택하고 파일을 업로드하세요.

### 몇 분 기다리세요

FastComments 가져오기는 "비동기식"입니다. 이는 파일 업로드와 처리 과정이 별도의 단계임을 의미합니다.

따라서 파일 크기에 따라 성공 메시지를 바로 받을 수 있습니다. 가져오기 페이지 하단에 테이블이 있습니다 - 각 행은 가져오기 시도를 나타냅니다.
이 페이지를 안전하게 새로 고쳐 가져기 진행 상태와 지금까지 몇 개의 행이 가져온 되었는지 확인할 수 있습니다.

### 완료되면

가져오기가 완료되면 성공 여부와 상관없이 이메일을 받게 됩니다. 파일 업로드가 성공하고 가져오기를 Imports 페이지에서 확인하면 페이지를 닫을 수 있습니다. 상태는 "요청됨"으로 표시되고 시작할 때 상태는 "실행 중"으로 표시됩니다.

필요한 만큼 안전하게 다시 가져올 수 있습니다 - 그러나 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에 연락하세요</a> 도움을 드릴 수 있습니다.

### Commento 코드를 FastComments로 교체하기

Commento에서 제공한 작은 코드를 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드로 교체하기만 하면 됩니다</a>.
테스트 및 조정을 위해 임시로 같은 사이트에서 Commento와 FastComments를 동시에 실행할 수도 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

### URL을 동시에 마이그레이션

댓글 자체는 Commento 내보내기에서 "링크" 필드에 연결되어 있으므로 URL이 변경되지 않는 한 전환이 용이합니다. URL을 마이그레이션하고 댓글을 유지하려면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">구체적인 정보를 알려주세요</a> 이전과 새 URL을 보내줍니다. 도움 페이지에서는 작은 텍스트 파일 업로드를 허용하므로 
두 개 이상의 URL을 마이그레이션하는 경우 Excel 시트를 작성하세요.

### 요약

1. 데이터를 내보내기
2. FastComments로 가져오기
3. Commento JavaScript 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments의</a> 것으로 교체하기

## 주의사항

Commento는 전체 URL을 제공하지 않습니다. 그들이 제공하는 것은 댓글 스레드가 속한 도메인 이름일 뿐입니다 - "fastcomments.com/some-page"와 같습니다.
이것은 FastComments 가져오기 도구가 프로토콜을 가정해야 함을 의미하며, 기본값은 https입니다. 가져오기를 실행했는데 데이터가 보이지 않는다면
사이트가 적절하게 보안 설정되어 있는지 확인하십시오.

## Commento가 내 파일을 왜 보내주지 않나요?
더 큰 사이트의 경우 Commento가 기술적인 제한으로 인해 내보낸 파일을 생성할 수 없을 수 있습니다. 기존 사이트를 스크랩하여 댓글을 수집할 수 있는 능력이 있지만, 이는 상당히 사용자 정의될 수 있으며 소요 시간으로 인해 Support Package가 필요합니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 도움을 요청할 수 있습니다</a>.
{{/isPost}}

---