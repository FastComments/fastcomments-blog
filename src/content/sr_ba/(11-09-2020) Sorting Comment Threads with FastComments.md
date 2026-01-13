---
[category:Features]
###### [postdate]
# [postlink]Sortiranje komentara sa FastComments[/postlink]

{{#unless isPost}}
Od lansiranja, FastComments nije dozvoljavao promenu reda sortiranja komentara. To se menja sa ovom verzijom!
{{/unless}}

{{#isPost}}

#### Ciljna publika

Ova ciljana publika za članak se sastoji od administratora i komentatora.

#### Uvod

Komentari su oduvek bili sortirani korišćenjem kombinacije njihove starosti i karme (pozitivnih + negativnih glasova). Do sada, to je bio jedini dozvoljeni pravac sortiranja.

#### Nova pravca sortiranja

FastComments komentar widget sada dodatno podržava sortiranje po najnovijim i najstarijim komentarima.

#### Promena pravca sortiranja

Kada je broj glavnih komentara veći od jednog, pojavljuje se novi padajući meni koji omogućava promenu pravca sortiranja.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Dropdown za izbor sortiranja" title="Dropdown za izbor sortiranja" />
</div>

Kada birate Najnoviji ili Najstariji komentar, ne uzimamo u obzir karmu komentara. 

#### Promena podrazumevanog pravca sortiranja

Iako je podrazumevani pravac sortiranja Najrelevantniji, podrazumevani pravac sortiranja može se lako prilagoditi kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila za prilagođavanje</a>.

#### Održavanje brzine

Kako bi FastComments i dalje ispunjavao svoje ime, potrošeno je značajno vreme kako bi se osiguralo da je sortiranje u svim pravcima dobro optimizovano. Komentari se sortiraju dok se ostavljaju, tako da se stvarno sortiranje ne dešava prilikom učitavanja stranice. To osigurava da učitavanje widgeta za komentare i promena pravca sortiranja bude brza, bez obzira na broj komentara koji imate.

#### Na zaključku

Nadamo se da ste pronašli ovo ažuriranje korisnim. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Pozdrav!

{{/isPost}}