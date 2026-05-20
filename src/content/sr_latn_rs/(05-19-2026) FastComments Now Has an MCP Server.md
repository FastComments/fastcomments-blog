---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments sada ima MCP server[/postlink]

{{#unless isPost}}
Sada možete usmeriti Claude Code, Claude Desktop, Cursor, ili bilo koji drugi Model Context Protocol klijent na FastComments i koristiti naš API direktno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada nudi hostovan [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP je otvoreni standard koji AI alati za kodiranje koriste da aktiviraju alate na serverskoj strani. Usmerite svoj klijent na jedan URL i može da navede vaše komentare, moderira ih, upravlja SSO korisnicima, konfiguriše widgete i sve ostalo što [API](https://docs.fastcomments.com/guide-api.html) radi.

### Gde se nalazi

Sa vašeg FastComments kontrolnog panela, otvorite **Integracija, zatim MCP Server**, ili ga posetite direktno na
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Izaberite koji API ključ želite da vaš klijent koristi, a stranica generiše prethodno popunjen URL plus deljenje za kopiranje za Claude Code i Claude Desktop / Cursor konfiguracione datoteke.

### Claude Code

Jedna komanda za registraciju:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Zatim `/mcp` unutar sesije pokazuje vezu i navodi sve alate koje server nudi. Pitajte stvari poput "prikaži mi poslednjih 20 označenih komentara na /blog/launch", "blokiraj ovog komentatora na svim mojim sajtovima", ili "koja je naša stopa hvatanja spama u poslednjoj nedelji". Claude usmerava kroz pravi poziv alata.

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

Ponovo pokrenite klijenta i server će se pojaviti pored bilo kojih drugih MCP servera koje ste konfigurisali.

### Bezbednost

API ključ je ugrađen u URL, zato tretirajte sam URL kao tajnu. Ne delite ga u javnim čatovima, snimcima ekrana, ili commit-ima. Ako se ključ otkrije, promenite ga sa [stranice API ključeva](https://fastcomments.com/auth/my-account/api-secret) i ponovo kopirajte deljenje sa stranice za postavljanje. Da biste definisali šta agent može da uradi, generišite posvećen API ključ za svakog asistenta i zaključajte ga na pravi domen. Padajući meni na stranici za postavljanje vam omogućava da promenite koji ključ deljenja koristi jednim klikom.

### Zašto smo to napravili

Ljudi sve više koriste agentske alate za svakodnevne zadatke u interakciji sa SaaS proizvodima. Svako ko povezuje sesiju Claude ili Cursor da rešava svoj moderacijski red, ili prilagođenog agenta da izdvaja teme koje vredi pričvrstiti, sada može potpuno preskočiti wrapper sloj.

### U zaključku

Otvorite [Integracija, zatim MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) na svom kontrolnom panelu, kopirajte deljenje za svog omiljenog MCP klijenta, i uživajte. Potpuna dokumentacija je u [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kao i uvek, javite nam u komentarima ako naiđete na bilo šta.

Pozdrav!

{{/isPost}}