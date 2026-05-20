[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Now Has an MCP Server[/postlink]

{{#unless isPost}}
You can now point Claude Code, Claude Desktop, Cursor, or any other Model Context Protocol client at FastComments and have it call our API directly.
{{/unless}}

{{#isPost}}

### What's New

FastComments now ships a hosted [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP is the open standard AI coding assistants use to invoke server-side tools. Point your client at one URL and it can list your comments, moderate them, manage SSO users, configure widgets, and anything else the [API](https://docs.fastcomments.com/guide-api.html) does.

### Where It Lives

From your FastComments dashboard, open **Integrate, then MCP Server**, or visit it directly at
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Pick which API key you want the client to use, and the page generates a pre-filled URL plus copy-paste snippets for Claude Code and the Claude Desktop / Cursor config files.

### Claude Code

One command to register:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Then `/mcp` inside a session shows the connection and lists every tool the server exposes. Ask things like "show me the last 20 flagged comments on /blog/launch", "block this commenter across all my sites", or "what's our spam catch rate over the last week". Claude routes through the right tool call.

### Claude Desktop and Cursor

Add this block to your client's MCP config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor):

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

Restart the client and the server appears alongside any other MCP servers you have configured.

### Security

The API key is embedded in the URL, so treat the URL itself as a secret. Do not paste it in public chats, screenshots, or commits. If a key gets exposed, rotate it from the [API Keys page](https://fastcomments.com/auth/my-account/api-secret) and re-copy the snippet from the setup page. To scope what an agent can do, generate a dedicated API key per assistant and lock it to the right domain. The dropdown on the setup page lets you swap which key the snippets use in one click.

### Why We Built It

People are using agentic tools more and more for everyday tasks interacting with SaaS products. Anyone wiring up a Claude or Cursor session to triage their moderation queue, or a custom agent to surface threads worth pinning, can now skip the wrapper layer entirely.

### In Conclusion

Open [Integrate, then MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) in your dashboard, copy the snippet for your favorite MCP client, and you are live. Full documentation is in the [LLM Kit guide](https://docs.fastcomments.com/guide-llm-kit.html).

As always, let us know below if you run into anything.

Cheers!

{{/isPost}}
