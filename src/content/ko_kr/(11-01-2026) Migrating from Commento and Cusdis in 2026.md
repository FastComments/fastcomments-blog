[category:Migration]
###### [postdate]
# [postlink]2026년 Commento 및 Cusdis 마이그레이션[/postlink]

{{#unless isPost}}
호스팅된 Commento와 Cusdis 서비스가 응답을 멈췄습니다. FastComments로 이동하는 방법과, 내보내기를 하지 않았다면 Internet Archive에서 댓글을 복구하는 방법을 안내합니다.
{{/unless}}

{{#isPost}}

사이트의 댓글 섹션이 비어 있다면 이 글이 도움이 될 것입니다. 무엇이 바뀌었는지, 내보내기 파일이 있다면 어떻게 가져오는지, 그리고 Internet Archive에서 댓글을 복구하는 방법을 다룹니다.

## What Happened

2026년 11월 1일 현재 확인된 상황은 다음과 같습니다:

- **Commento.** commento.io, 해당 API 및 위젯 스크립트가 모두 404를 반환합니다. Internet Archive 캡처에 따르면 사이트는 2026년 5월 25일까지 정상 작동했으며 6월 11일까지 404를 반환했습니다.
- **Cusdis.** cusdis.com 및 API가 Cloudflare 오류 521을 반환하는데, 이는 Cloudflare 뒤의 서버가 다운되었음을 의미합니다. 캡처에 따르면 2026년 8월 27일까지 정상 작동했으며 10월 16일까지 521을 반환했습니다. 위젯 스크립트는 여전히 로드되므로 페이지에 빈 댓글 박스가 표시됩니다.

두 프로젝트 모두 종료 공지를 찾지 못했습니다. Commento 또는 Cusdis를 자체 호스팅하고 있다면 이번 사태와는 무관하며, 이동 준비가 되면 언제든 내보낼 수 있습니다.

## Find Your Data

어떤 경로를 택할지는 현재 상황에 따라 다릅니다:

1. **내보내기 파일이 있는 경우.** Commento는 내보내기 파일을 ".gz" 형식의 이메일 첨부 파일로 전송했으니 받은 편지함도 확인하세요. 바로 가져오기 단계로 넘어가세요.
2. **직접 호스팅 중인 경우.** 자체 대시보드에서 내보낸 뒤 가져오기 단계를 진행하세요.
3. **호스팅 서비스를 이용했지만 내보내기 파일이 없는 경우.** 내보내기를 할 대시보드 자체가 사라졌습니다. 아래 복구 섹션을 읽어보세요.

## Import an Export File

로그인 후 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">여기에서 파일을 가져오기</a>하세요. 드롭다운에서 **Commento (.gz, .json)** 또는 **Cusdis (.json)** 를 선택하고 파일을 업로드합니다. Commento ".gz" 파일을 먼저 압축 해제할 필요는 없습니다.

가져오기는 백그라운드에서 진행되며 완료 시 이메일을 받게 됩니다. 재가져오기도 안전합니다. 각 댓글은 원본 ID로 매칭되어 제자리에서 업데이트됩니다.

각 포맷에 대한 자세한 가이드는 다음을 참고하세요: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a>와 <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. 호스팅 대시보드에서 내보내기를 요청하던 단계는 더 이상 적용되지 않지만, 가져오기 세부 사항은 그대로 유효합니다.

## Recover Your Comments From the Internet Archive

Commento와 Cusdis는 모두 자체 서버에서 JavaScript로 댓글을 로드합니다. Internet Archive가 브라우저로 페이지를 캡처하면 해당 응답도 함께 저장됩니다. 저장된 응답이 댓글 스레드를 보유합니다.

우리는 직접 테스트했습니다. <a href="https://web.archive.org" target="_blank">Wayback Machine</a>에는 12,000개가 넘는 Commento 댓글 응답과 448개의 Cusdis 프로젝트 캡처가 있으며, 가장 최신은 2026년 것입니다. 이를 위한 셀프 서비스 도구는 없으며, 저희가 복구 작업을 대신 수행합니다. 시작하려면 <a href="https://fastcomments.com/contact-us" target="_blank">연락 주세요</a>.

### Check Your Own Site First

Wayback Machine에서 가장 활발한 게시물 중 하나를 열고 주소를 자신의 사이트 주소로 바꿔보세요:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

댓글 섹션까지 스크롤합니다. 댓글이 표시되면 해당 스레드가 아카이브에 존재한다는 뜻입니다. 표시되지 않으면 페이지 상단 캘린더에서 다른 연도를 시도해 보세요. 한 게시물에서 빈 결과가 나와도 사이트 전체가 그렇다는 의미는 아니니, 어쨌든 저희에게 알려 주세요.

### How the Recovery Works

1. **도메인을 알려 주세요.** Cusdis를 사용했다면 사이트 스니펫에 있는 `data-app-id` 값인 App ID도 함께 보내 주세요. 댓글이 사이트에 속해 있기 때문에 도메인 소유를 증명해 달라고 요청할 것입니다.
2. **스레드를 찾습니다.** 사이트에 대한 캡처를 수집하고 각각이 해당 도메인·페이지에 속하는지 확인합니다. Commento 복구는 시간이 더 오래 걸리는데, 아카이브가 사이트별로 캡처를 색인하지 않아 모두 읽어야 하기 때문입니다.
3. **찾은 결과를 보여 드립니다.** 가져오기 전에 몇 개의 페이지와 댓글이 복구되었는지, 가장 최신 댓글 날짜가 언제인지 확인할 수 있습니다.
4. **스레드를 계정에 가져옵니다.** 이후 moderation 대시보드에서 댓글을 편집하거나 삭제할 수 있습니다.

### What Comes Back

<div class="pretty-table wide-table">

| Data | Commento | Cusdis |
| --- | --- | --- |
| Comment text | Yes | Yes |
| Author display name | Yes | Yes |
| Comment date | Yes | Yes |
| Reply threading | Yes | Yes |
| Vote score | Yes | Cusdis has no votes |
| Page address | Yes | Yes, though some sites stored only a path, so we need your domain |
| Author email | No | No |
| Comments still awaiting approval | No | No |
| Comments written after the last capture | No | No |
| Pages the archive never captured | No | No |

</div>

### What to Expect

복구는 스냅샷 기반이므로 빈틈이 있을 수 있습니다. 자주 그리고 최근에 캡처된 페이지에서 가장 잘 작동합니다.

테스트 결과 두 가지 예시가 있습니다. 한 블로그에서는 30개의 조회로 19개 페이지에 걸쳐 810개의 댓글이 복구되었습니다. 다른 사이트에서는 아직 댓글이 표시되고 있는데, 최신 아카이브 사본은 2023년 10월에 멈추었고 실제 페이지는 2025년 3월까지 운영되었습니다. 마지막 캡처와 서비스 종료 사이에 작성된 내용은 아카이브에 없습니다.

누락된 이메일도 영향을 미칩니다. 복구된 댓글은 작성자 이름을 유지하지만 FastComments 계정과 연결되지 않으며, 작성자는 새로운 답글 알림을 받지 못합니다.

## Replace the Widget

어떤 경로를 택했든, 기존 스니펫을 사이트에서 제거해야 합니다. Commento의 경우, 댓글 수를 표시하는 `count.js`도 함께 제거하세요:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Cusdis의 경우, 다음을 제거합니다:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

그런 다음 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리 위젯</a>을 추가합니다:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

우리는 다양한 프론트엔드 프레임워크도 지원합니다. <a href="https://fastcomments.com/install-wizard" target="_blank">여기에서 확인</a>하세요. 복구가 끝날 때까지 기다릴 필요 없이 바로 전환할 수 있습니다. 독자들은 즉시 댓글을 달 수 있고, 복구된 스레드는 가져오기 시 동일한 페이지에 합쳐집니다.

### If Your URLs Are Changing

가져온 댓글은 페이지 URL에 연결됩니다. URL이 그대로라면 스레드가 자동으로 맞춰집니다. URL이 바뀌는 경우, 먼저 가져온 뒤 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> 도구를 사용해 새 위치로 이동하세요.

## EU

EU에 계신 경우, 고객 데이터가 EU 내에 머물도록 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>에서 계정을 생성하는 것이 좋습니다.

## Recap

1. 내보내기 파일을 찾아보세요. 이메일도 확인합니다.
2. 파일이 있다면 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">가져오기 페이지</a>에 업로드합니다.
3. 파일이 없으면 Wayback Machine에서 사이트를 확인하고 <a href="https://fastcomments.com/contact-us" target="_blank">도메인을 알려 주세요</a>.
4. 기존 스니펫을 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">우리 위젯</a>으로 교체합니다.

Cheers!

{{/isPost}}