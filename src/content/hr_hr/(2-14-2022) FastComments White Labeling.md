---
[category:API & Razvoj]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, s punom API integracijom i alatima za automatizaciju, dolazi u FastComments.
{{/unless}}

{{#isPost}}

## Što je novo

FastComments se sada može integrirati s drugim aplikacijama i trećim stranama putem White Labelinga. White Labeling omogućuje vam stvaranje FastComments računa (tzv. tenants), korisnika, moderatora i još mnogo toga.

Sada nudimo [sveobuhvatan API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za automatizaciju integracije
s trećim stranama.

Sada možete, putem API-ja:

- Stvoriti kupce (child tenants) koje upravlja vaš tenant.
- Upravljati paketima dostupnim vašim kupcima i načinom na koji ćete obračunavati troškove.
- Dodavati i upravljati korisnicima u vašim upravljanim tenantima.
- Dodavati i upravljati moderatorima u vašim upravljanim tenantima.
- Pozivati moderatore i slati poveznice za prijavu korisnicima tenanta.

## Obračun

Kod obračuna postoje dvije opcije:

1. Putem FastComments Flex, korištenje vaših child tenants automatski se obračunava i naplaćuje roditeljskom tenant-u. Ovo se može pratiti putem [stranice za analitiku obračuna](https://fastcomments.com/auth/my-account/analytics/billing).
2. Putem FastComments Pro, dobivate pristup stvaranju fiksnog broja child tenants za fiksnu mjesečnu cijenu.

## Debranding

Upravljani tenanti mogu imati omogućenu opciju debranding, koja uklanja naše logotipe iz widgeta za komentare.

## Kako dobiti White Labeling

Trenutno, FastComments Flex i Pro planovi nude pristup White Labeling API-ju.

## Skripte i Primjeri

Primjer skripte koja koristi API za postavljanje tenanta s korisnicima i moderatorima [dostupan je ovdje](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Sveobuhvatna Validacija

Svaki API resurs sadrži sveobuhvatne validacije i ograničenja, uz korisne poruke o grešci, kako bi vas vodili kroz pravilnu upotrebu.

<div class="code"><div class="title">Primjer Detaljne Greške</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Korisnik s tim id-om ne postoji u ovom tenant-u. Prvo stvorite korisnika, a zatim ga postavite kao moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Ostali Korisni Prikazi

APIs za [tenant korisnike](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) i [moderatore](https://docs.fastcomments.com/guide-api.html#moderator-structure) mogu se također koristiti za
dodavanje i upravljanje ovim resursima u vašem vlastitom tenant-u, neovisno o white labelingu.

## Dokumentacija

Možete pronaći punu dokumentaciju o White Labelingu i kako koristiti API [ovdje](https://docs.fastcomments.com/guide-white-labeling.html).

## Na kraju

Nadamo se da ste našli ovu nadogradnju i njenu dokumentaciju korisnima. Sretno s integracijom!

{{/isPost}}