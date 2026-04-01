---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments is Ready for Space![/postlink]

{{#unless isPost}}
We hebben onze actieve-actieve database-migratie voltooid, waarmee echte multi-regio redundantie naar FastComments wordt gebracht.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische terminologie

### Wat is nieuw

Elke FastComments [point-of-presence](https://sophon.fastcomments.com/) neemt nu lokaal schrijven aan en replicateert deze asynchroon naar alle andere knooppunten. Dit zal zorgen voor verbeterde duurzaamheid ten opzichte van het vorige systeem, en maakt de moderatietools sneller voor gebruikers in sommige regio's, met enkele compromissen.

"Ready for Space" is een beetje optimistisch, maar het idee is dat we FastComments naar verschillende planeten kunnen implementeren en dat het systeem uiteindelijk gesynchroniseerd zou eindigen. Gebruikers op Pluto zouden echter ongeveer een dag moeten wachten om veranderingen op hun aankomende factuurpagina te zien, aangezien momenteel slechts één master per regio de factureringsinformatie kan aggregeren.

### Een beetje geschiedenis, waarom de verandering

Toen FastComments oorspronkelijk werd gelanceerd, hadden we een zeer typische architectuur. We hadden een proxylaag, een toepassingslaag, een database, enkele replica's, en later replica's over regio's en cloudproviders voor extra redundantie.

Uiteindelijk verplaatsten we de database-replica's naar alle zones waar de meeste van onze gebruikers zijn, en implementeerden we ook de app daar, en creëerden we ons eigen DNS- en proxy-systeem (beschreven in een latere blogpost) om verzoeken naar het dichtstbijzijnde app-knooppunt te routeren. Dit maakt lezen snel, maar schrijven langzamer, omdat je nu in plaats van te wachten op één HTTP-rondreis naar de backend, wacht op een HTTP-rondreis naar een nabij knooppunt, en dat knooppunt mogelijk meerdere database-schrijfacties naar de primaire maakt. Niet goed!

Om dit te bestrijden, hebben we veel gebieden van de applicatie herstructureerd zodat een `readPreference` in functieargumenten kan worden meegegeven, zodat aanroepers kunnen beslissen hoe verouderd ze hun lezingen acceptabel vinden, en bovendien hebben we meer schrijfacties (zoals het schrijven van moderatorstatistieken bij moderatoracties) fire-and-forget gemaakt. Niet ideaal, maar het heeft de zaken aanzienlijk versneld.

Een probleem waar we tegenaan liepen bij het draaien van Mongo wereldwijd zijn netwerksplitsingen. Als genoeg knooppunten worden afgesloten, stoppen de lezingen omdat elk knooppunt onzeker wordt of het acceptabel is om lezingen te serveren. Er zijn enkele manieren om hieromheen te werken, maar de randgevallen worden rommelig. Dit is geen theoretisch probleem - het gebeurde vaak genoeg, wat leidde tot 3AM-pagina's, dat we er genoeg van kregen, zelfs bij pogingen om Mongo af te stemmen zodat het oké kon zijn met de onzekerheid van replicaset-verkiezingen tot een minuut uit elkaar. Helaas waren de netwerken van Sao Paulo naar Falkenstein, bijvoorbeeld, gewoon niet zo goed bij enkele van onze hostingproviders. Het afstemmen van congestiecontrole hielp, maar loste het probleem niet op.

De heilige graal-oplossing, mits je akkoord gaat met bepaalde compromissen, is de mogelijkheid om de schrijfacties lokaal op dat knooppunt (dat degelijke hardware, RAID, etc. heeft, die onwaarschijnlijk zal falen) te accepteren en de gebruiker te vertellen dat hun gegevens zijn opgeslagen. Je kunt ook op dat point-of-presence nog een tweede knooppunt hebben als een hete replica voor duurzaamheid.

Dus dit is waar we eindigden. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore zijn allemaal hun eigen replicaset en accepteren schrijfacties. De EU-implementatie (hoewel er maar drie PoPs zijn) heeft hetzelfde gedrag.

### Hoe het werkt

Een deel hiervan is behandeld in de voorgaande sectie, maar de TL;DR is dat het CRDT-lite is. We hebben een proxy gemaakt (in Rust, want natuurlijk) die tussen de toepassing en Mongo zit en het multi-master maakt. De proxy is peer-aware, beheert checkpoints, replicatie, monitoring en initiële synchronisatie. Het is een multi-master vervangingsysteem voor Mongo's replicatiesysteem, inclusief voor enkele DDL-commando's.

**Het verschil met andere tools** is dat dit **de oplog niet 'tailt'**. Het 'tailen' van de oplog, of het gebruiken van wijzigingstromen, zou niet werken, omdat ze je alleen de laatste staat van het object na de schrijfactie tonen, waardoor het onmogelijk wordt om conflicten te behandelen. Je moet elke `$set`, `$inc`-bewerking vastleggen en die bewerking zelf repliceren.

Dit is een domeinspecifieke oplossing. Het zou niet voor alle producten werken. Je zou kunnen zeggen dat het domein-gedreven ontwerp is :). Het werkt voor ons omdat we vanaf het begin zeer zorgvuldig alleen de velden die we op documenten wijzigen `$set` - we gebruiken bijvoorbeeld nooit Mongo's `replaceOne`. Hetzelfde geldt voor tellers. Je **doet nooit** `SET VOTES = 5`. In plaats daarvan schrijf je `INCREMENT VOTES BY 5`, omdat dit eventual consistency mogelijk maakt. Verspreide vergrendelingen worden afgehandeld door **niet**. Slechts één knooppunt per cluster heeft een vlag ingesteld om cronjobs uit te voeren. Hoewel dit beperkt lijkt, kunnen we servers kopen met terabytes aan RAM, zodat we deze trade-off kunnen maken om risico's en complexiteit te verlagen.

### Je eigen schrijfacties lezen

Voor ontwikkelaars die de API gebruiken, zou je je eigen schrijfacties zoals voorheen moeten kunnen lezen (maak een API-aanroep om een commentaar te maken, lijst vervolgens de opmerkingen op en zie de nieuwe vermelding in die lijst). **De waarschuwing** is dat je dit niet over regio's heen kunt doen. Als je backend zich in slechts één regio bevindt, zoals us-west, dan zou je je eigen schrijfacties moeten kunnen lezen, behalve in het geval dat tussen je schrijfactie en je lezing, dat knooppunt uitvalt **en** je DNS-cache wordt bijgewerkt om naar het volgende dichtstbijzijnde knooppunt te wijzen. Voorwaarde is dat dit niet gebeurt, het lezen van je eigen schrijfacties is betrouwbaar.

[Je kunt ook pinnen welke point-of-presence je raakt. Meer informatie hier.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testen & De Migratie

Ongeveer de helft van de code in het systeem is het testframe, de structuur en de tests. Toch was de release een beetje haperig, met langere downtime (1 uur voor de EU en 20 minuten voor us-global) dan gewenst, maar we zijn blij dat we deze mijlpaal hebben gepasseerd en bedanken jullie voor jullie geduld!

### Ter conclusie & Wat dit voor jou betekent

FastComments zou nu sneller en duurzamer moeten zijn dan ooit, en nu kunnen we weer gaan werken aan nieuwe functies :)

Proost!

{{/isPost}}

---