---
[category:API & Development]

###### [postdate]
# [postlink]FastComments gaat Angular[/postlink]

{{#unless isPost}}
Moet je reacties insluiten in een applicatie die met Angular is ontwikkeld? Wij helpen je.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Wat is Nieuw

FastComments heeft nu een Angular-component die gelijkwaardig is aan onze VanillaJS-widget.

We hebben besloten de bibliotheek ngx-fastcomments te noemen. Je kunt de GitHub-repository met de broncode <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">hier</a> vinden.

De repository bevat ook voorbeeldgebruik van de widget in de vorm van een Angular-werkruimte.

Je kunt het op NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">hier</a> vinden.

#### Hoe het Werkt

De manier waarop deze nieuwe component werkt, is dat de Angular-component een wrapper is rond de bestaande FastComments-widget.
 
Dit betekent dat als we functies toevoegen aan onze bestaande componenten of bugs oplossen, je daar direct van profiteert!

#### Waarom de Nieuwe Component?

We hebben de FastComments VanillaJS-widget geschreven als de kern van ons bedrijf (samen met de centrale backend). Dit betekent dat we het hebben ontworpen zodat het uitgebreid kan worden, net zoals we nu doen.

Hoewel je zonder deze nieuwe Angular-bibliotheek FastComments in je applicatie zou kunnen integreren door je eigen bibliotheek te schrijven, zou dit een grote hindernis zijn voor adoptie. Door Angular rechtstreeks te ondersteunen, maken we het voor deze soorten klanten veel gemakkelijker om FastComments te adopteren.

#### Single Page Applicaties?

FastComments ondersteunt SPA's in zijn kern. De component monitort veranderingen in het config-object door gebruik te maken van wijzigingsdetectie. Bijvoorbeeld, als je de huidige pagina (genaamd urlId) bijwerkt, zal de widget opnieuw renderen. Dit maakt gebruiksgevallen zoals het inschakelen van de donkere modus of het toevoegen van paginering eenvoudig te implementeren.

#### Wat Verandert Voor Bestaande Klanten 

Er verandert niets voor bestaande klanten - en er is **niets** mis met het gebruik van de VanillaJS-versie van FastComments voor nieuwe projecten. ngx-fastcomments hangt af van de VanillaJS-versie van FastComments en zal dat altijd doen. Als we nieuwe componenten uitbrengen, zullen we hetzelfde model volgen.

Onze VanillaJS-widget is een eersteklas burger van FastComments. Deze release is volledig *additief* aan onze infrastructuur.

Bovendien blijft de VanillaJS-widget een geweldige oplossing voor het insluiten van reacties op elke webpagina die geen framework gebruikt, zoals een statische pagina.

#### Conclusie

Door de ngx-fastcomments-bibliotheek en toekomstige bibliotheken uit te brengen, hopen we het gemakkelijker te maken voor ontwikkelaars om FastComments te adopteren terwijl ze moderne ontwikkelingsmethoden gebruiken.

Proost!

{{/isPost}}

---