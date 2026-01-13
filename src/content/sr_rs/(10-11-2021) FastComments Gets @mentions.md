---
[category:Features]
###### [postdate]
# [postlink]FastComments dobija @pominjanja[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da @pomenete jednog ili više korisnika u komentarima? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je Novo

Dok je ranije FastComments obaveštavao korisnike ako ste odgovorili na njihove komentare, nije bilo načina da označite više ljudi u jednom komentaru. Takođe, ova
obaveštenja su se slala u paketima svake sat vremena. Sa `@pominjanjima`, sada je moguće označiti jednog ili više korisnika i FastComments će ih odmah obavestiti putem emaila.

### Kako to Koristiti

Kada otkucate `@`, a zatim početak imena korisnika, lista rezultata pretrage će se pojaviti.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Korišćenje Pominjanja" title="@pominjanja Demo" />
</div>

Jednostavno kliknite na ime korisnika kojeg želite da označite.

Pored toga, možete koristiti tastere sa strelicama nagore i nadole za navigaciju kroz ovu listu, i pritisnuti enter da biste izabrali, ili escape da biste izašli.

Znamo da možda želite da koristite simbol `@` bez označavanja korisnika. FastComments će to prepoznati i neće ometati vaše iskustvo kucanja.

### Ko to Dobija

Svi trenutni i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup `@pominjanjima`. `@pominjanja` su takođe dostupna i u ranijim verzijama
komentatorskog widgeta.

### Kako Autocomplete Radi

Korisnici prikazani na listi autocompleted određeni su prema:

- Korisnicima koji su komentarisali na istoj stranici ili temi.
- Korisnicima koji su kreirali svoje FastComments naloge putem iste stranice.
- Moderatorima trenutne stranice.
- SSO korisnicima koji pripadaju trenutnom zakupcu.

### Uređivanje Komentara

Pominjanja se mogu dodati postojećim komentarima njihovim uređivanjem. Međutim, aplikacija `Moderate Comments` trenutno ne autocompletuje `@pominjanja`.

### Buduće Razmatranje

U budućnosti, korisnici koji imaju FastComments otvoren u prozoru preglednika će dobiti obaveštenje kada budu pomenuti, ako su se pretplatili na obaveštenja.

### Na Zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzom i lakom za korišćenje.

Pozdrav!

{{/isPost}}