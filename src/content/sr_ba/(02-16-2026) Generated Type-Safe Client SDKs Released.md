---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Kao što smo najavili u našem postu o migraciji na TypeScript, objavili smo generisane, tip‑sigurne klijentske SDK‑ove za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U našem [TypeScript migration post](/blog/fastcomments-typescript-migration-completed), spomenuli smo da će stići generisani klijentski SDK‑ovi. Evo ih.

FastComments sada isporučuje zvanične, tip‑sigurne SDK‑ove za **deset jezika**:

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

Svaki SDK se generiše iz iste OpenAPI specifikacije koju naš server proizvodi. Tipovi, potpisi metoda i modeli zahtjeva/odgovora automatski su usklađeni sa stvarnim API‑jem. Vaš kompajler hvata tipografske greške u imenima polja i nedostajuće parametre prije nego što vaš kod ikada pošalje mrežni zahtjev.

### Kako funkcioniše

TSO A migracija je bila preduvjet za ovo. Sada kada je naš serverski kod potpuno tipiziran, koristimo [our fork of TSOA](https://github.com/FastComments/tsoa) da generišemo OpenAPI 3.0 specifikaciju direktno iz naših kontrolera ruta. Ta specifikacija se prosljeđuje u [OpenAPI Generator](https://openapi-generator.tech/) da proizvede klijentske biblioteke za svaki jezik.

Kada se API promijeni, naš alat otkriva razliku u specifikaciji, regeneriše pogođene SDK‑ove, pokreće testove za svaki jezik i automatski otvara pull requestove. Izgradili smo mali upravljački alat u Nim‑u koji orkestrira ciklus ažuriranja‑testiranja‑izdavanja kroz svih deset repozitorija.

### Šta se nalazi u svakom SDK‑u

Svaki SDK pruža dvije API klase:

- **`DefaultApi`**: autentifikovani endpointi koji zahtijevaju vaš API ključ. Koristite ih na serveru za moderaciju, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentifikovani endpointi sigurni za pozivanje iz preglednika i mobilnih aplikacija. Pokrivaju dohvaćanje komentara, objavljivanje, glasanje i druge operacije usmjerene prema klijentu.

Svi SDK‑ovi takođe uključuju SSO alate za integraciju s vašim postojećim sistemom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u realnom vremenu za live komentarisanje.

### Dokumentacija

Puna API dokumentacija je dostupna na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorij takođe sadrži generisanu dokumentaciju koja pokriva sve dostupne metode i modele.

Za SSO integraciju, pogledajte naš [SSO guide](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK‑ova uključuju SSO pomoćnike koji koriste njihove native biblioteke kriptografije.

### Zaključak

Imajući potpuno tipiziran server učinilo je jednostavnim generisanje pouzdane OpenAPI specifikacije, a odatle generisanje klijenata za deset (i jednog dana više!) jezika bilo je uglavnom pitanje izgradnje automatizacije
i poboljšanja naših tip definicija kako bi bile upotrebljive, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i kod svih većih izdanja, zadovoljni smo što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ovih SDK‑ova. Javite nam u nastavku ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste željeli da dodamo.

Živjeli!

{{/isPost}}

---
---