[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Gli Utenti Bannati Sono Ora Ricercabili[/postlink]

{{#unless isPost}}
La pagina Utenti Bannati ora ha una riga di ricerca, così puoi trovare un ban per email, nome, chi lo ha emesso o il commento che lo ha causato.
{{/unless}}

{{#isPost}}

### Novità

La pagina Utenti Bannati sotto Modera Commenti ora ha una riga di ricerca sopra la tabella. Fino a ora l’unico modo per navigare quell’elenco era tramite i controlli Pagina e Conteggio Per Pagina, il che va bene quando hai una dozzina di ban ma è doloroso quando ne hai diverse migliaia.

Ci sono tre controlli: **Cerca Per** sceglie il campo, **Corrispondenza** sceglie Contiene o Uguale, e **Valore** è ciò che stai cercando.

### Cosa Puoi Cercare

**Cerca Per** offre cinque opzioni:

- **Qualsiasi Campo** - ricerca tutto quanto sotto in una volta
- **Email** - l’indirizzo bannato
- **Nome** - il nome registrato sul ban
- **Bannato Da** - il moderatore che ha emesso il ban
- **Bannato Per Aver Detto** - il testo del commento che ha portato al ban dell’utente

Le ultime quattro corrispondono alle colonne con lo stesso nome nella tabella, così il menu a discesa legge lo stesso della cosa che filtra.

### Contiene vs Uguale

**Contiene** trova il tuo valore ovunque nel campo. **Uguale** corrisponde all’intero campo.

Contiene è quello che vuoi nella maggior parte dei casi. Cercare `bademail.com` trova ogni ban su quel dominio, incluso il ban wildcard `*@bademail.com`, perché i ban wildcard sono memorizzati con l’asterisco intatto.

Uguale è per quando hai il valore esatto e non vuoi corrispondenze approssimative. Cercare Email per `spammer@example.com` con Uguale restituisce quel singolo ban e nient’altro.

Entrambi sono case‑insensitive su ogni campo. Questo è più importante di quanto sembri: quando un ban è creato da un commento, solo la metà dominio dell’indirizzo viene convertita in minuscolo, così un ban può essere realmente memorizzato come `MixedCase@Example.com`. Cercare `mixedcase@example.com` lo trova.

### Due Ricerche da Conoscere

**Bannato Per Aver Detto** ricerca il testo del commento che ha attivato il ban. Se una frase o un link particolare sta circolando, puoi recuperare tutti gli utenti bannati per quello in un’unica query.

**Bannato Da** ricerca il moderatore che ha emesso il ban. Se vuoi rivedere le decisioni di un moderatore specifico, o stai formando qualcuno e vuoi vedere cosa ha fatto, è una ricerca di distanza.

### Funziona con Paginazione e Condivisione

La ricerca vive nell’URL della pagina, così scorrere i risultati mantiene la ricerca applicata e puoi inviare un elenco filtrato a un altro moderatore copiando l’URL, nello stesso modo in cui condividi già i link di moderazione. Iniziare una nuova ricerca ti riporta alla prima pagina, e **Cancella** ti riporta all’elenco completo.

### La Ricerca per Nome Corrisponde a Ciò che Vedi

Un ban memorizza il nome che l’utente aveva quando lo hai bannato, ma la tabella mostra il nome che ha ora. Non sono sempre gli stessi, e un ban creato inserendo un indirizzo email non ha alcun nome memorizzato.

Quindi la ricerca per Nome risolve l’utente dietro ogni ban e corrisponde al nome che la tabella sta effettivamente mostrando. Se qualcuno è stato bannato come "OldHandle" e da allora ha cambiato nome in "NewHandle", entrambi lo trovano. Se hai bannato un indirizzo e la tabella mostra un nome per esso, cercare quel nome funziona.

### Documentazione

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">La sezione Banning Users della Guida alla Moderazione</a> copre la riga di ricerca in dettaglio.

### In Conclusione

Questo è nato dall’osservare come la pagina viene effettivamente usata. I ban si accumulano silenziosamente per anni, e poi un giorno devi trovare uno specifico e non c’è modo di farlo. Ora c’è.

Facci sapere qui sotto se c’è un campo che vorresti poter cercare e che non è nella lista.

Cheers!

{{/isPost}}