---
[category:Migration]
###### [postdate]
# [postlink]Migration von Muut Kommentaren zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von Muut zu FastComments migrieren können.

Es ist einfach eine Frage des Entfernens des kleinen Snippets, das Muut Ihnen gibt, und des Ersetzens durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unser eigenes</a>.
Sie können sogar Muut und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.
{{/unless}}

{{#isPost}}
### Exportieren Sie Ihre bestehenden Kommentare

Der FastComments-Importer wird Ihre Kommentare, Benutzernamen, Benutzer-Avatare und Inline-Bilder migrieren. Wir werden die Bilder nahtlos auf unsere Server verschieben.

Um die Kommentar- und Benutzerdaten Ihrer Seite von Muut über deren Admin-Dashboard zu exportieren, gehen Sie zu Integrationen und dann zu JSON-Export.

Sie werden feststellen, dass die resultierende Datei, die Sie per E-Mail erhalten, eine geheimnisvolle "gz"-Dateierweiterung hat. Wenn Sie etwas technisch versiert sind, wissen Sie vielleicht, dass dies für "gzip" steht und eine beliebte und effiziente Art ist, Dateien zu komprimieren.

### Öffnen Sie die "gz"-Datei nicht

Eine Standardinstallation von Windows 10 kann die Datei von Muut nicht öffnen. Das ist in Ordnung, denn mit FastComments müssen Sie das nicht. Unser Backend versteht diese komprimierte Datei.

Danach können Sie, wenn Sie angemeldet sind, <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier klicken, um die Datei zu importieren</a>. Wählen Sie Muut aus dem Dropdown-Menü und laden Sie Ihre Datei hoch.

Sie müssen die URL Ihrer Website eingeben. Dies liegt daran, dass Muut uns diese Informationen im Export nicht zur Verfügung stellt.

### Warten Sie ein paar Minuten

Der FastComments-Import ist "asynchron". Das bedeutet, dass das Hochladen der Datei und die Verarbeitung separate Schritte sind.

Je nach Dateigröße erhalten Sie möglicherweise sofort die Erfolgsmeldung. Auf der Importseite gibt es am Ende eine Tabelle - jede Zeile stellt einen Importversuch dar.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports zu sehen und wie viele Zeilen bisher importiert wurden.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist - unabhängig davon, ob er erfolgreich ist oder nicht. Sie können die Seite schließen, nachdem der Datei-Upload erfolgreich war und Sie Ihren Import auf der Seite "Imports" sehen. Es wird einen Status wie "Requested" haben und wenn es begonnen hat, wird der Status "Running" sein.

Es ist sicher, so oft wie nötig erneut zu importieren - wenn Ihr Import fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, damit wir helfen können.

### Ersetzen Sie den Muut-Code durch FastComments

Es ist einfach eine Frage des Entfernens des kleinen Snippets, das Muut Ihnen gibt, und des Ersetzens durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unser eigenes</a>.
Sie können sogar Muut und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

### URL gleichzeitiger Migration

Die Kommentare selbst sind an die "link"-Felder im Muut-Export gebunden, sodass der Wechsel einfach ist, solange sich Ihre URLs nicht ändern. Wenn Sie URLs migrieren und Ihre Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs senden. Die Hilfeseite erlaubt das Hochladen kleiner Textdateien, also wenn Sie mehr als nur ein paar URLs migrieren, erstellen Sie ein Excel-Dokument.

### Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie sie in FastComments
3. Tauschen Sie das Muut-JavaScript-Snippet gegen <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a> aus

## Warum sendet Muut mir meine Datei nicht?
Für größere Seiten kann es sein, dass Muut aufgrund technischer Einschränkungen auf deren Seite die exportierte Datei nicht erstellen kann. Wir haben die Möglichkeit, Ihre bestehende Seite zu scrapen und die Kommentare davon zu ziehen, jedoch kann dies recht individuell sein und aufgrund des Zeitaufwands erfordert es, dass Sie das Support-Paket haben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Hier können Sie Hilfe dazu anfordern</a>.
{{/isPost}}

---