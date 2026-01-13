---
[category:API & Development]

###### [postdate]
# [postlink]Nieuwe Aggregatie-API Uitgebracht[/postlink]

{{#unless isPost}}
FastComments biedt zijn klanten ongeëvenaarde toegang tot hun gegevens met een flexibele en snelle aggregatie-API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Vakjargon

### Wat is er Nieuw

FastComments biedt zijn klanten ongeëvenaarde toegang tot hun gegevens met een flexibele aggregatie-API. Deze API stelt je in staat om te tellen, onderzoeken, splitsen en aggregeren
je opmerkingen, stemmen en **34 andere bronnen**!

### Voorbeeld - Tellen van Opmerkingen per E-mail en Pagina

Met de nieuwe API kunnen we bijvoorbeeld een telling krijgen van opmerkingen per pagina (`urlId`) en gebruikers-e-mailadres (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Dit zou ons iets geven als:

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

Of misschien willen we onze goedgekeurde en ongekeurde opmerkingen tellen:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Geeft ons:

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

De API ondersteunt ook query-filters en diepgaandere groepering.

### Documentatie

[Je kunt de volledige documentatie hier vinden.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivatie

We willen dat onze klanten dashboards kunnen bouwen om hun account te monitoren, rapporten kunnen opstellen, klantverzoeken kunnen afhandelen en hun gegevens naar behoefte kunnen onderzoeken.

### Wie Krijgt Het & Limieten

Alle FastComments-klanten hebben toegang tot de API. Je gebruik is beperkt op basis van je beschikbare API-credits, die zullen variëren op basis van het pakket dat je hebt gekocht.

### Conclusie

Zoals bij alle belangrijke releases, zijn we blij dat we de tijd konden nemen om deze wijzigingen te optimaliseren, te testen en correct uit te brengen. Laat het ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}

---