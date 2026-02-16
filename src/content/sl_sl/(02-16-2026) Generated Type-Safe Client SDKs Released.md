---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Objavljeni generirani Type-Safe Client SDK-ji[/postlink]

{{#unless isPost}}
Kot smo namignili v našem prispevku o migraciji na TypeScript, smo objavili generirane, type-safe klient SDK-je za deset programskih jezikov.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

### Kaj je novega

V našem [prispevku o migraciji na TypeScript](/blog/fastcomments-typescript-migration-completed) smo omenili, da generirani klient SDK-ji prihajajo. Sedaj so tu.

FastComments sedaj nudi uradne, type-safe SDK-je za **deset jezikov**:

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

Vsak SDK je generiran iz iste OpenAPI specifikacije, ki jo proizvaja naš strežnik. Tipi, podpisi metod in modeli zahtev/odgovorov ostajajo sinhronizirani z dejanskim API-jem samodejno. Vaš prevajalnik zaznava tipkarske napake v imenih polj in manjkajoče parametre, preden vaš koda sploh pošlje omrežno zahtevo.

### Kako deluje

Migracija na TypeScript je bila predpogoj za to. Zdaj, ko je koda našega strežnika popolnoma tipizirana, uporabljamo [našo vejo TSOA](https://github.com/FastComments/tsoa) za generiranje OpenAPI 3.0 specifikacije neposredno iz naših kontrolerjev poti. Ta specifikacija se vnese v [OpenAPI Generator](https://openapi-generator.tech/) za ustvarjanje klientskih knjižnic za vsak jezik.

Ko se API spremeni, naše orodje zazna razliko v specifikaciji, regenerira prizadete SDK-je, izvede teste za vsak jezik in avtomatsko odpre zahteve za združitev. Ustvarili smo majhno orodje za upravljanje v Nimu, ki usklajuje cikel posodobitve-testa-izdaje preko vseh desetih repozitorijev.

### Kaj je v vsakem SDK-ju

Vsak SDK zagotavlja dve API razredi:

- **`DefaultApi`**: avtorizirani končni točki, ki zahtevata vaš API ključ. Uporabite te na strežniku za moderiranje, upravljanje uporabnikov, analitiko in količinske operacije.
- **`PublicApi`**: neavtorizirani končni točki, ki so varni za klic iz brskalnikov in mobilnih aplikacij. Ti pokrivajo pridobivanje komentarjev, objavljanje, glasovanje in druge operacije, namenjene uporabnikom.

Vsi SDK-ji vključujejo tudi SSO orodja za integracijo z vašim obstoječim sistemom za avtorizacijo. SDK za TypeScript dodatno zagotavlja naročnine na dogodke v realnem času za komentiranje v živo.

### Dokumentacija

Popolna API dokumentacija je na voljo na [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Vsak repozitorij SDK-jev vključuje tudi generirane dokumente, ki pokrivajo vse razpoložljive metode in modele.

Za integracijo SSO si oglejte naš [SSO vodič](https://docs.fastcomments.com/guide-sso.html). Vsi deset SDK-jev vključujejo SSO pomočnike, ki uporabljajo svoje lastne kriptografske knjižnice.

### Na zaključku

Imeti popolnoma tipiziran strežnik je olajšalo generiranje zanesljive OpenAPI specifikacije, in od tam je bilo ustvarjanje klientov za deset (in nekega dne tudi več!) jezikov večinoma vprašanje gradnje avtomatizacije in izboljšanja naših tipizacij, da postanejo uporabne, brez dodajanja prevelike abstrakcije, ki bi upočasnila FastComments!

Kot pri vseh večjih izdajah smo zadovoljni, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo teh SDK-jev. Sporočite nam
spodaj, če imate kakšne povratne informacije ali če je jezik, ki bi ga želeli dodati.

Nazdravlje!

{{/isPost}}

---

---