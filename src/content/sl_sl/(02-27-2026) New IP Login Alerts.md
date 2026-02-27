---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Novi IP prijavni opozorili[/postlink]

{{#unless isPost}}
FastComments sedaj pošilja varnostno opozorilo po elektronski pošti, ko zazna prijavo z novega IP naslova, vključno z aproximativno lokacijo, da pomaga uporabnikom odkriti nepooblaščen dostop.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments zdaj samodejno pošilja varnostno opozorilo po elektronski pošti, ko zaznamo prijavo na vaše ime, iz IP naslova, ki ga še nismo videli. Elektronska pošta vključuje:

- **aproximativno lokacijo** (mesto in država) prijave.
- **IP naslov**, ki je bil uporabljen.
- **čas** prijave.
- Drectno povezavo za **spremembo vašega gesla**, če prijava ni bila vaša.

To se nanaša na vse metode prijave: prijava z geslom, magične povezave in postopke dvofaktorske avtentifikacije.

### Zasebnost

Vaš surov IP naslov ne shranjujemo. Shranjujemo samo obfuscated obliko za namene varnostne primerjave. Aproximativna lokacija se določi ob času prijave in se ne shranjuje.

**Vaš IP se ne deli s tretjimi osebami** za določitev lokacije. Gostimo svojo storitev, ki pridobiva aproximativno lokacijo iz (tedensko posodobljene) kopije baze podatkov MaxMind.

### Kdaj se pošiljajo opozorila

Opozorilo se pošlje, ko so **vsa** naslednja dejstva resnična:

- Prijava je bila uspešna.
- To ni uporabnikova prva prijava.
- IP naslov še ni bil viden pri prejšnji uspešni prijavi za to račun.

To pomeni, da ne boste prejeli opozorila ob svoji prvi prijavi, in ne boste dobili ponavljajočih opozoril za isti IP.

### Na koncu

To je še en korak k ohranjanju varnosti vašega računa. Če prejmete opozorilo, ki ga ne prepoznate, priporočamo, da takoj spremenite svoje geslo.

Sporočite nam spodaj, če imate kakšne povratne informacije!

Na zdravje!

{{/isPost}}

---