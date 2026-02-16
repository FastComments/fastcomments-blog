---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Genererede Type-Safe Client SDK'er Udgivet[/postlink]

{{#unless isPost}}
Som nævnt i vores TypeScript migrationsindlæg, har vi udgivet genererede, type-safe client SDK'er til ti programmeringssprog.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

### Hvad er nyt

I vores [TypeScript migrationsindlæg](/blog/fastcomments-typescript-migration-completed), nævnte vi, at genererede client SDK'er var på vej. De er her.

FastComments leverer nu officielle, type-safe SDK'er til **ti sprog**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go-moduler)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Hvert SDK er genereret fra den samme OpenAPI-specifikation, som vores server producerer. Typer, metodesignaturer og anmodnings/svarmodeller forbliver automatisk synkroniseret med den faktiske API. Din compiler fanger tastefejl i feltnavne og manglende parametre, før din kode overhovedet laver en netværksanmodning.

### Sådan fungerer det

TypeScript migration var en forudsætning for dette. Nu hvor vores serverkode er fuldt typet, bruger vi [vores fork af TSOA](https://github.com/FastComments/tsoa) til at generere en OpenAPI 3.0 specifikation direkte fra vores rutecontrollere. Denne specifikation sendes til [OpenAPI Generator](https://openapi-generator.tech/) for at producere clientbiblioteker for hvert sprog.

Når API'en ændrer sig, registrerer vores værktøjer forskellene i specifikationen, regenererer de berørte SDK'er, kører tests for hvert sprog og åbner automatisk pull-anmodninger. Vi har bygget et lille manager-værktøj i Nim, der orkestrerer opdaterings-test-udgivelsescyklussen på tværs af alle ti repositories.

### Hvad er i hvert SDK

Hvert SDK tilbyder to API-klasser:

- **`DefaultApi`**: autentificerede endpoints, der kræver din API-nøgle. Brug disse server-side til moderation, brugerstyring, analyser og bulk-operationer.
- **`PublicApi`**: uautentificerede endpoints, der er sikre at kalde fra browsere og mobile apps. Disse dækker hentning af kommentarer, indsendelse, afstemning og andre klientvendte operationer.

Alle SDK'er inkluderer også SSO-værktøjer til integration med dit eksisterende autentifikationssystem. TypeScript SDK'en tilbyder desuden realtidsbegivenhedsabonnementer til live kommentering.

### Dokumentation

Fuld API-dokumentation er tilgængelig på [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Hver SDK-repository inkluderer også genererede docs, der dækker hver tilgængelig metode og model.

Til SSO-integration, se vores [SSO-guide](https://docs.fastcomments.com/guide-sso.html). Alle ti SDK'er inkluderer SSO-hjælpere ved brug af deres native kryptografibiblioteker.

### Afslutning

At have en fuldt typet server gjorde det ligetil at generere en pålidelig OpenAPI-specifikation, og derfra var det meste af arbejdet med at generere klienter til ti (og en dag flere!) sprog blot et spørgsmål om at bygge automatiseringen og forbedre vores typedefinitioner, så de kan være brugbare, uden at tilføre for meget abstraktion, der ville bremse FastComments!

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive disse SDK'er. Lad os vide nedenfor, hvis du har feedback, eller hvis der er et sprog, du gerne vil have os til at tilføje.

Skål!

{{/isPost}}

---

---