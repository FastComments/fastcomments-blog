---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Das FastComments Automatische Routing-Transport-System[/postlink]

{{#unless isPost}}
Einführung in das FastComments Automatische Routing-Transport-System!
{{/unless}}

{{#isPost}}

## Einführung

Das FastComments Automatische Routing-Transport-System (FARTS) ist unsere Transport- und Servicelagere. FARTs helfen bei Stau, indem sie den Verkehr basierend auf dem Standort des Benutzers und möglicherweise in Zukunft auf der Last leiten. Es besteht aus mehreren verschiedenen Systemen, einer geo-bewussten DNS-Schicht, einem DB-Proxy, DB-Replikation, SSL-Zertifikatsverwaltung, Reverse Proxy und CDN, das einen Inaktivspeicher (LRU) verwendet, um Assets am Rand zu cachen. Das System unterstützt sowohl stille als auch laute Failover-Modi. Still ist in der Produktion bevorzugt.

## Aktiv-Aktiv

Die neueste Version von FART enthält eine integrierte Proxy- und Replikationsschicht für unsere Datenbank. Dies ermöglicht FastComments, aktiv-aktiv zu sein mit globaler Schreibverfügbarkeit, was unsere FARTS letztendlich konsistent machen lässt. [Mehr Details hier](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Ein Ansatz, den wir tatsächlich frühzeitig verfolgten, war zu prüfen, ob wir einen Fork von MongoDB erstellen könnten. Einer unserer Ingenieure (Sloperators) konnte dies tatsächlich mit Opus 4.6 erreichen, jedoch entschieden wir, dass das Risiko, dies zu tun, höher war als der Aufbau unseres eigenen isolierten Systems.

Das Letzte, was Sie mit etwas wie FART wollen würden, ist zu wissen, dass es angekommen ist, aber Sie die Quelle nicht zurückverfolgen können. Wir haben Überwachung hinzugefügt und Diagnosen zur Überwachung der aktiv-aktiven Replikation auf granularer Ebene.

## Rust in der Skalierung

Ein Teil der Motivation zur Erstellung von FART war es, einige bestehende Dienste, die in Java geschrieben wurden, zu ersetzen. Nachdem wir eine Weile darüber nachgedacht hatten, entschieden wir uns, diese in einen Rust-Service zu konsolidieren, um den Laufzeitaufwand zu senken. Dies war ein akzeptabler Kompromiss, da wir FART nicht oft bereitstellen. FART wird mit LTO kompiliert, sodass wir es wirklich ausreizten.

Wir hatten viel Zeit damit verbracht, das alte Java-System mit unterschiedlichen GC usw. zu optimieren, und letztendlich entschieden, dass asynchrones Rust + Mimalloc erheblich besser auf derselben Hardware mit viel niedrigeren Speicheranforderungen funktionierte, sodass der Wechsel ein Kinderspiel war.

## Der FART Master

Jede Bereitstellung enthält ihren eigenen FART Master. Der Master ist verantwortlich für die Orchestrierung von Cronjobs, Webhooks usw.

## Kundenwirkung

Das FART-System ist seit etwa einem Jahr in Betrieb. Erst kürzlich haben wir die Migration zur aktiv-aktiven Bereitstellung durchgeführt. Das neue System gibt uns einen erhöhten Einblick in die Latenz im gesamten System sowie eine geringere Wartungsbelastung, sodass wir jetzt mehr Zeit für Funktionen aufwenden können.

FART arbeitet leise im Hintergrund, obwohl seine Präsenz immer spürbar ist. Wir hoffen, dass Sie unsere Systeme für Ihre Anwendungsfälle schneller finden (hauptsächlich Benutzeraktionen, die zu Änderungen in den Daten führen, werden in einigen Regionen schneller sein).

## Bereitstellungen

Die Bereitstellung verwendet dasselbe globale Orchestrierungssystem, das wir für die Bereitstellung der Dienste selbst verwenden. Die FARTS-Dokumentation empfiehlt, dass sloperators niemals einer Bereitstellung vertrauen, sondern immer die Nutzlast vor der Freigabe überprüfen.

Nach der Bereitstellung folgen die FART-Warnungen einer Eskalationsrichtlinie: zuerst der Raum, dann die Etage, dann das Gebäude.

## Fazit

Wie bei allen größeren Versionen freuen wir uns, dass wir die Zeit nutzen konnten, um zu optimieren, zu testen und diese Änderung ordnungsgemäß freizugeben. Wir sind gespannt auf das, was in der Pipeline kommt. FastComments sollte langfristig besser skalieren und eine bessere Betriebszeit mit dieser Arbeit haben. Wie das FART-Runbook sagt: "Wenn Sie etwas riechen, sagen Sie etwas". Lassen Sie es uns unten wissen, wenn Sie Probleme entdecken.

{{/isPost}}

---