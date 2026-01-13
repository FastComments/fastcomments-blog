---
[category:Features]

###### [postdate]

# [postlink]Aggiornamento dei Badge di Aprile[/postlink]

{{#unless isPost}}Sono state apportate alcune modifiche ai badge, sono state aggiunte alcune funzionalità e sono stati apportati miglioramenti per evitare che i badge scompaiano durante il riprocessamento.{{/unless}}

{{#isPost}}

### Novità - Sovrapposizione dei Badge

Prima di ieri, se avevi un insieme di badge nella tua comunità come i seguenti:

- Nuovo Commentatore (1 commento)
- Membro della Comunità (50 commenti)
- Esperto (500 commenti)

... e un utente termina con 500 commenti, avrà i badge visualizzati sui suoi commenti in questo modo:

    [Nuovo Commentatore] [Membro della Comunità] [Esperto]

In questo scenario particolare, probabilmente vogliamo che solo il badge `Esperto` venga mostrato. Bene, la maggior parte dei nostri clienti vuole questo, ma non tutti. Non tutti i nostri inquilini hanno la stessa configurazione e lo riconosciamo.

Tuttavia, per le comunità che seguono il modello sopra, che sono la maggior parte di esse, vogliono che i commenti mostrino il badge più prestigioso.

Per gestire questo caso d'uso abbiamo aggiunto il concetto di un badge **che sostituisce** un altro badge. In questo modo, possiamo creare un flusso di badge che un utente può guadagnare:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Sovrapposizione dei Badge" title="Sovrapposizione dei Badge" />
</div>

Internamente, chiamiamo questo *sovrapposizione dei badge*. Il nuovo badge "si sovrappone" a quello vecchio.

Possiamo configurarlo modificando un badge e dicendo che sostituisce un altro:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Configurazione della Sovrapposizione dei Badge" title="Configurazione della Sovrapposizione dei Badge" />
</div>

Ovviamente, questo può diventare difficile da tenere traccia, quindi anche l'elenco dei badge è stato aggiornato per fornire più informazioni, incluso quale badge sostituisce quale.

### Novità - Miglioramenti del Riprocessamento

Quando apporti una modifica a un badge, dobbiamo passare attraverso tutti i tuoi utenti e determinare se dovrebbero ancora "guadagnare" il badge,
e aggiornare tutti gli stili dei badge visualizzati e le cache in modo che l'ultima versione venga visualizzata.

Il riprocessamento non rimuove più un badge da un utente al salvataggio, anche se non soddisfa più i criteri **a meno che i criteri configurati non cambino**.

Nota per gli amministratori - puoi diminuire i criteri di soglia per un badge senza che il riprocessamento rimuova quel badge. Solo **aumentare** la soglia causerà il riprocessamento che potrebbe rimuovere il badge in alcuni casi.

Per saperne di più, continua a leggere in *La Prospettiva del Commentatore*.

### La Prospettiva del Commentatore

Il riprocessamento dei badge è molto rischioso poiché gli utenti amano i loro badge - e lo riconosciamo! Non vogliamo togliere il badge di un utente perché
hanno guadagnato il badge Reply a causa di 100 utenti che rispondono ai loro commenti, e poi 10 utenti successivamente eliminano i loro commenti o vengono rimossi dai moderatori.

Il badge dovrebbe rimanere, e rimane, tranne...

Durante il riprocessamento non sappiamo che quei commenti precedenti esistono, quindi il badge potrebbe essere rimosso da alcuni utenti se un badge viene modificato, come se lo stile
viene aggiornato, o se la sovrapposizione dei badge è impostata.

Questo è ciò che è successo il 17 aprile 2023 quando abbiamo lanciato *Sovrapposizione dei Badge* e alcune comunità hanno abilitato la funzione.

Sono stati osservati due scenari:

1. Gli utenti hanno scoperto che alcuni dei loro badge sembravano rimossi. Ciò che è realmente accaduto è che tutti tranne i badge più prestigiosi sono stati nascosti.
   - **Puoi visualizzare tutti i tuoi badge se vuoi.** Basta fare clic sul menu a tre punti in alto a destra del tuo profilo e fare clic su `Gestisci Badge`.
2. Alcuni badge sono stati effettivamente rimossi per alcuni utenti, come nel caso del badge Reply di cui sopra. Per prevenire che ciò accada in futuro, abbiamo
    migliorato il sistema di riprocessamento in modo che il badge non venga rimosso a meno che i criteri del badge non cambino e non soddisfi più i criteri, tuttavia
    sconsigliamo agli amministratori della comunità di farlo perché, ancora una volta, gli utenti amano i loro badge.

### Per i Moderatori

Non c'è alcun cambiamento dalla prospettiva di un moderatore, tranne il fatto che vedrai meno badge visualizzati nella maggior parte dei casi. Vedrai invece il badge più prestigioso di
tuo e dei membri della tua comunità visualizzati.

### Clienti Esistenti

Abbiamo completato il lancio di questa funzionalità a tutti i clienti esistenti su tutti i livelli! La sovrapposizione dei badge non è abilitata per impostazione predefinita e deve essere configurata manualmente.

### In Conclusione

Speriamo che tu trovi questo nuovo insieme di funzionalità e correzioni utile e facile da usare. 

Saluti!

{{/isPost}}