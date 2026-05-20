---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments hat jetzt einen MCP-Server[/postlink]

{{#unless isPost}}
Sie können jetzt Claude Code, Claude Desktop, Cursor oder jeden anderen Model Context Protocol-Client auf FastComments richten und unsere API direkt aufrufen.
{{/unless}}

{{#isPost}}

### Neuigkeiten

FastComments bietet jetzt einen gehosteten [Model Context Protocol](https://modelcontextprotocol.io/) (MCP)-Server an. MCP ist der offene Standard, den KI-Coding-Assistenten verwenden, um serverseitige Tools aufzurufen. Richten Sie Ihren Client auf eine URL und er kann Ihre Kommentare auflisten, moderieren, SSO-Benutzer verwalten, Widgets konfigurieren und alles andere tun, was die [API](https://docs.fastcomments.com/guide-api.html) ermöglicht.

### Wo es zu finden ist

Öffnen Sie von Ihrem FastComments-Dashboard aus **Integrieren, dann MCP-Server**, oder besuchen Sie es direkt unter
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Wählen Sie aus, welchen API-Schlüssel der Client verwenden soll, und die Seite generiert eine vorausgefüllte URL sowie Kopier-Schnipsel für Claude Code und die Konfigurationsdateien von Claude Desktop / Cursor.

### Claude Code

Ein Befehl zur Registrierung:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Dann zeigt `/mcp` innerhalb einer Sitzung die Verbindung an und listet jedes Tool auf, das der Server bereitstellt. Fragen Sie Dinge wie "zeige mir die letzten 20 markierten Kommentare auf /blog/launch", "blockiere diesen Kommentator auf allen meinen Seiten" oder "wie hoch ist unsere Spam-Erfassungsquote in der letzten Woche". Claude leitet den richtigen Toolaufruf weiter.

### Claude Desktop und Cursor

Fügen Sie diesen Block zu den MCP-Konfigurationen Ihres Clients hinzu (`claude_desktop_config.json` für Claude Desktop, `mcp.json` für Cursor):

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

Starten Sie den Client neu und der Server erscheint neben allen anderen MCP-Servern, die Sie konfiguriert haben.

### Sicherheit

Der API-Schlüssel ist in der URL eingebettet, behandeln Sie die URL selbst daher als geheim. Fügen Sie sie nicht in öffentlichen Chats, Screenshots oder Commits ein. Wenn ein Schlüssel exponiert wird, drehen Sie ihn von der [API Keys-Seite](https://fastcomments.com/auth/my-account/api-secret) und kopieren Sie den Schnipsel erneut von der Einrichtungsseite. Um den Umfang dessen, was ein Agent tun kann, zu begrenzen, generieren Sie einen speziellen API-Schlüssel pro Assistent und sperren Sie ihn für die richtige Domain. Das Dropdown-Menü auf der Einrichtungsseite ermöglicht es Ihnen, auf einen Klick zu wechseln, welchen Schlüssel die Schnipsel verwenden.

### Warum wir es gebaut haben

Menschen nutzen zunehmend agentische Tools für alltägliche Aufgaben, die mit SaaS-Produkten interagieren. Jeder, der eine Claude- oder Cursor-Sitzung einrichtet, um seine Moderationswarteschlange zu verwalten, oder einen benutzerdefinierten Agenten, um Threads anzuzeigen, die es wert sind, angeheftet zu werden, kann jetzt die Wrapper-Schicht vollständig überspringen.

### Fazit

Öffnen Sie [Integrieren, dann MCP-Server](https://fastcomments.com/auth/my-account/mcp-setup) in Ihrem Dashboard, kopieren Sie den Schnipsel für Ihren bevorzugten MCP-Client, und Sie sind live. Die vollständige Dokumentation finden Sie im [LLM Kit-Leitfaden](https://docs.fastcomments.com/guide-llm-kit.html).

Wie immer, lassen Sie es uns unten wissen, wenn Sie auf etwas stoßen.

Prost!

{{/isPost}}

---