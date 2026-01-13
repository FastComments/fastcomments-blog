---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Die verwendeten Sprachen in Kommentaren können jetzt eingeschränkt werden[/postlink]

{{#unless isPost}}
Einige Gemeinschaften möchten die verwendeten Sprachen einschränken. Dies kann jetzt mit FastComments erfolgen.
{{/unless}}

{{#isPost}}

### Neuigkeiten

FastComments hat immer versucht, so viele Sprachen und Regionen wie möglich zu unterstützen.

Einige Gemeinschaften möchten jedoch die verwendeten Sprachen für die Kommunikation und das Schreiben von Kommentaren einschränken.

Anstatt dies als Regel durchzusetzen und möglicherweise Benutzer zu sperren, kann es jetzt explizit in der Plattform konfiguriert werden.

### So richten Sie es ein

In derselben Widget-Anpassungsoberfläche, mit der Sie wahrscheinlich vertraut sind, können Sie jetzt eine oder mehrere Sprachen auswählen, in denen Kommentare verfasst werden können.

Die Plattform wird beim Einreichen eines Kommentars versuchen, die Kommentarsprache in Echtzeit zu bestimmen. Wenn das Vertrauen in die bestimmte Sprache über 70 % liegt und sie mit einer erlaubten Sprache übereinstimmt, wird der Kommentar akzeptiert.

Wenn der verfasste Kommentar nicht in einer Sprache verfasst ist, die von Ihrer Konfiguration definiert ist, wird dem Benutzer eine Fehlermeldung in seiner eigenen Sprache angezeigt.

### Auswirkungen auf Entwickler

Diese Konfiguration hat auch Auswirkungen auf Kommentare, die über die API gespeichert werden.

Sie erhalten einen Fehler wie den folgenden:

            status: 'failed',
            reason: `Der Kommentar sieht aus, als wäre er in einer dieser Sprachen: [es], aber nur [en,fr] sind erlaubt.`,
            code: 'language-not-allowed',
            translatedError: "Eine Fehlermeldung in der Sprache des Benutzers."

### Fazit

Wie bei allen wichtigen Versionen sind wir froh, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---