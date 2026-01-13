---
[category:UI & Customization]

###### [postdate]
# [postlink]Modalità Dark senza interruzioni aggiunta[/postlink]

{{#unless isPost}}
FastComments ha sempre supportato la modalità scura. Tuttavia, richiedeva un ricaricamento del widget dei commenti per passare alla modalità scura. Questo è stato risolto.
{{/unless}}

{{#isPost}}

### Novità

FastComments ha sempre supportato la modalità scura. Tuttavia, richiedeva un ricaricamento del widget dei commenti per passare alla modalità scura.

Questo significa che se un sito utilizzava la modalità scura, o consentiva agli utenti di passare da una modalità chiara a una scura e viceversa, saremmo
completamente rimuovere il widget dei commenti dal browser e ricaricarlo. Questo è stato fatto per motivi tecnici per semplificare il prodotto
al momento del lancio iniziale poiché lo stato doveva essere comunicato avanti e indietro tra la pagina principale e l'iframe del widget.

Alla luce del fatto che la stagione spettrale è finita, l'interruttore della modalità scura è stato migliorato. Il widget dei commenti ora supporta transizioni senza interruzioni tra le modalità chiara
e scura. Tuttavia, richiede ancora di passare il flag `hasDarkBackground` quando applicabile.

### Per gli sviluppatori e attenzione

Per comunicare al widget dei commenti che il tuo sito è in modalità scura - o ha uno sfondo scuro applicato - devi passare il
flag `hasDarkBackground`. Questo non cambia. Tuttavia, ora quando chiami `instance.update(newConfig)` (o cambi lo stato
in una delle nostre librerie come React, Svelte, ecc.), rileveremo se l'unico parametro cambiato è `hasDarkBackground` e, in tal caso,
aggiorneremo il widget dei commenti in modo delicato. Il widget caricherà asincronicamente l'estensione della modalità scura in background e aggiornerà il suo stile
se necessario.

Un'importante avvertenza è che quando passi `newConfig` - questo deve essere un oggetto completamente nuovo affinché questa funzione funzioni.

### In conclusione

Come per tutte le versioni principali, siamo felici di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente questa funzione. Facci sapere
qui sotto se scopri problemi.

Saluti!

{{/isPost}}

---