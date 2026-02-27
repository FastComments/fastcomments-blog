---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Ažuriranje učestalosti e-poštnih obavijesti[/postlink]

{{#unless isPost}}
Korisnici sada mogu kontrolirati koliko često primaju e-poštne obavijesti za nove komentare i odgovore, svake minute, kroz sati zbirki ili dnevne zbirke, s odvojenim postavkama za obavijesti o odgovorima i administratorima, plus preglede per-abonement.
{{/unless}}

{{#isPost}}

### Što je novo

Dodali smo **Učestalost obavijesti o odgovorima** i **Učestalost obavijesti za administratore** postavke koje kontroliraju koliko često primate e-poštne obavijesti za odgovore i nove komentare, redom. Tri opcije za svaku su:

- **Svake minute** - primite e-poštu čim nova komentara stignu (provjerava se svake minute).
- **Zbirka svake sate** - primite sažetak novih komentara jednom po satu.
- **Dnevna zbirka** - primite sažetak novih komentara jednom dnevno.

Učestalost obavijesti o odgovorima dostupna je svim korisnicima i zadana je na **Svake minute**. Učestalost obavijesti za administratore dostupna je administratorima stranice i zadana je na **Zbirka svake sate**. Imajte na umu da se @mention obavijesti uvijek šalju odmah bez obzira na ove postavke.

Također, možete nadjačati učestalost na osnovi svakog pretplatnika u tablici Pretplate, za finu kontrolu nad pojedinačnim stranicama.

### Kako to konfigurirati

1. Idite na svoje [Postavke obavijesti](https://fastcomments.com/auth/my-account/edit-notifications).
2. Upotrijebite padajuće izbornike **Učestalost obavijesti o odgovorima** i **Učestalost obavijesti za administratore** da postavite svoje preferirane učestalosti.
3. Opcionalno, nadjačajte učestalost za pojedinačne pretplate u tablici Pretplate.
4. Kliknite **Spremi promjene**.

### Podrška za API

Polje `notificationFrequency` na objektu korisnika kontrolira učestalost obavijesti o odgovorima, a polje `adminNotificationFrequency` kontrolira učestalost obavijesti za administratore. Prema pretplati mogu se postaviti nadjačanja putem polja `notificationFrequency` pretplate. Pogledajte [API dokumentaciju](https://docs.fastcomments.com/guide-api.html) za detalje.

### Na kraju

Ovo korisnicima daje kontrolu nad njihovim sandučićem bez potrebe da se potpuno odjave s stranica.

Javite nam u nastavku ako imate bilo kakvu povratnu informaciju!

Živjeli!

{{/isPost}}

---