---
[category:Sigurnost]

###### [postdate]
# [postlink]FastComments sada podržava stroge postavke kolačića trećih strana[/postlink]

{{#unless isPost}}
Do sada je FastComments zahtevao da budu omogućeni kolačići trećih strana da bi potpuno funkcionisao. To više nije slučaj!
{{/unless}}

{{#isPost}}

### Šta je novo

Onemogućavanje kolačića trećih strana po defaultu postaje norma u browserima fokusiranim na privatnost. Primer toga je Appleov Safari na iOS-u, gde
ako ostavite svoju email adresu za komentarisanje sa FastComments, verifikujete taj komentar, a zatim se vratite na tu stranicu da ostavite još jedan komentar ili odgovorite
nekom, primetićete da će svi dalji komentari koje ostavite biti označeni kao neprovereni.

To će se dogoditi samo sa podrazumevanim podešavanjima koja prikazuju oznaku `Neprovereno` na komentarima. Međutim, ovo može uticati na druge stvari kao što su automatska odobrenja
ako su automatska odobrenja omogućena samo za provere komentare.

Kao što možete zamisliti, ovo može rezultirati frustrirajućim ponašanjem gde korisnik verifikuje svoj komentar, klikne na "Ostani prijavljen", a i dalje nije
prijavljen kada poseti vašu stranicu ili aplikaciju. Napominjemo da se ovo ne odnosi na SSO integracije, jer SSO ne zavisi
od kolačića.

Sada, sa novim podešavanjem koje se može omogućiti pod nazivom `Omogući iskačući prozor za kolačiće trećih strana` u podešavanjima widgeta, ovaj problem je rešen otvaranjem
iskačućeg prozora koji prikuplja kolačić korisnika. Za sada se to događa samo ako interaguju sa komentar widgetom, ali rezultat je to da
će komentar biti postavljen iz njihove FastComments.com sesije, obeležavajući njihov komentar kao proveren, i tako dalje.

### Kako do toga i dokumentacija

Svi FastComments korisnici na svim nivoima sada imaju pristup ovoj funkciji. Pogledajte [dokumentaciju](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) da saznate kako da omogućite zaobilaženje
kolačića trećih strana.

### Zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}