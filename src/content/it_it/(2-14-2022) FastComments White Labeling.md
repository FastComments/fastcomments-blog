---
[category:API & Development]

###### [postdate]
# [postlink]White Labeling di FastComments[/postlink]

{{#unless isPost}}
Il White Labeling, con integrazione API completa e strumenti di automazione, arriva su FastComments.
{{/unless}}

{{#isPost}}

## Novità

FastComments ora può integrarsi con altre applicazioni e rivenditori di terze parti tramite il White Labeling. Il White Labeling ti consente di creare account FastComments (chiamati tenant), utenti, moderatori e altro ancora.

Ora offriamo una [API completa](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) per automatizzare l'integrazione con terze parti.

Puoi ora, tramite l'API:

- Creare clienti (tenant figli) gestiti dal tuo tenant.
- Gestire i pacchetti disponibili per i tuoi clienti e come gestirai la fatturazione.
- Aggiungere e gestire utenti nei tuoi tenant gestiti.
- Aggiungere e gestire moderatori nei tuoi tenant gestiti.
- Invitare moderatori e inviare link di accesso agli utenti del tenant.

## Fatturazione

Con la fatturazione, ci sono due opzioni:

1. Tramite FastComments Flex, l'utilizzo dei tuoi tenant figli viene automaticamente sintetizzato e fatturato al tenant principale. Questo può essere monitorato tramite la [Pagina di Analisi della Fatturazione](https://fastcomments.com/auth/my-account/analytics/billing).
2. Tramite FastComments Pro, ottieni accesso per creare un numero fisso di tenant figli a un prezzo mensile fisso.

## Debranding

I tenant gestiti possono avere abilitato il debranding, che rimuove i nostri loghi dal widget dei commenti.

## Come Ottenere il White Labeling

Attualmente, i piani FastComments Flex e Pro offrono accesso all'API di White Labeling.

## Script ed Esempi

Uno script di esempio che utilizza l'API per configurare un tenant con utenti e moderatori [è disponibile qui](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Validazione Completa

Ogni risorsa API contiene validazioni e restrizioni complete, con messaggi di errore utili, per guidarti nell'utilizzarle correttamente.

<div class="code"><div class="title">Esempio di Errore Dettagliato</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Un utente con quell'id non esiste in questo tenant. Crea prima l'utente e poi falla diventare un moderatore.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Altri Casi d'Uso

Le API [utenti tenant](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) e [moderatori](https://docs.fastcomments.com/guide-api.html#moderator-structure) possono essere utilizzate anche per aggiungere e gestire queste risorse nel tuo tenant, indipendentemente dal white labeling.

## Documentazione

Puoi trovare la documentazione completa sul White Labeling e su come utilizzare l'API [qui](https://docs.fastcomments.com/guide-white-labeling.html).

## In Conclusione

Speriamo che tu abbia trovato utile questo aggiornamento e la sua documentazione. Buon integrazione!

{{/isPost}}