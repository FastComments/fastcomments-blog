---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novi ChatGPT 4 Bazirani Spam Filter.[/postlink]

{{#unless isPost}}
FastComments dodaje još jednu opciju za filtriranje spam-a.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments nastavlja da poboljšava svoj Naïve-Bayes spam klasifikator, međutim dodali smo novu opciju u flotu spam detektora.

Sada možete detektovati spam koristeći ChatGPT 4 koji pruža OpenAI.

### Kako ga postaviti

Da biste konfigurirali koji spam detektor koristiti, proverite stranicu podešavanja moderacije u vašem administratorskom panelu. Spam detektor zasnovan na GPT4 naplaćuje se po ceni od `$0.08` za svakih `1000` tokena.

Ovaj spam detektor je dostupan samo kupcima na Flex planu jer se naplaćuje na osnovu korišćenih tokena.

### Optimizacije

Prvo prolazimo sav sadržaj kroz zajednički Naïve-Bayes klasifikator kako bismo limitirali pozive OpenAI-u. Ovo vam štedi novac na vrlo očiglednom spamu. Za dodatno lukav spam, zatim se povezujemo sa OpenAI-om da vidimo da li sadržaj izgleda kao spam.

### Rezultati

Primijetili smo trenutna poboljšanja u zajednicama koje su aktivirale ovu funkciju.

### Dokumentacija

Ovo se može postaviti putem stranice podešavanja moderacije u vašem administratorskom panelu.

[Dokumentaciju možete pronaći i ovde](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Zaključak

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

{{/isPost}}

---