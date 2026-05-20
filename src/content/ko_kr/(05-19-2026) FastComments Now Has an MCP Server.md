---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments 이제 MCP 서버를 제공합니다.[/postlink]

{{#unless isPost}}
이제 Claude Code, Claude Desktop, Cursor 또는 다른 Model Context Protocol 클라이언트를 FastComments에 연결하고 직접 API를 호출할 수 있습니다.
{{/unless}}

{{#isPost}}

### 새 소식

FastComments는 이제 호스팅된 [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) 서버를 제공합니다. MCP는 AI 코딩 어시스턴트들이 서버 측 도구를 호출하는 데 사용하는 오픈 표준입니다. 클라이언트를 하나의 URL에 연결하면 댓글을 나열하고, 이를 조정하며, SSO 사용자를 관리하고, 위젯을 구성하는 등 [API](https://docs.fastcomments.com/guide-api.html)가 하는 모든 일을 수행할 수 있습니다.

### 위치

FastComments 대시보드에서 **통합, 그런 다음 MCP 서버**를 열거나 직접 방문하여
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup)로 이동하십시오.
클라이언트에서 사용할 API 키를 선택하면, 페이지는 미리 채워진 URL과 Claude Code 및 Claude Desktop / Cursor 구성 파일을 위한 복사-붙여넣기 스니펫을 생성합니다.

### Claude Code

등록할 명령어는 다음과 같습니다:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

그런 다음 세션 내에서 `/mcp`를 입력하면 연결 상태가 표시되고 서버가 노출하는 모든 도구가 나열됩니다. "블로그의 마지막 20개 신고된 댓글을 보여줘", "이 댓글 작성자를 내 모든 사이트에서 차단해", "지난 주의 스팸 잡기 비율은 어땠지"와 같은 질문을 할 수 있습니다. Claude는 올바른 도구 호출을 통해 경로를 안내합니다.

### Claude Desktop 및 Cursor

클라이언트의 MCP 구성에 이 블록을 추가하십시오 (`claude_desktop_config.json`는 Claude Desktop에 대한 것이고, `mcp.json`은 Cursor에 대한 것입니다):

```json
{
  "mcpServers": {
    "fastcomments": {
      "type": "http",
      "url": "https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY"
    }
  }
}
```

클라이언트를 다시 시작하면 서버가 구성한 다른 MCP 서버와 함께 표시됩니다.

### 보안

API 키가 URL에 포함되어 있으므로 URL 자체를 비밀로 취급하십시오. 공개 채팅, 스크린샷 또는 커밋에 붙여넣지 마십시오. 키가 노출되면 [API Keys 페이지](https://fastcomments.com/auth/my-account/api-secret)에서 변경하고 설정 페이지에서 스니펫을 다시 복사하십시오. 에이전트가 수행할 수 있는 작업을 조정하려면 각 어시스턴트별로 전용 API 키를 생성하고 올바른 도메인에 잠금 설정하십시오. 설정 페이지의 드롭다운에서는 스니펫에서 사용할 키를 한 번의 클릭으로 변경할 수 있습니다.

### 우리가 이 기능을 구축한 이유

사람들이 SaaS 제품과 상호작용하는 일상 작업에 대해 점점 더 많은 에이전틱 도구를 사용하고 있습니다. 자신의 조정 대기열을 분류하기 위해 Claude 또는 Cursor 세션을 설정하거나, 고정할 가치가 있는 스레드를 알려줄 맞춤 에이전트를 구축하는 사람은 이제 래퍼 계층을 완전히 건너뛸 수 있습니다.

### 결론

대시보드에서 [통합, 그런 다음 MCP 서버](https://fastcomments.com/auth/my-account/mcp-setup)를 열고, 좋아하는 MCP 클라이언트에 대한 스니펫을 복사하면 활성화됩니다. 전체 문서는 [LLM Kit 가이드](https://docs.fastcomments.com/guide-llm-kit.html)에 있습니다.

언제나처럼 문제를 겪으시면 아래에 알려주십시오.

건배!

{{/isPost}}

---