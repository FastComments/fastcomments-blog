---
[category:Migration]
###### [postdate]
# [postlink]Migration von Hyvor Talk zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von Hyvor Talk zu FastComments migrieren.

Wenn Sie die manuelle Code-Installation mit Hyvor Talk verwenden, besteht es einfach darin, den kleinen Snippet zu entfernen, den sie Ihnen geben, und ihn durch <a href="https://fastcomments.com/install-wizard" target="_blank">unseren eigenen</a> zu ersetzen.
Sie können sogar Hyvor und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und die Bedienung zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

Wenn Sie nicht die installation basierend auf dem Code-Snippet verwenden, variieren die Anweisungen je nach Ihrer Plattform - nochmals <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nehmen Sie Kontakt mit uns auf</a>.
{{/unless}}

{{#isPost}}

## Wenn Sie WordPress verwenden

FastComments hat ein spezielles WordPress-Plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Das Plugin macht die Installation, Einrichtung und Synchronisierung sehr einfach. Wenn Sie diesen Weg gehen, können Sie den Rest der Anweisungen hier ignorieren. Stellen Sie einfach sicher,
dass Sie Ihre Hyvor Talk-Kommentare mit Ihrer WordPress-Installation synchronisiert haben.

Wenn dies, wie von einigen unserer Kunden berichtet, nicht für Sie funktioniert, möchten Sie möglicherweise unser WordPress-Plugin verwenden, aber einen Datenimport
durch manuelles Exportieren von Hyvor Talk durchführen. Datenimporte finden Sie unter [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Manuelle, generische Installation

### Exportieren Sie Ihre vorhandenen Kommentare

Der FastComments-Importer wird Ihre Kommentarstränge, Benutzernamen, Benutzeravatare, Emojis und Inline-Bilder migrieren. Wir werden die Bilder nahtlos auf unsere Server verschieben.

Seit 2022 exportiert Hyvor Talk keine E-Mails oder Auf- und Abwertungen. Wenn Sie einen Export von ihnen mit diesen Informationen erhalten können, können wir ihn importieren.

### Importieren Sie die .JSON-Datei

Nachdem Sie den Hyvor-Export heruntergeladen haben, melden Sie sich bei Ihrem FastComments-Dashboard an und gehen Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier, um die Datei zu importieren</a>. Wählen Sie Hyvor Talk im Dropdown aus und laden Sie Ihre Datei hoch.

### Warten Sie ein paar Minuten

Der FastComments-Import ist "asynchron". Das bedeutet, dass das Hochladen der Datei und das Verarbeiten separate Schritte sind.

Je nach der Dateigröße erhalten Sie möglicherweise sofort die Erfolgsmeldung. Auf der Importseite gibt es am Ende eine Tabelle - jede Zeile repräsentiert einen Importversuch.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports zu sehen und wie viele Zeilen bisher importiert wurden.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist - unabhängig davon, ob er erfolgreich war oder nicht. Sie können die Seite nach dem erfolgreichen Hochladen der Datei schließen und Ihren Import auf der Importseite sehen. Er wird einen Status wie "Angefordert" haben und wenn er startet, wird der Status "Wird ausgeführt" sein.

Es ist sicher, so oft wie nötig erneut zu importieren - wenn Ihr Import jedoch fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nehmen Sie Kontakt mit uns auf</a>, damit wir helfen können.

### Ersetzen Sie den Hyvor Talk-Code durch FastComments

Wenn Sie die installation basierend auf dem Code-Snippet mit Hyvor verwenden, besteht es einfach darin, den kleinen Snippet zu entfernen, den sie Ihnen geben, und ihn durch <a href="https://fastcomments.com/install-wizard" target="_blank">unseren eigenen</a> zu ersetzen.
Wir unterstützen auch viele Front-End-Frameworks, die [Sie hier finden können](https://fastcomments.com/install-wizard). Sie können sogar Hyvor und FastComments vorübergehend auf derselben Seite ausführen, um das Aussehen und die Bedienung zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

Wenn Sie nicht die installation basierend auf dem Code-Snippet verwenden, variieren die Anweisungen je nach Ihrer Plattform - nochmals <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nehmen Sie Kontakt mit uns auf</a>.

Wir bieten einen Selbstbedienungs-Installationsassistenten [hier](https://fastcomments.com/install-wizard).

### URLs gleichzeitig migrieren

Die Kommentare selbst sind an die Seiten-ID-Felder im Export gebunden, daher ist der Wechsel einfach, solange sich Ihre URLs nicht ändern. Wenn Sie URLs migrieren und Ihre
Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs senden. Die Hilfeseite erlaubt das Hochladen kleiner Textdateien, also wenn
Sie mehr als nur ein paar URLs migrieren, erstellen Sie ein Excel-Dokument.

### EU

Wenn Sie in der EU sind, möchten Sie wahrscheinlich Ihr Konto auf [eu.fastcomments.com](https://eu.fastcomments.com) erstellen, damit Ihre Kundendaten in der EU bleiben.

### Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie in FastComments
3. Tauschen Sie den Hyvor-JavaScript-Snippet gegen <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments's</a> aus.

## Warum sendet Hyvor mir meine Datei nicht?
Für größere Seiten kann es sein, dass Hyvor aufgrund technischer Einschränkungen auf deren Seite nicht in der Lage ist, die exportierte Datei zu erstellen. Wir haben die Möglichkeit, Ihre bestehende Seite zu scrapen und die Kommentare daraus zu ziehen, allerdings kann dies
eher individuell sein und erfordert aufgrund des Zeitaufwands das Supportpaket. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Sie können hier um Hilfe bitten</a>.
{{/isPost}}

---