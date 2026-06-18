---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Ugradite YouTube, SoundCloud i više u komentare[/postlink]

{{#unless isPost}}
Komentatori sada mogu zalijepiti kod za ugradnju i imati video ili player prikazan izravno unutar komentara. Prekidač je isključen po defaultu, uključuje se za svaku stranicu, i ograničen je na pouzdane pružatelje.
{{/unless}}

{{#isPost}}

### Što je novo

Ljudi vole dijeliti video ili pjesmu u raspravi. Do sada, zalijepljenje YouTube ili SoundCloud ugrađivanja u komentar nije pružalo mnogo. Neuredni `<iframe>` je bio uklonjen zbog sigurnosti, ili je bio obavijen kao blok koda.

Sada možete omogućiti medijske ugradnje za svoju stranicu. Kada je uključeno, komentator može zalijepiti kod za ugradnju izravno od pružatelja i on se prikazuje inline, na isti način kao što bi se prikazao na bilo kojoj drugoj stranici.

Evo kako izgleda isječak koji ljudi kopiraju s gumba "Dijeli" ili "Ugradi":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Zalijepite to u komentar s uključenim ugradnjama i dobit ćete stvarni player.

### Samo pouzdani pružatelji

Dozvoljavanje proizvoljnih iframes na vašoj stranici predstavlja stvarnu sigurnosnu prijetnju, tako da nismo samo otvorili vrata. Ugradnje su ograničene na ugrađeni popis pouzdanih pružatelja, uključujući YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Ako komentar sadrži iframe koji upućuje bilo gdje drugdje, iframe se uklanja kada se komentar sprema. Ista sanitizacija koja štiti od `<script>` oznaka i `onload=` trikova i dalje se izvodi na svakom komentaru. Ugradnje su samo dodatno, pažljivo ograničeno dopuštenje iznad toga.

### Dodavanje vlastitih pružatelja

Ako koristite pružatelja koji nije na ugrađenom popisu, možete ga dozvoliti. Postoji polje "Dodatni domena za ugradnju" gdje navodite dodatne host namjene kojima vjerujete, osim ugrađenih pružatelja.

Podudaranje se vrši po točnom imenu hosta, pa dodajte puni host s kojeg se ugradnja učitava, na primjer `player.example.com`. Sve što ne navedete ostaje blokirano.

### Kako to omogućiti

To je postavka po stranici na stranici prilagodbe widgeta, odmah pored opcija za upload slika. Oznaka "Dozvoli medijske ugradnje?" i spremite. Nema potrebe za kodom ili ponovnim implementiranjem.

Kao i naše druge postavke sadržaja, ovo je po pravilu prilagodbe, tako da možete omogućiti ugradnje na jednoj stranici ili jednoj skupini stranica i ostaviti ih isključenima drugdje.

### Radi u oba uređivača

Zalijepiti radi u običnom okviru za komentare i WYSIWYG uređivaču. U običnom okviru kod za ugradnju ulazi kao tekst i postaje player prilikom podnošenja. U WYSIWYG uređivaču ugradnja se odmah prikazuje kao blok, s malim gumbom za uklanjanje u kutu tako da ga je lako izbrisati ako je bila pogreška.

### U zaključku

Ugradnje su po defaultu isključene, tako da se ništa ne mijenja za vašu stranicu osim ako ne odlučite da ih uključite. Kada to učinite, vaši komentatori dobivaju ljepši način dijeljenja videa i pjesama, a vi zadržavate iste sigurnosne garancije koje ste već imali.

Uključite to, zalijepite video i javite nam što mislite ispod.

Živjeli!

{{/isPost}}