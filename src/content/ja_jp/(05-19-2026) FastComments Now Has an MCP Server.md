---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastCommentsにはMCPサーバーが追加されました[/postlink]

{{#unless isPost}}
Claude Code、Claude Desktop、Cursor、またはその他のモデルコンテキストプロトコルクライアントをFastCommentsに向けて、直接APIを呼び出すことができるようになりました。
{{/unless}}

{{#isPost}}

### 新機能

FastCommentsは現在、ホストされた[Model Context Protocol](https://modelcontextprotocol.io/)（MCP）サーバーを提供しています。MCPは、AIコーディングアシスタントがサーバー側のツールを呼び出すために使用するオープンスタンダードです。クライアントを1つのURLに向けると、コメントの一覧表示、モデレーション、SSOユーザーの管理、ウィジェットの設定、そして[API](https://docs.fastcomments.com/guide-api.html)が行うその他のすべてのことができます。

### どこにあるか

FastCommentsのダッシュボードから、**Integrate、次にMCP Server**を開くか、直接
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup)にアクセスします。
クライアントに使用させるAPIキーを選択すると、ページは事前入力されたURLとClaude CodeおよびClaude Desktop / Cursorの設定ファイル用のコピー＆ペーストスニペットを生成します。

### Claude Code

登録するための1つのコマンド：

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

その後、セッション内で`/mcp`を入力すると、接続が表示され、サーバーが公開しているすべてのツールがリストされます。「/blog/launchの最後の20件のフラグ付きコメントを表示」、「このコメント者をすべてのサイトでブロック」、「過去1週間のスパムキャッチ率は？」などの質問ができます。Claudeは正しいツールコールを通じてルーティングします。

### Claude DesktopとCursor

クライアントのMCP設定（Claude Desktopの場合は`claude_desktop_config.json`、Cursorの場合は`mcp.json`）にこのブロックを追加します：

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

クライアントを再起動すると、設定済みの他のMCPサーバーと並んでサーバーが表示されます。

### セキュリティ

APIキーはURLに埋め込まれているため、URL自体を秘密として扱ってください。公共のチャット、スクリーンショット、またはコミットにコピーしないようにしてください。キーが露出した場合は、[API Keys page](https://fastcomments.com/auth/my-account/api-secret)から回転させ、設定ページからスニペットを再コピーしてください。エージェントができることを制限するには、アシスタントごとに専用のAPIキーを生成し、正しいドメインに固定します。設定ページのドロップダウンで、スニペットが使用するキーを1クリックで切り替えることができます。

### なぜこれを構築したのか

人々は、SaaS製品とやり取りする日常的なタスクのために、エージェントツールをますます多く使用しています。自分のモデレーションキューをトリアージするためにClaudeやCursorのセッションを配線したり、ピン留めする価値のあるスレッドを表示するためのカスタムエージェントを使用する人は、ラッパーレイヤーを完全にスキップすることができるようになりました。

### 結論

ダッシュボードで[Integrate、次にMCP Server](https://fastcomments.com/auth/my-account/mcp-setup)を開き、お気に入りのMCPクライアント用のスニペットをコピーすると、すぐに利用可能になります。完全なドキュメントは[LLM Kit guide](https://docs.fastcomments.com/guide-llm-kit.html)にあります。

いつものように、何か問題が発生した場合は、下にお知らせください。

乾杯！

{{/isPost}}