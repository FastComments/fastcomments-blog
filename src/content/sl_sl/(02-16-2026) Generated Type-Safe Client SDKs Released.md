---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Kot smo namignili v našem prispevku o selitvi na TypeScript, smo izdali generirane, tipno varne odjemalske SDK-je za deset programskih jezikov.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični žargon

### Kaj je novega

V našem [TypeScript migration post](/blog/fastcomments-typescript-migration-completed) smo omenili, da bodo na voljo generirani odjemalski SDK-ji. So tukaj.

FastComments zdaj ponuja uradne, tipno varne SDK-je za **deset jezikov**:

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

Vsak SDK je generiran iz iste specifikacije OpenAPI, ki jo proizvaja naš strežnik. Tipi, podpisi metod in modeli zahtev/odgovorov ostajajo samodejno usklajeni z dejanskim API-jem. Vaš prevajalnik ujame tipkarske napake v imenih polj in manjkajoče parametre, še preden vaša koda sploh pošlje omrežni zahtevek.

### Kako deluje

Selitev na TypeScript je bila predpogoj za to. Zdaj, ko je naša strežniška koda v celoti tipizirana, uporabljamo [our fork of TSOA](https://github.com/FastComments/tsoa) za generiranje specifikacije OpenAPI 3.0 neposredno iz naših kontrolerjev poti. Ta specifikacija se nato posreduje v [OpenAPI Generator](https://openapi-generator.tech/), ki ustvari odjemalske knjižnice za vsak jezik.

Ko se API spremeni, naše orodje zazna razliko v specifikaciji, ponovno generira prizadete SDK-je, izvede teste za vsak jezik in samodejno odpre pull requeste. Zgradili smo majhno upravljalsko orodje v Nimu, ki usklajuje cikel posodobitev‑test‑izdaja po vseh desetih repozitorijih.

### Kaj je v vsakem SDK-ju

Vsak SDK ponuja dva API razreda:

- **`DefaultApi`**: avtenticirani končni naslovi, ki zahtevajo vaš API ključ. Uporabite jih na strežniku za moderiranje, upravljanje uporabnikov, analitiko in masovne operacije.
- **`PublicApi`**: neavtenticirani končni naslovi, varni za klicanje iz brskalnikov in mobilnih aplikacij. Pokrivajo pridobivanje komentarjev, objavljanje, glasovanje in druge operacije, usmerjene k odjemalcem.

Vsi SDK-ji vključujejo tudi SSO pripomočke za integracijo z vašim obstoječim sistemom avtentikacije. TypeScript SDK dodatno omogoča naročanje na dogodke v realnem času za živo komentiranje.

### Dokumentacija

Polna API dokumentacija je na voljo na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Vsako SDK skladišče prav tako vključuje generirano dokumentacijo, ki pokriva vse razpoložljive metode in modele.

Za integracijo SSO si oglejte naš [SSO guide](https://docs.fastcomments.com/guide-sso.html). Vseh deset SDK-jev vključuje SSO pomočnike, ki uporabljajo njihove izvorne kriptografske knjižnice.

### Zaključek

Imeti v celoti tipiziran strežnik je olajšalo ustvarjanje zanesljive specifikacije OpenAPI, od tam pa je generiranje odjemalcev za deset (in nekoč več!) jezikov večinoma stvar izgradnje avtomatizacije
in izboljšanja naših tipnih definicij, da so uporabne, brez dodajanja preveč abstrakcij, ki bi upočasnile FastComments!

Kot pri vseh večjih izdajah nas veseli, da smo si vzeli čas za optimizacijo, testiranje in pravilno izdajo teh SDK-jev. Sporočite nam
spodaj, če imate kakršnekoli povratne informacije ali če obstaja jezik, ki bi ga radi dodali.

Na zdravje!

{{/isPost}}

---
---