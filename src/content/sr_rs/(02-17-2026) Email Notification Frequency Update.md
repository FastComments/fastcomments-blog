---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti obaveštenja putem e-pošte[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju obaveštenja putem e-pošte za nove komentare i odgovore, svake minute, na sat, ili dnevni pregled, sa posebnim podešavanjima za obaveštenja o odgovorima i obaveštenja za administratore, kao i mogućnostima za individualne pretplate.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Učestalost obaveštenja o odgovorima** i **Učestalost obaveštenja za administratore** podešavanja koja kontrolišu koliko često primate obaveštenja putem e-pošte za odgovore i nove komentare, respektivno. Tri opcije za svaku su:

- **Svake minute** - primajte e-poštu odmah kada novi komentari stignu (proverava se svake minute).
- **Pregled na sat** - primajte grupisani pregled novih komentara jednom na sat.
- **Dnevni pregled** - primajte grupisani pregled novih komentara jednom dnevno.

Učestalost obaveštenja o odgovorima je dostupna svim korisnicima i podrazumevano je **Svake minute**. Učestalost obaveštenja za administratore je dostupna administratorima sajta i podrazumevano je **Pregled na sat**. Imajte na umu da se @mention obaveštenja uvek šalju odmah, bez obzira na ova podešavanja.

Možete takođe prilagoditi učestalost na osnovu pojedinačnih pretplata u tabeli pretplata, za precizniju kontrolu nad pojedinačnim stranicama.

### Kako to konfigurirati

1. Idite na vaše [Podešavanje obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Učestalost obaveštenja o odgovorima** i **Učestalost obaveštenja za administratore** kada birate željenu učestalost.
3. Opcionalno, prilagodite učestalost za pojedinačne pretplate u tabeli pretplata.
4. Kliknite na **Sačuvaj izmene**.

### API podrška

Polje `notificationFrequency` na korisničkom objektu kontroliše učestalost obaveštenja o odgovorima, dok polje `adminNotificationFrequency` kontroliše učestalost obaveštenja za administratore. Prilagođene učestalosti po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Poglejte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Na kraju

Ovo daje korisnicima kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave sa stranica.

Obavestite nas u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---