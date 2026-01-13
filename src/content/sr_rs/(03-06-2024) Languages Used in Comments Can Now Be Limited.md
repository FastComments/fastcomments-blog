---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Jezici korišćeni u komentarima sada mogu biti ograničeni[/postlink]

{{#unless isPost}}
Neke zajednice žele da ograniče jezike koji se koriste. To se sada može uraditi uz pomoć FastComments.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek pokušavao da podrži što više jezika i lokalizacija.

Međutim, neke zajednice žele da ograniče jezike koji se koriste za komunikaciju i pisanje komentara.

Umesto da se to nameće kao pravilo, i potencijalno zabranjuju korisnici, sada se može eksplicitno konfigurisati na platformi.

### Kako to postaviti

U istom UI za prilagođavanje vidžeta sa kojim ste verovatno upoznati, sada možete da odaberete jedan ili više jezika na kojima se komentari mogu pisati.

Platforma će, prilikom slanja komentara, pokušati da utvrdi jezik komentara u realnom vremenu. Ako je procenat utvrđenog jezika
preko 70%, i ako se poklapa sa dozvoljenim jezikom, tada je komentar dozvoljen.

Ako napisani komentar nije na jeziku definisanom vašom konfiguracijom, korisniku će biti prikazana poruka o grešci na njegovom jeziku.

### Uticaj na programere

Ova konfiguracija će uticati na komentare sačuvane putem API-ja.

Primićete grešku kao što je sledeća:

            status: 'failed',
            reason: `Komentar izgleda kao da je na jednom od ovih jezika: [es], ali su dozvoljeni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Poruka o grešci na jeziku korisnika."

### Na kraju

Kao i kod svih velikih izdanja, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentaru ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---