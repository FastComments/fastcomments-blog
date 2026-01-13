---
[category:Features]
###### [postdate]
# [postlink]Dodana podrška za spoilere[/postlink]

{{#unless isPost}}
Korisnici sada mogu dodati spoilere u svoje komentare koji su skriveni dok ne pređete mišem preko njih.
{{/unless}}

{{#isPost}}

### Što je novo
Korisnici FastCommenta sada mogu kliknuti na gumb "SPOILER" za dodavanje spoilera u svoje komentare. Također mogu direktno napisati `<spoiler>neki tekst</spoiler>` oznake ako žele.
Imajte na umu da je opcija alatne trake za spoilere prema zadanim postavkama isključena.

### Uključivanje spoilera

U prilagodbi widgeta jednostavno možete omogućiti opciju `Spoilers` i kliknuti na spremi. Dokumentacija je [ovdje](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
Omogućili smo ih za ovaj blog post kako bismo demonstrirali funkciju.

### Za developere & Problemi na koje treba paziti

Zadani stil spoilera podržava svijetle i tamne načine. Ako pišete prilagođeni CSS za maskirani tekst, zapamtite da obuhvatite
tamni način ako vaša stranica to podržava.

### Zaključak

Kao i kod svih većih izdanja, drago nam je što smo mogli uzeti vremena za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---