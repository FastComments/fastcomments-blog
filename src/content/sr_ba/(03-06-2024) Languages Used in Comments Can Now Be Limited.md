---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Sada je moguće ograničiti jezike korišćene u komentarima[/postlink]

{{#unless isPost}}
Neke zajednice žele da ograniče jezike koji se koriste. To sada može biti učinjeno sa FastComments.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek pokušavao da podrži što više jezika i lokaliteta.

Međutim, neke zajednice žele da ograniče jezike koji se koriste za komunikaciju i pisanje komentara.

Umesto da se to nameće kao pravilo, i potencijalno zabrani korisnicima, sada se može eksplicitno konfigurisati na platformi.

### Kako postaviti

U istom korisničkom interfejsu za prilagođavanje Widgeta sa kojim ste verovatno upoznati, sada možete odabrati jedan ili više jezika na kojima se komentari mogu pisati.

Platforma će, prilikom podnošenja komentara, pokušati da odredi jezik komentara u realnom vremenu. Ako je pouzdanost utvrđenog jezika
preko 70%, i podudara se sa dozvoljenim jezikom, komentar je dozvoljen.

Ako napisani komentar nije na jeziku definisanom vašom konfiguracijom, korisniku će biti prikazana poruka o grešci na njegovom jeziku.

### Uticaj na developere

Ova konfiguracija će uticati i na komentare sačuvane putem API-ja.

Primićete grešku poput sledeće:

            status: 'failed',
            reason: `Komentar izgleda kao da je na jednom od ovih jezika: [es], ali su dozvoljeni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Poruka o grešci na jeziku korisnika."

### Zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcionalnosti. Obavestite nas
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---