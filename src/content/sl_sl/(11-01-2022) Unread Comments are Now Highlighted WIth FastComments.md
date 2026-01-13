---
[category:UI & Customization]
###### [postdate]
# [postlink]Neodgovorjeni komentarji so zdaj označeni z FastComments[/postlink]

{{#unless isPost}}
Ste se kdaj vrnili na stran in želeli nadaljevati branje komentarjev tam, kjer ste prenehali? FastComments zdaj stilizira komentarje,
ki ste jih zamudili, kar to olajša.
{{/unless}}

{{#isPost}}

### Novosti

Ste se kdaj vrnili na stran in želeli nadaljevati branje komentarjev tam, kjer ste prenehali? FastComments zdaj stilizira komentarje,
ki ste jih zamudili, kar to olajša.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar v novem komentarju označen." />
</div>

### Kako do tega

Vsak komentar, ki je sprožil obvestilo v aplikaciji (odgovori, odgovori v istem nizu ali komentarji na strani,
na katero ste naročeni), bo samodejno označen z uporabnikovim avatarjem, ki nekoliko zasveti. Barvo lahko prilagodite preko CSS
z uporabo razreda `is-unread`. Privzeto oblikovanje podpira tudi temni način.

Poleg tega je bila dodana nova CSS razreda `24hr`, ki se uporablja za elemente komentarjev, objavljenih v zadnjih 24 urah. To lahko uporabite za stilizacijo
komentarjev prav tako.

### Zakaj označiti avatar?

Zavedamo se, da je morda bolj primerno označiti celoten komentar. Vendar pa to prinaša težave z berljivostjo in oblikovanjem pri
naših strankah, ki so prilagodile platformo, da se ujema z njihovim izdelkom. Ugotovili smo, da je rahlo označevanje avatarja dokaj nenametna
sprememba v večini primerov. Če želite, lahko sijaj odstranite in spremenite z uporabo pravil prilagoditve widgetov.

### Na koncu

Vemo, da so nekateri to funkcijo dolgo čakali. Posvetili smo čas izbiri oblikovanja, ki ni preveč vsiljivo, a kljub temu koristno, in morda
bomo izvedli nadaljnje prilagoditve na podlagi povratnih informacij.

Na zdravje!

{{/isPost}}