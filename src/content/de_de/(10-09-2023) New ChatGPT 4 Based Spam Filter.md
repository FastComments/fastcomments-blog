---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Neuer spamfilter auf Basis von ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments erweitert seine Liste an Spamfilter-Optionen.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

FastComments verbessert weiterhin seinen Naïve-Bayes-Spamklassifikator, jedoch haben wir eine neue Option zur Flotte der Spamdetektoren hinzugefügt.

Sie können jetzt Spam mithilfe von ChatGPT 4, bereitgestellt von OpenAI, erkennen.

### So erhalten Sie es

Um zu konfigurieren, welchen Spamdetektor Sie verwenden möchten, überprüfen Sie die Seite "Moderationseinstellungen" in Ihrem Admin-Dashboard. Der auf GPT4 basierende Spamdetektor wird mit `$0.08` für jede `1000` Tokens berechnet.

Dieser Spamdetektor ist nur für Kunden im Flex-Plan verfügbar, da er basierend auf den verwendeten Tokens abgerechnet wird.

### Optimierungen

Wir führen zunächst alle Inhalte durch den gemeinsamen Naïve-Bayes-Klassifikator, um die Anfragen an OpenAI zu begrenzen. Dies spart Ihnen Geld für sehr offensichtliche Spam-Inhalte. Für die besonders unauffälligen Spam-Inhalte rufen wir dann OpenAI an, um zu überprüfen, ob der Inhalt wie Spam aussieht.

### Ergebnisse

Wir haben sofortige Verbesserungen in den Gemeinschaften festgestellt, die diese Funktion aktiviert haben.

### Dokumentation

Dies kann über die Seite "Moderationseinstellungen" in Ihrem Admin-Dashboard eingerichtet werden.

[Dokumentation finden Sie auch hier](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Fazit

Wir danken unseren Kunden, die uns kontinuierliches Feedback geben, damit wir Ideen wie diese entwickeln können. Wir hoffen, dass Sie FastComments weiterhin lieben.

Prost!

{{/isPost}}

---