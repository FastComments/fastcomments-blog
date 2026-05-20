---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments sada ima MCP poslužitelj[/postlink]

{{#unless isPost}}
Sada možete usmjeriti Claude Code, Claude Desktop, Cursor ili bilo kojeg drugog Model Context Protocol klijenta na FastComments i pozvati naš API izravno.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments sada nudi hostani [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) poslužitelj. MCP je otvoreni standard koji AI asistenti za kodiranje koriste za pozivanje alata na strani poslužitelja. Usmjerite svog klijenta na jednu URL adresu i može navesti vaše komentare, moderirati ih, upravljati SSO korisnicima, konfigurirati widgete i sve drugo što radi [API](https://docs.fastcomments.com/guide-api.html).

### Gdje se nalazi

Iz vašeg FastComments nadzorne ploče, otvorite **Integriraj, zatim MCP poslužitelj**, ili ga posjetite izravno na 
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Odaberite koji API ključ želite da klijent koristi, a stranica generira unaprijed ispunjenu URL adresu plus dijeljenje koda za Claude Code i konfiguracijske datoteke Claude Desktop / Cursor.

### Claude Code

Jedna naredba za registraciju:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Zatim `/mcp` unutar sesije prikazuje vezu i navodi svaki alat koji poslužitelj izlaže. Pitajte stvari poput "prikaži mi posljednjih 20 označenih komentara na /blog/launch", "blokiraj ovog komentatora na svim mojim stranicama", ili "kolika je stopa hvatanja spama u posljednjem tjednu". Claude usmjerava kroz pravilan poziv alata.

### Claude Desktop i Cursor

Dodajte ovu blok u konfiguraciju MCP vašeg klijenta (`claude_desktop_config.json` za Claude Desktop, `mcp.json` za Cursor):

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

Ponovno pokrenite klijenta i poslužitelj će se pojaviti uz ostale MCP poslužitelje koje ste konfigurirali.

### Sigurnost

API ključ je ugrađen u URL, stoga tretirajte sam URL kao tajnu. Ne dijelite ga u javnim čavrljanjima, snimkama zaslona ili commitima. Ako se ključ otkrije, promijenite ga na [stranici API ključeva](https://fastcomments.com/auth/my-account/api-secret) i ponovno kopirajte isječak s stranice za postavljanje. Da biste odredili što agent može učiniti, generirajte posvećeni API ključ po asistentu i zaključajte ga na pravoj domeni. Padajući izbornik na stranici za postavljanje omogućuje vam da zamijenite koji ključ se koristi u isječcima jednim klikom.

### Zašto smo to izgradili

Ljudi sve više koriste agentske alate za svakodnevne zadatke u interakciji s SaaS proizvodima. Svatko tko povezuje sesiju Claudea ili Cursor-a za triage svoje moderacijske liste, ili prilagođenog agenta za isticanje tema koje vrijedi prikvačiti, sada može potpuno preskočiti sloj omotača.

### Na kraju

Otvorite [Integriraj, zatim MCP poslužitelj](https://fastcomments.com/auth/my-account/mcp-setup) na svojoj nadzornoj ploči, kopirajte isječak za vaš omiljeni MCP klijent i vi ste spremni. Puna dokumentacija je u [LLM Kit vodiču](https://docs.fastcomments.com/guide-llm-kit.html).

Kao i uvijek, javite nam u komentarima ako naiđete na bilo što.

Živjeli!

{{/isPost}}