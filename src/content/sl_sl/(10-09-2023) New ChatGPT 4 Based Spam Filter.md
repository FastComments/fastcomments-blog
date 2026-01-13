---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nova filtracija spamov na osnovi ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments dodaja na seznam možnosti filtriranja spamov.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments nadaljuje z izboljšanjem svojega Naïve-Bayes klasifikatorja za spam, vendar smo dodali novo možnost v floto detektorjev spamov.

Zdaj lahko zaznate spam z uporabo ChatGPT 4, ki ga zagotavlja OpenAI.

### Kako nastaviti

Da konfigurirate, kateri detektor spamov želite uporabiti, preverite stran za nastavitve moderiranja v vašem administrativnem nadzornem plošči. Detektor spamov na osnovi GPT4 je obračunan po ceni `$0.08` za vsakih `1000` tokenov.

Ta detektor spamov je na voljo samo strankam na Flex planu, saj se obračunava na podlagi uporabljenih tokenov.

### Optimizacije

Najprej vsa vsebina preide skozi skupni Naïve-Bayes klasifikator, da omejimo klice na OpenAI. To vam prihrani denar za očitne spame. Za dodatno spretne spame pa nato pokličemo OpenAI, da preverimo, ali vsebina izgleda kot spam.

### Rezultati

Opazili smo takojšnje izboljšave pri skupnostih, ki so omogočile to funkcijo.

### Dokumentacija

To lahko nastavite preko strani za nastavitve moderiranja v vašem administrativnem nadzornem plošči.

[Dokumentacijo najdete tudi tukaj](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Na koncu

Zahvaljujemo se našim strankam, ki nam nenehno dajejo povratne informacije, da lahko razmišljamo o idejah, kot je ta. Upamo, da boste še naprej imeli radi FastComments.

Na zdravje!

{{/isPost}}

---