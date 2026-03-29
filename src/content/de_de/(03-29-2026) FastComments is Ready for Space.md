---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments ist bereit für den Weltraum![/postlink]

{{#unless isPost}}
Wir haben unsere aktive-aktive Datenbankmigration abgeschlossen, die echte Multi-Region-Redundanz für FastComments bringt.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

### Was gibt es Neues

Jeder FastComments [point-of-presence](https://sophon.fastcomments.com/) nimmt jetzt lokale Schreibvorgänge vor und repliziert diese asynchron
zu allen anderen Knoten. Dies wird eine höhere Haltbarkeit im Vergleich zum vorherigen System bieten und macht die Moderationstools für
Nutzer in einigen Regionen schneller, allerdings mit gewissen Kompromissen.

"Bereit für den Weltraum" ist etwas optimistisch, aber die Idee ist, dass wir FastComments auf verschiedene Planeten bereitstellen könnten und letztendlich das System synchron wäre. Nutzer auf Pluto müssten jedoch etwa einen Tag warten, um Änderungen auf ihrer kommenden Rechnungsseite zu sehen, da derzeit nur ein
Master pro Region die Abrechnungsinformationen aggregieren kann.

### Etwas Geschichte, warum die Änderung

Als FastComments ursprünglich gestartet wurde, hatten wir eine sehr typische Architektur. Wir hatten eine Proxy-Schicht, eine App-Schicht, eine Datenbank, einige Repliken und später Repliken über Regionen und Cloud-Anbieter für zusätzliche Redundanz.

Schließlich haben wir die DB-Repliken in alle Zonen verschoben, in denen sich die meisten unserer Nutzer befinden, und haben die App dort ebenfalls bereitgestellt sowie unser eigenes DNS- und Proxysystem (in einem späteren Blogbeitrag beschrieben) erstellt, um Anfragen an den nächstgelegenen Anwendungs-Knoten weiterzuleiten. Dies macht das Lesen schnell, aber das Schreiben langsamer, da man jetzt anstatt auf eine HTTP-Rundreise zum Backend zu warten, auf eine HTTP-Rundreise zu einem nahegelegenen Knoten wartet, und dieser Knoten könnte mehrere Datenbankeinträge zurück zum Primärknoten machen. Nicht gut!

Um dem entgegenzuwirken, haben wir viele Bereiche der Anwendung umstrukturiert, um ein `readPreference` in Funktionsargumenten zu akzeptieren, sodass Anrufer entscheiden können, wie
veraltet sie mit ihren Lesevorgängen sein können, und darüber hinaus haben wir mehr Schreibvorgänge (wie das Schreiben von Moderator-Statistiken bei Moderatoraktionen) als Fire-and-Forget gestaltet. Nicht ideal, aber es hat die Dinge erheblich beschleunigt.

Ein Problem, auf das wir bei der globalen Nutzung von Mongo gestoßen sind, sind Netzwerktrennungen. Wenn genug Knoten getrennt werden, gehen die Lesevorgänge verloren, da jeder Knoten unsicher wird, ob es akzeptabel ist, Lesevorgänge zu bedienen. Es gibt einige Möglichkeiten, dies zu umgehen, aber die Randfälle werden kompliziert. Das ist kein theoretisches Problem - es ist oft genug passiert, dass wir um 3 Uhr morgens Benachrichtigungen erhalten haben, dass wir es satt hatten, sogar zu versuchen, Mongo so zu tunen, dass es mit der Unsicherheit der Replikatswahl bis zu einer Minute klar kommt. Leider waren die Netzwerke von São Paulo nach Falkenstein, zum Beispiel, einfach nicht sehr gut bei einigen unserer Hosting-Anbieter. Das Abstimmen der Staukontrolle und Ähnliches hat geholfen, aber das Problem nicht gelöst.

Die heilige Gral-Lösung, vorausgesetzt, man ist mit bestimmten Kompromissen einverstanden, ist die Fähigkeit, die Schreibvorgänge lokal an diesem Knoten zu akzeptieren (der über eine ordentliche Hardware, RAID usw. verfügt, die wahrscheinlich nicht ausfällt) und dem Nutzer mitzuteilen, dass seine Daten gespeichert sind. Man kann an diesem point-of-presence auch einen zweiten Knoten als heiße Replik für die Haltbarkeit haben.

So sind wir letztendlich angekommen. Oregon, Virginia, Falkenstein, São Paulo, Singapur, sind alle eigene Replikatsätze und akzeptieren Schreibvorgänge. Der EU-Einsatz (obwohl nur drei PoPs) verhält sich gleich.

### Wie es funktioniert

Einige davon wurden im vorherigen Abschnitt behandelt, aber die Kurzfassung ist, dass es sich um CRDT-lite handelt. Wir haben einen Proxy (in Rust, weil natürlich) erstellt, der zwischen der Anwendung und Mongo sitzt und es multi-master-fähig macht. Der Proxy ist peer-aware, verwaltet Prüfstände, Replikation, Überwachung und die initiale Synchronisation. Es ist ein multi-master Ersatz für das Replikationssystem von Mongo, einschließlich einiger DDL-Befehle.

**Der Unterschied zu anderen Tools** ist, dass dies **nicht das oplog überwacht**. Das Überwachen des oplog oder die Verwendung von Änderungsströmen würde nicht funktionieren, da sie nur den endgültigen Zustand des Objekts nach dem Schreiben zeigen, was es unmöglich macht, Konflikte zu behandeln. Man muss
jeden `$set`, `$inc`-Befehl erfassen und diesen Vorgang selbst replizieren.

Dies ist eine domänenspezifische Lösung. Sie würde nicht für alle Produkte funktionieren. Man könnte sagen, es ist domänengetriebene Gestaltung :). Es funktioniert für uns, weil wir von Anfang an sehr sorgfältig nur die Felder `$set` haben, die wir in Dokumenten ändern - wir verwenden zum Beispiel niemals Mongo's `replaceOne`. Gleiches gilt für Zähler. Man **macht niemals** `SET VOTES = 5`. Stattdessen würde man `INCREMENT VOTES BY 5` schreiben, da dies eventual consistency ermöglicht. Verteilte Sperren werden durch **die vollständige Vermeidung solcher Sperren** gehandhabt. Nur ein Knoten pro Cluster hat ein Flag gesetzt, um Crons auszuführen. Auch wenn dies begrenzt erscheinen mag, können wir Server mit Terabytes RAM erwerben, so dass wir diesen Kompromiss eingehen können, um Risiko und Komplexität zu minimieren.

### Lesen Ihrer eigenen Schreibvorgänge

Für Entwickler, die die API nutzen, sollten Sie in der Lage sein, Ihre eigenen Schreibvorgänge genau wie zuvor zu lesen (machen Sie einen API-Aufruf, um einen Kommentar zu erstellen, und listen Sie dann die Kommentare auf und sehen Sie den neuen Eintrag in dieser Liste). **Die Einschränkung** ist, dass Sie dies nicht über Regionen hinweg tun können. Wenn Ihr Backend nur in einer Region ausgeführt wird, wie us-west, sollten Sie in der Lage sein, Ihre eigenen Schreibvorgänge zu lesen, es sei denn, während Ihres Schreibvorgangs und Ihrem Lesevorgang fällt dieser Knoten aus **und** Ihr DNS-Cache aktualisiert sich, um auf den nächstgelegenen Knoten zu verweisen. Vorausgesetzt, das passiert nicht, ist das Lesen Ihrer eigenen Schreibvorgänge zuverlässig.

### Tests und die Migration

Etwa die Hälfte des Codes im System ist das Testgerüst, das Framework und die Tests. Trotzdem war die Veröffentlichung etwas holprig und dauerte länger (1 Stunde für die EU und 20 Minuten für us-global) als gewünscht, aber wir sind froh, dass wir diesen Meilenstein erreicht haben und danken Ihnen für Ihre Geduld!

### Zusammenfassung & Was das für Sie bedeutet

FastComments sollte jetzt schneller und haltbarer sein als je zuvor, und jetzt können wir wieder an Funktionen arbeiten :)

Prost!

{{/isPost}}

---