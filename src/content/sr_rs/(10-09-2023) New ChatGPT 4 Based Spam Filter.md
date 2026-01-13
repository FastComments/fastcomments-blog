---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novi Spam Filter zasnovan na ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments dodaje novu opciju svom spisku opcija za spam filtere.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments nastavlja da poboljšava svoj Naïve-Bayes spam klasifikator, međutim dodali smo novu opciju u flotu detektora spama.

Sada možete detektovati spam koristeći ChatGPT 4 koji je obezbedio OpenAI.

### Kako to dobiti

Da biste konfigurisali koji spam detektor da koristite, proverite stranicu Podešavanja Moderacije u vašem administratorskom panelu. Spam detektor zasnovan na GPT4 naplaćuje se po ceni od `$0.08` za svaka `1000` tokena.

Ovaj spam detektor je dostupan samo za korisnike na Flex planu, jer se naplaćuje na osnovu korišćenih tokena.

### Optimizacije

Prvo prolazimo sav sadržaj kroz zajednički Naïve-Bayes klasifikator da bismo ograničili pozive ka OpenAI. Ovo vam štedi novac za veoma očigledan spam. Za dodatno podmukli spam, potom se obraćamo OpenAI da vidimo da li sadržaj izgleda kao spam.

### Rezultati

Primili smo trenutna poboljšanja u zajednicama koje su aktivirale ovu funkciju.

### Dokumentacija

Ovo se može postaviti putem stranice Podešavanja Moderacije u vašem administratorskom panelu.

[Dokumentaciju možete pronaći i ovde](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Na kraju

Zahvaljujemo našim korisnicima koji nam daju kontinuirane povratne informacije kako bismo mogli da razmišljamo o idejama kao što je ova. Nadamo se da ćete i dalje voleti FastComments.

Živeli!

{{/isPost}}

---