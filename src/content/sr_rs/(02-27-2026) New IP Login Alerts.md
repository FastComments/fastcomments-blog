---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nova IP obaveštenja o prijavljivanju[/postlink]

{{#unless isPost}}
FastComments sada šalje obaveštenje o bezbednosti putem e-pošte kada se prijavi sa nove IP adrese, uključujući približnu lokaciju, kako bi pomogao korisnicima da otkriju neautorizovani pristup.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada automatski šalje obaveštenje o bezbednosti putem e-pošte kada detektujemo prijavu na vaš nalog sa IP adrese koju nismo prethodno videli. E-pošta uključuje:

- **približnu lokaciju** (grad i država) prijave.
- **IP adresu** koja je korišćena.
- **vreme** prijave.
- Direktnu vezu za **promenu vaše lozinke** ako prijava nije bila vaša.

Ovo se primenjuje na sve metode prijavljivanja: prijava zasnovana na lozinkama, magične veze i protokoli dvofaktorske autentifikacije.

### Privatnost

Ne čuvamo vašu izvornoj IP adresu. Čuvamo samo obfuskovanu formu u svrhe bezbednosne provere. Približna lokacija se određuje u trenutku prijave i ne čuva se.

**Vaša IP adresa se ne deli sa trećim stranama** za određivanje lokacije. Gosti naš vlastiti servis koji izdvaja približnu lokaciju iz (nedeljno ažurirane) kopije MaxMind baze podataka.

### Kada se šalju obaveštenja

Obaveštenje se šalje kada su **svi** od sledećih uslova ispunjeni:

- Prijava je bila uspešna.
- To nije prva prijava korisnika.
- IP adresa nije viđena u prethodnoj uspešnoj prijavi za taj nalog.

To znači da nećete dobiti obaveštenje pri vašoj prvoj prijavi, i nećete dobiti ponovljena obaveštenja za istu IP adresu.

### Na kraju

Ovo je još jedan korak ka očuvanju bezbednosti vašeg naloga. Ako primite obaveštenje koje ne prepoznajete, preporučujemo da odmah promenite vašu lozinku.

Obavestite nas u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}