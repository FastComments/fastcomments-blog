---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Reacties insluiten op een VueJS-site met FastComments[/postlink]

{{#unless isPost}}
Heb je reacties in een applicatie ontwikkeld met Vue nodig? Wij helpen je.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische terminologie

#### Wat is nieuw

FastComments heeft nu een Vue-component die gelijkwaardig is aan onze VanillaJS-widget.

We hebben besloten de bibliotheek fastcomments-vue te noemen. Je kunt de GitHub-repository met de broncode <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">hier</a> vinden.

De repository bevat ook voorbeeldgebruik van de widget.

Het is op NPM, dat je <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">hier</a> kunt vinden.

#### Hoe het werkt

De manier waarop deze nieuwe component werkt, is dat de Vue-component een wrapper is rond de bestaande FastComments-widget.
 
Dit betekent dat als we functies aan onze bestaande componenten toevoegen of bugs verhelpen, je daar meteen van profiteert!

#### Waarom de nieuwe component?

We hebben de FastComments VanillaJS-widget geschreven als de kern van ons bedrijf (samen met de kern backend). Dit betekent dat we het hebben ontworpen om uitgebreid te worden op dezelfde manier als we nu doen.

Hoewel je zonder deze nieuwe Vue-bibliotheek FastComments in je applicatie had kunnen integreren door je eigen bibliotheek te schrijven, zou het een belangrijke hindernis voor acceptatie zijn geweest. Door Vue direct te ondersteunen, maken we het veel eenvoudiger voor deze types klanten om FastComments te adopteren.

#### Vue 3.0

We hebben een component specifiek gebouwd voor Vue 3.0 genaamd <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Single Page Applications?

FastComments ondersteunt SPAs in de kern. De component houdt wijzigingen in het configuratieobject in de gaten - als je de huidige pagina (genaamd urlId) bijwerkt, zal de widget opnieuw worden weergegeven.

#### Wat verandert er voor bestaande klanten 

Er verandert niets voor bestaande klanten - en er is **niets** mis met het gebruik van de VanillaJS-versie van FastComments voor nieuwe projecten. fastcomments-vue is afhankelijk van de VanillaJS-versie van FastComments en dat zal altijd zo blijven. Als we Angular- of Vue-componenten uitbrengen, zullen we hetzelfde model volgen.

Onze VanillaJS-widget is een eerste klas burger van FastComments. Deze release is volledig *additief* aan onze infrastructuur.

Daarnaast blijft de VanillaJS-widget een geweldige oplossing voor het insluiten van reacties op elke webpagina die geen framework gebruikt, zoals een statische pagina.

#### Conclusie

Met de release van de fastcomments-vue-bibliotheek, en toekomstige bibliotheken, hopen we het voor ontwikkelaars gemakkelijker te maken om FastComments te adopteren tijdens het gebruik van moderne ontwikkelingsmethodologieën. 

Proost!

{{/isPost}}

---