---
[category:API & Development]

###### [postdate]
# [postlink]Nuovo Aggregation API Rilasciato[/postlink]

{{#unless isPost}}
FastComments offre ai suoi clienti un accesso imbattibile ai propri dati con un'API di aggregazione flessibile e veloce
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

### Novità

FastComments offre ai suoi clienti un accesso imbattibile ai propri dati con un'API di aggregazione flessibile. Questa API ti consente di contare, indagare, suddividere e aggregare
i tuoi commenti, voti e **34 risorse in più**!

### Esempio - Contare Commenti per Email e Pagina

Ad esempio, con la nuova API possiamo ottenere un conteggio dei commenti per pagina (`urlId`) e email dell'utente (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Questo ci darebbe qualcosa del genere:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Oppure potremmo voler contare i nostri commenti approvati e non approvati:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Ci dà:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

L'API supporta anche filtri di query e raggruppamenti più approfonditi.

### Documentazione

[Puoi trovare la documentazione completa qui.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivazione

Vogliamo che i nostri clienti possano costruire dashboard per monitorare il proprio account, creare report, gestire richieste dei clienti e indagare i propri dati quando necessario.

### Chi Ne Ha Accesso & Limiti

Tutti i clienti di FastComments hanno accesso all'API. Il tuo utilizzo è limitato in base ai crediti API disponibili che varieranno
in base al pacchetto acquistato.

### In Conclusione

Come per tutti i rilasci principali, siamo lieti di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente queste modifiche. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---