[category:Migration]
###### [postdate]
# [postlink]Migrazione da Cusdis a FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per vedere come migrare completamente da Cusdis a FastComments, includendo i tuoi thread, lo stato di moderazione e gli URL delle pagine.
{{/unless}}

{{#isPost}}

Cusdis è un sistema di commenti leggero e open-source. Se l'hai superato e desideri funzionalità come filtraggio dello spam, voti, reazioni, notifiche, SSO e una dashboard completa di moderazione, FastComments ora importa direttamente i tuoi dati Cusdis.

## Esporta i tuoi commenti esistenti

Dal tuo pannello di controllo Cusdis, richiedi un'esportazione completa dei dati. Cusdis ti fornisce un unico file JSON contenente i tuoi progetti, pagine e tutti i commenti, insieme ai loro thread e allo stato di approvazione. A seconda della configurazione di Cusdis, l'esportazione ti viene inviata via email o scaricata immediatamente.

Non c'è nulla da modificare o decomprimere. Mantieni il file ".json" così com'è, e il nostro backend lo legge direttamente.

## Importa in FastComments

Una volta effettuato l'accesso, vai <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona **Cusdis (.json)** dal menu a tendina e carica il tuo file.

### Attendi qualche minuto

L'importazione di FastComments è "asincrona". Caricare il file e processarlo sono passaggi separati. Per un file piccolo il messaggio di successo appare subito. In fondo alla pagina di importazione c'è una tabella, e ogni riga rappresenta un tentativo di importazione. Aggiorna la pagina per vedere lo stato e quanti commenti sono stati importati finora.

### Quando è completato

Riceverai un'email quando l'importazione termina, sia che abbia avuto successo o meno. È sicuro chiudere la pagina dopo che il caricamento è riuscito e vedi la tua importazione elencata con lo stato "Requested" o "Running".

Reimportare è sicuro. FastComments associa ogni commento al suo ID originale di Cusdis, quindi eseguire nuovamente l'importazione aggiorna i commenti esistenti invece di crearne di duplicati. Se un'importazione fallisce, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> e ti aiuteremo.

## Cosa viene importato

- **Risposte in thread.** Cusdis annida le risposte a più livelli, e FastComments ricostruisce l'intera struttura padre-figlio.
- **Stato di moderazione.** I commenti approvati rimangono approvati. I commenti in attesa di approvazione arrivano nella tua coda di moderazione FastComments così puoi rivederli.
- **Autori.** Il nome e l'email di ogni commentatore vengono trasferiti, e gli utenti registrati di FastComments vengono associati tramite email.
- **Formattazione.** I commenti di Cusdis sono scritti in Markdown. FastComments rende lo stesso Markdown, includendo link, immagini e interruzioni di riga, così i tuoi thread appaiono esattamente come prima.

I commenti cancellati in Cusdis rimangono, così i tuoi thread importati rimangono puliti.

## Sostituisci il widget Cusdis

Una volta che i dati sono trasferiti, rimuovi il piccolo snippet di Cusdis dal tuo sito e inserisci <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>. Puoi eseguire Cusdis e FastComments in parallelo per un po' per testare prima l'aspetto e la sensazione. Supportiamo molti framework front-end, che <a href="https://fastcomments.com/install-wizard" target="_blank">puoi trovare qui</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

### Migrare gli URL allo stesso tempo

Cusdis associa ogni commento all'URL della sua pagina, quindi finché i tuoi URL non cambiano il passaggio è semplice. Se i tuoi URL cambiano anche, importa prima i dati di Cusdis, poi usa lo strumento integrato <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> sotto Gestione Dati per spostare i commenti nelle nuove posizioni. Puoi inserire un intero dominio, un URL completo o un ID URL sia per la vecchia che per la nuova posizione, così una singola coppia "from" e "to" sposta tutte le pagine corrispondenti in una volta. Viene eseguito come lavoro in background e ti invia un'email al termine.

Se preferisci che ce ne occupiamo noi (se hai molte pagine), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">facci sapere</a> i vecchi e i nuovi URL.

## UE

Se sei nell'UE, probabilmente vorrai creare il tuo account su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> così i dati dei tuoi clienti rimangono nell'UE.

## Riepilogo

1. Esporta i tuoi dati da Cusdis in formato JSON
2. Caricali nella pagina di importazione di FastComments e seleziona **Cusdis (.json)**
3. Sostituisci lo snippet di Cusdis con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---