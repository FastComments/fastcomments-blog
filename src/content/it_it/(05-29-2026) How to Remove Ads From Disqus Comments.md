---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Come rimuovere gli annunci dai commenti di Disqus[/postlink]

{{#unless isPost}}
Nel piano gratuito di Disqus, la tua sezione commenti include annunci. Ci sono due modi per sbarazzartene. Quello migliore fa anche in modo che i tuoi commenti si carichino più velocemente e impedisce il tracciamento dei tuoi lettori.
{{/unless}}

{{#isPost}}

Disqus paga il suo piano gratuito mettendo annunci nella tua sezione commenti, proprio sotto il tuo contenuto, nello stesso posto in cui i tuoi lettori si recano per parlare con te. Quegli annunci non sono tuoi. Non li scegli e non guadagni un centesimo da essi. Questa è la contropartita per il livello gratuito.

Ci sono due modi reali per rimuoverli.

## Opzione 1: Aggiorna il tuo piano Disqus

La strada più semplice è pagare Disqus. I loro piani a pagamento disattivano gli annunci. Puoi trovare le opzioni attuali sulla <a href="https://disqus.com/pricing/" target="_blank">pagina dei prezzi di Disqus</a>.

Funziona, ma vale la pena essere chiari su cosa stai acquistando. Stai pagando per annullare uno svantaggio. Gli annunci scompaiono, e il resto di Disqus rimane lo stesso: l'area commenti continua a caricare un pacchetto pesante di script di terze parti e i tuoi lettori vengono ancora tracciati sui siti che lo incorporano. Stai pagando per rimuovere gli annunci, non per rendere la sezione commenti più leggera o più privata.

## Opzione 2: Passa a una piattaforma che non mostra mai annunci

L'altro modo per rimuovere gli annunci è utilizzare una piattaforma di commento che non li esegue in primo luogo. :)

Per soli $0.99/mese, FastComments fornisce funzionalità ottimizzate per le prestazioni senza tracciamento o annunci.

## Conservi ogni commento

La parte di cui le persone si preoccupano di più è la perdita della loro discussione esistente. FastComments ha un importatore Disqus integrato che porta i tuoi commenti, nomi utenti, avatar utenti, immagini inline, voti e timestamp. Spostiamo anche tutte le immagini nel nostro CDN per te.

Se desideri una guida dettagliata, abbiamo una guida dedicata: [Migrating From Disqus To FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). La versione breve è qui sotto.

## Come passare in tre passaggi

### 1. Esporta i tuoi commenti da Disqus

Segui <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">i passaggi di esportazione di Disqus</a>. Ti invieranno via email un file con estensione "gz". Non è necessario aprirlo o decomprimerlo, e un'installazione predefinita di Windows non può farlo comunque. Il nostro backend legge quel file compresso direttamente.

### 2. Importa il file in FastComments

Una volta effettuato l'accesso, vai alla <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">pagina di importazione</a>, seleziona Disqus dal menu a discesa e carica il file così com'è. L'importazione viene eseguita in background; la pagina si aggiornerà automaticamente mentre viene eseguita per mostrarti un conteggio in tempo reale del numero di commenti scoperti e importati. È sicuro ri-importare quante volte hai bisogno.

### 3. Sostituisci il codice Disqus con il nostro

Rimuovi il codice di incorporamento di Disqus dalle tue pagine e inserisci al suo posto <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">il codice di FastComments</a>. Finché gli URL delle tue pagine rimangono gli stessi, i tuoi commenti importati si allineano esattamente dove erano.

## Su WordPress?

Se il tuo sito funziona su WordPress, salta i passaggi manuali e installa il <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin FastComments per WordPress</a>. Si occupa di installazione, configurazione e sincronizzazione per te, e poi puoi disattivare Disqus.

## Provalo prima di impegnarti

Non devi attivare tutto in una volta. Puoi eseguire Disqus e FastComments sulla stessa pagina temporaneamente per confrontare aspetto e funzionalità prima di passare completamente. Se hai bisogno di aiuto con tutto ciò, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> e ti aiuteremo.

Non sei sicuro di cosa ti costerà FastComments? Ogni piano è privo di annunci e puoi controllare il tuo numero sul <a href="https://fastcomments.com/pricing-calculator" target="_blank">calcolatore dei prezzi</a>. Se sei nell'UE, puoi creare il tuo account su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> così i tuoi dati rimangono nell'UE.

## Riepilogo

1. Esporta i tuoi dati da Disqus
2. Importali in FastComments
3. Sostituisci il codice Disqus con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a>

Questo è tutto. Nessun annuncio nella tua sezione commenti, pagine più leggere, e ogni commento che avevi già.

Cheers!

{{/isPost}}

---