---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Self-Service Email Suppression Management[/postlink]

{{#unless isPost}}
Tenant-Administratoren können jetzt E-Mail-Suppressions direkt vom FastComments-Dashboard aus einsehen und entfernen, ohne den Support kontaktieren zu müssen.
{{/unless}}

{{#isPost}}

### Was gibt’s Neues

Wenn eine E-Mail zurückkommt oder ein Empfänger sie als Spam markiert, blockieren E-Mail-Anbieter zukünftige Nachrichten an diese Adresse. Bis jetzt erforderte die Lösung dieser Suppressions, den FastComments-Support zu kontaktieren. Jetzt können Tenant-Administratoren die Suppressions selbst über eine neue **Suppressed Emails**-Seite im Kontodashboard verwalten.

### Warum das wichtig ist

Eine unterdrückte E-Mail bedeutet, dass ein Benutzer oder Moderator keine Benachrichtigungen von FastComments mehr erhält - keine Antwortbenachrichtigungen, keine Erwähnungsbenachrichtigungen, keine Admin-Digests, gar nichts. Oft merkt die betroffene Person das nicht einmal. Mit der neuen Self-Service-Seite haben Administratoren Einblick, welche Adressen blockiert sind, und können sofort Maßnahmen ergreifen.

### Wie es funktioniert

Navigieren Sie zu **Suppressed Emails** im Seitenbereich des Kontos. Sie sehen eine Tabelle aller unterdrückten Adressen, die mit den Benutzern, Moderatoren und Kommentatoren Ihres Tenants verbunden sind. Jeder Eintrag zeigt die E-Mail-Adresse, den Suppressionstyp, den Grund und das Datum an.

Um eine Suppression zu entfernen, klicken Sie auf **Remove**, überprüfen Sie die Details auf der Bestätigungsseite und bestätigen Sie. FastComments wird den E-Mail-Anbieter kontaktieren, um die Adresse zu entsperren und das Suppressions-Flag aus allen verbundenen Datensätzen zu entfernen.

Die Entfernungen sind durch Ratenbegrenzungen eingeschränkt, um Missbrauch zu verhindern - eine Entfernung pro E-Mail-Adresse alle 30 Tage und fünf Entfernungen pro Tenant pro Kalendermonat.

Unterdrückte Benutzer und Moderatoren werden jetzt auch mit einem roten **Email Suppressed**-Badge auf den Seiten für Benutzer und Moderatoren gekennzeichnet, das direkt zur Seitenverwaltung für diese Adresse verlinkt.

### Fazit

Wir hoffen, dass dies den Administratoren die Sichtbarkeit und Kontrolle gibt, die sie benötigen, um ihre Gemeinschaften verbunden zu halten. Wenn ein Benutzer berichtet, dass Benachrichtigungen fehlen, ist die Lösung jetzt nur noch ein paar Klicks entfernt.

Lassen Sie uns unten wissen, ob Sie Fragen haben!

Prost!

{{/isPost}}