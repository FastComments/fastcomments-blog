---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Alle FastComments-Widgets sind jetzt live[/postlink]

{{#unless isPost}}
Jedes eingebettete FastComments-Widget (Kommentaranzahlen, letzte Kommentare, Top-Seiten, aktuelle Diskussionen, Zusammenfassung der Bewertungen, schwebende Likes) aktualisiert sich jetzt in Echtzeit.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Das Hauptkommentar-Widget ist von Anfang an live. Die kleineren eingebetteten Widgets waren es jedoch nicht. Kommentaranzahlen, Widgets für "letzte Kommentare" oder "Top-Seiten" usw. zeigten fröhlich eine Zahl an, die bis zu einer Minute alt war.

Jetzt abonnieren alle Widgets, die FastComments ausliefert, Echtzeit-Updates und aktualisieren sofort :) Das gilt auch für die Zusammenfassungen von Bewertungen!

### Welche Widgets

Alle. Konkret:

- `FastCommentsCommentCount` - die Kommentaranzahl pro Seite
- `FastCommentsCommentCountBulk` - die Bulk-Version, die viele Zähler auf einer Listen-/Archivseite aktualisiert
- `FastCommentsRecentComments` und `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` und `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (das schwebende Kommentaranzahl-Badge)
- `FastCommentsEmbedPageLikesFloating` (die schwebenden Likes + Kommentaranzahl)

### Was Sie tun müssen

Nichts. Wenn Sie bereits eines dieser Widgets eingebettet haben, aktualisieren Sie die Seite einmal. Das nächste Mal, wenn ein Kommentar gepostet, bearbeitet, gelöscht wird oder jemand auf eine Seite reagiert, wird das Widget aktualisiert.

Die alte `isLive: true` Konfigurationsflagge für die Kommentaranzahl-Widgets ist jetzt überflüssig - Widgets sind immer live.

Wenn Sie das Widget-JS von unserem CDN laden, haben Sie die neue Version, auch wenn Sie eine unserer Wrapper-Bibliotheken (React, Vue usw.) verwenden.

### Likes sind ebenfalls live

Das schwebende Likes-Widget reagiert jetzt auch auf Likes- und Reaktionsereignisse. Klicken Sie auf das Herz auf einer Seite und andere geöffnete Tabs sehen die Anzahl der Likes ändern.

### Wie es funktioniert

Jedes Widget öffnet eine einzige WebSocket-Verbindung. Widgets, die Daten für eine spezifische Seite anzeigen (`comment-count` (einschließlich Bulk), `reviews-summary`, `embed-page-likes-floating`), abonnieren den Ereignisstream dieser Seite. Widgets, die Daten über einen Mandanten hinweg anzeigen (`recent-comments`, `top-pages`, `recent-discussions`), abonnieren einen schlanken Pulsstream pro Mandant, der ein Signal sendet, sobald sich etwas in diesem Mandanten ändert.

Das Ergebnis ist, dass ein inaktives Widget praktisch nichts kostet und ein aktives Widget innerhalb von ein oder zwei Sekunden nach der grundlegenden Änderung eine frische Zahl anzeigt.

### Cache-Kohärenz

Die serverseitigen Caches, die diese Widgets unterstützen, liefen früher auf einer 60-Sekunden-TTL ab. Sie ungültig werden nun in dem Moment, in dem ein relevantes Kommentar- oder Reaktionsereignis eintritt, sodass die erste Anfrage nach einer Änderung frische Daten zurückgibt, nicht die zwischengespeicherte Version.

### Fazit

Wir sind froh, dass wir die Zeit investieren konnten, um diese Änderung zu testen und zu optimieren, damit unsere Kunden sie zu den gewohnten Preisen genießen können. Wir denken, dass die live Zusammenfassungen von Bewertungen ein besonders cooles Unterscheidungsmerkmal für uns sind.

Lassen Sie uns unten wissen, wenn Sie etwas Auffälliges entdecken.

Prost!

{{/isPost}}

---