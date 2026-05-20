---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments zdaj ima MCP strežnik[/postlink]

{{#unless isPost}}
Zdaj lahko usmerite Claude Code, Claude Desktop, Cursor ali katerikoli drug Model Context Protocol odjemalec na FastComments in ga priključite na naš API neposredno.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments zdaj ponuja gostovani [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) strežnik. MCP je odprti standard, ki ga umetne inteligence uporabljajo za dostopanje do orodij na strežniku. Usmerite svoj odjemalec na eno URL in lahko prikaže vaše komentarje, moderira jih, upravlja SSO uporabnike, konfigurira pripomočke in še karkoli drugega, kar počne [API](https://docs.fastcomments.com/guide-api.html).

### Kje se nahaja

Na nadzorni plošči FastComments odprite **Integriraj, nato MCP strežnik**, ali obiščite neposredno na 
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Izberite kateri API ključ želite, da ga odjemalec uporablja, in stran ustvari napolnjen URL ter kopiraj-in-prilepi delčke za Claude Code in konfiguracijske datoteke za Claude Desktop / Cursor.

### Claude Code

En ukaz za registracijo:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Nato `/mcp` znotraj seje prikaže povezavo in našteje vsa orodja, ki jih strežnik ponuja. Vprašajte stvari kot "prikaži mi zadnjih 20 označenih komentarjev na /blog/launch", "blokiraj tega komentatorja na vseh mojih straneh", ali "kakšna je naša stopnja ulovljenega spama v prejšnjem tednu". Claude usmerja skozi pravilni klic orodja.

### Claude Desktop in Cursor

Dodajte ta blok v konfiguracijo MCP vašega odjemalca (`claude_desktop_config.json` za Claude Desktop, `mcp.json` za Cursor):

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

Ponovno zaženite odjemalca in strežnik se pojavi poleg vseh drugih MCP strežnikov, ki ste jih konfigurirali.

### Varnost

API ključ je vgrajen v URL, zato obravnavajte URL kot skrivnost. Ne prilepite ga v javne klepete, zajem slike ali obveznice. Če pride do izpostavitve ključa, ga zamenjajte na [strani API ključev](https://fastcomments.com/auth/my-account/api-secret) in ponovno kopirajte delček s strani za nastavitev. Da omejite, kaj lahko agent počne, ustvarite posebne API ključe za vsak asistenta in jih zaklenite na pravem domeni. Spustni meni na strani za nastavitev vam omogoča, da z enim klikom zamenjate, kateri ključ se uporablja v delčkih.

### Zakaj smo to zgradili

Ljudje vse bolj uporabljajo agentska orodja za vsakodnevne naloge pri interakciji z SaaS izdelki. Kdor povezuje sejo Claude ali Cursor za razvrščanje njihove moderacijske vrste, ali nišnega agenta za iskanje postov, vrednih pripenjanja, lahko zdaj popolnoma preskoči plast ovijalnika.

### Na koncu

Odprite [Integriraj, nato MCP strežnik](https://fastcomments.com/auth/my-account/mcp-setup) na svoji nadzorni plošči, kopirajte delček za svoj najljubši MCP odjemalec in ste aktivni. Celotna dokumentacija je v [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kot vedno, sporočite nam spodaj, če naletite na kaj.

Na zdravje!

{{/isPost}}

---