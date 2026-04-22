---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Het FastComments Automatisch Routerings Transport Systeem[/postlink]

{{#unless isPost}}
Introductie van Het FastComments Automatisch Routerings Transport Systeem!
{{/unless}}

{{#isPost}}

## Inleiding

Het FastComments Automatisch Routerings Transport Systeem (FARTS) is onze transport- en servicelaag. FARTS helpen bij congestie, routeren verkeer op basis van de gebruikerslocatie en mogelijk de load in de toekomst. Het bestaat uit verschillende systemen, een geo-bewuste DNS-laag, een DB-proxy, DB-replicatie, SSL-certificaatbeheer, reverse proxy, en CDN dat een on-disk LRU-cache gebruikt om middelen aan de rand op te slaan.

## Actief-Actief

De nieuwste versie van FART bevat een ingebouwde proxy en replicatielaag voor onze database. Dit stelt FastComments in staat om Actief-Actief te zijn met wereldwijde schrijfbeschikbaarheid, wat ervoor zorgt dat onze FARTS uiteindelijk consistent zijn. [Meer details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Een benadering die we in het begin hebben geprobeerd, was kijken of we een actief-actief fork van MongoDB konden maken. Een van onze ingenieurs (Sloperators) slaagde erin dit te realiseren met Opus 4.6, maar we besloten dat het risico om dit te doen hoger was dan het bouwen van ons eigen geïsoleerde systeem.

## Rust op Schaal

Een deel van de motivatie om FART te creëren was om enkele bestaande diensten die in Java zijn geschreven te vervangen. Na enige tijd erover nagedacht te hebben, besloten we deze samen te voegen tot één Rust-dienst om runtime overhead te verlagen. Dit was een acceptabele afweging aangezien we FART niet vaak implementeren. FART wordt gecompileerd met LTO, zodat we het echt kunnen laten draaien.

We hebben veel tijd besteed aan het proberen te optimaliseren van het oude Java-systeem met verschillende GC's enzovoorts, en uiteindelijk besloten dat async Rust + Mimalloc aanzienlijk beter presteerde op dezelfde hardware met veel lagere geheugenvereisten, dus overstappen was een logische keuze.

Rust bleek echt geweldig te zijn voor netwerkm gerelateerde code die gedeelde heaps en locks gebruikt. Het is echter niet ongevoelig voor runtime problemen. Het is misschien het vermelden waard dat code geschreven door LLM's in Rust vrij gevoelig is voor deadlocks, en een manier om dit te omzeilen is om systemen te ontwerpen als gemakkelijk te begrijpen toestandsmachines, in plaats van gewoon stapels async/await.

## De FART Master

Elke implementatie bevat zijn eigen FART Master. De master is verantwoordelijk voor het orkestreren van crons, webhooks, enzovoorts.

## Klant Impact

Het FART-systeem is nu ongeveer een jaar in productie. Pas recent hebben we de migratie naar de Actief-Actief implementatie uitgevoerd. Er is enige impact voor het lezen van je eigen schrijfsels over verschillende regio's, wat wordt behandeld in de hierboven gelinkte blogpost en [in de documentatie](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART werkt stilletjes op de achtergrond, hoewel de aanwezigheid ervan altijd voelbaar is. We hopen dat je onze systemen sneller vindt voor jouw gebruiksgevallen (meestal zullen gebruikersacties die resulteren in gegevenswijzigingen sneller zijn in sommige regio's).

## Implementaties

Implementatie gebruikt hetzelfde wereldwijde orchestratiesysteem dat we gebruiken voor het implementeren van de diensten zelf. De FART-documentatie raadt Sloperators aan nooit een implementatie te vertrouwen, altijd de payload te verifiëren voordat deze wordt vrijgegeven.

Na de implementatie volgen FART-alerts een escalatiebeleid: eerst de kamer, dan de verdieping, dan het gebouw.

## Conclusie

Ze zeggen dat het internet een serie buizen is, maar het is eigenlijk een serie toots.

Zoals bij alle belangrijke releases zijn we blij dat we de tijd konden nemen om te optimaliseren, testen en deze wijziging goed te publiceren. We zijn enthousiast over wat eraan komt. FastComments zou beter moeten schalen en in de lange termijn betere uptime moeten hebben met dit werk. Zoals het FART-runbook zegt: "Als je iets ruikt, zeg dan iets". Laat het ons hieronder weten als je problemen ontdekt.

{{/isPost}}

---