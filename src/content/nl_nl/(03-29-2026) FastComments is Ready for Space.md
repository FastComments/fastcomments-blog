---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments is Ready for Space![/postlink]

{{#unless isPost}}
We hebben onze actieve actieve database-migratie voltooid, waardoor echte multi-region redundantie naar FastComments is gebracht.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

### Wat is Nieuw

Elke FastComments [point-of-presence](https://sophon.fastcomments.com/) neemt nu lokaal schrijfacties aan en repliceert deze asynchroon
naar alle andere knooppunten. Dit zal zorgen voor verhoogde duurzaamheid ten opzichte van het vorige systeem, en maakt de moderatietools sneller
voor gebruikers in sommige regio's, met enkele handelsvoordelen.

"Ready for Space" is misschien een beetje optimistisch, maar het idee is dat we FastComments naar verschillende planeten kunnen uitrollen en uiteindelijk het systeem gesynchroniseerd zou zijn. Gebruikers op Pluto zouden echter ongeveer een dag moeten wachten voordat wijzigingen zichtbaar zijn op hun aankomende factuurpagina, aangezien momenteel slechts één
master per regio de factureringsinformatie kan aggregeren.

### Wat Geschiedde, Waarom de Verandering

Toen FastComments oorspronkelijk werd gelanceerd, hadden we een zeer typische architectuur. We hadden een proxylaag, een applag, een database, enkele replica's, en later replica's over regio's en cloudproviders voor extra redundantie.

Uiteindelijk hebben we de DB-replica's naar alle zones gebracht waar de meeste van onze gebruikers zich bevinden en hebben we de applicatie daar ook uitgerold, en een eigen DNS- en proxy-systeem gecreëerd (beschreven in een latere blogpost) om verzoeken naar het dichtstbijzijnde app-knooppunt te routeren. Dit maakt lezen snel, maar schrijven langzamer, omdat je nu in plaats van te wachten op één HTTP-ronde naar de backend, wacht op een HTTP-ronde naar een nabijgelegen knooppunt, en dat knooppunt mogelijk meerdere database-schrijfacties terug naar de primaire kan doen. Niet goed!

Om dit tegen te gaan, hebben we veel gebieden van de applicatie herstructureerd om een `readPreference` in functie-argumenten te nemen, zodat aanroepers kunnen beslissen hoe
verlopen ze akkoord zijn met hun gelezen gegevens, en daarnaast hebben we meer schrijfacties (zoals het opslaan van moderator-statistieken bij moderator-acties) als fire-and-forget gemaakt. Niet ideaal, maar het versnelde de zaken aanzienlijk.

Een probleem dat we tegenkwamen bij het wereldwijd draaien van Mongo zijn netwerksplitsingen. Als genoeg knooppunten worden afgesneden, stoppen leesbewerkingen omdat elk knooppunt onzeker wordt of het aanvaardbaar is om te lezen. Er zijn enkele manieren om hier omheen te werken, maar de randgevallen worden rommelig. Dit is geen theoretisch probleem - het is vaak genoeg gebeurd en leidde tot 3AM-pagina's, zodat we er genoeg van kregen, zelfs toen we Mongo probeerden af te stemmen om akkoord te gaan met replicaset-verkiezingsonzekerheid tot een minuut verschil. Helaas waren de netwerken van Sao Paulo naar Falkenstein bijvoorbeeld gewoon niet erg goed over enkele van onze hostingproviders. Het afstemmen van congestiecontrole hielp, maar loste het probleem niet op.

De heilige graaloplossing, ervan uitgaande dat je akkoord gaat met bepaalde handelsvoordelen, is de mogelijkheid om de schrijfacties lokaal op dat knooppunt te accepteren (dat redelijke hardware, RAID, enz. heeft die waarschijnlijk niet zal falen) en de gebruiker te vertellen dat hun gegevens zijn opgeslagen. Je kunt ook op dat point-of-presence nog een tweede knooppunt hebben als een warme replica voor duurzaamheid.

Dit is dus waar we uiteindelijk op uitkwamen. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore zijn allemaal hun eigen replica sets en accepteren schrijfacties. De EU-uitrol (hoewel slechts drie PoPs) heeft hetzelfde gedrag.

### Hoe Het Werkt

Een deel hiervan wordt behandeld in de vorige sectie, maar de TL;DR is dat het CRDT-lite is. We hebben een proxy gecreëerd (in Rust, omdat dat natuurlijk moest) die tussen de applicatie en Mongo zit en het multi-master maakt. De proxy is peer-bewust, beheert checkpoints, replicatie, monitoring en initiële synchronisatie. Het is een multi-master vervanging voor het replicatiesysteem van Mongo, inclusief voor sommige DDL-opdrachten.

**Het verschil met andere tools** is dat dit **de oplog niet volgt**. Het volgen van de oplog of het gebruiken van wijzigingsstromen zou niet werken, omdat ze alleen de uiteindelijke staat van het object na de schrijfoperatie tonen, waardoor het onmogelijk is om conflicten te behandelen. Je moet elke `$set`, `$inc` operatie vastleggen en die operatie zelf repliceren.

Dit is een domeinspecifieke oplossing. Het zou niet voor alle producten werken. Je zou kunnen zeggen dat het domein-gestuurde ontwerp is :). Het werkt voor ons omdat we vanaf het begin heel zorgvuldig alleen de `$set` velden aanpassen die we wijzigen op documenten - we gebruiken bijvoorbeeld nooit Mongo's `replaceOne`. Hetzelfde geldt voor tellers. Je **doet nooit** `SET VOTES = 5`. In plaats daarvan schrijf je `INCREMENT VOTES BY 5`, omdat dit uiteindelijke consistentie mogelijk maakt. Gedistribueerde sloten worden afgehandeld door **ze volledig te vermijden**. Slechts één knooppunt
per cluster heeft een vlag ingesteld om cronjobs uit te voeren. Hoewel dit beperkt kan lijken, kunnen we servers kopen met terabytes aan RAM, dus kunnen we deze afweging maken om het risico en de complexiteit te verlagen.

### Je Eigen Schrijfacties Lezen

Voor ontwikkelaars die de API gebruiken, zou je je eigen schrijfacties net als voorheen moeten kunnen lezen (maak een API-aanroep om een commentaar te creëren, en lijst dan de opmerkingen en zie de nieuwe vermelding in die lijst). **De voorwaarde** is dat je dit niet tussen regio's kunt doen. Als je backend zich in slechts één regio bevindt,
zoals us-west, dan zou je je eigen schrijfacties moeten kunnen lezen, tenzij het knooppunt tussen je schrijf- en leesoperatie uitvalt **en** je
DNS-cache wordt bijgewerkt naar het volgende dichtstbijzijnde knooppunt. Voor zover dit niet gebeurt, is het lezen van je eigen schrijfacties betrouwbaar.

### Testen & De Migratie

Ongeveer de helft van de code in het systeem is de teststructuur, het framework en de tests. Toch was de release een beetje hobbelig, met meer downtime (1 uur voor de EU en 20 minuten voor ons wereldwijd) dan gewenst, maar we zijn blij dat we deze mijlpaal hebben bereikt en bedanken je voor je geduld!

### Ter conclusie & Wat Dit Voor Jou Betekent

FastComments zou nu sneller en duurzamer moeten zijn dan ooit, en nu kunnen we teruggaan naar het werken aan functies :)

Proost!

{{/isPost}}

---