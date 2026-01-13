---
[category:Features]

###### [postdate]
# [postlink]Izdaja prikazanih imen[/postlink]

{{#unless isPost}}
FastComments je vedno podpiral prikazana imena za uporabnike SSO. Vendar pa to nikoli ni bilo na voljo običajnim komentatorjem. Danes to spreminja!
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments je vedno podpiral prikazana imena za uporabnike SSO. Vendar pa to nikoli ni bilo na voljo običajnim komentatorjem. Danes to spreminja!

Na strani [Podrobnosti računa](https://fastcomments.com/auth/my-account/edit-details) lahko zdaj izpolnite novo polje `Prikazano ime`. `Prikazano ime` bo
prikazano pri vaših komentarjih in vaših profilih.

### Emojiji

V preteklosti so imeli uporabniki težave z uporabo emojijev v uporabniških imenih, saj je bilo treba vnesti uporabniško ime za prijavo. Vendar pa zdaj `Prikazano ime` lahko vsebuje emojije.

### Edinstvenost in zloraba

Namen `Prikazanega imena` je, da ni edinstveno. Če imata dva uporabnika FastComments.com, v dveh zelo različnih večjih skupnostih, podobna imena, bi želeli,
da lahko preprosto nastavita svoje najljubše prikazano ime. Vendar pa ne moremo omejiti, kje ljudje komentirajo s svojim globalnim računom FastComments, zato lahko to včasih
privede do zmede.

Imeti podobno ime kot drug uporabnik ali moderator samo po sebi ni primer zlorabe. Vendar pa, če to zlorabite s namernim impersoniranjem drugih uporabnikov, lahko
to funkcijo onemogočimo na vašem računu, in boste omejeni na uporabo samo `uporabniškega imena`.

### Prijava

Še vedno uporabljate svoje uporabniško ime za prijavo - **ne svojega prikazanega imena!**

### Za razvijalce & posebnosti

Običajni objekti `User`, ki so izpostavljeni prek API-ja, sedaj vsebujejo `displayName`.

### Na koncu

Kot pri vseh večjih izdajah, smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}