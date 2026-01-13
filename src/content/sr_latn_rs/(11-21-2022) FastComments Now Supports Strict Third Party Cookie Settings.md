---
[category:Security]

###### [postdate]
# [postlink]FastComments Sada Podržava Stroge Postavke Kolačića Trećih Strana[/postlink]

{{#unless isPost}}
Do sada je FastComments zahtevao da kolačići trećih strana budu omogućeni za potpuno funkcionisanje. To više nije slučaj!
{{/unless}}

{{#isPost}}

### Šta je Novo

Onemogućavanje kolačića trećih strana po defaultu postaje norma u browserima fokusiranim na privatnost. Primer za to je Appleov Safari na iOS-u, gde
ako ostavite svoju email adresu da komentarišete sa FastComments, verifikujete taj komentar, a zatim se vratite na tu stranicu da ostavite još jedan komentar ili
odgovorite nekome, otkrićete da će svi dalje komentari koje ostavite biti označeni kao neprovereni.

To će se desiti samo sa defaultnom postavkom koja prikazuje oznaku `Neprovereno` na komentarima. Međutim, to može uticati na druge stvari poput automatskih odobrenja
ako su automatska odobrenja omogućena samo za proverene komentare.

Kao što možete zamisliti, ovo može rezultirati frustrirajućim ponašanjem gde korisnik verifikuje svoj komentar, klikne na "Zadrži me prijavljenim", a oni
i dalje nisu prijavljeni kada posete vašu stranicu ili aplikaciju. Imajte na umu da se ovo ne odnosi na SSO integracije, jer SSO ne zavisi
od kolačića.

Sada, sa novom postavkom koja može biti omogućena pod nazivom `Omogući iskačući prozor za kolačiće trećih strana` u postavkama vidgeta, ovaj problem je rešen
otvaranjem iskačućeg prozora koji povlači korisnički kolačić. Za sada se to dešava samo ako interaguju sa komentarima, ali rezultat je da
će komentar biti postavljen iz njihove FastComments.com sesije, označavajući njihov komentar kao verifikovan, i tako dalje.

### Kako Dobiti & Dokumentacija

Svi FastComments korisnici na svim nivoima sada imaju pristup ovoj funkciji. Pogledajte [dokumentaciju](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) da saznate kako da omogućite zaobilaženje kolačića trećih strana.

### Na Zaključak

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---