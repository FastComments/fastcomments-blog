---
[category:Features]
###### [postdate]
# [postlink]FastComments dobija @mentions[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da @pomenuete jednog ili više korisnika u komentaru? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Dok je ranije FastComments obaveštavao korisnike ako ste im odgovorili na komentare, nije bilo načina da označite više ljudi u jednom komentaru. Takođe, ova
obaveštenja su se slala u paketima svake sate. S `@mentions`, sada je moguće označiti jednog ili više korisnika, a FastComments će ih odmah obavestiti putem email-a.

### Kako to koristiti

Kada otkucate `@`, a zatim početak imena korisnika, lista rezultata pretrage će se pojaviti.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Korišćenje pomena" title="@mentions Demo" />
</div>

Jednostavno kliknite na ime korisnika koje želite da označite.

Pored toga, možete koristiti tastere sa strelicama nagore i nadole da navigirate ovom listom, i pritisnuti enter da izaberete, ili escape da napustite.

Znamo da možda želite da koristite simbol `@` bez označavanja korisnika. FastComments će ovo otkriti i neće ometati vaše iskustvo kucanja.

### Ko dobija

Svi trenutni i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup `@mentions`. `@mentions` su takođe dodati starijim verzijama
komentatorskog vidgeta.

### Kako funkcioniše automatsko dopunjavanje

Korisnici prikazani u listi automatskog dopunjavanja se određuju prema:

- Korisnicima koji su komentarisali na istoj stranici ili temi.
- Korisnicima koji su kreirali svoje FastComments naloge kroz istu stranicu.
- Moderatorima trenutne stranice.
- SSO korisnicima koji pripadaju trenutnom zakupcu.

### Uređivanje komentara

Pomeni se mogu dodati postojećim komentarima njihovim uređivanjem. Međutim, aplikacija `Moderate Comments` trenutno ne automatski dopunjava `@mentions`.

### Buduće razmatranje

U budućnosti, korisnici koji imaju FastComments otvoren u prozoru pretraživača će dobiti obaveštenje kada su pomenuti, ako su se prijavili za obaveštenja.

### Na kraju

Kao i ostatak FastComments-a, nadamo se da ćete pronaći ovu funkciju brza i jednostavna za korišćenje.

Pozdrav!

{{/isPost}}

---