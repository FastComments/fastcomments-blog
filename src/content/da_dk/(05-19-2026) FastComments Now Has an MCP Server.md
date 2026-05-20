---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Har Nu En MCP Server[/postlink]

{{#unless isPost}}
Du kan nu pege Claude Code, Claude Desktop, Cursor eller enhver anden Model Context Protocol-klient mod FastComments og få den til at kalde vores API direkte.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

FastComments leverer nu en hosted [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP er den åbne standard, som AI-kodeassistenter bruger til at påkalde server-side værktøjer. Peg din klient mod én URL, og den kan liste dine kommentarer, moderere dem, administrere SSO-brugere, konfigurere widgets og alt andet, som [API](https://docs.fastcomments.com/guide-api.html) gør.

### Hvor den Befinder sig

Fra dit FastComments-dashboard skal du åbne **Integrer, så MCP Server**, eller besøg den direkte på
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Vælg hvilken API-nøgle du vil have klienten til at bruge, og siden genererer en forudfyldt URL plus kopi-og-indsæt snippets til Claude Code og konfigurationsfilerne til Claude Desktop / Cursor.

### Claude Code

Én kommando til registrering:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Derefter viser `/mcp` inden for en session forbindelsen og lister hvert værktøj, som serveren eksponerer. Spørg ting som "vis mig de sidste 20 flagede kommentarer på /blog/launch", "blokér denne kommentator på alle mine sider", eller "hvad er vores spam-fangrate i den sidste uge". Claude ruter gennem det rigtige værktøjsopkald.

### Claude Desktop og Cursor

Tilføj denne blok til din klients MCP-konfiguration (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor):

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

Genstart klienten, og serveren vises sammen med alle andre MCP-servere, du har konfigureret.

### Sikkerhed

API-nøglen er indlejret i URL'en, så behandle selve URL'en som en hemmelighed. Indsæt den ikke i offentlige chats, screenshots eller commits. Hvis en nøgle bliver afsløret, skal den roteres fra [API Keys page](https://fastcomments.com/auth/my-account/api-secret) og re-kopiere snippetet fra opsætningssiden. For at begrænse hvad en agent kan gøre, generer en dedikeret API-nøgle per assistent og lås den til det rette domæne. Dropdown-menuen på opsætningssiden lader dig skifte hvilken nøgle snippetsne bruger med ét klik.

### Hvorfor Vi Byggede Den

Folk bruger agenteredskaber mere og mere til hverdagens opgaver, der interagerer med SaaS-produkter. Enhver der sætter en Claude eller Cursor-session op for at triage deres modereringskø, eller en tilpasset agent til at fremhæve tråde, der er værd at fastgøre, kan nu springe wrapper-laget over helt.

### Afslutningsvis

Åbn [Integrer, så MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) i dit dashboard, kopiér snippetet til din yndlings MCP-klient, og du er i gang. Fuld dokumentation findes i [LLM Kit guide](https://docs.fastcomments.com/guide-llm-kit.html).

Som altid, lad os vide nedenfor, hvis du støder på noget.

Skål!

{{/isPost}}