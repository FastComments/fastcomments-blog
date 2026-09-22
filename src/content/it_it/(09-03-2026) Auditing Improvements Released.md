[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Miglioramenti di Audit Rilasciati[/postlink]

{{#unless isPost}}
The audit log now shows who or what each event affected by name, and you can search on it. There's also now date range, sub-tenant search, field-level diffs on updates, and matching API filters.
{{/unless}}

{{#isPost}}

### Novità

Il registro di audit ha sempre registrato chi ha eseguito un'azione e su cosa è stata eseguita. Questa versione riguarda rendere quel record leggibile e ricercabile senza lasciare la pagina.

Se volevi sapere cosa è successo a un moderatore specifico, dovevi prima trovare il suo ID, e se quel moderatore era stato rimosso, non c'era più nulla contro cui confrontare l'ID. L'evento indicava che qualcosa era stato eliminato, da chi e quando, ma per alcune risorse i nomi mancavano.

Ora il nome viene catturato insieme all'ID al momento dell'evento, quindi sopravvive all'eliminazione e puoi cercarlo.

### La colonna **Affected**

C'è una nuova colonna **Affected** nella tabella che mostra la persona o l'oggetto su cui l'evento ha agito, per nome. Per una persona appare come `jsmith (jsmith@example.com)`. Per una personalizzazione di widget o un gruppo di moderazione è il nome che gli hai assegnato. Per un file multimediale è il nome del file che hai caricato.

Sopra la tabella c'è una casella di ricerca corrispondente, **Who or what was changed**. Digita un nome, un indirizzo email o un ID, e troverà gli eventi che hanno interessato quella persona o quell'oggetto. Non devi sapere quale dei tre hai, e non devi prima cercare un ID interno.

Gli eventi registrati prima di questa versione non hanno un nome associato, ma hanno ancora l'ID che hanno sempre avuto, quindi la stessa casella di ricerca li trova per ID.

### Intervallo di date

La riga dei filtri ora ha un menu a discesa **Date Range** con Ultimi 30 giorni, Ultimi 90 giorni, Ultimo anno, Tutto il tempo e **Custom range**, che mostra i selettori di data Da e A.

Un intervallo di date è di gran lunga il modo più semplice per restringere una ricerca, e combinarlo con gli altri filtri è il modo più veloce per trovare qualcosa.

### Account gestiti

Se il tuo account gestisce altri tenant, c'è una casella di controllo **Include sub-tenants**. Selezionandola, la ricerca avviene sul tuo account e su tutti i tenant che gestisce in un'unica passata, con una colonna **Tenant** che mostra da quale account proviene ogni evento.

Fino a ora il registro di ogni tenant poteva essere letto solo singolarmente, quindi rispondere a "qualcuno ha toccato una delle nostre proprietà questa settimana" significava passare da uno all'altro a turno.

### Gli aggiornamenti ora registrano cosa è cambiato

Modificare un membro del team registrava il set risultante di permessi. Questo ti dice quali sono i permessi attuali, ma non quali erano, quindi "chi ha rimosso l'accesso alla fatturazione di questa persona, e quando" era impossibile da rispondere.

Gli eventi di aggiornamento ora includono una mappa `changes` solo dei campi che sono effettivamente cambiati, ciascuno con il valore precedente e quello nuovo. I campi non modificati sono omessi, così una modifica di permesso appare come una singola riga anziché un muro di booleani.

### Descrizioni e il dispositivo dietro una modifica

Gli eventi distruttivi ora includono una semplice frase che descrive cosa è accaduto, come "Removed user from the account". Le visualizzazioni di pagina avevano descrizioni mentre le cancellazioni no, il che era invertito.

Gli eventi che modificano qualcosa registrano anche il browser che ha effettuato la modifica. Le sessioni sono registrate come hash in modo che le azioni di una persona possano essere correlate senza che il registro memorizzi qualcosa che possa essere riprodotto.

### Altri miglioramenti

- Alcune correzioni relative alla paginazione e alle combinazioni di filtri.
- Gli eventi di login mostravano una colonna **Who** vuota. Il nome utente era nel record tutto il tempo ma la pagina non lo leggeva.
- La colonna azione visualizzava gli eventi di login come N/A, perché "Login" mancava dall'elenco dei nomi delle azioni.
- Le pagine del registro di audit non riuscivano a nominare gli utenti SSO, mostrando "Missing User" al loro posto. Ora vengono risolti correttamente.
- La pagina è molto più veloce su account con lunghi storici.

### Per l'API

L'endpoint `/api/v1/audit-logs` ha ottenuto filtri corrispondenti: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` per la ricerca di sottostringhe, e `includeManagedTenants`. Le risposte ora includono `targetId`, `targetLabel` e `ua`.

Due cambiamenti degni di nota se già utilizzi questo endpoint. `before` ora funziona da solo, mentre in precedenza veniva ignorato a meno che non fosse passato anche `after`. E `limit` è ora limitato a 10k, mentre prima non aveva alcun limite. Il valore predefinito rimane invariato a 1k.

### Documentazione

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">La guida API AuditLogs</a> copre i nuovi parametri di query, e <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">il riferimento alla struttura AuditLog</a> copre i nuovi campi.

Se non hai mai usato il registro di audit, [the original release post](/(3-21-2022)-audit-log-released.html) spiega dove si trova, chi può leggerlo e per quanto tempo le voci vengono conservate. Tutto ciò è invariato.

### In conclusione

Siamo felici di poter continuare a migliorare FastComments.
Se cerchi qualcosa nel tuo registro e non riesci a trovarla, faccelo sapere qui sotto.

Saluti!

{{/isPost}}

---