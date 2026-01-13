---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novi ChatGPT 4 zasnovan na spam filtr.[/postlink]

{{#unless isPost}}
FastComments dodaje na svoj spisak opcija za spam filtre.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments nastavlja da poboljšava svoj Naïve-Bayes spam klasifikator, međutim, dodali smo novu opciju u flotu spam detektora.

Sada možete detektovati spam koristeći ChatGPT 4 koji pruža OpenAI.

### Kako to postaviti

Da konfigurišete koji spam detektor da koristite, proverite stranicu Podešavanja moderacije u vašem admin kontrolnom panelu. GPT4-zasnovan spam detektor se naplaćuje po ceni od `$0.08` na svakih `1000` tokena.

Ovaj spam detektor je dostupni samo za korisnike na Flex planu, jer se naplaćuje na osnovu korišćenih tokena.

### Optimizacije

Prvo prolazimo sav sadržaj kroz zajednički Naïve-Bayes klasifikator kako bismo limitirali pozive ka OpenAI. Ovo vam štedi novac za veoma očigledan spam. Za dodatno podmukli spam, zatim pozivamo OpenAI da proverimo da li sadržaj izgleda kao spam.

### Rezultati

Primili smo trenutna poboljšanja u zajednicama koje su aktivirale ovu funkciju.

### Dokumentacija

Ovo se može postaviti putem stranice Podešavanja moderacije u vašem admin kontrolnom panelu.

[Dokumentacija se takođe može naći ovde](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Zaključak

Zahvaljujemo našim korisnicima koji nam neprekidno daju povratne informacije kako bismo mogli da razmišljamo o idejama poput ove. Nadamo se da ćete
nastaviti da volite FastComments.

Živeli!

{{/isPost}}

---