---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti email obavijesti[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolirati koliko često primaju email obavijesti o novim komentarima i odgovorima — svake minute, sati ili dana — uz jednu zajedničku postavku, plus posebne nadopune za svaku pretplatu.
{{/unless}}

{{#isPost}}

### Što je novo

Dodali smo postavku **Učestalost obavijesti o novim komentarima** koja kontrolira koliko često primate email obavijesti za obavijesti o odgovorima i obavijesti od stanara (novi komentar). Tri opcije su:

- **Svake minute** - primite email čim novi komentari stignu (provjerava se svake minute).
- **Sati sažetak** - primite objedinjeni sažetak novih komentara jednom na sat.
- **Dnevni sažetak** - primite objedinjeni sažetak novih komentara jednom dnevno.

Ova postavka je dostupna i administratorima stanara i komentatorima, i primjenjuje se na sve email obavijesti o komentarima. Napominjemo da se obavijesti o @spominjanju uvijek šalju odmah bez obzira na ovu postavku.

Također možete promijeniti učestalost za svaku pretplatu pojedinačno u tablici Pretplate, za precizniju kontrolu nad pojedinim stranicama.

### Kako to konfigurirati

1. Idite na [Postavke obavijesti](https://fastcomments.com/auth/my-account/edit-notifications).
2. Koristite padajući izbornik **Učestalost obavijesti o novim komentarima** da postavite svoju željenu učestalost.
3. Opcionalno, nadopunite učestalost za pojedinačne pretplate u tablici Pretplate.
4. Kliknite **Spremi promjene**.

Zadano je **Svake minute**, što odgovara prethodnom ponašanju.

### API podrška

Učestalost obavijesti je također dostupna putem API-ja. Postavka na razini korisnika je <div class="code">notificationFrequency</div> polje, a posebne nadopune po pretplati mogu se postaviti putem <div class="code">notificationFrequency</div> polja pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### U zaključku

Ovo korisnicima daje kontrolu nad njihovim inboxom bez potrebe da se potpuno odjave s stranica. Jedna postavka sada pokriva i obavijesti o odgovorima i obavijesti od stanara, što olakšava upravljanje.

javite nam u nastavku ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---