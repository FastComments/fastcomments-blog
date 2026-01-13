---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Tilføj Live Chat til Native Applikationer Med FastComments React Native[/postlink]

{{#unless isPost}}
Efter måneder med arbejde er vi glade for at meddele, at fastcomments-react-native-sdk nu er i version 1.0 til generel tilgængelighed.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Fagsprog

### Hvad er Nyt

Hos FastComments har vi lanceret en ny måde at bygge React Native-applikationer med FastComments på. Tidligere ville du bruge vores react-native wrapper omkring
VanillaJS-biblioteket. Dette introducerede flere hukommelses- og latensproblemer på grund af behovet for en webview - en browser i din app - blot for at indlæse vores bibliotek.

Vi har nu **fuldstændig** porteret FastComments til React Native og skrevet vores egen WYSIWYG-editor for helt at eliminere behovet for webviews.

Biblioteket understøtter forskellige skins og layouts. For eksempel, her er Erebus-skin, som er en live-chat stil mørk skin:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteket er tilgængeligt [på GitHub ved FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) samt
[på NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Tilpasningsdygtig

Det nye native bibliotek er designet til at være tilpasseligt ligesom det eksisterende webbibliotek.

Du kan:

- Tilpasse alle aktiver og ikoner, som biblioteket bruger.
- Tilpasse stilen på hver komponent i biblioteket ved at sende et Styles-objekt ind fra toppen.
- Tilpasse alle oversættelser.
- Bruge en af de foruddefinerede eller fællesskabsudviklede skins.
- Bruge mange af de samme konfigurationsmuligheder, som webbiblioteket understøtter.

### Komplet Funktionsliste

Biblioteket understøtter mange ting. En ufuldstændig liste er:

- [x] Blokering
- [x] Chatreaktioner
- [x] Barnkommentarer & Svar
- [x] Tilpassede Stilarter (som typet stylesheet)
- [x] Emoticons
- [x] Flagning
- [x] Gif Browser - Med standard trending + søgemulighed. Billeder og søgning anonymiseret via proxy.
- [x] Live kommentering
- [x] Medievalg & Uploads
- [x] Native WYSIWYG-editor med billedunderstøttelse.
- [x] Notifikationsservice (få brugerens ulæste notifikationer i baggrunden for at sende til dem osv.)
- [x] Notifikationsliste (vises ved at klikke på klokken). Understøtter abonnementer.
- [x] Pagination (Knapper)
- [x] Pagination (Uendelig Rulning)
- [x] Fastgørelse af Kommentarer
- [x] Sikker, Enkel SSO, og anonym kommentering.
- [x] Flere foruddefinerede skins.
- [x] Vis/Slet Kommentarer Tænd/sluk
- [x] Tråde
- [x] Brugeraktivitet indikatorer
- [x] Afstemning

### Hvordan Det Fungerer

Biblioteket er en komplet omskrivning af FastComments-klienten i TypeScript og React Native.

### Langsigtet Plan

På lang sigt vil vi vedligeholde både VanillaJS-biblioteket og react-native biblioteket parallelt, samt eventuelle fremtidige native biblioteker, vi måtte udvikle.

### Hvad er Næste Skridt?

Vi ser frem til feedback fra brugerne og fællesskabet for at forbedre dette bibliotek over tid, ligesom vi har gjort med webøkosystemet.

### Afslutningsvis

Vi ved, at dette bibliotek har været længe ventet af nogle. Ligesom alle store udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive dette bibliotek.

Skål!

{{/isPost}}

---