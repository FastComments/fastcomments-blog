---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]La Pagina di Moderazione È Ora Attiva[/postlink]

{{#unless isPost}}
La pagina di moderazione di FastComments ora mostra una notifica in tempo reale quando arrivano nuovi commenti che corrispondono ai tuoi filtri attuali.
{{/unless}}

{{#isPost}}

### Novità

La pagina di moderazione è sempre stata uno strumento potente per gestire i commenti. Potresti filtrare per stato, cercare per testo, filtrare per pagina
o utente, e svolgere azioni di massa. Ma per vedere nuovi commenti dovevi aggiornare la pagina.

Non più! La pagina di moderazione ora mostra quando arrivano nuovi commenti che corrispondono ai tuoi filtri attuali. Un banner appare in cima alla lista dei commenti indicando quanti nuovi commenti stanno aspettando, e cliccando su di esso si caricano inline senza un aggiornamento completo della pagina.

Il messaggio "nuovi commenti per i tuoi filtri" dovrebbe essere quasi istantaneo nella maggior parte delle circostanze.

### Valutazione dei Filtri

Il layer di trasporto valuta tutti i filtri di moderazione lato server. Questo include filtri di stato (necessita revisione, necessita approvazione, spam, segnalati,
banditi), filtri di stringa (ID utente, URL pagina, dominio), e anche ricerca testuale. Il testo quotato come `"frase esatta"` fa un
corrispondenza esatta insensibile al maiuscolo/minuscolo, mentre i termini non quotati fanno una corrispondenza fuzzy insensibile al maiuscolo/minuscolo.

Questo significa che se stai filtrando per commenti spam, non riceverai notifiche sui commenti approvati. Se stai cercando commenti
che contengono una frase specifica, solo i commenti corrispondenti attivano il banner.

### Gruppi di Moderazione

Se il tuo account utilizza gruppi di moderazione per limitare quali moderatori possono vedere quali commenti, queste restrizioni sono pienamente applicate
per le notifiche in tempo reale. Il layer di trasporto richiama il server dell'applicazione per costruire il filtro, che include restrizioni di gruppo
basate sui gruppi assegnati al moderatore. Questo filtro è memorizzato nella cache per la durata della connessione WebSocket e aggiornato ogni volta
che il moderatore cambia i filtri.

### Eventi Mancati

Se la connessione di un moderatore cade temporaneamente (problemi di rete, sonno del laptop, ecc.), il sistema recupera automaticamente la connessione per non
perdere alcun lavoro.

### Prestazioni

Abbiamo progettato questa funzionalità per avere un impatto minimo sul tempo di caricamento della pagina di moderazione.

### Multi-Regione

Questa funzionalità funziona senza problemi con la nostra architettura distribuita a livello globale, quindi i team di moderazione distribuiti
globalmente ottengono la stessa visualizzazione in tempo reale.

### In Conclusione

Speriamo che questa funzionalità faccia risparmiare tempo ai moderatori e renda l'esperienza di moderazione più reattiva. Come sempre, ringraziamo i nostri clienti per
il loro feedback e supporto.

Saluti!

{{/isPost}}