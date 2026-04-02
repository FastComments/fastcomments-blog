---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Het FastComments Automatisch Routerings Transport Systeem[/postlink]

{{#unless isPost}}
Introductie van het FastComments Automatisch Routerings Transport Systeem!
{{/unless}}

{{#isPost}}

## Introductie

Het FastComments Automatisch Routerings Transport Systeem (FARTS) is onze transport- en servicelaag. FARTS helpt bij congestie, het routen van verkeer op basis van de gebruikerslocatie en mogelijk ook belasting in de toekomst. Het bestaat uit verschillende systemen, een geo-bewuste DNS-laag, een DB-proxy, DB-replicatie, SSL-certificaatbeheer, reverse proxy en CDN dat een on-disk LRU-cache gebruikt om assets aan de rand te cachen.

## Actief-Actief

De nieuwste versie van FART bevat een ingebouwde proxy en replicatielaag voor onze database. Dit stelt FastComments in staat om Actief-Actief te zijn met wereldwijde schrijfbaarheid, wat ervoor zorgt dat onze FARTS uiteindelijk consistent zijn. [Meer details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Een benadering die we in het begin hebben genomen, was om te kijken of we een actief-actieve fork van MongoDB konden maken. Een van onze engineers (Sloperators) slaagde erin dit daadwerkelijk te realiseren met Opus 4.6, echter, we besloten dat het risico om dit te doen hoger was dan het bouwen van ons eigen geïsoleerde systeem.

## Rust op Schaal

Een deel van de motivatie om FART te creëren was om een aantal bestaande diensten geschreven in Java te vervangen. Na een tijdje overdenken, besloten we deze samen te voegen in één Rust-dienst om de runtime overhead te verlagen. Dit was een acceptabele afweging, aangezien we FART niet vaak implementeren. FART is gecompileerd met LTO, dus we kunnen het echt laten knallen.

We hadden veel tijd besteed aan het proberen af te stemmen van het oude Java-systeem met verschillende GC's enz., en uiteindelijk besloten dat async Rust + Mimalloc aanzienlijk beter presteerden op dezelfde hardware met veel lagere geheugenvereisten, dus overstappen was een logische keuze.

Rust bleek echt geweldig te zijn voor netwerkgerelateerde code die gedeelde heaps en locks gebruikt. Het is echter niet ondoordringbaar voor runtime-problemen. Het is misschien de moeite waard om te vermelden dat code geschreven door LLM's in Rust nogal gevoelig is voor deadlocks, en een manier om dit te omzeilen is om systemen te ontwerpen als gemakkelijk te begrijpen toestandmachines, in plaats van alleen maar stapels async/await.

## De FART Master

Elke implementatie bevat zijn eigen FART Master. De master is verantwoordelijk voor het orkestreren van crons, webhooks, enzovoort.

## Klantimpact

Het FART-systeem is nu ongeveer een jaar in productie. Slechts recent hebben we de migratie naar de Actief-Actief-implementatie uitgevoerd. Er is enige impact bij het lezen van je eigen schrijfsels over regio's, wat wordt behandeld in de hierboven gelinkte blogpost en [in de documentatie](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART werkt stil op de achtergrond, hoewel de aanwezigheid altijd voelbaar is. We hopen dat je onze systemen sneller vindt voor jouw gebruiksscenario's (voornamelijk gebruikersacties die resulteren in wijzigingen in gegevens zullen sneller zijn in sommige regio's).

## Implementaties

De implementatie gebruikt hetzelfde wereldwijde orkestratiesysteem dat we gebruiken voor het implementeren van de diensten zelf. De FART-documentatie raadt Sloperators aan om nooit op een implementatie te vertrouwen, altijd de payload te verifiëren voordat deze vrijgegeven wordt.

Post-implementatie FART-waarschuwingen volgen een escalatiebeleid: eerst de kamer, dan de vloer, dan het gebouw.

## Ter conclusie

Ze zeggen dat het internet een serie buizen is, maar het is eigenlijk een serie scheten.

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om te optimaliseren, testen en deze wijziging op de juiste manier uit te brengen. We zijn enthousiast over wat er in de pijplijn aankomt. FastComments zou beter moeten schalen en beter up-time moeten hebben op de lange termijn met dit werk. Zoals het FART-runbook zegt: "Als je iets ruikt, zeg dan iets". Laat het ons hieronder weten als je problemen tegenkomt.

{{/isPost}}