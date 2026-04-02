---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]De Moderatiepagina Is Nu Live[/postlink]

{{#unless isPost}}
De moderation pagina van FastComments toont nu een live notificatie wanneer nieuwe reacties binnenkomen die overeenkomen met jouw huidige filters.
{{/unless}}

{{#isPost}}

### Wat is Er Nieuw

De moderatiepagina is altijd al een krachtig hulpmiddel geweest voor het beheren van reacties. Je kon filteren op status, zoeken op tekst, filteren op pagina of gebruiker, en bulkacties uitvoeren. Maar om nieuwe reacties te zien moest je de pagina verversen.

Niet meer! De moderatiepagina toont nu wanneer nieuwe reacties binnenkomen die overeenkomen met jouw huidige filters. Bovenaan de lijst met reacties verschijnt een banner die je vertelt hoeveel nieuwe reacties er wachten, en door erop te klikken worden ze inline geladen zonder een volledige pagina-refresh.

De boodschap "nieuwe reacties voor jouw filters" zou in de meeste gevallen vrijwel direct moeten zijn.

### Filter Evaluatie

De transportlaag evalueert alle moderatiefilters server-side. Dit omvat statusfilters (behoefte aan beoordeling, goedkeuring nodig, spam, gemarkeerd, verbannen), stringfilters (gebruikers-ID, pagin URL, domein), en zelfs tekstzoekopdrachten. Wanneer je geciteerd tekst gebruikt zoals <div class="code">"exacte zin"</div>, gebeurt er een exacte casus-onafhankelijke substring zoekopdracht, terwijl niet-geciteerde termen fuzzy casus-onafhankelijke overeenkomsten opleveren.

Dit betekent dat als je filtert op spamreacties, je geen notificatie krijgt voor goedgekeurde reacties. Als je zoekt naar reacties die een specifieke zin bevatten, triggeren alleen overeenkomende reacties de banner.

### Moderatiegroepen

Als jouw account gebruikmaakt van moderatiegroepen om te beperken welke moderators welke reacties kunnen zien, worden deze beperkingen volledig afgedwongen voor live notificaties. De transportlaag roept de applicatieserver aan om het filter op te bouwen, wat groepsbeperkingen omvat op basis van de toegewezen groepen van de moderator. Dit filter wordt gecached gedurende de duur van de WebSocket-verbinding en bijgewerkt wanneer de moderator de filters wijzigt.

### Gemiste Evenementen

Als de verbinding van een moderator tijdelijk wegvalt (netwerkproblemen, laptop slaapstand, enz.), dan haalt het systeem automatisch in bij het opnieuw verbinden, zodat je geen werk mist.

### Prestaties

We hebben deze functie ontworpen met minimale impact op de laadtijd van de moderatiepagina.

### Multi-Region

Deze functie werkt naadloos met onze wereldwijd gedistribueerde architectuur, zodat wereldwijd gedistribueerde moderatieteams dezelfde live weergave krijgen.

### Conclusie

We hopen dat deze functie moderators tijd bespaart en de moderatie-ervaring responsiever maakt. Zoals altijd, danken we onze klanten voor hun feedback en ondersteuning.

Proost!

{{/isPost}}