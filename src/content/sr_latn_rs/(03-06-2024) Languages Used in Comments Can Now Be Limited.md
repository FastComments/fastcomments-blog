---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Jezici korišćeni u komentarima sada mogu biti ograničeni[/postlink]

{{#unless isPost}}
Neke zajednice žele da ograniče jezike koji se koriste. To se sada može uraditi sa FastComments.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek pokušavao da podrži što više jezika i lokalizacija moguće.

Međutim, neke zajednice žele da ograniče jezike koji se koriste za komunikaciju i pisanje komentara.

Umesto da se to sprovodi kao pravilo i potencijalno zabranjuju korisnici, to može biti eksplicitno konfigurisano na platformi.

### Kako to postaviti

U istom UI za prilagođavanje vidžeta koji verovatno poznajete, sada možete izabrati jedan ili više jezika na kojima se mogu pisati komentari.

Platforma će, nakon podnošenja komentara, pokušati da odredi jezik komentara u realnom vremenu. Ako je poverenje u određeni jezik
preko 70%, i ako se poklapa sa dopuštenim jezikom, onda je komentar dozvoljen.

Ako napisan komentar nije na jeziku definisanom vašom konfiguracijom, korisniku će biti prikazana poruka o grešci na njihovom jeziku.

### Uticaj na programere

Ova konfiguracija će uticati i na komentare sačuvane putem API-ja.

Primiti ćete grešku poput sledeće:

            status: 'failed',
            reason: `Komentar izgleda kao da je na jednom od ovih jezika: [es], ali su dozvoljeni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Poruka o grešci na jeziku korisnika."

### Zaključak

Kao i svi veliki izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---