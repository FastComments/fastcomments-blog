---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Novi IP Alarmi za Prijavu[/postlink]

{{#unless isPost}}
FastComments sada šalje sigurnosnu obavijest putem e-pošte kada se otkrije prijava s nove IP adrese, uključujući približnu lokaciju, kako bi pomogao korisnicima da uoče neovlašteni pristup.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments sada automatski šalje sigurnosnu obavijest putem e-pošte kada otkrijemo prijavu na vaš račun s IP adrese koju nismo ranije vidjeli. E-pošta sadrži:

- **približnu lokaciju** (grad i zemlja) prijave.
- **IP adresu** koja je korištena.
- **vrijeme** prijave.
- Direktnu vezu za **promjenu vaše lozinke** ako prijava nije bila vaša.

Ovo se odnosi na sve metode prijave: prijava s lozinkom, čarobne poveznice i tokove dvostruke provjere autentičnosti.

### Privatnost

Ne pohranjujemo vašu sirovu IP adresu. Samo pohranjujemo obfusktiranu verziju za potrebe sigurnosne usporedbe. Približna lokacija se
utvrđuje u trenutku prijave i ne pohranjuje se.

**Vaša IP adresa se ne dijeli s trećim stranama** kako bi se odredila lokacija. Imamo vlastitu uslugu koja izvlači približnu lokaciju
iz (tjedno ažurirane) kopije MaxMind baze podataka.

### Kada se šalju obavijesti

Obavijest se šalje kada su **svi** od sljedećeg točni:

- Prijava je bila uspješna.
- To nije bila prva prijava korisnika.
- IP adresa nije viđena u prethodnoj uspješnoj prijavi za taj račun.

To znači da nećete dobiti obavijest pri vašoj prvoj prijavi, a nećete dobiti ponovljene obavijesti za istu IP adresu.

### U zaključku

Ovo je još jedan korak ka očuvanju sigurnosti vašeg računa. Ako primite obavijest koju ne prepoznajete, preporučamo da odmah promijenite
vašu lozinku.

 javite nam u nastavku ako imate bilo kakve povratne informacije!

Živjeli!

{{/isPost}}