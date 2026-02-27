---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Novi IP upozorenja prilikom prijavljivanja[/postlink]

{{#unless isPost}}
FastComments sada šalje e-mail upozorenje o bezbednosti kada je prijavljivanje otkriveno sa nove IP adrese, uključujući približnu lokaciju, kako bi pomogao korisnicima da otkriju neovlašćen pristup.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada automatski šalje e-mail upozorenje o bezbednosti kada otkrijemo prijavljivanje na vaš račun sa IP adrese koju ranije nismo videli. E-mail uključuje:

- **približnu lokaciju** (grad i zemlju) prijavljivanja.
- **IP adresu** koja je korišćena.
- **vreme** prijavljivanja.
- Direktnu vezu za **promenu vaše lozinke** ako prijavljivanje nije bilo od vas.

Ovo se odnosi na sve metode prijavljivanja: prijavljivanje zasnovano na lozinki, magične linkove i tokove dvofaktorske autentifikacije.

### Privatnost

Ne čuvamo vašu sirovu IP adresu. Čuvamo samo obfuskovanu formu u svrhe poređenja bezbednosti. Približna lokacija se
utvrđuje u trenutku prijavljivanja i ne čuva se.

**Vaša IP adresa se ne deli sa trećim stranama** kako bi se odredila lokacija. Hostujemo našu vlastitu uslugu koja ekstrahuje približnu lokaciju
iz (nedeljno ažurirane) kopije MaxMind baze podataka.

### Kada se šalju upozorenja

Upozorenje se šalje kada su **svi** od sledećih uslova ispunjeni:

- Prijavljivanje je bilo uspešno.
- To nije prvotno prijavljivanje korisnika.
- IP adresa nije viđena u prethodnom uspešnom prijavljivanju za taj račun.

To znači da nećete dobiti upozorenje pri vašem prvom prijavljivanju, i nećete dobijati ponovna upozorenja za istu IP.

### Na kraju

Ovo je još jedan korak ka očuvanju vaše sigurnosti računa. Ako primite upozorenje koje ne prepoznajete, preporučujemo da odmah promenite
vašu lozinku.

Javite nam u nastavku ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---