---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aktualisierung der E-Mail-Benachrichtigungshäufigkeit[/postlink]

{{#unless isPost}}
Benutzer können jetzt steuern, wie oft sie E-Mail-Benachrichtigungen über neue Kommentare und Antworten erhalten — jede Minute, stündlicher Newsletter oder täglicher Newsletter — mit einer einzigen gemeinsamen Einstellung sowie pro-Abonnement-Änderungen.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir haben eine **Einstellung zur Benachrichtigungshäufigkeit für neue Kommentare** hinzugefügt, die steuert, wie oft Sie E-Mail-Benachrichtigungen für sowohl Antwortbenachrichtigungen als auch Mieter (neue Kommentare) erhalten. Die drei Optionen sind:

- **Jede Minute** - Erhalten Sie eine E-Mail, sobald neue Kommentare eintreffen (jede Minute überprüft).
- **Stündlicher Newsletter** - Erhalten Sie stündlich eine zusammengefasste Übersicht über neue Kommentare.
- **Täglicher Newsletter** - Erhalten Sie täglich eine zusammengefasste Übersicht über neue Kommentare.

Diese Einstellung ist sowohl für Mieter-Administratoren als auch für Kommentatoren verfügbar und gilt für alle E-Mail-Benachrichtigungen zu Kommentaren. Beachten Sie, dass @mention-Benachrichtigungen immer sofort gesendet werden, unabhängig von dieser Einstellung.

Sie können die Häufigkeit auch pro Abonnement in der Abonnementstabelle überschreiben, um eine detaillierte Kontrolle über einzelne Seiten zu haben.

### So konfigurieren Sie es

1. Gehen Sie zu Ihren [Benachrichtigungseinstellungen](https://fastcomments.com/auth/my-account/edit-notifications).
2. Verwenden Sie das Dropdown-Menü **Einstellung zur Benachrichtigungshäufigkeit für neue Kommentare**, um Ihre bevorzugte Häufigkeit festzulegen.
3. Optional können Sie die Häufigkeit für einzelne Abonnements in der Abonnementstabelle überschreiben.
4. Klicken Sie auf **Änderungen speichern**.

Der Standardwert ist **Jede Minute**, was dem vorherigen Verhalten entspricht.

### API-Unterstützung

Die Benachrichtigungshäufigkeit ist auch über die API verfügbar. Die benutzerspezifische Einstellung ist das <div class="code">notificationFrequency</div>-Feld, und pro-Abonnement-Änderungen können über das <div class="code">notificationFrequency</div>-Feld des Abonnements festgelegt werden. Weitere Details finden Sie in der [API-Dokumentation](https://docs.fastcomments.com/guide-api.html).

### Fazit

Dies gibt Benutzern die Kontrolle über ihr Postfach, ohne sich vollständig von Seiten abmelden zu müssen. Eine Einstellung deckt jetzt sowohl Antwort- als auch Mieterbenachrichtigungen ab, was die Verwaltung einfacher macht.

Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}

---