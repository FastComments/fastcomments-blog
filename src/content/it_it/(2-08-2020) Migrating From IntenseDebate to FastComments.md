---
[category:Migration]

###### [postdate]
# [postlink]Migrando Da IntenseDebate A FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per dimostrare come migrare completamente da IntenseDebate a FastComments.
{{/unless}}

{{#isPost}}
## Se Sei Su WordPress

FastComments ha un apposito plugin per WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Il plugin rende l'installazione, la configurazione e la sincronizzazione molto facili. Se scegli questa strada, puoi ignorare il resto delle istruzioni qui.

## Installazione Manuale e Generica

### Esporta I Tuoi Commenti Esistenti

Per esportare i dati dei Commenti e degli Utenti del tuo sito da IntenseDebate, dal loro pannello di amministrazione vai su Siti -> Il Tuo Sito -> Strumenti -> Esportazione XML.

Noterai che il file risultante che ricevi via email ha una misteriosa estensione di file "gz". Se sei un po' più esperto dal punto di vista tecnico, potresti sapere che questo sta per "gzip" ed è un modo popolare ed efficiente per comprimere file.

### Non aprire il file "gz"

Un'installazione predefinita di Windows 10 non sarà in grado di aprire il file di IntenseDebate. Va bene, perché non devi farlo con FastComments. Il nostro backend comprende questo file compresso.

Dopo di che, se sei loggato, puoi andare <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona IntenseDebate dal menu a discesa e carica il tuo file.

### Aspetta alcuni minuti

L'importazione di FastComments è "asincrona". Questo significa che l'upload del file e il suo processamento sono passaggi separati.

Quindi, a seconda della dimensione del tuo file, potresti ricevere il messaggio di successo subito. Nella pagina di importazione, in fondo, c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi tranquillamente aggiornare questa pagina per vedere lo stato della tua importazione e quante righe sono state importate finora.

### Quando è tutto finito

Riceverai un'email quando l'importazione è completata - sia che abbia avuto successo o meno. Puoi chiudere la pagina dopo che il caricamento del file ha avuto successo e vedi la tua importazione nella pagina Importazioni. Avrà uno stato come "Richiesta" e quando inizia, lo stato sarà "In esecuzione".

È sicuro rieseguire l'importazione tutte le volte necessarie - tuttavia, se la tua importazione fallisce, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> così possiamo aiutarti.

### Sostituisci Il Codice Di IntenseDebate Con Quello Di FastComments

È semplicemente una questione di rimuovere il piccolo frammento che IntenseDebate ti fornisce e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire IntenseDebate e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto e la sensazione. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Se stai usando i widget di IntenseDebate e vuoi sostituirli, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci qui</a>.

### Migrazione degli URL contemporaneamente

I commenti stessi sono legati ai campi "link" nell'esportazione di IntenseDebate, quindi finché i tuoi URL non cambiano, il passaggio è facile. Se desideri migrare gli URL e mantenere i tuoi
commenti, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">facci sapere</a> inviandoci gli URL vecchi e nuovi. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL, crea un foglio Excel.

### Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Sostituisci il frammento JavaScript di IntenseDebate con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a>

## Perché IntenseDebate Non Mi Invierà Il Mio File?
Per siti più grandi, IntenseDebate potrebbe non essere in grado di creare il file esportato a causa di limitazioni tecniche da parte loro. Abbiamo la capacità di estrarre i tuoi commenti dal sito esistente, tuttavia questo può essere
abbastanza personalizzato e, a causa del tempo richiesto, richiederà di avere il Pacchetto di Supporto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puoi richiedere aiuto con questo qui</a>.
{{/isPost}}

---