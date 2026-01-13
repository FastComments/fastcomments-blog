---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Objavljivanje FastComments Faktora Pouzdanosti[/postlink]

{{#unless isPost}}
FastComments sada koristi više heuristika kada određuje šta je, a šta nije spam.
{{/unless}}

{{#isPost}}

### Šta je novo

Od 16. novembra 2023. FastComments je počeo da proširuje način na koji određuje pouzdanost
korisnika kako bi smanjio frustracije prilikom korišćenja spam filtara.

### Uticaj na korisnike

Ako ste dugogodišnji član postojeće stranice, i vaši komentari su bili zarobljeni
spam filterom, ova promena je za vas.

Imali smo brojne izveštaje o korisnicima na sajtovima koji rade stvari koje spam filteri ne vole, kao što je deljenje velikog broja linkova i tako dalje, i ovi
komentari završavaju u spamu i ili su blokirani ili čekaju odobrenje moderatore, u zavisnosti od podešavanja stranice.

### Uticaj na administratore stranice i moderatore

1. Možda ćete videti manje komentara automatski obeleženih kao spam od vaših najaktivnijih korisnika.
2. Ovo ne menja prepoznavanje spama na osnovu crne liste reči/izraza. Psovke i filtrirane fraze će i dalje uzrokovati da komentari idu u spam ako imate ovo podešeno.

Broj Faktora Pouzdanosti samog po sebi trenutno nije dostupan administratorima stranice ili moderatorima, međutim
to je nešto što ćemo istraživati u budućnosti.

### Kako se računa Faktor Pouzdanosti

Faktor Pouzdanosti je broj od `0` do `100` i održava se na osnovu svake stranice.

Sledeće varijable se koriste za određivanje faktora pouzdanosti:

- Starost interakcije sa stranicom.
- Broj odobrenih komentara.
- Broj „prikovanih“ komentara.

Ako ste član stranice duže od šest meseci, i ostavili ste više od 50 odobrenih komentara,
imaćete savršen rezultat pouzdanosti od `100`.

U suprotnom, formula je sledeća i vremenom će se razvijati:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gde:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Možete primetiti `* 20` ovde - prikovani komentari imaju visoku težinu. Ako moderatori prikovavaju
vaše komentare, verovatno ste smatrani prilično pouzdanim korisnikom.

### Za programere & Zamerke

U API-ju, `UserBadgeProgress` sada ima `autoTrustFactor` i `manualTrustFactor` izložene.

`autoTrustFactor` se izračunava od strane nas i nije moguće pisati ga putem API-ja.

Ako želite da sami konfigurišete faktor pouzdanosti, možete definisati `manualTrustFactor`. Sistem
će tada koristiti ovu vrednost umesto toga, a mi ćemo nastaviti da održavamo `autoTrustFactor` vrednost odvojeno.

### Zloupotreba Faktora Pouzdanosti

Kao i sa svim stvarima, očekujemo da će ovo biti zloupotrebljavano. Ljudi će graditi odnose sa zajednicom i zatim koristiti
nalog za postavljanje spama. Međutim, mislimo da sa razumnim podrazumevanjima (šest meseci, 50+ komentara), postavljamo granicu
dovoljno visoko da većini spamera to ne bude isplativo. Kada počnu da postavljaju spam, njihov nalog može biti odmah
blokiran od strane moderatora. U budućnosti ćemo možda takođe dozvoliti moderatorima da prilagodite faktor pouzdanosti.

### Na kraju

Kao i sa svim glavnim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---