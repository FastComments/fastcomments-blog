---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti email obavijesti[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolirati koliko često primaju email obavijesti za nove komentare i odgovore, svakih minuta, satni sažetak ili dnevni sažetak, s jedinstvenom zajedničkom postavkom, uz mogućnost preklapanja po pretplati.
{{/unless}}

{{#isPost}}

### Što je novo

Dodali smo postavku **Učestalost obavijesti o novim komentarima** koja kontrolira koliko često primate email obavijesti za obavijesti o odgovorima i obavijesti za stanare (novi komentar). Tri opcije su:

- **Svake minute** - primite email čim novi komentari stignu (provjerava se svake minute).
- **Satni sažetak** - primite objedinjeni sažetak novih komentara jednom po satu.
- **Dnevni sažetak** - primite objedinjeni sažetak novih komentara jednom dnevno.

Ova postavka dostupna je i administratorima stanara i komentatorima, i primjenjuje se na sve email obavijesti o komentarima. Imajte na umu da se obavijesti o @spominjanju uvijek šalju odmah bez obzira na ovu postavku.

Također možete nadjačati učestalost za pojedinačne pretplate u tablici Pretplate, za preciznu kontrolu nad pojedinim stranicama.

### Kako to konfigurirati

1. Idite na svoje [Postavke obavijesti](https://fastcomments.com/auth/my-account/edit-notifications).
2. Upotrijebite padajući izbornik **Učestalost obavijesti o novim komentarima** za postavljanje željene učestalosti.
3. Opcionalno, nadjačajte učestalost za pojedinačne pretplate u tablici Pretplate.
4. Kliknite **Spremi promjene**.

Zadana vrijednost je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Učestalost obavijesti također je dostupna putem API-ja. Postavka na razini korisnika je polje `notificationFrequency`, a preklapanja po pretplati mogu se postaviti putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Zaključak

Ovo daje korisnicima kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave s stranica. Jedna postavka sada pokriva i obavijesti o odgovorima i obavijesti za stanare, što ga čini jednostavnijim za upravljanje.

Javite nam u nastavku ako imate bilo kakve povratne informacije!

Cheers!

{{/isPost}}

---