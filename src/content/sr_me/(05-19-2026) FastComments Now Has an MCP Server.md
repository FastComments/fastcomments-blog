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

FastComments sada nudi hostovani [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP je otvoreni standard koji AI asistenti koriste da pozovu alate sa server strane. Usmerite svoj klijent na jedan URL i može da lista vaše komentare, moderira ih, upravlja SSO korisnicima, konfiguriše vidžete i bilo šta drugo što [API](https://docs.fastcomments.com/guide-api.html) radi.

### Gde se nalazi

Sa vašeg FastComments kontrolnog panela, otvorite **Integrate, zatim MCP Server**, ili ga posetite direktno na
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Izaberite koji API ključ želite da klijent koristi, a stranica generiše unapred popunjeni URL plus delove koje možete kopirati i zalepiti za Claude Code i konfiguracione fajlove Claude Desktop / Cursor.

### Claude Code

Jedna komanda za registraciju:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Zatim `/mcp` unutar sesije prikazuje vezu i listu svakog alata koji server izlaže. Pitajte stvari poput "prikaži mi poslednjih 20 označenih komentara na /blog/launch", "blokiraj ovog komentatora na svim mojim sajtovima", ili "koliki je naš procenat spamova u poslednjoj nedelji". Claude usmerava kroz pravi poziv alata.

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

Ponovo pokrenite klijent i server se pojavljuje pored svih drugih MCP servera koje ste konfigurisali.

### Bezbednost

API ključ je ugrađen u URL, pa tretirajte sam URL kao tajnu. Ne zalepite ga u javne čete, snimke ekrana ili commit-ove. Ako se ključ otkrije, promenite ga na [stranici API ključeva](https://fastcomments.com/auth/my-account/api-secret) i ponovo kopirajte deo sa stranice za konfigurisanje. Da biste ograničili šta agent može da radi, generišite poseban API ključ po asistentu i zaključajte ga na pravi domen. Padajući meni na stranici za konfigurisanje vam omogućava da u jednom kliku promenite koji ključ dele delovi.

### Zašto smo to napravili

Ljudi sve više koriste agentne alate za svakodnevne zadatke u interakciji sa SaaS proizvodima. Svako ko povezuje Claude ili Cursor sesiju da sortira svoj moderacijski red, ili prilagođenog agenta da iznese teme koje vredi prikvačiti, sada može potpuno da preskoči omotač.

### Na kraju

Otvorite [Integrate, zatim MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) u vašem kontrolnom panelu, kopirajte deo za vaš omiljeni MCP klijent i aktivirani ste. Potpuna dokumentacija je u [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kao i uvek, javite nam u komentarima ako naiđete na bilo šta.

Živeli!

{{/isPost}}