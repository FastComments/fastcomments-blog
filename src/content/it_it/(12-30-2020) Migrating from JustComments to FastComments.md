---
[category:Migration]
###### [postdate]
# [postlink]Migrare da JustComments a FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per vedere come migrare completamente da JustComments a FastComments.

Di solito si tratta di rimuovere il piccolo frammento che ti danno e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi anche eseguire JustComments e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Posiamo aiutarti con questo</a>.
{{/unless}}

{{#isPost}}

A partire dal 2021, JustComments chiuderà. Su FastComments abbiamo reso facile per te passare alla nostra piattaforma.

Scoprirai che FastComments offre molte delle stesse funzionalità a cui sei abituato, e di più.

## Differenze di Prezzo

Mentre JustComments utilizza un sistema basato su crediti, FastComments utilizza un modello a livelli con tre piani disponibili. Con FastComments, il nostro piano da $5/mese
ti copre fino a 1M di caricamenti di pagina al mese. Oltre a questo ci sono i piani Pro ed Enterprise, che puoi visualizzare sulla nostra <a href="https://fastcomments.com/traffic-pricing" target="_blank">pagina dei prezzi</a>.

## Se Sei su WordPress

FastComments ha un plugin dedicato per WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Il plugin rende l'installazione, la configurazione e la sincronizzazione molto semplici. Tuttavia, JustComments non sincronizza i tuoi commenti nel tuo installazione WordPress come fa FastComments.
Questo significa che dopo la sincronizzazione dovrai seguire i passaggi di esportazione e importazione qui sotto.

## Esporta i Tuoi Commenti Esistenti

L'importatore di FastComments migrerà i tuoi commenti, nomi utente, avatar utente e immagini in linea. Sposteremo le immagini sui nostri server senza problemi.

Per scaricare i tuoi dati sui commenti da JustComments, vai alla tua pagina Account.

## Importa nell'Amministrazione di FastComments

Non preoccuparti di aprire il file risultante da JustComments.

Se sei connesso, puoi andare <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>.

Seleziona JustComments dal menu a discesa e carica il tuo file.

### Identificatori di Pagina

Quando importi, vedrai l'opzione di scegliere URL della Pagina o "ID dell'Elemento". Se non sei sicuro di quale scegliere, scegli URL della Pagina. Se hai un'integrazione con JustComments
dove specifichi l'ID dell'Elemento nella configurazione del widget, seleziona ID dell'Elemento.

### Aspetta qualche minuto

L'importazione di FastComments è "asincrona". Questo significa che caricare il file e elaborarlo sono passaggi separati.

Quindi, a seconda delle dimensioni del tuo file potresti ricevere immediatamente il messaggio di successo. Sulla pagina di importazione, in fondo c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi aggiornare questa pagina in sicurezza per vedere lo stato della tua importazione e quante righe sono state importate finora.

### Quando è fatto

Riceverai un'email quando l'importazione è completata - sia che abbia successo o meno. Puoi chiudere la pagina dopo che il caricamento del file è andato a buon fine e puoi vedere la tua importazione nella pagina Importazioni. Avrà uno stato come "Richiesto" e quando inizia lo stato sarà "In esecuzione".

È sicuro rieseguire l'importazione tutte le volte che è necessario - tuttavia, se la tua importazione fallisce allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> così possiamo aiutarti.

### Sostituisci il Codice di JustComments con FastComments

Se non stai utilizzando il plugin WordPress di JustComments, allora si tratta semplicemente di rimuovere il piccolo frammento che ti danno e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi anche eseguire JustComments e FastComments sullo stesso sito temporaneamente per testare e modificare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

### Migrare gli URL contemporaneamente

I commenti stessi sono legati ai campi "pageUrl" per impostazione predefinita nell'esportazione di JustComments, quindi finché i tuoi URL non cambiano, il passaggio è semplice. Se desideri migrare gli URL e mantenere i tuoi
commenti, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">facci sapere</a> inviandoci i vecchi e i nuovi URL. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL, crea un foglio Excel.

## Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Se non sei su WordPress, sostituisci il frammento JavaScript di JustComments con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a> 

{{/isPost}}