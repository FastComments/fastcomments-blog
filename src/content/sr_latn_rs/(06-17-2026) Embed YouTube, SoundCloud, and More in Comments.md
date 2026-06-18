---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Uključite YouTube, SoundCloud i još mnogo toga u komentarima[/postlink]

{{#unless isPost}}
Komentatori sada mogu da kopiraju embed kod i video ili plejer će se prikazati direktno unutar komentara. To je po defaultu isključeno, uključuje se po sajtu, i ograničeno je na pouzdane provajdere.
{{/unless}}

{{#isPost}}

### Šta je novo

Ljudi vole da dele video ili pesmu u diskusiji. Do sada, kopiranje YouTube ili SoundCloud embeda u komentar nije imalo mnogo efekta. Raw `<iframe>` je bio uklonjen radi bezbednosti, ili je bio obavijen kao kod blok.

Sada možete da uključite medijske embedove za vaš sajt. Kada je uključeno, komentator može da kopira embed kod direktno od provajdera i on se prikazuje inline, na isti način kao na bilo kojoj drugoj stranici.

Evo kakav snippet ljudi kopiraju sa dugmeta "Podeli" ili "Uključi":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Kopirajte to u komentar sa omogućеним embedovima i dobijate pravi plejer.

### Samo Pouzdani Provajderi

Dozvoliti proizvoljne iframe-ove na vašoj stranici predstavlja stvarni bezbednosni rizik, pa nismo samo otvorili vrata. Embedovi su ograničeni na ugrađenu listu pouzdanih provajdera, uključujući YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Ako komentar sadrži iframe koji ukazuje bilo gde drugde, iframe se uklanja kada se komentar sačuva. Ista sanitizacija koja štiti od `<script>` tagova i `onload=` trikova se i dalje primenjuje na svaki komentar. Embedovi su samo dodatno, pažljivo ograničeno dopuštenje na to.

### Dodavanje Sopstvenih Provajdera

Ako koristite provajdera koji nije na ugrađenoj listi, možete ga dozvoliti. Postoji polje "Dodatne Embed Domene" gde možete navesti dodatne hostname-ove kojima verujete, pored ugrađenih provajdera.

Usklađivanje se obavlja po tačnom hostname-u, tako da dodajte pun hostname sa kojeg se embed učitava, na primer `player.example.com`. Sve što ne navedete ostaje blokirano.

### Kako To Omogućiti

To je podešavanje po sajtu na stranici za prilagođavanje vidžeta, odmah pored opcija za otpremanje slika. Označite "Dozvoli medijske embedove?" i sačuvajte. Nema potrebe za kodom ili ponovnim raspoređivanjem.

Kao i kod drugih podešavanja sadržaja, ovo je po pravilu prilagođavanja, tako da možete omogućiti embedove na jednom sajtu ili jednom skupu stranica i ostaviti ih isključenim na drugim mestima.

### Funkcioniše u Oba Uređivača

Kopiranje funkcioniše i u običnom kutiji za komentare i u WYSIWYG uređivaču. U običnoj kutiji embed kod ide kao tekst i postaje plejer prilikom slanja. U WYSIWYG uređivaču embed se odmah prikazuje kao blok, sa malim dugmetom za uklanjanje u uglu, tako da je lako obrisati ga ako je bila greška.

### Zaključak

Embedovi su po defaultu isključeni, tako da se ništa ne menja za vaš sajt osim ako ne odlučite da ih uključite. Kada to uradite, vaši komentatori dobijaju lepši način da dele video i pesme, a vi zadržavate iste bezbednosne garancije koje ste već imali.

Uključite to, nalepite video i javite nam šta mislite u komentarima ispod.

Pozdrav! 

{{/isPost}}