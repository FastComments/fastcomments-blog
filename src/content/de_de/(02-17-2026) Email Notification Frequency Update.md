---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aktualisierung der E-Mail-Benachrichtigungsfrequenz[/postlink]

{{#unless isPost}}
Benutzer können jetzt steuern, wie oft sie E-Mail-Benachrichtigungen für neue Kommentare und Antworten erhalten, jede Minute, stündlich oder täglich, mit einer einzigen gemeinsamen Einstellung, plus spezifischen Überschreibungen pro Abonnement.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir haben eine **Einstellung zur Häufigkeit der Benachrichtigung über neue Kommentare** hinzugefügt, die steuert, wie oft Sie E-Mail-Benachrichtigungen für sowohl Antwortbenachrichtigungen als auch Tenant (neue Kommentar) Benachrichtigungen erhalten. Die drei Optionen sind:

- **Jede Minute** - erhalten Sie eine E-Mail, sobald neue Kommentare eintreffen (jede Minute überprüft).
- **Stündlicher Überblick** - erhalten Sie einmal pro Stunde eine zusammengefasste Übersicht über neue Kommentare.
- **Täglicher Überblick** - erhalten Sie einmal pro Tag eine zusammengefasste Übersicht über neue Kommentare.

Diese Einstellung ist sowohl für Tenant-Administratoren als auch für Kommentatoren verfügbar und gilt für alle E-Mail-Benachrichtigungen zu Kommentaren. Beachten Sie, dass @mention-Benachrichtigungen immer sofort gesendet werden, unabhängig von dieser Einstellung.

Sie können die Häufigkeit auch pro Abonnement in der Abonnementstabelle überschreiben, um eine präzisere Kontrolle über einzelne Seiten zu haben.

### So konfigurieren Sie es

1. Gehen Sie zu Ihren [Benachrichtigungseinstellungen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Verwenden Sie das Dropdown-Menü **Häufigkeit der Benachrichtigungen über neue Kommentare**, um Ihre bevorzugte Frequenz festzulegen.
3. Optional können Sie die Frequenz für einzelne Abonnements in der Abonnementstabelle überschreiben.
4. Klicken Sie auf **Änderungen speichern**.

Der Standardwert ist **Jede Minute**, was dem vorherigen Verhalten entspricht.

### API-Unterstützung

Die Benachrichtigungsfrequenz ist auch über die API verfügbar. Die benutzerspezifische Einstellung ist das Feld `notificationFrequency`, und Überschreibungen pro Abonnement können über das Feld `notificationFrequency` des Abonnements festgelegt werden. Weitere Einzelheiten finden Sie in der [API-Dokumentation](https://docs.fastcomments.com/guide-api.html).

### Fazit

Dies gibt den Benutzern die Kontrolle über ihren Posteingang, ohne dass sie sich komplett von Seiten abmelden müssen. Eine Einstellung deckt nun sowohl Antwort- als auch Tenant-Benachrichtigungen ab, was die Verwaltung einfacher macht.

Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}

---