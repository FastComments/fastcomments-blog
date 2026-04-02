---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]La pagina di moderazione è ora attiva[/postlink]

{{#unless isPost}}
La pagina di moderazione di FastComments ora mostra una notifica in tempo reale quando arrivano nuovi commenti che corrispondono ai tuoi filtri attuali.
{{/unless}}

{{#isPost}}

### Novità

La pagina di moderazione è sempre stata uno strumento potente per gestire i commenti. Puoi filtrare per stato, cercare per testo, filtrare per pagina 
o utente, e eseguire azioni di massa. Ma per vedere i nuovi commenti dovevi aggiornare la pagina.

Non più! La pagina di moderazione ora mostra quando arrivano nuovi commenti che corrispondono ai tuoi filtri attuali. Un banner appare in cima all'elenco dei commenti informandoti su quanti nuovi commenti stanno aspettando, e cliccando su di esso vengono caricati inline senza un aggiornamento completo della pagina.

Il messaggio "nuovi commenti per i tuoi filtri" dovrebbe essere quasi istantaneo nella maggior parte delle circostanze.

### Valutazione dei filtri

Il livello di trasporto valuta tutti i filtri di moderazione lato server. Questo include filtri di stato (da rivedere, da approvare, spam, segnalati, 
banditi), filtri di stringa (ID utente, URL pagina, dominio) e persino ricerca testuale. Il testo quotato come <div class="code">"frase esatta"</div> esegue un 
corrispondenza esatta senza distinzione tra maiuscole e minuscole, mentre i termini non quotati eseguono corrispondenza fuzzy senza distinzione tra maiuscole e minuscole.

Questo significa che se stai filtrando i commenti spam, non verranno notificati i commenti approvati. Se stai cercando commenti 
contenenti una frase specifica, solo i commenti corrispondenti attivano il banner.

### Gruppi di moderazione

Se il tuo account utilizza gruppi di moderazione per limitare quali moderatori possono vedere quali commenti, queste restrizioni sono completamente applicate 
per le notifiche in tempo reale. Il livello di trasporto chiama il server dell'applicazione per costruire il filtro, che include restrizioni di gruppo 
basate sui gruppi assegnati al moderatore. Questo filtro è memorizzato nella cache per la durata della connessione WebSocket e aggiornato ogni volta 
che il moderatore cambia i filtri.

### Eventi mancati

Se la connessione di un moderatore si interrompe temporaneamente (problemi di rete, sonno del laptop, ecc.), il sistema si recupera automaticamente al riconnessioni in modo 
che tu non perda alcun lavoro.

### Performance

Abbiamo progettato questa funzionalità per avere un impatto minimo sul tempo di caricamento della pagina di moderazione.

### Multi-Regione

Questa funzionalità funziona senza interruzioni con la nostra architettura distribuita globalmente, quindi i team di moderazione distribuiti a livello globale 
ottengono la stessa vista in tempo reale.

### In conclusione

Speriamo che questa funzionalità faccia risparmiare tempo ai moderatori e renda l'esperienza di moderazione più reattiva. Come sempre, ringraziamo i nostri clienti per 
i loro feedback e supporto.

Saluti!

{{/isPost}}