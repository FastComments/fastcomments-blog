---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Najava FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments sada koristi više heuristika prilikom određivanja šta je, a šta nije spam.
{{/unless}}

{{#isPost}}

### Šta je novo

Od 16. novembra 2023. FastComments je počeo da proširuje način na koji određuje pouzdanost
korisnika kako bi smanjio frustraciju u vezi sa filtrima za spam.

### Uticaj na korisnike

Ako ste dugogodišnji član postojećeg sajta, i vaši komentari su uhvaćeni
od strane spam filtera, ova promena je za vas.

Imali smo brojne izveštaje korisnika na sajtovima koji rade stvari koje spam filteri ne vole, kao što su deljenje mnogih linkova i tako dalje, i ovi
komentari završavaju u spamu i ili su blokirani ili čekaju odobrenje moderatora u zavisnosti od podešavanja sajta.

### Uticaj na administratore sajta i moderatore

1. Možda ćete videti manje komentara automatski označenih kao spam od vaših najaktivnijih korisnika.
2. Ovo ne menja detekciju spama zasnovanu na spisku reči/fraza. Psovke i filtrirane fraze će i dalje uzrokovati da komentari idu u spam ako imate ovo podešeno.

Broj Trust Factor trenutno nije izložen administratorima sajta ili moderatorima, međutim
to je nešto što ćemo istražiti u budućnosti.

### Kako se računa Trust Factor

Trust Factor je broj od `0` do `100` i održava se po sajtu.

Sledeće promenljive se koriste za određivanje trust faktora:

- Starost interakcije sa sajtom.
- Broj odobrenih komentara.
- Broj pinovanih komentara.

Ako ste član sajta više od šest meseci, i ostavili ste više od 50 odobrenih komentara,
imaćete savršen trust skor od `100`.

U suprotnom, formula je sledeća i razvijaće se tokom vremena:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gde:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Možda ćete primetiti `* 20` ovde - pinovani komentari imaju veliku težinu. Ako moderatori pinuju
vaše komentare, verovatno ste smatrani prilično pouzdanim korisnikom.

### Za programere i zamerke

U API-ju, `UserBadgeProgress` sada ima `autoTrustFactor` i `manualTrustFactor` izložene.

`autoTrustFactor` se računa od nas i nije moguće pisati preko API-ja.

Ako želite sami da konfigurišete trust faktor, možete definisati `manualTrustFactor`. Sistem
će zatim koristiti ovu vrednost umesto, a mi ćemo nastaviti da održavamo `autoTrustFactor` vrednost odvojeno.

### Zloupotreba Trust Factor-a

Kao i sa svim stvarima, očekujemo da će ovo biti zloupotrebljeno. Ljudi će graditi odnose sa zajednicom i zatim koristiti
nalog za postavljanje spama. Ipak, verujemo da sa razumnim podrazumevanjima (šest meseci, 50+ komentara), postavljamo standard
dovoljno visoko da to većini spammera ne bude isplativo. Kada počnu da postavljaju spam, njihov nalog može biti odmah
blokiran od strane moderatora. U budućnosti, možda ćemo takođe omogućiti moderatorima da prilagođavaju trust faktor.

### Na kraju

Kao i sa svim velikim izdanjima, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---