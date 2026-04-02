---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Das FastComments Automatische Routing-Transport-System[/postlink]

{{#unless isPost}}
Einführung des FastComments Automatischen Routing-Transport-Systems!
{{/unless}}

{{#isPost}}

## Einführung

Das FastComments Automatische Routing-Transport-System (FARTS) ist unsere Transport- und Dienstleistungsschicht. FARTS hilft bei der Stauvermeidung, indem der Verkehr basierend auf dem Standort des Nutzers und potenziell zukünftiger Lasten geroutet wird. Es besteht aus mehreren verschiedenen Systemen, einer geo-bewussten DNS-Schicht, einem DB-Proxy, DB-Replikation, SSL-Zertifikatverwaltung, Reverse Proxy und CDN, das einen auf der Festplatte befindlichen LRU-Cache verwendet, um Ressourcen am Edge zu cachen.

## Aktiv-Aktiv

Die neueste Version von FART enthält eine integrierte Proxy- und Replikationsschicht für unsere Datenbank. Dies ermöglicht es FastComments, Aktiv-Aktiv mit globaler Schreibverfügbarkeit zu sein, was sicherstellt, dass unsere FARTS letztendlich konsistent sind. [Mehr Details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Ein Ansatz, den wir tatsächlich frühzeitig verfolgten, war zu prüfen, ob wir einen aktiv-aktuellen Fork von MongoDB erstellen könnten. Einer unserer Ingenieure (Sloperators) konnte dies tatsächlich mit Opus 4.6 erreichen, jedoch entschieden wir, dass das Risiko, dies zu tun, höher war als der Aufbau unseres eigenen isolierten Systems.

## Rust im Maßstab

Ein Teil der Motivation für die Schaffung von FART war es, einige bestehende Dienste, die in Java geschrieben wurden, zu ersetzen. Nachdem wir eine Weile darüber nachgedacht hatten, beschlossen wir, diese in einen Rust-Dienst zu konsolidieren, um den Laufzeitaufwand zu reduzieren. Dies war ein akzeptabler Kompromiss, da wir FART nicht oft bereitstellen. FART wird mit LTO kompiliert, sodass wir es wirklich loslassen können.

Wir hatten viel Zeit damit verbracht, das alte Java-System mit verschiedenen GCs usw. zu optimieren, und entschieden schließlich, dass asynchrones Rust + Mimalloc auf derselben Hardware erheblich besser abschnitt und dabei viel geringere Speicheranforderungen hatte, weshalb der Wechsel eine gute Entscheidung war.

Rust stellte sich als wirklich großartig für netzwerkbezogene Codes heraus, die freigegebene Heaps und Locks verwenden. Es ist jedoch nicht unempfindlich gegenüber Laufzeitproblemen. Es ist vielleicht erwähnenswert, dass von LLMs in Rust geschriebener Code ziemlich anfällig für Deadlocks ist, und ein Weg darum herum besteht darin, Systeme als leicht verständliche zustandsmaschinen zu entwerfen, anstatt nur als Stapel von async/await.

## Der FART Master

Jede Bereitstellung enthält ihren eigenen FART Master. Der Master ist verantwortlich für die Orchestrierung von Cron-Jobs, Webhooks usw.

## Kundenauswirkungen

Das FART-System ist nun seit etwa einem Jahr in Produktion. Erst kürzlich haben wir die Migration zur Aktiv-Aktiv-Bereitstellung durchgeführt. Es gibt einige Auswirkungen auf das Lesen Ihrer eigenen Schreibvorgänge über Regionen hinweg, die im oben verlinkten Blogbeitrag und [in den Dokumenten](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes) behandelt werden.

FART arbeitet leise im Hintergrund, obwohl seine Präsenz immer spürbar ist. Wir hoffen, dass Sie feststellen, dass unsere Systeme für Ihre Anwendungsfälle schneller sind (in den meisten Fällen werden Benutzeraktionen, die zu Datenänderungen führen, in einigen Regionen schneller erfolgen).

## Bereitstellungen

Die Bereitstellung verwendet dasselbe globale Orchestrierungssystem, das wir zum Bereitstellen der Dienste selbst verwenden. Die FART-Dokumentation empfiehlt, dass Sloperators niemals einer Bereitstellung vertrauen, sondern immer das Payload verifizieren, bevor sie freigegeben wird.

Nach der Bereitstellung folgen FART-Alerts einer Eskalationspolitik: zuerst der Raum, dann die Etage, dann das Gebäude.

## Fazit

Man sagt, das Internet sei eine Reihe von Rohren, aber es ist tatsächlich eine Reihe von Winden. 

Wie bei allen größeren Freigaben sind wir froh, dass wir uns die Zeit nehmen konnten, diese Änderung zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Wir sind auf das, was noch kommt, gespannt. FastComments sollte mit dieser Arbeit besser skalieren und langfristig eine bessere Verfügbarkeit haben. Wie das FART-Runbook sagt: "Wenn Sie etwas riechen, sagen Sie etwas". Lassen Sie es uns unten wissen, wenn Sie irgendwelche Probleme entdecken.

{{/isPost}}