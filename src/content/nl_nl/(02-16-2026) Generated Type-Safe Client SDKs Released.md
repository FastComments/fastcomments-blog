---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Gegenereerde Type-Safe Client SDK's Uitgebracht[/postlink]

{{#unless isPost}}
Zoals al aangehaald in ons TypeScript-migratiebericht, hebben we gegenereerde, type‑veilige client‑SDK's uitgebracht voor tien programmeertalen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische jargon

### Wat is er nieuw

In ons [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-nl_nl.html) hebben we vermeld dat gegenereerde client‑SDK's eraan komen. Ze zijn er nu.

FastComments levert nu officiële, type‑veilige SDK's voor **tien talen**:

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

Elke SDK wordt gegenereerd vanuit dezelfde OpenAPI‑specificatie die onze server produceert. Types, methodesignaturen en request/response‑modellen blijven automatisch gesynchroniseerd met de daadwerkelijke API. Je compiler vangt typefouten in veldnamen en ontbrekende parameters op voordat je code een netwerkverzoek doet.

### Hoe het werkt

De TypeScript‑migratie was een vereiste hiervoor. Nu onze servercode volledig getypeerd is, gebruiken we [our fork of TSOA](https://github.com/FastComments/tsoa) om een OpenAPI 3.0‑specificatie direct uit onze route‑controllers te genereren. Die specificatie wordt ingevoerd in [OpenAPI Generator](https://openapi-generator.tech/) om client‑bibliotheken voor elke taal te produceren.

Wanneer de API verandert, detecteert onze tooling het verschil in de specificatie, regenereert de getroffen SDK's, voert tests uit voor elke taal en opent automatisch pull‑requests. We hebben een klein beheer‑tool in Nim gebouwd dat de update‑test‑release‑cyclus over alle tien repositories coördineert.

### Wat zit er in elke SDK

Elke SDK biedt twee API‑klassen:

- **`DefaultApi`**: geauthenticeerde eindpunten die je API‑sleutel vereisen. Gebruik deze server‑side voor moderatie, gebruikersbeheer, analytics en bulk‑operaties.
- **`PublicApi`**: niet‑geauthenticeerde eindpunten die veilig vanuit browsers en mobiele apps kunnen worden aangeroepen. Deze omvatten het ophalen van reacties, plaatsen, stemmen en andere client‑gerichte operaties.

Alle SDK's bevatten ook SSO‑hulpmiddelen voor integratie met je bestaande authenticatiesysteem. De TypeScript‑SDK biedt bovendien real‑time event‑abonnementen voor live‑commentaar.

### Documentatie

Volledige API‑documentatie is beschikbaar op [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Elke SDK‑repository bevat ook gegenereerde documentatie die elke beschikbare methode en elk model beschrijft.

Voor SSO‑integratie, zie onze [SSO guide](https://docs.fastcomments.com/guide-sso.html). Alle tien SDK's bevatten SSO‑helpers die gebruikmaken van hun native cryptografiebibliotheken.

### Conclusie

Het hebben van een volledig getypeerde server maakte het eenvoudig om een betrouwbare OpenAPI‑specificatie te genereren, en vanaf daar was het genereren van clients voor tien (en op den duur meer!) talen voornamelijk een kwestie van het bouwen van de automatisering
en het verbeteren van onze type‑definities zodat ze bruikbaar zijn, zonder te veel abstractie toe te voegen die FastComments zou vertragen!

Net als bij alle grote releases zijn we blij dat we de tijd hebben genomen om deze SDK's te optimaliseren, te testen en correct uit te brengen. Laat ons hieronder weten
of je feedback hebt of als er een taal is die je graag toegevoegd wilt zien.

Proost!

{{/isPost}}

---
---