---
[category:Aankondigingen]
[category:Prestaties]
[category:API & Ontwikkeling]
###### [postdate]
# [postlink]FastComments Is Nu Globaal Gedistribueerd[/postlink]

{{#unless isPost}}
FastComments is overgestapt naar een nieuwe architectuur voor betere wereldwijde prestaties.
{{/unless}}

{{#isPost}}

### Wat is er Nieuw

Voorheen had FastComments een zeer traditionele architectuur voor een webapplicatie. We hadden onze applicatieservers, databases en enkele andere diensten. Dit was
gedupliceerd over twee regio's (us-west en eu). Als je in Frankrijk was en een commentaar-thread wilde bekijken voor een klant die in ons
wereldwijde datacenter was gehost, moesten jouw verzoeken helemaal naar us-west voor de commentgegevens.

Niet meer! Nu worden commentgegevens en alle media-assets wereldwijd gerepliceerd voor klanten in onze wereldwijde implementatie, en voor klanten
in onze EU-implementatie hebben we drie punten van aanwezigheid in de EU waar data wordt gerepliceerd. Jouw verzoeken gaan naar de dichtstbijzijnde node in de
EU.

### Hoe Het Vroeger Werkte

Behalve voor databases die meerdere live-replicas over regio's en cloudproviders hadden, werden alle diensten op één instantie per servicetype uitgerold.
Dit betekende dat we voor elke regio één applicatieserver, één pubsub-server en één mediaserver hadden. Het plan was om verticaal te schalen zolang we konden
omdat dit de zaken eenvoudig hield. Code schrijven was eenvoudig - je wist altijd dat je "je eigen schrijfsels kon lezen" wanneer je de database aanraakte. Infra was eenvoudig,
met uitzondering van veiligheidsupdates die een minuut downtime kostten.

### Het Probleem

Het probleem begon natuurlijk toen we de capaciteit bereikten. Dus we zouden optimaliseren, en uiteindelijk moesten we de instantie groot maken voor die dienst.

Dit begon kostbaar te worden op Linode, waar een $144-instantie ongeveer gelijk is, op basis van onze passmark-testen, met een $20 OVH-node, en zelfs als
we van hostingproviders wisselden, zouden we op tal van plaatsen enkele punten van falen hebben - en providers zoals OVH hebben doorgaans langere oplostijden dan Linode
voor onderhoudsproblemen.

### RiR :)

In de eerste paar jaren waren de PubSub- en Media-diensten van FastComments geschreven in Java. Java werd gekozen vanwege de relatief hoge prestaties voor de moeite
die erin werd gestoken, en na jaren van het afstemmen van de GC, het proberen van G1GC, Shenandoah en Z1, besloten we geen Java meer te gebruiken. Het geheugenverbruik was simpelweg te hoog en aangezien deze
diensten zeer stilstaand waren na voltooiing, vervaagden de voordelen van Java. Bovendien hadden deze diensten te maken met het "thundering herd"-probleem, wat betekende
dat de JVM probeerde de piekbelasting te verwerken wanneer de JIT nog niet eens was ingeschakeld. Deze diensten waren perfecte kandidaten om over te schakelen naar C++ of Rust.

Rust werd gekozen omdat we geen C++-experts zijn en een fout in netcode de gegevens van de ene klant aan een andere kon blootstellen. Rust helpt ons deze problemen te voorkomen.

We wilden deze diensten toch consolideren, dus terwijl we misschien *nog een* ronde optimalisatie hadden kunnen doen met GraalVM, besloten we om over te stappen naar Rust en het achter ons te laten.

De migratie verliep niet zonder problemen. Deze diensten moeten SSL beëindigen, HTTP 1.1, HTTP/2, enz. ondersteunen. Ze doen dingen zoals het gelijktijdig beheren van veel gegevensstromen,
media lezen van een edge on-disk lru-cache, S3, databases, en communiceren in een mesh. Het Java-ecosysteem, Vertx en Netty, waren zeer goed voor deze zaken. We drukken het bibliotheek-ecosysteem tot het uiterste, en het gebrek aan ervaring met de Rust-bibliotheken betekende dat we
wat trial-and-error hadden. Dit veroorzaakte enige downtime, en daarvoor bieden we onze excuses aan.

We experimenteerden ook met verschillende geheugenbeheerders, en kwamen uit op mimalloc voor onze aangepaste DNS-servers en libc voor de transportlaag. We draaien geen Nginx of Apache, maar gebruiken in plaats daarvan onze eigen combinatie van een aangepaste DNS-server die klanten wereldwijd routert op basis van een in-memory index die wekelijks wordt opnieuw opgebouwd vanuit Maxmind, en onze transportlaag in Rust die een mesh onderhoudt
met de andere transportinstanties. De transportlaag beëindigt SSL, handelt het pubsub-werk af en fungeert als onze CDN. Het voordeel hiervan is minder overhead bij het verplaatsen van dingen tussen
diensten, en minder infrastructuuroverhead/-abstractie. Het nadeel is zichtbaarheid, dus goede statistieken zijn belangrijk.

Wat betreft de resulterende prestaties, gebruikten de Rust-diensten ongeveer 10-30% van het geheugen van de Java-diensten, ondanks al ons werk. Ik lees boeken zoals Java Concurrency in Practice voor de lol, dus
terwijl ik geen expert ben, weet ik het een en ander over het schrijven van snelle JVM-diensten, en het was veel gemakkelijker om dit met Rust te bereiken. Bovendien zouden pieken van berichten naar grote aantallen
abonnees nauwelijks registreren op CPU-gebruik wanneer de JVM-diensten 40% van hun tijd in GC doorbrachten, ondanks dat we onze code meer als een game-engine schreven en minder
als je typische server. Ik kan niet zeggen dat ik een grote Rust-fan ben, maar voor diensten die veel werk verzetten en niet veel veranderen na de initiële ontwikkeling, is het perfect. Onze belangrijkste bedrijfslogica
blijft in TypeScript.

### De Nieuwe Architectuur

De nieuwe architectuur heeft geen "huisdier" nodes meer. In plaats daarvan is elke server een complete kloon met alle dezelfde diensten en bijna identieke configuratie. Ze draaien elk
de transportlaag, DNS, de applicatieserver en een kopie van de database. Alle nodes onderhouden volledige schijf-encryptie met automatische ontgrendeling met Dropbear.

Elke server draait het routerende transport dat verzoeken beëindigt en deze afhandelt als een websocket, http-stroom of CDN-verzoek. Deze servers verbinden met elkaar en elke gegeven server biedt een mapping van het wereldwijde netwerk naar zijn lokale DNS-server om in real-time aan de DNS door te geven waar elke live node zich wereldwijd bevindt.

Een voordeel van de nieuwe architectuur is redundantie. Als een klant in één regio ons zeer hard aanpakt, blijven de andere regio's online.

De applicatiecode moet nu goed bewust zijn van welke verzoeken de dichtstbijzijnde node kunnen raken of welke naar de primaire database moeten, die misschien ver weg is. Een fout maken kan de prestaties drastisch verminderen. Dit betekent ook dat schrijfacties vanuit sommige regio's traag kunnen zijn, en dit vereist zorgvuldige afstemming en optimalisatie. We volgen nu een patroon intern in de code waarin alle methoden die de database aanroepen een readPreference-argument hebben, zodat aanroepen helemaal naar de top expliciet moeten beslissen hoe te query-en.

Het voordeel is zeer goede horizontale schaalbaarheid voor reads. FastComments is zeer lees zwaar, maar we mogen onze moderatoren niet vergeten! Moderatoren werken dag in, dag uit over de wereld
en we willen dat hun ervaring goed blijft. Als onderdeel van deze rollout hebben we met een paar van hen samengewerkt om ervoor te zorgen dat de moderatietools snel blijven.

We kunnen ook hardware handmatig selecteren, wat leuk en belonend is. De nieuwe servers zijn een mix van i5-13500 en Ryzen 5 5600X dozen, en de EU draait op enkele oudere Xeons. In onze benchmarks waren al deze
veel sneller dan de duurdere servers die we bij andere providers onderzochten. Het nadeel is meer setup-werk, maar we hebben dit geautomatiseerd, samen met SMART-schijfmonitoring voor storingen, enzovoorts.

Het doen van dit soort dingen betekent dat we kunnen blijven concurreren met prijzen.

### De Rollout

De rollout in de afgelopen paar maanden terwijl we de diensten herschrijven en naar nieuwe hostingproviders verhuizen is hobbelig geweest, we danken je voor je geduld.

Bij de initiële rollout toonden onze statistieken een toename van verzoeken die > 100ms dureden. We proberen niet te veel verzoeken te hebben die zo lang duren voor iets.

<div class="text-center">
    <div class="sm">Geleidelijke Vooruitgang</div>
    <img src="images/slow-reqs.png" alt="Langzame Verzoeken" title="Langzame Verzoeken" />
</div>

We maken nog steeds geleidelijke vooruitgang in het verbeteren van de prestaties voor sommige regio's. Dank aan iedereen die tot nu toe feedback heeft gegeven.

### Overwegingen Bij Het Gebruik Van De API

De API blijft sterk consistent - je kunt je eigen schrijfsels lezen - om de achterwaartse compatibiliteit te behouden en de zaken eenvoudig te houden voor ontwikkelaars. Om
ontwikkelaars de keuze tussen prestaties en consistentie te laten maken, zijn we van plan om de parameter readPreference bloot te stellen. Het voordeel is dat we ook een kortingen op credits kunnen aanbieden voor
deze API-aanroepen.

Alle publieke eindpunten, zoals voor het serveren van de publieke comment widget, lezen altijd van de dichtstbijzijnde (lokale) database op die node.

### Waarom Niet Gewoon Een Gewone CDN Gebruiken

De comment threads zijn niet statisch, ze zijn live, en het toepassen van een live stream op de verouderde statische gegevens werkt ook niet, omdat je wanneer je een thread bekijkt als
een anonieme gebruiker een "anonieme sessie" krijgt. In deze anonieme sessie kun je dingen doen zoals andere gebruikers blokkeren en vlaggen, en je moet laten zien
of de anonieme gebruiker een bepaalde opmerking leuk vond, enzovoorts. Comment threads kunnen ook achter SSO, authenticatie of gebruikersgroepen zijn vergrendeld. 

Ten slotte geeft de soort "progressieve verbetering" waarbij de dynamische gegevens worden gemapt naar de statische gegevens van de CDN je een slechte ervaring waar inhoud beweegt of verandert na enkele seconden.
We geven de voorkeur aan het vermijden van dat soort dingen.

### Wie Heeft Mijn Gegevens Nu

Je gegevens worden niet langer op Linode opgeslagen. Het is live gerepliceerd tussen Hetzner en OVH met volledige schijf-encryptie, en alle communicatie tussen backendservers
wordt gedaan met TLS. We onderhouden een paar legacy Linode-instanties voor outbound webhook proxies, maar geen gegevens of media blijven opgeslagen op Linode.

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om te optimaliseren, testen, en deze wijziging goed uit te brengen. FastComments zou beter moeten kunnen schalen en een
betere uptime moeten hebben op de lange termijn met deze inspanning. Laat het ons hieronder weten als je problemen ontdekt.

{{/isPost}}

---