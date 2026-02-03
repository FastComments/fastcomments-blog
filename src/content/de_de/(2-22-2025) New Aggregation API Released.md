---
[category:API & Development]

###### [postdate]
# [postlink]Neue Aggregation-API veröffentlicht[/postlink]

{{#unless isPost}}
FastComments gibt seinen Kunden einen unschlagbaren Zugang zu ihren Daten mit einer flexiblen und schnellen Aggregation-API.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

### Was gibt's Neues

FastComments gibt seinen Kunden einen unschlagbaren Zugang zu ihren Daten mit einer flexiblen Aggregation-API. Diese API ermöglicht es Ihnen, Ihre Kommentare, Abstimmungen und **34 weitere Ressourcen** zu zählen, zu untersuchen, zu segmentieren und zu aggregieren!

### Beispiel - Zählen von Kommentaren nach E-Mail und Seite

Mit der neuen API können wir beispielsweise die Anzahl der Kommentare nach Seite (`urlId`) und E-Mail des Benutzers (`commenterEmail`) abrufen:  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Das würde uns etwas geben wie:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Oder vielleicht möchten wir unsere genehmigten und nicht genehmigten Kommentare zählen:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Gibt uns:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

Die API unterstützt auch Abfragefilter und umfangreichere Gruppenbildungen.

### Dokumentation

[Die vollständige Dokumentation finden Sie hier.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivation

Wir möchten, dass unsere Kunden Dashboards erstellen können, um ihr Konto zu überwachen, Berichte zu erstellen, Kundenanfragen zu bearbeiten und ihre Daten nach Bedarf zu untersuchen.

### Wer erhält es & Grenzen

Alle FastComments-Kunden haben Zugang zur API. Ihre Nutzung ist basierend auf Ihren verfügbaren API-Credits begrenzt, die je nach gekauftem Paket variieren.

### Fazit

Wie bei allen größeren Veröffentlichungen sind wir froh, dass wir uns die Zeit nehmen konnten, diese Änderungen zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---