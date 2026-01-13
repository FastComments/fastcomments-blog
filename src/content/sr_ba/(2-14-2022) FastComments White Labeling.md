---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, sa potpunom API integracijom i alatima za automatizaciju, dolazi do FastCommentsa.
{{/unless}}

{{#isPost}}

## Šta je Novo

FastComments se sada može integrisati sa drugim aplikacijama i trećim prodavcima putem White Labeling-a. White Labeling vam omogućava da kreirate FastComments naloge (poznate kao tenant-i), korisnike, moderatore i još mnogo toga.

Sada nudimo [opsežan API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za automatizaciju integracije
sa trećim stranama.

Sada možete, putem API-ja:

- Kreirati kupce (dečije tenant-e) koje upravlja vaš tenant.
- Upravljati paketima dostupnim vašim kupcima i kako ćete obraditi naplatu.
- Dodavati i upravljati korisnicima u vašim upravljanim tenant-ima.
- Dodavati i upravljati moderatorima u vašim upravljanim tenant-ima.
- Pozvati moderatore i slati linkove za prijavu korisnicima tenant-a.

## Naplata

Sa naplatom postoje dve opcije:

1. Putem FastComments Flex, korišćenje vaših dečijih tenant-a se automatski obrađuje i naplaćuje roditeljskom tenant-u. Ovo se može pratiti putem [Stranice za analizu naplate](https://fastcomments.com/auth/my-account/analytics/billing).
2. Putem FastComments Pro, dobijate pristup za kreiranje fiksnog broja dečijih tenant-a po fiksnoj mesečnoj ceni.

## Debranding

Upravljani tenant-i mogu imati omogućen debranding, što uklanja naše logotipe iz vitičastog prozora komentara.

## Kako da Dobižete White Labeling

Trenutno, FastComments Flex i Pro planovi nude pristup White Labeling API-ju.

## Skripte i Primeri

Primer skripte koja koristi API za postavljanje tenant-a sa korisnicima i moderatorima [je dostupna ovde](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Opsežna Validacija

Svaki API resurs sadrži opsežne validacije i ograničenja, sa korisnim porukama o grešci, da vas usmere kako ih pravilno koristiti.

<div class="code"><div class="title">Detaljan Primer Greške</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Korisnik sa tim id-om ne postoji u ovom tenant-u. Prvo kreirajte korisnika, a zatim ga postavite za moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Drugi Slučajevi Korišćenja

API-ji [korisnika tenant-a](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) i [moderatora](https://docs.fastcomments.com/guide-api.html#moderator-structure) se takođe mogu koristiti za
dodavanje i upravljanje ovim resursima u vašem vlastitom tenant-u, bez obzira na white labeling.

## Dokumentacija

Potpuno dokumentaciju o White Labeling-u i kako koristiti API možete pronaći [ovde](https://docs.fastcomments.com/guide-white-labeling.html).

## Na Zaključku

Nadamo se da ste našli ovu nadogradnju i njenu dokumentaciju korisnom. Srećno sa integracijom!

{{/isPost}}