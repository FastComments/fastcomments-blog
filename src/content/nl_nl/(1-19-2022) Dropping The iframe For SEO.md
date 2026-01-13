---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Het verwijderen van de iframe voor SEO[/postlink]

{{#unless isPost}}
We hebben de zichtbaarheid van uw opmerkingen voor zoekmachines verbeterd en de kans vergroot dat de inhoud aan uw site wordt toegeschreven.
{{/unless}}

{{#isPost}}

## Wat is nieuw

Voorheen renderde FastComments uw commentaarthreads in een iframe wanneer deze door zoekmachines werden gecrawld. Dit komt omdat de applicatie het gebruik van iframes vereist voor hoe we cookies gebruiken voor de sessies van uw gebruikers.

Echter, dit vormt een probleem voor zoekmachines, aangezien zij niet garanderen dat de inhoud in de iframe aan uw site zal worden toegeschreven.

Nu, bij het weergeven van opmerkingen, controleert het insluitscript of de pagina door een crawler wordt geladen. Indien dit het geval is, zal er geen gebruik worden gemaakt van een iframe!

## Hoeveel opmerkingen worden weergegeven

Tot 2.000 opmerkingen zullen aan zoekmachines voor een pagina worden getoond. Ze zullen worden gesorteerd op basis van uw standaard ingestelde sorteervolgorde.

## De tests die we hebben gedaan

We hebben ervoor gezorgd dat zoekmachines nu de volledige commentaarthread voor een pagina zien, en we hebben de prestaties van het laden van volledige commentaarthreads in één keer getest.

## Impact op bestaande klanten

Als u een bestaande klant bent die FastComments gebruikt, is de wijziging al op uw account toegepast en zijn er geen verdere acties vereist. Zodra zoekmachines uw pagina's opnieuw indexeren, zouden alle opmerkingen op die pagina's geïndexeerd moeten zijn.

## Conclusie

We hopen dat u deze update en de bijbehorende documentatie nuttig vond. Veel schrijfplezier!

{{/isPost}}