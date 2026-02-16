---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljeni generisani Type-Safe Client SDK-ovi[/postlink]

{{#unless isPost}}
Kao što je najavljeno u našem postu o migraciji na TypeScript, objavili smo generisane, type-safe client SDK-ove za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U našem [postu o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed), spomenuli smo da generisani client SDK-ovi dolaze. Oni su tu.

FastComments sada nudi zvanične, type-safe SDK-ove za **deset jezika**:

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

Svaki SDK je generisan iz iste OpenAPI specifikacije koju naš server proizvodi. Tipovi, potpisi metoda i modeli zahteva/odgovora automatski se usklađuju sa stvarnim API-jem. Vaš kompajler hvata greške u imenu polja i nedostajuće parametre pre nego što vaš kod ikada pošalje mrežni zahtev.

### Kako to funkcioniše

Migracija na TypeScript je bila preduslov za ovo. Sada kada je naš kod na serveru potpuno tipizovan, koristimo [naš fork TSOA](https://github.com/FastComments/tsoa) za generisanje OpenAPI 3.0 specifikacije direktno iz naših ruta kontrolera. Ta specifikacija se unosi u [OpenAPI Generator](https://openapi-generator.tech/) kako bi se proizvele biblioteke klijenata za svaki jezik.

Kada se API promeni, naši alati detektuju razlike u specifikaciji, regenerišu pogođene SDK-ove, pokreću testove za svaki jezik i automatski otvaraju pull zahteve. Napravili smo mali alat u Nimu koji orkestrira ciklus ažuriranja-testiranja-objavljivanja kroz svih deset repozitorija.

### Šta se nalazi u svakom SDK-u

Svaki SDK pruža dve API klase:

- **`DefaultApi`**: autentifikovani krajnji tački koje zahtevaju vaš API ključ. Koristite ih na serverskoj strani za moderaciju, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentifikovani krajnji tački koje je sigurno pozivati iz pregledača i mobilnih aplikacija. Ove obuhvataju preuzimanje komentara, postavljanje, glasanje i druge operacije sa klijentom.

Svi SDK-ovi takođe uključuju SSO alate za integraciju sa vašim postojećim autentifikacionim sistemom. TypeScript SDK dodatno pruža real-time pretplate na događaje za live komentarisanje.

### Dokumentacija

Puna API dokumentacija je dostupna na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorij takođe uključuje generisanu dokumentaciju koja pokriva svaku dostupnu metodu i model.

Za SSO integraciju, pogledajte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK-ova uključuju SSO alate koristeći njihove native biblioteke za kriptografiju.

### Na kraju

Imati potpuno tipizovan server olakšalo je generisanje pouzdane OpenAPI specifikacije, a odatle, generisanje klijenata za deset (a jednog dana možda i više!) jezika je uglavnom zahtevalo izgradnju automatizacije i poboljšanje naših tip definicija kako bi mogle biti upotrebljive, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i svi glavni izdaci, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ove SDK-ove. Javite nam ispod ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste želeli da dodamo.

Živeli!

{{/isPost}}

---