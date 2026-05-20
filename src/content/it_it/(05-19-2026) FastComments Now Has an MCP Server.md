---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Ora Ha un Server MCP[/postlink]

{{#unless isPost}}
Ora puoi collegare Claude Code, Claude Desktop, Cursor, o qualsiasi altro client del Model Context Protocol a FastComments e fare chiamate direttamente alla nostra API.
{{/unless}}

{{#isPost}}

### Novità

FastComments ora offre un server [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) ospitato. MCP è lo standard aperto che gli assistenti AI utilizzano per invocare strumenti lato server. Punta il tuo client a un URL e può elencare i tuoi commenti, moderarli, gestire gli utenti SSO, configurare i widget e qualsiasi altra cosa faccia l'[API](https://docs.fastcomments.com/guide-api.html).

### Dove Si Trova

Dal tuo cruscotto FastComments, apri **Integra, poi Server MCP**, oppure visitalo direttamente su
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Scegli quale chiave API vuoi che il client utilizzi e la pagina genera un URL precompilato più frammenti copiali e incollabili per Claude Code e i file di configurazione di Claude Desktop / Cursor.

### Claude Code

Un comando per registrare:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Poi `/mcp` all'interno di una sessione mostra la connessione e elenca ogni strumento esposto dal server. Puoi chiedere cose come "mostrami gli ultimi 20 commenti segnalati su /blog/launch", "blocca questo commentatore su tutti i miei siti", o "qual è il nostro tasso di cattura dello spam nell'ultima settimana". Claude instrada attraverso la chiamata dello strumento giusto.

### Claude Desktop e Cursor

Aggiungi questo blocco alla configurazione MCP del tuo client (`claude_desktop_config.json` per Claude Desktop, `mcp.json` per Cursor):

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

Riavvia il client e il server apparirà accanto a qualsiasi altro server MCP che hai configurato.

### Sicurezza

La chiave API è incorporata nell'URL, quindi tratta l'URL stesso come un segreto. Non incollarlo in chat pubbliche, screenshot o commit. Se una chiave viene esposta, ruotala dalla [API Keys page](https://fastcomments.com/auth/my-account/api-secret) e ricopia il frammento dalla pagina di configurazione. Per limitare ciò che un agente può fare, genera una chiave API dedicata per ogni assistente e bloccala al dominio corretto. Il menu a discesa sulla pagina di configurazione ti consente di cambiare quale chiave utilizzano i frammenti con un clic.

### Perché L'Abbiamo Costruita

Le persone utilizzano sempre di più strumenti agentici per compiti quotidiani interagendo con i prodotti SaaS. Chiunque colleghi una sessione di Claude o Cursor per gestire la propria coda di moderazione, o un agente personalizzato per mettere in evidenza le discussioni da fissare, può ora saltare completamente il layer di wrapper.

### In Conclusione

Apri [Integra, poi Server MCP](https://fastcomments.com/auth/my-account/mcp-setup) nel tuo cruscotto, copia il frammento per il tuo client MCP preferito, e sei online. La documentazione completa è nella [LLM Kit guide](https://docs.fastcomments.com/guide-llm-kit.html).

Come sempre, facci sapere qui sotto se incontri problemi.

Saluti!

{{/isPost}}