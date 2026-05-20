---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Aggiungere Commenti ai Tuoi Corsi D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments si installa ora in D2L Brightspace in un unico passaggio tramite Registrazione Dinamica LTI 1.3, con SSO automatico, commenti a thread e chat collaborativa per ogni unità del corso.
{{/unless}}

{{#isPost}}

### Novità

FastComments supporta ora D2L Brightspace attraverso lo standard IMS LTI 1.3 Advantage, inclusa la Registrazione Dinamica. 
Questo significa che non c'è alcun plugin da installare, nessuno scambio di chiavi da coordinare e nessun cablaggio per corso. 
Il tuo amministratore di Brightspace incolla un unico URL nella schermata di registrazione LTI Advantage, e FastComments e Brightspace completano automaticamente la stretta di mano. Gli istruttori possono quindi aggiungere FastComments a qualsiasi unità nello stesso modo in cui aggiungono qualsiasi altro strumento esterno, e gli studenti vedono commenti a thread incorporati direttamente nel contenuto del corso.

<div class="text-center">
    <div class="sm">Commenti a thread incorporati come argomento all'interno di un'unità Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments in esecuzione all'interno di un'unità D2L Brightspace" title="FastComments su un'Unità Brightspace" />
</div>

### Iniziare

Dal tuo dashboard di FastComments, apri la [pagina di Configurazione LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
seleziona **D2L Brightspace** dal menu a discesa della piattaforma e clicca su **Genera URL**. Ottieni un URL di registrazione a uso singolo
che è valido per 30 minuti.

In Brightspace, il tuo amministratore apre **Strumenti Amministratore > Gestisci Estensibilità > LTI Advantage > Registrare Strumento**, incolla l'URL nel campo **Endpoint di registrazione avvio strumento** e invia. Brightspace esegue la stretta di mano di registrazione
con FastComments, scambia chiavi di firma e crea l'entry dello strumento. Il popup si chiude automaticamente quando completato.

Dopo la registrazione, l'amministratore abilita lo strumento e crea un deployment limitato alle unità organizzative che devono avere
accesso. Da quel momento in poi, FastComments appare nel selettore di contenuti di ogni corso sotto **Aggiungi Esistente**.

### Aggiungere a un Corso

All'interno di qualsiasi unità del corso, l'istruttore clicca su **Aggiungi Esistente**, seleziona **FastComments** dall'elenco delle attività, e lo
strumento viene posizionato come argomento nell'unità. Rinomina l'argomento, riordina all'interno dell'unità, limita a gruppi specifici o condizioni di rilascio, e alterna la visibilità utilizzando tutti i controlli standard di Brightspace. Non c'è una schermata di impostazioni separata di FastComments che gli istruttori devono apprendere.

Per l'incorporamento in linea, lo stesso strumento FastComments è anche disponibile attraverso il dialogo **Inserisci Contenuti** 
dell'editor HTML di Brightspace sotto **LTI Advantage**. Questo utilizza il flusso di Deep Linking LTI per inserire un thread di commenti direttamente all'interno di una lettura,
istruzioni per un quiz, o qualsiasi altro argomento HTML, così la discussione si trova accanto al contenuto di cui si parla.

### SSO Automatico

Gli studenti non vedranno mai una schermata di login. Il lancio LTI 1.3 porta l'identità Brightspace dello studente (`sub`, `name`, `email`,
e `picture`) firmata dalla chiave privata di Brightspace. FastComments verifica la firma contro il JWKS pubblicato di Brightspace,
crea una sessione SSO sicura per l'utente e rende il widget dei commenti. I commenti sono attribuiti all'account Brightspace dello studente, e anche gli istruttori moderano utilizzando la loro identità Brightspace.

Il mapping dei ruoli è automatico. Gli utenti **Amministratore** di Brightspace vengono considerati come admin di FastComments, gli utenti **Istruttore** come moderatori, e tutti gli altri come commentatori standard. Non c'è una lista utenti separata da mantenere sul lato FastComments - segue tutto ciò che dice Brightspace.

### Scoping dei Thread

Ogni thread di commenti è legato a un triplo: l'host di Brightspace, il corso e il link alle risorse. Ciò significa che due
corsi che utilizzano entrambi un argomento "Riflessioni di Lettura" ottengono ognuno la propria discussione. Lo stesso vale se un istruttore 
aggiunge FastComments due volte nello stesso corso (per esempio, una volta come argomento dell'unità e una volta come incorporamento in linea all'interno di una
pagina HTML) - ciascun posizionamento è il suo thread.

La parte dell'host è parte della identificazione del thread per un motivo. Se la tua istituzione gestisce più istanze di Brightspace
sotto un unico account FastComments, le conversazioni rimangono isolate a ciascuna istanza anche quando gli ID dei corsi collidono.

### In Conclusione

Se stai utilizzando D2L Brightspace, puoi essere operativo con FastComments in un pomeriggio: genera l'URL, incollalo
in Brightspace e lascia che gli istruttori inseriscano lo strumento nelle loro unità. Per la guida completa passo-passo inclusi
troubleshooting e screenshot per pagina, consulta la
[Guida all'Installazione LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). La stessa integrazione copre anche Moodle, Blackboard, Sakai, Schoology e qualsiasi altra piattaforma LTI 1.3 Advantage, ma Brightspace è stato il nostro obiettivo pilota e il flusso è solido lì.

Saluti!

{{/isPost}}

---