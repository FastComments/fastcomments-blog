---
[category:Security]

###### [postdate]
# [postlink]FastComments sada podržava stroge postavke kolačića trećih strana[/postlink]

{{#unless isPost}}
Do sada je FastComments zahtevao da kolačići trećih strana budu omogućeni da bi potpuno funkcioniše. To više nije slučaj!
{{/unless}}

{{#isPost}}

### Šta je novo

Onemogućavanje kolačića trećih strana prema defaultu postaje norma u browserima usredotočenim na privatnost. Primer toga je Apple-ov Safari na iOS-u, gde
ako ostavite svoj email da biste komentarisali sa FastComments, verifikujete taj komentar, a zatim se vratite na tu stranicu da ostavite još jedan komentar, ili odgovorite
nekom, primetićete da će svi dalji komentari koje ostavite biti označeni kao neprovereni.

To će se desiti samo sa podrazumevanjem da će se na komentarima prikazivati oznaka `Neproveren`. Međutim, to može uticati i na druge stvari poput automatskih odobrenja
ako su automatska odobrenja omogućena samo za proverene komentare.

Kao što možete zamisliti, to može dovesti do frustrirajućeg ponašanja gde korisnik proveri svoj komentar, klikne na "Zadrži me prijavljenim", a nije
i dalje prijavljen kada poseti vašu stranicu ili aplikaciju. Imajte na umu da se ovo ne odnosi na SSO integracije, jer SSO ne zavisi
od kolačića.

Sada, sa novom postavkom koja može biti omogućena pod nazivom `Omogućite iskačući prozor kolačića trećih strana` u postavkama vidžeta, ovaj problem je rešen
otvaranjem iskačućeg prozora koji preuzima kolačić korisnika. Za sada se to dešava samo ako interaguju sa vidžetom za komentare, ali rezultat je
da će komentar biti postavljen iz njihove FastComments.com sesije, označavajući njihov komentar kao verificiran, i tako dalje.

### Kako to dobiti i dokumentacija

Svi FastComments korisnici na svim nivoima sada imaju pristup ovoj funkciji. Pogledajte [dokumentaciju](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) da biste naučili kako da omogućite zaobilaženje kolačića trećih strana.

### U zaključku

Kao i sa svim većim izdanjima, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---