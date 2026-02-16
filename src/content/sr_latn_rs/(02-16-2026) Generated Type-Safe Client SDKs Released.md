---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljeni generisani klijentski SDK-ovi bezbednih tipova[/postlink]

{{#unless isPost}}
Kako smo napomenuli u našem postu o migraciji na TypeScript, objavili smo generisane, klijentske SDK-ove bezbednih tipova za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U našem [postu o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed) spomenuli smo da dolaze generisani klijentski SDK-ovi. Sada su tu.

FastComments sada nudi zvanične, klijentske SDK-ove bezbednih tipova za **deset jezika**:

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

Svaki SDK je generisan iz iste OpenAPI specifikacije koju proizvodi naš server. Tipovi, potpis metode i modeli zahteva/odgovora ostaju u skladu sa stvarnim API-jem automatski. Vaš kompajler otkriva greške u imenu polja i nedostajuće parametre pre nego što vaš kod ikada pošalje mrežni zahtev.

### Kako to funkcioniše

Migracija na TypeScript bila je preduslov za ovo. Sada kada je naš serverski kod potpuno tipizovan, koristimo [naš fork TSOA](https://github.com/FastComments/tsoa) da generišemo OpenAPI 3.0 specifikaciju direktno iz naših rutnih kontrolera. Ta specifikacija se prosledi [OpenAPI Generatoru](https://openapi-generator.tech/) da proizvede klijentske biblioteke za svaki jezik.

Kada se API menja, naši alati detektuju razliku u specifikaciji, regenerišu pogođene SDK-ove, pokreću testove za svaki jezik i automatski otvaraju pull zahteve. Izgradili smo mali menadžerski alat u Nimu koji orkestrira ciklus ažuriranja-testiranja-objavljivanja kroz svih deset repozitorijuma.

### Šta se nalazi u svakom SDK-u

Svaki SDK pruža dve API klase:

- **`DefaultApi`**: autentifikovani krajnji tački koji zahtevaju vaš API ključ. Koristite ih na serverskoj strani za moderaciju, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentifikovani krajnji tački koje je bezbedno pozivati iz pretraživača i mobilnih aplikacija. Ove pokrivaju preuzimanje komentarâ, objavljivanje, glasanje i druge operacije usmerene na klijente.

Svi SDK-ovi takođe uključuju SSO alate za integraciju sa vašim postojećim sistemom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u realnom vremenu za komentarisanje uživo.

### Dokumentacija

Puna API dokumentacija dostupna je na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorijum takođe sadrži generisanu dokumentaciju koja pokriva svaku dostupnu metodu i model.

Za SSO integraciju, pogledajte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK-ova uključuju SSO alate koje koriste njihove nativne biblioteke za kriptografiju.

### Zaključak

Imajući potpuno tipizovan server, bilo je jednostavno generisati pouzdanu OpenAPI specifikaciju, a odatle, generisanje klijenata za deset (i jednog dana više!) jezika bilo je uglavnom pitanje izgradnje automatizacije i poboljšanja naših tip definicija tako da budu konzumabilni, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i kod svih glavnih izdanja, zadovoljni smo što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih SDK-ova. Javite nam 
ispod ako imate bilo kakvih komentara ili ako postoji jezik koji biste želeli da dodamo.

Pozdrav!

{{/isPost}}

--- 

---