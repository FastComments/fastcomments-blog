---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije email obaveštenja[/postlink]

{{#unless isPost}}
Kor users now control how often they receive email notifications for new comments and replies, every minute, hourly digest, or daily digest, with a single shared setting, plus per-subscription overrides.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Postavku frekvencije obaveštenja o novim komentarima** koja kontroliše koliko često primate email obaveštenja za obaveštenja o odgovorima i obaveštenja o stanaru (novim komentarima). Tri opcije su:

- **Svake minute** - primite email čim novi komentari stignu (proverava se svake minute).
- **Satni pregled** - primate grupni pregled novih komentara jednom na sat.
- **Dnevni pregled** - primate grupni pregled novih komentara jednom dnevno.

Ova postavka je dostupna za administratore stanara i komentatore, i važi za sve emailove sa obaveštenjima o komentarima. Imajte na umu da se @mention obaveštenja uvek šalju odmah bez obzira na ovu postavku.

Takođe možete preinačiti frekvenciju na osnovu svake pretplate u tabeli Pretplate, za preciznu kontrolu pojedinačnih stranica.

### Kako to konfigurirati

1. Idite na svoje [Postavke obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Dropdown za frekvenciju obaveštenja o novim komentarima** da postavite svoju preferiranu frekvenciju.
3. Opcionalno, preinačite frekvenciju za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvajte promene**.

Podrazumevano je **Svake minute**, što odgovara prethodnom ponašanju.

### API Podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Postavka na nivou korisnika je `notificationFrequency` polje, a preinačenja po pretplati mogu se postaviti putem `notificationFrequency` polja pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### U zaključku

Ovo daje korisnicima kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave sa stranica. Jedna postavka sada pokriva obaveštenja o odgovorima i stanarima, što olakšava upravljanje.

Javite nam ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---