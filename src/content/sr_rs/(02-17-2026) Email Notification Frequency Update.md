---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije obaveštenja putem e-maila[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolisati koliko često primaju obaveštenja putem e-maila za nove komentare i odgovore — svake minute, svakog časa ili dnevno — uz jednu zajedničku postavku, kao i individualne preklapanja po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo opciju **Frekvencija obaveštenja o novim komentarima** koja kontroliše koliko često primate obaveštenja putem e-maila za obaveštenja o odgovorima i obaveštenja o novim komentarima. Tri opcije su:

- **Svake minute** - primajte e-mail čim novi komentari stignu (proverava se svake minute).
- **Svakodnevni pregled** - primajte grupisani pregled novih komentara jednom na sat.
- **Dnevni pregled** - primajte grupisani pregled novih komentara jednom dnevno.

Ova postavka je dostupna i administratorima stanara i komentatorima i važi za sve e-mailove obaveštenja o komentarima. Imajte na umu da se obaveštenja o @pominjanjima uvek šalju odmah, bez obzira na ovu postavku.

Takođe, možete preklapati frekvenciju po svakom pojedinačnom pretplatom u tabeli Pretplate, za fine kontrole nad pojedinačnim stranicama.

### Kako to konfigurirati

1. Idite na svoje [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite **Frekvenciju obaveštenja o novim komentarima** padajući meni da postavite svoju omiljenu frekvenciju.
3. Opcionalno, preklopite frekvenciju za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvaj promene**.

Podrazumevana opcija je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Postavka na nivou korisnika je <div class="code">notificationFrequency</div> polje, a preklapanja po pretplati se mogu postaviti putem <div class="code">notificationFrequency</div> polja pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Zaključak

Ovo daje korisnicima kontrolu nad njihovim inbox-om bez potrebe da se potpuno odjave sa stranica. Jedna postavka sada pokriva i obaveštenja o odgovorima i obaveštenja o novim komentarima, čineći upravljanje jednostavnijim.

Javite nam ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---