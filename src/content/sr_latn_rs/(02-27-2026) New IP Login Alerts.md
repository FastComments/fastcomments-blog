---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Obaveštenja o prijavi sa novog IP adrese[/postlink]

{{#unless isPost}}
FastComments sada šalje obaveštenje o bezbednosti putem mejla kada se prijavi sa nove IP adrese, uključujući približnu lokaciju, kako bi pomogao korisnicima da otkriju neovlašćen pristup.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada automatski šalje obaveštenje o bezbednosti putem mejla kada detektujemo prijavu na vaš račun sa IP adrese koju ranije nismo videli. Mejlu su uključeni:

- **približna lokacija** (grad i država) prijave.
- **IP adresa** koja je korišćena.
- **vreme** prijave.
- Direktna veza za **promenu lozinke** ako prijava nije bila vaša.

Ovo se odnosi na sve metode prijave: prijava sa lozinkom, čarobne veze i tokove dvofaktorske autentifikacije.

### Privatnost

Ne čuvamo vašu sirovu IP adresu. Čuvamo samo obfuskovanu formu u svrhe upoređivanja sigurnosti. Približna lokacija se
utvrđuje u trenutku prijave i ne čuva se.

**Vaša IP adresa se ne deli sa trećim stranama** da bi se odredila lokacija. Gospodarimo našom uslugom koja izdvaja približnu lokaciju
iz (nedeljno ažurirane) kopije MaxMind baze podataka.

### Kada se šalju obaveštenja

Obaveštenje se šalje kada su **svi** od sledećih uslova ispunjeni:

- Prijava je bila uspešna.
- To nije prva prijava korisnika.
- IP adresa nije viđena u prethodnoj uspešnoj prijavi za taj račun.

To znači da nećete dobiti obaveštenje prilikom vaše prve prijave, i nećete dobijati ponavljajuća obaveštenja za istu IP adresu.

### Na kraju

Ovo je još jedan korak ka očuvanju bezbednosti vašeg računa. Ako primite obaveštenje kojeg ne prepoznajete, preporučujemo vam da odmah promenite
vašu lozinku.

Obavestite nas u komentaru ispod ako imate bilo kakve povratne informacije!

Živeli!

{{/isPost}}

---