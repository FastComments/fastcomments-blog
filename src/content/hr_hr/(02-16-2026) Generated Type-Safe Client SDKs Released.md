---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Kao što smo najavili u našem TypeScript migracijskom postu, objavili smo generirane, tip‑sigurne klijentske SDK‑ove za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

U našem [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-hr_hr.html), spomenuli smo da će stići generirani klijentski SDK‑ovi. Evo ih.

FastComments sada isporučuje službene, tip‑sigurne SDK‑ove za **deset jezika**:

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

Svaki SDK generira se iz iste OpenAPI specifikacije koju naš poslužitelj proizvodi. Tipovi, potpisi metoda i modeli zahtjeva/odgovora automatski su usklađeni s stvarnim API‑jem. Vaš kompajler otkriva tipfelere u imenima polja i nedostajuće parametre prije nego što vaš kod ikada pošalje mrežni zahtjev.

### Kako to funkcionira

TypeScript migracija je bila preduvjet za ovo. Sada kada je naš poslužiteljski kod potpuno tipiziran, koristimo [our fork of TSOA](https://github.com/FastComments/tsoa) za generiranje OpenAPI 3.0 specifikacije izravno iz naših kontrolera ruta. Ta specifikacija se prosljeđuje u [OpenAPI Generator](https://openapi-generator.tech/) kako bi se proizveli klijentski biblioteke za svaki jezik.

Kada se API promijeni, naši alati otkriju razliku u specifikaciji, regeneriraju pogođene SDK‑ove, pokreću testove za svaki jezik i automatski otvaraju pull requestove. Izradili smo mali upravljački alat u Nim‑u koji orkestrira ciklus ažuriranja‑testiranja‑izdavanja kroz svih deset repozitorija.

### Što se nalazi u svakom SDK‑u

Svaki SDK pruža dvije API klase:

- **`DefaultApi`**: autentificirani krajnji točke koje zahtijevaju vaš API ključ. Koristite ih na poslužitelju za moderiranje, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentificirane krajnje točke sigurne za pozivanje iz preglednika i mobilnih aplikacija. One pokrivaju dohvaćanje komentara, objavljivanje, glasanje i druge operacije usmjerene prema klijentu.

Svi SDK‑ovi također uključuju SSO alate za integraciju s vašim postojećim sustavom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u stvarnom vremenu za live komentiranje.

### Dokumentacija

Puna API dokumentacija dostupna je na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorij također uključuje generiranu dokumentaciju koja pokriva svaku dostupnu metodu i model.

Za SSO integraciju, pogledajte naš [SSO guide](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK‑ova uključuju SSO pomoćnike koji koriste njihove izvorne kriptografske biblioteke.

### Zaključak

Imati potpuno tipiziran poslužitelj učinilo je jednostavnim generiranje pouzdane OpenAPI specifikacije, a odatle generiranje klijenata za deset (i jednog dana više!) jezika bilo je uglavnom pitanje izgradnje automatizacije i poboljšanja naših definicija tipova kako bi bile upotrebljive, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i kod svih većih izdanja, zadovoljni smo što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ovih SDK‑ova. Javite nam u nastavku ako imate povratne informacije ili ako postoji jezik koji biste željeli da dodamo.

Živjeli!

{{/isPost}}

---

---