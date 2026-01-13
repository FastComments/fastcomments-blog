---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]La Formazione per il Riconoscimento dello Spam è Ora per Inquilino[/postlink]

{{#unless isPost}}
FastComments ha addestrato il suo classificatore per la prevenzione dello spam per anni. Ora, le capacità di addestramento sono state aggiornate.
{{/unless}}

{{#isPost}}

### Novità

Quando contrassegni un commento come spam, o non spam, FastComments impara da questo per il futuro
riconoscimento dello spam.

Tuttavia, questo apprendimento avveniva nello stesso posto per tutti. Significa che l'addestramento
allo spam di un altro inquilino influenzava il tuo. Ci sono pro e contro in questo. Prima di tutto, benefici
automaticamente di ciò che altri moderatori considerano spam. Il lato negativo è che se commettono un errore, o se
hanno contenuti che sono diversi dai tuoi.

Ad esempio, se un altro inquilino ha un pubblico che riguarda i simulatori di corsa, potrebbero
contrassegnare molti commenti con "spam criptovalute" come spam. Di conseguenza, il classificatore inizia a
relazionare il testo relativo alle criptovalute come spam.

Ma, poniamo che tu abbia un sito orientato alle criptovalute. Ora molti dei tuoi commenti iniziano a
essere contrassegnati come spam quando non lo sono. Alcuni di essi potrebbero giustificabilmente essere spam, ma molti potrebbero non esserlo.

### Addestramento Isolato

Quando un nuovo inquilino si unisce a FastComments, per impostazione predefinita il suo riconoscimento dello spam sarà addestrato sul
lavoro passato di altri inquilini.

Man mano che inizi a contrassegnare i commenti come spam/non spam, il sistema passerà ad utilizzare il tuo
set di formazione.

### Aggiornamento 20 Settembre 2023

Abbiamo scoperto che questa configurazione non era ideale per tutti per impostazione predefinita. L'Addestramento Isolato per lo Spam non è solo su
opt-in. Puoi abilitarlo nella pagina delle Impostazioni di Moderazione selezionando "Isolato" nell'opzione "Filtro Antispam".

L'impostazione predefinita è tornata ad essere "Condiviso".

### Dal Vivo

Il set di addestramento per il tuo inquilino viene ora sempre ricostruito ogni volta che contrassegni un commento come spam o non spam.

In precedenza, il sistema ricostruiva periodicamente l'indice dello spam. Questo veniva fatto per proteggere il sistema da
carichi eccessivi. Dopo un paio di anni abbiamo scoperto che il carico dell'addestramento continuo non è molto alto, quindi abbiamo
aggiornato il sistema per aggiornare automaticamente l'indice ogni volta che fai una modifica.

Questi indici sono memorizzati al margine nei nostri server applicativi, e si aggiornano tutti
indipendentemente per mantenere il sistema veloce e reattivo.

### Come Ottenerlo

Questa funzionalità è stata distribuita a tutti i clienti!

### In Conclusione

Come tutte le principali versioni, siamo lieti di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}