---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Disqus에서 FastComments로 마이그레이션하기[/postlink]

{{#unless isPost}}
이 게시물을 읽고 Disqus에서 FastComments로 완전히 마이그레이션하는 방법을 확인하세요.

Disqus와 함께하는 Generic Site Integration을 사용하고 있다면, 그들이 제공하는 작은 코드 조각을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드</a>로 교체하는 것만으로 간단하게 해결됩니다.
테스트 및 조정을 위해 Disqus와 FastComments를 같은 사이트에서 임시로 실행할 수도 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

Generic Site Integration을 사용하지 않으면 플랫폼에 따라 지침이 달라지므로 다시 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에게 연락하세요</a>.
{{/unless}}

{{#isPost}}
Disqus가 잘하는 부분이 많지만, 그들이 부족한 부분에서 FastComments가 나섭니다.

## WordPress를 사용하는 경우

FastComments는 전용 WordPress 플러그인을 제공합니다: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

이 플러그인은 설치, 설정 및 동기화를 매우 쉽게 만듭니다. 이 경로로 가면 여기 나머지 지침을 무시할 수 있습니다.

## 수동 Generic 설치

### 기존 댓글 내보내기

FastComments 가져오기 도구는 귀하의 댓글, 사용자 이름, 사용자 아바타 및 인라인 이미지를 마이그레이션합니다. 이미지는 원활하게 우리의 서버로 이동됩니다.

Disqus가 올바르게 처리하는 한 가지는 데이터 내보내기 방식입니다. 그들의 가이드 <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">여기</a>의 단계를 따르면, 이메일로 받은 파일이 신비한 "gz" 파일 확장자를 가지고 있다는 것을 알 수 있습니다. 기술적으로 약간 더 똑똑한 분이라면 이 부분이 "gzip"의 줄임말이며 파일을 압축하는 인기 있고 효율적인 방식이라는 것을 알고 있을 수 있습니다.

### "gz" 파일을 열지 마세요

기본 Windows 10 설치에서는 Disqus의 파일을 열 수 없습니다. 괜찮습니다. FastComments와 함께라면 열 필요가 없습니다. 우리의 백엔드는 이 압축 파일을 이해하므로, 그들의 지침 <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">여기에서 해당 파일을 받으세요</a>를 따르면 됩니다.

그 후 로그인한 상태에서 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져올 수 있습니다</a>. 드롭다운에서 Disqus를 선택하고 파일을 업로드하세요.

### 몇 분 기다리세요

FastComments 가져오기는 "비동기식"입니다. 이는 파일을 업로드하는 것과 처리하는 것이 별개의 단계라는 것을 의미합니다.

따라서 파일 크기에 따라 즉시 성공 메시지를 받을 수 있습니다. 가져오기 페이지 하단에는 테이블이 있습니다. 각 행은 한 번의 가져오기 시도를 나타냅니다.
이 페이지를 안전하게 새로 고쳐 가져오기 진행 상황과 지금까지 얼마나 많은 행이 가져와졌는지 확인할 수 있습니다.

### 완료되면

가져오기가 완료되면 이메일을 받게 됩니다 - 성공 여부와 관계없이. 파일 업로드가 성공하고 가져오기 페이지에서 가져온 내용을 확인한 후에는 페이지를 닫아도 됩니다. 상태는 "요청됨"과 같으며, 시작되면 상태는 "실행 중"이 됩니다.

필요에 따라 여러 번 다시 가져오는 것이 안전합니다 - 하지만 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에게 연락하세요</a> 그래야 도움을 드릴 수 있습니다.

### Disqus 코드를 FastComments로 교체하기

Generic Site Integration을 Disqus와 함께 사용하는 경우, 그들이 제공하는 작은 코드 조각을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 코드</a>로 교체하는 것입니다.
테스트와 조정을 위해 Disqus와 FastComments를 같은 사이트에서 임시로 실행할 수도 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리가 도와드릴 수 있습니다</a>.

Generic Site Integration을 사용하지 않으면 플랫폼에 따라 지침이 달라지므로, 다시 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">우리에게 연락하세요</a>.

### 동시에 URL 마이그레이션하기

댓글 자체는 Disqus 내보내기의 "링크" 필드에 연결되어 있으므로, URL이 변경되지 않는 한 전환이 쉽습니다. URL을 마이그레이션하고 댓글을 유지하려면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">구형 및 새 URL을 보내주시면 됩니다</a>. 도움 페이지에서는 작은 텍스트 파일을 업로드할 수 있으므로, URL이 두 개 이상인 경우 Excel 시트를 만드세요.

### 요약

1. 데이터를 내보냅니다.
2. FastComments로 가져옵니다.
3. Disqus JavaScript 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments의</a> 코드로 교체합니다.

## Disqus에서 내 파일을 보내지 않는 이유는 무엇인가요?
대형 사이트의 경우 Disqus는 기술적 제약으로 인해 내보낸 파일을 생성할 수 없을 수도 있습니다. 우리는 귀하의 기존 사이트를 스크랩하여 댓글을 가져올 수 있는 능력이 있지만, 이는 상당히 맞춤형일 수 있으며 소요 시간 때문에 Support Package가 필요합니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">여기에서 도움을 요청할 수 있습니다</a>.
{{/isPost}}