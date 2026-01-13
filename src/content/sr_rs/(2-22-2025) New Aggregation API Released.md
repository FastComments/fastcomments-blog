---
[category:API & Development]

###### [postdate]
# [postlink]Nova Aggregation API objavljena[/postlink]

{{#unless isPost}}
FastComments omogućava svojim korisnicima neprevaziđen pristup njihovim podacima putem fleksibilnog i brzog aggregation API-ja
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rečnik

### Šta je Novo

FastComments omogućava svojim korisnicima neprevaziđen pristup njihovim podacima putem fleksibilnog aggregation API-ja. Ovaj API vam omogućava da prebrojite, istražite, podelite i agregirate
 vaše komentare, glasove i **34 dodatna resursa**!

### Primer - Brojanje Komentara prema Email-u i Stranici

Na primer, sa novim API-jem možemo dobiti broj komentara po stranici (`urlId`) i korisničkom email-u (`commenterEmail`):  

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

API takođe podržava filtere upita i dublje grupisanje.

### Dokumentacija

[Možete pronaći kompletnu dokumentaciju ovde.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo da naši korisnici mogu da kreiraju kontrolne table za praćenje svog naloga, kreiraju izveštaje, rešavaju zahteve korisnika i istražuju svoje podatke prema potrebi.

### Ko ima pristup & Ograničenja

Svi FastComments korisnici imaju pristup API-ju. Vaša upotreba je ograničena na osnovu dostupnih API kredita koji variraju u zavisnosti od paketa koji ste kupili.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih promena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---