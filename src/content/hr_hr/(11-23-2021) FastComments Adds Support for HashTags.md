---
[category:Features]

###### [postdate]
# [postlink]FastComments Dodaje Podršku za #HashTagove[/postlink]

{{#unless isPost}}
Ikada ste željeli #označiti temu ili komad informacija? Sada možete.
{{/unless}}

{{#isPost}}

### Što je novo

Kada komentiraju, korisnici sada mogu unijeti jedan ili više `#hashtagova`. Klikom na `#hashtag` u komentaru preusmjerit ćete se na pregled s drugim komentarima
s prikazanim hashtagom.

Osim toga, `#hashtagovi` se mogu koristiti za povezivanje s vanjskim sadržajem. Uz ovo izdanje pokrenuli smo naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
koji omogućava prethodno popunjavanje hashtagova u vašem računu.

Kada prethodno popunjavamo hashtagove, možemo definirati URL za svaki tag. To znači da se `#hashtagovi` također mogu koristiti za povezivanje, na primjer, s brojem karte ili
dokumentom u CRM-u.

Simbol `#` se također može prilagoditi, na zahtjev.

### Kako to koristiti

Kada upišete `#`, a zatim početak hashtag-a, pojavit će se lista rezultata pretraživanja.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Korištenje HashTagova" title="#hashtags Demo" />
</div>

Jednostavno kliknite na hashtag koji želite dodati.

Osim toga, možete koristiti tipke sa strelicama gore i dolje za navigaciju ovom listom, i pritisnuti enter za odabir, ili escape za izlaz.

Znamo da možda želite koristiti simbol `#` bez dodavanja hashtag-a. FastComments će to prepoznati i neće ometati vaše iskustvo tipkanja.

### Dodavanje Hash Tagova

Ako hashtag koji želite koristiti nije na popisu prijedloga - FastComments će jednostavno automatski stvoriti hashtag u pozadini.

Automatsko stvaranje `#hashtagova` može se onemogućiti prema dokumentaciji [ovdje](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Tko to dobiva

Svi trenutni i novi korisnici FastCommenta, na svim razinama, sada imaju pristup `#hashtagovima`. `#hashtagovi` su također retroaktivno dodani ranijim verzijama
widgeta za komentiranje.

### Kako Autocomplet Radi

Tagovi prikazani u automatski dovršenoj listi su samo s vašeg računa. HashTagovi se ne dijele između FastComments korisnika.

### Dokumentacija

Postoji posebna dokumentacija za `#hashtagove`. Pogledajte ovdje: https://docs.fastcomments.com/guide-hashtags.html

### Na zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju naći brzom i jednostavnom za korištenje.

Živjeli!

{{/isPost}}

---