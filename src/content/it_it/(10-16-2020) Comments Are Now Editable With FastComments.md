---
[category:Features]
###### [postdate]
# [postlink]I Commenti Ora Sono Modificabili Con FastComments[/postlink]

{{#unless isPost}}
Un aggiornamento molto atteso, ora puoi modificare i commenti lasciati con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Cosa c'è di Nuovo

I commenti lasciati con FastComments possono ora essere modificati, sia che tu sia loggato che no.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Editing Demo"></video>

Comprensibilmente, è stata una delle funzionalità più richieste, e siamo felici di raggiungere questo traguardo con la nostra base utenti.

#### Come Funziona

Gli utenti loggati possono sempre modificare i loro commenti. Per i commentatori anonimi, i nostri server forniscono una finestra temporanea di 24 ore per modificare il loro commento dopo aver commentato, a condizione che non chiudano il browser. Ad esempio, questo significa che un commentatore anonimo può commentare e poi modificare il suo commento per correggere eventuali errori di battitura, senza mai effettuare il login!

Se il commentatore anonimo chiude il browser, non potrà modificare il suo commento a meno che non clicchi sul link magico inviato alla sua email.

Per ulteriore sicurezza, la chiave di modifica temporanea verrà invalidata ad ogni tentativo di indovinare la chiave in modo errato.

#### Perché Ora, dopo tanto Tempo?

Come per tutte le modifiche al widget client-side, dobbiamo essere attenti a non aumentarne la dimensione. Questa funzionalità aggiunge una dimensione considerevole al codice di commento principale (circa 1kb gzipped - circa un aumento del 10%). Volevamo assicurarci che questo non diminuisse le prestazioni di FastComments e volevamo garantire che funzionasse correttamente con le nostre funzionalità di commento live. Inoltre, volevamo che la funzionalità si adattasse al caso d'uso più comune dei nostri clienti: il commento anonimo.

#### Modifica dei Commenti Live

Proprio come commentare e votare, la modifica avviene in tempo reale. Se due utenti sono sulla stessa pagina e un utente modifica il proprio commento, l'altro utente vedrà l'aggiornamento.

#### Abilitare la Modifica dei Commenti

Abbiamo terminato il rilascio della modifica dei commenti per impostazione predefinita per tutti i nostri clienti. Attualmente, non può essere disattivata.

#### Cosa C'è Dopo?

Abbiamo in programma di rilasciare anche la possibilità di eliminare i commenti in un aggiornamento futuro.

#### Integrazioni di Terze Parti

Modificare un commento causerà la propagazione dell'evento a qualsiasi integrazione tu abbia, come WordPress. Se utilizzi il nostro plugin WordPress, aggiungere un commento aggiorna la tua installazione di WordPress in background in modo da mantenere una copia dei tuoi dati. Se modifichi un commento, seguiamo la stessa logica e aggiorniamo la copia nella tua installazione di WordPress. Questo si applica ad altre integrazioni, non solo a WordPress.

#### In Conclusione

Sappiamo che questa funzionalità è stata a lungo attesa da alcuni. Come per tutti i rilasci principali, siamo felici di aver potuto prendere tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità.

Saluti!

{{/isPost}}

---