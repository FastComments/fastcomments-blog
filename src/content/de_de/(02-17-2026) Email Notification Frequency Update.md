---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Update zur E-Mail-Benachrichtigungsfrequenz[/postlink]

{{#unless isPost}}
Benutzer können jetzt steuern, wie oft sie E-Mail-Benachrichtigungen über neue Kommentare und Antworten erhalten, jede Minute, stündlicher Bericht oder täglicher Bericht, mit separaten Einstellungen für Antworten und Admin-Benachrichtigungen sowie pro-Abonnement-Überschreibungen.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir haben **Antwortbenachrichtigungsfrequenz** und **Admin-Benachrichtigungsfrequenz** Einstellungen hinzugefügt, die steuern, wie oft Sie E-Mail-Benachrichtigungen für Antworten und neue Kommentare erhalten. Die drei Optionen für jede sind:

- **Jede Minute** - eine E-Mail erhalten, sobald neue Kommentare eintreffen (jede Minute überprüft).
- **Stündlicher Bericht** - einen gebündelten Überblick über neue Kommentare einmal pro Stunde erhalten.
- **Täglicher Bericht** - einen gebündelten Überblick über neue Kommentare einmal pro Tag erhalten.

Die Antwortbenachrichtigungsfrequenz ist für alle Benutzer verfügbar und standardmäßig auf **Jede Minute** eingestellt. Die Admin-Benachrichtigungsfrequenz ist für Site-Administratoren verfügbar und standardmäßig auf **Stündlicher Bericht** eingestellt. Beachten Sie, dass @Erwähnungsbenachrichtigungen immer sofort gesendet werden, unabhängig von diesen Einstellungen.

Sie können auch die Frequenz pro Abonnement in der Abonnementstabelle überschreiben, um eine detaillierte Kontrolle über einzelne Seiten zu haben.

### So konfigurieren Sie es

1. Gehen Sie zu Ihren [Benachrichtigungseinstellungen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Verwenden Sie die Dropdowns für **Antwortbenachrichtigungsfrequenz** und **Admin-Benachrichtigungsfrequenz**, um Ihre bevorzugten Frequenzen festzulegen.
3. Optional, überschreiben Sie die Frequenz für einzelne Abonnements in der Abonnementstabelle.
4. Klicken Sie auf **Änderungen speichern**.

### API-Unterstützung

Das Feld `notificationFrequency` im Benutzerobjekt steuert die Antwortbenachrichtigungsfrequenz, und das Feld `adminNotificationFrequency` steuert die Admin-Benachrichtigungsfrequenz. Pro-Abonnement-Überschreibungen können über das Feld `notificationFrequency` des Abonnements festgelegt werden. Siehe die [API-Dokumentation](https://docs.fastcomments.com/guide-api.html) für Details.

### Fazit

Dies gibt den Benutzern Kontrolle über ihren Posteingang, ohne dass sie von Seiten vollständig abbestellen müssen.

Lassen Sie uns unten wissen, ob Sie Feedback haben!

Prost!

{{/isPost}}

---