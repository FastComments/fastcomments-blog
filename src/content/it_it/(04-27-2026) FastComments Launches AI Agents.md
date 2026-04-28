---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Lancia Agenti AI[/postlink]

{{#unless isPost}}
Ora puoi creare Agenti AI che leggono ogni nuovo commento, rispondono con la tua voce, segnalano le decisioni difficili e assegnano badge ai tuoi migliori collaboratori. Funzionano secondo il tuo programma, all'interno del tuo budget, e fanno solo ciò che permetti loro.
{{/unless}}

{{#isPost}}

### Una Nota alla Comunità

Voglio chiarire subito una cosa - non stiamo costruendo qualcosa che consenta ai bot di fingere di essere utenti reali. Non credo che questo sia un bene per internet, per le comunità online o per la direzione del nostro prodotto. L'obiettivo degli Agenti AI è di potenziare i team di moderazione o i proprietari delle comunità che non possono permettersi moderatori dedicati.

Tutti i commenti lasciati dagli AI devono avere il tag "Bot". Questo è come il prodotto viene fornito, e qualsiasi sito che in qualche modo rimuove il tag Bot dai commenti dei bot avrà la funzionalità disabilitata. Inoltre, stiamo utilizzando solo fornitori di LLM che non addestrano sui nostri dati. Attualmente stiamo usando DeepInfra, che fornisce solo inferenza per modelli open source.

Ora che abbiamo risolto questo :)

### Cosa C'è di Nuovo

FastComments ora fornisce agenti automatizzati che possono svolgere compiti di moderazione, evidenziare commenti, riassumere thread di commenti e altro ancora.

Puoi trovarli sotto [Personalizza, poi Agenti AI](https://fastcomments.com/auth/my-account/ai-agents).

### Trigger e Strumenti

Ogni agente è configurato con un elenco di trigger e un elenco di azioni consentite. I trigger includono nuovi commenti, modifiche, cancellazioni, soglie di voto, soglie di segnalazione, azioni da moderatori, commentatori alle prime armi e altro. Se non desideri che un agente banna gli utenti, puoi escludere lo strumento di ban.

Ad esempio, se vuoi solo un "riassuntore di thread" che risponde solo dopo un certo numero di commenti e fissa quel commento, puoi configurare i permessi dell'agente in modo che abbia accesso solo a quelle azioni.

Puoi anche limitare un agente a specifici modelli di URL come `/news/*` o `/forums/*`, e a specifiche località, in modo tale che un agente di comunità francofona non inizi a rispondere nelle tue pagine in inglese.

### Esecuzione di Test, Approvazioni e Budget

Ogni agente si avvia in modalità di test per impostazione predefinita. In modalità di test, l'agente legge il contesto e scrive cosa farebbe, ma non compie realmente alcuna azione. Puoi osservare alcuni trigger reali, guardare le azioni proposte e il ragionamento dell'agente, e decidere se fidarti di lui prima di attivarlo.

Per strumenti sensibili, puoi richiedere un'approvazione umana. L'agente mette in coda l'azione, un amministratore esamina l'azione proposta insieme al ragionamento e alla fiducia dell'agente, e approva o rifiuta. I ban richiedono sempre approvazione nell'UE secondo l'Articolo 17 del DSA, ma puoi richiedere approvazione per qualsiasi strumento, ovunque.

Ogni agente ha un limite di budget giornaliero e mensile. Quando il limite viene raggiunto, l'agente smette di funzionare fino al termine del periodo. Ti inviamo un'email ai limiti predefiniti dell'80% e del 100% (puoi anche optare per un avviso del 50%) così non ci sono fatture a sorpresa.

### Memoria

Gli agenti hanno memoria che l'agente legge e scrive per conto proprio. Possono salvare brevi note su un utente o un modello, come "avvisato per argomento non pertinente tre volte" o "gruppo di spam che pubblica link al dominio X", e leggere quelle note al successivo trigger. La memoria è condivisa tra gli agenti nel tuo inquilino, quindi le note di un agente di benvenuto possono informare le decisioni di un agente di moderazione in seguito. La memoria associata a un utente viene pulita se cancella il proprio account.

### Riproduzione e Test di Esecuzione

Prima di rilasciare un agente sul traffico dal vivo, puoi eseguirlo contro i tuoi commenti storici. Lo strumento di riproduzione analizza i veri commenti passati in modalità di test, ti mostra cosa avrebbe fatto l'agente e classifica ogni azione proposta rispetto a ciò che è realmente accaduto. Questo è il modo più veloce per affinare un prompt di sistema senza attendere eventi dal vivo.

### Modelli, Privacy e Costi

Gli agenti funzionano su modelli open-weight ospitati da fornitori di infrastruttura che non addestrano sui dati dei clienti. Oggi puoi scegliere tra un modello più veloce (gpt-oss-120B-turbo) e uno più intelligente e lento (GLM 5.1), e continueremo ad aggiungere opzioni man mano che il panorama evolve. I costi sono misurati per token e convertiti in dollari nella tua pagina di utilizzo, insieme alle tendenze giornaliere e mensili.

Come parte di questo cambiamento, stiamo abbassando i nostri costi per token da $80 per 1M Token a $20 per 1M token di input/output combinati. La maggior parte dei nostri clienti spende molto poco per i token per la rilevazione dello spam, poiché il sistema originale di rilevazione spam basato su LLM inviava solo all'LLM se lo spam superava il classificatore naive-bayes, da qui il costo elevato inizialmente. Abbiamo abbassato il costo per incoraggiare l'uso della nuova funzionalità degli agenti.

A un certo punto, quando i costi della memoria scenderanno e i modelli come GLM 5.1 diventeranno più ragionevoli da eseguire su hardware auto-ospitato, passeremo all'utilizzo di un fornitore esterno e gestiremo noi stessi l'hardware.

### In Conclusione

Abbiamo riflettuto a lungo su come costruire questo senza farlo sembrare che l'agente fosse in controllo. La modalità di test, le approvazioni, gli strumenti limitati, i limiti di budget e la riproduzione rispetto alla cronologia esistono tutti per aiutarti a rimanere in controllo. Speriamo che gli Agenti AI liberino i tuoi moderatori per le conversazioni che necessitano realmente di un essere umano.

Ringraziamo i nostri clienti che ci danno un feedback continuo affinché possiamo pensare a idee come questa e anche darci il tempo di lanciarle bene. Come sempre, facci sapere qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---