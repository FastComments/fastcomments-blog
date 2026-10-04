[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Commenta senza scegliere un nome utente[/postlink]

{{#unless isPost}}
FastComments può ora assegnare a ogni nuovo visitatore un nome utente unico e neutro, così non dovranno mai inventarne uno. Il nome utente predefinito condiviso non viene più “preso” dalla prima persona che lo utilizza.
{{/unless}}

{{#isPost}}

### Novità

Se il tuo sito non prevede il login, a un visitatore che vuole lasciare un commento vengono richieste due cose: un'email e un nome utente.
L'email è semplice, ma il nome utente deve essere unico, sarà pubblico e devono pensarci subito.

Questa versione elimina quel passaggio. Attiva **Generate Usernames Automatically** nella personalizzazione del widget, e ogni nuovo
visitatore arriva con un nome come `BraveOtter4172` già compilato. Può mantenerlo o sovrascriverlo. In entrambi i casi,
arriva più rapidamente alla casella del commento.

### Attivazione

Apri la tua <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
trova la sezione **Anonymization** e seleziona **Generate Usernames Automatically**. Non c'è nient'altro da configurare.

Funziona con o senza **Allow Anonymous Comments**. Se desideri ancora un'email da ogni commentatore, disattiva i commenti anonimi.
I visitatori inseriscono la loro email, il nome utente viene gestito per loro, e basta. Se non ti serve un'email,
attiva i commenti anonimi e un visitatore può commentare senza digitare nulla oltre al commento stesso.

### Cosa vedono i visitatori

Il campo del nome utente è precompilato con il nome generato. È un normale campo di input, quindi chiunque voglia essere conosciuto come
qualcos'altro può semplicemente sostituirlo. Nulla è nascosto e nulla è imposto.

I nomi sono composti da due parole e un numero, quindi sono leggibili e neutri. Nessuno finisce come `user_83729`.

### Ogni nome è unico

Un nome generato viene verificato rispetto agli account esistenti prima di essere proposto, e viene riservato per la sessione del browser del visitatore,
così il visitatore successivo non riceve lo stesso. Gli utenti connessi, gli utenti SSO e i visitatori che hanno già
commentato non ricevono mai un nuovo nome. Mantengono quello che hanno.

Un visitatore di ritorno che inserisce un'email già usata viene associato al suo account esistente, così una seconda visita
non crea una seconda identità anche se il browser è stato cancellato nel frattempo.

### Correzione bug - Il nome utente predefinito è ora davvero condiviso

Alcuni di voi hanno usato **Default Username** con un valore come "Anonymous" per avvicinarsi a questo risultato. C'era un
problema. I nomi utente sono unici, quindi il primo visitatore che commenta come "Anonymous" con la propria email possedeva il nome, e il
visitatore successivo con un'email diversa veniva informato che il nome utente era già preso.

È stato risolto. Il nome utente predefinito è ora trattato come un nome visualizzato condiviso piuttosto che come un'identità. Ogni visitatore che
lo mantiene ottiene il proprio account in background, e tutti loro appaiono come "Anonymous". I nomi utente che i visitatori digitano
da soli devono ancora essere unici, come prima.

Se imposti entrambi, prevale il nome generato.

### Documentazione

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a>
copre l'opzione e come interagisce con le altre impostazioni di commenti anonimi.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a>
descrive il comportamento del nome condiviso.

### In conclusione

Questo proviene da un cliente che gestisce un sito dove i visitatori sono pazienti che potrebbero lasciare solo un unico
feedback. Chiedere loro un'email e un nome utente unico era una domanda in più. Se un'impostazione si frappone tra
i tuoi lettori e la casella dei commenti, faccelo sapere qui sotto.

Saluti!

{{/isPost}}