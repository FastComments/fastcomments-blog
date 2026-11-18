[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Tilføj Live Afstemninger til Dine Kommentarer med FastComments[/postlink]

{{#unless isPost}}
Kommentarer har nu live afstemninger! Læserne stemmer i selve tråden, resultaterne opdateres live for alle på siden, og afstemninger fungerer på tværs af web‑widgeten og i vores iOS-, Android- og React Native‑SDK'er.
{{/unless}}

{{#isPost}}

### Nyheder

Dette release tilføjer **Live Afstemninger**. En afstemning er knyttet til en kommentar og vises inde i den. Læserne klikker på en mulighed for at stemme,
uden at forlade tråden, og resultaterne opdateres live for alle, der ser siden, efterhånden som stemmerne kommer ind. Ingen genindlæsning, og
ingen behøver at tælle svarene manuelt.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Da afstemningen er en kommentar, forbliver samtalen knyttet til den. Folk stemmer, og svarer derefter for at forklare hvorfor.

### Opret en afstemning

Når afstemninger er aktiveret, får kommentarredigeringsprogrammet en afstemningsknap. Når du klikker på den, åbnes en afstemningseditor under tekstinputtet, hvor du
indstiller:

- **Spørgsmålet**, op til 200 tegn.
- **Mulighederne**, 2 til 10.
- **Hvornår den lukker**: aldrig, eller efter 1 dag, 3 dage eller 1 uge. En lukket afstemning viser sine endelige resultater og stopper med at modtage stemmer.
- **Privatliv**: anonym, synlig for administratorer, eller offentlig.
- **Kræv stemme for at se resultater**, som holder resultaterne skjult for hver bruger, indtil de stemmer eller afstemningen lukker.

Skriv derefter din kommentar og post den som normalt. Afstemninger fungerer på nye kommentarer og på svar.

### Afstemning

Hver person får én stemme pr. afstemning og kan ændre den, mens afstemningen er åben. Medmindre afstemningen kræver en stemme først,
kan læserne klikke på **Vis resultater** for at se, hvor tingene står, før de vælger.

Privatliv er indstillet pr. afstemning og vises lige under mulighederne, så vælgere ved, hvem der kan se deres stemme, før de afgiver den.
Anonyme afstemninger (standard) viser kun totalerne, og ingen, inklusive administratorer, kan se, hvem der stemte på hvad. På admin‑synlige
afstemninger kan administratorer og moderatorer åbne **Se hvem der stemte**. På offentlige afstemninger kan alle gøre det.

### Aktivering

Afstemninger er deaktiveret som standard. Åbn din <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Tilpasning</a>,
markér **Aktiver afstemninger**, og vælg hvem der kan oprette dem:

- **Kun administratorer/moderatorer** (standard), når du selv vil køre afstemningerne.
- **Alle**, når du vil have dit fællesskab til at spørge hinanden.

Stemning kræver som standard en logget bruger. Markér **Allow Anonymous Poll Votes** for at lade alle stemme. For at holde det retfærdigt,
er anonyme stemmer begrænset til tre pr. IP-adresse pr. afstemning pr. time.

Som enhver tilpasningsregel kan dette anvendes på dit hele site, et domæne eller en enkelt side.

### Notifikationer

Forfatteren af en afstemning får besked om svar, efterhånden som de kommer ind: en notifikation, grupperet når mange mennesker
stemmer på én gang, og en daglig e‑mail når afstemningen har fået nye svar den dag. Kun den første stemme tæller som et svar, så
nogen der skifter mening sender ikke flere. Notifikationerne følger afstemningens privatliv, så en anonym afstemning
kun angiver hvor mange nye svar der er kommet, aldrig hvem.

### Native Mobile SDK'er

Afstemninger er ikke kun i web‑widgeten. Vores native SDK'er gengiver afstemningskortet, afstemningseditoren, de live resultater og
vælgerlisten med rigtige native komponenter, og de læser de samme widget‑indstillinger fra dit dashboard. Aktivér afstemninger én gang,
og de vises på dit site og i dine apps.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, via Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, som `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, på NPM.

iOS- og Android‑SDK'erne kan også poste en afstemning fra din egen UI. På iOS ser det sådan ud:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

README'erne for <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> og
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, samt
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>,
dækker detaljerne, inklusive hvordan du restyler afstemningsfarverne så de matcher din app.

### API'en

Afstemninger er også i REST‑API'en. Du kan oprette en afstemning sammen med dens kommentar ved at sende `poll` til `POST /api/v1/comments`,
eller tilføje, redigere, lukke og fjerne en senere med `/api/v1/polls/:commentId`. Stemmer kan listes, afgives og fjernes med
`/api/v1/poll-votes`, hvilket gør det enkelt at eksportere resultater til et regneark eller dit eget CMS. API'en følger
de samme indstillinger som widgeten, og individuelle stemmer på anonyme afstemninger kan ikke læses gennem den.

### Overhead

Afstemningskoden indlæses kun, når afstemninger er aktiveret, så den nedsætter ikke hastigheden på kommentar‑widgeten for andre.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Live Polls‑guiden</a> dækker aktivering af afstemninger,
hvem der kan oprette dem, anonyme stemmer, vælger‑privatliv, notifikationer og API'en.

### Prøv det

Der er en live afstemning på <a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls‑demoen</a>. Stem
på den, åbn siden i en anden fane, og se resultaterne bevæge sig. Du kan også poste din egen afstemning der.

### Afslutningsvis

Hvis dine tråde konstant bliver til optællinger, så prøv afstemninger og lad os vide nedenfor, hvad du gerne vil se næste gang.

Skål!

{{/isPost}}

---