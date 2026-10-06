[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments ist jetzt noch schneller[/postlink]

{{#unless isPost}}
We've removed one network request when loading the comment widget, lowering load times even more.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachjargon

### Was ist neu

Wie FastComments in den letzten fünf Jahren oder so funktioniert hat, ist, dass wir ein kleines Skript laden, das iframe lädt, dann das Skript, das das Styling enthält, und anschließend eine Anfrage an die API für alles, was zum Rendern der Kommentare benötigt wird. Obwohl das nach viel klingt, ist es im Vergleich zu den meisten Systemen sehr kompakt!

Jetzt ist es jedoch sogar um eine Anfrage weniger. Die iframe-Antwort, die das Widget liefert, enthält ebenfalls die Kommentare und alle Daten, die der Benutzer zunächst benötigt, sodass die letzte API-Anfrage entfällt.

Die API bleibt aus Gründen der Abwärtskompatibilität für alle, die darauf angewiesen sind, erhalten.

### Keine Konfiguration erforderlich

Es gibt dafür keine Einstellung und keine Version, auf die man upgraden muss. Wenn Sie FastComments mit unserem Skript einbetten, haben Sie es bereits.

Ihre eigene Seite ist in jedem Fall unverändert. Das Widget wird weiterhin in einem iframe geladen und blockiert Ihren Inhalt nach wie vor nicht, genau wie zuvor.

### Wo es nicht gilt

Einige Pfade verwenden dies nicht und verhalten sich genau wie bisher:

- Suchmaschinen-Crawler, die Kommentare bereits direkt in die Seite rendern, anstatt in einem iframe
- Benutzeraktivitäts-Feeds und Hashtag-Filterung, die von anderen Endpunkten lesen

### Fazit

Wir hoffen, dass Sie unsere Plattform weiterhin gerne nutzen und dass die Verbesserungen, die wir vornehmen, Mehrwert schaffen. :)

Prost!

{{/isPost}}