---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Ora È React[/postlink]

{{#unless isPost}}
Hai bisogno di incorporare commenti in un'applicazione sviluppata con React? Abbiamo quello che fa per te.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Novità

FastComments ora ha un componente React che è paritario in funzionalità con il nostro widget VanillaJS.

Abbiamo deciso di chiamare la libreria fastcomments-react. Puoi trovare il repository su GitHub con il codice sorgente <a href="https://github.com/FastComments/fastcomments-react" target="_blank">qui</a>.

Il repository contiene anche un esempio di utilizzo del widget.

È disponibile su NPM, che puoi trovare <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">qui</a>.

#### Come Funziona

Il funzionamento di questo nuovo componente è che il componente React è un wrapper attorno all'esistente widget FastComments.
 
Questo significa che se aggiungiamo funzionalità ai nostri componenti esistenti o risolviamo bug, trarrai subito vantaggio!

#### Perché Il Nuovo Componente?

Abbiamo scritto il widget FastComments VanillaJS per essere il cuore della nostra attività (insieme al backend principale). Questo significa che lo abbiamo progettato per essere esteso proprio come stiamo facendo ora.

Senza questa nuova libreria React, avresti potuto integrare FastComments nella tua applicazione scrivendo la tua libreria, ma sarebbe stato un grande ostacolo all'adozione. Supportando 
direttamente React, rendiamo l'adozione di FastComments molto più facile per questi tipi di clienti.

#### Applicazioni a Pagina Singola?

FastComments supporta le SPA alla sua base. Il componente monitora i cambiamenti all'oggetto di configurazione - quindi se aggiorni la pagina corrente (chiamata urlId), il widget
verrà ridefinito.

#### Cosa Cambia per i Clienti Esistenti

Niente cambia per i clienti esistenti - e non c'è **niente** di sbagliato nell'utilizzare la versione VanillaJS di FastComments per nuovi progetti. fastcomments-react dipende dalla versione VanillaJS
di FastComments e sempre lo farà. Se rilasceremo componenti Angular o Vue, seguiremo lo stesso modello.

Il nostro widget VanillaJS è un cittadino di prima classe di FastComments. Questa release è completamente *additiva* alla nostra infrastruttura.

Inoltre, il widget VanillaJS rimane ancora una grande soluzione per inserire commenti incorporati in qualsiasi pagina web che non utilizza un framework, come una pagina statica.

#### In Conclusione

Rilasciando la libreria fastcomments-react, e future librerie, speriamo di rendere più semplice per gli sviluppatori adottare FastComments mentre utilizzano metodologie di sviluppo moderne. 

Saluti!

{{/isPost}}

---