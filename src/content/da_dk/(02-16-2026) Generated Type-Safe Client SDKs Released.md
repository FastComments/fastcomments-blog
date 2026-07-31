---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Som nævnt i vores TypeScript-migrationsindlæg, har vi frigivet genererede, typesikre klient‑SDK'er til ti programmeringssprog.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

### Hvad er nyt

I vores [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-da_dk.html), nævnte vi, at genererede klient‑SDK'er var på vej. De er her.

FastComments udgiver nu officielle, typesikre SDK'er for **ti sprog**:

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

Hvert SDK genereres ud fra den samme OpenAPI‑specifikation, som vores server producerer. Typer, metodesignaturer og anmodnings-/svaremønstre holdes automatisk i sync med den faktiske API. Din compiler fanger stavefejl i feltnavne og manglende parametre, før din kode overhovedet laver en netværksanmodning.

### Sådan fungerer det

TypeScript-migrationen var en forudsætning for dette. Nu hvor vores serverkode er fuldt typet, bruger vi [our fork of TSOA](https://github.com/FastComments/tsoa) til at generere en OpenAPI 3.0 spec direkte fra vores route controllers. Den spec føres ind i [OpenAPI Generator](https://openapi-generator.tech/) for at producere klientbiblioteker for hvert sprog.

Når API'en ændres, opdager vores værktøj forskellen i spec’en, regenererer de berørte SDK'er, kører tests for hvert sprog og åbner pull requests automatisk. Vi har bygget et lille manager værktøj i Nim, som orkestrerer opdater‑test‑release‑cyklussen på tværs af alle ti repositories.

### Hvad er i hvert SDK

Hvert SDK leverer to API‑klasser:

- **`DefaultApi`**: godkendte endpoints, der kræver din API‑nøgle. Brug disse på server‑siden til moderation, brugeradministration, analyse og bulk‑operationer.
- **`PublicApi`**: ikke‑godkendte endpoints, som er sikre at kalde fra browsere og mobil‑apps. Disse dækker hentning af kommentarer, postning, afstemning og andre klient‑rettede operationer.

Alle SDK'er inkluderer også SSO‑værktøjer til integration med dit eksisterende autentificeringssystem. TypeScript SDK'et leverer desuden real‑time‑event‑abonnementer til live‑kommentering.

### Dokumentation

Fuld API‑dokumentation er tilgængelig på [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Hvert SDK‑repository indeholder også genererede docs, der dækker hver tilgængelige metode og model.

For SSO‑integration, se vores [SSO guide](https://docs.fastcomments.com/guide-sso.html). Alle ti SDK'er inkluderer SSO‑hjælpere, der bruger deres native kryptografibiblioteker.

### Afslutningsvis

At have en fuldt typet server gjorde det ligetil at generere en pålidelig OpenAPI spec, og derfra var generering af klienter til ti (og en dag flere!) sprog primært et spørgsmål om at bygge automatiseringen og forbedre vores type‑definitioner, så de er anvendelige, uden at tilføje for meget abstraktion, der ville bremse FastComments!

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive disse SDK'er. Lad os vide nedenfor, hvis du har feedback eller hvis der er et sprog, du gerne vil have, vi tilføjer.

Skål!

{{/isPost}}

---

---