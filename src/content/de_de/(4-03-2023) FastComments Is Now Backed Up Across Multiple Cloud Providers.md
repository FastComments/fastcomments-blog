---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Wird Jetzt Von mehreren Cloud-Anbietern Unterstützt[/postlink]

{{#unless isPost}}
Seit April 2023 werden die FastComments-Datenbanken nun in mehreren Cloud-Anbietern zur zusätzlichen Vorsicht gespeichert.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Zuvor hatte FastComments Live-Datenbank-Backups auf mehreren Servern, jedoch im selben Cloud-Anbieter.

FastComments verwendet hauptsächlich Linode für die Regionen US-West und EU, als separate Datenbank- und Anwendungsbereitstellungen.

Jede Region hatte zuvor ihr eigenes Abbild der Datenbank als Live-Backup. Wenn die primäre Datenbank aus irgendeinem Grund verloren ging, 
würde das Live-Backup zur Verfügung stehen, um ihren Platz einzunehmen. Auch Schnappschüsse der Datenbank werden auf diesen Backups durchgeführt.

Wir haben jetzt Backups bei einem anderen Cloud-Anbieter hinzugefügt, sodass die Daten in jeder Region nicht auf ein Rechenzentrum pro Region isoliert sind.

Die neue Datenbanktopologie ist:

- US-West
  - Ein Datenbankcluster auf Linode in Kalifornien.
  - **NEU** Ein Live-Abbild auf Hetzner in Oregon.
- EU
  - Ein Datenbankcluster auf Linode in Frankfurt.
  - **NEU** Ein Live-Abbild auf Hetzner in Falkenstein.

Diese Abbilder sind live und haben immer die neueste Version der Datenbank.

### Fazit

Wie bei allen größeren Releases freuen wir uns, dass wir die Zeit nutzen konnten, um dieses Feature zu optimieren, zu testen und richtig freizugeben. Lassen Sie uns unten wissen,
wenn Sie Probleme entdecken.

Prost!

{{/isPost}}