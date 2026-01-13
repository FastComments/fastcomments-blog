---
[category:API & Development]

###### [postdate]
# [postlink]Nova verzija Aggregation API-ja[/postlink]

{{#unless isPost}}
FastComments pruža svojim korisnicima nenadmašan pristup njihovim podacima uz fleksibilan i brz aggregation API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

FastComments pruža svojim korisnicima nenadmašan pristup njihovim podacima uz fleksibilan aggregation API. Ovaj API vam omogućava da brojte, istražujete, seckate i agregirate
vaše komentare, glasove i **34 dodatna resursa**!

### Primer - Brojanje komentara po emailu i stranici

Na primer, sa novim API-jem možemo dobiti broj komentara po stranici (`urlId`) i emailu korisnika (`commenterEmail`):  

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

Ili možda želimo da prebrojimo naše odobrene i neodobre pomenute komentare:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Rezultat nam daje:

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

API takođe podržava filtere upita i detaljniju grupaciju.

### Dokumentacija

[Potpunu dokumentaciju možete pronaći ovde.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo da naši korisnici mogu da izgrade kontrolne table za praćenje svojih naloga, izrade izveštaje, obrade zahteve kupaca i istražuju svoje podatke po potrebi.

### Ko ima pristup & Ograničenja

Svi FastComments korisnici imaju pristup API-ju. Vaša upotreba je ograničena prema vašim dostupnim API kreditima koji se razlikuju
na osnovu paketa koji ste kupili.

### U zaključku

Kao i svi veći izdanja, drago nam je što smo imali vremena da optimizujemo, testiramo i pravilno objavimo ove promene. Javite nam
u komentaru ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---