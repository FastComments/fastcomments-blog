---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Novi IP obaveštenja o prijavi[/postlink]

{{#unless isPost}}
FastComments sada šalje sigurnosni obaveštenje putem email-a kada se detektuje prijava sa nove IP adrese, uključujući približnu lokaciju, kako bi pomogao korisnicima da otkriju neovlašćen pristup.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada automatski šalje sigurnosni obaveštenje putem email-a kada detektujemo prijavu na vaš nalog sa IP adrese koju prethodno nismo videli. Email uključuje:

- **približnu lokaciju** (grad i država) prijave.
- **IP adresu** koja je korišćena.
- **vreme** prijave.
- Direktan link za **promenu vaše lozinke** ako prijava nije bila vaša.

Ovo se odnosi na sve metode prijave: prijava pomoću lozinke, magični linkovi i tokovi dvofaktorske autentifikacije.

### Privatnost

Ne čuvamo vašu sirovu IP adresu. Čuvamo samo obfuscated formu u svrhe sigurnosne provere. Približna lokacija se
utvrđuje u trenutku prijave i ne čuva se.

**Vaša IP adresa se ne deli sa trećom stranom** za utvrđivanje lokacije. Host-ujemo našu uslugu koja izvlači približnu lokaciju
iz (nedeljom ažurirane) kopije MaxMind baze podataka.

### Kada se šalju obaveštenja

Obaveštenje se šalje kada su **svi** od sledećeg tačni:

- Prijava je bila uspešna.
- To nije prvi put korisnika da se prijavi.
- IP adresa nije viđena u prethodnoj uspešnoj prijavi za taj nalog.

To znači da nećete dobiti obaveštenje prilikom vaše prve prijave, i nećete dobiti ponovna obaveštenja za istu IP adresu.

### Na kraju

Ovo je još jedan korak ka očuvanju sigurnosti vašeg naloga. Ako primite obaveštenje koje ne prepoznajete, preporučujemo vam da odmah promenite
vašu lozinku.

Obavestite nas ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---