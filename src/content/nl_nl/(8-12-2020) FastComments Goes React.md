---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Gaat React[/postlink]

{{#unless isPost}}
Moet je reacties in een applicatie die met React is ontwikkeld, insluiten? Wij hebben je gedekt.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Wat is Nieuw

FastComments heeft nu een React-component die qua functionaliteit gelijkwaardig is aan onze VanillaJS-widget.

We hebben besloten de bibliotheek fastcomments-react te noemen. Je kunt de GitHub-repository met de broncode <a href="https://github.com/FastComments/fastcomments-react" target="_blank">hier</a> vinden.

De repository bevat ook voorbeeldgebruik van de widget.

Het is op NPM, wat je kunt vinden <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">hier</a>.

#### Hoe het Werkt

De manier waarop deze nieuwe component werkt, is dat de React-component een wrapper is rond de bestaande FastComments-widget.
 
Dit betekent dat als we functies aan onze bestaande componenten toevoegen of bugs oplossen, je daar direct van profiteert!

#### Waarom De Nieuwe Component?

We hebben de FastComments VanillaJS-widget geschreven om de kern van ons bedrijf te zijn (samen met de kern backend). Dit betekent dat we het hebben ontworpen om uitgebreid te worden, net zoals we nu doen.

Hoewel je zonder deze nieuwe React-bibliotheek FastComments in je applicatie had kunnen integreren door je eigen bibliotheek te schrijven, zou dit een grote hindernis zijn voor adoptie geweest. Door React direct te ondersteunen, maken we het veel gemakkelijker voor dit soort klanten om FastComments aan te nemen.

#### Single Page Applications?

FastComments ondersteunt SPA's in zijn kern. De component houdt veranderingen in het configuratieobject in de gaten - dus als je de huidige pagina (genaamd urlId) bijwerkt, zal de widget opnieuw worden weergegeven.

#### Wat Verandert Voor Bestaande Klanten

Er verandert niets voor bestaande klanten - en er is **niets** mis met het gebruik van de VanillaJS-versie van FastComments voor nieuwe projecten. fastcomments-react is afhankelijk van de VanillaJS-versie van FastComments en dat zal altijd zo blijven. Als we Angular- of Vue-componenten uitbrengen, zullen we hetzelfde model volgen.

Onze VanillaJS-widget is een volwaardig onderdeel van FastComments. Deze release is volledig *additief* aan onze infrastructuur.

Daarnaast blijft de VanillaJS-widget een geweldige oplossing voor het insluiten van reacties op elke webpagina die geen framework gebruikt, zoals een statische pagina.

#### Ter Conclusie

Door de fastcomments-react-bibliotheek en toekomstige bibliotheken vrij te geven, hopen we het voor ontwikkelaars gemakkelijker te maken om FastComments aan te nemen terwijl ze moderne ontwikkelingsmethodologieën gebruiken. 

Proost!

{{/isPost}}

---