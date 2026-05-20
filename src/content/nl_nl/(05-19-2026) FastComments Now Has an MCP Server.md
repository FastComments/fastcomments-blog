---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments heeft nu een MCP-server[/postlink]

{{#unless isPost}}
Je kunt nu Claude Code, Claude Desktop, Cursor, of een andere Model Context Protocol-client naar FastComments wijzen en onze API rechtstreeks aanroepen.
{{/unless}}

{{#isPost}}

### Wat is nieuw

FastComments levert nu een gehoste [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP is de open standaard die AI-coderingassistenten gebruiken om server-side tools aan te roepen. Richt je client op één URL en het kan je opmerkingen opsommen, modereren, SSO-gebruikers beheren, widgets configureren, en alles wat de [API](https://docs.fastcomments.com/guide-api.html) doet.

### Waar het zich bevindt

Open vanuit je FastComments-dashboard **Integreren, dan MCP-server**, of bezoek het rechtstreeks op
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Kies welke API-sleutel je wilt dat de client gebruikt, en de pagina genereert een ingevulde URL plus knip-en-plak-snippets voor Claude Code en de Claude Desktop / Cursor-configuratiebestanden.

### Claude Code

Een opdracht om te registreren:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Daarna toont `/mcp` binnen een sessie de verbinding en somt het elke tool op die de server blootlegt. Vraag dingen zoals "toont me de laatste 20 gemarkeerde opmerkingen op /blog/launch", "blokkeer deze commenter op al mijn sites", of "wat is onze spamcatchrate van de afgelopen week". Claude kiest de juiste toolaanroep.

### Claude Desktop en Cursor

Voeg dit blok toe aan de MCP-configuratie van je client (`claude_desktop_config.json` voor Claude Desktop, `mcp.json` voor Cursor):

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

Herstart de client en de server verschijnt naast alle andere MCP-servers die je hebt geconfigureerd.

### Beveiliging

De API-sleutel is ingebed in de URL, behandel de URL zelf als een geheim. Plak het niet in openbare chatberichten, screenshots, of commits. Als een sleutel wordt blootgesteld, roteer deze dan vanaf de [API-sleutels pagina](https://fastcomments.com/auth/my-account/api-secret) en kopieer de snippet opnieuw vanaf de setup pagina. Om te beperken wat een agent kan doen, genereer een specifieke API-sleutel per assistent en beperk deze tot het juiste domein. De dropdown op de setup pagina stelt je in staat om met één klik te wisselen welke sleutel de snippets gebruiken.

### Waarom we het hebben gebouwd

Mensen gebruiken steeds meer agentische tools voor dagelijkse taken bij interacties met SaaS-producten. Iedereen die een Claude of Cursor-sessie aansluit om hun moderatiewachtrij te triageren, of een aangepaste agent om threads die het waard zijn om vastgepind te worden, kan nu de wrapper-laag helemaal overslaan.

### Conclusie

Open [Integreren, dan MCP-server](https://fastcomments.com/auth/my-account/mcp-setup) in je dashboard, kopieer de snippet voor je favoriete MCP-client, en je bent live. Volledige documentatie is te vinden in de [LLM Kit gids](https://docs.fastcomments.com/guide-llm-kit.html).

Zoals altijd, laat het ons hieronder weten als je tegen iets aanloopt.

Proost!

{{/isPost}}

---