[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Aggiungi Sondaggi Live ai Tuoi Commenti con FastComments[/postlink]

{{#unless isPost}}
I commenti ora hanno sondaggi live! I lettori votano direttamente nella discussione, i risultati si aggiornano in tempo reale per tutti sulla pagina, e i sondaggi funzionano sia nel widget web sia nei nostri SDK per iOS, Android e React Native.
{{/unless}}

{{#isPost}}

### Novità

Questa versione aggiunge **Live Polls**. Un sondaggio è allegato a un commento e viene visualizzato all'interno di esso. I lettori cliccano su un'opzione per votare, senza lasciare la discussione, e i risultati si aggiornano in tempo reale per tutti gli utenti che visualizzano la pagina man mano che arrivano i voti. Nessun aggiornamento manuale e nessuno deve contare le risposte a mano.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Poiché il sondaggio è un commento, la conversazione rimane collegata ad esso. Le persone votano, poi rispondono per spiegare il motivo.

### Creare un Sondaggio

Quando i sondaggi sono attivi, l'editor dei commenti ottiene un pulsante per i sondaggi. Cliccandolo si apre un editor di sondaggio sotto il campo di testo, dove è possibile impostare:

- **The question**, fino a 200 caratteri.
- **The options**, da 2 a 10.
- **When it closes**: mai, o dopo 1 giorno, 3 giorni, o 1 settimana. Un sondaggio chiuso mostra i risultati finali e smette di accettare voti.
- **Privacy**: anonimo, visibile agli amministratori, o pubblico.
- **Require Vote to See Results**, che mantiene i risultati nascosti a ciascun visualizzatore finché non vota o il sondaggio non si chiude.

Quindi scrivi il tuo commento e pubblicalo come al solito. I sondaggi funzionano sui nuovi commenti e sulle risposte.

### Votazione

Ogni persona ottiene un voto per sondaggio e può cambiarlo mentre il sondaggio è aperto. A meno che il sondaggio non richieda un voto preliminare, i lettori possono cliccare **Show results** per vedere la situazione prima di scegliere.

La privacy è impostata per sondaggio e mostrata subito sotto le opzioni, così gli elettori sanno chi può vedere il loro voto prima di esprimerlo. I sondaggi anonimi (impostazione predefinita) mostrano solo i totali, e nessuno, amministratori inclusi, può vedere chi ha votato cosa. Nei sondaggi visibili agli amministratori, gli admin e i moderatori possono aprire **See who voted**. Nei sondaggi pubblici, chiunque può.

### Attivarlo

I sondaggi sono disattivati per impostazione predefinita. Apri la tua <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, spunta **Enable Polls** e scegli chi può crearli:

- **Admins/Moderators Only** (impostazione predefinita), per quando vuoi gestire i sondaggi tu stesso.
- **Everyone**, per quando vuoi che la tua community si interroghi a vicenda.

Il voto richiede per impostazione predefinita un utente autenticato. Spunta **Allow Anonymous Poll Votes** per consentire a chiunque di votare. Per mantenere l'equità, i voti anonimi sono limitati a tre per indirizzo IP per sondaggio per ora.

Come ogni regola di personalizzazione, questa può essere applicata all'intero sito, a un dominio o a una singola pagina.

### Notifiche

L'autore di un sondaggio riceve informazioni sulle risposte man mano che arrivano: una notifica, raggruppata quando molte persone votano contemporaneamente, e un'email giornaliera quando il sondaggio ha ricevuto nuove risposte quel giorno. Solo il primo voto conta come risposta, quindi chi cambia idea non invia ulteriori notifiche. Le notifiche rispettano la privacy del sondaggio, così un sondaggio anonimo indica solo quante nuove risposte sono arrivate, mai chi.

### SDK Mobile Nativi

I sondaggi non sono solo nel widget web. I nostri SDK nativi visualizzano la scheda del sondaggio, l'editor, i risultati in tempo reale e l'elenco degli elettori con componenti native reali, e leggono le stesse impostazioni del widget dal tuo pannello di controllo. Attiva i sondaggi una volta e appariranno sul tuo sito e nelle tue app.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, tramite Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, come `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, su NPM.

Gli SDK iOS e Android possono anche pubblicare un sondaggio dalla tua interfaccia. Su iOS appare così:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

I README per <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> e
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, e il
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">changelog di React Native</a>,
coprono i dettagli, incluso come ridisegnare i colori del sondaggio per adattarli alla tua app.

### L'API

I sondaggi sono presenti anche nella REST API. Puoi creare un sondaggio insieme al suo commento passando `poll` a `POST /api/v1/comments`, oppure aggiungerlo, modificarlo, chiuderlo e rimuoverlo in seguito con `/api/v1/polls/:commentId`. I voti possono essere elencati, registrati e rimossi con `/api/v1/poll-votes`, il che rende semplice esportare i risultati in un foglio di calcolo o nel tuo CMS. L'API segue le stesse impostazioni del widget, e i singoli voti sui sondaggi anonimi non possono essere letti tramite essa.

### Sovraccarico

Il codice del sondaggio non viene caricato a meno che i sondaggi non siano abilitati, quindi non rallenta il widget dei commenti per gli altri utenti.

### Documentazione

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">The Live Polls guide</a> copre l'abilitazione dei sondaggi, chi può crearli, i voti anonimi, la privacy degli elettori, le notifiche e l'API.

### Provalo

C'è un sondaggio live nella <a href="https://fastcomments.com/product/live-polls" target="_blank">demo Live Polls</a>. Vota, apri la pagina in una seconda scheda e guarda i risultati cambiare. Puoi anche pubblicare il tuo sondaggio lì.

### In Conclusione

Se le tue discussioni si trasformano continuamente in conteggi di teste, prova i sondaggi e facci sapere qui sotto cosa ti piacerebbe vedere prossimamente.

Saluti!

{{/isPost}}

---