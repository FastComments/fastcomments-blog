---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Het FastComments Automatische Routerings Transport Systeem[/postlink]

{{#unless isPost}}
Introductie van het FastComments Automatische Routerings Transport Systeem!
{{/unless}}

{{#isPost}}

## Inleiding

Het FastComments Automatische Routerings Transport Systeem (FARTS) is onze transport- en servicelaag. FARTS helpen met congestie, routeren verkeer op basis van de gebruikerslocatie en mogelijk in de toekomst de load. Het bestaat uit verschillende systemen, een geo-bewuste DNS-laag, een DB-proxy, DB-replicatie, SSL-certificaatbeheer, reverse proxy en CDN dat een on-disk LRU-cache gebruikt om assets aan de rand te cachen. Het systeem ondersteunt zowel stille als luide failover-modi. Stille mode heeft de voorkeur in productie.

## Actief-Actief

De nieuwste versie van FART bevat een ingebouwde proxy en replicatielaag voor onze database. Dit stelt FastComments in staat om Actief-Actief te zijn met wereldwijde schrijfbeschikbaarheid, waardoor onze FARTS uiteindelijk consistent kunnen zijn. [Meer details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Een van de benaderingen die we in het begin hebben genomen, was kijken of we een fork van MongoDB konden maken. Een van onze ingenieurs (Sloperators) is erin geslaagd dit te realiseren met Opus 4.6, maar we besloten dat het risico om dit te doen hoger was dan het bouwen van ons eigen geïsoleerde systeem.

Het laatste wat je zou willen met iets als FART is weten dat het is aangekomen, maar je kunt de bron niet traceren. We hebben monitoring en diagnostiek toegevoegd om de actieve-actieve replicatie op een gedetailleerd niveau te monitoren.

## Rust op Schaal

Een deel van de motivatie om FART te creëren was het vervangen van enkele bestaande services geschreven in Java. Nadat we er een tijdje over nagedacht hadden, besloten we deze te consolideren in één Rust-service om de runtime overhead te verlagen. Dit was een acceptabele afweging omdat we FART niet vaak implementeren. FART wordt gecompileerd met LTO, zodat we het echt kunnen laten knallen.

We hadden veel tijd besteed aan het afstemmen van het oude Java-systeem met verschillende GCs, enzovoort, en besloten uiteindelijk dat async Rust + Mimalloc aanzienlijk beter presteerden op dezelfde hardware met veel lagere geheugeneisen, dus overstappen was een makkelijke keuze.

## De FART Master

Elke implementatie bevat zijn eigen FART Master. De master is verantwoordelijk voor het orkestreren van crons, webhooks, enzovoort.

## Klantimpact

Het FART-systeem is nu ongeveer een jaar in productie. Pas recent hebben we de migratie naar de Actief-Actief-implementatie uitgevoerd. Het nieuwe systeem biedt ons meer inzicht in de latentie in het systeem, evenals een lagere onderhoudsbelasting, zodat we nu meer tijd kunnen besteden aan functies.

FART werkt stilletjes op de achtergrond, hoewel zijn aanwezigheid altijd voelbaar is. We hopen dat je onze systemen sneller vindt voor jouw gebruikssituaties (voornamelijk gebruikersacties die leiden tot wijzigingen in gegevens zullen in sommige regio's sneller zijn).

## Implementaties

Implementatie gebruikt hetzelfde globale orkestratiesysteem dat we gebruiken voor het implementeren van de services zelf. De FARTS-documentatie raadt aan dat sloperators nooit een implementatie vertrouwen, altijd de payload verifiëren voordat ze deze vrijgeven.

Na de implementatie volgen FART-waarschuwingen een escalatiebeleid: eerst de kamer, dan de verdieping, dan het gebouw.

## Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om dit onderdeel te optimaliseren, te testen en correct vrij te geven. We zijn enthousiast over wat er aan komt. FastComments zou beter moeten opschalen en in de loop van de tijd een betere uptime hebben met dit werk. Zoals het FART-handboek zegt: "Als je iets ruikt, zeg dan iets". Laat het ons hieronder weten als je problemen ontdekt.

{{/isPost}}

---