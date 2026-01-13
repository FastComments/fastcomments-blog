---
[category:API & Development]

###### [postdate]
# [postlink]Nova API za agregacijo je izdana[/postlink]

{{#unless isPost}}
FastComments svojim strankam nudi neprekosljivo dostopnost do njihovih podatkov z fleksibilno in hitro API-jem za agregacijo
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

### Kaj je novega

FastComments svojim strankam nudi neprekosljivo dostopnost do njihovih podatkov z fleksibilnim API-jem za agregacijo. Ta API vam omogoča, da preštejete, raziskujete, razdelite in agregirate
vaše komentarje, glasove in **34 drugih virov**!

### Primer - Preštevanje komentarjev po e-pošti in strani

Na primer, z novim API-jem lahko dobimo število komentarjev po strani (`urlId`) in e-pošti uporabnika (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

To bi nam dalo nekaj takega:

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

Ali pa morda želimo prešteti naše odobrene in neodobrene komentarje:

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

API prav tako podpira poizvedbene filtre in bolj poglobljeno grupiranje.

### Dokumentacija

[Celotno dokumentacijo lahko najdete tukaj.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivacija

Želimo, da bi naše stranke lahko izdelovale nadzorne plošče za spremljanje svojega računa, izdelovale poročila, obvladovale zahteve strank in raziskovale svoje podatke po potrebi.

### Kdo to dobi & omejitve

Vse stranke FastComments imajo dostop do API-ja. Vaša uporaba je omejena glede na razpoložljive API kredite, ki se razlikujejo glede na paket, ki ste ga kupili.

### Na koncu

Kot pri vseh večjih izdajah, smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in ustrezno izdajo teh sprememb. Sporočite nam
spodaj, če odkrijete kakšne težave.

Nazdravje!

{{/isPost}}

---