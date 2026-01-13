---
[category:Features]
###### [postdate]
# [postlink]Sortiranje komentarskih niti sa FastComments[/postlink]

{{#unless isPost}}
Od lansiranja, FastComments nije omogućavao promenu redosleda sortiranih komentara. To se menja sa ovim izdanjem!
{{/unless}}

{{#isPost}}

#### Ciljna Publika

Ciljna publika za ovaj članak sastoji se od administratora i komentatora.

#### Uvod

Komentari su oduvek bili sortirani koristeći kombinaciju njihove starosti i karme (gore + dole glasovi). Do sada, to
je bio jedini dozvoljeni pravac sortiranja.

#### Novi Pravci Sortiranja

FastComments komentarska vidžet sada dodatno podržava sortiranje prema najnovijim i najstarijim komentarima.

#### Promena Pravca Sortiranja

Kada je broj komentara prvog nivoa veći od jednog, pojaviće se novi padajući meni koji omogućava promenu pravca sortiranja.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Izbor sortiranja - padajući meni" title="Izbor sortiranja - padajući meni" />
</div>

Kada se odabere najnoviji ili najstariji prvi, ne uzimamo u obzir karmu komentara.

#### Promena Zadate Pravca Sortiranja

Iako je podrazumevani pravac sortiranja Najrelevantniji, podrazumevani pravac sortiranja se može lako prilagoditi kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila prilagođavanja</a>.

#### Održavanje Brzine

Kako bi FastComments nastavio da opravdava svoje ime, značajno je vreme uloženo u optimizaciju sortiranja na sve načine. Komentari se sortiraju kako se ostavljaju, tako da se stvarno sortiranje ne dešava kada učitate stranicu. Ovo osigurava da učitavanje komentarskog vidžeta, kao i promena pravca sortiranja, bude brzo bez obzira na to koliko komentara imate.

#### Na Zaključku

Nadamo se da ste pronašli ovu nadogradnju korisnom. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Pozdrav!

{{/isPost}}

---