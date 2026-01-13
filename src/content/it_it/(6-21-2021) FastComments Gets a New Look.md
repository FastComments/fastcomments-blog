---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Ha un Nuovo Aspetto[/postlink]

{{#unless isPost}} FastComments è stato aggiornato. Scopri l'aggiornamento e come puoi ottenerlo. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

### Un Nuovo Aspetto

Fino ad oggi, l'aspetto e la sensazione del widget commenti di FastComments si sono evoluti solo in modo incrementale. Oggi, stiamo rilasciando
una versione completamente nuova!

Dai un'occhiata al confronto qui sotto (trascina il cursore per confrontare):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Clienti Esistenti

Poiché gran parte della nostra base utenti personalizza il widget commenti, abbiamo mantenuto la nuova interfaccia completamente separata. Non dovresti vedere alcuna
cambiamento fino a quando non sarai migrato.

### Chi Lo Ottiene

I nuovi clienti che si registrano a partire da oggi riceveranno automaticamente il nuovo design. Tutti i nostri framework, librerie e
plugin hanno ricevuto aggiornamenti per incorporare la nuova versione del widget commenti di FastComments.

### Fine Vita della Versione Precedente

Attualmente non stiamo impostando una fine vita per la versione precedente del widget commenti. Questo non significa che non
annunceremo una nel futuro. Tuttavia, quando lo faremo daremo un margine ragionevole (6 - 12 mesi dall'annuncio alla dismissione).

Il nostro suite di test automatizzati è stata aggiornata per supportare diverse versioni del widget commenti in modo che la versione precedente
continui a ricevere testing automatizzati continui.

### Modalità Scura e Altre Funzionalità

Il nuovo design supporta la modalità scura, proprio come il widget commenti originale. Tutti i flag di funzionalità e le impostazioni sono stati migrati.

In termini di Modalità Scura, con la vecchia interfaccia commenti, le risorse per la Modalità Scura erano sempre incluse al caricamento della pagina anche se non
venivano utilizzate. Questo comportava circa un extra di 2kb che veniva sempre scaricato sul client - anche se non necessario.

La nuova versione del widget commenti recupera solo queste risorse, inclusi gli stili, se necessario.

### Avatar Predefinito

L'avatar predefinito utilizzato nella nuova UI è diverso. Durante la migrazione, l'avatar predefinito utilizzato in tutto il prodotto nel dashboard admin
e in tutte le email di notifica verrà aggiornato.

### Implicazioni delle Regole di Personalizzazione

Siamo consapevoli che quando apportiamo modifiche di stile al widget commenti visibile al pubblico, possiamo rompere le personalizzazioni dei nostri clienti. Non preoccuparti, ti abbiamo coperto e abbiamo esaminato lo stile personalizzato di ciascuno per assicurarci che non sia regressato. Tuttavia, se stai riscontrando problemi faccelo sapere.

### Implicazioni sulle Prestazioni

La dimensione totale del widget commenti è aumentata da 15.4kb a 17.4kb. Mentre riteniamo che un leggero aumento della dimensione del pacchetto
per quanto migliora l'aspetto della UI ne valga la pena, abbiamo pianificato misure per riportarlo indietro.

In generale, la nuova UI si carica più velocemente, poiché ora più risorse sono raggruppate insieme, risultando così in meno richieste.

### Come Migrare

#### Via Supporto

Contatta semplicemente il tuo rappresentante del supporto, oppure inizia la conversazione [qui](https://fastcomments.com/auth/my-account/help).

#### WordPress

Se stai utilizzando **WordPress**, semplicemente aggiorna all'ultima versione e aggiorna eventuali stili personalizzati che potresti avere.

#### Integrazioni Personalizzate

Se stai utilizzando il widget commenti **VanillaJS**, semplicemente cambia:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

A:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Se stai utilizzando le librerie **React, Angular o Vue**, semplicemente aggiorna alla versione 2.

### Alcuni Dati Interessanti

Dalla concezione, progettazione, e implementazione, questo è stato un progetto lungo due mesi che ha interessato più di **100 file** e
ha modificato oltre **novemila linee di codice**.

Abbiamo anche completamente ristrutturato il nostro sistema di build per poter avere una base di codice condivisa tra le versioni del widget commenti. Questo sistema ci consente di utilizzare espressioni di tempo di compilazione per includere solo il codice per la versione appropriata della
UI, riducendo le dimensioni del pacchetto del widget.

### Pensiero Futura

Il design precedente ci ha accompagnato dal 2019 fino a metà 2021. Speriamo che questo nuovo aspetto ci porti oltre nel futuro e la nostra
nuova infrastruttura per gestire più versioni della UI dei commenti permetterà a FastComments di crescere senza interruzioni per la nostra
clientela nel tempo.

Buon commento!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---