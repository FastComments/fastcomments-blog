---
[category:Security]

###### [postdate]
# [postlink]FastComments sada podržava stroge postavke kolačića trećih strana[/postlink]

{{#unless isPost}}
Do sada je FastComments zahtevao omogućavanje kolačića trećih strana da bi u potpunosti funkcionisao. To više nije slučaj!
{{/unless}}

{{#isPost}}

### Šta je novo

Onemogućavanje kolačića trećih strana kao podrazumevano postaje norma u privatnost-orijentisanim pregledačima. Primer za to je Appleov Safari na iOS-u, gde
ako ostavite svoju email adresu za komentarisanje sa FastComments, verifikujete taj komentar, a zatim se vratite na tu stranicu da ostavite još jedan komentar, ili odgovorite
nekom, otkrićete da će svi dalji komentari koje ostavite biti označeni kao neprovereni.

To će se desiti samo sa podrazumevanom postavkom koja prikazuje oznaku `Neprovereno` na komentarima. Međutim, ovo može uticati na druge stvari poput automatskih odobrenja
ako su automatska odobrenja omogućena samo za proverene komentare.

Kao što možete zamisliti, to može rezultirati frustrirajućim ponašanjem gde korisnik verifikuje svoj komentar, klikne "Zadrži me prijavljenim", a oni su
i dalje odjavljeni kada posete vašu stranicu ili aplikaciju. Imajte na umu da se ovo ne odnosi na SSO integracije, jer SSO ne zavisi
od kolačića.

Sada, sa novim podešavanjem koje se može omogućiti pod nazivom `Omogući iskačući prozor za kolačiće trećih strana` u podešavanjima vidžeta, ovaj problem je rešen otvaranjem
iskačućeg prozora koji preuzima kolačić korisnika. Za sada se ovo dešava samo ako interaguju sa vidžetom za komentare, ali rezultat je da
će komentar biti postavljen iz njihove FastComments.com sesije, označavajući njihov komentar kao provereni, i tako dalje.

### Kako to dobiti i dokumentacija

Svi FastComments korisnici na svim nivoima sada imaju pristup ovoj funkciji. Pogledajte [dokumentaciju](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) da saznate kako da omogućite zaobilaženje kolačića trećih strana.

### Na kraju

Kao i kod svih glavnih izdanja, drago nam je što možemo odvojiti vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---