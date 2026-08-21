[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Zabranjeni korisnici sada se mogu pretraživati[/postlink]

{{#unless isPost}}
Stranica Zabranjeni korisnici sada ima redak za pretraživanje, pa možete pronaći zabranu po e‑mailu, imenu, tko ju je izdao ili po komentaru koji je uzrokovao zabranu.
{{/unless}}

{{#isPost}}

### What's New

Stranica Zabranjeni korisnici pod Moderiraj komentare sada ima redak za pretraživanje iznad tablice. Do sada je jedini način kroz taj
popis bio pomoću kontrola Stranica i Broj po stranici, što je u redu kad imate desetak zabrana, a bolno kad imate nekoliko tisuća.

Postoje tri kontrole: **Search By** odabire polje, **Match** odabire Contains ili Equals, a **Value** je ono što tražite.

### What You Can Search

**Search By** nudi pet opcija:

- **Any Field** – pretražuje sve ispod odjednom
- **Email** – zabranjena adresa
- **Name** – ime zapisano uz zabranu
- **Banned By** – moderator koji je izdao zabranu
- **Banned For Saying** – tekst komentara koji je doveo do zabrane

Posljednja četiri podudaraju se s kolonama istog naziva u tablici, pa padajući izbornik čita isto kao i stvar koju filtrira.

### Contains vs Equals

**Contains** pronalazi vašu vrijednost bilo gdje u polju. **Equals** podudara cijelo polje.

Contains je ono što najčešće želite. Pretraživanje `bademail.com` pronalazi svaku zabranu na toj domeni, uključujući
zabranu s wildcardom `*@bademail.com`, jer se wildcard zabrane pohranjuju s njihovom zvjezdicom netaknutom.

Equals je za slučajeve kada imate točnu vrijednost i ne želite bliske podudarnosti. Pretraživanje Email za `spammer@example.com` s
Equals vraća tu jednu zabranu i ništa drugo.

Oba su neosjetljiva na veličinu slova u svakom polju. To je važnije nego što zvuči: kada se zabrana kreira iz
komentara, samo se donji dio adrese (domena) pretvara u mala slova, pa se zabrana može stvarno pohraniti kao `MixedCase@Example.com`.
Pretraživanje za `mixedcase@example.com` pronalazi je.

### Two Searches Worth Knowing About

**Banned For Saying** pretražuje tekst komentara koji je pokrenuo zabranu. Ako se određena fraza ili poveznica širi,
možete dohvatiti sve koji su zabranjeni zbog toga jednim upitom.

**Banned By** pretražuje moderatora koji je izdao zabranu. Ako želite pregledati odluke određenog moderatora, ili
uvedete nekoga i želite vidjeti što je radio, to je jedno pretraživanje daleko.

### It Works With Paging and Sharing

Pretraga se nalazi u URL-u stranice, pa paginacija kroz rezultate zadržava primijenjeno filtriranje i možete poslati filtriranu listu drugom
moderatoru kopiranjem URL-a, na isti način na koji već dijelite linkove za moderiranje. Pokretanje nove pretrage vraća vas na
prvu stranicu, a **Clear** vas vraća na cijeli popis.

### Name Search Matches What You See

Zabrana pohranjuje ime koje je korisnik imao kad ste ga zabranili, ali tablica prikazuje ime koje ima sada. To nisu uvijek
isti podaci, a zabrana koju ste kreirali upisivanjem e‑mail adrese nema spremljeno ime uopće.

Stoga pretraga po imenu razrješava korisnika iza svake zabrane i podudara se s imenom koje tablica zapravo prikazuje. Ako je netko
zabranjen kao "OldHandle" i od tada promijenio ime u "NewHandle", oba pretraživanja ga pronalaze. Ako ste zabranili adresu i tablica
prikazuje ime za nju, pretraživanje tog imena funkcionira.

### Documentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Odjeljak o zabranjivanju korisnika u Vodiču za moderiranje</a> detaljno opisuje redak za pretraživanje.

### In Conclusion

Ovo je proizašlo iz promatranja kako se stranica zapravo koristi. Zabrane se tiho nakupljaju godinama, a onda jednog dana trebate
pronaći određenu i nema načina da to učinite. Sada postoji.

Javite nam u komentarima ako postoji polje koje biste željeli moći pretraživati, a nije na popisu.

Cheers!

{{/isPost}}

---