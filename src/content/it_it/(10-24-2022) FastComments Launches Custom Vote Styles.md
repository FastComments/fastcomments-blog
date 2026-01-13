---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lancia Stili di Votazione Personalizzati[/postlink]

{{#unless isPost}}
Hai mai voluto passare dallo stile di voto predefinito su/giù a semplicemente un'icona a forma di cuore? Ora puoi.
{{/unless}}

{{#isPost}}

### Novità

In precedenza, per personalizzare la barra di voto, era necessario scrivere codice e CSS personalizzati. Questo significava anche che se volevi fare qualcosa come abilitare il voto anonimo, ma disabilitare i voti negativi,
ciò non richiedeva solo codice personalizzato, ma le richieste di voto non potevano essere convalidate dal lato server. Ciò significava che le persone potevano ancora votare negativamente in modo anonimo chiamando direttamente il server, il che è accaduto
in alcune comunità.

Ora abbiamo introdotto il concetto di `voteStyle` nella piattaforma, con il primo nuovo stile di voto che è l'icona a forma di cuore richiesta da molti.

Quando definito tramite l'interfaccia di personalizzazione del widget, questo aggiunge anche convalida alla piattaforma, che impedisce del tutto i voti negativi, in modo che gli hacker non possano più bypassare l'interfaccia e votare negativamente un utente fino all'oblio,
come potrebbe accadere se il voto anonimo fosse abilitato. 

### Come Usarlo

Vai all'[Interfaccia di Personalizzazione del Widget](https://fastcomments.com/auth/my-account/customize-widget) e seleziona `Heart` sotto `Vote Style`.

### Documentazione

I documenti ufficiali per questa funzionalità sono [disponibili su docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Chi Può Usarlo

Tutti i clienti attuali e nuovi di FastComments, su tutti i livelli, ora hanno accesso a stili di voto personalizzati. Questa funzionalità è supportata solo dalla v2 del widget per commenti e versioni successive.

### Ottimizzazioni

Il codice per i diversi stili di voto non è incluso nel download client del widget a meno che non sia abilitato, per prevenire il sovraccarico del prodotto.

### Guardando Avanti

Ora abbiamo la capacità di aggiungere diversi tipi di votazione e reazioni, cosa che potremmo fare in futuro.

### In Conclusione

Come il resto di FastComments, speriamo che tu trovi questa funzionalità veloce e facile da usare.

Saluti!

{{/isPost}}

---