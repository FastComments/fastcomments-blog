---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Die Moderationsseite ist jetzt live[/postlink]

{{#unless isPost}}
Die FastComments-Moderationsseite zeigt jetzt eine Live-Benachrichtigung an, wenn neue Kommentare eintreffen, die Ihren aktuellen Filtern entsprechen.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Die Moderationsseite war schon immer ein leistungsstarkes Tool zur Verwaltung von Kommentaren. Sie konnten nach Status filtern, nach Text suchen, nach Seite oder Benutzer filtern und Bulk-Aktionen durchführen. Aber um neue Kommentare zu sehen, mussten Sie die Seite aktualisieren.

Nicht mehr! Die Moderationsseite zeigt jetzt an, wenn neue Kommentare eintreffen, die Ihren aktuellen Filtern entsprechen. Ein Banner erscheint oben in der Kommentarlistene und zeigt Ihnen an, wie viele neue Kommentare warten, und durch Klicken darauf werden diese inline geladen, ohne die gesamte Seite zu aktualisieren.

Die Nachricht „neue Kommentare für Ihre Filter“ sollte in den meisten Fällen nahezu sofort erscheinen.

### Filterbewertung

Die Transportschicht bewertet alle Moderationsfilter serverseitig. Dazu gehören Statusfilter (muss überprüft werden, muss genehmigt werden, Spam, markiert, gesperrt), Zeichenfolgenfilter (Benutzer-ID, Seiten-URL, Domain) und sogar Textsuche. Zitierter Text wie <div class="code">"exakte Phrase"</div> führt zu einem exakten, nicht differenzsensitiven Teilstringsübereinstimmung, während unzitierte Begriffe eine unscharfe, nicht differenzsensitive Übereinstimmung durchführen.

Das bedeutet, wenn Sie nach Spam-Kommentaren filtern, werden Sie nicht über genehmigte Kommentare benachrichtigt. Wenn Sie nach Kommentaren suchen, die eine bestimmte Phrase enthalten, lösen nur übereinstimmende Kommentare das Banner aus.

### Moderationsgruppen

Wenn Ihr Konto Moderationsgruppen verwendet, um einzuschränken, welche Moderatoren welche Kommentare sehen können, werden diese Einschränkungen für Live-Benachrichtigungen vollständig durchgesetzt. Die Transportschicht ruft den Anwendungsserver zurück, um den Filter zu erstellen, der Gruppeneinschränkungen basierend auf den zugewiesenen Gruppen des Moderators enthält. Dieser Filter wird für die Dauer der WebSocket-Verbindung zwischengespeichert und aktualisiert, wann immer der Moderator die Filter ändert.

### Verpasste Ereignisse

Wenn die Verbindung eines Moderators vorübergehend abbricht (Netzwerkprobleme, Laptop im Schlafmodus usw.), holt das System automatisch beim Wiederverbinden auf, sodass Sie keine Arbeit verpassen.

### Leistung

Wir haben dieses Feature so gestaltet, dass es minimale Auswirkungen auf die Ladezeit der Moderationsseite hat.

### Multi-Region

Dieses Feature funktioniert nahtlos mit unserer global verteilten Architektur, sodass global verteilte Moderationsteams die gleiche Live-Ansicht erhalten.

### Fazit

Wir hoffen, dass dieses Feature den Moderatoren Zeit spart und die Moderationserfahrung reaktionsschneller macht. Wie immer danken wir unseren Kunden für ihr Feedback und ihre Unterstützung.

Prost!

{{/isPost}}