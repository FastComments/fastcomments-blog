---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Wie in unserem TypeScript-Migrationsbeitrag angedeutet, haben wir generierte, typensichere Client‑SDKs für zehn Programmiersprachen veröffentlicht.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachjargon

### Was ist neu

In unserem [TypeScript migration post](/blog/fastcomments-typescript-migration-completed) haben wir erwähnt, dass generierte Client‑SDKs kommen würden. Sie sind jetzt hier.

FastComments liefert jetzt offizielle, typensichere SDKs für **zehn Sprachen**:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Jedes SDK wird aus derselben OpenAPI‑Spezifikation generiert, die unser Server bereitstellt. Typen, Methodensignaturen und Anforderungs-/Antwortmodelle bleiben automatisch mit der tatsächlichen API synchronisiert. Ihr Compiler erkennt Tippfehler bei Feldnamen und fehlende Parameter, bevor Ihr Code überhaupt eine Netzwerk‑Anfrage stellt.

### Wie es funktioniert

Die TypeScript-Migration war dafür eine Voraussetzung. Jetzt, da unser Servercode vollständig typisiert ist, verwenden wir [our fork of TSOA](https://github.com/FastComments/tsoa), um eine OpenAPI 3.0‑Spezifikation direkt aus unseren Routenkontrollern zu generieren. Diese Spezifikation wird in [OpenAPI Generator](https://openapi-generator.tech/) eingespeist, um Client‑Bibliotheken für jede Sprache zu erzeugen.

Wenn sich die API ändert, erkennt unser Tooling die Differenz in der Spezifikation, regeneriert die betroffenen SDKs, führt Tests für jede Sprache aus und öffnet automatisch Pull‑Requests. Wir haben ein kleines Verwaltungs‑Tool in Nim entwickelt, das den Update‑Test‑Release‑Zyklus über alle zehn Repositorys orchestriert.

### Was in jedem SDK enthalten ist

Jedes SDK stellt zwei API‑Klassen bereit:

- **`DefaultApi`**: authentifizierte Endpunkte, die Ihren API‑Schlüssel benötigen. Verwenden Sie diese serverseitig für Moderation, Benutzermanagement, Analytik und Bulk‑Operationen.
- **`PublicApi`**: nicht authentifizierte Endpunkte, die sicher aus Browsern und mobilen Apps aufgerufen werden können. Diese decken das Abrufen von Kommentaren, das Posten, Abstimmen und andere clientseitige Vorgänge ab.

Alle SDKs enthalten außerdem SSO‑Hilfsprogramme zur Integration in Ihr bestehendes Authentifizierungssystem. Das TypeScript‑SDK bietet zusätzlich Echtzeit‑Event‑Abonnements für Live‑Kommentare.

### Dokumentation

Die vollständige API‑Dokumentation ist verfügbar unter [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Jedes SDK‑Repository enthält ebenfalls generierte Dokumente, die jede verfügbare Methode und jedes Modell abdecken.

Für die SSO‑Integration siehe unseren [SSO guide](https://docs.fastcomments.com/guide-sso.html). Alle zehn SDKs enthalten SSO‑Hilfsprogramme, die ihre nativen Kryptografiebibliotheken nutzen.

### Fazit

Ein vollständig typisierter Server machte es einfach, eine zuverlässige OpenAPI‑Spezifikation zu erzeugen, und daraus Clients für zehn (und irgendwann mehr!) Sprachen zu generieren, war größtenteils eine Frage des Aufbaus der Automatisierung
und der Verbesserung unserer Typdefinitionen, sodass sie konsumierbar sind, ohne zu viel Abstraktion hinzuzufügen, die FastComments verlangsamen würde!

Wie bei allen großen Releases freuen wir uns, dass wir die Zeit hatten, diese SDKs zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, wenn Sie Feedback haben oder wenn es eine Sprache gibt, die wir hinzufügen sollen.

Prost!

{{/isPost}}

---