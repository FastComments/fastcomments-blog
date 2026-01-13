---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Incorporare Commenti in un Sito VueJS Con FastComments[/postlink]

{{#unless isPost}}
Hai bisogno di incorporare commenti in un'applicazione sviluppata con Vue? Ci siamo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Novità

FastComments ora ha un componente Vue che è alla pari con il nostro widget VanillaJS.

Abbiamo deciso di chiamare la libreria fastcomments-vue. Puoi trovare il repository GitHub con il codice sorgente <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">qui</a>.

Il repository contiene anche esempi di utilizzo del widget.

È disponibile su NPM, che puoi trovare <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">qui</a>.

#### Come Funziona

Il modo in cui funziona questo nuovo componente è che il componente Vue è un wrapper attorno al widget FastComments esistente. 

Questo significa che se aggiungiamo funzionalità ai nostri componenti esistenti o risolviamo bug, potrai comunque beneficiarne subito!

#### Perché il Nuovo Componente?

Abbiamo scritto il widget FastComments VanillaJS per essere il core della nostra attività (insieme al backend principale). Questo significa che l'abbiamo progettato per essere esteso proprio come stiamo facendo ora.

Senza questa nuova libreria Vue, avresti potuto integrare FastComments nella tua applicazione scrivendo la tua libreria, ma sarebbe stata un'entrata difficile da superare. Supportando direttamente Vue rendiamo l'adozione di FastComments molto più facile per questo tipo di clienti.

#### Vue 3.0

Abbiamo un componente costruito specificamente per Vue 3.0 chiamato <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Applicazioni Single Page?

FastComments supporta SPAs nel suo core. Il componente monitora le modifiche all'oggetto di configurazione - quindi se aggiorni la pagina corrente (chiamata urlId) il widget
verrà ri-renderizzato.

#### Cosa Cambia per i Clienti Esistenti

Non cambia nulla per i clienti esistenti - e non c'è **niente** di sbagliato nell'usare la versione VanillaJS di FastComments per nuovi progetti. fastcomments-vue dipende dalla versione VanillaJS
di FastComments e sempre lo farà. Se rilasceremo componenti Angular o Vue, seguiremo lo stesso modello.

Il nostro widget VanillaJS è un cittadino di prima classe di FastComments. Questa versione è completamente *aggiuntiva* alla nostra infrastruttura.

In aggiunta, il widget VanillaJS rimane ancora una grande soluzione per integrare commenti in qualsiasi pagina web che non utilizza un framework, come una pagina statica.

#### In Conclusione

Rilasciando la libreria fastcomments-vue, e le future librerie, speriamo di rendere più facile per gli sviluppatori adottare FastComments mentre utilizzano metodologie di sviluppo moderne.

Saluti!

{{/isPost}}