---
[category:Features]
###### [postdate]
# [postlink]Aktualisierung des Mietermanagements[/postlink]

{{#unless isPost}}
FastComments hat die Interaktion zur Verwaltung Ihrer Mieter verbessert!
{{/unless}}

{{#isPost}}

### Was gibt's Neues

Seit dem 11. Dezember 2023 bietet FastComments jetzt die Möglichkeit, zwischen Mietern zu wechseln, ohne andere Mieterbenutzer zu impersonieren.

### Zielgruppe

Dieses Update ist nicht für Kommentatoren oder Seitenadministratoren gedacht, die eine einzige Seite betreiben. Dies kommt nur Administratoren zugute, die viele Seiten oder Mieter betreiben.

### Auswirkungen auf Administratoren

Früher war es mühsam, Mieter zu erstellen und Benutzer zu wechseln. Einige häufige Probleme waren:

1. Sie mussten einen Benutzer erstellen, wenn Sie Ihren Mieter erstellt haben, da dieser Benutzer den Mieter „besessen“ hat.
2. Das bedeutete, dass Sie für jede Seite eine neue E-Mail-Adresse verwenden mussten, selbst wenn Sie eine E-Mail/Konto für viele Submieter verwenden wollten.
3. Der Wechsel zwischen Mietern erforderte eine Impersonation, was bedeutete, dass Ihre Benutzer in allen Mietern mit denselben Berechtigungen dupliziert werden mussten, und so weiter.

Jetzt:

1. Es ist keine Benutzererstellung erforderlich, wenn Sie einen Mieter erstellen.
2. Jeder Super-Admin-Benutzer mit den entsprechenden Berechtigungen hat die gleichen Berechtigungen in allen Submietern.
3. Es gibt einen `Switch`-Button in der Mieterliste, der Ihren aktuellen Benutzer und die Berechtigungen beibehält, aber ändert, bei welchem Mieter Sie angemeldet sind.
4. Wenn Sie ein Administrator eines übergeordneten Mieters sind, haben Sie Moderatorenberechtigungen in Submietern, wenn Sie das Kommentarton-Widget verwenden.

Ereignisse werden weiterhin im Audit-Protokoll für den Mieter protokolliert, zu dem Sie gewechselt haben.

### Impersonation

Sie können weiterhin Benutzer impersonieren. Wechseln Sie zu einem Mieter und gehen Sie zur Seite `Users`.

### Für Entwickler & Besondere Hinweise

Beim Verwenden der `POST /tenants` API ist das Feld `email` jetzt optional. Die Dokumentation wurde aktualisiert.

### Zukünftige Updates

In Zukunft wird es weitere Verwaltungsaktionen in der Mieterliste geben, wie z. B. das Löschen von Mietern und so weiter.

### Fazit

Wie bei allen großen Veröffentlichungen sind wir froh, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie es uns wissen
unten, wenn Sie Probleme feststellen.

Prost!

{{/isPost}}

---