---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti email obaveštenja[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju email obaveštenja o novim komentarima i odgovorima, svake minute, dnevni pregled ili satni pregled, sa posebnim podešavanjima za obaveštenja o odgovorima i admin obaveštenja, plus proširenja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Učestalost obaveštenja o odgovorima** i **Učestalost admin obaveštenja** podešavanja koja kontrolišu koliko često primate email obaveštenja o odgovorima i novim komentarima, redom. Tri opcije za svako su:

- **Svake minute** - primajte email čim novi komentari stignu (proverava se svake minute).
- **Satni pregled** - primajte grupisani rezime novih komentara jednom na sat.
- **Dnevni pregled** - primajte grupisani rezime novih komentara jednom dnevno.

Učestalost obaveštenja o odgovorima je dostupna svim korisnicima i podrazumevano je **Svake minute**. Učestalost admin obaveštenja je dostupna za administratore sajta i podrazumevano je **Satni pregled**. Imajte na umu da se @mention obaveštenja uvek šalju odmah bez obzira na ova podešavanja.

Takođe možete prepraviti učestalost po svakoj pretplati u tabeli Pretplate, za preciznu kontrolu nad pojedinačnim stranicama.

### Kako to konfigurisati

1. Idite na svoje [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Učestalost obaveštenja o odgovorima** i **Učestalost admin obaveštenja** padajuće liste da postavite svoje željene učestalosti.
3. Opcionalno, prepravite učestalost za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvaj izmene**.

### API podrška

Polje `notificationFrequency` na korisničkom objektu kontroliše učestalost obaveštenja o odgovorima, a polje `adminNotificationFrequency` kontroliše učestalost admin obaveštenja. Proširenja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Na zaključku

Ovo omogućava korisnicima kontrolu nad svojim inboxom bez potrebe da se potpuno odjave sa stranica.

Javite nam u komentarima ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---