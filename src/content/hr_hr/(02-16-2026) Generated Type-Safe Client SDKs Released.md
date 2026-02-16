---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljeni generirani klijentski SDK-ovi s tipovima[/postlink]

{{#unless isPost}}
Kao što smo najavili u našem postu o migraciji na TypeScript, objavili smo generirane, klijentske SDK-ove koji su tipizirani za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

U našem [postu o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed), spomenuli smo da dolaze generirani klijentski SDK-ovi. Tu su.

FastComments sada nudi službene, tipizirane SDK-ove za **deset jezika**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go moduli)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Svaki SDK generira se iz iste OpenAPI specifikacije koju proizvodi naš server. Tipovi, potpisi metoda i modeli zahtjeva/odgovora automatski ostaju u skladu s stvarnim API-em. Vaš kompajler otkriva tipfeler u nazivima polja i nedostajuće parametre prije nego što vaš kod ikada pošalje mrežni zahtjev.

### Kako to funkcionira

Migracija na TypeScript bila je preduvjet za ovo. Sada kada je naš serverski kod potpuno tipiziran, koristimo [našu verziju TSOA](https://github.com/FastComments/tsoa) za generiranje OpenAPI 3.0 specifikacije izravno iz naših kontrolera ruta. Ta specifikacija se unosi u [OpenAPI Generator](https://openapi-generator.tech/) kako bi se proizvele klijentske biblioteke za svaki jezik.

Kada se API promijeni, naši alati otkrivaju razlike u specifikaciji, regeneriraju pogođene SDK-ove, izvršavaju testove za svaki jezik i automatski otvaraju pull zahtjeve. Izradili smo mali upravljački alat u Nimu koji orkestrira ciklus ažuriranja-testiranja-objavljivanja preko svih deset repozitorija.

### Što je u svakom SDK-u

Svaki SDK pruža dvije API klase:

- **`DefaultApi`**: autentificirani krajnji točke koje zahtijevaju vaš API ključ. Koristite ih na serveru za moderaciju, upravljanje korisnicima, analitiku i akcije u velikim količinama.
- **`PublicApi`**: neautentificirani krajnji točke koje su sigurne za pozivanje iz preglednika i mobilnih aplikacija. Ove pokrivaju dohvaćanje komentara, objavljivanje, glasanje i druge operacije usmjerene prema klijentu.

Svi SDK-ovi također uključuju SSO alate za integraciju s vašim postojećim sustavom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u stvarnom vremenu za komentiranje uživo.

### Dokumentacija

Potpuna API dokumentacija dostupna je na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki repozitorij SDK-a također uključuje generirane dokumente koji pokrivaju svaku dostupnu metodu i model.

Za SSO integraciju, pogledajte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK-ova uključuju SSO pomoćnike koji koriste njihove izvorne biblioteke za kriptografiju.

### U zaključku

Imati potpuno tipizirani server olakšalo je generiranje pouzdane OpenAPI specifikacije, a odatle, generiranje klijenata za deset (a jednog dana i više!) jezika uglavnom je bila stvar izgradnje automatizacije i poboljšanja naših tip definicija kako bi bile "konzumabilne", bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i svi glavni izdavaji, zadovoljni smo što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ovih SDK-ova. Javite nam u komentarima ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste željeli da dodamo.

Živjeli!

{{/isPost}}

---

---