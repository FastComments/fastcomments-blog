---
[category:API & Development]

###### [postdate]
# [postlink]Impostare SSO con FastComments[/postlink]

{{#unless isPost}}
FastComments offre soluzioni SSO per varie piattaforme e integrazioni personalizzate.
{{/unless}}

{{#isPost}}

# Panoramica

## Che cos'è SSO?

SSO, o accesso single-sign-on, è un insieme di convenzioni utilizzate per consentire a te o ai tuoi utenti di utilizzare FastComments senza dover creare un altro account.

Presumendo che tu non consenta commenti anonimi, è necessario un account per commentare con FastComments. Rendiamo questo processo di registrazione molto semplice: l'utente deve semplicemente lasciare il proprio email quando commenta. Tuttavia, comprendiamo che anche questo rappresenta un'ulteriore frizione che alcuni siti vogliono evitare.

## Come posso ottenerlo?

Tutti i tipi di account attualmente hanno accesso a SSO e supporto. Tuttavia, il numero massimo di utenti SSO varierà a seconda del tuo pacchetto.

### Utenti WordPress

Se stai utilizzando il nostro <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin WordPress</a>, non è necessario scrivere alcun codice! Basta andare alla pagina di amministrazione del plugin, fare clic su Impostazioni SSO e poi abilitare.

Questo ti porterà a una procedura guidata di clic con un solo pulsante che creerà la tua chiave API, la invierà alla tua installazione WordPress e attiverà SSO. Abbiamo semplificato il tutto in un unico clic per te.

Nota che se stai installando il plugin per la prima volta, dovrai seguire il processo di configurazione prima di vedere la pagina di amministrazione con il pulsante Impostazioni SSO.

### Integrazioni personalizzate

Il SSO di FastComments utilizza la crittografia HMAC-SHA256 come meccanismo per implementare SSO. Prima esamineremo l'architettura generale, forniremo esempi e passaggi dettagliati. Tuttavia, alla fine di questo articolo ci sono istruzioni per **migrando da Disqus e Commento**.

Il flusso appare così:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagramma SSO di FastComments" title="Diagramma SSO di FastComments" class="lozad" />
</div>

Non devi scrivere nuovi endpoint API con il SSO di FastComments. Basta crittografare le informazioni dell'utente utilizzando la tua chiave segreta e passare il payload al widget dei commenti.

Forniamo esempi di codice completamente funzionanti in vari linguaggi/runtime inclusi NodeJS, Java/Spring e PHP vanilla. Sebbene utilizziamo ExpressJS nell'esempio NodeJS e Spring nell'esempio Java, non sono richiesti framework/librerie in questi runtime per implementare il SSO di FastComments - i pacchetti crittografici nativi funzionano.

Puoi trovare il repository degli esempi di codice qui:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Esempi di codice SSO di FastComments</a>

#### Ottieni la tua chiave segreta API

La tua chiave segreta API può essere recuperata da <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">questa pagina</a>. Puoi trovare questa pagina anche andando su Il mio account, facendo clic sulla scheda API/SSO e poi cliccando su "Ottieni chiave segreta API".

#### Parametri del widget dei commenti

La documentazione API di alto livello per il widget dei commenti può essere trovata <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">qui</a> facendo clic su "Mostra opzioni avanzate". Cerca SSO sulla pagina.

Entriamo nel dettaglio di cosa significano questi parametri.

Il widget dei commenti prende un oggetto di configurazione - già lo passi se stai utilizzando FastComments per passare il tuo id cliente (chiamato tenantId).

Per abilitare SSO, passa un nuovo oggetto "sso", che deve avere i seguenti parametri. I valori devono essere generati **lato server**.

- userDataJSONBase64: I dati dell'utente in formato JSON, che poi viene codificato in Base64.
- verificationHash: L'hash HMAC-SHA256 creato da UNIX_TIME + userDataJSONBase64.
- timestamp: L'ora unix attuale. **Non deve essere nel futuro, né più di tre ore nel passato.**
- loginURL: Un URL che il widget dei commenti può mostrare per accedere l'utente.
- logoutURL: Un URL che il widget dei commenti può mostrare per disconnettere l'utente.
- loginCallback: Se fornita al posto dell'URL di accesso, una funzione che il widget dei commenti invokerà quando fa clic sul pulsante di accesso.
- logoutCallback: Se fornita al posto dell'URL di uscita, una funzione che il widget dei commenti invokerà quando fa clic sul pulsante di uscita.

#### L'oggetto utente 

L'oggetto Utente contiene il seguente schema:

- id (string, richiesto) (1k caratteri max)
- email (string, richiesto) (1k caratteri max). Nota: Deve essere unico.
- username (string, richiesto) (1k caratteri max). Nota: Il nome utente non può essere un'email. Non deve essere unico.
- avatar (string, opzionale) (3k caratteri max)
- optedInNotifications (boolean, opzionale)
- displayLabel (string, opzionale, 100 caratteri max). Questa etichetta sarà mostrata accanto al loro nome.
- websiteUrl (string, opzionale, 2000 caratteri max). Il nome dell'utente sarà collegato a questo.

#### Notifiche

Per abilitare o disabilitare le notifiche, imposta il valore di optedInNotifications su true o false rispettivamente. La prima volta che l'utente carica la pagina con questo valore nel payload SSO, le impostazioni delle notifiche saranno aggiornate.

#### Utenti VIP e Etichette Speciali

Puoi visualizzare un'etichetta speciale accanto al nome dell'utente utilizzando il campo "displayLabel" opzionale.

#### Utenti non autenticati

Per rappresentare un utente non autenticato, non devi semplicemente popolare userDataJSONBase64, verificationHash o timestamp. Fornisci un loginURL.

#### Esempi diretti per serializzare e hashare i dati dell'utente

Maggiori dettagli come esempi <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">qui (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">qui (java)</a> e
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">qui (php)</a>.


### Migrazione da Disqus SSO

Le differenze principali tra Disqus e FastComments SSO sono che Disqus utilizza SHA1 per la crittografia mentre noi utilizziamo SHA256. 
Questo significa che migrare da Disqus è facile: cambia l'algoritmo di hashing utilizzato da SHA1 a SHA256 e aggiorna i nomi delle proprietà passate all'interfaccia utente.

### Migrazione da Commento SSO

Commento utilizza un approccio SSO drasticamente diverso: richiedono che tu abbia un endpoint che loro invocano per autenticare l'utente. FastComments fa l'opposto - 
basta codificare e hashare le informazioni dell'utente utilizzando la tua chiave segreta e passarle.

Comprendiamo che qualsiasi integrazione può essere un processo complicato e doloroso. Non esitare a contattare il tuo rappresentante o utilizzare la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">pagina di supporto</a>.

{{/isPost}}

---