---
[category:Analytics]
###### [postdate]
# [postlink]FastComments kann jetzt Ansichten für Kommentare anzeigen[/postlink]

{{#unless isPost}}
FastComments unterstützt jetzt die Anzeige einer Zählung neben jedem Kommentar, die live ansteigt, während Benutzer Kommentare ansehen.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

FastComments unterstützt jetzt die Anzeige einer Zählung neben jedem Kommentar, die live ansteigt, während Benutzer Kommentare ansehen. Ob ein Kommentar angesehen wird oder nicht, wird durch das Benutzerkonto oder die anonyme Sitzung des Benutzers bestimmt. Es unterstützt SSO (sowohl sicheres SSO als auch einfaches SSO).

### Live-Demo

Wir haben die Kommentaransichten für diesen Blogbeitrag speziell aktiviert! Überprüfen Sie die Zählung neben dem Auge bei jedem Kommentar!

### Dokumentation

[Sie können die Entwicklerrichtlinien zur Einrichtung von Ansichten hier finden.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Leistung

Die Zählungen werden nicht sofort aktualisiert; es gibt eine kleine Verzögerung (bis zu drei Sekunden), während die Zählungen aggregiert und dann über das Netzwerk gesendet werden. Dies ist eine Optimierung, damit wir bei einem Live-Event, bei dem einige Tausend Menschen sagen wir im Durchschnitt 10 Kommentare auf der Seite ansehen, nicht sofort Millionen von Updates (`3000 Benutzer x 3000 Seitenaufrufe = ~9 Millionen Änderungen`) an jeden Benutzer senden und deren Browser belasten oder ihre Netzwerkbandbreite vollständig nutzen.

### Zum Schluss

Wir danken unseren Kunden, die uns kontinuierliches Feedback geben, sodass wir über Ideen wie diese nachdenken können und uns auch die Zeit geben, gut optimierte Funktionen zu starten. Wir hoffen, dass Sie FastComments weiterhin lieben.

Prost!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---