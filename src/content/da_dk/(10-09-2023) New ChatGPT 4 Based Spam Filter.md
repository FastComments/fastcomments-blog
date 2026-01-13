---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Ny ChatGPT 4 Baset Spamfilter.[/postlink]

{{#unless isPost}}
FastComments tilføjer til sin liste af spamfiltermuligheder.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments fortsætter med at forbedre sin Naïve-Bayes spamklassifikator, men vi har tilføjet en ny mulighed til flåden af spamdetektorer.

Du kan nu opdage spam ved hjælp af ChatGPT 4 leveret af OpenAI.

### Sådan gør du

For at konfigurere, hvilken spamdetektor der skal bruges, skal du tjekke siden for Moderationsindstillinger på dit admin-dashboard. Den GPT4-baserede spamdetektor opkræves med `$0.08` for hver `1000` tokens.

Denne spamdetektor er kun tilgængelig for kunder på en Flex-plan, da den opkræves baseret på brugte tokens.

### Optimeringer

Vi sender først alt indhold gennem den delte Naïve-Bayes klassifikator for at begrænse opkald til OpenAI. Dette sparer dig penge for meget åbenlys spam. For den ekstra snedige spam,
vil vi derefter kalde OpenAI for at se, om indholdet ser ud som spam.

### Resultater

Vi har observeret umiddelbare forbedringer i de samfund, der har aktiveret denne funktion.

### Dokumentation

Dette kan opsættes via siden for Moderationsindstillinger på dit admin-dashboard.

[Dokumentation kan også findes her](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Afslutning

Vi takker vores kunder, der giver os løbende feedback, så vi kan tænke på ideer som denne. Vi håber, du
fortsat vil elske FastComments.

Skål!

{{/isPost}}

---