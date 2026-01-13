---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Najava FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments sada koristi više heuristika kada određuje što je, a što nije spam.
{{/unless}}

{{#isPost}}

### Što je novo

Od 16. studenog 2023. FastComments je počeo proširivati način na koji određuje pouzdanost
korisnika kako bi smanjio frustraciju s filtrima za spam.

### Utjecaj na korisnike

Ako ste dugogodišnji član postojeće stranice i vaši su komentari zabilježeni
od strane filtra za spam, ova promjena je za vas.

Primili smo brojne izvještaje korisnika na stranicama koje rade stvari koje filtrima za spam nisu drage, poput dijeljenja puno linkova i slično, a ti
komentari završavaju u spamu i ili su blokirani ili čekaju odobrenje moderatora, ovisno o postavkama stranice.

### Utjecaj na administratore stranica i moderatore

1. Možda ćete vidjeti manje komentara automatski označenih kao spam od vaših najaktivnijih korisnika.
2. Ovo ne mijenja otkrivanje spama temeljenog na crnoj listi riječi/fraza. Psovanje i filtrirane fraze i dalje će uzrokovati da komentari idu u spam ako imate ovu postavku.

Sam Trust Factor broj trenutno nije dostupan administratorima stranica ili moderatorima, međutim
to je nešto što ćemo istraživati u budućnosti.

### Kako se izračunava Trust Factor

Trust Factor je broj od `0` do `100` i održava se na razini svake stranice.

Sljedeće varijable se koriste za određivanje trust factora:

- Starost interakcije sa stranicom.
- Broj odobrenih komentara.
- Broj pinovanih komentara.

Ako ste član stranice duže od šest mjeseci, i ostavili ste više od 50 odobrenih komentara,
imat ćete savršeni trust score od `100`.

Inače, formula je sljedeća i evoluirat će tijekom vremena:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gdje:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Možda primijetite `* 20` ovdje - pinovani komentari imaju visoku težinu. Ako moderatori pinuju
vaše komentare, vjerojatno ste smatrani prilično pouzdanim korisnikom.

### Za programere & Gotchas

U API-ju, `UserBadgeProgress` sada ima `autoTrustFactor` i `manualTrustFactor` izložene.

`autoTrustFactor` izračunavamo mi i nije moguće pisati putem API-ja.

Ako želite sami konfigurirati trust factor, možete definirati `manualTrustFactor`. Sustav
će tada koristiti ovu vrijednost umjesto toga, a mi ćemo nastaviti održavati vrijednost `autoTrustFactor` odvojeno.

### Zloupotreba Trust Factora

Kao i kod svih stvari, očekujemo da će ovo biti zloupotrebljeno. Ljudi će stvoriti odnose s zajednicom i zatim koristiti
račun za objavu spama. Međutim, mislimo da, s razumnim zadanim postavkama (šest mjeseci, 50+ komentara), postavljamo letvicu
dovoljno visoko da većini spamera to ne bude isplativo. Kada počnu objavljivati spam, njihov račun može biti odmah
ukinut od strane moderatora. U budućnosti ćemo možda također dopustiti moderatorima da prilagođavaju trust factor.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i ispravno izdavanje ove funkcije. Javite nam
u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---