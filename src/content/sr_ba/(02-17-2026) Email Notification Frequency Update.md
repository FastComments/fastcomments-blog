---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti obaveštenja putem e-pošte[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju obaveštenja putem e-pošte za nove komentare i odgovore, svake minute, satni pregled ili dnevni pregled, sa jednim zajedničkim podešavanjem, plus preklapanja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo podešavanje **Učestalost obaveštenja o novim komentarima** koje kontroliše koliko često primate obaveštenja putem e-pošte za obaveštenja o odgovorima i obaveštenja o iznajmljivačima (novim komentarima). Tri opcije su:

- **Svake minute** - primajte e-poštu čim novi komentari stignu (proverava se svake minute).
- **Satni pregled** - primajte grupisani pregled novih komentara jednom na sat.
- **Dnevni pregled** - primajte grupisani pregled novih komentara jednom dnevno.

Ovo podešavanje je dostupno i administratorima iznajmljivača i komentatorima, i odnosi se na sva obaveštenja o komentarima putem e-pošte. Imajte na umu da se obaveštenja o @pominjanju uvek šalju odmah, bez obzira na ovo podešavanje.

Takođe možete preklapati učestalost na osnovu pretplate u tabeli Pretplata, za preciznu kontrolu nad pojedinačnim stranicama.

### Kako ga konfigurisati

1. Idite na svoja [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Iskoristite padajući meni **Učestalost obaveštenja o novim komentarima** da postavite svoju željenu učestalost.
3. Opcionalno, preklonite učestalost za pojedinačne pretplate u tabeli Pretplata.
4. Kliknite **Sačuvaj promene**.

Podrazumevano je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Učestalost obaveštenja je takođe dostupna putem API-ja. Podešavanje na nivou korisnika je polje `notificationFrequency`, a preklapanja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Na kraju

Ovo daje korisnicima kontrolu nad njihovim sandučetom bez potrebe da se potpuno odjave sa stranica. Jedno podešavanje sada pokriva i obaveštenja o odgovorima i iznajmljivačima, čineći upravljanje jednostavnijim.

javite nam u komentarima ispod ako imate povratne informacije!

Živeli!

{{/isPost}}

---