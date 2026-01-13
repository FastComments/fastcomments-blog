---
[category:Performance]
###### [postdate]
# [postlink]Indexeren van uw Reacties in Zoekmachines[/postlink]

{{#unless isPost}}
We hebben de informatie verbeterd die zoekmachines zien wanneer ze uw site met FastComments crawlen.
{{/unless}}

{{#isPost}}

## Wat is nieuw

Eerder, wanneer zoekmachines websites crawlden met FastComments geïnstalleerd, indexeerden ze alleen de eerste pagina (top 30) reacties.

Dit kwam omdat de zoekmachines eerder hetzelfde zagen als u wanneer u uw site bezocht.

Nu, wanneer een zoekmachine uw site bezoekt, worden alle reacties geladen.

## Impact op Pagina-ranking

Moderne zoekmachines houden rekening met veel dingen bij het rangschikken van een pagina, waaronder de relevantie van de inhoud op de pagina in vergelijking met waar u naar zoekt, en zelfs zaken zoals
de laadtijd van die pagina.

Deze wijziging betekent dat de volledige inhoud van uw reacties beschikbaar is voor indexering, wat mogelijk de relevantie van zoekopdrachten verhoogt. Het toont ook betrokkenheid, wat
iets is dat de zoekmachine misschien gebruikt om te rangschikken.

Een mogelijke nadelige factor is de prestatie, aangezien we nu meer reacties laden, echter hebben we in onze tests gevonden dat het vele honderden, zo niet duizenden reacties zou vereisen
in een thread om FastComments te vertragen tot het punt dat dit uw laadtijden zou beïnvloeden en een rangwijziging zou veroorzaken.

Bijvoorbeeld, onze demo pagina met meer dan 100 reacties, krijgt nog steeds <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">een score van 99/100 van Google’s PageSpeed Insights</a>.

## De Tests die we Hebben Gedaan

We hebben ervoor gezorgd dat zoekmachines nu de volledige reactiedraad voor een pagina zien, en we hebben de prestaties getest van het tegelijkertijd laden van volledige reactiedraden.

## Impact op Bestaande Klanten

Als u een bestaande klant bent die FastComments gebruikt, is de wijziging al op uw account toegepast, en is er geen verdere actie vereist. Zodra zoekmachines uw pagina's opnieuw indexeren
zullen alle reacties op die pagina's geïndexeerd worden.

## Conclusie

We hopen dat u deze update en de documentatie nuttig vond. Veel plezier met reageren!

{{/isPost}}