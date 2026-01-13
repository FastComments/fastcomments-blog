---
[category:Features]
###### [postdate]
# [postlink]Sortiranje komentarskih niti sa FastComments[/postlink]

{{#unless isPost}}
Od lansiranja, FastComments nije omogućavao promenu reda sortiranja komentarske niti. To se menja sa ovim izdanjem!
{{/unless}}

{{#isPost}}

#### Ciljna publika

Ciljna publika za ovaj članak sastoji se od administratora i komentatora.

#### Uvod

Komentari su uvek sortirani koristeći kombinaciju njihove starosti i karme (gore + dole glasovi). Do sada, to
je bila jedina dozvoljena pravcu sortiranja.

#### Nove pravce sortiranja

FastComments komentar widget sada dodatno podržava sortiranje po Najnovijim i Najstarijim Prvo.

#### Promena pravca sortiranja

Kada je broj glavnih komentara veći od jedan, pojaviće se novi padajući meni koji omogućava promenu pravca sortiranja.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Padajući meni za izbor sortiranja" title="Padajući meni za izbor sortiranja" />
</div>

Kada se odabere Najnoviji ili Najstariji Prvo, ne uzimamo u obzir kumu komentara.

#### Promena podrazumevanog pravca sortiranja

Iako je podrazumevani pravac sortiranja Najrelevantniji, podrazumevani pravac sortiranja se lako može prilagoditi kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila prilagođavanja</a>.

#### Održavanje brzine

Kako bi FastComments i dalje ispunjavao svoje ime, uloženo je značajno vreme da se osigura
optimalno sortiranje na sve načine. Komentari se sortiraju kako se ostavljaju, tako da zapravo nema sortiranja kada
učitate stranicu. To osigurava da je učitavanje komentarskog widget-a i promena pravca sortiranja brza bez obzira
na to koliko komentara imate.

#### Zaključak

Nadamo se da ste našli ovu ažuriranje korisnim. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}