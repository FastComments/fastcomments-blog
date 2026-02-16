---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generierte typensichere Client-SDKs veröffentlicht[/postlink]

{{#unless isPost}}
Wie in unserem Beitrag zur TypeScript-Migration angedeutet, haben wir generierte, typensichere Client-SDKs für zehn Programmiersprachen veröffentlicht.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

### Neuigkeiten

In unserem [Beitrag zur TypeScript-Migration](/blog/fastcomments-typescript-migration-completed) haben wir erwähnt, dass generierte Client-SDKs kommen werden. Sie sind jetzt verfügbar.

FastComments liefert nun offizielle, typensichere SDKs für **zehn Sprachen** aus:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Jedes SDK wird aus der gleichen OpenAPI-Spezifikation generiert, die unser Server erstellt. Typen, Methodensignaturen und Anforderungs-/Antwortmodelle bleiben automatisch mit der tatsächlichen API synchron. Ihr Compiler erkennt Tippfehler bei Feldnamen und fehlende Parameter, bevor Ihr Code eine Netzwerkanforderung sendet.

### So funktioniert es

Die TypeScript-Migration war eine Voraussetzung dafür. Jetzt, da unser Server-Code vollständig typisiert ist, verwenden wir [unseren Fork von TSOA](https://github.com/FastComments/tsoa), um eine OpenAPI 3.0-Spezifikation direkt aus unseren Routencontrollern zu generieren. Diese Spezifikation wird in [OpenAPI Generator](https://openapi-generator.tech/) eingespeist, um Client-Bibliotheken für jede Sprache zu produzieren.

Wenn sich die API ändert, erkennt unser Tooling die Unterschiede in der Spezifikation, regeneriert die betroffenen SDKs, führt Tests für jede Sprache durch und eröffnet automatisch Pull-Anfragen. Wir haben ein kleines Verwaltungstool in Nim entwickelt, das den Update-Test-Release-Zyklus über alle zehn Repositories orchestriert.

### Was in jedem SDK enthalten ist

Jedes SDK bietet zwei API-Klassen:

- **`DefaultApi`**: authentifizierte Endpunkte, die Ihren API-Schlüssel erfordern. Verwenden Sie diese serverseitig für Moderation, Benutzerverwaltung, Analytik und Bulk-Operationen.
- **`PublicApi`**: nicht authentifizierte Endpunkte, die sicher aus Browsern und mobilen Apps aufgerufen werden können. Diese decken das Abrufen von Kommentaren, Posten, Abstimmen und andere klientenseitige Operationen ab.

Alle SDKs enthalten auch SSO-Utilities zur Integration in Ihr bestehendes Authentifizierungssystem. Das TypeScript-SDK bietet zusätzlich Echtzeit-Ereignisabonnements für Live-Kommentare.

### Dokumentation

Die vollständige API-Dokumentation ist verfügbar unter [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Jedes SDK-Repository enthält zudem generierte Dokumente, die jede verfügbare Methode und jedes Modell abdecken.

Für die SSO-Integration siehe unser [SSO-Leitfaden](https://docs.fastcomments.com/guide-sso.html). Alle zehn SDKs enthalten SSO-Helfer unter Verwendung ihrer nativen Kryptographiebibliotheken.

### Fazit

Ein vollständig typisierter Server erleichterte die Generierung einer zuverlässigen OpenAPI-Spezifikation, und von dort aus war die Generierung von Clients für zehn (und eines Tages mehr!) Sprachen hauptsächlich eine Frage des Aufbaus der Automatisierung und der Verbesserung unserer Typdefinitionen, damit sie konsumierbar sind, ohne zu viel Abstraktion hinzuzufügen, die FastComments verlangsamen würde!

Wie bei allen großen Releases freuen wir uns, dass wir uns die Zeit nehmen konnten, diese SDKs zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, ob Sie Feedback haben oder ob es eine Sprache gibt, die Sie gerne hinzufügen möchten.

Prost!

{{/isPost}}

---

---