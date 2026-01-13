---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Podpora za avtentifikacijo s poverilnicami je zdaj na voljo[/postlink]

{{#unless isPost}}
S to posodobitvijo FastComments zdaj podpira tradicionalno avtentifikacijo na osnovi gesel poleg obstoječega sistema na osnovi e-pošte.
{{/unless}}

{{#isPost}}

### Novosti

Od lansiranja je FastComments avtentikacijo izvajal prek magičnih e-poštnih povezav. To je bilo zato, ker smo lahko združili naše mehanizme prijave v isti sistem, ki se uporablja, ko uporabnik pusti svoj prvi komentar in potrjuje/prijavlja se prek povezave, ki temelji na e-pošti. Vendar pa niso vsi e-poštni strežniki enaki in včasih je prejemanje povezave lahko trajalo minute. To je bilo zelo frustrirajoče za nekatere naše uporabnike.

Od pozne leta 2023 FastComments zdaj podpira avtentikacijo prek gesel! Na strani za prijavo so zdaj dve zavihki - eden za prijavo prek e-pošte in eden za prijavo prek
gesla.

### Kako nastaviti geslo

Geslo lahko nastavite tako, da greste na [Moj račun -> Podrobnosti računa -> Spremeni geslo](https://fastcomments.com/auth/my-account/edit-details/change-password).

Preprosto zahtevajte povezavo za ponastavitev. Povezava bo poslana na vašo e-pošto in ob kliku na to boste lahko nastavili novo geslo. Povezava deluje samo enkrat in poteče, če ni uporabljena.

### Shranjevanje in varnost gesel

Gesla niso shranjena. Namesto tega so gesla zgoščena z 11-krožnim soljenjem z uporabo bcrypt. Konkurenca k sistemu na osnovi gesel je omejena in nadzorovana, da se prepreči različne vrste napadov, povezanih z gesli.

### Prihodnost

V prihodnosti načrtujemo tudi podporo za 2FA.

### Na koncu

Kot pri vseh večjih izdajah smo veseli, da smo si vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---