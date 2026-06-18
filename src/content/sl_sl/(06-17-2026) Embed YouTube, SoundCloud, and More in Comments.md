---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Vgradite YouTube, SoundCloud in še več v komentarje[/postlink]

{{#unless isPost}}
Komentatorji lahko zdaj prilepijo kodo za vgradnjo in video ali predvajalnik se prikaže neposredno v komentarju. Privzeto je izklopljeno, omogočeno pa je za posamezne strani in omejeno na zaupanja vredne ponudnike.
{{/unless}}

{{#isPost}}

### Novosti

Ljudje radi delijo video ali skladbo v razpravi. Do sedaj prilepitev vgradnje YouTube ali SoundCloud v komentar ni prinesla veliko. Surov `<iframe>` je bil odstranjen zaradi varnosti ali pa je bil zavit v kodo.

Zdaj lahko omogočite vgradnje medijev za svojo stran. Ko je vklopljeno, lahko komentator preprosto prilepi kodo za vgradnjo neposredno od ponudnika in se prikaže v besedilu, tako kot bi se na kateri koli drugi strani.

Tukaj je primer kode, ki jo ljudje kopirajo s gumba "Deli" ali "Vgradi":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Prilepite to v komentar s omogočenimi vgradnjami in dobite dejanski predvajalnik.

### Le zaupanja vredni ponudniki

Dovoli naključne iframes na vaši strani je realno tveganje za varnost, zato nismo zgolj odprli vrat. Vgradnje so omejitev na vnaprej določeni seznam zaupanja vrednih ponudnikov, vključno z YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch in Dailymotion.

Če komentar vsebuje iframe, ki kaže kamorkoli drugam, se iframe odstrani, ko se komentar shrani. Enaka sanitizacija, ki ščiti pred `<script>` oznakami in `onload=` triki, še naprej deluje na vsakem komentarju. Vgradnje so le dodatna, skrbno omejena dovoljenja poleg tega.

### Dodajanje lastnih ponudnikov

Če uporabljate ponudnika, ki ni na vnaprej določenem seznamu, ga lahko omogočite. Obstaja polje "Dodatna domena za vgradnjo", kjer navedete dodatne gostitelje, ki jih zaupate, poleg vnaprej določenih ponudnikov.

Ujemanje se izvaja po točnem imenu gostitelja, tako da dodajte celoten gostiteljski naslov, s katerega se nalaga vgradnja, na primer `player.example.com`. Vse, kar ne navedete, ostane blokirano.

### Kako to omogočiti

To je nastavitev za posamezno stran na strani za prilagoditev dodatka, neposredno poleg možnosti nalaganja slik. Preverite "Dovoli vgradnje medijev?" in shranite. Ni potrebne kode ali ponovnega uvajanja.

Kot pri drugih nastavitvah vsebine, je to po pravilih prilagoditev, tako da lahko omogočite vgradnje na eni strani ali enem nizu strani in jih izključite drugje.

### Deluje v obeh urejevalnikih

Prilepite lahko v obeh, v navadnem oknu za komentarje in WYSIWYG urejevalniku. V navadnem oknu se koda za vgradnjo vnese kot besedilo in postane predvajalnik ob oddaji. V WYSIWYG urejevalniku se vgradnja prikazuje takoj kot blok, z malo gumbom za odstranitev v kotu, tako da ga je enostavno izbrisati, če je bila to napaka.

### Na koncu

Vgradnje so privzeto izklopljene, tako da se za vašo stran ne spremeni nič, razen če se odločite, da jih omogočite. Ko jih omogočite, dobijo vaši komentatorji lepši način deljenja videoposnetkov in skladb, vi pa ohranite enake varnostne garancije, ki ste jih že imeli.

Vklopite to, prilepite video in sporočite, kaj menite spodaj.

Na zdravje!

{{/isPost}}