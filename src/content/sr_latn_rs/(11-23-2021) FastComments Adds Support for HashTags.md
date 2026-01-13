---
[category:Features]

###### [postdate]
# [postlink]FastComments dodaje podršku za #HashTags[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da #označite temu ili deo informacije? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je novo

Kada komentarišete, korisnici sada mogu da unesu jedan ili više `#hashtagova`. Klikom na `#hashtag` u komentaru će vas odvesti na pregled sa drugim komentarima
sa prikazanim hashtagom.

Dodatno, `#hashtagovi` se mogu koristiti za povezivanje sa spoljnim sadržajem. Uz ovo izdanje, lansirali smo naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
koji omogućava pre-populaciju hashtagova u vašem nalogu.

Kada pre-populirate hashtagove, možemo definisati URL za svaki tag. To znači da se `#hashtagovi` mogu koristiti i za povezivanje sa, na primer, brojem karte ili
dokumentom u CRM-u.

Simbol `#` takođe može biti prilagođen na zahtev.

### Kako to koristiti

Kada otkucate `#`, a zatim početak hashtag-a, lista rezultata pretrage će se pojaviti.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Upotreba HashTags" title="#hashtags Demo" />
</div>

Jednostavno kliknite na hashtag koji želite da dodate.

Dodatno, možete koristiti tastere sa strelicama prema gore i prema dole da navigirate ovom listom, i pritisnite enter da izaberete, ili escape da izađete.

Znamo da možda želite da koristite simbol `#` bez dodavanja hashtag-a. FastComments će to prepoznati i neće ometati vaše iskustvo kucanja.

### Dodavanje Hash Tagova

Ako hashtag koji želite da koristite nije na listi sugestija - FastComments će jednostavno automatski kreirati hashtag u pozadini.

Automatsko kreiranje `#hashtagova` može biti onemogućeno prema dokumentaciji [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Ko dobija

Sve trenutne i nove FastComments korisnike, na svim nivoima, sada imaju pristup `#hashtagovima`. `#hashtagovi` su takođe retroaktivno dodeljeni ranijim verzijama
widget-a za komentare.

### Kako funkcioniše automatsko dovršavanje

Tagovi koji se prikazuju na listi automatskog dovršavanja su samo iz vašeg naloga. HashTags se ne dele među FastComments korisnicima.

### Dokumentacija

Postoji posvećena dokumentacija za `#hashtagove`. Pogleajte ovde: https://docs.fastcomments.com/guide-hashtags.html

### U zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju pronaći brzom i lakom za korišćenje.

Živeli!

{{/isPost}}