---
[category:Migration]
###### [postdate]
# [postlink]Migration von JustComments zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von JustComments zu FastComments migrieren können.

Es geht normalerweise darum, den kleinen Code-Schnipsel, den sie Ihnen geben, zu entfernen und ihn durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseren eigenen</a> zu ersetzen.
Sie können JustComments und FastComments sogar vorübergehend auf derselben Website ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.
{{/unless}}

{{#isPost}}

Ab 2021 wird JustComments geschlossen. Bei FastComments haben wir es Ihnen einfach gemacht, zu unserer Plattform zu wechseln.

Sie werden feststellen, dass FastComments viele der Funktionen bietet, an die Sie gewöhnt sind, und noch mehr.

## Preisdifferenzen

Während JustComments ein kreditbasiertes System verwendet, nutzt FastComments ein gestuftes Modell mit drei verfügbaren Stufen. Mit FastComments deckt unser $5/Monat-Plan
bis zu 1M Seitenaufrufe pro Monat ab. Darüber hinaus gibt es die Pro- und Enterprise-Pläne, die Sie auf unserer <a href="https://fastcomments.com/traffic-pricing" target="_blank">Preisseite</a> einsehen können.

## Wenn Sie WordPress verwenden

FastComments hat ein dediziertes WordPress-Plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Das Plugin macht die Installation, Einrichtung und Synchronisation sehr einfach. JustComments synchronisiert jedoch Ihre Kommentare nicht zurück in Ihre WordPress-Installation, wie es FastComments tut. Das bedeutet, dass Sie nach der Synchronisation die Export- und Import-Schritte unten folgen müssen.

## Exportieren Sie Ihre bestehenden Kommentare

Der FastComments-Importer migriert Ihre Kommentare, Benutzernamen, Benutzeravatare und Inline-Bilder. Wir bewegen die Bilder nahtlos auf unsere Server.

Um Ihre Kommentardaten von JustComments herunterzuladen, gehen Sie zu Ihrer Kontoseite.

## Importieren in das FastComments-Admin

Machen Sie sich keine Sorgen, die resultierende Datei von JustComments zu öffnen.

Wenn Sie angemeldet sind, können Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier klicken, um die Datei zu importieren</a>.

Wählen Sie JustComments aus dem Dropdown-Menü und laden Sie Ihre Datei hoch.

### Seitenidentifikatoren

Beim Import haben Sie die Möglichkeit, die Seiten-URL oder "Item ID" auszuwählen. Wenn Sie unsicher sind, welche Sie wählen sollen, wählen Sie die Seiten-URL. Wenn Sie eine Integration mit JustComments haben,
bei der Sie die Item ID in der Widget-Konfiguration angeben, wählen Sie Item ID.

### Warten Sie ein paar Minuten

Der FastComments-Import ist "asynchron". Das bedeutet, dass das Hochladen der Datei und die Verarbeitung separate Schritte sind.

Je nach Dateigröße erhalten Sie möglicherweise sofort die Erfolgsnachricht. Auf der Importseite gibt es unten eine Tabelle - jede Zeile stellt einen Importversuch dar.
Sie können diese Seite sicher aktualisieren, um den Status Ihres Imports zu sehen und wie viele Zeilen bisher importiert wurden.

### Wenn es fertig ist

Sie erhalten eine E-Mail, wenn der Import abgeschlossen ist - ob erfolgreich oder nicht. Sie können die Seite schließen, nachdem der Datei-Upload erfolgreich war und Sie Ihren Import auf der Importseite sehen. Es wird einen Status wie "Angefordert" haben, und wenn es beginnt, wird der Status "Wird ausgeführt" sein.

Es ist sicher, so oft wie nötig erneut zu importieren - wenn Ihr Import jedoch fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a>, damit wir helfen können.

### Ersetzen Sie den JustComments-Code durch FastComments

Wenn Sie das JustComments WordPress-Plugin nicht verwenden, besteht es nur darin, den kleinen Code-Schnipsel, den sie Ihnen geben, zu entfernen und ihn durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unseren eigenen</a> zu ersetzen.
Sie können JustComments und FastComments sogar vorübergehend auf derselben Website ausführen, um das Aussehen und Gefühl zu testen und anzupassen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können dabei helfen</a>.

### URLs gleichzeitig migrieren

Die Kommentare selbst sind standardmäßig an die "pageUrl"-Feldern im JustComments-Export gebunden, sodass der Wechsel einfach ist, solange sich Ihre URLs nicht ändern. Wenn Sie URLs migrieren und Ihre
Kommentare behalten möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a>, indem Sie uns die alten und neuen URLs senden. Die Hilfeseite erlaubt das Hochladen kleiner Textdateien, sodass Sie
wenn Sie mehr als nur ein paar URLs migrieren, ein Excel-Dokument erstellen sollten.

## Zusammenfassung

1. Exportieren Sie Ihre Daten
2. Importieren Sie in FastComments
3. Wenn Sie nicht auf WordPress sind, tauschen Sie den JustComments-JavaScript-Schnipsel mit <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a> aus

{{/isPost}}