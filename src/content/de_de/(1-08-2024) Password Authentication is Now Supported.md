---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Passwortauthentifizierung wird jetzt unterstützt[/postlink]

{{#unless isPost}}
Mit diesem Update unterstützt FastComments jetzt die traditionelle passwortbasierte Authentifizierung neben dem bestehenden E-Mail-basierten System.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Seit dem Start authentifizierte sich FastComments über magische E-Mail-Links. Dies lag daran, dass wir unsere Anmeldemechanismen in dasselbe System konsolidieren konnten, das verwendet wird, wenn ein Benutzer seinen ersten Kommentar hinterlässt und sich über einen E-Mail-basierten Link verifiziert/anmeldet. Allerdings sind nicht alle E-Mail-Server gleich, und manchmal kann es Minuten dauern, bis ein Link empfangen wird. Das war für einige unserer Benutzer sehr frustrierend.

Seit Ende 2023 unterstützt FastComments jetzt die Authentifizierung über Passwörter! Auf der Anmeldeseite gibt es jetzt zwei Tabs - einen zum Anmelden über E-Mail und einen über Passwort.

### So setzen Sie ein Passwort

Sie können ein Passwort setzen, indem Sie zu [Mein Konto -> Kontodetails -> Passwort ändern](https://fastcomments.com/auth/my-account/edit-details/change-password) gehen.

Fordern Sie einfach einen Rücksetzlink an. Ein Link wird an Ihre E-Mail gesendet, und wenn Sie darauf klicken, können Sie ein neues Passwort festlegen. Der Link funktioniert nur einmal und läuft ab, wenn er nicht verwendet wird.

### Passwortspeicherung & Sicherheit

Passwörter werden nicht gespeichert. Vielmehr werden Passwörter mit einem 11-rundigen Salt unter Verwendung von bcrypt gehasht. Der Zugriff auf das passwortbasierte System ist begrenzt und wird überwacht, um verschiedene Arten von passwortbezogenen Angriffen zu verhindern.

### Die Zukunft

In Zukunft planen wir auch die Unterstützung von 2FA.

### Fazit

Wie bei allen größeren Veröffentlichungen freuen wir uns, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, wenn Sie irgendwelche Probleme entdecken.

Prost!

{{/isPost}}

---