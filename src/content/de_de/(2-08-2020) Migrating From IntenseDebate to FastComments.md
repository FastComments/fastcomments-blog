---
[category:Migration]

###### [postdate]
# [postlink]Migration von IntenseDebate zu FastComments[/postlink]

{{#unless isPost}}
Lies diesen Beitrag, um zu zeigen, wie man vollständig von IntenseDebate zu FastComments migriert.
{{/unless}}

{{#isPost}}
## Wenn Sie WordPress verwenden

FastComments hat ein spezielles WordPress-Plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Das Plugin erleichtert die Installation, Einrichtung und Synchronisierung erheblich. Wenn Sie diesen Weg wählen, können Sie die restlichen Anweisungen hier ignorieren.

## Manuelle, allgemeine Installation

### Exportieren Sie Ihre bestehenden Kommentare

Um die Kommentar- und Benutzerdaten Ihrer Website von IntenseDebate zu exportieren, gehen Sie im Admin-Dashboard zu Sites -> Ihre Website -> Tools -> XML-Export.

Sie werden feststellen, dass die resultierende Datei, die Sie per E-Mail erhalten, eine mysteriöse "gz"-Dateiendung hat. Wenn Sie etwas technisches Wissen haben, wissen Sie vielleicht, dass dies für "gzip" steht und eine beliebte und effiziente Möglichkeit ist, Dateien zu komprimieren. 

### Öffnen Sie die "gz"-Datei nicht

Eine Standardinstallation von Windows 10 wird nicht in der Lage sein, die Datei von IntenseDebate zu öffnen. Das ist in Ordnung, denn Sie müssen das mit FastComments nicht. Unser Backend versteht diese komprimierte Datei.

Danach, wenn Sie angemeldet sind, können Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier klicken, um die Datei zu importieren</a>. Wählen Sie IntenseDebate aus dem Dropdown-Menü und laden Sie Ihre Datei hoch.

### Warten Sie ein paar Minuten

Der FastComments-Import ist "asynchron". Das bedeutet, dass das Hochladen der Datei und die Verarbeitung separate Schritte sind.

Je nach Dateigröße erhalten Sie möglicherweise sofort die Erfolgsmeldung. Auf der Importseite gibt es unten eine Tabelle - jede Zeile stellt einen Importversuch dar.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports zu sehen und wie viele Zeilen bisher importiert wurden.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist - unabhängig davon, ob er erfolgreich war oder nicht. Sie können die Seite schließen, nachdem der Datei-Upload erfolgreich war und Sie Ihren Import auf der Importseite sehen. Der Status wird "Requested" sein und wenn er beginnt, lautet der Status "Running".

Es ist sicher, so oft wie nötig erneut zu importieren - wenn Ihr Import jedoch fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, damit wir helfen können.

### Ersetzen Sie den IntenseDebate-Code durch FastComments

Es ist einfach eine Frage des Entfernens des kleinen Snippets, das Ihnen IntenseDebate gibt, und Ersetzens durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unser eigenes</a>.
Sie können sogar IntenseDebate und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können Ihnen dabei helfen</a>.

Wenn Sie IntenseDebate-Widgets verwenden und diese ersetzen möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns hier</a>.

### Migration von URLs gleichzeitig

Die Kommentare selbst sind an die "link"-Felder im IntenseDebate-Export gebunden, also solange sich Ihre URLs nicht ändern, ist der Wechsel einfach. Wenn Sie URLs migrieren und Ihre 
Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs senden. Die Hilfeseite erlaubt das Hochladen kleiner Textdateien, also wenn 
Sie mehr als nur ein paar URLs migrieren, erstellen Sie ein Excel-Dokument.

### Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie sie in FastComments
3. Ersetzen Sie den JavaScript-Snippet von IntenseDebate durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Warum sendet mir IntenseDebate nicht meine Datei?
Für größere Websites kann IntenseDebate möglicherweise die exportierte Datei aufgrund technischer Einschränkungen auf ihrer Seite nicht erstellen. Wir haben die Möglichkeit, Ihre bestehende Website zu scrapen und die Kommentare davon abzurufen, jedoch kann dies 
recht individuell sein und aufgrund des erforderlichen Aufwands müssen Sie das Support-Paket haben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Sie können hier um Hilfe bitten</a>.
{{/isPost}}

---