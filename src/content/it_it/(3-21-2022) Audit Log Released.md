---
[category:Security]

###### [postdate]
# [postlink]Audit Log Released[/postlink]

{{#unless isPost}}FastComments ora fornisce un registro dettagliato di tutte le modifiche apportate tramite la piattaforma.{{/unless}}

{{#isPost}}

### Novità

A partire da marzo, FastComments include ora auditarie dettagliate con il piano Pro e per tutti i clienti enterprise esistenti.

Tutte le azioni amministrative, sia che si tratti di accesso ai dati, modifica di un commento o sblocco di un utente, sono tracciate e indicizzate nel registro delle audit.

### Come utilizzarlo

Il Registro Audit può essere accesso andando su `Manage Data` e poi `Audit Logs`. Un link diretto è [qui](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Per iniziare, vedrai una pagina simile alla seguente:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Registro Audit" />
</div>

Da qui, puoi cercare per nome utente, indirizzo IP, tipo di azione o risorsa.

Ad esempio, filtrando per risorsa:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Selezione Risorsa Registro Audit" />
</div>

Possiamo anche approfondire i dettagli di un'entrata nel registro delle audit e persino vedere l'oggetto correlato che è stato modificato.

Ad esempio, possiamo approfondire un'entrata per l'abbanimento di un utente:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Dettagli Entrata Registro Audit" />
</div>

Qui possiamo vedere chi ha bannato l'utente (un utente con il nome utente `winrid`). Possiamo vedere che si tratta di un ban permanente, e abbiamo anche l'ID utente e l'email bannati, insieme al testo
per cui sono stati bannati.

Possiamo vedere l'IP che ha creato il ban, ma l'IP del commentatore originale è intenzionalmente omesso per la loro privacy.

Per vedere tutti gli eventi di `winrid`, possiamo semplicemente cliccare sull'icona di filtro a destra, accanto al loro nome utente.

### Restrizione dell'accesso

I dati nel registro delle audit possono essere accessibili solo da utenti con il permesso `Manage Data`.

### Conservazione

Tutte le voci nel registro delle audit vengono mantenute per due anni. Tuttavia, il registro delle audit viene svuotato quando il tuo account viene eliminato.

### Accesso API

[La documentazione per l'API del Registro Audit è qui.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Troverai che il registro delle audit può essere
ordinato e suddiviso in pagine in diversi modi a seconda del tuo caso d'uso.

### Clienti Esistenti

Se sei su un piano Pro o equivalente, scoprirai che il registro delle audit è stato automaticamente abilitato! Se desideri ottenere accesso, contatta il tuo rappresentante di supporto.

### Ciò che è omesso

L'unico tipo di modifiche che sono omesse sono i commenti veri e propri e i loro voti. Questo perché abbiamo scoperto che i nostri clienti sono principalmente interessati al lato amministrativo durante l'auditing, e non necessariamente interessati ad auditare ciò che le persone commentano. Questi tipi di azioni aggiungono anche rumore considerevole al registro.

Tuttavia, se questo è un requisito, contattaci e possiamo discutere l'abilitazione di questo per te.

### In conclusione

Speriamo che tu trovi questa area della nostra offerta utile, l'interfaccia utente facile da usare e l'API veloce. 

Saluti!

{{/isPost}}