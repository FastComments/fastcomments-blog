---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje frekvencije obaveštenja putem email-a[/postlink]

{{#unless isPost}}
Korisnici sada mogu da kontrolišu koliko često primaju obaveštenja putem email-a za nove komentare i odgovore — svake minute, tačno na satu ili svakodnevno — sa jednim zajedničkim podešavanjem, plus prepravkama po pretplati.
{{/unless}}

{{#isPost}}

### Šta je novo

Dodali smo **Podešavanje frekvencije obaveštenja o novim komentarima** koje kontroliše koliko često primaš obaveštenja putem email-a za obaveštenja o odgovorima i obaveštenja o novim komentarima (novi komentari od strane zakupaca). Tri opcije su:

- **Svake minute** - primaćeš email čim novi komentari stignu (proverava se svake minute).
- **Pregled na svaka sat** - primaćeš sažetak novih komentara svake nedelje.
- **Pregled na svakodnevnoj bazi** - primaćeš sažetak novih komentara svakodnevno.

Ovo podešavanje je dostupno i za administratore zakupaca i za komentatore, i primenjuje se na sve email-ove za obaveštenja o komentarima. Imajte na umu da se obaveštenja o @pominjanju uvek šalju odmah, bez obzira na ovo podešavanje.

Možeš takođe prepraviti frekvenciju na osnovu svake pretplate u tabeli pretplata, za preciznu kontrolu pojedinačnih stranica.

### Kako to konfigurisati

1. Idi na [Podešavanja obaveštenja](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristi **Dropdown za frekvenciju obaveštenja o novim komentarima** da postaviš svoju željenu frekvenciju.
3. Opcionalno, prepravi frekvenciju za pojedinačne pretplate u tabeli pretplata.
4. Klikni **Sačuvaj izmene**.

Podrazumevano je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Frekvencija obaveštenja je takođe dostupna putem API-ja. Podešavanje na nivou korisnika je polje <div class="code">notificationFrequency</div>, a prepravke po pretplati mogu se postaviti putem polja <div class="code">notificationFrequency</div> pretplate. Pogledaj [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### U zaključku

Ovo daje korisnicima kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave sa stranica. Jedno podešavanje sada pokriva kako obaveštenja o odgovorima tako i obaveštenja o zakupcima, čineći upravljanje jednostavnijim.

Javi nam u komentarima ispod ako imaš bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}