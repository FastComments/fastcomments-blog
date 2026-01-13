---
[category:Features]
###### [postdate]
# [postlink]Introduzione ai Link dei Commentatori[/postlink]

{{#unless isPost}}
Il nostro primo rilascio del 2021 offre la possibilità (se abilitata a livello di tenant) per gli utenti di aggiungere il loro link al blog quando commentano.
{{/unless}}

{{#isPost}}

## Novità

Il nostro primo rilascio del 2021 offre la possibilità (se abilitata a livello di tenant) per gli utenti di aggiungere il loro link al blog quando commentano.

## Cosa sono i Link dei Commentatori?

Come vediamo in questo interessante scambio, uno di questi utenti ha il proprio nome utente sottolineato per indicare che si tratta di un link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Link dei Commentatori" title="Demo Link dei Commentatori" />
</div>

Questo perché il sito ha configurato la propria installazione di FastComments per consentire la compilazione di un nuovo campo quando si commenta, dove l'utente può lasciare un link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Input Link dei Commentatori" title="Input Link dei Commentatori" />
</div>

Questo link può anche essere personalizzato modificando i dettagli del tuo <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Account</a>.

## Abilitazione dei Link dei Commentatori

Creando una <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Regola di Personalizzazione</a>, possiamo abilitare il nuovo campo di input. Basta attivare l'opzione "Abilita Link dei Commentatori".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Abilitazione dei Link dei Commentatori" title="Link del Blog" />
</div>

## Sovrascrivere il Testo del Campo di Input

Per impostazione predefinita, il segnaposto del campo link del commentatore è "Il tuo URL del Blog.". Questo può essere sovrascritto tramite la stessa regola di personalizzazione utilizzata per abilitare la funzionalità, facendo clic su "Mostra Testo Personalizzato".

## Migliorare la Classificazione dello Spam

Questa funzionalità ha l'effetto collaterale di ridurre i contenuti contrassegnati come spam che potrebbero non essere spam. I commenti con poco testo e un link hanno maggiori probabilità di essere classificati come spam. Tuttavia, il link del commentatore non influisce sulla classificazione di se il commento è spam o meno. Ciò significa che un utente può commentare con il proprio link al blog con un rischio molto più basso che il commento venga contrassegnato come spam.

Per queste ragioni, i siti con elevate quantità di spam potrebbero non voler abilitare questa funzionalità, tuttavia quelli che non lo fanno troveranno valore nell'utilizzarla con determinati pubblici.

## Impatto sui Clienti Esistenti

Se sei un cliente esistente che utilizza FastComments, i tuoi utenti non subiranno alcuna modifica nella funzionalità, a meno che tu non attivi questa funzionalità. Lo stesso vale per i nuovi clienti - scoprirai che questa funzionalità è disattivata per impostazione predefinita.

## In Conclusione

Speriamo che questa funzionalità sia l'inizio di un anno migliore rispetto all'anno scorso. Buon commento!

{{/isPost}}