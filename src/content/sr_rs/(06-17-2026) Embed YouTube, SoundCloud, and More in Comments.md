---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Ugradite YouTube, SoundCloud i još mnogo toga u komentare[/postlink]

{{#unless isPost}}
Komentatori sada mogu da zalepite kod za ugradnju i video ili plejer će se prikazati direktno unutar komentara. To je po defaultu isključeno, potrebno je odobrenje za svaku stranicu, i ograničeno je na pouzdane provajdere.
{{/unless}}

{{#isPost}}

### Šta je novo

Ljudi vole da dele video ili pesmu u diskusiji. Do sada, lepljenje YouTube ili SoundCloud ugrađenog koda u komentar nije imalo mnogo efekta. Sirovi `<iframe>` je bio uklonjen iz bezbednosnih razloga, ili je bio zamotan kao kod blok.

Sada možete omogućiti ugradnju medija za vašu stranicu. Kada je aktivirano, komentator može da zalepi kod za ugradnju direktno od provajdera i on se prikazuje unutar teksta, na isti način kao na bilo kojoj drugoj stranici.

Evo kakav kod ljudi kopiraju sa dugmeta "Deljenje" ili "Ugradnja":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Zalepite to u komentar sa omogućenom ugradnjom i dobijate pravi plejer.

### Samo pouzdani provajderi

Dozvoljavanje proizvoljnih iframe-ova na vašoj stranici predstavlja pravi bezbednosni rizik, tako da nismo samo otvorili vrata. Ugradnje su ograničene na unapred definisanu listu pouzdanih provajdera, uključujući YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Ako komentar sadrži iframe koji upućuje na bilo šta drugo, iframe se uklanja kada se komentar sačuva. Ista sanitizacija koja štiti od `<script>` tagova i `onload=` trikova i dalje se primenjuje na svaki komentar. Ugradnje su samo dodatni, pažljivo definisani izuzetak pored toga.

### Dodavanje vlastitih provajdera

Ako koristite provajdera koji nije na unapred definisanoj listi, možete ga dozvoliti. Postoji polje "Dodatne domene za ugradnju" gde možete navesti dodatne hostname-ove kojima ćete verovati, pored unapred definisanih provajdera.

Uparivanje se vrši po tačnom hostname-u, tako da dodajte puni host sa kog se ugradnja učitava, na primer `player.example.com`. Sve što ne navedete ostaje blokirano.

### Kako to omogućiti

To je postavka po sajtu na stranici za prilagođavanje vidžeta, odmah pored opcija za otpremanje slika. Šticknite "Dozvoliti medijske ugradnje?" i sačuvajte. Nema potrebe za kodom ili ponovnim implementacijama.

Kao i naše druge postavke sadržaja, ovo je po pravilu prilagođavanja, tako da možete omogućiti ugradnje na jednoj stranici ili jednom skupu stranica, a ostaviti isključeno na drugima.

### Radi u oba uređivača

Lepljenje funkcioniše u običnom okviru za komentare i WYSIWYG uređivaču. U običnom okviru kod za ugradnju ulazi kao tekst i postaje plejer prilikom slanja. U WYSIWYG uređivaču, ugradnja se odmah pojavljuje kao blok, sa malim dugmetom za uklanjanje u uglu, tako da je lako obrisati ako je bila greška.

### Zaključak

Ugradnje su po defaultu isključene, tako da se ništa ne menja za vašu stranicu osim ako ne odlučite da ih uključite. Kada to uradite, vaši komentatori dobijaju lepši način da dele video i pesme, dok zadržavate iste bezbednosne garancije koje ste već imali.

Uključite to, zalepite video i javite nam šta mislite ispod.

Živeli!

{{/isPost}}