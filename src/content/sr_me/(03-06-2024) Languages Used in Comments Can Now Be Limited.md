---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Sada možete ograničiti jezike korišćene u komentarima[/postlink]

{{#unless isPost}}
Neke zajednice žele da ograniče jezike koji se koriste. To se sada može uraditi sa FastComments.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je oduvek pokušavao da podrži što više jezika i lokalizacija.

Međutim, neke zajednice žele da ograniče jezike koji se koriste za komunikaciju i pisanje komentara.

Umesto da se to nameće kao pravilo, i potencijalno zabranjuje korisnicima, sada se to može eksplicitno konfigurisati na platformi.

### Kako to postaviti

U istom korisničkom interfejsu za prilagođavanje vidžeta koji verovatno poznajete, sada možete odabrati jedan ili više jezika na kojima se mogu pisati komentari.

Platforma će, prilikom podnošenja komentara, pokušati da odredi jezik komentara u realnom vremenu. Ako je prosek utvrđenog jezika
veći od 70%, i poklapa se sa dozvoljenim jezikom, onda je komentar dozvoljen.

Ako napisan komentar nije na jeziku definisanom vašom konfiguracijom, korisniku će biti prikazana poruka o grešci na svom jeziku.

### Uticaj na programere

Ova konfiguracija će uticati i na komentare sačuvane preko API-ja.

Dobićete grešku koja izgleda ovako:

            status: 'failed',
            reason: `Komentar izgleda kao da je na jednom od ovih jezika: [es], ali su dozvoljeni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Poruka o grešci na jeziku korisnika."

### U zaključku

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno pustimo ovu funkcionalnost. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---