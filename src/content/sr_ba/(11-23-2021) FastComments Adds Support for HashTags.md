---
[category:Features]

###### [postdate]
# [postlink]FastComments Dodaje Podršku za #HashTags[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da #označite temu ili deo informacija? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je Novo

Kada komentarišu, korisnici sada mogu uneti jedan ili više `#hashtaga`. Klikom na `#hashtag` u komentaru dobićete pregled sa ostalim komentarima
koji prikazuju taj hashtag.

Pored toga, `#hashtags` se mogu koristiti za povezivanje sa spoljnim sadržajem. Uz ovo izdanje lansirali smo naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
koji omogućava unapred popunjavanje hashtaga u vašem nalogu.

Kada unapred popunjavamo hashtagove, možemo definisati URL za svaki tag. To znači da se `#hashtags` takođe mogu koristiti za povezivanje, na primer, sa brojem karte ili
dokumentom u CRM-u.

Simbol `#` se takođe može prilagoditi, na zahtev.

### Kako to Koristiti

Kada otkucate `#`, a zatim početak hashtaga, pojaviće se lista rezultata pretrage.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Usage" title="#hashtags Demo" />
</div>

Jednostavno kliknite na hashtag koji želite da dodate.

Pored toga, možete koristiti tastere sa strelicama nagore i nadole za navigaciju kroz ovu listu, i pritisnuti enter za izbor, ili escape za izlaz.

Znamo da možda želite da koristite simbol `#` bez dodavanja hashtaga. FastComments će to prepoznati i neće ometati vaše iskustvo kucanja.

### Dodavanje Hash Tagova

Ako hashtag koji želite da koristite nije na listi predloga - FastComments će jednostavno automatski kreirati hashtag u pozadini.

Automatsko kreiranje `#hashtaga` može se onemogućiti prema dokumentaciji [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Ko ga Dobija

Svi trenutni i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup `#hashtags`. `#hashtags` su takođe preneti na ranije verzije
widget-a za komentare.

### Kako Funkcioniše Autocomplete

Tagovi prikazani na listi automatskog dovršavanja su samo iz vašeg naloga. HashTags se ne dele među FastComments korisnicima.

### Dokumentacija

Postoji posvećena dokumentacija za `#hashtags`. Pogledajte ovde: https://docs.fastcomments.com/guide-hashtags.html

### U Zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzim i jednostavnim za korišćenje.

Pozdrav!

{{/isPost}}

---