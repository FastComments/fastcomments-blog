---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije obaveštenja putem e-pošte[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju obaveštenja putem e-pošte za nove komentare i odgovore — svake minute, u okviru satnog pregleda ili dnevnog pregleda — uz jednu zajedničku postavku, uz mogućnost prepisivanja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Postavku frekvencije obaveštenja o novim komentarima** koja kontroliše koliko često primate obaveštenja putem e-pošte za obaveštenja o odgovorima i obaveštenja o stanarima (novim komentarima). Tri opcije su:

- **Svake minute** - primite e-poštu čim novi komentari stignu (proverava se svake minute).
- **Satni pregled** - primite smešteni pregled novih komentara jednom na sat.
- **Dnevni pregled** - primite smešteni pregled novih komentara jednom dnevno.

Ova postavka je dostupna kako administratorima stanara, tako i komentatorima, i primenjuje se na sve e-poruke sa obaveštenjima o komentarima. Imajte na umu da se obaveštenja o @mention-u uvek šalju odmah bez obzira na ovu postavku.

Takođe možete prepisati frekvenciju na nivou pojedinačne pretplate u tabeli Pretplata, za precizniju kontrolu pojedinačnih stranica.

### Kako to konfigurisati

1. Idite na [Postavke obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Iskoristite padajući meni **Frekvencija obaveštenja o novim komentarima** da postavite svoju omiljenu frekvenciju.
3. Opcionalno, prepišite frekvenciju za pojedinačne pretplate u tabeli Pretplata.
4. Kliknite na **Sačuvaj promene**.

Podrazumevana postavka je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Postavka na nivou korisnika je polje <div class="code">notificationFrequency</div>, a prepisivanja po pretplati mogu se postaviti putem polja <div class="code">notificationFrequency</div> pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za više detalja.

### U zaključku

Ovo daje korisnicima kontrolu nad njihovim inbox-om bez potrebe za potpunim otkazivanjem pretplata na stranice. Jedna postavka sada pokriva i obaveštenja o odgovorima i stanarima, čineći upravljanje jednostavnijim.

Javite nam u komentaru ispod ako imate bilo kakve povratne informacije!

Živeli!

{{/isPost}}

---