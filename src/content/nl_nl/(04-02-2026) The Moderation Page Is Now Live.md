---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]De Moderatiepagina Is Nu Live[/postlink]

{{#unless isPost}}
De FastComments moderatiepagina toont nu een live notificatie wanneer nieuwe opmerkingen binnenkomen die overeenkomen met uw huidige filters.
{{/unless}}

{{#isPost}}

### Wat Is Nieuw

De moderatiepagina is altijd een krachtig hulpmiddel geweest voor het beheren van opmerkingen. U kon filteren op status, zoeken op tekst, filteren op pagina of gebruiker en bulkacties uitvoeren. Maar om nieuwe opmerkingen te zien moest u de pagina verversen.

Dat is verleden tijd! De moderatiepagina laat nu zien wanneer nieuwe opmerkingen binnenkomen die overeenkomen met uw huidige filters. Er verschijnt een banner bovenaan de opmerkinglijst die aangeeft hoeveel nieuwe opmerkingen te wachten staan, en door erop te klikken worden ze inline geladen zonder een volledige pagina verversing.

Het "nieuwe opmerkingen voor uw filters" bericht zou in de meeste gevallen vrijwel direct moeten zijn.

### Filter Evaluatie

De transportlaag evalueert alle moderatiefilters aan de serverzijde. Dit omvat statusfilters (beoordeling vereist, goedkeuring vereist, spam, gemeld, verbannen), stringfilters (gebruikers-ID, pagina-URL, domein) en zelfs tekstzoekopdrachten. Geciteerde tekst zoals `"exacte zin"` doet een exacte hoofdletterongevoelige substringovereenkomst, terwijl ongeciteerde termen fuzzy hoofdletterongevoelige overeenkomsten doen.

Dit betekent dat als u filtert op spamopmerkingen, u geen notificaties ontvangt over goedgekeurde opmerkingen. Als u zoekt naar opmerkingen die een specifieke zin bevatten, zullen alleen bijpassende opmerkingen de banner activeren.

### Moderatiegroepen

Als uw account moderatiegroepen gebruikt om te beperken welke moderators welke opmerkingen kunnen zien, worden deze beperkingen volledig afgedwongen voor live notificaties. De transportlaag roept de applicatieserver aan om de filter te bouwen, die groepsbeperkingen omvat op basis van de toegewezen groepen van de moderator. Deze filter wordt gecachet voor de duur van de WebSocket-verbinding en bijgewerkt telkens wanneer de moderator de filters verandert.

### Gemiste Evenementen

Als de verbinding van een moderator tijdelijk wegvalt (netwerkproblemen, laptopstandby, enz.), haalt het systeem automatisch in bij het opnieuw verbinden, zodat u geen werk mist.

### Prestatie

We hebben deze functie ontworpen met minimale impact op de laadtijd van de moderatiepagina.

### Multi-Region

Deze functie werkt naadloos met onze wereldwijd gedistribueerde architectuur, zodat wereldwijd gedistribueerde moderatorteams dezelfde live weergave krijgen.

### Conclusie

We hopen dat deze functie moderators tijd bespaart en de moderatie-ervaring responsiever maakt. Zoals altijd bedanken we onze klanten voor hun feedback en ondersteuning.

Proost!

{{/isPost}}