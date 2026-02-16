---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljena generisana SDK-jeva za klijente koji su tipizovani[/postlink]

{{#unless isPost}}
Kako je nagovešteno u našem postu o migraciji na TypeScript, objavili smo generisane, tipizovane klijentske SDK-jeve za deset programskih jezika.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U našem [postu o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed), spomenuli smo da dolaze generisani klijentski SDK-jevi. Sada su ovde.

FastComments sada nudi zvanične, tipizovane SDK-jeve za **deset jezika**:

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

Svaki SDK se generiše iz iste OpenAPI specifikacije koju naš server proizvodi. Tipovi, potpisi metoda i modeli zahteva/odgovora automatski se usklađuju sa stvarnim API-jem. Vaš kompajler hvata greške u imenima polja i nedostajuće parametre pre nego što vaš kod pošalje mrežni zahtev.

### Kako to funkcioniše

Migracija na TypeScript je bila preduslov za ovo. Sada kada je naš serverski kod potpuno tipizovan, koristimo [naš fork TSOA](https://github.com/FastComments/tsoa) da generišemo OpenAPI 3.0 specifikaciju direktno iz naših kontrolera ruta. Ta specifikacija se prosleđuje [OpenAPI Generator](https://openapi-generator.tech/) da bi se proizvele klijentske biblioteke za svaki jezik.

Kada se API promeni, naši alati detektuju razliku u specifikaciji, regenerišu pogođene SDK-jeve, pokreću testove za svaki jezik i automatski otvaraju pull zahteve. Izgradili smo mali upravljački alat u Nimu koji upravlja ciklusom ažuriranja-testiranja-objavljivanja preko svih deset repozitorija.

### Šta se nalazi u svakom SDK-ju

Svaki SDK pruža dve API klase:

- **`DefaultApi`**: autentifikovane krajnje tačke koje zahtevaju vaš API ključ. Koristite ih na serverskoj strani za moderaciju, upravljanje korisnicima, analitiku i masovne operacije.
- **`PublicApi`**: neautentifikovane krajnje tačke koje je sigurno pozivati iz pregledača i mobilnih aplikacija. Ove obuhvataju dobijanje komentara, postavljanje, glasanje i druge operacije koje se prikazuju klijentima.

Svi SDK-jevi takođe uključuju SSO alate za integraciju sa vašim postojećim sistemom autentifikacije. TypeScript SDK dodatno pruža real-time pretplate na događaje za komentarisanje uživo.

### Dokumentacija

Puna API dokumentacija dostupna je na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Svaki SDK repozitorij takođe uključuje generisane dokumente koji pokrivaju svaku dostupnu metodu i model.

Za SSO integraciju, pogledajte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Svi deset SDK-ja uključuju SSO pomoćnike koristeći svoje native kriptografske biblioteke.

### U zaključku

Imanje potpuno tipizovanog servera olakšalo je generisanje pouzdane OpenAPI specifikacije, a odatle, generisanje klijenata za deset (i jednog dana više!) jezika je uglavnom bila stvar izgradnje automatizacije i poboljšanja naših tip definicija kako bi mogle biti potrošive, bez previše apstrakcije koja bi usporila FastComments!

Kao i kod svih glavnih izdanja, zadovoljni smo što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ove SDK-jeve. Javite nam u nastavku ako imate bilo kakve povratne informacije ili ako postoji jezik koji biste želeli da dodamo.

Pozdrav!

{{/isPost}}

---

---