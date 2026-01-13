---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Talen die in Reacties Gebruikt Worden Kunnen Nu Worden Beperkt[/postlink]

{{#unless isPost}}
Sommige gemeenschappen willen de gebruikte talen beperken. Dit kan nu worden gedaan met FastComments.
{{/unless}}

{{#isPost}}

### Wat Is Er Nieuw

FastComments heeft altijd geprobeerd zoveel mogelijk talen en regio's te ondersteunen.

Echter, sommige gemeenschappen willen de talen beperken die gebruikt worden om te communiceren en reacties te schrijven.

In plaats van dit als regel op te leggen, en mogelijk gebruikers te verbannen, kan het nu expliciet worden geconfigureerd op het platform.

### Hoe Het In Te Stellen

In dezelfde Widget Customization UI waar je waarschijnlijk mee vertrouwd bent, kun je nu een of meer talen selecteren waarin reacties geschreven kunnen worden.

Het platform zal, bij indiening van een reactie, proberen de taal van de reactie in realtime te bepalen. Als de betrouwbaarheid van de vastgestelde taal boven de 70% ligt, en het overeenkomt met een toegestane taal, dan wordt de reactie toegestaan.

Als de geschreven reactie niet in een taal is die door jouw configuratie is gedefinieerd, krijgt de gebruiker een foutmelding te zien in hun eigen taal.

### Impact op Ontwikkelaars

Deze configuratie zal ook van invloed zijn op reacties die via de API worden opgeslagen.

Je zult een foutmelding ontvangen zoals de volgende:

            status: 'failed',
            reason: `Comment looks like it's one of these languages: [es], but only [en,fr] are allowed.`,
            code: 'language-not-allowed',
            translatedError: "Een foutmelding in de taal van de gebruiker."

### Conclusie

Zoals bij alle grote releases, zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en correct vrij te geven. Laat ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}