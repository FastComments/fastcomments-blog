---
[category:Features]
###### [postdate]
# [postlink]Omogućene obavijesti putem e-pošte za pretplate[/postlink]

{{#unless isPost}}
FastComments sada šalje e-poštu korisnicima za stranice na koje su pretplaćeni.
{{/unless}}

{{#isPost}}

### Što je novo

S FastComments korisnici mogu kliknuti ikonu zvona na widgetu komentara kako bi se pretplatili na tu stranicu. Obavijestit ćemo ih
kada se novi komentari ostave na toj stranici ili kada postoji novi komentar u niti odgovora kojoj pripadaju.

To radimo već godinama, međutim nismo slali e-poštu za ove obavijesti - one su bile vidljive samo na našoj pločici.

Sada ćemo slati e-poštu za ove obavijesti.

### Novi tipovi e-pošte

Sada šaljemo dva nova tipa e-pošte. Prvi je kada imate samo nekoliko obavijesti. Jednostavno ćemo navesti
nove komentare u e-pošti za vas.

Drugi tip e-pošte koju ćete primiti sadrži poveznice na svaku stranicu za koju ste primili obavijesti. Ovo se šalje
kada primite mnogo obavijesti.

Ove obavijesne e-pošte odnose se samo na nove komentare na stranicama na koje ste pretplaćeni.

### Raspored obavijesti putem e-pošte

Obavijesne e-pošte šalju se svake sate kako bi se spriječilo prekomjerno slanje e-pošte. Izuzetak je ako stranica u pitanju ima više od deset tisuća
komentara, u kojem slučaju ćemo slati obavijesti za tu stranicu samo jednom dnevno.

### Za vlasnike stranica - prilagodba e-pošte

Nova predložak e-pošte `Novi komentari pretplata` uskoro će biti dostupan za prilagodbu.

### Za programere i zamke

Za SSO korisnike, e-pošte s obavijestima nećemo slati prema zadanim postavkama. Morat ćete proslijediti novu oznaku: `optedInSubscriptionNotifications: true` u objektu korisnika, ili
u teretu widgeta s komentarima, kako biste omogućili ove nove obavijesti.

### Na zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---