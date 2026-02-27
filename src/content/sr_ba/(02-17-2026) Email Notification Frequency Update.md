---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije e-mail obaveštenja[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju e-mail obaveštenja za nove komentare i odgovore, svake minute, satne sumarne izveštaje ili dnevne sumarne izveštaje, sa odvojenim postavkama za obaveštenja o odgovorima i obaveštenja za admina, plus preklapanja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo postavke **Frekvencija obaveštenja o odgovorima** i **Frekvencija obaveštenja za admina** koje kontrolišu koliko često primate e-mail obaveštenja za odgovore i nove komentare, respektivno. Tri opcije za svaku su:

- **Svake minute** - primite e-mail čim novi komentari stignu (proverava se svake minute).
- **Satni sažetak** - primite grupni sažetak novih komentara jednom na sat.
- **Dnevni sažetak** - primite grupni sažetak novih komentara jednom dnevno.

Frekvencija obaveštenja o odgovorima je dostupna svim korisnicima i podrazumevano je **Svake minute**. Frekvencija obaveštenja za admina je dostupna adminima sajta i podrazumevano je **Satni sažetak**. Imajte na umu da se @mention obaveštenja uvek šalju odmah bez obzira na ove postavke.

Takođe možete preklapati frekvenciju za svaku pojedinačnu pretplatu u tabeli Pretplate, za detaljnu kontrolu preko pojedinačnih stranica.

### Kako to konfigurisati

1. Idite na svoje [Postavke obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Frekvenciju obaveštenja o odgovorima** i **Frekvenciju obaveštenja za admina** padajuće menije da postavite svoje željene frekvencije.
3. Opcionalno, preklapajte frekvenciju za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvaj promene**.

### API podrška

Polje `notificationFrequency` na objektu korisnika kontroliše frekvenciju obaveštenja o odgovorima, a polje `adminNotificationFrequency` kontroliše frekvenciju obaveštenja za admina. Preklapanja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Zaključak

Ovo omogućava korisnicima kontrolu nad svojim inboxom bez potrebe da se potpuno odjave sa stranica.

Javite nam u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---