---
[category:Features]

###### [postdate]

# [postlink]Profili, Badge e Messaggi Diretti[/postlink]

{{#unless isPost}}In questa versione abbiamo molte funzionalità che premiano le comunità che utilizzano FastComments e le aiutano a comunicare.{{/unless}}

{{#isPost}}

### Novità
FastComments ha ufficialmente rilasciato i profili utente e funzionalità correlate.

### Profili Utente

Il profilo di un utente consiste nel suo nome, se è online, la sua attività recente e un luogo per commentare il proprio profilo.

Anche i suoi badge e i progressi per guadagnare badge sono mostrati qui.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Profili Utente di FastComments" title="Profili Utente di FastComments"></video>
</div>

Gli utenti possono vedere il proprio profilo cliccando sul proprio avatar in un thread di commenti, o [andando alla loro pagina account](https://fastcomments.com/auth/my-account).

Inoltre, puoi inviare un messaggio diretto a un utente dal suo profilo.

### Modale Profilo Utente
Quando si seleziona l'avatar di un utente, si aprirà il Modale Profilo. Questo è stato aggiunto anche per i moderatori nella pagina di Moderazione Commenti.

### Premiare gli Utenti con Badge

I badge sono un'altra recente aggiunta a FastComments che consente di premiare gli utenti della tua comunità. Creare un badge è facile:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Crea un Badge" title="Crea un Badge" />
</div>

I badge possono essere assegnati in base alle seguenti condizioni:

- Numero di commenti lasciati
- Numero di voti positivi guadagnati
- Numero di risposte ricevute
- Numero di commenti pinnati
- Veterano (tempo dal primo commento)
- Commentare tardi la notte
- Tempo di risposta veloce
- Rispondi a una pagina specifica
- Moderatori - Numero di commenti eliminati
- Moderatori - Numero di commenti approvati
- Moderatori - Numero di commenti non approvati
- Moderatori - Numero di commenti esaminati
- Moderatori - Numero di commenti contrassegnati come spam
- Moderatori - Numero di commenti contrassegnati come non spam

Come puoi vedere, ci sono molti tipi di situazioni per cui possiamo premiare gli utenti.

Possiamo definire più *livelli* di badge. Ad esempio, possiamo aggiungere badge per il `Numero di Commenti` con soglie di 10, 100 e 1000 commenti lasciati. Man mano che gli utenti interagiscono nella tua comunità, i badge guadagnati si **accumuleranno** nel tempo.

Non dimentichiamo i *Moderatori*. In molte comunità, questo è un lavoro ingrato. Dai ai tuoi moderatori qualcosa da mostrare configurando i badge per Moderatori.

Supportiamo anche alcuni casi unici, come i badge `Notturno` e `Tempo di Risposta Veloce` per riconoscere i membri che sono attivi tardi la notte o che rispondono rapidamente. Il `Tempo di Risposta Veloce` funziona meglio quando vengono utilizzate le funzionalità live di FastComments.

Quando vengono creati nuovi badge, saranno automaticamente aggiunti ai membri esistenti della tua comunità che ne soddisfano i requisiti.

### Messaggi Diretti

I clienti hanno chiesto la possibilità di inviare messaggi diretti agli utenti fin dal lancio di FastComments. Due anni dopo, siamo felici di annunciare finalmente questa funzionalità e di ringraziare coloro che hanno atteso pazientemente.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Messaggi Diretti di FastComments" title="Messaggi Diretti di FastComments"></video>
</div>

I messaggi diretti consentono ai membri di una comunità di inviarsi messaggi privati, ma servono anche come strumento utile per i Moderatori e gli Amministratori per contattare i commentatori.

Come la maggior parte di FastComments, tutte le funzionalità di messaggistica diretta sono live.

#### Messaggi Diretti Asincroni

Quando invii un messaggio a un utente, potrebbe essere offline. In questo caso, invieremo all'utente un'email per informarlo che ha un nuovo messaggio.

#### Messaggi Diretti Via Email

Quando un utente riceve un messaggio via email, ha la possibilità di rispondere rispondendo a quell'email.

<div class="text-center">
    <img src="/images/email-dm.png" alt="Email DM" title="Email DM" />
</div>

Quando lo fa, la sua risposta apparirà **live** per l'altro utente nella scheda Messaggi del proprio profilo.

### SSO Sicuro

I Profili Utente di FastComments sono completamente compatibili con le installazioni di SSO Sicuro esistenti.

Le impostazioni sulla privacy dell'utente possono anche essere configurate tramite il flag `isProfileActivityPrivate` nel payload SSO.

Per impostazione predefinita, `isProfileActivityPrivate` è vero.

### Clienti Esistenti

Abbiamo completato il rollout di questa funzionalità a tutti i clienti esistenti su tutti i livelli.

### Configurazione della Privacy

Visualizzando il tuo profilo, ci sono opzioni per:

- Disabilitare i commenti sul tuo profilo.
- Impedire che la tua attività sia visibile da altri.
- Impedire ad altri di inviarti messaggi diretti.

### Dati Raccolti

I profili utente vengono creati sulla base dei dati che abbiamo oggi, come il loro nome, quali commenti hanno lasciato di recente e così via.

Non raccoglieremo dati aggiuntivi per espandere i profili degli utenti. Ci piace pensare ai Profili Utente più come al profilo tipico di un utente su un forum.

### In Conclusione

Pensiamo che queste funzionalità espandano notevolmente FastComments come piattaforma e speriamo che le trovi utili e facili da usare.

Saluti!

{{/isPost}}

---