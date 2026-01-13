---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nieuwe ChatGPT 4-gebaseerde Spamfilter.[/postlink]

{{#unless isPost}}
FastComments voegt toe aan zijn lijst van spamfilteropties.
{{/unless}}

{{#isPost}}

### Wat is nieuw

FastComments blijft de Naïve-Bayes spamclassificator verbeteren, echter hebben we een nieuwe optie toegevoegd aan de vloot van spamdetectoren.

Je kunt nu spam detecteren met ChatGPT 4, geleverd door OpenAI.

### Het verkrijgen

Om in te stellen welke spamdetector te gebruiken, controleer je de pagina Moderatie-instellingen in je admin dashboard. De GPT4-gebaseerde spamdetector wordt gefactureerd tegen `$0.08` voor elke `1000` tokens.

Deze spamdetector is alleen beschikbaar voor klanten met een Flex-plan, aangezien het wordt gefactureerd op basis van het aantal gebruikte tokens.

### Optimalisaties

We sturen alle inhoud eerst door de gedeelde Naïve-Bayes classificator om het aantal oproepen naar OpenAI te beperken. Dit bespaart je geld voor zeer evidente spam. Voor de extra slinkse spam, bellen we daarna OpenAI om te zien of de inhoud eruitziet als spam.

### Resultaten

We hebben onmiddellijke verbeteringen waargenomen in de gemeenschappen die deze functie hebben ingeschakeld.

### Documentatie

Dit kan worden ingesteld via de pagina Moderatie-instellingen in je admin dashboard.

[Documentatie is ook hier te vinden](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Conclusie

We bedanken onze klanten die ons continue feedback geven, zodat we aan ideeën zoals deze kunnen denken. We hopen dat je
blijft genieten van FastComments.

Proost!

{{/isPost}}

---