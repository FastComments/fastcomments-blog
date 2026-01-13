---
[category:API & Development]

###### [postdate]
# [postlink]Objavljen novi Aggregation API[/postlink]

{{#unless isPost}}
FastComments svojim korisnicima pruža nenadmašan pristup njihovim podacima putem fleksibilnog i brzog aggregation API-ja
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

FastComments svojim korisnicima pruža nenadmašan pristup njihovim podacima putem fleksibilnog aggregation API-ja. Ovaj API vam omogućava da brojite, istražujete, sečete i agregirate
vaše komentare, glasove i **34 dodatna resursa**!

### Primer - Brojanje komentara po e-mailu i stranici

Na primer, sa novim API-jem možemo dobiti broj komentara po stranici (`urlId`) i korisničkom e-mailu (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Ovo bi nam dalo nešto poput:

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

Ili možda želimo da prebrojimo naše odobrene i neodobrene komentare:

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

API takođe podržava upitne filtere i dublje grupisanje.

### Dokumentacija

[Možete pronaći kompletnu dokumentaciju ovde.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo da naši korisnici mogu da prave kontrolne table za praćenje svog naloga, prave izveštaje, rešavaju zahteve korisnika i istražuju svoje podatke po potrebi.

### Ko ima pristup i ograničenja

Svi FastComments korisnici imaju pristup API-ju. Vaša upotreba je ograničena na osnovu dostupnih API kredita koji će varirati u zavisnosti
od paketa koji ste kupili.

### U zaključku

Kao i kod svih velikih verzija, drago nam je da smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih promena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---