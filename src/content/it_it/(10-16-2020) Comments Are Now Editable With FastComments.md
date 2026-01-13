---
[category:Features]
###### [postdate]
# [postlink]I Commenti Sono Ora Editabili Con FastComments[/postlink]

{{#unless isPost}}
Un aggiornamento molto atteso, ora puoi modificare i commenti lasciati con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Novità

I commenti lasciati con FastComments possono ora essere modificati - sia che tu sia loggato o meno.

<img src="images/fc-editing-demo.gif" alt="Editing Demo GIF (17mb)" title="Editing Demo" />

È comprensibile che sia stata una delle funzionalità più richieste, e siamo felici di raggiungere questo traguardo con la nostra base utenti.

#### Come Funziona

Gli utenti loggati possono sempre modificare i propri commenti. Per i commentatori anonimi, i nostri server forniscono un'intervallo temporaneo di 24 ore per modificare il loro commento dopo aver commentato, a patto che non chiudano il loro browser. Ad esempio, ciò significa che un commentatore anonimo può commentare e poi modificare il proprio commento per correggere eventuali errori di battitura, senza mai loggarsi!

Se il commentatore anonimo chiude il browser, non sarà in grado di modificare il proprio commento a meno che non faccia clic sul link magico inviato alla propria email.

Per ulteriore sicurezza, la chiave di modifica temporanea sarà invalidata in caso di tentativo di indovinare la chiave in modo errato.

#### Perché Adesso, dopo così tanto tempo?

Come per tutte le modifiche al widget lato client, dobbiamo fare attenzione a non gonfiarne le dimensioni. Questa funzionalità aggiunge considerevoli dimensioni al codice sorgente centrale dei commenti (circa 1kb gzippato - circa un aumento del 10%). 
Volevamo assicurarci che ciò non diminuisse le prestazioni di FastComments e volevamo garantire che funzionasse correttamente con le nostre funzionalità di commento in tempo reale. Inoltre, volevamo che la funzionalità si adattasse al caso d'uso più comune dei nostri clienti: il commento anonimo.

#### Modifica dei Commenti in Tempo Reale

Proprio come commentare e votare - la modifica avviene in tempo reale. Se due utenti sono sulla stessa pagina e un utente modifica il proprio commento, l'altro utente vedrà l'aggiornamento.

#### Abilitare la Modifica dei Commenti

Abbiamo completato il rollout della modifica dei commenti come impostazione predefinita per tutti i nostri clienti. Attualmente, non può essere disabilitata.

#### E Adesso?

Piani di rilasciare anche la possibilità di eliminare i commenti in un futuro aggiornamento.

#### Integrazioni di Terze Parti

Modificare un commento farà propagare l'evento a qualsiasi integrazione che hai - come WordPress. Se utilizzi il nostro plugin per WordPress, aggiungere un commento aggiorna
la tua installazione di WordPress in background, in modo da mantenere una copia dei tuoi dati. Se modifichi un commento, seguiamo la stessa logica e aggiorniamo la copia nella tua installazione di WordPress. Questo si applica ad altre integrazioni, non solo a WordPress.

#### In Conclusione

Sappiamo che questa funzionalità è stata a lungo attesa da alcuni. Come per tutti i principali rilasci, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità.

Saluti!

{{/isPost}}