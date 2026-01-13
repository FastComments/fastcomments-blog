---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, sa potpunom API integracijom i alatima za automatizaciju, dolazi u FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

FastComments sada može da se integriše sa drugim aplikacijama i trećim stranama putem White Labeling-a. White Labeling omogućava kreiranje FastComments naloga (nazvanih tenant-i), korisnika, moderatora i još mnogo toga.

Sada nudimo [opširni API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za automatizaciju integracije
sa trećim stranama.

Možete sada, putem API-ja:

- Kreirati kupce (child tenants) koji se upravljaju od strane vašeg tenant-a.
- Upravljati paketima dostupnim vašim kupcima i kako ćete obračunavati plaćanje.
- Dodavati i upravljati korisnicima u vašim upravljanim tenant-ima.
- Dodavati i upravljati moderatorima u vašim upravljanim tenant-ima.
- Pozivati moderatore i slati linkove za prijavu korisnicima tenant-a.

## Plaćanje

Sa plaćanjem, postoje dve opcije:

1. Putem FastComments Flex, korišćenje vaših child tenant-a se automatski povezuje i obračunava parent tenant-u. Ovo se može pratiti putem [stranice za analitiku plaćanja](https://fastcomments.com/auth/my-account/analytics/billing).
2. Putem FastComments Pro, dobijate pristup za kreiranje fiksnog broja child tenant-a po fiksnoj mesečnoj ceni.

## Debranding

Upravljani tenant-i mogu imati omogućenu opciju debranding, koja uklanja naše logotipe iz komentatorskog vidgeta.

## Kako dobiti White Labeling

Trenutno, FastComments Flex i Pro planovi nude pristup White Labeling API-ju.

## Skripte i primeri

Primer skripte koja koristi API za podešavanje tenant-a sa korisnicima i moderatorima [je dostupna ovde](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Opsežna Validacija

Svaki API resurs sadrži opsežne validacije i ograničenja, sa korisnim porukama o grešci, kako bi vas vodili kroz pravilnu upotrebu.

<div class="code"><div class="title">Detaljan Primer Greške</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Korisnik sa tim id ne postoji u ovom tenant-u. Prvo kreirajte korisnika, a zatim ga postavite za moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Drugi Slučajevi Korišćenja

API-ji [korisnika tenant-a](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) i [moderatora](https://docs.fastcomments.com/guide-api.html#moderator-structure) se takođe mogu koristiti za
dodavanje i upravljanje ovim resursima u vašem vlastitom tenant-u, bez obzira na white labeling.

## Dokumentacija

Možete pronaći punu dokumentaciju o White Labeling-u i kako koristiti API [ovde](https://docs.fastcomments.com/guide-white-labeling.html).

## U zaključku

Nadamo se da ste našli ovu ažuriranje i njenu dokumentaciju korisnom. Srećno sa integracijom!

{{/isPost}}


---