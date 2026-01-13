---
[category:Features]

###### [postdate]
# [postlink]Veröffentlichung von Anzeigenamen[/postlink]

{{#unless isPost}}
FastComments unterstützte immer Anzeigenamen für SSO-Benutzer. Allerdings wurde dies niemals regulären Kommentatoren zur Verfügung gestellt. Heute ändert sich das!
{{/unless}}

{{#isPost}}

### Neuigkeiten

FastComments unterstützte immer Anzeigenamen für SSO-Benutzer. Allerdings wurde dies niemals regulären Kommentatoren zur Verfügung gestellt. Heute ändert sich das!

Auf der Seite [Kontodetails](https://fastcomments.com/auth/my-account/edit-details) können Sie jetzt ein neues Feld `Anzeigename` ausfüllen. `Anzeigename` wird
in Ihren Kommentaren und Profilen angezeigt.

### Emojis

In der Vergangenheit hatten Benutzer Schwierigkeiten, Emojis in Benutzernamen zu verwenden, da sie ihren Benutzernamen eingeben mussten, um sich anzumelden. Jetzt kann jedoch `Anzeigename` Emojis enthalten.

### Einzigartigkeit und Missbrauch

Der Punkt von `Anzeigename` ist, dass er nicht einzigartig ist. Wenn zwei Benutzer von FastComments.com in zwei sehr unterschiedlichen großen Gemeinschaften ähnliche Namen haben, möchten wir,
dass sie einfach ihren bevorzugten Anzeigenamen festlegen können. Da wir jedoch nicht einschränken können, wo Menschen mit ihrem globalen FastComments-Konto kommentieren, kann dies manchmal
zu Verwirrung führen.

Einen ähnlichen Namen wie ein anderer Benutzer oder ein Moderator zu haben, ist für sich genommen kein Fall von Missbrauch. Wenn Sie dies jedoch durch absichtliches Nachahmen anderer Benutzer missbrauchen, können wir
dieses Feature in Ihrem Konto deaktivieren, und Sie sind auf die Verwendung von `benutzername` beschränkt.

### Anmeldung

Sie verwenden weiterhin Ihren Benutzernamen, um sich anzumelden - **nicht Ihren Anzeigenamen!**

### Für Entwickler & Hinweise

Die regulären `User`-Objekte, die über die API bereitgestellt werden, haben jetzt `displayName`.

### Fazit

Wie bei allen großen Veröffentlichungen freuen wir uns, dass wir die Zeit nutzen konnten, um diese Funktion zu optimieren, zu testen und ordnungsgemäß freizugeben. Lassen Sie es uns wissen,
wenn Sie unten auf Probleme stoßen.

Prost!

{{/isPost}}

---