---
[category:API & Development]

###### [postdate]
# [postlink]Ny Aggregation API Udgivet[/postlink]

{{#unless isPost}}
FastComments giver sine kunder uslåelig adgang til deres data med en fleksibel og hurtig aggregations-API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

### Hvad er Nyt

FastComments giver sine kunder uslåelig adgang til deres data med en fleksibel aggregations-API. Denne API lader dig tælle, undersøge, opdele og aggregere
dine kommentarer, stemmer og **34 flere ressourcer**!

### Eksempel - Tælling af Kommentarer efter E-mail og Side

For eksempel med den nye API kan vi få en tælling af kommentarer pr. side (`urlId`) og brugerens e-mail (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Dette ville give os noget som:

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

Eller måske vil vi tælle vores godkendte og ikke-godkendte kommentarer:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Giver os:

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

API'en understøtter også forespørgselsfiltre og mere dybdegående gruppering.

### Dokumentation

[Du kan finde den fulde dokumentation her.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivation

Vi ønsker, at vores kunder skal kunne bygge dashboards til at overvåge deres konto, bygge rapporter, håndtere kundeforespørgsler og undersøge deres data efter behov.

### Hvem Får Det & Grænser

Alle FastComments-kunder har adgang til API'en. Din brug er begrænset baseret på dine tilgængelige API-kreditter, som vil variere baseret på den pakke, du har købt.

### Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive disse ændringer. Lad os vide
herunder, hvis du opdager nogle problemer.

Skål!

{{/isPost}}

---