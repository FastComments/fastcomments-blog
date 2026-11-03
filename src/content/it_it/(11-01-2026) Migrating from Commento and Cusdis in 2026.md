[category:Migration]
###### [postdate]
# [postlink]Migrazione da Commento e Cusdis nel 2026[/postlink]

{{#unless isPost}}
I servizi ospitati di Commento e Cusdis hanno smesso di rispondere. Ecco come passare a FastComments e come possiamo aiutare a recuperare i tuoi commenti dall'Internet Archive se non li hai mai esportati.
{{/unless}}

{{#isPost}}

Se la sezione dei commenti sul tuo sito è diventata vuota, questo post è per te. Copre cosa è cambiato, come importare un'esportazione se ne hai una, e come possiamo aiutarti a recuperare i tuoi commenti dall'Internet Archive se non ne hai.
 
## Cosa è Successo

Ecco cosa vediamo al 1 novembre 2026:

- **Commento.** commento.io, la sua API e lo script del widget restituiscono tutti un 404. Le catture dell'Internet Archive mostrano il sito funzionante il 25 maggio 2026 e che restituisce un 404 entro l'11 giugno 2026.
- **Cusdis.** cusdis.com e la sua API restituiscono l'errore Cloudflare 521, il che significa che il server dietro Cloudflare è inattivo. Le catture mostrano che funziona fino al 27 agosto 2026 e restituisce un 521 entro il 16 ottobre 2026. Lo script del widget si carica ancora, quindi la tua pagina mostra un riquadro vuoto dove erano i commenti.

Non abbiamo trovato alcun avviso di chiusura da parte di nessuno dei due progetti. Se auto‑ospiti Commento o Cusdis, la tua installazione non è influenzata da tutto ciò e puoi esportare da essa quando sei pronto a migrare.

## Trova i Tuoi Dati

Il percorso che scegli dipende da ciò che possiedi:

1. **Hai un file di esportazione.** Controlla anche la tua casella di posta, poiché Commento invia le esportazioni via email come file ".gz". Salta direttamente ai passaggi di importazione.
2. **Auto‑ospiti.** Esporta dal tuo pannello di controllo, poi segui i passaggi di importazione.
3. **Hai usato il servizio ospitato e non hai un'esportazione.** Il pannello da cui avresti esportato non esiste più. Leggi la sezione di recupero qui sotto.

## Importa un File di Esportazione

Una volta effettuato l'accesso, vai <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">qui per importare il file</a>. Seleziona **Commento (.gz, .json)** o **Cusdis (.json)** dal menu a tendina e carica il tuo file. Non è necessario decomprimere prima un file ".gz" di Commento.

L'importazione viene eseguita in background e riceverai un'email al termine. Reimportare è sicuro, poiché ogni commento viene abbinato al suo ID originale e aggiornato in loco.

Abbiamo una guida più dettagliata per ciascun formato: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> e <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. I loro passaggi per richiedere un'esportazione dal pannello ospitato non sono più validi, ma i dettagli dell'importazione lo sono.

## Recupera i Tuoi Commenti dall'Internet Archive

Commento e Cusdis caricano entrambi i commenti con JavaScript dai propri server. Quando l'Internet Archive cattura una pagina con un browser, può salvare quelle risposte insieme alla pagina. Le risposte salvate contengono i thread dei commenti.

L'abbiamo testato noi stessi. La <a href="https://web.archive.org" target="_blank">Wayback Machine</a> contiene più di 12.000 risposte di commenti Commento catturate e catture per 448 progetti Cusdis, e le più recenti risalgono al 2026. Non disponiamo di uno strumento self‑service per questo. Eseguiamo il recupero per te, quindi <a href="https://fastcomments.com/contact-us" target="_blank">scrivici</a> per iniziare.

### Controlla Prima il Tuo Sito

Apri uno dei tuoi post più frequentati nella Wayback Machine, sostituendo l'indirizzo con il tuo:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Scorri fino alla sezione dei commenti. Se i tuoi commenti compaiono, l'archivio ha quel thread. Se non compaiono, prova un anno diverso usando il calendario in alto nella pagina. Un risultato vuoto su un post non esclude il resto del tuo sito, quindi scrivici comunque.

### Come Funziona il Recupero

1. **Comunica il tuo dominio.** Se hai usato Cusdis, invia anche il tuo App ID, il valore `data-app-id` nello snippet sul tuo sito. Ti chiederemo di dimostrare di controllare il dominio, poiché questi commenti appartengono al tuo sito.
2. **Troviamo i tuoi thread.** Raccogliamo le catture per il tuo sito e verifichiamo che ciascuna appartenga al tuo dominio e alla pagina. I recuperi di Commento richiedono più tempo, perché l'archivio non indicizza le catture per sito e dobbiamo leggerle tutte.
3. **Ti mostriamo cosa abbiamo trovato.** Vedrai quante pagine e commenti sono stati recuperati e la data del commento più recente, prima di qualsiasi importazione.
4. **Importiamo i thread nel tuo account.** Potrai quindi modificare o rimuovere qualsiasi commento dal tuo pannello di moderazione.

### Cosa Viene Recuperato

<div class="pretty-table wide-table">

| Dati | Commento | Cusdis |
| --- | --- | --- |
| Testo del commento | Sì | Sì |
| Nome visualizzato dell'autore | Sì | Sì |
| Data del commento | Sì | Sì |
| Thread di risposta | Sì | Sì |
| Punteggio voto | Sì | Sì | Cusdis non ha voti |
| Indirizzo pagina | Sì | Sì, anche se alcuni siti hanno memorizzato solo un percorso, quindi abbiamo bisogno del tuo dominio |
| Email autore | No | No |
| Commenti ancora in attesa di approvazione | No | No |
| Commenti scritti dopo l'ultima cattura | No | No |
| Pagine che l'archivio non ha mai catturato | No | No |

</div>

### Cosa Aspettarsi

Questo è un recupero da snapshot, quindi prevedi delle lacune. Funziona meglio per le pagine che erano sufficientemente popolari da essere catturate spesso e di recente.

Due risultati dei nostri test mostrano la gamma. Su un blog, 30 ricerche hanno restituito 810 commenti su 19 pagine. Su un altro sito, che mostra ancora i suoi commenti, la copia archiviata più recente si è fermata a ottobre 2023 mentre la pagina live è arrivata fino a marzo 2025. Qualsiasi cosa scritta tra l'ultima cattura e la chiusura non è presente nell'archivio.

Le email mancanti sono importanti anche loro. I commenti recuperati mantengono il nome dell'autore, ma non possono essere associati a un account FastComments, e i loro autori non riceveranno notifiche per nuove risposte.

## Sostituisci il Widget

Qualunque percorso tu abbia seguito, il vecchio snippet deve essere rimosso dal tuo sito. Per Commento, rimuovi questo, insieme a `count.js` se usi i conteggi dei commenti:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Per Cusdis, rimuovi questo:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Quindi aggiungi <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Supportiamo anche molti framework front‑end, che <a href="https://fastcomments.com/install-wizard" target="_blank">puoi trovare qui</a>. Non è necessario attendere che un recupero finisca prima di cambiare. I tuoi lettori possono iniziare a commentare subito, e i thread recuperati si uniscono alle stesse pagine quando vengono importati.

### Se i Tuoi URL Stanno Cambiando

I commenti importati sono legati all'URL della loro pagina, quindi se i tuoi URL rimangono gli stessi, i thread si allineano da soli. Se stanno cambiando, importa prima, poi usa lo strumento <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> sotto Gestione Dati per spostarli nelle nuove posizioni.

## UE

Se sei nell'UE, probabilmente vorrai creare il tuo account su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> in modo che i dati dei tuoi clienti rimangano nell'UE.

## Riepilogo

1. Cerca un file di esportazione, anche nella tua email.
2. Se ne hai uno, caricalo nella <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">pagina di importazione</a>.
3. Se non ce l'hai, controlla il tuo sito nella Wayback Machine e <a href="https://fastcomments.com/contact-us" target="_blank">scrivici</a> con il tuo dominio.
4. Sostituisci il vecchio snippet con <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">il nostro</a>.

Saluti!

{{/isPost}}

---