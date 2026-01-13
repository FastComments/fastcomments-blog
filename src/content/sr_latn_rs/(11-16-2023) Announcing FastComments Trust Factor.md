---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Najava FastComments Trust Factora[/postlink]

{{#unless isPost}}
FastComments sada koristi više heuristika kada određuje šta je a šta nije spam.
{{/unless}}

{{#isPost}}

### Šta je novo

Od 16. novembra 2023. godine, FastComments je počeo da proširuje način na koji određuje poverljivost
korisnika kako bi smanjio frustracije pri radu sa spam filtrima.

### Uticaj na korisnike

Ako ste dugogodišnji član postojećeg sajta, i vaši komentari su uhvaćeni
spam filterom, ova promena je za vas.

Imali smo brojne izveštaje korisnika na sajtovima koji rade stvari koje spam filteri ne vole, kao što je deljenje velikog broja linkova i slično, a ovi
komentari završavaju u spamu i ili su blokirani ili čekaju odobrenje moderatora u zavisnosti od postavki sajta.

### Uticaj na administratore sajta i moderatore

1. Možda ćete videti manje komentara koji su automatski označeni kao spam od vaših najaktivnijih korisnika.
2. Ovo ne menja detekciju spama na osnovu crne liste reči/fraza. Prostački izrazi i filtrirane fraze će i dalje uzrokovati da komentari idu u spam ako imate ovu postavku.

Broj Trust Factora trenutno nije dostupan administratorima sajta ili moderatorima, međutim
to je nešto što ćemo istražiti u budućnosti.

### Kako se računa Trust Faktor

Trust Faktor je broj od `0` do `100` i održava se na osnovu svakog sajta.

Sledeće varijable se koriste za određivanje trust faktora:

- Starost interakcije sa sajtom.
- Broj odobrenih komentara.
- Broj pričvršćenih komentara.

Ako ste član sajta duže od šest meseci, i ostavili ste više od 50 odobrenih komentara,
imaćete savršen trust skor od `100`.

U suprotnom, formula je sledeća i vremenom će se razvijati:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gde:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Možda ćete primetiti `* 20` ovde - pričvršćeni komentari imaju visoku težinu. Ako moderatori pričvršćuju
vaše komentare, verovatno se smatrate prilično pouzdanim korisnikom.

### Za Developere & Problemi

U API-ju, `UserBadgeProgress` sada ima `autoTrustFactor` i `manualTrustFactor` dostupne.

`autoTrustFactor` se izračunava od nas i nije moguće pisati putem API-ja.

Ako želite da konfigurišete trust faktor sami, možete definisati `manualTrustFactor`. Sistem
će tada koristiti ovu vrednost umesto toga, a mi ćemo nastaviti da održavamo vrednost `autoTrustFactor` odvojeno.

### Zloupotreba Trust Factora

Kao i sa svim stvarima, očekujemo da će ovo biti zloupotrebljeno. Ljudi će razvijati odnose sa zajednicom i zatim koristiti
nalog za postavljanje spama. Međutim, smatramo da sa razumnim podrazumevanjima (šest meseci, 50+ komentara), postavljamo bar
dovoljno visoko da većini spammera ne bude isplativo. Kada počnu da postavljaju spam, njihov nalog može odmah
biti banovan od strane moderatore. U budućnosti možda ćemo takođe dozvoliti moderatorima da prilagode trust faktor.

### Zaključak

Kao i sa svim važnim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---