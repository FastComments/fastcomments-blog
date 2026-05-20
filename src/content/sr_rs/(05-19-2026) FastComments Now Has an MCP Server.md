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

FastComments sada pruža hostovan [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. MCP je otvoreni standard koji AI kodni asistenti koriste za pozivanje alata na serveru. Usmerite svog klijenta na jedan URL i može da prikazuje vaše komentare, moderira ih, upravlja SSO korisnicima, konfiguriše widgete i sve ostalo što radi [API](https://docs.fastcomments.com/guide-api.html).

### Gde se nalazi

Sa vašeg FastComments kontrolnog panela, otvorite **Integracija, zatim MCP Server**, ili ga posetite direktno na
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Izaberite koji API ključ želite da klijent koristi, a stranica generiše unapred popunjen URL plus delove za kopiranje za Claude Code i Claude Desktop / Cursor konfig. datoteke.

### Claude Code

Jedna komanda za registraciju:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Zatim `/mcp` unutar sesije prikazuje vezu i listu svih alata koje server izlaže. Postavljajte pitanja poput "prikazivanje poslednjih 20 označenih komentara na /blog/launch", "blokirajte ovog komentatora na svim mojim sajtovima", ili "kolika je naša stopa hvatanja spama tokom prošle nedelje". Claude usmerava kroz pravilan poziv alata.

### Claude Desktop i Cursor

Dodajte ovu sekciju u MCP konfiguraciju vašeg klijenta (`claude_desktop_config.json` za Claude Desktop, `mcp.json` za Cursor):

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

Ponovo pokrenite klijenta i server se pojavljuje uz sve druge MCP servere koje ste konfigurisali.

### Bezbednost

API ključ je ugrađen u URL, pa tretirajte URL kao tajnu. Ne delite ga u javnim čatovima, snimcima ekrana ili commit-ima. Ako se ključ otkrije, promenite ga na [stranici API ključeva](https://fastcomments.com/auth/my-account/api-secret) i ponovo kopirajte deo sa stranice za podešavanje. Da biste odredili šta agent može da radi, generišite posvećen API ključ po asistentu i zaključajte ga na odgovarajući domen. padajući meni na stranici za podešavanje omogućava vam da zamenite koji ključ se koristi u delovima jednim klikom.

### Zašto smo to izgradili

Ljudi sve više koriste agentska sredstva za svakodnevne zadatke koji uključuju interakciju sa SaaS proizvodima. Svako ko povezuje Claude ili Cursor sesiju za rešavanje svoje moderacione čekalice, ili prilagođenog agenta koji ističe teme vredne prikvačenja, sada može potpuno preskočiti omotač.

### Na kraju

Otvorite [Integraciju, zatim MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) u svom kontrolnom panelu, kopirajte deo za vaš omiljeni MCP klijent, i aktivirali ste ga. Puna dokumentacija je u [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kao i uvek, javite nam ispod ako naiđete na bilo šta.

Pozdrav!

{{/isPost}}

---