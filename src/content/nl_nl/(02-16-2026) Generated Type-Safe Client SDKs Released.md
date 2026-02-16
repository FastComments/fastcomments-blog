---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Gegenereerde Type-Safe Client SDK's Vrijgegeven[/postlink]

{{#unless isPost}}
Zoals eerder vermeld in onze TypeScript migratiepost, hebben we gegenereerde, type-veilige client SDK's vrijgegeven voor tien programmeertalen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

### Wat is Nieuw

In onze [TypeScript migratiepost](/blog/fastcomments-typescript-migration-completed) hebben we vermeld dat gegenereerde client SDK's eraan kwamen. Ze zijn hier.

FastComments levert nu officiële, type-veilige SDK's voor **tien talen**:

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

Elke SDK wordt gegenereerd vanuit dezelfde OpenAPI specificatie die onze server produceert. Types, methodehandtekeningen en verzoek/antwoordmodellen blijven automatisch in sync met de daadwerkelijke API. Jouw compiler vangt typfouten in veldnamen en ontbrekende parameters op voordat je code ooit een netwerkverzoek doet.

### Hoe Het Werkt

De TypeScript migratie was een vereiste hiervoor. Nu onze servercode volledig getypt is, gebruiken we [onze fork van TSOA](https://github.com/FastComments/tsoa) om een OpenAPI 3.0 specificatie direct vanuit onze routecontrollers te genereren. Die specificatie wordt gebruikt in [OpenAPI Generator](https://openapi-generator.tech/) om clientbibliotheken voor elke taal te produceren.

Wanneer de API verandert, detecteert onze tooling het verschil in de specificatie, regenerateert de aangetaste SDK's, voert tests uit voor elke taal en opent automatisch pull requests. We hebben een kleine beheertool in Nim gebouwd die de update-test-release cyclus over alle tien repositories coördineert.

### Wat zit er in Elke SDK

Elke SDK biedt twee API-klassen:

- **`DefaultApi`**: geauthenticeerde eindpunten die jouw API-sleutel vereisen. Gebruik deze serverzijde voor moderatie, gebruikersbeheer, analyses en bulkbewerkingen.
- **`PublicApi`**: ongeauthenticeerde eindpunten die veilig zijn om aan te roepen vanuit browsers en mobiele apps. Deze dekken het ophalen van reacties, posten, stemmen en andere clientgerichte bewerkingen.

Alle SDK's bevatten ook SSO-hulpmiddelen voor integratie met jouw bestaande authenticatiesysteem. De TypeScript SDK biedt daarnaast realtime evenementabonnementen voor live commentaar.

### Documentatie

Volledige API-documentatie is beschikbaar op [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Elke SDK-repository bevat ook gegenereerde documentatie over elke beschikbare methode en model.

Voor SSO-integratie, zie onze [SSO-gids](https://docs.fastcomments.com/guide-sso.html). Alle tien SDK's bevatten SSO-hulpmiddelen die gebruik maken van hun eigen cryptografiebibliotheken.

### Conclusie

Een volledig getypte server maakte het eenvoudig om een betrouwbare OpenAPI-specificatie te genereren, en van daaruit was het genereren van clients voor tien (en op een dag meer!) talen voornamelijk een kwestie van automatisering opbouwen en onze type-definities verbeteren, zodat ze bruikbaar zijn, zonder teveel abstractie toe te voegen die FastComments zou vertragen!

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om te optimaliseren, testen en deze SDK's goed vrij te geven. Laat het ons weten hieronder als je feedback hebt of als er een taal is die je graag toegevoegd zou zien.

Proost!

{{/isPost}}

---

---