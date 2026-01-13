---
[category:Migration]
###### [postdate]
# [postlink]Migrazione da Muut Comments a FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per vedere come migrare completamente da Muut a FastComments.

È semplicemente una questione di rimuovere il piccolo frammento che Muut ti fornisce e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire Muut e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto e la sensazione. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.
{{/unless}}

{{#isPost}}
### Esporta i tuoi commenti esistenti

L'importatore di FastComments migrerà i tuoi commenti, nomi utente, avatar utenti e immagini in linea. Sposteremo le immagini sui nostri server senza problemi.

Per esportare i dati dei Commenti e degli Utenti del tuo sito da Muut, dal loro cruscotto Admin vai su Integrazioni e poi Esportazione JSON.

Noterai che il file risultante che ricevi via email ha un misterioso suffisso di file "gz". Se sei un po' più esperto dal punto di vista tecnico, potresti sapere che questo sta per "gzip" ed è un modo popolare ed efficiente per comprimere file. 

### Non aprire il file "gz"

Una installazione predefinita di Windows 10 non sarà in grado di aprire il file da Muut. Va bene, perché non devi farlo con FastComments. Il nostro backend comprende questo file compresso.

Dopo, se sei connesso, puoi andare <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona Muut dal menu a discesa e carica il tuo file.

Dovrai inserire l'URL del tuo sito web. Questo perché Muut non ci fornisce queste informazioni nell'esportazione.

### Attendi alcuni minuti

L'importazione di FastComments è "asincrona". Questo significa che il caricamento del file e il suo trattamento sono passaggi separati.

Quindi, a seconda della dimensione del tuo file, potresti ricevere il messaggio di successo subito. Nella pagina di importazione, in fondo c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi aggiornare in tutta sicurezza questa pagina per vedere lo stato della tua importazione e quante righe sono state importate fino a quel momento.

### Quando è finita

Riceverai un'email quando l'importazione sarà completata - che abbia successo o meno. Puoi chiudere la pagina dopo che il caricamento del file è riuscito e vedi la tua importazione nella pagina Importazioni. Avrà uno stato come "Richiesto" e quando inizia, lo stato sarà "In esecuzione".

È sicuro ripetere l'importazione quante volte è necessario - tuttavia, se la tua importazione fallisce, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> così possiamo aiutarti.

### Sostituisci il codice Muut con FastComments

È semplicemente una questione di rimuovere il piccolo frammento che Muut ti fornisce e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire Muut e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto e la sensazione. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

### Migrazione degli URL allo stesso tempo

I commenti stessi sono legati ai campi "link" nell'esportazione di Muut, quindi finché i tuoi URL non cambiano, il passaggio è facile. Se desideri migrare gli URL e mantenere i tuoi
commenti, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faccelo sapere</a> inviandoci gli URL vecchi e nuovi. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL, crea un foglio Excel.

### Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Sostituisci il frammento JavaScript di Muut con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a>

## Perché Muut non mi invierà il mio file?
Per i siti più grandi, Muut potrebbe non essere in grado di creare il file esportato a causa di limitazioni tecniche da parte loro. Abbiamo la possibilità di estrarre il tuo sito esistente e prelevare i commenti, tuttavia questo può essere
abbastanza personalizzato e a causa del tempo coinvolto richiederà di avere il Pacchetto di Supporto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puoi richiedere aiuto con questo qui</a>.
{{/isPost}}

---