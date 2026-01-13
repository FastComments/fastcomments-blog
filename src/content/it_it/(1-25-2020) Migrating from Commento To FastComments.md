---
[category:Migration]
###### [postdate]
# [postlink]Migrazione da Commento a FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per vedere come migrare completamente da Commento a FastComments.

## Problemi

Commento non ci fornisce URL completi. Ciò che forniscono è solo il nome di dominio a cui appartiene un thread di commento - come "fastcomments.com/some-page".
Questo significa che l'importatore di FastComments deve assumere quale sia il protocollo, e per impostazione predefinita si basa su https. Se esegui l'importazione e non vedi i tuoi dati,
potresti voler controllare che il tuo sito sia adeguatamente protetto.
{{/unless}}

{{#isPost}}
### Esporta i tuoi commenti esistenti

Per esportare i dati dei Commenti e degli Utenti del tuo sito da Commento, dal loro pannello di amministrazione vai su Generale e poi su Esporta Dati.

Noterai che il file risultante che ricevi via email ha un misterioso estensione di file "gz". Se sei un po' più esperto dal punto di vista tecnico, potresti sapere che questo sta per "gzip" ed è un modo popolare ed efficiente per comprimere file.

### Non aprire il file "gz"

Una installazione predefinita di Windows 10 non sarà in grado di aprire il file da Commento. Va bene, perché non devi farlo con FastComments. Il nostro backend comprende questo file compresso.

Dopo di ciò, se sei loggato puoi andare <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona Commento dal menu a tendina e carica il tuo file.

### Aspetta qualche minuto

L'importazione di FastComments è "asincrona". Questo significa che caricare il file e elaborarlo sono passaggi separati.

Quindi, a seconda della dimensione del tuo file, potresti ricevere il messaggio di successo subito. Nella pagina di importazione in fondo c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi aggiornare questa pagina in sicurezza per vedere lo stato della tua importazione e quante righe sono state importate finora.

### Quando è completato

Riceverai un'email quando l'importazione è completata - che sia avvenuta con successo o meno. Puoi chiudere la pagina dopo che il caricamento del file è riuscito e vedi la tua importazione nella pagina Importazioni. Avrà uno stato come "Richiesto" e quando inizia lo stato sarà "In esecuzione".

È sicuro ripetere l'importazione quante volte è necessario - tuttavia, se la tua importazione fallisce, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> per ricevere aiuto.

### Sostituisci il codice Commento con FastComments

È semplicemente una questione di rimuovere il piccolo frammento che Commento ti fornisce e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire Commento e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto e la sensazione. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

### Migrazione degli URL contemporaneamente

I commenti stessi sono legati ai campi "link" nell'esportazione di Commento, quindi finché i tuoi URL non cambiano, il passaggio è facile. Se desideri migrare gli URL e mantenere i tuoi
commenti, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faccelo sapere</a> inviandoci gli URL vecchi e nuovi. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL, crea un foglio Excel.

### Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Sostituisci il frammento JavaScript di Commento con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a>

## Problemi

Commento non ci fornisce URL completi. Ciò che forniscono è solo il nome di dominio a cui appartiene un thread di commento - come "fastcomments.com/some-page".
Questo significa che l'importatore di FastComments deve assumere quale sia il protocollo, e per impostazione predefinita si basa su https. Se esegui l'importazione e non vedi i tuoi dati,
potresti voler controllare che il tuo sito sia adeguatamente protetto.

## Perché Commento non mi invia il mio file?
Per siti più grandi, Commento potrebbe non essere in grado di creare il file esportato a causa di limitazioni tecniche da parte loro. Abbiamo la possibilità di estrarre il tuo sito esistente e recuperare i commenti, tuttavia questo può essere
abbastanza personalizzato e, a causa del tempo necessario, richiederà di avere il Pacchetto di Supporto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puoi richiedere aiuto con questo qui</a>.
{{/isPost}}

---