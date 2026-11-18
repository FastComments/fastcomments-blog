[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Dodajte Live ankete u svoje komentare uz FastComments[/postlink]

{{#unless isPost}}
Komentari sada imaju live anketiranje! Čitaoci glasaju direktno u niti, rezultati se ažuriraju u realnom vremenu za sve na stranici, a ankete funkcionišu kroz web widget i u našim iOS, Android i React Native SDK-ovima.
{{/unless}}

{{#isPost}}

### Šta je novo

Ovo izdanje dodaje **Live ankete**. Anketa je prikačena uz komentar i prikazuje se unutar njega. Čitaoci kliknu na opciju da glasaju,
bez napuštanja niti, a rezultati se ažuriraju u realnom vremenu za sve koji gledaju stranicu kako glasovi pristižu. Bez osvežavanja, i
niko ne mora ručno prebrojavati odgovore.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Pošto je anketa komentar, razgovor ostaje prikačen uz nju. Ljudi glasaju, a zatim odgovaraju da objasne zašto.

### Kreiranje ankete

Kada su ankete uključene, editor komentara dobija dugme za anketu. Klikom na njega otvara se editor ankete ispod polja za unos teksta, gde možete postaviti:

- **Pitanje**, do 200 znakova.
- **Opcije**, od 2 do 10.
- **Kada se zatvara**: nikada, ili posle 1 dana, 3 dana, ili 1 nedelje. Zatvorena anketa prikazuje svoje konačne rezultate i prestaje da prima glasove.
- **Privatnost**: anonimna, vidljiva administratorima, ili javna.
- **Zahtevaj glas za prikaz rezultata**, što sakriva rezultate od svakog posmatrača dok ne glasaju ili dok se anketa ne zatvori.

Zatim napišite svoj komentar i objavite ga kao i obično. Ankete funkcionišu na novim komentarima i na odgovorima.

### Glasanje

Svaka osoba dobija jedan glas po anketi i može ga promeniti dok je anketa otvorena. Osim ako anketa ne zahteva glas pre prikaza rezultata,
čitaoci mogu kliknuti **Show results** da vide trenutni status pre nego što izaberu.

Privatnost se postavlja po anketi i prikazuje odmah ispod opcija, tako da glasači znaju ko može videti njihov glas pre nego što ga daju. 
Anonimne ankete (podrazumevano) prikazuju samo ukupne rezultate, i niko, uključujući administratore, ne može videti ko je za šta glasao. 
Na anketama vidljivim administratorima, administratori i moderatori mogu otvoriti **See who voted**. Na javnim anketama, to može bilo ko.

### Uključivanje

Ankete su podrazumevano isključene. Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
označite **Enable Polls**, i odaberite ko može da ih kreira:

- **Admins/Moderators Only** (podrazumevano), kada želite sami da vodite ankete.
- **Everyone**, kada želite da vaša zajednica postavlja pitanja jedni drugima.

Glasanje podrazumevano zahteva prijavljenog korisnika. Označite **Allow Anonymous Poll Votes** da omogućite glasanje svima. Da bi bilo pošteno,
anonimni glasovi su ograničeni na tri po IP adresi po anketi po satu.

Kao i svako pravilo prilagođavanja, ovo može da se primeni na ceo vaš sajt, domen ili pojedinačnu stranicu.

### Obaveštenja

Autor ankete prima obaveštenja o odgovorima kako stižu: obaveštenje, grupisano kada mnogo ljudi glasa odjednom, i dnevni email kada anketa dobije nove odgovore tog dana. Samo prvi glas se računa kao odgovor, tako da promena mišljenja ne šalje dodatna obaveštenja. Obaveštenja poštuju privatnost ankete, pa anonimna anketa samo navodi koliko je novih odgovora stiglo, nikada ko.

### Nativni mobilni SDK-ovi

Ankete nisu samo u web widgetu. Naši nativni SDK-ovi prikazuju karticu ankete, editor ankete, live rezultate i listu glasača uz prave nativne komponente, i čitaju ista podešavanja widgeta sa vaše kontrolne table. Uključite ankete jednom i one će se pojaviti na vašem sajtu i u vašim aplikacijama.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, preko Swift Package Manager-a.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, kao `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, na NPM.

iOS i Android SDK-ovi takođe mogu objaviti anketu iz vašeg UI-a. Na iOS-u to izgleda ovako:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

README-ovi za <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> i
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, i
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
obuhvataju detalje, uključujući kako da restilirate boje ankete da odgovaraju vašoj aplikaciji.

### API

Ankete su i u REST API-ju. Možete kreirati anketu zajedno sa njenim komentarom prosleđivanjem `poll` u `POST /api/v1/comments`,
ili kasnije dodati, izmeniti, zatvoriti i ukloniti jednu putem `/api/v1/polls/:commentId`. Glasovi se mogu listati, dati i ukloniti putem
`/api/v1/poll-votes`, što olakšava izvoz rezultata u tabelu ili vaš CMS. API prati ista podešavanja kao widget, a pojedinačni glasovi na anonimnim anketama ne mogu se čitati kroz njega.

### Opterećenje

Kod ankete se ne učitava osim ako su ankete omogućene, pa ne usporava widget komentara za druge korisnike.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">The Live Polls guide</a> pokriva omogućavanje anketa,
ko može da ih kreira, anonimne glasove, privatnost glasača, obaveštenja i API.

### Isprobajte

Postoji live anketa na <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls demo</a>. Glasajte
na njoj, otvorite stranicu u drugom tabu i posmatrajte kako se rezultati pomeraju. Takođe možete objaviti svoju anketu tamo.

### Zaključak

Ako vaše niti stalno postaju brojanje glava, isprobajte ankete i javite nam dole šta biste želeli da vidite sledeće.

Živeli!

{{/isPost}}

---