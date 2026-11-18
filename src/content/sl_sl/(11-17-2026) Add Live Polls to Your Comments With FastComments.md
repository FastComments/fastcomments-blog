[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Dodajte žive ankete v svoje komentarje s FastComments[/postlink]

{{#unless isPost}}
Komentarji zdaj imajo živo anketo! Bralci glasujejo neposredno v niti, rezultati se v živo posodabljajo za vse na strani, ankete pa delujejo v spletnem gradniku ter v naših iOS, Android in React Native SDK-jih.
{{/unless}}

{{#isPost}}

### Kaj je novega

Ta izdaja dodaja **Live Polls**. Anketo priložimo komentarju in se prikaže znotraj njega. Bralci kliknejo možnost za glasovanje,
ne da bi zapustili nit, rezultati pa se v živo posodabljajo za vse, ki si ogledajo stran, ko glasovi prispejo. Brez osveževanja,
in nihče ne mora ročno šteti odgovorov.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Ker je anketa komentar, pogovor ostane priložen. Ljudje glasujejo, nato odgovorijo, da pojasnijo zakaj.

### Ustvarjanje ankete

Ko so ankete omogočene, urejevalnik komentarjev dobi gumb za anketo. Klik na njega odpre urejevalnik ankete pod vnosnim poljem, kjer nastavite:

- **Vprašanje**, do 200 znakov.
- **Možnosti**, 2 do 10.
- **Kdaj se zapre**: nikoli, ali po 1 dnevu, 3 dneh ali 1 tednu. Zaprta anketa prikaže svoje končne rezultate in preneha sprejemati glasove.
- **Zasebnost**: anonimna, vidna skrbnikom, ali javna.
- **Zahtevaj glas za ogled rezultatov**, kar skrije rezultate pred vsakim gledalcem, dokler ne glasuje ali anketa ne zapre.

Nato napišite svoj komentar in ga objavite kot običajno. Ankete delujejo na novih komentarjih in na odgovorih.

### Glasovanje

Vsaka oseba dobi en glas na anketo in ga lahko spremeni, dokler je anketa odprta. Če anketa ne zahteva glasovanja najprej,
bralci lahko kliknejo **Pokaži rezultate**, da vidijo stanje, preden izberejo.

Zasebnost se nastavi za vsako anketo in prikaže takoj pod možnostmi, tako da volivci vedo, kdo lahko vidi njihov glas, preden ga oddajo.
Anonimne ankete (privzeto) prikazujejo le skupne rezultate, in nihče, tudi skrbniki, ne more videti, kdo je za kaj glasoval. Pri anketah, ki so vidne skrbnikom,
skrbniki in moderatorji lahko odprejo **Poglej, kdo je glasoval**. Pri javnih anketah lahko to naredi kdorkoli.

### Vklop

Ankete so privzeto izklopljene. Odprite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Prilagoditev gradnika</a>,
označite **Enable Polls**, in izberite, kdo jih lahko ustvari:

- **Samo skrbniki/moderatorji** (privzeto), ko želite sami voditi ankete.
- **Vsi**, ko želite, da vaša skupnost postavlja vprašanja drug drugemu.

Glasovanje privzeto zahteva prijavljenega uporabnika. Označite **Allow Anonymous Poll Votes**, da omogočite glasovanje komurkoli. Da ostane pošteno,
so anonimni glasovi omejeni na tri na IP naslov na anketo na uro.

Kot vsako pravilo prilagoditve, se to lahko nanaša na celotno spletno mesto, domeno ali posamezno stran.

### Obvestila

Avtor ankete prejme obvestila o odgovorih, ko prispejo: obvestilo, združeno, ko veliko ljudi glasuje hkrati, in dnevno e-pošto, ko anketa prejme nove odgovore tisti dan. Le prvi glas šteje kot odgovor, zato sprememba mnenja ne pošlje dodatnih. Obvestila sledijo zasebnosti ankete, zato anonimna anketa
pove samo, koliko novih odgovorov je prišlo, nikoli kdo.

### Izvorni mobilni SDK-ji

Ankete niso le v spletnem gradniku. Naši izvorni SDK-ji prikažejo kartico ankete, urejevalnik ankete, žive rezultate in
seznam glasovalcev s pravimi izvirnimi komponentami ter preberejo iste nastavitve gradnika iz vaše nadzorne plošče. Vklopite ankete enkrat
in se bodo prikazale na vašem spletnem mestu in v vaših aplikacijah.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, preko Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, kot `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, na NPM.

iOS in Android SDK-ji lahko tudi objavijo anketo iz vašega lastnega UI. Na iOS izgleda takole:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

README-ji za <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> in
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, ter
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
pokrivajo podrobnosti, vključno s tem, kako preoblikovati barve ankete, da se ujemajo z vašo aplikacijo.

### API

Ankete so tudi v REST API-ju. Anketo lahko ustvarite skupaj s komentarjem tako, da pošljete `poll` na `POST /api/v1/comments`,
ali jo kasneje dodate, uredite, zaprete in odstranite z `/api/v1/polls/:commentId`. Glasove je mogoče izpisati, oddati in odstraniti z
`/api/v1/poll-votes`, kar omogoča preprost izvoz rezultatov v preglednico ali vaš CMS. API sledi istim nastavitvam kot gradnik, in posameznih glasov pri anonimnih anketah ni mogoče prebrati prek njega.

### Obremenitev

Koda ankete se ne naloži, razen če so ankete omogočene, zato ne upočasni gradnika komentarjev za druge.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">The Live Polls guide</a> pokriva omogočanje anket,
kdo jih lahko ustvari, anonimne glasove, zasebnost glasovalcev, obvestila in API.

### Preizkusite

Na <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls demo</a> je živa anketa. Glasujte
vanjo, odprite stran v drugem zavihku in opazujte, kako se rezultati spreminjajo. Tam lahko tudi objavite svojo anketo.

### Zaključek

Če se vaše niti spreminjajo v štetje glave, preizkusite ankete in nam spodaj sporočite, kaj bi radi videli naprej.

Lep pozdrav!

{{/isPost}}

---