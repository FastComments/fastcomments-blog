---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migrazione di FastComments a TypeScript Completata[/postlink]

{{#unless isPost}}
In preparazione per il prossimo decennio di sviluppo, abbiamo migrato uno dei più grandi componenti di FastComments a TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Jargon Tecnico

### Novità

In FastComments valorizziamo i linguaggi tipizzati staticamente. Più specificamente, mi piacciono i buoni sistemi di tipo con compilatori veloci. FastComments ha iniziato con quest'ultimo - o nessun compilatore. Anche se avevamo due servizi scritti in Java moderno nel primo anno, le principali librerie backend e frontend erano scritte in CJS JS in esecuzione su Node.

In preparazione per il prossimo decennio di sviluppo, abbiamo migrato i componenti più grandi di FastComments a TypeScript.

Questo ha comportato la migrazione di oltre 130k righe di codice (100k di esse sono backend) attraverso 1441 file, e la risoluzione di oltre 8000 errori di compilazione.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Screenshot di GitHub" title="Screenshot di GitHub" />
</div>

Questo è stato fatto in due settimane.

### Congelamento del Codice - Grazie

Vorrei ringraziare i nostri clienti per aver affrontato eventuali ritardi nella correzione di bug o nel rilascio di funzionalità mentre abbiamo fatto un congelamento del codice di due settimane per completare questo aggiornamento. Grazie!

### Bug Risolti

Come puoi immaginare, abbiamo risolto un certo numero di bug. Questi riguardavano principalmente il rilevamento di spam e la cache. 

### Modifiche Incompatibili

- Tutti gli endpoint API ora restituiscono status: 'failed' invece di un mix di "failed" e "failure" come valori di stato. "success" rimane invariato.
- Non opteremo più per la prima configurazione del widget se non c'è corrispondenza, invece restituiremo la configurazione di sistema predefinita.

### Com'è Stato?

Abbiamo scoperto che, come al solito, molti degli strumenti nell'ecosistema NPM per aiutare con questo compito non funzionavano molto bene. Così, abbiamo utilizzato LLM per generare
script per fare gran parte del lavoro. Ad esempio, abbiamo fatto ampio uso di JSDoc, in modo da poter scrivere script per prendere il JSDoc e convertirlo in interfacce di TypeScript
e definizioni di tipo, e annotare correttamente gli argomenti delle funzioni e i tipi di ritorno. Abbiamo anche utilizzato questi script per migrare da CJS a ESM, il che ha incluso la riscrittura
di importazioni, esportazioni e la rilevazione di comuni problemi di runtime come `__dirname`.

Ho menzionato i problemi di runtime?

### Com'è TypeScript nel 2025?

TypeScript è un bel linguaggio per scrivere logica di business. Ma, Java ha ancora una migliore esperienza per gli sviluppatori. Se Java, Go o Rust compilano, probabilmente funzioneranno. Con TypeScript,
posso fare qualcosa del tipo:

    console.log(__dirname);

... e questo compilerà.

Ma non funzionerà, con i moderni moduli es. Il tuo IDE completerà felicemente anche `__dirname`, e poi si fermerà a runtime. Sembra Spring DI, ma peggio.

Puoi anche fare cose del tipo:

    context.someImportantMethodToCall;

Ora, questa è una "dichiarazione". È una "dichiarazione" valida. A prima vista potresti pensare che stiamo chiamando `someImportantMethodToCall`, ma non lo stiamo facendo! Il mio IDE, almeno, non
avverte di questo, né lo fa il compilatore. Il codice semplicemente non farà nulla (a meno che `someImportantMethodToCall` non sia un `getter` di classe, nel qual caso verrà implicitamente chiamato...)

La soluzione è:

    context.someImportantMethodToCall();

Penso che probabilmente puoi rilevare questo con qualcosa come eslint e qualche regola "no side-effects", ma poi dovresti integrare un altro grande insieme di librerie da tenere
aggiornate, e poi eslint deve analizzare l'intero codice sorgente ad ogni build, gli strumenti sono lenti, e così via - no grazie. L'impatto sulla produttività di dover affrontare strumenti lenti come eslint è stato
più significativo nella mia carriera nei lavori precedenti rispetto al "potenziamento" di produttività che ho mai ricevuto dalle piccole cose che eslint corregge/previene con spaziature ecc. Ci sono alternative più veloci
che stanno uscendo ora, il che è fantastico.

TypeScript è davvero bello grazie a caratteristiche del linguaggio come `Pick<User, 'username', 'email'>`. Questo, combinato con l'inferenza dei tipi, offre un modo per avere risultati di query sicuri per il tipo dal database per sottogruppi
di oggetti più grandi senza dover definire una classe per ogni forma. `Pick` è qualcosa di cui sono sorpreso che Scala non disponga. Anche le Unioni di Tipo sono davvero interessanti.

Le build incrementali funzionano anche ragionevolmente bene, abbiamo solo aumentato i nostri tempi di build in CI di circa 5 - 10 secondi in media, per costruire la libreria condivisa, il frontend e il backend.

### Cronologia dello Sviluppo

Per chi è curioso, ecco come è stata la nostra progressione:

- Giorno Uno: Trovati 5564 errori in 362 file.
- Giorno Due: Trovati 4034 errori in 239 file.
- Giorno Tre: Trovati 3784 errori in 191 file.
- Giorno Quattro: Trovati 2974 errori in 169 file.
- Giorno Cinque: Trovati 3000 errori in 171 file.
- Giorno Sei: Trovati 2916 errori in 165 file.
- Giorno Sette: Trovati 2618 errori in 157 file.
- Giorno Otto: Trovati 2253 errori in 109 file.
- Giorno Nove: Trovati 1605 errori in 69 file.
- Giorno Dieci: Trovati 686 errori in 53 file.
- Giorno 11: I test unitari del Backend sono passati
- Giorno 12: Inizio a migrare il frontend, 3118 errori.
- Giorno 13: Trovati 2172 errori.
- Giorno 14: Trovati 1224 errori.
- Giorno 15: Trovati 498 errori.
- Giorno 16: Tutti gli errori di compilazione risolti.
- Giorno 17: Rilasciato. I test E2E passano. 30 minuti di inattività durante problemi di runtime imprevisti. :)

### Il Futuro

Abbiamo fatto questo per supportare lo sviluppo per il prossimo decennio. Il sistema è ora abbastanza grande da rendere più veloce sviluppare con un sistema di tipi piuttosto che senza.

Puoi anche aspettarti che la nostra libreria TypeScript su NPM migliori, poiché ha già iniziato a farlo, dato che ora stiamo utilizzando quella libreria nel nostro codice server e client.

Presto rilasceremo anche SDK client generati direttamente dal codice del server, che è stata una delle principali motivazioni dietro questo sforzo.

### In Conclusione

Come per tutti i principali rilasci, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente queste modifiche. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---