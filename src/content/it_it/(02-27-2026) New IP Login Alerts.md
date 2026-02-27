---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nuove notifiche di accesso da IP[/postlink]

{{#unless isPost}}
FastComments ora invia un'email di avviso di sicurezza quando viene rilevato un accesso da un nuovo indirizzo IP, inclusa la posizione approssimativa, per aiutare gli utenti a rilevare accessi non autorizzati.
{{/unless}}

{{#isPost}}

### Novità

FastComments ora invia automaticamente un'email di avviso di sicurezza quando rileviamo un accesso al tuo account da un indirizzo IP che non abbiamo mai visto prima. L'email include:

- La **posizione approssimativa** (città e nazione) dell'accesso.
- L'**indirizzo IP** utilizzato.
- Il **tempo** dell'accesso.
- Un link diretto per **cambiare la tua password** se l'accesso non sei tu.

Questo si applica a tutti i metodi di accesso: accesso basato su password, link magici e flussi di autenticazione a due fattori.

### Privacy

Non memorizziamo il tuo indirizzo IP grezzo. Conserviamo solo una forma offuscata per fini di confronto di sicurezza. La posizione approssimativa è
determinata al momento dell'accesso e non viene memorizzata.

**Il tuo IP non viene condiviso con un terzo** per determinare la posizione. Ospitiamo il nostro servizio che estrae la posizione approssimativa
da una copia del database MaxMind (aggiornata settimanalmente).

### Quando vengono inviati gli avvisi

Un avviso viene inviato quando **tutte** le seguenti condizioni sono vere:

- L'accesso è stato effettuato con successo.
- Non è il primo accesso dell'utente.
- L'indirizzo IP non è stato visto in un precedente accesso riuscito per quell'account.

Questo significa che non riceverai un avviso al tuo primo accesso e non riceverai avvisi ripetuti per lo stesso IP.

### In conclusione

Questo è un ulteriore passo per mantenere il tuo account al sicuro. Se ricevi un avviso che non riconosci, ti consigliamo di cambiare
immediatamente la tua password.

Facci sapere qui sotto se hai dei suggerimenti!

Saluti!

{{/isPost}}

---