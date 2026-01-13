---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Usposabljanje za zaznavanje neželene pošte je zdaj na raven najemnika[/postlink]

{{#unless isPost}}
FastComments je že leta usposabljal svoj klasifikator za preprečevanje neželene pošte. Zdaj so bile
možnosti usposabljanja nadgrajene.
{{/unless}}

{{#isPost}}

### Kaj je novega

Ko označite komentar kot neželeno pošto ali ne, se FastComments iz tega uči za prihodnje
zaznavanje neželene pošte.

Vendar se je to učenje dogajalo na istem mestu za vse. To pomeni, da je usposabljanje za
neželeno pošto drugega najemnika vplivalo na vaše. To ima svoje prednosti in slabosti. Prva
prednost je, da avtomatično izkoristite to, kar drugi moderatorji štejejo za neželeno pošto. Slabost
pa je, če naredijo napako ali če imajo vsebino, ki je drugačna od vaše.

Na primer, če ima drug najemnik občinstvo, ki se ukvarja z dirkalnimi simulatorji, lahko označuje
komentarje s "crypto spam" kot neželeno pošto, pogosto. Kot rezultat začne klasifikator
povezovati besedilo, povezano s kriptovalutami, z neželeno pošto.

Toda recimo, da imate spletno mesto, ki je usmerjeno v kriptovalute. Zdaj se mnogi vaši
komentarji začnejo označevati kot neželena pošta, ko to niso. Nekateri od njih so lahko upravičeno
neželeni, a mnogi morda niso.

### Izolirano usposabljanje

Ko se nov najemnik pridruži FastComments, bo privzeto njihovo zaznavanje neželene pošte
usposobljeno na prejšnjem delu drugih najemnikov.

Ko začnete označevati komentarje kot neželeno pošto/neželeno pošto, se bo sistem preusmeril na
uporabo vašega lastnega učnega nabora.

### Posodobitev 20. september 2023

Ugotovili smo, da ta nastavitev ni bila idealna za vse privzeto. Izolirano usposabljanje proti
neželeni pošti ni samo za prijavo. To lahko omogočite na strani nastavitev moderiranja, tako
da izberete "Izolirano" v možnosti "Filtir za neželeno pošto".

Privzeto je spet "Skupno" usposabljanje.

### V živo

Usposobljen nabor za vašega najemnika se zdaj vedno znova gradi, vsakokrat ko označite
komentar kot neželeno pošto ali ne.

Prej je sistem obnavljal indeks neželene pošte periodično. To je bilo storjeno za zaščito sistema
pred prenapolnjenostjo. Po nekaj letih smo ugotovili, da obremenitev zaradi neprekinjenega
usposabljanja ni bila zelo visoka, zato smo sistem posodobili, da samodejno posodablja indeks
vsakič, ko naredite spremembo.

Ti indeksi so shranjeni na robu v naših aplikacijskih strežnikih, vsi pa se neodvisno posodabljajo
za ohranjanje sistema hitrega in odzivnega.

### Kako to doseči

Ta funkcija je bila uvedena vsem strankam!

### V zaključku

Kot pri vseh večjih različicah smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno
izdajo te funkcije. Sporočite nam spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}