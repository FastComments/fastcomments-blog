---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Beljenje[/postlink]

{{#unless isPost}}
Beljenje, sa punom API integracijom i alatima za automatizaciju, dolazi u FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

FastComments sada može da se integriše sa drugim aplikacijama i trećim prodavcima putem beljenja. Beljenje vam omogućava da kreirate FastComments naloge (nazvane najmoprimci), korisnike, moderatore i još mnogo toga.

Sada nudimo [obuhvatan API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za automatizaciju integracije
sa trećim stranama.

Sada možete, putem API-ja:

- Kreirati kupce (podnajemnike) kojima upravlja vaš najmoprimac.
- Upravljati paketima dostupnim vašim kupcima i kako ćete obračunavati naplatu.
- Dodavati i upravljati korisnicima u vašim upravljanim najmoprimcima.
- Dodavati i upravljati moderatorima u vašim upravljanim najmoprimcima.
- Pozivati moderatore i slati linkove za prijavu korisnicima najmoprimca.

## Naplata

Što se tiče naplate, postoje dve opcije:

1. Putem FastComments Flex, korišćenje vaših podnajemnika se automatski obračunava i naplaćuje glavnom najmoprimcu. Ovo možete pratiti putem [Stranice za analitiku naplate](https://fastcomments.com/auth/my-account/analytics/billing).
2. Putem FastComments Pro, dobijate pristup za kreiranje fiksnog broja podnajemnika po fiksnoj mesečnoj ceni.

## Korišćenje bez brenda

Upravljani najmoprimci mogu imati omogućeno korišćenje bez brenda, što uklanja naše logotipe iz komentarskog vidgeta.

## Kako dobiti beljenje

Trenutno, FastComments Flex i Pro planovi nude pristup beljenje API-ju.

## Skripte i primeri

Primer skripte koja koristi API za postavljanje najmoprimca sa korisnicima i moderatorima [je dostupna ovde](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Obuhvatna validacija

Svaki API resurs sadrži obuhvatne validacije i ograničenja, sa korisnim porukama o greškama, kako bi vas vodio kroz pravilnu upotrebu.

<div class="code"><div class="title">Detaljan primer greške</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Korisnik sa tim id ne postoji u ovom najmoprimcu. Prvo kreirajte korisnika, a zatim ga postavite za moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Druge primene

API-ji za [korisnike najmoprimca](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) i [moderatore](https://docs.fastcomments.com/guide-api.html#moderator-structure) takođe se mogu koristiti za
dodavanje i upravljanje ovim resursima u vašem vlastitom najmoprimcu, bez obzira na beljenje.

## Dokumentacija

Potpunu dokumentaciju o beljenju i korišćenju API-ja možete pronaći [ovde](https://docs.fastcomments.com/guide-white-labeling.html).

## Na kraju

Nadamo se da ste ovu novinu i njenu dokumentaciju smatrali korisnom. Srećno sa integracijom!

{{/isPost}}