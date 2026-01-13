---
[category:Features]

###### [postdate]
# [postlink]FastComments Dodaje Podršku za #HashTags[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da #označite temu ili deo informacije? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Kada komentarišu, korisnici sada mogu uneti jedan ili više `#hashtagova`. Klikom na `#hashtag` u komentaru bićete preusmereni na pregled sa drugim komentarima
sa prikazanim hashtagom.

Pored toga, `#hashtagovi` se mogu koristiti za povezivanje sa spoljnim sadržajem. Uz ovo izdanje pokrenuli smo naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
koji omogućava prethodno popunjavanje hashtagova u vašem nalogu.

Kada prethodno popunjavamo hashtagove, možemo definisati URL za svaki tag. To znači da se `#hashtagovi` takođe mogu koristiti za povezivanje, na primer, sa brojem tiketa ili
dokumentom u CRM-u.

Simbol `#` se takođe može prilagoditi, na zahtev.

### Kako ga koristiti

Kada otkucate `#`, a zatim početak hashtag-a, pojaviće se lista rezultata pretrage.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Usage" title="#hashtags Demo" />
</div>

Jednostavno kliknite na hashtag koji želite da dodate.

Pored toga, možete koristiti strelice nagore i nadole za navigaciju kroz ovu listu, i pritisnuti enter za izbor, ili escape za izlazak.

Znamo da možda želite da koristite simbol `#` bez dodavanja hashtag-a. FastComments će to prepoznati i neće ometati vašu iskustvo pisanja.

### Dodavanje Hashtagova

Ako hashtag koji želite da koristite nije na listi predloga - FastComments će jednostavno automatski kreirati hashtag u pozadini.

Automatsko kreiranje `#hashtagova` može biti onemogućeno prema dokumentaciji [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Ko dobija

Svi sadašnji i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup `#hashtagovima`. `#hashtagovi` su takođe unazad kompatibilni sa prethodnim verzijama
widget-a za komentare.

### Kako Funkcioniše Autocomplete

Tagovi prikazani na listi automatskog dovršavanja su samo iz vašeg naloga. HashTags se ne dele između FastComments kupaca.

### Dokumentacija

Postoji posebna dokumentacija za `#hashtagove`. Pogledajte ovde: https://docs.fastcomments.com/guide-hashtags.html

### Zaključak

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju pronaći brza i jednostavna za korišćenje.

Pozdrav!

{{/isPost}}

---