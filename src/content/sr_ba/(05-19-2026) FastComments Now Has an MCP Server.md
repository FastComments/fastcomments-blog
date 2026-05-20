---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments sada ima MCP server[/postlink]

{{#unless isPost}}
Sada možete usmeriti Claude Code, Claude Desktop, Cursor ili bilo koji drugi Model Context Protocol klijent na FastComments i pozvati naš API direktno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada nudi hostovan [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP je otvoreni standard koji veštačka inteligencija koristi za pozivanje alata na strani servera. Usmerite svog klijenta na jedan URL i može da prikaže vaše komentare, moderira ih, upravlja SSO korisnicima, konfiguriše widgete i sve drugo što [API](https://docs.fastcomments.com/guide-api.html) radi.

### Gde se nalazi

Iz vašeg FastComments kontrolnog panela, otvorite **Integrate, zatim MCP Server**, ili ga posetite direktno na
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Izaberite koji API ključ želite da vaš klijent koristi, a stranica generiše prethodno popunjen URL plus delove koje možete lako kopirati za Claude Code i Claude Desktop / Cursor konfuguracione datoteke.

### Claude Code

Jedna komanda za registraciju:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Zatim `/mcp` unutar sesije prikazuje konekciju i lista svake alatke koju server izlaže. Pitajte stvari poput "prikaži mi poslednjih 20 obeleženih komentara na /blog/launch", "blokiraj ovog komentatora na svim mojim sajtovima", ili "koja je naša stopa hvatanja spama tokom prošle nedelje". Claude prenosi putem pravog poziva alatke.

### Claude Desktop i Cursor

Dodajte ovaj blok u MCP konfiguraciju vašeg klijenta (`claude_desktop_config.json` za Claude Desktop, `mcp.json` za Cursor):

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

Ponovo pokrenite klijenta i server se pojavljuje uz bilo koje druge MCP servere koje ste konfigurisali.

### Bezbednost

API ključ je ugrađen u URL, pa tretirajte URL kao tajnu. Ne stavljajte ga u javne čatove, snimke ekrana ili komitmente. Ako se ključ otkrije, promenite ga sa [stranice API ključeva](https://fastcomments.com/auth/my-account/api-secret) i ponovo kopirajte deo sa stranice za podešavanje. Da biste odredili šta agent može da radi, generišite poseban API ključ po asistentu i zaključajte ga na pravu domenu. Padajući meni na stranici za podešavanje vam omogućava da u jednom kliku promenite koji ključ koristi delove.

### Zašto smo to napravili

Ljudi sve više koriste agentske alate za svakodnevne zadatke u interakciji sa SaaS proizvodima. Svako ko povezuje Claude ili Cursor sesiju da rešava svoj moderacijski red, ili prilagođenog agenta za isticanje tema koje vredi prikvačiti, sada može potpuno preskočiti sloj obavijača.

### Na kraju

Otvorite [Integrate, zatim MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) u svom kontrolnom panelu, kopirajte deo za vaš omiljeni MCP klijent, i vi ste aktivni. Puna dokumentacija je u [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kao i uvek, javite nam ispod ako naiđete na bilo šta.

Pozdrav! 

{{/isPost}}