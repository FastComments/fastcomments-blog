---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migration von Disqus zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von Disqus zu FastComments migrieren.

Wenn Sie die generische Site-Integration mit Disqus verwenden, ist es einfach, den kleinen Snippet, den sie Ihnen geben, zu entfernen und ihn durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseren eigenen</a> zu ersetzen.
Sie können sogar Disqus und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und das Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können Ihnen dabei helfen</a>.

Wenn Sie die generische Site-Integration nicht verwenden, variieren die Anweisungen je nach Ihrer Plattform - kontaktieren Sie uns erneut <a href="https://fastcomments.com/auth/my-account/help" target="_blank">wir helfen Ihnen</a>.
{{/unless}}

{{#isPost}}
Es gibt viele Dinge, die Disqus richtig macht, aber dort, wo sie schwach sind, tritt FastComments ein.

## Wenn Sie WordPress verwenden

FastComments hat ein dediziertes WordPress-Plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Das Plugin ermöglicht eine sehr einfache Installation, Einrichtung und Synchronisierung. Wenn Sie diesen Weg gehen, können Sie die restlichen Anweisungen hier ignorieren.

## Manuelle, generische Installation

### Exportieren Sie Ihre bestehenden Kommentare

Der FastComments-Importer wird Ihre Kommentare, Benutzernamen, Benutzer-Avatare und Inline-Bilder migrieren. Wir verschieben die Bilder nahtlos auf unsere Server.

Eine Sache, die Disqus richtig macht, ist, wie sie den Export von Daten handhaben. Sie werden feststellen, dass die resultierende Datei, die Sie per E-Mail erhalten, eine mysteriöse "gz"-Dateierweiterung hat, nachdem Sie die Schritte in ihrem Leitfaden <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">hier</a> befolgt haben. Wenn Sie etwas technikaffin sind, wissen Sie vielleicht, dass dies für "gzip" steht und eine beliebte und effiziente Methode zum Komprimieren von Dateien ist.

### Öffnen Sie die "gz"-Datei nicht

Eine standardmäßige Windows 10-Installation kann die Datei von Disqus nicht öffnen. Das ist in Ordnung, denn Sie müssen dies mit FastComments nicht tun. Unser Backend versteht diese komprimierte Datei, sodass Sie nur die Anweisungen <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">hier befolgen müssen, um die Datei zu erhalten</a>.

Danach, wenn Sie angemeldet sind, können Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier klicken, um die Datei zu importieren</a>. Wählen Sie Disqus aus dem Dropdown-Menü aus und laden Sie Ihre Datei hoch.

### Warten Sie ein paar Minuten

Der Import von FastComments ist "asynchron". Das bedeutet, dass das Hochladen der Datei und das Verarbeiten separate Schritte sind.

Je nach Dateigröße erhalten Sie möglicherweise sofort die Erfolgsmeldung. Auf der Import-Seite gibt es unten eine Tabelle - jede Zeile repräsentiert einen Importversuch.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports zu sehen und wie viele Zeilen bisher importiert wurden.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist – egal, ob er erfolgreich ist oder nicht. Sie können die Seite schließen, nachdem der Datei-Upload erfolgreich war und Sie Ihren Import auf der Imports-Seite sehen. Es wird einen Status wie "Angefragt" haben und wenn es beginnt, lautet der Status "Wird ausgeführt".

Es ist sicher, so oft zu importieren, wie es erforderlich ist - jedoch, wenn Ihr Import fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, damit wir Ihnen helfen können.

### Ersetzen Sie den Disqus-Code durch FastComments

Wenn Sie die generische Site-Integration mit Disqus verwenden, ist es einfach, den kleinen Snippet, den sie Ihnen geben, zu entfernen und ihn durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseren eigenen</a> zu ersetzen.
Sie können sogar Disqus und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und das Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können Ihnen dabei helfen</a>.

Wenn Sie die generische Site-Integration nicht verwenden, variieren die Anweisungen je nach Ihrer Plattform - wieder <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>.

### Migration von URLs zur gleichen Zeit

Die Kommentare selbst sind an die "Link"-Felder im Disqus-Export gebunden, sodass der Wechsel einfach ist, solange sich Ihre URLs nicht ändern. Wenn Sie URLs migrieren und Ihre Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs zusenden. Die Hilfeseite ermöglicht das Hochladen kleiner Textdateien, sodass Sie, wenn Sie mehr als nur ein paar URLs migrieren, eine Excel-Tabelle erstellen sollten.

### Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie in FastComments
3. Tauschen Sie das Disqus-JavaScript-Snippet gegen <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a> aus

## Warum sendet Disqus mir meine Datei nicht?
Für größere Seiten kann Disqus möglicherweise die exportierte Datei aufgrund technischer Einschränkungen auf ihrer Seite nicht erstellen. Wir haben die Möglichkeit, Ihre bestehende Seite zu scrapen und die Kommentare davon abzuziehen, dies kann jedoch recht individuell sein und aufgrund des Zeitaufwands erfordert es, dass Sie das Support-Paket haben. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Sie können hier Hilfe anfordern</a>.
{{/isPost}}