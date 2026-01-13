---
[category:API & Development]

###### [postdate]
# [postlink]Spremembe strukture webhookov[/postlink]

{{#unless isPost}}
Izvedli smo nekatere spremembe obnašanja v strukturah webhookov.
{{/unless}}

{{#isPost}}

### Kaj je novega

Pred 14. novembrom 2023 smo izvedli naslednje spremembe na webhookih:

#### Posodobi webhooke

**Prej** so posodobitve vsebovale najnovejšo različico komentarja. Če sta dva uporabnika hitro glasovala za komentar, je to
izvzelo dva webhooka. Vendar je bilo mogoče, da je prvi dogodek webhook vseboval **najnovejšo različico**, kar je privedlo do dveh
identičnih dogodkov webhook:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. novembra** je vsak dogodek webhook idempotenten in vsebuje objekt komentarja v trenutku spremembe. V zgornjem primeru boste zdaj dobili dva dogodka:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Izbriši webhooke

**Prej** so izbrisni webhooki vsebovali le id komentarja. To je bil objekt kot `{ id: string }`.

**Od 14. novembra** bodo izbrisni webhooki vsebovali **celoten** objekt komentarja v trenutku odstranitve.

### Na kratko

Kot pri vseh večjih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---