---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Annuncio del Trust Factor di FastComments[/postlink]

{{#unless isPost}}
FastComments utilizza ora più euristiche quando determina ciò che è e ciò che non è spam.
{{/unless}}

{{#isPost}}

### Novità

A partire dal 16 novembre 2023, FastComments ha iniziato ad ampliare il modo in cui determina l'affidabilità
degli utenti per ridurre la frustrazione legata alla gestione dei filtri anti-spam.

### Impatto sugli Utenti

Se sei un membro di lungo termine di un sito esistente e i tuoi commenti sono stati catturati
dal filtro anti-spam, questa modifica è per te.

Abbiamo ricevuto numerosi resoconti di utenti su siti che fanno cose che ai filtri anti-spam non piacciono, come condividere molti link e così via, e questi
commenti finiscono nello spam e vengono bloccati o attendono l'approvazione del moderatore a seconda della configurazione del sito.

### Impatto per gli Amministratori di Sito e Moderatori

1. Potresti vedere meno commenti automaticamente contrassegnati come spam dai tuoi utenti più attivi.
2. Questo non modifica la rilevazione dello spam basata sulla blacklist di parole/frasi. Linguaggio volgare e frasi filtrate causeranno comunque il caricamento dei commenti nello spam se hai questa impostazione.

Il numero del Trust Factor stesso non è attualmente reso visibile agli amministratori di sito o ai moderatori, tuttavia
questo è qualcosa che esploreremo in futuro.

### Come viene Calcolato il Trust Factor

Il Trust Factor è un numero che va da `0` a `100` e viene mantenuto su base per sito.

Le seguenti variabili sono utilizzate per determinare il trust factor:

- Età dell'interazione con il sito.
- Numero di commenti approvati.
- Numero di commenti appuntati.

Se sei stato un membro di un sito per oltre sei mesi e hai lasciato oltre 50 commenti approvati,
avrai un punteggio di fiducia perfetto di `100`.

In caso contrario, la formula è la seguente e si evolverà nel tempo:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Dove:

    timeFactor = 100 * TimeSinceFirstComment / SeiMesi
    commentFactor = NumeroDiCommentiApprovati
    pinFactor = NumeroDiCommentiAppuntati * 20

Potresti notare il `* 20` qui - i commenti appuntati hanno un alto peso. Se i moderatori stanno appuntando
i tuoi commenti, è probabile che tu sia considerato un utente abbastanza fidato.

### Per Sviluppatori & Problemi

Nell'API, `UserBadgeProgress` ora ha `autoTrustFactor` e `manualTrustFactor` esposti.

`autoTrustFactor` è calcolato da noi e non è scrivibile tramite l'API.

Se desideri configurare il trust factor tu stesso, puoi definire `manualTrustFactor`. Il sistema
utilizzerà quindi questo valore invece, e continueremo a mantenere separatamente il valore di `autoTrustFactor`.

### Abuso del Trust Factor

Come per tutte le cose, ci aspettiamo che ci siano abusi. Le persone costruiranno relazioni con una comunità e poi useranno
l'account per pubblicare spam. Tuttavia, riteniamo che con impostazioni intelligenti (sei mesi, 50+ commenti), abbiamo fissato la soglia
abbastanza alta da rendere questo non conveniente per la maggior parte degli spammer. Una volta che iniziano a pubblicare spam, il loro account può essere immediatamente
sospeso dai moderatori. In futuro potremmo anche consentire ai moderatori di regolare il trust factor.

### In Conclusione

Come per tutti i rilasci principali, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}