---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Najavljujemo FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments sada koristi više heuristika kada određuje šta je, a šta nije spam.
{{/unless}}

{{#isPost}}

### Šta je novo

Od 16. novembra 2023. FastComments je počeo da proširuje način na koji određuje pouzdanost
korisnika kako bi smanjio frustraciju prilikom korišćenja anti-spam filtera.

### Uticaj na korisnike

Ako ste dugogodišnji član neke postojeće stranice i vaše komentare je zadržao
spam filter, ova promena je za vas.

Imali smo brojne izveštaje korisnika na sajtovima koji rade stvari koje spam filteri ne vole, poput deljenja velikog broja linkova i slično, i ovi
komentari završavaju u spamu i ili su blokirani ili čekaju odobrenje moderatora, u zavisnosti od podešavanja sajta.

### Uticaj na administratore sajta i moderatore

1. Možda ćete videti manje komentara koji su automatski označeni kao spam od vaših najaktivnijih korisnika.
2. Ovo ne menja detekciju spama na osnovu crne liste reči/frase. Psovke i filtrirane fraze i dalje će uzrokovati da komentari idu u spam ako imate ovo podešeno.

Broj Trust Factor trenutno nije dostupan administratorima sajta ili moderatorima, međutim
to je nešto što ćemo istražiti u budućnosti.

### Kako se izračunava Trust Factor

Trust Factor je broj od `0` do `100` i održava se na osnovu svakog sajta posebno.

Sledeće varijable koriste se za određivanje trust faktora:

- Starost interakcije sa sajtom.
- Broj odobrenih komentara.
- Broj pinovanih komentara.

Ako ste član sajta duže od šest meseci i ostavili ste preko 50 odobrenih komentara,
imaćete savršeni trust skor od `100`.

U suprotnom, formula je sledeća i evolvira tokom vremena:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gde:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Možda ćete primetiti `* 20` ovde - pinovani komentari imaju visok značaj. Ako moderatori
pinuju vaše komentare, verovatno ste smatrani prilično pouzdanim korisnikom.

### Za programere & zamke

U API-ju, `UserBadgeProgress` sada ima `autoTrustFactor` i `manualTrustFactor` otkrivene.

`autoTrustFactor` izračunavamo mi i nije moguće napisati preko API-ja.

Ako želite da sami konfigurišete trust faktor, možete definisati `manualTrustFactor`. Sistem
će tada koristiti tu vrednost umesto toga, a mi ćemo nastaviti da održavamo `autoTrustFactor` vrednost zasebno.

### Zloupotreba Trust Factor-a

Kao i kod svih stvari, očekujemo da će doći do zloupotrebe. Ljudi će graditi odnose sa zajednicom i zatim koristiti
nalog za postavljanje spama. Međutim, smatramo da sa razumnim default postavkama (šest meseci, 50+ komentara), postavljamo
visok standard koji većini spammera oprosti. Kada počnu da postavljaju spam, njihov nalog može biti odmah
zabranjen od strane moderatora. U budućnosti možda ćemo takođe omogućiti moderatorima da prilagode trust faktor.

### U zaključku

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}