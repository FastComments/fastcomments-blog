---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Ugradite YouTube, SoundCloud i još mnogo toga u komentare[/postlink]

{{#unless isPost}}
Komentatori sada mogu da nalepiraju kod za ugradnju i da video ili plejer prikazuje direktno unutar komentara. Podrazumevano je isključeno, potrebno je aktivirati po sajtu, i ograničeno je na pouzdane provajdere.
{{/unless}}

{{#isPost}}

### Šta je novo

Ljudi vole da dele video ili pesmu u diskusiji. Do sada, nalepiranje YouTube ili SoundCloud ugrađenog linka u komentar nije imalo mnogo efekta. Sirovi `<iframe>` je uklonjen zbog bezbednosti, ili je bio obavijen kao kod blok.

Sada možete omogućiti ugradnje medija za vaš sajt. Kada je uključeno, komentator može da nalepira kod za ugradnju direktno od provajdera i on se prikazuje inline, na isti način kao na bilo kojoj drugoj stranici.

Evo kakav snippet ljudi kopiraju sa "Podeli" ili "Ugradi" dugmeta:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Nalepite to u komentar sa omogućena ugradnje i dobijate stvarni plejer.

### Samo pouzdani provajderi

Dozvoljavanje proizvoljnih iframe-ova na vašoj stranici je stvarni bezbednosni rizik, pa nismo samo otvorili vrata. Ugradnje su ograničene na ugrađenu listu pouzdanih provajdera, uključujući YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Ako komentar sadrži iframe koji pokazuje negde drugde, iframe se uklanja kada se komentar sačuva. Ista sanitizacija koja štiti od `<script>` tagova i `onload=` trikova se i dalje izvršava na svakom komentaru. Ugradnje su samo dodatna, pažljivo ograničena dozvola pored toga.

### Dodavanje vlastitih provajdera

Ako koristite provajdera koji nije na ugrađenoj listi, možete ga dozvoliti. Tu je polje "Dodatne domene za ugradnju" gde možete navesti dodatne hostname-ove kojima verujete, pored ugrađenih provajdera.

Poklapanje je po tačnom hostname-u, pa dodajte puni host sa kojeg se ugradnja učitava, na primer `player.example.com`. Sve što ne navedete ostaje blokirano.

### Kako to omogućiti

To je postavka po sajtu na stranici za prilagođavanje vidžeta, odmah pored opcija za upload slika. Označite "Dozvoli ugradnje medija?" i sačuvajte. Nema potrebe za kodom ili ponovnim implementiranjem.

Kao i sa našim drugim postavkama sadržaja, ovo je po pravilu prilagođavanja, tako da možete omogućiti ugradnje na jednom sajtu ili jednom setu stranica i ostaviti ih isključene na drugima.

### Radi u oba editora

Nalepiranje funkcioniše u običnom komentaru i WYSIWYG editoru. U običnom okviru kod za ugradnju ide kao tekst i postaje plejer po slanju. U WYSIWYG editoru ugradnja se odmah prikazuje kao blok, sa malim dugmetom za uklanjanje u uglu, tako da može lako biti obrisana ako je bila greška.

### Na kraju

Ugradnje su podrazumevano isključene, tako da se ništa ne menja za vaš sajt osim ako ne odlučite da ih omogućite. Kada to uradite, vaši komentatori dobijaju lepši način da dele videe i pesme, a vi zadržavate iste bezbednosne garancije koje ste već imali.

Uključite to, nalepite video i javite nam šta mislite ispod.

Pozdrav! 

{{/isPost}}