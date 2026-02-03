---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling mit voller API-Integration und Automatisierungswerkzeugen kommt zu FastComments.
{{/unless}}

{{#isPost}}

## Neuigkeiten

FastComments kann jetzt über White Labeling mit anderen Anwendungen und Drittanbietern integriert werden. White Labeling ermöglicht es Ihnen, FastComments-Konten (Genannte Tenants), Benutzer, Moderatoren und mehr zu erstellen.

Wir bieten jetzt eine [umfassende API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) an, um die Integration
mit Drittanbietern zu automatisieren.

Sie können jetzt über die API:

- Kunden (Kind-Tenants) erstellen, die von Ihrem Tenant verwaltet werden.
- Die Pakete verwalten, die Ihren Kunden zur Verfügung stehen, und wie Sie die Abrechnung abwickeln.
- Benutzer in Ihren verwalteten Tenants hinzufügen und verwalten.
- Moderatoren in Ihren verwalteten Tenants hinzufügen und verwalten.
- Moderatoren einladen und Anmeldelinks an Tenant-Benutzer senden.

## Abrechnung

Bei der Abrechnung gibt es zwei Optionen:

1. Über FastComments Flex wird die Nutzung Ihrer Kind-Tenants automatisch zusammengefasst und dem Eltern-Tenant in Rechnung gestellt. Dies kann über die [Abrechnungsanalyse-Seite](https://fastcomments.com/auth/my-account/analytics/billing) überwacht werden.
2. Über FastComments Pro erhalten Sie Zugriff zum Erstellen einer festen Anzahl von Kind-Tenants zu einem festen monatlichen Preis.

## Debranding

Verwaltete Tenants können De-Branding aktivieren, was unsere Logos aus dem Kommentar-Widget entfernt.

## So erhalten Sie White Labeling

Derzeit bieten die FastComments Flex- und Pro-Pläne Zugriff auf die White Labeling API.

## Skripte und Beispiele

Ein Beispielskript, das die API verwendet, um einen Tenant mit Benutzern und Moderatoren einzurichten, [ist hier verfügbar](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Umfassende Validierung

Jede API-Ressource enthält umfassende Validierungen und Einschränkungen mit hilfreichen Fehlermeldungen, die Sie durch die korrekte Nutzung führen.

<div class="code"><div class="title">Detailliertes Fehlerbeispiel</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Ein Benutzer mit dieser ID existiert nicht in diesem Tenant. Erstellen Sie den Benutzer zuerst und machen Sie ihn dann zum Moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Weitere Anwendungsfälle

Die APIs für [Tenant-Benutzer](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) und [Moderatoren](https://docs.fastcomments.com/guide-api.html#moderator-structure) können ebenfalls verwendet werden, um
diese Ressourcen in Ihrem eigenen Tenant hinzuzufügen und zu verwalten, unabhängig vom White Labeling.

## Dokumentation

Sie finden die vollständige Dokumentation zu White Labeling und zur Nutzung der API [hier](https://docs.fastcomments.com/guide-white-labeling.html).

## Fazit

Wir hoffen, dass Sie dieses Update und die dazugehörige Dokumentation nützlich fanden. Viel Spaß beim Integrieren!

{{/isPost}}