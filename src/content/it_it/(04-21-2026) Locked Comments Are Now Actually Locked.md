---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]I Commenti Bloccati Sono Ora Realmente Bloccati[/postlink]

{{#unless isPost}}
L'icona del lucchetto finalmente appare sui commenti bloccati, e i commenti bloccati non possono più essere modificati o eliminati fino a quando un admin non li sblocca.
{{/unless}}

{{#isPost}}

### Novità

I moderatori possono bloccare i commenti da molto tempo. Bloccare un commento impedisce nuove risposte, il che è utile quando una discussione ha esaurito il suo corso o una sub-conversazione va fuori tema.

Il problema era che "bloccato" non aveva molto peso. I lettori non avevano alcuna indicazione visiva che un commento fosse bloccato. E anche se nuove risposte erano bloccate, l'autore originale o chiunque avesse accesso alla modifica poteva comunque modificare o eliminare il commento. Questo non significa realmente bloccato. Questo aggiornamento risolve entrambi questi problemi.

### L'Icona del Lucchetto

Quando un moderatore blocca un commento, un piccolo lucchetto appare ora nell'angolo in alto a destra del commento, proprio accanto all'icona del pin. Viene visualizzato per ogni lettore - non solo per i moderatori. Sbloccare il commento lo rimuove.

L'icona onora la modalità chiara e scura, come l'icona del pin.

### Modifica ed Eliminazione Bloccate

Un commento bloccato non può esser modificato o eliminato da nessuno, inclusi admin e moderatori. Se vuoi modificare o rimuovere un commento bloccato, prima sbloccalo, apporta la modifica, poi ri-bloccato se lo desideri.

Questo si applica su ogni percorso che tocca un commento:

- Il widget visibile agli utenti nasconde le voci di menu Modifica ed Eliminazione sui commenti bloccati.
- Gli endpoint PATCH e DELETE dell'API pubblica restituiscono un errore `locked` se il commento target è bloccato.
- L'interfaccia di moderazione admin mostra l'errore di blocco se provi a eliminare senza prima sbloccare.

### Eccezioni

Un piccolo numero di percorsi bypassa intenzionalmente il blocco per poter svolgere il proprio lavoro:

- Cancellazione dell'account. Se un utente elimina il proprio account FastComments, i propri commenti vengono rimossi indipendentemente dallo stato di blocco.
- Pulizia degli utenti Tenant / SSO. Stessa idea per la rimozione degli utenti a livello di tenant.
- Cancellazione automatica programmata. Se hai programmato un commento per essere eliminato a un orario specifico, il programmato non deve preoccuparsi dei blocchi.
- Pulizia dei duplicati. Lo strumento di deduplicazione rimuove silenziosamente i duplicati bloccati.
- Espulsioni da moderatore con "elimina tutti i commenti di questo utente". Espellere un utente e cancellare la sua storia è un'azione intenzionale unica, quindi rimuove anche i blocchi.

Tutto il resto - il widget, l'interfaccia di moderazione, l'API pubblica, chiamanti esterni - rispetta il blocco.

### Forma dell'Errore API

Se chiami l'API pubblica per modificare o eliminare un commento bloccato, riceverai una risposta simile a:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Il commento è bloccato.",
    "translatedError": "Questo commento è bloccato e non può essere modificato o eliminato. Sbloccalo prima."
}</div>

Lo stato HTTP è 401. Il campo `translatedError` utilizza la lingua configurata del tuo tenant e qualsiasi traduzione personalizzata tu abbia impostato.

### In Conclusione

Piccola modifica, ma chiude un gap che era aperto da un po'. Bloccato ora significa bloccato.

Saluti!

{{/isPost}}