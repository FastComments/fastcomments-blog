---
[category:Security]

###### [postdate]
# [postlink]FastComments Sada Podržava Stroge Postavke Kolačića Trećih Strana[/postlink]

{{#unless isPost}}
Do sada je FastComments zahtijevao da budu omogućeni kolačići trećih strana kako bi potpuno funkcionirao. To više nije slučaj!
{{/unless}}

{{#isPost}}

### Što je novo

Onemogućavanje kolačića trećih strana prema zadanim postavkama postaje norma u preglednicima usredotočenim na privatnost. Primjer toga je Appleov Safari na iOS-u, gdje
ako ostavite svoju e-poštu za komentiranje s FastComments, verificirate taj komentar, a zatim se vratite na tu stranicu kako biste ostavili još jedan komentar ili odgovorili
nekomu, otkrit ćete da će svi daljnji komentari koje ostavite biti označeni kao neprovjereni.

To će se dogoditi samo s zadanim postavkama koje prikazuju oznaku `Neprovjereno` na komentarima. Međutim, to može utjecati na druge stvari poput automatskih odobrenja
ako su automatska odobrenja omogućena samo za provjerene komentare.

Kao što možete zamisliti, ovo može rezultirati frustrirajućim ponašanjem gdje korisnik verificira svoj komentar, klikne "Ostani prijavljen", a oni nisu
prijavljeni kada posjete vašu stranicu ili aplikaciju. Imajte na umu da se ovo ne odnosi na SSO integracije, jer SSO ne ovisi
o kolačićima.

Sada, s novim postavkom koja se može omogućiti pod nazivom `Omogući iskačući prozor za kolačiće trećih strana` u postavkama widgeta, ovaj problem je riješen
otvaranjem iskačućeg prozora koji dohvati korisnički kolačić. Za sada se to događa samo ako interagiraju s widgetom za komentare, ali rezultat je da
će komentar biti objavljen iz njihove sesije na FastComments.com, označavajući njihov komentar kao provjeren, i tako dalje.

### Kako to dobiti i dokumentacija

Svi FastComments korisnici na svim razinama sada imaju pristup ovoj značajci. Pogledajte [dokumentaciju](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) kako biste saznali kako omogućiti zaobilaženje kolačića trećih strana.

### Na kraju

Kao i kod svih važnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove značajke. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---