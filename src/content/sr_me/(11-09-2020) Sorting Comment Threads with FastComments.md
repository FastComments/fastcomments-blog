---
[category:Features]
###### [postdate]
# [postlink]Sortiranje komentara sa FastComments[/postlink]

{{#unless isPost}}
Od lansiranja, FastComments nije dozvoljavao promenu redosleda komentara. To se menja sa ovim izdanjem!
{{/unless}}

{{#isPost}}

#### Ciljna publika

Ciljna publika za ovaj članak sastoji se od administratora i komentatora.

#### Uvod

Komentari su oduvek bili sortirani koristeći kombinaciju njihove starosti i karme (pozitivni + negativni glasovi). Do sad, to je bila jedina dozvoljena direktiva sortiranja.

#### Nove direktive sortiranja

FastComments widget za komentare sada dodatno podržava sortiranje po Najnovijim i Najstarijim.

#### Promena pravca sortiranja

Kada je broj komentara prvog nivoa veći od jednog, pojaviće se novi padajući meni koji omogućava promenu pravca sortiranja.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Padajući meni za izbor sortiranja" title="Padajući meni za izbor sortiranja" />
</div>

Pri odabiru Najnovijeg ili Najstarijeg ne uzimamo u obzir karmu komentara.

#### Promena podrazumevanog pravca sortiranja

Iako je podrazumevani pravac sortiranja Najrelevantniji, podrazumevani pravac sortiranja se lako može prilagoditi kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila za prilagođavanje</a>.

#### Održavanje brzine

Kako bi FastComments i dalje opravdao svoje ime, značajno vreme je uloženo u optimizaciju svih načina sortiranja. Komentari se sortiraju dok se ostavljaju, tako da stvarno sortiranje ne događa kada učitate stranicu. To osigurava da je učitavanje widgeta za komentare, kao i promena pravca sortiranja, brza bez obzira na to koliko komentara imate.

#### Na kraju

Nadamo se da ste smatrali da je ovo ažuriranje korisno. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}