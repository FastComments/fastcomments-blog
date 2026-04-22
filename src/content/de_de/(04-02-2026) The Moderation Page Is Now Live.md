---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Die Moderationsseite ist jetzt live[/postlink]

{{#unless isPost}}
Die FastComments-Moderationsseite zeigt jetzt eine live Benachrichtigung an, wenn neue Kommentare eintreffen, die deinen aktuellen Filtern entsprechen.
{{/unless}}

{{#isPost}}

### Was ist neu

Die Moderationsseite war schon immer ein leistungsstarkes Werkzeug zur Verwaltung von Kommentaren. Du konntest nach Status filtern, nach Text suchen, nach Seite oder Benutzer filtern und Massenaktionen durchführen. Aber um neue Kommentare zu sehen, musstest du die Seite aktualisieren.

Nicht mehr! Die Moderationsseite zeigt jetzt an, wenn neue Kommentare eintreffen, die deinen aktuellen Filtern entsprechen. Ein Banner erscheint oben in der Kommentarliste und zeigt dir, wie viele neue Kommentare auf dich warten, und ein Klick darauf lädt sie inline, ohne die gesamte Seite zu aktualisieren.

Die Nachricht "neue Kommentare für deine Filter" sollte in den meisten Fällen nahezu sofort angezeigt werden.

### Filterbewertung

Die Transportebene bewertet alle Moderationsfilter serverseitig. Dazu gehören Statusfilter (muss überprüft werden, muss genehmigt werden, Spam, markiert, gesperrt), Stringfilter (Benutzer-ID, Seiten-URL, Domain) und sogar Textsuche. Zitierten Text wie `"genaue Phrase"` führt zu einem exakten, groß-/kleinschreibungsunempfindlichen Teilstringvergleich, während unquotierte Begriffe eine unscharfe, groß-/kleinschreibungsunempfindliche Übereinstimmung durchführen.

Das bedeutet, wenn du nach Spam-Kommentaren filterst, wirst du nicht über genehmigte Kommentare benachrichtigt. Wenn du nach Kommentaren suchst, die einen bestimmten Satz enthalten, lösen nur übereinstimmende Kommentare das Banner aus.

### Moderationsgruppen

Wenn dein Konto Moderationsgruppen verwendet, um einzuschränken, welche Moderatoren welche Kommentare sehen können, werden diese Einschränkungen vollständig für die Live-Benachrichtigungen durchgesetzt. Die Transportebene ruft den Anwendungsserver zurück, um den Filter zu erstellen, der Gruppeneinschränkungen basierend auf den zugewiesenen Gruppen des Moderators enthält. Dieser Filter wird für die Dauer der WebSocket-Verbindung zwischengespeichert und bei Änderungen der Filter durch den Moderator aktualisiert.

### Verpasste Ereignisse

Wenn die Verbindung eines Moderators vorübergehend unterbrochen wird (Netzwerkprobleme, Laptop im Ruhemodus usw.), holt das System beim Wiederverbinden automatisch auf, sodass du keine Arbeit verpasst.

### Leistung

Wir haben diese Funktion so gestaltet, dass sie minimale Auswirkungen auf die Ladezeit der Moderationsseite hat.

### Multi-Region

Diese Funktion funktioniert nahtlos mit unserer global verteilten Architektur, sodass global verteilte Moderationsteams die gleiche Live-Ansicht erhalten.

### Fazit

Wir hoffen, dass diese Funktion Moderatoren Zeit spart und die Moderationserfahrung reaktionsschneller macht. Wie immer danken wir unseren Kunden für ihr Feedback und ihre Unterstützung.

Prost!

{{/isPost}}