---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Uključite YouTube, SoundCloud i još mnogo toga u komentarima[/postlink]

{{#unless isPost}}
Komentatori sada mogu zalepiti kod za uključivanje i video ili player će se prikazati unutar komentara. Podrazumevano je isključeno, potrebno je omogućiti po sajtu, i ograničeno je na pouzdane provajdere.
{{/unless}}

{{#isPost}}

### Šta je novo

Ljudi vole da dele video ili pesmu u diskusiji. Do sada, lepljenje YouTube ili SoundCloud uključenja u komentar nije mnogo značilo. Siromašni `<iframe>` je uklonjen zbog bezbednosti, ili je bio obavijen kao blok koda.

Sada možete uključiti medijske ugradnje za vaš sajt. Kada je uključeno, komentator može direktno zalepiti kod za uključivanje od provajdera i on se prikazuje inline, na isti način kao što bi bilo na bilo kojoj drugoj stranici.

Evo kako izgleda kod koji ljudi kopiraju sa dugmeta "Podeli" ili "Uključi":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Zalepite to u komentar sa uključenim ugradnjama i dobijate pravi player.

### Samo Pouzdani Provajderi

Dozvoliti proizvoljne iframe-ove na vašoj stranici predstavlja pravi bezbednosni rizik, tako da nismo samo otvorili vrata. Ugradnje su ograničene na ugrađenu listu pouzdanih provajdera, uključujući YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Ako komentar sadrži iframe koji upućuje bilo gde drugde, iframe se uklanja kada se komentar sačuva. Ista sanitizacija koja štiti od `<script>` tagova i `onload=` trikova se i dalje primenjuje na svaki komentar. Ugradnje su samo dodatno, pažljivo definisano dopuštenje iznad toga.

### Dodavanje Vaših Vlastitih Provajdera

Ako koristite provajdera koji nije na ugrađenoj listi, možete ga dozvoliti. Postoji polje "Dodatni domeni za ugradnju" gde možete navesti dodatne hostove kojima verujete, pored ugrađenih provajdera.

Podudaranje je po tačnom imenu hosta, tako da dodajte puni host sa kojeg se ugradnja učitava, na primer `player.example.com`. Sve što ne navedete ostaje blokirano.

### Kako to Omogućiti

To je podešavanje po sajtu na stranici za prilagođavanje vidižeta, odmah pored opcija za otpremanje slika. Označite "Dozvoli medijske ugradnje?" i sačuvajte. Nema potrebe za kodom ili ponovnim implementiranjem.

Kao i kod drugih podešavanja sadržaja, ovo je po pravilu prilagođavanja, tako da možete omogućiti ugradnje na jednom sajtu ili jednom skupu stranica, a ostaviti ga isključenim drugde.

### Radi u Oba Uređivača

Lepljenje funkcioniše u običnom okviru za komentare i u WYSIWYG uredniku. U običnom okviru kod za ugradnju ide kao tekst i postaje player prilikom slanja. U WYSIWYG uredniku ugradnja se odmah prikazuje kao blok, sa malim dugmetom za uklanjanje u uglu tako da je lako obrisati ako je bila greška.

### Na kraju

Ugradnje su po defaultu isključene, tako da se ništa ne menja za vaš sajt osim ako ne odlučite da ih uključite. Kada to učinite, vaši komentatori dobijaju lepši način da dele videe i pesme, a vi zadržavate iste bezbednosne garancije koje ste već imali.

Uključite to, zalepite video i javite nam šta mislite ispod.

Pozdrav! 

{{/isPost}}

---