---
[category:API & Development]

###### [postdate]
# [postlink]Objavljen Novi Aggregation API[/postlink]

{{#unless isPost}}
FastComments svojim korisnicima pruža neusporediv pristup njihovim podacima s fleksibilnim i brzom aggregation API-jem
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Što je Novo

FastComments svojim korisnicima pruža neusporediv pristup njihovim podacima s fleksibilnim aggregation API-jem. Ovaj API vam omogućuje da brojite, istražujete, dijelite i agregirate
vaše komentare, glasove, i **34 dodatna resursa**!

### Primjer - Brojanje Komentara po Emailu i Stranici

Na primjer, s novim API-jem možemo dobiti broj komentara po stranici (`urlId`) i emailu korisnika (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

To bi nam dalo nešto poput:

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

Ili možda želimo prebrojati naše odobrene i neodobrene komentare:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Daje nam:

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

API također podržava filtre upita i dublje grupiranje.

### Dokumentacija

[Potpunu dokumentaciju možete pronaći ovdje.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo da naši korisnici mogu izraditi nadzorne ploče za praćenje svog računa, izraditi izvještaje, obrađivati zahtjeve korisnika i istraživati svoje podatke po potrebi.

### Tko Ima Pristup & Ograničenja

Svi korisnici FastComments imaju pristup API-ju. Vaša upotreba je ograničena na temelju dostupnih API kredita koji će varirati ovisno o paketu koji ste kupili.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je da smo mogli odvojiti vrijeme da optimiziramo, testiramo i pravilno objavimo ove promjene. Javite nam ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---