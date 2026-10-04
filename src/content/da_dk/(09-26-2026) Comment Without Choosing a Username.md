[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Kommentar uden at vælge et brugernavn[/postlink]

{{#unless isPost}}
FastComments kan nu give hver ny besøgende et unikt, neutralt brugernavn, så de aldrig behøver at opfinde et. Det delte standardbrugernavn bliver heller ikke længere "optaget" af den første person, der bruger det.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Hvis dit site ikke har login, bliver en besøgende, der ønsker at efterlade en kommentar, spurgt om to ting: en e‑mail og et brugernavn.
E‑mailen er nem, men brugernavnet skal være unikt, det vil være offentligt, og de skal tænke på det med det samme.

Denne udgivelse fjerner det trin. Slå **Generate Usernames Automatically** til i din widget-tilpasning, og hver ny besøgende ankommer med et navn som `BraveOtter4172` allerede udfyldt. De kan beholde det eller skrive over det. Uanset hvad, kommer de hurtigere til kommentarfeltet.

### Sådan slår du det til

Åbn din <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
find sektionen **Anonymization**, og marker **Generate Usernames Automatically**. Der er intet andet at konfigurere.

Det fungerer med eller uden **Allow Anonymous Comments**. Hvis du stadig vil have en e‑mail fra hver kommentator, så lad anonym kommentering være slået fra. Besøgende indtaster deres e‑mail, brugernavnet håndteres for dem, og det er det. Hvis du ikke har brug for en e‑mail, så slå anonym kommentering til, så en besøgende kan kommentere uden at skrive mere end selve kommentaren.

### Hvad besøgende ser

Brugernavnsfeltet er forudfyldt med det genererede navn. Det er et almindeligt input, så enhver, der ønsker at blive kendt som noget andet, kan blot erstatte det. Intet er skjult, og intet er tvunget.

Navnene består af to ord og et tal, så de er læsbare og neutrale. Ingen ender som `user_83729`.

### Hvert navn er unikt

Et genereret navn kontrolleres mod eksisterende konti, før det tilbydes, og det reserveres til den besøgendes browsersession, så den næste besøgende ikke får det samme navn. Loggede brugere, SSO‑brugere og besøgende, der allerede har kommenteret, får aldrig et nyt navn. De beholder det, de har.

En tilbagevendende besøgende, der indtaster en e‑mail, de har brugt før, matches til deres eksisterende konto, så et andet besøg ikke skaber en ny identitet, selvom browseren blev ryddet imellem.

### Fejlrettelse - Standardbrugernavnet er nu virkelig delt

Nogle af jer har brugt **Default Username** med en værdi som "Anonymous" for at komme langt. Det havde en faldgrube. Brugernavne er unikke, så den første besøgende, der kommenterede som "Anonymous" med deres e‑mail, ejede navnet, og den næste besøgende med en anden e‑mail fik at vide, at brugernavnet var optaget.

Det er rettet. Standardbrugernavnet behandles nu som et delt visningsnavn i stedet for en identitet. Hver besøgende, der beholder det, får deres egen konto bag kulisserne, og alle vises som "Anonymous". Brugernavne, som besøgende selv indtaster, skal stadig være unikke, som før.

Hvis du indstiller begge, vinder det genererede navn.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Guiden Generer brugernavne automatisk</a>
dækker indstillingen og hvordan den interagerer med de andre indstillinger for anonym kommentering.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Guiden Standardbrugernavn</a>
dækker den delte navneadfærd.

### Afslutningsvis

Denne kom fra en kunde, der driver et site, hvor besøgende er patienter, der måske kun nogensinde vil efterlade et stykke feedback. At bede dem om en e‑mail og et unikt brugernavn var et spørgsmål for mange. Hvis en indstilling står mellem dine læsere og kommentarfeltet, så lad os vide det nedenfor.

Skål!

{{/isPost}}

---