---
[category:Značajke]
[category:Moderacija]
###### [postdate]
# [postlink]Jezici korišteni u komentarima sada se mogu ograničiti[/postlink]

{{#unless isPost}}
Neke zajednice žele ograničiti korištene jezike. To se sada može učiniti s FastComments.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments uvijek nastoji podržati što više jezika i lokalizacija.

Međutim, neke zajednice žele ograničiti jezike koji se koriste za komunikaciju i pisanje komentara.

Umjesto da se to nameće kao pravilo i potencijalno zabranjuje korisnicima, sada se može izričito konfigurirati na platformi.

### Kako postaviti

U istom UI prilagodbe vidžeta s kojim ste vjerojatno upoznati, sada možete odabrati jedan ili više jezika na kojima se komentari mogu pisati.

Platforma će, prilikom predaje komentara, pokušati odrediti jezik komentara u stvarnom vremenu. Ako je povjerenje određenog jezika
veće od 70%, i podudara se s dopuštenim jezikom, tada je komentar dopušten.

Ako napisani komentar nije na jeziku definiranom vašom konfiguracijom, korisniku će biti prikazana poruka o grešci na njegovom jeziku.

### Utjecaj na programere

Ova konfiguracija će utjecati na komentare spremljene putem API-ja.

Primijetit ćete grešku poput sljedeće:

            status: 'failed',
            reason: `Komentar izgleda kao da je na jednom od ovih jezika: [es], ali su dopušteni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Poruka o grešci na jeziku korisnika."

### Na kraju

Kao i svi veći izdanja, drago nam je da smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---