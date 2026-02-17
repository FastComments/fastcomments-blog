---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije obaveštenja putem email-a[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju obaveštenja putem email-a za nove komentare i odgovore, svake minute, satni pregled ili dnevni pregled, uz jedinstvenu zajedničku postavku, plus preklapanja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Postavku frekvencije obaveštenja o novim komentarima** koja kontroliše koliko često primate obaveštenja putem email-a za obaveštenja o odgovorima i obaveštenja o novim komentarima. Tri opcije su:

- **Svake minute** - primite email odmah čim novi komentari stignu (proverava se svake minute).
- **Satni pregled** - primite sažetak novih komentara jednom na sat.
- **Dnevni pregled** - primite sažetak novih komentara jednom dnevno.

Ova postavka je dostupna kako administratorima, tako i komentatorima, i primenjuje se na sve email-ove obaveštenja o komentarima. Imajte na umu da se @mention obaveštenja uvek šalju odmah bez obzira na ovu postavku.

Možete takođe preklapati frekvenciju po pojedinačnim pretplatama u tabeli Pretplate, za preciznu kontrolu nad pojedinačnim stranicama.

### Kako to konfigurisati

1. Idite na [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite padajući meni **Frekvencija obaveštenja o novim komentarima** da postavite svoju željenu frekvenciju.
3. Opcionalno, preklopite frekvenciju za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvaj promene**.

Podrazumevano je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Postavka na nivou korisnika je polje `notificationFrequency`, a preklapanja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [dokumentaciju API-ja](https://docs.fastcomments.com/guide-api.html) za detalje.

### Zaključak

Ovo daje korisnicima kontrolu nad njihovom inbox bez potrebe da se potpuno odjave sa stranica. Sada jedna postavka pokriva i obaveštenja o odgovorima i obaveštenja o novim komentarima, čineći upravljanje jednostavnijim.

Javite nam u komentarima ispod ako imate bilo kakvih povratnih informacija!

Pozdrav!

{{/isPost}}

---