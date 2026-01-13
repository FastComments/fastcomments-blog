---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Novi ChatGPT 4 temeljeni sustav za filtriranje neželjene pošte.[/postlink]

{{#unless isPost}}
FastComments dodaje novu opciju filtriranja neželjene pošte.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments nastavlja poboljšavati svoj Naïve-Bayes klasifikator za neželjenu poštu, no dodali smo novu opciju u flotu detektora neželjene pošte.

Sada možete otkriti neželjenu poštu koristeći ChatGPT 4 koji pruža OpenAI.

### Kako ga dobiti

Da biste konfigurirali koji detektor neželjene pošte koristiti, provjerite stranicu Postavke moderacije u svom administratorskom nadzorniku. Detektor neželjene pošte temeljen na GPT4 naplaćuje se po stopi od `$0.08` za svakih `1000` tokena.

Ovaj detektor neželjene pošte dostupan je samo za korisnike na Flex planu, jer se naplaćuje prema korištenim tokenima.

### Optimizacije

Prvo proslijedimo sav sadržaj kroz zajednički Naïve-Bayes klasifikator kako bismo ograničili pozive prema OpenAI. Ovo vam štedi novac za vrlo očitu neželjenu poštu. Za dodatno prevarantske neželjene poruke, tada se obraćamo OpenAI-u da vidimo izgleda li sadržaj kao neželjena pošta.

### Rezultati

Primijetili smo trenutna poboljšanja u zajednicama koje su uključile ovu značajku.

### Dokumentacija

Ovo se može postaviti putem stranice Postavke moderacije u svom administratorskom nadzorniku.

[Dokumentacija se također može pronaći ovdje](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Zaključak

Zahvaljujemo našim korisnicima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove. Nadamo se da ćete i dalje voljeti FastComments.

Živjeli!

{{/isPost}}

---