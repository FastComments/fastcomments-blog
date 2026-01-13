---
[category:Security]

###### [postdate]
# [postlink]Audit-Log veröffentlicht[/postlink]

{{#unless isPost}}FastComments bietet jetzt ein detailliertes Protokoll aller Änderungen, die über die Plattform vorgenommen wurden.{{/unless}}

{{#isPost}}

### Neuigkeiten

Seit März enthält FastComments im Pro-Plan und für alle bestehenden Unternehmenskunden eine detaillierte Prüfung.

Alle administrativen Aktionen, egal ob es sich um den Datenzugriff, das Ändern eines Kommentars oder das Aufheben des Benutzersperren handelt, werden im Audit-Log erfasst und indiziert.

### So verwenden Sie es

Das Audit-Log kann über `Manage Data` und dann `Audit Logs` aufgerufen werden. Ein direkter Link ist [hier](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Zu Beginn sehen Sie eine Seite wie die folgende:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

Von hier aus können Sie nach Benutzername, IP-Adresse, Art der Aktion oder der Ressource suchen.

Zum Beispiel, Filtern nach Ressource:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

Wir können auch in die Details eines Eintrags im Audit-Log eintauchen und sogar das verwandte Objekt sehen, das geändert wurde.

Zum Beispiel, wir können in einen Eintrag für das Sperren eines Benutzers eintauchen:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Hier können wir sehen, wer den Benutzer gesperrt hat (ein Benutzer mit dem Benutzernamen `winrid`). Wir können sehen, dass es sich um eine permanente Sperre handelt, und wir haben auch die Benutzer-ID und die E-Mail-Adresse des gesperrten Benutzers, zusammen mit dem Text, für den sie gesperrt wurden.

Wir können die IP sehen, die die Sperre erstellt hat, aber die IP des ursprünglichen Kommentators wurde absichtlich zu ihrem Schutz weggelassen.

Um alle Ereignisse von `winrid` zu sehen, können wir einfach auf das Filtersymbol rechts neben ihrem Benutzernamen klicken.

### Zugangsbeschränkung

Daten im Audit-Log können nur von Benutzern mit der Berechtigung `Manage Data` abgerufen werden.

### Aufbewahrung

Alle Einträge im Audit-Log werden für zwei Jahre aufbewahrt. Das Audit-Log wird jedoch gelöscht, wenn Ihr Konto gelöscht wird.

### API-Zugriff

[Die Dokumentation zur Audit-Log-API finden Sie hier.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Sie werden feststellen, dass das Audit-Log je nach Anwendungsfall auf verschiedene Arten sortiert und paginiert werden kann.

### Bestehende Kunden

Wenn Sie im Pro-Plan oder einem entsprechenden Plan sind, wird das Audit-Log automatisch aktiviert! Wenn Sie Zugang erhalten möchten, wenden Sie sich bitte an Ihren Supportmitarbeiter.

### Was weggelassen wurde

Die einzige Art von Änderungen, die weggelassen werden, sind tatsächliche Kommentare und deren Stimmen. Das liegt daran, dass wir festgestellt haben, dass unsere Kunden hauptsächlich an der administrativen Seite bei Audits interessiert sind und nicht unbedingt daran, was Menschen kommentieren. Diese Arten von Aktionen sorgen zudem für erheblichen Lärm im Protokoll.

Wenn dies jedoch eine Anforderung ist, wenden Sie sich an uns, und wir können besprechen, wie wir dies für Sie aktivieren können.

### Fazit

Wir hoffen, dass Sie diesen Bereich unseres Angebots als nützlich empfinden, die Benutzeroberfläche einfach zu bedienen ist und die API schnell ist. 

Prost!

{{/isPost}}

---