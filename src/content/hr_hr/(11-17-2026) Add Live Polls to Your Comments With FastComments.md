[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Dodajte Live ankete u svoje komentare uz FastComments[/postlink]

{{#unless isPost}}
Komentari sada imaju live ankete! Čitatelji glasaju u samom threadu, rezultati se ažuriraju u stvarnom vremenu za sve na stranici, a ankete rade kroz web widget i naše iOS, Android i React Native SDK-ove.
{{/unless}}

{{#isPost}}

### Što je novo

Ovo izdanje dodaje **Live ankete**. Anketa je priložena komentaru i prikazuje se unutar njega. Čitatelji kliknu na opciju da glasaju,
bez napuštanja threada, a rezultati se ažuriraju u stvarnom vremenu za sve koji gledaju stranicu dok glasovi pristižu. Nema osvježavanja i
nitko ne mora ručno brojati odgovore.

<img src="images/fc-live-polls.png" alt="Komentar s anketom koja pita koji format sljedećeg sastanka treba biti, prikazuje Osobno 34%, Online 21% i Hibridno 45%, s 53 odgovora" title="Live ankete" class="lozad" />

Budući da je anketa komentar, razgovor ostaje priložen uz njega. Ljudi glasaju, a zatim odgovaraju da objasne zašto.

### Stvaranje ankete

Kada su ankete uključene, uređivač komentara dobiva gumb za anketu. Klikom na njega otvara se uređivač ankete ispod tekstualnog polja, gdje postavljate:

- **Pitanje**, do 200 znakova.
- **Opcije**, od 2 do 10.
- **Kada se zatvara**: nikada, ili nakon 1 dana, 3 dana ili 1 tjedna. Zatvorena anketa prikazuje svoje konačne rezultate i prestaje primati glasove.
- **Privatnost**: anonimna, vidljiva administratorima ili javna.
- **Zahtjev za glasom da se vide rezultati**, što skriva rezultate od svakog gledatelja dok ne glasaju ili dok se anketa ne zatvori.

Zatim napišite svoj komentar i objavite ga kao i obično. Ankete rade na novim komentarima i na odgovorima.

### Glasanje

Svaka osoba dobiva jedan glas po anketi i može ga promijeniti dok je anketa otvorena. Osim ako anketa ne zahtijeva glas najprije,
čitatelji mogu kliknuti **Show results** da vide stanje prije odabira.

Privatnost se postavlja po anketi i prikazuje odmah ispod opcija, tako da glasatelji znaju tko može vidjeti njihov glas prije nego što ga daju.
Anonimne ankete (zadano) prikazuju samo ukupne rezultate, a nitko, uključujući administratore, ne može vidjeti tko je za što glasao. Na anketama vidljivim administratorima,
administratori i moderatori mogu otvoriti **See who voted**. Na javnim anketama, to može bilo tko.

### Uključivanje

Ankete su isključene prema zadanim postavkama. Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
označite **Enable Polls** i odaberite tko ih može stvarati:

- **Samo administratori/moderatori** (zadano), za kada želite sami voditi ankete.
- **Svi**, za kada želite da vaša zajednica postavlja pitanja jedni drugima.

Glasanje zahtijeva prijavljenog korisnika prema zadanim postavkama. Označite **Allow Anonymous Poll Votes** da dopustite bilo kome da glasa. Kako bi to bilo pošteno,
anonimni glasovi su ograničeni na tri po IP adresi po anketi po satu.

Kao i svako pravilo prilagodbe, ovo se može primijeniti na cijelu vašu stranicu, domenu ili pojedinačnu stranicu.

### Obavijesti

Autor ankete prima obavijesti o odgovorima kako pristižu: obavijest, grupirana kada puno ljudi
glasuje odjednom, i dnevni email kada anketa tog dana dobije nove odgovore. Samo prvi glas se računa kao odgovor, pa
promjena mišljenja ne šalje dodatne obavijesti. Obavijesti slijede privatnost ankete, tako da anonimna anketa
navodi samo koliko je novih odgovora stiglo, nikada tko.

### Izvorni mobilni SDK-ovi

Ankete nisu samo u web widgetu. Naši izvorni SDK-ovi prikazuju karticu ankete, uređivač ankete, live rezultate i
popis glasova s pravim izvorima komponentama, i čitaju iste postavke widgeta s vaše nadzorne ploče. Uključite ankete jednom
i one će se pojaviti na vašoj stranici i u vašim aplikacijama.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, putem Swift Package Manager-a.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, kao `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, na NPM-u.

iOS i Android SDK-ovi također mogu objaviti anketu iz vašeg vlastitog UI-a. Na iOS-u to izgleda ovako:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

README-ovi za <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> i
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, te
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
objašnjavaju detalje, uključujući kako restilirati boje ankete da odgovaraju vašoj aplikaciji.

### API

Ankete su također dio REST API-ja. Možete stvoriti anketu zajedno s njenim komentarom prosljeđivanjem `poll` u `POST /api/v1/comments`,
ili kasnije dodati, urediti, zatvoriti i ukloniti jednu putem `/api/v1/polls/:commentId`. Glasovi se mogu izlistati, dati i ukloniti putem
`/api/v1/poll-votes`, što olakšava izvoz rezultata u proračunsku tablicu ili vaš CMS. API slijedi iste postavke kao widget,
a pojedinačni glasovi na anonimnim anketama ne mogu se čitati kroz njega.

### Opterećenje

Kod ankete se ne učitava osim ako su ankete omogućene, pa ne usporava widget za komentare za druge korisnike.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">The Live Polls guide</a> pokriva omogućavanje anketa,
tko ih može stvarati, anonimne glasove, privatnost glasova, obavijesti i API.

### Isprobajte

Postoji live anketa na <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls demo</a>. Glasajte
na njoj, otvorite stranicu u drugoj kartici i gledajte kako se rezultati mijenjaju. Također možete objaviti svoju vlastitu anketu tamo.

### Zaključak

Ako se vaši threadovi stalno pretvaraju u brojanje glava, isprobajte ankete i javite nam u nastavku što biste željeli vidjeti sljedeće.

Pozdrav!

{{/isPost}}

---