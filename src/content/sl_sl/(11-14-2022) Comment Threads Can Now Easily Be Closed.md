---
[category:Moderation]

###### [postdate]
# [postlink]Komentarni nizi so zdaj enostavno zapirali[/postlink]

{{#unless isPost}}
FastComments je vedno dovoljeval označevanje komentarnih nizov kot samo za branje prek kode ali pravil prilagajanja, toda zdaj je to enostavno
možno tudi z vidžetom za komentarje.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments je vedno dovoljeval označevanje komentarnih nizov kot samo za branje prek kode ali pravil prilagajanja, toda zdaj je to enostavno
možno tudi z vidžetom za komentarje.

V meniju s tremi pikami na vrhu območja komentarjev, bodo administratorji ali kdorkoli z dovoljenjem za moderiranje imeli možnost
**zapreti** komentarni niz, ter ga po potrebi **znova odpreti** kadarkoli.

To se nekoliko razlikuje od nastavitve nizov `readonly`, ki ste jo morda uporabljali do zdaj. Nastavitev niza `readonly`
pomeni, da se na strani ne more nič spremeniti - ni več komentarjev, ni glasov, ni urejanja komentarjev, ni odstranjevanja komentarjev.

Zapiranje komentarnega niza je nekoliko drugačno - komentarji se ne morejo dodajati, vendar lahko uporabniki še vedno izbrišejo svoje komentarje, če želijo.
Poleg tega lahko glasove še vedno oddate ali odstranite.

### V živo

Kot pri ostalem delu FastComments, je zapiranje in ponovno odpiranje komentarnih nizov v živo in bo takoj vplivalo na vse uporabnike, ki si ogledajo ta niz.

### Kako do tega

Ta funkcija je bila uvedena vsem strankam!

### Prilagoditve besedila

Nova prevodna oznaka, `THREAD_CLOSED`, z privzeto angleško vrednostjo `Ta komentarni niz je bil zaprt za nove komentarje.` je bila dodana.

Ta besedilo je vedno mogoče prilagoditi prek uporabniškega vmesnika za prilagajanje vidžeta.

### Na koncu

Kot pri vseh večjih izdajah, smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---