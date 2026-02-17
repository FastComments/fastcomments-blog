---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije obaveštenja putem emaila[/postlink]

{{#unless isPost}}
Korisnici sada mogu da kontrolišu koliko često primaju obaveštenja putem emaila za nove komentare i odgovore — svake minute, satni pregled ili dnevni pregled — uz jednu zajedničku postavku, plus pojedinačne izmene za svaku pretplatu.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo opciju **Frekvencija obaveštenja o novim komentarima** koja kontroliše koliko često primate obaveštenja putem emaila za obaveštenja o odgovorima i obaveštenja o stanarima (novim komentarima). Tri opcije su:

- **Svake minute** - primite email čim stignu novi komentari (proverava se svake minute).
- **Satni pregled** - primite sažetak novih komentara jednom na sat.
- **Dnevni pregled** - primite sažetak novih komentara jednom dnevno.

Ova postavka je dostupna i administratorima stanara i komentatorima, i primenjuje se na sva obaveštenja o komentarima putem emaila. Imajte na umu da se obaveštenja o @pomenima uvek šalju odmah bez obzira na ovu postavku.

Takođe možete da promenite frekvenciju za svaku pretplatu u tabeli Pretplate, za detaljnu kontrolu nad pojedinačnim stranicama.

### Kako to konfigurisati

1. Idite na [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite padajući meni **Frekvencija obaveštenja o novim komentarima** da postavite svoju željenu frekvenciju.
3. Opcionalno, prepravite frekvenciju za pojedinačne pretplate u tabeli Pretplate.
4. Kliknite na **Sačuvaj promene**.

Podrazumevana postavka je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Postavka na nivou korisnika je polje <div class="code">notificationFrequency</div>, a izmene po pretplati mogu se postaviti putem polja <div class="code">notificationFrequency</div> pretplate. Pogledajte [dokumentaciju API-ja](https://docs.fastcomments.com/guide-api.html) za detalje.

### Na kraju

Ovo daje korisnicima kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave sa stranica. Jedna postavka sada pokriva i obaveštenja o odgovorima i obaveštenja o stanarima, što olakšava upravljanje.

Obavestite nas ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---