---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljeni generisani klijentski SDK-ovi sa bezbednim tipovima[/postlink]

{{#unless isPost}}
Kao što smo nagovestili u našem postu o migraciji na TypeScript, objavili smo generisane klijentske SDK-ove sa bezbednim tipovima za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

### Šta je novo

U našem [postu o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed), pomenuli smo da dolaze generisani klijentski SDK-ovi. Sada su ovde.

FastComments sada isporučuje zvanične, klijentske SDK-ove sa **bezbednim tipovima** za **deset jezika**:

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

Svaki SDK se generiše iz iste OpenAPI specifikacije koju proizvodi naš server. Tipovi, potpisi metoda i modeli zahteva/odgovora automatski ostaju u skladu sa stvarnim API-jem. Vaš kompajler će otkriti tipografske greške u imenima polja i nedostajuće parametre pre nego što vaš kod ikada pošalje mrežni zahtev.

### Kako to funkcioniše

Migracija na TypeScript bila je preduslov za ovo. Sada kada je naš serverski kod potpuno tipizovan, koristimo [naš fork TSOA](https://github.com/FastComments/tsoa) da generišemo OpenAPI 3.0 specifikaciju direktno iz naših rutnih kontrolera. Ta specifikacija se prosleđuje [OpenAPI Generatoru](https://openapi-generator.tech/) kako bi se proizvele klijentske biblioteke za svaki jezik.

Kada se API promeni, naši alati prepoznaju razliku u specifikaciji, regenerišu pogođene SDK-ove, pokreću testove za svaki jezik i automatski otvaraju zahteve za povlačenje. Izgradili smo mali alat za upravljanje u Nimu koji orkestrira ciklus ažuriranja-testiranja-objavljivanja širom svih deset repozitorija.

### Šta se nalazi u svakom SDK-u

Svaki SDK pruža dve API klase:

- **`DefaultApi`**: autentifikovane krajnje tačke koje zahtevaju vaš API ključ. Koristite ih na serverskoj strani za moderaciju, upravljanje korisnicima, analitiku i velike operacije.
- **`PublicApi`**: neautentifikovane krajnje tačke sigurne za pozivanje iz pregledača i mobilnih aplikacija. Ove obuhvataju preuzimanje komentara, objavljivanje, glasanje i druge operacije koje se odnose na klijente.

Svi SDK-ovi takođe uključuju SSO alate za integraciju sa vašim postojećim sistemom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u stvarnom vremenu za komentare uživo.

### Dokumentacija

Potpuna API dokumentacija dostupna je na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki repozitorij SDK-a takođe uključuje generisanu dokumentaciju koja pokriva svaku dostupnu metodu i model.

Za integraciju SSO, pogledajte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK-ova uključuju SSO pomoćne alate koristeći svoje native biblioteke za kriptografiju.

### Na kraju

Imati potpuno tipizovan server učinilo je jednostavnim generisanje pouzdane OpenAPI specifikacije, a odatle, generisanje klijenata za deset (i jednog dana više!) jezika bila je uglavnom pitanja izgradnje automatizacije i poboljšanja naših tip definicija kako bi bile konzumabilne, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih SDK-ova. Javite nam
ispod ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste voleli da dodamo.

Živeli!

{{/isPost}}