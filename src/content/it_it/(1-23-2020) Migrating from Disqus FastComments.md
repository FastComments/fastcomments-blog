---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrare da Disqus a FastComments[/postlink]

{{#unless isPost}}
Leggi questo post per scoprire come migrare completamente da Disqus a FastComments.

Se stai utilizzando l'integrazione generica del sito con Disqus, è semplicemente una questione di rimuovere il piccolo snippet che ti forniscono e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire Disqus e FastComments sullo stesso sito temporaneamente per testare e regolare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Se non stai utilizzando l'integrazione generica del sito, le istruzioni variano in base alla tua piattaforma - di nuovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a>.
{{/unless}}

{{#isPost}}
Ci sono molte cose che Disqus fa bene, ma dove manca è dove interviene FastComments.

## Se sei su WordPress

FastComments ha un plugin dedicato per WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Il plugin rende l'installazione, la configurazione e la sincronizzazione molto facili. Se segui questa strada puoi ignorare il resto delle istruzioni qui.

## Installazione Manuale e Generica

### Esporta i tuoi commenti esistenti

L'importatore di FastComments migrerà i tuoi commenti, nomi utente, avatar utente e immagini in linea. Trasferiremo le immagini sui nostri server senza problemi.

Una cosa che Disqus fa bene è come gestisce l'esportazione dei dati. Noterai dopo aver seguito i passi nella loro guida <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">qui</a> che il file risultante che ricevi via email ha un misterioso "gz" come estensione. Se sei un po' più esperto dal punto di vista tecnico, potresti sapere che questo sta per "gzip" ed è un modo popolare ed efficiente per comprimere i file.

### Non aprire il file "gz"

Un'installazione predefinita di Windows 10 non sarà in grado di aprire il file da Disqus. Va bene, perché non devi farlo con FastComments. Il nostro backend comprende questo file compresso, quindi tutto ciò che devi fare è seguire le loro istruzioni <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">qui per ottenere detto file</a>.

Dopo di che, se sei loggato, puoi andare <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona Disqus dal menu a discesa e carica il tuo file.

### Aspetta qualche minuto

L'importazione di FastComments è "asincrona". Ciò significa che il caricamento del file e l'elaborazione sono fasi separate.

Quindi, a seconda delle dimensioni del tuo file, potresti ricevere il messaggio di successo immediatamente. Nella pagina di importazione, in fondo, c'è una tabella - ogni riga rappresenta un tentativo di importazione.
Puoi ricaricare questa pagina in sicurezza per vedere lo stato della tua importazione e quante righe sono state importate finora.

### Quando è finito

Riceverai un'email quando l'importazione è completata - sia che abbia successo o meno. Puoi chiudere la pagina dopo che il caricamento del file ha avuto successo e vedi la tua importazione nella pagina delle Importazioni. Avrà uno stato come "Richiesta" e quando inizia, lo stato sarà "In esecuzione".

È sicuro riimportare tutte le volte necessarie - tuttavia, se la tua importazione fallisce, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a> così possiamo aiutarti.

### Sostituisci il codice Disqus con FastComments

Se stai utilizzando l'integrazione generica del sito con Disqus, è semplicemente una questione di rimuovere il piccolo snippet che ti forniscono e sostituirlo con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.
Puoi persino eseguire Disqus e FastComments sullo stesso sito temporaneamente per testare e regolare l'aspetto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Se non stai utilizzando l'integrazione generica del sito, le istruzioni variano in base alla tua piattaforma - di nuovo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contattaci</a>.

### Migrazione degli URL contemporaneamente

I commenti stessi sono legati ai campi "link" nell'esportazione di Disqus, quindi finché i tuoi URL non cambiano, il passaggio è facile. Se vuoi migrare gli URL e mantenere i tuoi commenti, allora <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faccelo sapere</a> inviandoci gli URL vecchi e nuovi. La pagina di aiuto consente di caricare piccoli file di testo, quindi se
stai migrando più di un paio di URL, crea un foglio Excel.

### Riepilogo

1. Esporta i tuoi dati
2. Importa in FastComments
3. Sostituisci lo snippet JavaScript di Disqus con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">quello di FastComments</a>

## Perché Disqus non mi invierà il mio file?
Per i siti più grandi, Disqus potrebbe non essere in grado di creare il file esportato a causa di limitazioni tecniche da parte loro. Abbiamo la possibilità di estrarre il tuo sito esistente e di estrarre i commenti, tuttavia potrebbe essere
piuttosto personalizzato e a causa del tempo richiesto richiederà che tu abbia il Pacchetto di Supporto. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Puoi richiedere aiuto con questo qui</a>.
{{/isPost}}