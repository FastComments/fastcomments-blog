---
[category:Migration]
###### [postdate]
# [postlink]Migrieren von Commento zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von Commento zu FastComments migrieren können.

## Stolpersteine

Commento gibt uns keine vollständigen URLs. Was sie bereitstellen, ist nur der Domainname, zu dem ein Kommentarstrang gehört - wie "fastcomments.com/some-page".
Das bedeutet, dass der FastComments-Importer annehmen muss, welches Protokoll verwendet wird, und standardmäßig auf https eingestellt ist. Wenn Sie den Import durchführen und Ihre Daten nicht sehen,
möchten Sie vielleicht überprüfen, ob Ihre Website ordnungsgemäß gesichert ist.
{{/unless}}

{{#isPost}}
### Exportieren Sie Ihre vorhandenen Kommentare

Um die Kommentar- und Benutzerdaten Ihrer Website von Commento über ihr Admin-Dashboard zu exportieren, gehen Sie zu Allgemein und dann zu Daten exportieren.

Ihnen wird auffallen, dass die resultierende Datei, die Sie per E-Mail erhalten, eine mysteriöse "gz"-Dateiendung hat. Wenn Sie etwas technisch versiert sind, wissen Sie vielleicht, dass dies für "gzip" steht und eine beliebte und effiziente Methode ist, um Dateien zu komprimieren. 

### Öffnen Sie die "gz"-Datei nicht

Eine Standardinstallation von Windows 10 kann die Datei von Commento nicht öffnen. Das ist in Ordnung, denn das müssen Sie mit FastComments nicht. Unser Backend versteht diese komprimierte Datei.

Danach, wenn Sie angemeldet sind, können Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier die Datei importieren</a>. Wählen Sie Commento aus dem Dropdown-Menü und laden Sie Ihre Datei hoch.

### Warten Sie ein paar Minuten

Der FastComments-Import ist "asynchron". Das bedeutet, dass das Hochladen der Datei und die Verarbeitung separate Schritte sind.

Je nach Dateigröße erhalten Sie möglicherweise sofort die Erfolgsmeldung. Auf der Importseite gibt es am unteren Ende eine Tabelle - jede Zeile repräsentiert einen Importversuch.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports und die Anzahl der bis jetzt importierten Zeilen zu sehen.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist - unabhängig davon, ob er erfolgreich war oder nicht. Sie können die Seite schließen, nachdem der Datei-Upload erfolgreich war und Sie Ihren Import auf der Importseite sehen. Der Status wird etwa "Angefordert" lauten und wenn er beginnt, wird der Status "In Bearbeitung" sein.

Es ist sicher, so oft wie nötig erneut zu importieren - wenn jedoch Ihr Import fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, damit wir helfen können.

### Ersetzen Sie den Commento-Code durch FastComments

Es ist einfach nur eine Frage des Entfernens des kleinen Snippets, das Ihnen Commento gibt, und des Ersetzens durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unser eigenes</a>.
Sie können sogar Commento und FastComments vorübergehend auf derselben Website ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

### Migrieren von URLs zur gleichen Zeit

Die Kommentare selbst sind an die "link"-Felder im Commento-Export gebunden, sodass der Wechsel einfach ist, solange sich Ihre URLs nicht ändern. Wenn Sie URLs migrieren möchten und Ihre 
Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs senden. Die Hilfeseite ermöglicht das Hochladen kleiner Textdateien, sodass, wenn 
Sie mehr als nur ein paar URLs migrieren, ein Excel-Dokument erstellen sollten.

### Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie in FastComments
3. Ersetzen Sie das JavaScript-Snippet von Commento durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Stolpersteine

Commento gibt uns keine vollständigen URLs. Was sie bereitstellen, ist nur der Domainname, zu dem ein Kommentarstrang gehört - wie "fastcomments.com/some-page".
Das bedeutet, dass der FastComments-Importer annehmen muss, welches Protokoll verwendet wird, und standardmäßig auf https eingestellt ist. Wenn Sie den Import durchführen und Ihre Daten nicht sehen,
möchten Sie vielleicht überprüfen, ob Ihre Website ordnungsgemäß gesichert ist.

## Warum sendet mir Commento meine Datei nicht?
Für größere Websites kann es sein, dass Commento aufgrund technischer Einschränkungen auf ihrer Seite die exportierte Datei nicht erstellen kann. Wir haben die Möglichkeit, Ihre bestehende Website zu durchsuchen und die Kommentare davon abzurufen, jedoch kann dies 
ziemlich individuell sein und aufgrund des Zeitaufwands erfordert es, dass Sie das Support-Paket haben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Hier können Sie Hilfe anfordern</a>.
{{/isPost}}

---