---
[category:Migration]
###### [postdate]
# [postlink]Migrando Da AnyComment nel 2026 A FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per scoprire come migrare completamente da AnyComment a FastComments nel 2026.
{{/unless}}

{{#isPost}}

Abbiamo avuto un numero di clienti che ci hanno chiesto informazioni sulla migrazione da AnyComment nel 2026.

## AnyComment Vive Dentro WordPress

AnyComment è un plugin per WordPress. A differenza delle piattaforme autonome come Disqus o Hyvor Talk, non gestisce un backend proprio: i tuoi commenti sono memorizzati direttamente nel database di WordPress, nella stessa tabella `wp_comments` che utilizza il core di WordPress. Questa è una grande notizia per la migrazione: non c'è un'esportazione separata di AnyComment da gestire, né un server di terze parti con cui coordinarsi. I tuoi dati sono già sul tuo server.

Ciò significa che il flusso di migrazione standard di FastComments per WordPress gestisce AnyComment senza passaggi aggiuntivi.

## Opzione 1: Il Plugin FastComments per WordPress (Consigliato)

Il percorso più semplice è installare il <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin FastComments per WordPress</a>. Il plugin ti guida attraverso il collegamento della tua installazione di WordPress con FastComments, e copia automaticamente i tuoi dati sui commenti esistenti. Non c'è nulla da scaricare o caricare manualmente. I dati vengono copiati dal tuo database di WordPress ai nostri server, quindi questo ridurrà anche il carico sui tuoi server una volta completata la migrazione.

La maggior parte delle migrazioni termina in un paio di minuti.

Dopo che i dati sono stati trasferiti, disattiva AnyComment. I commenti continueranno ad essere gestiti da FastComments, e il plugin mantiene il tuo database di WordPress sincronizzato come backup (se attivi quella funzione), così possiedi sempre i tuoi dati.

## Opzione 2: Esportazione XML di WordPress

Se preferisci migrare manualmente, o hai già spostato WordPress e hai solo un backup XML, utilizza l'esportazione integrata di WordPress.

1. Nella tua amministrazione di WordPress, vai su **Strumenti -> Esporta** e scarica il file XML.
2. Accedi al tuo dashboard di FastComments e vai <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>.
3. Seleziona **WordPress (.xml)** dal menu a tendina e carica il tuo file.

Poiché AnyComment scrive in `wp_comments`, ogni thread di AnyComment è presente in quell'XML insieme ai tuoi altri commenti di WordPress. L'importatore li abbina automaticamente al post giusto.

## Sostituire Il Widget AnyComment

Se hai utilizzato l'Opzione 1, il plugin FastComments per WordPress sostituisce già AnyComment sul tuo sito - basta disattivare AnyComment dopo che la migrazione è terminata.

Se hai utilizzato l'Opzione 2 e stai mantenendo la tua installazione di WordPress, installa il plugin FastComments successivamente per gestire il rendering del widget e la sincronizzazione continua. Se stai abbandonando completamente WordPress, inserisci il nostro <a href="https://fastcomments.com/install-wizard" target="_blank">snippet di installazione</a> sul tuo nuovo sito - supportiamo molti framework frontend che <a href="https://fastcomments.com/install-wizard" target="_blank">puoi trovare qui</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

## UE

Se sei nell'UE, probabilmente vorrai creare il tuo account su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> in modo che i tuoi dati clienti rimangano nell'UE.

## Riepilogo

1. Installa il plugin FastComments per WordPress e lascia che copi i tuoi dati, **oppure** esporta da WordPress come XML e caricalo sulla pagina di importazione.
2. Disattiva AnyComment.
3. Se stai lasciando anche WordPress, sostituisci il codice del widget sul tuo nuovo sito.

{{/isPost}}

---