---
[category:Features]
###### [postdate]
# [postlink]FastComments dobija @pominjanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da @pominjete jednog ili više korisnika u komentaru? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Dok je ranije FastComments obaveštavao korisnike ako ste im odgovorili na komentare, nije bilo načina da se označi više ljudi u jednom komentaru. Takođe, ove
obaveštenja su slata u paketima svake nedelje. Sa `@pominjanjima`, sada je moguće označiti jednog ili više korisnika, a FastComments će ih odmah obavestiti putem email-a.

### Kako to koristiti

Kada kucate `@`, a zatim početak imena korisnika, pojaviće se lista rezultata pretrage.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Korišćenje Pominjanja" title="@pominjanja Demo" />
</div>

Jednostavno kliknite na ime korisnika kojeg želite da označite.

Pored toga, možete koristiti tastere sa strelicama nagore i nagore da se kretate kroz ovu listu, pritisnite enter da izaberete, ili escape da izađete.

Znamo da možda želite da koristite simbol `@` bez označavanja korisnika. FastComments će to prepoznati i neće ometati vaše iskustvo kucanja.

### Ko dobija ovo

Svi trenutni i novi korisnici FastComments, na svim nivoima, sada imaju pristup `@pominjanjima`. `@pominjanja` su takođe vraćena u ranije verzije 
komentarskog vidžeta.

### Kako funkcioniše automatsko završavanje

Korisnici prikazani na listi sa automatskim završavanjem određeni su kroz:

- Korisnike koji su komentarisali na istoj stranici ili temi.
- Korisnike koji su napravili svoje FastComments naloge putem iste stranice.
- Moderatore trenutnog sajta.
- SSO korisnike koji pripadaju trenutnom stanaru.

### Uređivanje komentara

Pominjanja mogu biti dodata postojećim komentarima njihovim uređivanjem. Međutim, aplikacija `Upravlja komentara` trenutno ne automatski završava `@pominjanja`.

### Buduće razmatranje

U budućnosti, korisnici koji imaju FastComments otvoren u prozoru pretrage dobiće obaveštenje kada budu pominjani, ako su se prijavili za obaveštenja.

### U zaključku

Kao i ostatak FastComments, nadamo se da ćete ovu funkciju naći brzu i lako upotrebljivu.

Pozdrav!

{{/isPost}}