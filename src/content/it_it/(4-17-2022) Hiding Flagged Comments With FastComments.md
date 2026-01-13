---
[category:Moderazione]

###### [postdate]

# [postlink]Nascondere i commenti segnalati con FastComments[/postlink]

{{#unless isPost}}La segnalazione è stata aggiunta a FastComments. Inoltre, i commenti possono essere nascosti in base al numero di volte che sono stati segnalati.{{/unless}}

{{#isPost}}

### Novità

Gli utenti possono ora segnalare commenti con le conversazioni sui commenti ospitate da FastComments. I moderatori possono filtrare i commenti segnalati e vedere quante volte sono stati segnalati.

La piattaforma può anche essere configurata per nascondere automaticamente i commenti quando sono stati segnalati un certo numero di volte.

### La Prospettiva del Commentatore

Quando un utente ha una sessione valida, può segnalare commenti tramite il menu di modifica del commento. 

Questo è compatibile con i seguenti tipi di sessione:

- Sessioni anonime
- FastComments.com User Session (Utilizzando i cookie di terze parti)
- SSO sicuro
- SSO semplice

I commenti segnalati continueranno ad essere mostrati fino a quando non sarà raggiunta la soglia di segnalazione configurata.

### Per i Moderatori

I moderatori possono vedere i commenti segnalati utilizzando il filtro `Flagged`, disponibile anche direttamente [qui](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Inoltre, il numero di volte in cui un commento è stato segnalato è visibile ai Moderatori e agli Amministratori.

Nota:

- Ripristinare il conteggio delle segnalazioni per un commento che è stato `Non Approvato` tramite la soglia `Non Approvata` comporterà la `Ri-Approvazione` del commento.
- `Ri-Approvare` un commento `Segnalato` comporterà **il ripristino del conteggio delle segnalazioni**.
- Questa è una funzionalità creata per convenienza.

### Configurazione

La configurazione dell'hiding automatico dei commenti segnalati può essere effettuata nella [Pagina delle Impostazioni di Moderazione Commenti](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Client Esistenti

Abbiamo completato il rollout di questa funzionalità a tutti i clienti esistenti in tutti i livelli. L'hiding automatico dei commenti non approvati non è abilitato per i clienti nuovi o esistenti.

### In Conclusione

Speriamo che trovi questa nuova serie di funzionalità utile e facile da usare. 

Saluti!

{{/isPost}}

---