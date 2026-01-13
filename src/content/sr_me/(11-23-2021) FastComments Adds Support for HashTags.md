---
[category:Features]

###### [postdate]
# [postlink]FastComments Dodaje Podršku za #HashTags[/postlink]

{{#unless isPost}}
Da li ste ikada želeli da #tagujete temu ili deo informacije? Sada možete.
{{/unless}}

{{#isPost}}

### Šta je Novo

Prilikom komentarisanja, korisnici sada mogu uneti jedan ili više `#hashtagova`. Klikom na `#hashtag` u komentaru dobićete prikaz sa ostalim komentarima
koji prikazuju hashtag.

Pored toga, `#hashtagovi` se mogu koristiti za povezivanje sa spoljnim sadržajem. Uz ovo izdanje, lansirali smo naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
koji omogućava prethodno popunjavanje hashtagova u vašem nalogu.

Kada prethodno popunjavamo hashtagove, možemo definisati URL za svaki tag. To znači da se `#hashtagovi` takođe mogu koristiti za povezivanje, na primer, sa brojem karte ili
dokumentom u CRM-u.

Simbol `#` može biti prilagođen po zahtevu.

### Kako ga Koristiti

Kada otkucate `#`, a zatim početak hashtag-a, pojaviće se lista sa rezultatima pretrage.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Korišćenje" title="#hashtags Demo" />
</div>

Jednostavno kliknite na hashtag koji želite da dodate.

Pored toga, možete koristiti tastere sa strelicama nagore i nadole za navigaciju kroz ovu listu, i pritisnuti enter za izbor, ili esc za izlazak.

Znamo da možda želite da koristite simbol `#` bez dodavanja hashtag-a. FastComments će to detektovati i nećemo ometati vaše iskustvo otkucavanja.

### Dodavanje Hash Tagova

Ako hashtag koji želite da koristite nije na listi predloga - FastComments će jednostavno automatski kreirati hashtag u pozadini.

Automatsko kreiranje `#hashtagova` može biti onemogućeno prema dokumentaciji [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Ko To Dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup `#hashtagovima`. `#hashtagovi` su takođe vraćeni na ranije verzije
widget-a za komentare.

### Kako Funkcioniše Autocomplete

Tagovi prikazani na listi automatskog popunjavanja su samo iz vašeg naloga. HashTagovi se ne dele između FastComments korisnika.

### Dokumentacija

Postoji posebna dokumentacija za `#hashtagove`. Pogledajte ovde: https://docs.fastcomments.com/guide-hashtags.html

### Na Zaklučenju

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju pronaći brzu i jednostavnu za korišćenje.

Živeli!

{{/isPost}}