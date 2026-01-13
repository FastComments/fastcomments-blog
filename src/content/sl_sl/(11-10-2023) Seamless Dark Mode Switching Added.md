---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodana brezšivna preklopna tema temna[/postlink]

{{#unless isPost}}
FastComments je vedno podpiral temno temo. Vendar je za preklop na temno temo prej zahteval ponovni nalaganje komentarnega vtičnika. To je bilo popravljeno.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments je vedno podpiral temno temo. Vendar je za preklop na temno temo prej zahteval ponovni nalaganje komentarnega vtičnika.

To pomeni, da če je spletna stran uporabljala temno temo ali dovolila uporabnikom, da se preklapljajo med svetlo in temno temo, smo
kompletno odstranili komentarni vtičnik iz brskalnika in ga ponovno naložili. To je bilo storjeno iz tehničnih razlogov, da bi poenostavili izdelek
ob prvem zagonu, saj je bilo stanje potrebno sporočati nazaj in naprej med starševsko stranjo in iframe-om vtičnika.

Ob koncu strašljive sezone so izboljšali preklop na temno temo. Komentarni vtičnik zdaj podpira brezšivne prehode med svetlo
in temno temo. Vendar pa še vedno zahteva posredovanje oznake `hasDarkBackground`, kadar je to primerno.

### Za razvijalce in težave

Da obvestite komentarni vtičnik, da je vaša stran v temni temi - ali da je uporabljen temen ozadje - bi posredovali
oznake `hasDarkBackground`. To se ni spremenilo. Vendar pa zdaj, ko pokličete `instance.update(newConfig)` (ali spremenite stanje
v eni naših knjižnic, kot so React, Svelte itd.), bomo zaznali, ali je edini spremenjen parameter `hasDarkBackground` in če je tako,
bomo elegantno posodobili komentarni vtičnik. Vtičnik bo asinhrono naložil razširitev temne teme v ozadju in posodobil svojo stilizacijo
če bo potrebno.

Ena glavna težava je, da ko posredujete `newConfig` - mora biti to popolnoma nov objekt, da ta funkcija deluje.

### Na koncu

Kot pri vseh večjih izdajah, smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---