---
[category:Features]
###### [postdate]
# [postlink]Aggiornamento sulla gestione degli inquilini[/postlink]

{{#unless isPost}}
FastComments ha migliorato l'interazione per gestire i tuoi inquilini!
{{/unless}}

{{#isPost}}

### Novità

A partire dall'11 dicembre 2023, FastComments offre ora la possibilità di cambiare inquilini senza impersonare altri utenti inquilini.

### Pubblico Target

Questo aggiornamento non è per i commentatori o per gli amministratori di siti che gestiscono un singolo sito. Questo beneficia gli amministratori che gestiscono molti siti o inquilini soltanto.

### Impatto sugli Amministratori

In precedenza, creare inquilini e passare tra utenti era complicato. Alcuni punti dolenti comuni erano:

1. Era necessario creare un utente quando si creava il proprio inquilino, poiché quell'utente "possedeva" l'inquilino.
2. Questo significava che dovevi usare una nuova email per ogni sito, anche se volevi usare un'email/account per molti sub-inquilini.
3. Passare da un inquilino all'altro richiedeva impersonificazione, il che significava che i tuoi utenti dovevano essere duplicati tra tutti gli inquilini, con le stesse autorizzazioni, e così via.

Ora:

1. Non è necessaria la creazione di utenti quando si crea un inquilino.
2. Qualsiasi utente Super Admin con le autorizzazioni appropriate ha le stesse autorizzazioni in tutti i sub-inquilini.
3. C'è un pulsante `Switch` nell'elenco degli inquilini che mantiene il tuo utente e le autorizzazioni attuali, ma cambia in quale inquilino sei connesso.
4. Se sei un amministratore di un inquilino principale, hai autorizzazioni di moderatore nei sub-inquilini quando utilizzi il widget dei commenti.

Gli eventi sono ancora registrati nel Registro Audit per l'inquilino a cui sei passato.

### Impersonificazione

Puoi comunque impersonare gli utenti. Passa a un inquilino e vai alla pagina `Users`.

### Per Sviluppatori & Problemi

Quando utilizzi l'API `POST /tenants`, il campo `email` è ora facoltativo. La documentazione è stata aggiornata.

### Aggiornamenti Futuri

In futuro ci saranno ulteriori azioni amministrative nell'elenco degli inquilini, come la cancellazione degli inquilini e così via.

### In Conclusione

Come per tutte le principali versioni, siamo felici di aver avuto il tempo di ottimizzare, testare e rilasciare adeguatamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---