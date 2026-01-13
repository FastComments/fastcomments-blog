---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
Bela etiketa, sa potpunom API integracijom i alatima za automatizaciju, dolazi u FastComments.
{{/unless}}

{{#isPost}}

## Šta je novo

FastComments sada može integrisati sa drugim aplikacijama i trećim partijama putem bele etikete. Bela etiketa vam omogućava da kreirate FastComments naloge (nazvane zakupci), korisnike, moderatore i još mnogo toga.

Sada nudimo [opsežan API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za automatizaciju integracije
sa trećim stranama.

Sada možete, putem API-ja:

- Kreirati klijente (decu zakupce) koje upravlja vaš zakupac.
- Upravljati paketima dostupnim vašim klijentima i kako ćete obraditi naplatu.
- Dodavati i upravljati korisnicima u vašim upravljanim zakupcima.
- Dodavati i upravljati moderatorima u vašim upravljanim zakupcima.
- Pozvati moderatore i slati linkove za prijavu korisnicima zakupca.

## Naplata

Kod naplate postoje dve opcije:

1. Putem FastComments Flex, korišćenje vaših zakupaca se automatski obuhvata i naplaćuje glavnom zakupcu. Ovo se može pratiti putem [Stranice za analizu naplate](https://fastcomments.com/auth/my-account/analytics/billing).
2. Putem FastComments Pro, dobijate pristup za kreiranje fiksnog broja zakupaca po fiksnoj mesečnoj ceni.

## Uklanjanje brenda

Upravljani zakupci mogu imati omogućeno uklanjanje brenda, što uklanja naše logotipe iz widget-a komentara.

## Kako dobiti Bela etiketa

Trenutno, FastComments Flex i Pro planovi nude pristup White Labeling API-ju.

## Skripte i primeri

Primer skripte koja koristi API za postavljanje zakupca sa korisnicima i moderatorima [dostupna je ovde](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Opsežna validacija

Svaki API resurs sadrži opsežne validacije i ograničenja, sa korisnim porukama greške, kako bi vas usmerili da ih ispravno koristite.

<div class="code"><div class="title">Detaljan primer greške</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Korisnik sa tim id-jem ne postoji u ovom zakupcu. Prvo kreirajte korisnika, a zatim ga postavite za moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Druge upotrebe

API-ji [korisnika zakupca](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) i [moderatora](https://docs.fastcomments.com/guide-api.html#moderator-structure) takođe se mogu koristiti
za dodavanje i upravljanje ovim resursima u vašem vlastitom zakupcu, bez obzira na belu etiketu.

## Dokumentacija

Možete pronaći potpunu dokumentaciju o Belom etiketu i kako koristiti API [ovde](https://docs.fastcomments.com/guide-white-labeling.html).

## U zaključku

Nadamo se da ste našli ovu novost i njenu dokumentaciju korisnima. Srećno integrisanje!

{{/isPost}}