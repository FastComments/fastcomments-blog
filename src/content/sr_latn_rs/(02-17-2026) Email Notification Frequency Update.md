---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti obaveštenja putem email-a[/postlink]

{{#unless isPost}}
Korisnici sada mogu da kontrolišu koliko često primaju obaveštenja putem email-a za nove komentare i odgovore, svake minute, u okviru sata ili dnevni pregled, sa odvojenim podešavanjima za obaveštenja o odgovorima i administratorima, plus mogućnost za individualne izmene po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Učestalost obaveštenja o odgovorima** i **Učestalost obaveštenja za administratore** koja kontrolišu koliko često primate obaveštenja putem email-a za odgovore i nove komentare, redom. Tri opcije za svaku su:

- **Svake minute** - primajte email čim novi komentari stignu (proverava se svake minute).
- **Dnevni pregled** - primajte sažetak novih komentara jednom na sat.
- **Dnevni pregled** - primajte sažetak novih komentara jednom dnevno.

Učestalost obaveštenja o odgovorima je dostupna svim korisnicima i podrazumeva se na **Svake minute**. Učestalost obaveštenja za administratore je dostupna administratorima sajta i podrazumeva se na **Dnevni pregled**. Imajte na umu da se @mention obaveštenja uvek šalju odmah bez obzira na ova podešavanja.

Takođe možete da promenite učestalost na osnovu pojedinačnih pretplata u tabeli Pretplata, za bolju kontrolu nad pojedinačnim stranicama.

### Kako to konfigurisati

1. Idite na vaše [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Učestalost obaveštenja o odgovorima** i **Učestalost obaveštenja za administratore** drop-down menije da postavite svoje željene učestalosti.
3. Opcionalno, promenite učestalost za pojedinačne pretplate u tabeli Pretplata.
4. Kliknite na **Sačuvaj izmene**.

### API podrška

Polje `notificationFrequency` na objektu korisnika kontroliše učestalost obaveštenja o odgovorima, a polje `adminNotificationFrequency` kontroliše učestalost obaveštenja za administratore. Izmene po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za više detalja.

### Na kraju

Ovo korisnicima daje kontrolu nad svojim inboxom bez potrebe da se potpuno odjave sa stranica.

Obavestite nas u nastavku ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---