---
[category:Features]
###### [postdate]
# [postlink]Kommentarer Kan Nu Redigeres Med FastComments[/postlink]

{{#unless isPost}}
En meget ventet opdatering, du kan nu redigere kommentarer, der er efterladt med FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Terminologi

#### Hvad Er Nyt

Kommentarer efterladt med FastComments kan nu redigeres - uanset om du er logget ind eller ej.

<img src="images/fc-editing-demo.gif" alt="Editing Demo GIF (17mb)" title="Editing Demo" />

Forståeligt nok har det været en af vores mest efterspurgte funktioner, og vi er glade for at nå denne milepæl sammen med vores brugere.

#### Hvordan Det Fungerer

Logget ind brugere kan altid redigere deres kommentarer. For anonyme kommentatorer giver vores servere et midlertidigt 24-timers vindue for dem til at redigere deres kommentar efter at have kommenteret, så længe de ikke lukker deres browser. For eksempel betyder dette, at en anonym kommentator kan kommentere og derefter redigere sin kommentar for at rette eventuelle slåfejl uden nogensinde at logge ind!

Hvis den anonyme kommentator lukker deres browser, vil de ikke kunne redigere deres kommentar, medmindre de klikker på det magiske link sendt til deres email.

For yderligere sikkerhed vil den midlertidige redigeringsnøgle blive ugyldiggjort ved ethvert forsøg på at gætte nøgleforkert.

#### Hvorfor Nu, efter så lang tid?

Som med alle ændringer til klienten widget, skal vi være forsigtige med ikke at forøge dens størrelse. Denne funktion tilføjer betydelig størrelse til den centrale kommenteringskodebase (omkring 1kb gzippet - ca. 10% stigning). Vi ønskede at sikre, at dette ikke mindskede ydelsen af FastComments og ønskede at sikre, at det fungerede korrekt med vores live kommenteringsfunktioner. Desuden ønskede vi, at funktionen skulle imødekomme vores kunders mest almindelige anvendelsesscenarie - anonyme kommentarer.

#### Redigering Af Live Kommentarer

Præcis som kommentering og afstemning - redigering sker i realtid. Hvis to brugere er på samme side, og en bruger redigerer deres kommentar, vil den anden bruger se det opdateres.

#### Aktivering Af Kommentar Redigering

Vi har færdiggjort udrulningen af kommentarredigering som standard for alle vores kunder. I øjeblikket kan det ikke slukkes.

#### Hvad Er Det Næste?

Vi planlægger at frigive muligheden for at slette kommentarer også i en fremtidig opdatering.

#### Tredjepartsintegrationer

Redigering af en kommentar vil få hændelsen til at propagere til alle de integrationer, du har - som WordPress. Hvis du bruger vores WordPress-plugin, så opdaterer det tilføjelsen af en kommentar din WordPress-installation i baggrunden, så du bevarer en kopi af dine data. Hvis du redigerer en kommentar, følger vi samme logik og opdaterer kopien i din WordPress-installation. Dette gælder andre integrationer, ikke kun WordPress.

#### Afslutningsvis

Vi ved, at denne funktion har været længe ventet af nogle. Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion.

Skål!

{{/isPost}}