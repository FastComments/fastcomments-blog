---
[category:Features]
###### [postdate]
# [postlink]FastComments dobija @mentions[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da @pomenete jednog ili više korisnika u komentaru? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Dok je ranije FastComments obaveštavao korisnike ako ste odgovorili na njihove komentare, nije bilo načina da se označi više ljudi u jednom komentaru. Takođe, ova
obaveštenja su se slala u serijama svake sat vremena. S `@mentions`, sada je moguće označiti jednog ili više korisnika i FastComments će ih odmah obavestiti putem emaila.

### Kako to koristiti

Kada otkucate `@`, a zatim početak imena korisnika, pojaviće se lista rezultata pretrage.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Korišćenje Pomenutom" title="@mentions Demo" />
</div>

Jednostavno kliknite na ime korisnika koje želite da označite.

Pored toga, možete koristiti strelice nagore i nadole za navigaciju kroz ovu listu, a pritisnite enter da selektujete ili escape da napustite.

Znamo da možda želite da koristite simbol `@` bez označavanja korisnika. FastComments će ovo prepoznati i neće ometati vaše iskustvo kucanja.

### Ko dobija ovo

Svi trenutni i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup `@mentions`. `@mentions` su takođe unazad portovane na ranije verzije
widget-a za komentare.

### Kako funkcioniše automatsko popunjavanje

Korisnici prikazani u listi automatskog popunjavanja se određuju prema:

- Korisnicima koji su komentarisali na istoj stranici ili temi.
- Korisnicima koji su kreirali svoje FastComments naloge preko iste stranice.
- Moderatorima trenutne stranice.
- SSO korisnicima koji pripadaju trenutnom zakupcu.

### Uređivanje komentara

Pomeni se mogu dodati postojećim komentarima njihovim uređivanjem. Ipak, aplikacija `Moderate Comments` trenutno ne automatski popunjava `@mentions`.

### Buduća razmatranja

U budućnosti, korisnici koji imaju FastComments otvoren u prozoru preglednika dobiće obaveštenje kada budu pomenuti, ukoliko su se prijavili za obaveštenja.

### Zaključak

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju pronaći brzom i lakom za korišćenje.

Živeli!

{{/isPost}}

---