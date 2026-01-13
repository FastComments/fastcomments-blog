---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novi ChatGPT 4 zasnovani spam filter.[/postlink]

{{#unless isPost}}
FastComments dodaje nove opcije za spam filtre.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments nastavlja da unapređuje svoj Naïve-Bayes spam klasifikator, međutim, dodali smo novu opciju u flotu spam detektora.

Sada možete detektovati spam koristeći ChatGPT 4 koji pruža OpenAI.

### Kako to postaviti

Da biste konfigurisali koji spam detektor želite da koristite, proverite stranicu sa podešavanjima moderacije na svom administratorskom panelu. GPT4 zasnovani spam detektor se naplaćuje po ceni od `$0.08` za svaka `1000` tokena.

Ovaj spam detektor je dostupan samo za kupce na Flex planu jer se naplaćuje na osnovu korišćenih tokena.

### Optimizacije

Prvo prolazimo sav sadržaj kroz zajednički Naïve-Bayes klasifikator kako bismo ograničili pozive ka OpenAI. Ovo štedi vaš novac za veoma očigledan spam. Za dodatno podmukli spam, zatim pozivamo OpenAI da proverimo da li sadržaj izgleda kao spam.

### Rezultati

Primili smo odmah poboljšanja u zajednicama koje su aktivirale ovu funkcionalnost.

### Dokumentacija

Ovo se može postaviti putem stranice sa podešavanjima moderacije na vašem administratorskom panelu.

[Dokumentaciju možete pronaći i ovde](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Na kraju

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli da razmišljamo o ovakvim idejama. Nadamo se da ćete nastaviti da volite FastComments.

Živeli!

{{/isPost}}

---