[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Zabranjeni korisnici su sada pretraživi[/postlink]

{{#unless isPost}}
Stranica Zabranjeni korisnici sada ima red za pretragu, tako da možete pronaći zabranu po e‑mailu, imenu, ko ju je izdao, ili komentaru koji je izazvao zabranu.
{{/unless}}

{{#isPost}}

### Šta je novo

Stranica Zabranjeni korisnici pod Moderiraj komentare sada ima red za pretragu iznad tabele. Do sada je jedini način kroz tu listu bio putem kontrola Stranica i Broj po stranici, što je u redu kada imate desetak zabrana, a bolno kada imate nekoliko hiljada.

Postoje tri kontrole: **Search By** bira polje, **Match** bira Contains ili Equals, a **Value** je ono što tražite.

### Šta možete pretraživati

**Search By** nudi pet opcija:

- **Any Field** - pretražuje sve ispod odjednom
- **Email** - zabranjena adresa
- **Name** - ime komentatora
- **Banned By** - moderator koji je izdao zabranu
- **Banned For Saying** - tekst komentara koji je doveo do zabrane korisnika

Poslednje četiri se podudaraju sa kolonama istog naziva u tabeli, tako da padajući meni čita isto kao i stvar koju filtrira.

### Contains vs Equals

**Contains** pronalazi vašu vrednost bilo gde u polju. **Equals** podudara se sa celim poljem.

Contains je ono što najčešće želite. Pretraga `bademail.com` pronalazi svaku zabranu na tom domenu, uključujući i wildcard zabranu `*@bademail.com`, jer se wildcard zabrane čuvaju sa zvezdicom netaknutom.

Equals je za slučajeve kada imate tačnu vrednost i ne želite približne rezultate. Pretraga Email za `spammer@example.com` uz Equals vraća tu jednu zabranu i ništa drugo.

Obe su neosetljive na veličinu slova u svakom polju. Ovo je važnije nego što zvuči: kada se zabrana kreira iz komentara, samo polovina adrese (domen) se pretvara u mala slova, pa se zabrana može zaista sačuvati kao `MixedCase@Example.com`. Pretraga za `mixedcase@example.com` je pronalazi.

### Dve pretrage koje vredi znati

**Banned For Saying** pretražuje tekst komentara koji je izazvao zabranu. Ako se određena fraza ili link širi, možete prikupiti sve koji su zabranjeni zbog toga u jednom upitu.

**Banned By** pretražuje moderatora koji je izdao zabranu. Ako želite pregledati odluke određenog moderatora, ili nekog uvodite i želite videti šta je radio, to je jedna pretraga daleko.

### Radi sa paginacijom i deljenjem

Pretraga se nalazi u URL-u stranice, tako da paginacija kroz rezultate zadržava primenu i možete poslati filtriranu listu drugom moderatoru kopiranjem URL-a, na isti način na koji već delite linkove za moderaciju. Pokretanje nove pretrage vraća vas na prvu stranicu, a **Clear** vas vraća na kompletnu listu.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Odjeljak o zabranjivanju korisnika u Vodiču za moderaciju</a> covers the search row in detail.

### Zaključak

Ovo je proizašlo iz posmatranja kako se stranica zaista koristi. Zabrane se tiho nakupljaju godinama, a onda jednog dana morate da pronađete određenu i nema načina da to uradite. Sada postoji.

Javite nam u nastavku ako postoji polje koje biste želeli da možete pretraživati, a nije na listi.

Živeli!

{{/isPost}}