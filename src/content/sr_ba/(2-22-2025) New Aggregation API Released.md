---
[category:API & Development]

###### [postdate]
# [postlink]Novi Aggregation API Objavljen[/postlink]

{{#unless isPost}}
FastComments svojim korisnicima nudi neprikosnoven pristup njihovim podacima kroz fleksibilan i brz aggregation API
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničke Pojmove

### Šta je Novo

FastComments svojim korisnicima nudi neprikosnoven pristup njihovim podacima kroz fleksibilan aggregation API. Ovaj API vam omogućava da prebrojite, istražite, delite i agregirate
vaše komentare, glasove, i **34 dodatna resursa**!

### Primer - Prebrojavanje Komentara po Email-u i Strani

Na primer, sa novim API-em možemo dobiti broj komentara po strani (`urlId`) i korisničkom email-u (`commenterEmail`):  

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
                    "neko@neka.com": 1,
                    "neko2@neka.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "neka-strana": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Možda želimo da prebrojimo naše odobrene i neodobrene komentare:

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

API takođe podržava filtere upita i dublje grupisanje.

### Dokumentacija

[Možete pronaći kompletnu dokumentaciju ovde.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo da naši korisnici mogu da prave kontrolne table za praćenje svojih naloga, prave izveštaje, obrađuju zahteve korisnika i istražuju svoje podatke prema potrebi.

### Ko Ima Pristup & Ograničenja

Svi FastComments korisnici imaju pristup API-ju. Vaša upotreba je ograničena na osnovu dostupnih API kredita koji će varirati u zavisnosti od paketa koji ste kupili.

### Zaključno

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih izmena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---