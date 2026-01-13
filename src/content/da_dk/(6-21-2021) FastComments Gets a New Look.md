---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Får et Nyt Udseende[/postlink]

{{#unless isPost}} FastComments er blevet opdateret. Læs om opdateringen og hvordan du kan få den. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

### Et Nyt Udseende

Indtil i dag har udseendet og følelsen af FastComments kommentar-widget kun udviklet sig gradvist. I dag udgiver vi
en helt ny version!

Se sammenligningen nedenfor (træk skyderen for at sammenligne):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Eksisterende Kunder

Da mange af vores brugere tilpasser kommentar-widget'en, har vi holdt den nye UI helt adskilt. Du bør ikke se nogen
ændringer, før du er blevet migreret.

### Hvem Får Den

Nye kunder, der tilmelder sig fra i dag, vil automatisk få det nye design. Alle vores rammer, biblioteker og
plugins har modtaget opdateringer for at inkorporere den nye version af FastComments kommentar-widgeten.

### Tidligere Versions Slutdato

Vi fastsætter i øjeblikket ikke en slutdato for den tidligere version af kommentar-widgeten. Dette betyder ikke, at vi ikke
vil annoncere en i fremtiden. Når vi gør det, vil vi dog give en rimelig margen (6 - 12 måneder fra annonce til afvikling).

Vores automatiserede testsuite er blevet opdateret for at understøtte forskellige versioner af kommentar-widget'en, så den tidligere version
stadig vil modtage kontinuerlig automatiseret test.

### Mørk Tilstand & Andre Funktioner

Det nye design understøtter mørk tilstand, ligesom den oprindelige kommentar-widget. Alle funktionsindstillinger og indstillinger er blevet migreret.

I forhold til Mørk Tilstand, med den gamle kommentar-UI, blev ressourcerne til Mørk Tilstand altid inkluderet ved sideindlæsning, selvom de
ikke blev brugt. Dette var omkring 2 kb, der altid blev downloaded til klienten - selvom det ikke var nødvendigt.

Den nye version af kommentar-widget'en henter kun disse ressourcer, inklusive styling, hvis det er nødvendigt.

### Standard Avatar

Den standardavatar, der anvendes i den nye UI, er anderledes. Ved migration bliver den standardavatar, der anvendes i hele produktet i admin
dashboard og alle notifikations-e-mails, også opdateret.

### Tilpasningsregel Implikationer

Vi er opmærksomme på, at når vi laver stylingændringer til den offentligt tilgængelige kommentar-widget, kan vi bryde vores kunders
tilpasninger. Bare rolig, vi har dig dækket og har gennemgået alles tilpassede widget-styling for at sikre, at det
ikke er blevet regressivt. Men hvis du oplever problemer, så lad os det vide.

### Ydelsesimplikationer

Den samlede størrelse af kommentar-widgeten steg fra 15,4 kb til 17,4 kb. Selvom vi mener, at en let stigning i bundtstørrelsen
for hvor meget bedre UI'en ser ud, er det værd, har vi planlagt foranstaltninger for at reducere dette tilbage.

Overordnet set indlæses den nye UI hurtigere, da flere ressourcer nu er pakket sammen, hvilket resulterer i færre anmodninger.

### Sådan Migreres

#### Via Support

Tag simpelthen kontakt til din supportrepræsentant, eller start samtalen [her](https://fastcomments.com/auth/my-account/help).

#### WordPress

Hvis du kører **WordPress**, opgraderer du simpelthen til den nyeste version og opdaterer eventuel tilpasset styling, du måtte have.

#### Tilpassede Integrationer

Hvis du bruger **VanillaJS** kommentar-widget'en, skal du simpelthen ændre:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Til:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Hvis du bruger **React, Angular eller Vue** bibliotekerne, skal du simpelthen opgradere til version 2.

### Nogle Nerdy Statistiker

Fra koncept, design og implementering var dette et to måneder langt projekt, der strakte sig over **100+ filer** og
ændrede over **ni tusinde linjer af kode**.

Vi har også helt omformet vores build-system for at kunne have en delt kodebase mellem versioner af kommentar-widgeten. Dette system gør det muligt for os at bruge kompilationstid udtryk for kun at inkludere kode for den relevante version af UI'en, hvilket sænker størrelsen på widget-bundtet.

### Fremadskuende Tænkning

Det tidligere design varede fra 2019 til midten af 2021. Vi håber, at dette nye udseende bærer os længere ind i fremtiden, og vores
nye infrastruktur til at håndtere flere versioner af kommentar-UI'en vil tillade FastComments at vokse uden afbrydelse til vores
kundebase over tid.

God fornøjelse med kommenteringen!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---