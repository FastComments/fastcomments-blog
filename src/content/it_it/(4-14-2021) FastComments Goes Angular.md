---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Goes Angular[/postlink]

{{#unless isPost}}
Hai bisogno di incorporare commenti in un'applicazione sviluppata con Angular? Ci pensiamo noi.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

#### Novità

FastComments ora ha un componente Angular che è alla pari in termini di funzionalità con il nostro widget VanillaJS.

Abbiamo deciso di chiamare la libreria ngx-fastcomments. Puoi trovare il repository GitHub con il codice sorgente <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">qui</a>.

Il repository contiene anche un esempio di utilizzo del widget sotto forma di uno spazio di lavoro Angular.

Puoi trovarlo su NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">qui</a>.

#### Come funziona

Il modo in cui funziona questo nuovo componente è che il componente Angular è un wrapper attorno all'esistente widget FastComments.
 
Questo significa che se aggiungiamo funzionalità ai nostri componenti esistenti o correggiamo bug, ne beneficerai subito!

#### Perché il nuovo componente?

Abbiamo scritto il widget FastComments VanillaJS per essere il cuore della nostra attività (insieme al backend principale). Questo significa che lo abbiamo progettato per essere esteso proprio come stiamo facendo ora.

Senza questa nuova libreria Angular, avresti potuto integrare FastComments nella tua applicazione scrivendo la tua libreria, ma sarebbe stata una grande barriera all'adozione. Supportando Angular direttamente, rendiamo l'adozione di FastComments molto più facile per questo tipo di clienti.

#### Applicazioni a pagina singola?

FastComments supporta le SPAs alla sua base. Il componente monitora le modifiche all'oggetto di configurazione usando il rilevamento delle modifiche. Ad esempio, se aggiorni la pagina corrente (chiamata urlId), il widget si ri-renderizzerà. Questo rende casi d'uso come il passaggio alla modalità scura o l'aggiunta della paginazione facili da implementare.

#### Cosa cambia per i clienti esistenti 

Nulla cambia per i clienti esistenti - e non c'è **niente** di sbagliato nell'usare la versione VanillaJS di FastComments per nuovi progetti. ngx-fastcomments dipende dalla versione VanillaJS di FastComments e sempre dipenderà. Se rilasceremo nuovi componenti, seguiremo lo stesso modello.

Il nostro widget VanillaJS è un cittadino di prima classe di FastComments. Questo rilascio è completamente *aggiuntivo* alla nostra infrastruttura.

Inoltre, il widget VanillaJS rimane comunque una grande soluzione per inserire commenti incorporati in qualsiasi pagina web che non sta usando un framework, come una pagina statica.

#### In conclusione

Rilasciando la libreria ngx-fastcomments e future librerie, speriamo di poter rendere più facile per gli sviluppatori adottare FastComments mentre usano metodologie di sviluppo moderne.

Saluti!

{{/isPost}}

---