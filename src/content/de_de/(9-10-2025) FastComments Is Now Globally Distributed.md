---
[category:Ankündigungen]
[category:Leistung]
[category:API & Entwicklung]
###### [postdate]
# [postlink]FastComments ist jetzt global verteilt[/postlink]

{{#unless isPost}}
FastComments hat zu einer neuen Architektur für eine bessere globale Leistung gewechselt.
{{/unless}}

{{#isPost}}

### Was ist neu

Früher hatte FastComments eine sehr traditionelle Architektur für eine Webanwendung. Wir hatten unsere Anwendungsserver, Datenbanken und einige andere Dienste. Dies war in zwei Regionen (us-west und eu) dupliziert. Wenn Sie in Frankreich waren und einen Kommentar-Thread für einen Kunden, der in unserem globalen Rechenzentrum gehostet wurde, anzeigen wollten, mussten Ihre Anfragen bis nach us-west für die Kommentardaten gehen.

Nicht mehr! Jetzt werden Kommentardaten und alle Mediendateien global für Kunden in unserer globalen Bereitstellung repliziert, und für Kunden in unserer EU-Bereitstellung haben wir drei Standorte in der EU, an denen Daten repliziert werden. Ihre Anfragen gehen zum nächsten Knoten in der EU.

### Wie es früher funktionierte

Außer für Datenbanken, die mehrere aktive Replikate über Regionen und Cloud-Anbieter hinweg hatten, waren alle Dienste auf eine Instanz pro Diensttyp verteilt. Das bedeutete, dass wir für jede Region einen Anwendungsserver, einen PubSub-Server und einen Medienserver hatten. Der Plan war, vertikal zu skalieren, solange wir konnten, da dies die Dinge einfach hielt. Code zu schreiben war einfach – man wusste immer, dass man "seine eigenen Schreibvorgänge lesen" konnte, wenn man die Datenbank ansprach. Infra war einfach, mit der Ausnahme von Sicherheitsupdates, die eine Minute Ausfallzeit in Anspruch nahmen.

### Das Problem

Das Problem begann offensichtlich, als wir die Kapazität erreichten. Also optimierten wir und mussten schließlich die Instanzgröße für diesen Dienst erhöhen.

Das begann, auf Linode kostenintensiv zu werden, wo eine $144-Instanz basierend auf unseren Passmark-Tests ungefähr dem Preis eines $20 OVH-Knotens entsprach, und selbst wenn wir den Hosting-Anbieter wechseln würden, hätten wir überall Einzelpunkte des Ausfalls - und Anbieter wie OVH neigen dazu, längere Lösungszeiten als Linode bei Wartungsproblemen zu haben.

### RiR :)

In den ersten Jahren wurden die PubSub- und Mediendienste bei FastComments in Java geschrieben. Java wurde gewählt, weil es für den Aufwand relativ leistungsstark war, und nach Jahren des Tuning des GC, dem Ausprobieren von G1GC, Shenandoah und Z1, haben wir uns entschieden, kein Java mehr zu verwenden. Der Speicherbedarf war einfach zu hoch, und da diese Dienste einmal vollständig fertiggestellt sehr stabil waren, ließen die Vorteile von Java nach. Außerdem hatten diese Dienste oft mit dem Problem des "Thunderous Herds" zu kämpfen, was bedeutete, dass die JVM versuchte, Spitzenlasten zu bewältigen, bevor der JIT überhaupt aktiv wurde. Diese Dienste waren ideale Kandidaten für einen Wechsel zu C++ oder Rust.

Rust wurde gewählt, da wir keine C++-Experten sind und ein Fehler im Netzcode die Daten eines Kunden einem anderen Kunden aussetzen könnte. Rust hilft uns, solche Probleme zu vermeiden.

Wir wollten diese Dienste sowieso konsolidieren, also während wir vielleicht *eine andere* Optimierung mit GraalVM hätten durchführen können, entschieden wir uns, zu Rust zu wechseln und damit fertig zu werden.

Die Migration war nicht ohne Probleme. Diese Dienste müssen SSL beenden, HTTP 1.1, HTTP/2 und so weiter unterstützen. Sie verwalten gleichzeitig viele Datenströme, lesen Medien aus einem Edge-on-Disk-LRU-Cache, S3, Datenbanken und kommunizieren in einem Mesh. Das Java-Ökosystem, Vertx und Netty, waren dafür sehr gut. Wir bringen das Bibliotheksecosystem an seine Grenzen, und da wir nicht viel Erfahrung mit den Rust-Bibliotheken haben, gab es einige Versuche und Irrtümer. Das führte zu einigen Ausfallzeiten, und wir entschuldigen uns dafür.

Wir haben auch mit verschiedenen Speichermanagern experimentiert und uns für mimalloc für unsere benutzerdefinierten DNS-Server und libc für die Transportschicht entschieden. Wir betreiben kein Nginx oder Apache, sondern verwenden unsere eigene Kombination aus einem benutzerdefinierten DNS-Server, der Kunden global basierend auf einem wöchentlich neu aufgebauten In-Memory-Index von Maxmind leitet, und unserer Transportschicht in Rust, die ein Mesh mit den anderen Transportinstanzen aufrechterhält. Der Transport beendet SSL, bearbeitet die PubSub-Arbeiten und ist unser CDN. Der Vorteil davon ist weniger Overhead beim Bewegen von Dingen zwischen den Diensten und weniger Infrastrukturüberkopf/Abstraktion. Der Nachteil ist die Sichtbarkeit, daher sind gute Metriken wichtig.

In Bezug auf die resultierende Leistung verbrauchten die Rust-Dienste etwa 10-30% des Speichers der Java-Dienste, trotz all unserer Arbeit. Ich lese Bücher wie "Java Concurrency in Practice" zum Spaß, also obwohl ich kein Experte bin, weiß ich bei der Erstellung schneller JVM-Dienste ein oder zwei Dinge, und es war viel einfacher, dies mit Rust zu erreichen. Darüber hinaus würden Spitzen von Nachrichten an eine große Anzahl von Abonnenten kaum CPU-Nutzung registrieren, während die JVM-Dienste 40% ihrer Zeit mit GC verbringen würden, obwohl wir unseren Code mehr wie einen Spiele-Engine und weniger wie einen typischen Server schreiben. Ich kann nicht sagen, dass ich ein großer Fan von Rust bin, aber für Dienste, die viel Arbeit leisten und sich nach der ursprünglichen Entwicklung nicht viel ändern, ist es perfekt. Unsere Hauptgeschäftslogik bleibt in TypeScript.

### Die neue Architektur

Die neue Architektur hat keine "Haustiere"-Knoten mehr. Stattdessen ist jeder Server ein vollständiger Klon mit allen gleichen Diensten und nahezu identischer Konfiguration. Sie führen alle den Transport, DNS, den Anwendungsserver und eine Kopie der Datenbank aus. Alle Knoten verwenden die vollständige Festplattenverschlüsselung mit automatischer Entsperrung durch Dropbear.

Jeder Server führt den Routing-Transport aus, der Anforderungen terminiert und sie entweder als Websocket, HTTP-Stream oder CDN-Anfrage behandelt. Diese Server verbinden sich miteinander, und jedes gibt eine Zuordnung des globalen Netzwerks zu seinem lokalen DNS-Server an, um dem DNS in Echtzeit zu sagen, wo jeder aktive Knoten global ist.

Ein Vorteil der neuen Architektur ist Redundanz. Wenn ein Kunde in einer Region uns sehr stark belastet, bleiben die anderen Regionen online.

Der Anwendungscode muss jetzt sehr darauf achten, welche Abfragen den nächsten Knoten erreichen können oder welche zur primären Datenbank gehen müssen, die weit entfernt sein könnte. Ein Fehler kann die Leistung drastisch beeinträchtigen. Das bedeutet auch, dass Schreibvorgänge aus einigen Regionen langsam sein können, was sorgfältiges Tuning und Optimierung erfordert. Wir folgen jetzt intern einem Muster im Code, bei dem alle Methoden, die die Datenbank ansprechen, ein readPreference-Argument erhalten, damit die Aufrufer bis nach oben explizit entscheiden müssen, wie sie abfragen.

Der Vorteil ist eine sehr gute horizontale Skalierung für Lesevorgänge. FastComments ist sehr leselastig, aber wir dürfen unsere Moderatoren nicht vergessen! Moderatoren arbeiten Tag für Tag auf der ganzen Welt, und wir wollen, dass ihre Erfahrung gut bleibt. Im Rahmen dieses Rollouts haben wir mit einigen von ihnen zusammengearbeitet, um sicherzustellen, dass die Moderationswerkzeuge schnell bleiben.

Wir können auch Hardware gezielt auswählen, was Spaß macht und sich auszahlt. Die neuen Server sind eine Mischung aus i5-13500 und Ryzen 5 5600X und in der EU sind einige ältere Xeons im Einsatz. In unseren Benchmarks waren all diese viel schneller als die teureren Server, die wir bei anderen Anbietern erkundet haben. Der Nachteil ist mehr Einrichtungsarbeit, aber wir haben dies automatisiert, zusammen mit SMART-Disküberwachung für Ausfälle und so weiter.

Solche Dinge zu tun bedeutet, dass wir weiterhin wettbewerbsfähige Preise anbieten können.

### Der Rollout

Der Rollout in den letzten Monaten, während wir die Dienste neu schreiben und zu neuen Hosting-Anbietern wechseln, war holprig. Wir danken Ihnen für Ihre Geduld.

Beim ursprünglichen Rollout zeigten unsere Metriken einen Anstieg der Anfragen, die mehr als 100 ms benötigten. Wir versuchen, nicht zu viele Anfragen zu haben, die so lange für irgendetwas benötigen.

<div class="text-center">
    <div class="sm">Allmählicher Fortschritt</div>
    <img src="images/slow-reqs.png" alt="Langsame Anfragen" title="Langsame Anfragen" />
</div>

Wir machen immer noch allmähliche Fortschritte bei der Verbesserung der Leistung für einige Regionen. Vielen Dank an alle, die bis jetzt Feedback gegeben haben.

### Überlegungen bei der Verwendung der API

Die API bleibt stark konsistent - Sie können Ihre eigenen Schreibvorgänge lesen - um die Abwärtskompatibilität zu wahren und es Entwicklern einfach zu machen. Um Entwicklern zu ermöglichen, Leistung über Konsistenz zu wählen, planen wir, den Parameter readPreference offenzulegen. Der Vorteil ist, dass wir möglicherweise auch einen Rabatt auf Guthaben für diese API-Aufrufe anbieten können.

Alle öffentlichen Endpunkte, wie z.B. zum Bereitstellen des öffentlichen Kommentar-Widgets, lesen immer von der nächstgelegenen (lokalen) Datenbank auf diesem Knoten.

### Warum nicht einfach ein reguläres CDN verwenden

Die Kommentar-Threads sind nicht statisch, sie sind live, und das Anwenden eines Live-Streams über die veralteten statischen Daten funktioniert ebenfalls nicht, denn wenn Sie einen Thread als anonymer Benutzer ansehen, erhalten Sie eine "anonyme Sitzung". In dieser anonymen Sitzung können Sie Dinge tun, wie andere Benutzer blockieren und kennzeichnen, und Sie müssen zeigen, ob der anonyme Benutzer einen bestimmten Kommentar gefallen hat, und so weiter. Kommentar-Threads können auch hinter SSO, Authentifizierung oder Benutzergruppen gesperrt sein.

Schließlich bringt die Art der "progressiven Verbesserung", bei der die dynamischen Daten den statischen Daten vom CDN zugeordnet werden, eine schlechte Erfahrung mit sich, bei der der Inhalt herum springt oder sich nach einigen Sekunden ändert. Wir würden das lieber nicht tun.

### Wer hat jetzt meine Daten

Ihre Daten werden nicht mehr bei Linode gespeichert. Sie werden live zwischen Hetzner und OVH mit vollständiger Festplattenverschlüsselung repliziert, und die gesamte Kommunikation zwischen den Backend-Servern erfolgt über TLS. Wir betreiben ein paar legacy Linode-Instanzen für ausgehende Webhook-Proxy, aber keine Daten oder Medien verbleiben bei Linode.

### Fazit

Wie bei allen wichtigen Releases freuen wir uns, dass wir uns die Zeit nehmen konnten, dies zu optimieren, zu testen und diesen Wechsel ordnungsgemäß durchzuführen. FastComments sollte mit dieser Arbeit besser skalieren und eine bessere Betriebszeit auf lange Sicht haben. Lassen Sie uns unten wissen, wenn Sie Probleme entdecken.

{{/isPost}}

---