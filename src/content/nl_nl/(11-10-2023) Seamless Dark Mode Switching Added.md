---
[category:UI & Customization]

###### [postdate]
# [postlink]Naadloze Overschakeling naar Donkere Modus Toegevoegd[/postlink]

{{#unless isPost}}
FastComments heeft altijd al ondersteuning voor de donkere modus aangeboden. Echter, het vereiste eerder een herlaadbeurt van de opmerkingwidget om over te schakelen naar de donkere modus. Dit is verholpen.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

FastComments heeft altijd al ondersteuning voor de donkere modus aangeboden. Echter, het vereiste eerder een herlaadbeurt van de opmerkingwidget om over te schakelen naar de donkere modus.

Dit betekent dat als een site de donkere modus gebruikte, of gebruikers toestond om heen en weer te schakelen tussen lichte en donkere modi, we de opmerkingwidget volledig uit de browser zouden verwijderen en opnieuw zouden laden. Dit werd gedaan om technische redenen, om het product bij de eerste lancering te vereenvoudigen, aangezien de status heen en weer gecommuniceerd moest worden tussen de hoofdpagina en de iframe van de widget.

Gezien het feit dat het griezelige seizoen voorbij is - is de overschakeling naar donkere modus verbeterd. De opmerkingwidget ondersteunt nu naadloze overgangen tussen lichte en donkere modi. Echter, het blijft vereist om de `hasDarkBackground` vlag door te geven waar van toepassing.

### Voor Ontwikkelaars & Aandachtspunten

Om de opmerkingwidget te vertellen dat jouw site in de donkere modus is - of een donkere achtergrond heeft - zou je de `hasDarkBackground` vlag doorgeven. Dit verandert niet. Echter, nu wanneer je `instance.update(newConfig)` aanroept (of de status verandert in een van onze bibliotheken zoals React, Svelte, etc.), zullen we detecteren of de enige veranderde parameter `hasDarkBackground` is en zo ja, de opmerkingwidget mooi bijwerken. De widget zal de donkere modus extensie asynchroon op de achtergrond laden en de styling indien nodig bijwerken.

Een belangrijk aandachtspunt is dat wanneer je `newConfig` doorgeeft - dit een volledig nieuw object moet zijn voor deze functie om te werken.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en op de juiste manier uit te brengen. Laat het ons hieronder weten als je problemen tegenkomt.

Proost!

{{/isPost}}

---