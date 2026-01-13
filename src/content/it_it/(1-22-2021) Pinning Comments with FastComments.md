---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Fissare i Commenti con FastComments[/postlink]

{{#unless isPost}}
I commenti di primo livello possono ora essere fissati nei thread dei commenti!
{{/unless}}

{{#isPost}}

#### Introduzione

I commenti possono ora essere "fissati" in cima ai thread dei commenti, indipendentemente dall'ordine di classificazione.

Questo può essere fatto attraverso il menu a tre punti in alto a destra di un commento, se sei connesso come amministratore o moderatore.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Un Commento Fissato" title="Un Commento Fissato" />
</div>

I nuovi commenti appariranno sotto ai commenti fissati.

Non c'è limite al numero di commenti fissati in un thread di commento.

#### Voti e Età del Commento

Indipendentemente dal numero di voti o dall'età di altri commenti, i commenti fissati mostrano sempre in cima.

#### Chi Può Fissare e Sfumare i Commenti

Gli amministratori e i moderatori sono gli unici utenti che possono fissare e sfumare i commenti.

#### Commenti in Tempo Reale

Quando un commento viene fissato o sfumato, quell'aggiornamento viene inviato a tutti i visualizzatori del thread di commento.

Quando cambia lo stato di fissaggio di un commento, il commento viene immediatamente spostato per la persona che fissa il commento e per chiunque stia visualizzando il thread di commento. Se un utente si disconnette, seguito da un commento che viene fissato, il commento verrà fissato e spostato per quell'utente al momento della riconnessione.

#### Prestazioni

L'ordine di classificazione del thread di commento viene precalcolato ad ogni modifica. Questo significa che il caricamento aggiuntivo richiesto per fissare i commenti in cima non influenzerà i tempi di caricamento della pagina.

#### In Conclusione

Speriamo che tu abbia trovato questa guida utile e facile da leggere. Sentiti libero di commentare qui sotto con eventuali domande.

Saluti!

{{/isPost}}

---