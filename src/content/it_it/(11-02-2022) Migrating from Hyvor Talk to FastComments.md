---
[category:Migration]
###### [postdate]
# [postlink]Migrazione Da Hyvor Talk A FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per vedere come migrare completamente da Hyvor Talk a FastComments.

Se stai utilizzando l'installazione manuale del codice con Hyvor Talk, allora è semplicemente una questione di rimuovere il piccolo frammento che ti danno e sostituirlo con <a href="https://fastcomments.com/install-wizard" target="_blank">il nostro</a>.
Puoi persino eseguire Hyvor e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Se non stai utilizzando l'installazione basata su codice, le istruzioni varieranno in base alla tua piattaforma - ancora una volta <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a>.
{{/unless}}

{{#isPost}}

## Se Sei Su WordPress

FastComments ha un plugin dedicato per WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Il plugin rende l'installazione, la configurazione e la sincronizzazione molto facili. Se segui questo percorso, puoi ignorare il resto delle istruzioni qui. Assicurati solo
di aver sincronizzato i tuoi commenti di Hyvor Talk con la tua installazione di WordPress.

Se ciò non funziona per te come riportato da alcuni dei nostri clienti, potresti voler utilizzare il nostro plugin per WordPress, ma eseguire un'importazione dei dati
esportando manualmente da Hyvor Talk. Puoi trovare le importazioni dei dati in [Gestisci Dati -> Importa Commenti](https://fastcomments.com/auth/my-account/manage-data/import).

## Installazione Manuale, Generica

### Esporta I Tuoi Commenti Esistenti

L'importatore di FastComments migrerà i tuoi thread di commento, nomi utente, avatar utente, emoji e immagini in linea. Sposteremo le immagini sui nostri server senza problemi.

A partire dal 2022, Hyvor Talk non esporta email o voti su/giù. Se riesci a ottenere un'esportazione da loro con queste informazioni, possiamo importarla.

### Importa Il File .JSON

Dopo aver scaricato l'esportazione di Hyvor, accedi al tuo dashboard di FastComments e vai <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona Hyvor Talk dal menu a discesa e carica il tuo file.

### Aspetta qualche minuto

L'importazione di FastComments è "asincrona". Questo significa che il caricamento del file e il suo trattamento sono passaggi separati.

Quindi, a seconda delle dimensioni del tuo file, potresti ricevere il messaggio di successo subito. Nella pagina di importazione, in fondo, c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi aggiornare questa pagina in tutta sicurezza per vedere lo stato della tua importazione e quante righe sono state importate fino ad ora.

### Quando È Finito

Riceverai un'email quando l'importazione è completata - sia che abbia successo o meno. Puoi chiudere la pagina dopo che il caricamento del file è riuscito, e vedi la tua importazione nella pagina Importazioni. Avrà uno stato come "Richiesto" e quando inizia lo stato sarà "In Esecuzione".

È sicuro reimportare quante volte necessario - tuttavia, se la tua importazione fallisce, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> così possiamo aiutarti.

### Sostituisci Il Codice Di Hyvor Talk Con FastComments

Se stai utilizzando l'installazione basata su frammento di codice con Hyvor, allora è semplicemente una questione di rimuovere il piccolo frammento che ti danno e sostituirlo con <a href="https://fastcomments.com/install-wizard" target="_blank">il nostro</a>.
Supportiamo anche molti framework front end che [puoi trovare qui](https://fastcomments.com/install-wizard). Puoi persino eseguire Hyvor e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Se non stai utilizzando l'installazione basata su codice, le istruzioni varieranno in base alla tua piattaforma - ancora una volta <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a>.

Offriamo un wizard di installazione self-service [qui](https://fastcomments.com/install-wizard).

### Migrare URL allo stesso tempo

I commenti stessi sono legati ai campi id pagina nell'esportazione, quindi finché i tuoi URL non cambiano, lo switch è facile. Se desideri migrare gli URL e mantenere i tuoi
commenti, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faccelo sapere</a> inviandoci i vecchi e i nuovi URL. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL crea un foglio Excel.

### UE

Se sei nell'UE, probabilmente vorrai creare il tuo account su [eu.fastcomments.com](https://eu.fastcomments.com) affinché i tuoi dati clienti rimangano nell'UE.

### Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Sostituisci il frammento JavaScript di Hyvor con <a href="https://fastcomments.com/install-wizard" target="_blank">quello di FastComments</a>

## Perché Hyvor Non Mi Invia Il Mio File?
Per siti di grandi dimensioni, Hyvor potrebbe non essere in grado di creare il file esportato a causa di limitazioni tecniche da parte loro. Abbiamo la possibilità di estrarre il tuo sito esistente e prelevare i commenti da esso, tuttavia questo può essere
abbastanza personalizzato e, a causa del tempo coinvolto, richiederà di avere il Pacchetto di Supporto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puoi richiedere aiuto con questo qui</a>.
{{/isPost}}

---