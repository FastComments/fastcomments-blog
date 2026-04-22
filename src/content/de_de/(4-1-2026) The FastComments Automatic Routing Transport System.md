---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Das FastComments Automatische Routing Transport System[/postlink]

{{#unless isPost}}
Einführung des FastComments Automatische Routing Transport Systems!
{{/unless}}

{{#isPost}}

## Einführung

Das FastComments Automatische Routing Transport System (FARTS) ist unsere Transport- und Servicemodul. FARTS helfen bei Staus, indem sie den Verkehr basierend auf dem Standort des Nutzers und potenziell in Zukunft auf die Auslastung leiten. Es besteht aus mehreren verschiedenen Systemen, einer geo-bewussten DNS-Ebene, einem DB-Proxy, DB-Replikation, SSL-Zertifikatmanagement, einem Reverse-Proxy und einem CDN, das einen LRU-Cache auf der Festplatte verwendet, um Assets am Edge zu cachen.

## Active-Active

Die neueste Version von FART enthält eine integrierte Proxy- und Replikationsebene für unsere Datenbank. Dies ermöglicht es FastComments, Active-Active mit globaler Schreibverfügbarkeit zu sein, was sicherstellt, dass unsere FARTS schließlich konsistent sind. [Weitere Details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Ein Ansatz, den wir tatsächlich frühzeitig verfolgt haben, war zu sehen, ob wir einen active-active Fork von MongoDB erstellen können. Einer unserer Ingenieure (Sloperators) konnte dies tatsächlich mit Opus 4.6 erreichen, jedoch entschieden wir, dass das Risiko, dies zu tun, höher war als der Aufbau eines eigenen isolierten Systems.

## Rust im großen Maßstab

Ein Teil der Motivation für die Erstellung von FART war, einige bestehende Dienste, die in Java geschrieben wurden, zu ersetzen. Nachdem wir eine Weile darüber nachgedacht hatten, entschieden wir uns, diese in einen Rust-Dienst zu konsolidieren, um den Laufzeitanstieg zu verringern. Dies war ein akzeptabler Kompromiss, da wir FART nicht oft bereitstellen. FART wird mit LTO kompiliert, sodass wir es wirklich austricksen können.

Wir haben viel Zeit damit verbracht, das alte Java-System mit verschiedenen GCs usw. zu optimieren und schließlich einfach entschieden, dass asynchrones Rust + Mimalloc erheblich besser auf derselben Hardware mit viel geringeren Speicheranforderungen funktionierte, sodass der Wechsel offensichtlich war.

Rust stellte sich als wirklich großartig für netzwerkbezogenen Code heraus, der gemeinsame Heaps und Locks verwendet. Es ist jedoch nicht immun gegen Laufzeitprobleme. Es ist vielleicht erwähnenswert, dass von LLMs in Rust geschriebener Code recht anfällig für Deadlocks ist, und ein Weg, dies zu umgehen, besteht darin, Systeme als leicht verständliche Zustandsmaschinen zu gestalten, anstatt nur als Haufen von async/await.

## Der FART Master

Jede Bereitstellung enthält ihren eigenen FART Master. Der Master ist verantwortlich für die Orchestrierung von Cron-Jobs, Webhooks usw.

## Kundenauswirkungen

Das FART-System ist seit etwa einem Jahr in Produktion. Nur kürzlich haben wir die Migration zur Active-Active-Bereitstellung durchgeführt. Es gibt einige Auswirkungen beim Lesen Ihrer eigenen Schreibvorgänge über verschiedene Regionen hinweg, die im verlinkten Blogbeitrag und [in den Dokumenten](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes) behandelt werden.

FART arbeitet leise im Hintergrund, obwohl seine Präsenz immer spürbar ist. Wir hoffen, dass Sie feststellen, dass unsere Systeme für Ihre Anwendungsfälle schneller sind (hauptsächlich Benutzeraktionen, die zu Datenänderungen führen, werden in einigen Regionen schneller sein).

## Bereitstellungen

Die Bereitstellung verwendet dasselbe globale Orchestrierungssystem, das wir auch für die Bereitstellung der Dienste selbst verwenden. Die FART-Dokumentation empfiehlt Sloperators, niemals einem Deployment zu vertrauen, immer die Nutzlast vor der Freigabe zu überprüfen.

Nach der Bereitstellung folgen die FART-Warnungen einer Eskalationspolitik: zuerst der Raum, dann die Etage, dann das Gebäude.

## Fazit

Man sagt, das Internet sei eine Reihe von Rohren, aber es ist tatsächlich eine Reihe von Tönen.

Wie bei allen großen Versionen freuen wir uns, dass wir uns die Zeit nehmen konnten, diese Änderung zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Wir sind gespannt auf das, was kommt. FastComments sollte mit dieser Arbeit besser skalieren und langfristig eine bessere Verfügbarkeit haben. Wie im FART-Runbook steht: "Wenn Sie etwas riechen, sagen Sie etwas". Lassen Sie es uns unten wissen, wenn Sie Probleme entdecken.

{{/isPost}}