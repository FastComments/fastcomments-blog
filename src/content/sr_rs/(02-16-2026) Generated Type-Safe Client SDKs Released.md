---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Kao što smo najavili u našem postu o TypeScript migraciji, objavili smo generisane, tip‑sigurne klijentske SDK‑ove za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

U našem [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-sr_rs.html), spomenuli smo da dolaze generisani klijentski SDK‑ovi. Evo ih.

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

Svaki SDK se generiše iz iste OpenAPI specifikacije koju naš server proizvodi. Tipovi, potpisi metoda i modeli zahteva/odgovora automatski ostaju sinhronizovani sa stvarnim API‑jem. Vaš kompajler hvata tipografske greške u imenima polja i nedostajuće parametre pre nego što vaš kod ikada pošalje mrežni zahtev.

### How It Works

TypeScript migracija je bila preduslov za ovo. Sada kada je naš serverski kod potpuno tipiziran, koristimo [our fork of TSOA](https://github.com/FastComments/tsoa) da generišemo OpenAPI 3.0 specifikaciju direktno iz naših kontrolera ruta. Ta specifikacija se prosleđuje [OpenAPI Generator](https://openapi-generator.tech/) da proizvede klijentske biblioteke za svaki jezik.

Kada se API promeni, naš alat otkriva razliku u specifikaciji, regeneriše pogođene SDK‑ove, pokreće testove za svaki jezik i automatski otvara pull zahteve. Napravili smo mali menadžer alat u Nim‑u koji orkestrira ciklus ažuriranja‑testiranja‑izdavanja kroz svih deset repozitorijuma.

### What's in Each SDK

Svaki SDK pruža dve API klase:

- **`DefaultApi`**: autentifikovani endpoint‑i koji zahtevaju vaš API ključ. Koristite ih na serveru za moderaciju, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentifikovani endpoint‑i sigurni za pozivanje iz pregledača i mobilnih aplikacija. Pokrivaju preuzimanje komentara, postavljanje, glasanje i druge operacije usmerene ka klijentu.

Svi SDK‑ovi takođe uključuju SSO alate za integraciju sa vašim postojećim sistemom autentifikacije. TypeScript SDK dodatno pruža pretplate na događaje u realnom vremenu za live komentarisanje.

### Documentation

Puna API dokumentacija je dostupna na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorijum takođe sadrži generisanu dokumentaciju koja pokriva sve dostupne metode i modele.

Za SSO integraciju, pogledajte naš [SSO guide](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK‑ova uključuju SSO pomoćnike koji koriste njihove native biblioteke kriptografije.

### In Conclusion

Imanje potpuno tipiziranog servera učinilo je jednostavnim generisanje pouzdane OpenAPI specifikacije, a odatle generisanje klijenata za deset (i jednog dana više!) jezika bilo je uglavnom stvar izgradnje automatizacije i unapređenja naših tip definicija kako bi bile upotrebljive, bez dodavanja previše apstrakcije koja bi usporila FastComments!

Kao i kod svih velikih izdanja, zadovoljni smo što smo mogli odvojiti vreme za optimizaciju, testiranje i pravilno izdavanje ovih SDK‑ova. Javite nam u nastavku ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste želeli da dodamo.

Živeli!

{{/isPost}}

---

---