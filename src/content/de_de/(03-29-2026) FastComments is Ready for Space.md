---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments ist bereit für den Weltraum![/postlink]

{{#unless isPost}}
Wir haben unsere aktive-aktive Datenbankmigration abgeschlossen und bringen wahre Multi-Region-Redundanz zu FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technischen Jargon

### Was gibt's Neues

Jeder FastComments [point-of-presence](https://sophon.fastcomments.com/) nimmt jetzt lokale Schreibvorgänge entgegen und repliziert sie asynchron
auf alle anderen Knoten. Dies bietet eine erhöhte Haltbarkeit im Vergleich zum vorherigen System und macht die Moderationswerkzeuge
für Benutzer in einigen Regionen schneller, wenn auch mit einigen Kompromissen.

"Bereit für den Weltraum" ist etwas optimistisch, aber die Idee ist, dass wir FastComments auf verschiedene Planeten bereitstellen könnten
und schließlich das System synchronisiert wird. Benutzer auf Pluto müssten jedoch etwa einen Tag warten, um Änderungen auf ihrer nächsten
Rechnung zu sehen, da derzeit nur ein Master pro Region die Abrechnungsinformationen aggregieren kann.

### Ein wenig Geschichte, warum die Änderung

Als FastComments ursprünglich gestartet wurde, hatten wir eine sehr typische Architektur. Wir hatten eine Proxy-Schicht, eine App-Schicht, eine Datenbank, einige Replikate, und später Replikate über Regionen und Cloud-Anbieter für zusätzliche Redundanz.

Schließlich haben wir die DB-Replikate in alle Zonen bewegt, in denen sich die meisten unserer Benutzer befinden, und auch die App dort bereitgestellt sowie unser eigenes DNS- und Proxy-System (in einem späteren Blogbeitrag beschrieben) eingerichtet, um Anfragen an den nächstgelegenen Anwendungs-Knoten weiterzuleiten. Dies macht das Lesen schnell, aber das Schreiben langsamer, da man nun statt auf eine HTTP-Round-Trip zum Backend auf eine HTTP-Round-Trip zu einem nahen Knoten wartet, und dieser Knoten könnte mehrere Datenbank-Schreibvorgänge zurück zum Primärknoten durchführen. Nicht gut!

Um dies zu bekämpfen, haben wir viele Bereiche der Anwendung umstrukturiert, um ein `readPreference` in den Funktionsargumenten zu übernehmen, sodass Aufrufer entscheiden können, wie veraltet sie mit ihren Lesevorgängen einverstanden sind. Darüber hinaus haben wir mehr Schreibvorgänge (wie das Schreiben von Moderator-Statistiken bei Moderatorenaktionen) im Fire-and-Forget-Stil implementiert. Nicht ideal, aber es hat die Dinge erheblich beschleunigt.

Ein Problem, mit dem wir konfrontiert waren, als wir Mongo global betrieben, sind Netzwerkunterbrechungen. Wenn genügend Knoten getrennt werden, hören die Lesevorgänge auf, da jeder Knoten unsicher wird, ob es akzeptabel ist, Lesevorgänge durchzuführen. Es gibt einige Umgehungsmöglichkeiten, aber die Randfälle werden chaotisch. Dies ist kein theoretisches Problem – es ist häufig genug aufgetreten und hat zu nächtlichen Alarmen geführt, sodass wir es leid waren, selbst nachdem wir versucht hatten, Mongo so zu tunen, dass es mit der Unsicherheit der Replikationssatzwahl bis zu einer Minute auseinander umgehen kann. Leider war die Netzwerkverbindung von São Paulo nach Falkenstein beispielsweise einfach nicht sehr gut bei einigen unserer Hosting-Anbieter. Das Anpassen der Staukontrolle und ähnliches half, aber löste das Problem nicht.

Die heilige Graal-Lösung, vorausgesetzt, Sie sind mit bestimmten Kompromissen einverstanden, ist die Fähigkeit, die Schreibvorgänge lokal an diesem Knoten (der über anständige Hardware, RAID usw. verfügt und dessen Ausfall unwahrscheinlich ist) zu akzeptieren und dem Benutzer mitzuteilen, dass seine Daten gespeichert sind. An diesem Point-of-Presence können Sie auch einen zweiten Knoten als heiße Kopie für die Haltbarkeit haben.

So sind wir schließlich gelandet. Oregon, Virginia, Falkenstein, São Paulo, Singapur sind alle ihre eigenen Replikatsätze und nehmen Schreibvorgänge entgegen. Die EU-Bereitstellung (obwohl sie nur drei PoPs hat) hat dasselbe Verhalten.

### So funktioniert es

Einige Punkte sind im vorherigen Abschnitt behandelt, aber die Zusammenfassung ist: Es ist CRDT-lite. Wir haben einen Proxy (in Rust, weil natürlich) erstellt, der zwischen der Anwendung und Mongo sitzt und es multi-masterfähig macht. Der Proxy ist peer-aware, verwaltet Checkpoints, Replikation, Überwachung und die anfängliche Synchronisierung. Es ist ein Multi-Master-Ersatz für Mongs Replikationssystem, einschließlich einiger DDL-Befehle.

**Der Unterschied zu anderen Tools** ist, dass **dies nicht das oplog überwacht**. Das Überwachen des oplogs oder die Verwendung von Änderungsströmen würde nicht funktionieren, da sie nur den endgültigen Zustand des Objekts nach dem Schreiben anzeigen und es unmöglich machen, Konflikte zu behandeln. Sie müssen jede `$set`- und `$inc`-Operation erfassen und diese Operation selbst replizieren.

Dies ist eine domänenspezifische Lösung. Es würde nicht für alle Produkte funktionieren. Man könnte sagen, es ist domänengetriebenes Design :). Es funktioniert für uns, weil wir von Anfang an sehr sorgfältig nur die Felder `$set` geändert haben, die wir in Dokumenten ändern – wir verwenden beispielsweise niemals Mongs `replaceOne`. Dasselbe gilt für Zähler. Sie **machen niemals** `SET VOTES = 5`. Stattdessen würden Sie `INCREMENT VOTES BY 5` schreiben, da dies eine endgültige Konsistenz ermöglicht. Verteilte Sperren werden von **don't** behandelt. Nur ein Knoten pro Cluster hat ein Flag gesetzt, um Cron-Jobs auszuführen. Auch wenn dies begrenzt erscheint, können wir Server mit Terabytes von RAM kaufen, sodass wir diesen Kompromiss eingehen können, um Risiko und Komplexität zu minimieren.

### Ihre eigenen Schreibvorgänge lesen

Für Entwickler, die die API verwenden, sollten Sie in der Lage sein, Ihre eigenen Schreibvorgänge genauso zu lesen wie zuvor (ein API-Aufruf, um einen Kommentar zu erstellen, gefolgt von einer Liste von Kommentaren, um den neuen Eintrag in dieser Liste zu sehen). **Die Einschränkung** ist, dass Sie dies nicht über Regionen hinweg tun können. Wenn Ihr Backend nur in einer Region läuft, zum Beispiel us-west, dann sollten Sie Ihre eigenen Schreibvorgänge lesen können, es sei denn, zwischen Ihrem Schreibvorgang und Ihrem Lesevorgang geht dieser Knoten **und** Ihr DNS-Cache aktualisiert sich, um auf den nächstgelegenen Knoten zu zeigen. Vorausgesetzt, das geschieht nicht, ist das Lesen Ihrer eigenen Schreibvorgänge zuverlässig.

[Sie können auch festlegen, welchen Point-of-Presence Sie ansprechen. Weitere Informationen dazu hier.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Tests & Die Migration

Etwa die Hälfte des Codes im System besteht aus dem Testgerüst, dem Framework und den Tests. Dennoch war die Veröffentlichung etwas holprig und die Ausfallzeit (1 Stunde für die EU und 20 Minuten für uns-global) war länger als gewünscht. Aber wir sind froh, dass wir diesen Meilenstein erreicht haben und danken Ihnen für Ihre Geduld!

### Zusammenfassung & Was das für Sie bedeutet

FastComments sollte jetzt schneller und haltbarer sein als je zuvor, und jetzt können wir wieder an Funktionen arbeiten :)

Prost!

{{/isPost}}

---