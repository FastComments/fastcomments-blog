[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
이 게시물을 읽고 Cusdis에서 FastComments로 완전하게 마이그레이션하는 방법을 확인하세요. 여기에는 스레드, 검토 상태, 페이지 URL이 포함됩니다.
{{/unless}}

{{#isPost}}

Cusdis는 가볍고 오픈 소스인 댓글 시스템입니다. 규모가 커져 스팸 필터링, 투표, 반응, 알림, SSO, 전체 검토 대시보드와 같은 기능이 필요하다면 FastComments가 이제 Cusdis 데이터를 직접 가져옵니다.

## Export Your Existing Comments

Cusdis 대시보드에서 전체 데이터 내보내기를 요청하세요. Cusdis는 프로젝트, 페이지 및 모든 댓글을 포함한 단일 JSON 파일을 제공하며, 스레드와 승인 상태도 포함됩니다. Cusdis 설정에 따라 내보내기가 이메일로 전송되거나 바로 다운로드됩니다.

편집하거나 압축을 풀 필요가 없습니다. ".json" 파일을 그대로 유지하면 백엔드가 직접 읽습니다.

## Import Into FastComments

로그인한 후 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져오세요</a>. 드롭다운에서 **Cusdis (.json)**을 선택하고 파일을 업로드합니다.

### Wait a few minutes

FastComments 가져오기는 "비동기식"입니다. 파일 업로드와 처리 단계가 별개입니다. 작은 파일의 경우 성공 메시지가 즉시 나타납니다. 가져오기 페이지 하단에 표가 있으며 각 행은 가져오기 시도입니다. 페이지를 새로고침하여 상태와 현재까지 가져온 댓글 수를 확인하세요.

### When it's done

가져오기가 완료되면 성공 여부와 관계없이 이메일을 받게 됩니다. 업로드가 성공하고 가져오기가 "Requested" 또는 "Running" 상태로 표시되면 페이지를 닫아도 안전합니다.

재가져오기도 안전합니다. FastComments는 원본 Cusdis ID로 각 댓글을 매칭하므로 다시 가져오면 중복 생성 없이 기존 댓글을 업데이트합니다. 가져오기가 실패하면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">문의해 주세요</a>, 도와드리겠습니다.

## What is Imported

- **Threaded replies.** Cusdis는 여러 단계 깊이로 답글을 중첩시키며, FastComments는 전체 부모-자식 구조를 재구성합니다.
- **Moderation status.** 승인된 댓글은 그대로 유지됩니다. 아직 승인 대기 중인 댓글은 FastComments 검토 대기열에 들어가 검토할 수 있습니다.
- **Authors.** 각 댓글 작성자의 이름과 이메일이 그대로 옮겨지며, 등록된 FastComments 사용자는 이메일로 매칭됩니다.
- **Formatting.** Cusdis 댓글은 Markdown으로 작성됩니다. FastComments는 동일한 Markdown을 렌더링하여 링크, 이미지, 줄 바꿈 등을 포함해 스레드가 이전과 정확히 동일하게 표시됩니다.

Cusdis에서 삭제된 댓글은 남아 있지 않으므로 가져온 스레드는 깨끗하게 유지됩니다.

## Replace the Cusdis Widget

데이터가 옮겨졌으면 사이트에서 작은 Cusdis 스니펫을 제거하고 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리의 스니펫</a>을 삽입하세요. 먼저 외관과 느낌을 테스트하기 위해 Cusdis와 FastComments를 동시에 실행할 수 있습니다. 우리는 다양한 프론트엔드 프레임워크를 지원하며, <a href="https://fastcomments.com/install-wizard" target="_blank">여기에서 확인</a>할 수 있습니다. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">도움을 드릴 수 있습니다</a>.

### Migrating URLs at the same time

Cusdis는 각 댓글을 페이지 URL에 연결하므로 URL이 변하지 않으면 전환이 쉽습니다. URL도 변경되는 경우 먼저 Cusdis 데이터를 가져온 뒤, Manage Data 아래에 있는 내장 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> 도구를 사용해 댓글을 새 위치로 이동하세요. 전체 도메인, 전체 URL, 또는 URL ID를 기존 및 새 위치에 입력할 수 있어 하나의 "from"과 "to" 쌍으로 일치하는 모든 페이지를 한 번에 이동합니다. 백그라운드 작업으로 실행되며 완료 시 이메일을 보냅니다.

직접 처리하기를 원한다면(페이지가 많을 경우) <a href="https://fastcomments.com/auth/my-account/help" target="_blank">알려 주세요</a> 기존 URL과 새 URL을.

## EU

EU에 계시다면 고객 데이터가 EU에 머무르도록 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>에서 계정을 생성하는 것이 좋습니다.

## Recap

1. Cusdis에서 데이터를 JSON으로 내보내기
2. FastComments 가져오기 페이지에 업로드하고 **Cusdis (.json)** 선택
3. Cusdis 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a> 스니펫으로 교체

{{/isPost}}

---