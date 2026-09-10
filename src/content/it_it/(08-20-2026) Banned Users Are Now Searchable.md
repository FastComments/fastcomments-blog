[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Gli Utenti Bannati Ora Sono Ricercabili[/postlink]

{{#unless isPost}}
La pagina Utenti Bannati ora ha una riga di ricerca, così puoi trovare un ban per email, nome, chi lo ha emesso o il commento che lo ha causato.
{{/unless}}

{{#isPost}}

### Novità

La pagina Utenti Bannati sotto Moderare Commenti ora ha una riga di ricerca sopra la tabella. Fino a ora l'unico modo per navigare quell'elenco era tramite i controlli Pagina e Conteggio per Pagina, il che va bene quando hai una dozzina di ban e diventa doloroso quando ne hai qualche migliaio.

Ci sono tre controlli: **Search By** sceglie il campo, **Match** sceglie Contains o Equals, e **Value** è ciò che stai cercando.

### Cosa Puoi Cercare

**Search By** offre cinque opzioni:

- **Any Field** - ricerca tutto quanto sotto in una volta
- **Email** - l'indirizzo bannato
- **Name** - il nome del commentatore
- **Banned By** - il moderatore che ha emesso il ban
- **Banned For Saying** - il testo del commento che ha portato al ban dell'utente

Gli ultimi quattro corrispondono alle colonne con lo stesso nome nella tabella, così il menu a discesa legge lo stesso nome della cosa che filtra.

### Contains vs Equals

**Contains** trova il valore ovunque nel campo. **Equals** corrisponde all'intero campo.

Contains è quello che vuoi nella maggior parte dei casi. Cercare `bademail.com` trova tutti i ban su quel dominio, incluso il ban wildcard `*@bademail.com`, perché i ban wildcard sono memorizzati con l'asterisco intatto.

Equals è per quando hai il valore esatto e non vuoi corrispondenze approssimative. Cercare Email per `spammer@example.com` con Equals restituisce quel singolo ban e nient'altro.

Entrambi sono case-insensitive su ogni campo. Questo è più importante di quanto sembri: quando un ban è creato da un commento, solo la metà del dominio dell'indirizzo viene convertita in minuscolo, così un ban può effettivamente essere memorizzato come `MixedCase@Example.com`. Cercare `mixedcase@example.com` lo trova.

### Due Ricerche da Conoscere

**Banned For Saying** ricerca il testo del commento che ha attivato il ban. Se una frase o un link particolare è stato diffuso, puoi recuperare tutti gli utenti bannati per quello in un'unica query.

**Banned By** ricerca il moderatore che ha emesso il ban. Se vuoi rivedere le decisioni di un moderatore specifico, o stai facendo l'onboarding di qualcuno e vuoi vedere cosa ha fatto, è a una ricerca di distanza.

### Funziona con Paginazione e Condivisione

La ricerca è presente nell'URL della pagina, così la paginazione dei risultati mantiene il filtro applicato e puoi inviare un elenco filtrato a un altro moderatore copiando l'URL, nello stesso modo in cui condividi già i link di moderazione. Iniziare una nuova ricerca ti riporta alla prima pagina, e **Clear** ti riporta all'elenco completo.

### Documentazione

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">La sezione Banning Users della Guida di Moderazione</a> copre la riga di ricerca in dettaglio.

### In Conclusione

Questo è nato osservando come la pagina viene effettivamente usata. I ban si accumulano silenziosamente per anni, e poi un giorno hai bisogno di trovare uno specifico e non c'è modo di farlo. Ora c'è.

Facci sapere qui sotto se c'è un campo che vorresti poter cercare e che non è nella lista.

Saluti!

{{/isPost}}

---