---
[category:Features]
###### [postdate]
# [postlink]Kommentarer Kan Nu Redigeres Med FastComments[/postlink]

{{#unless isPost}}
En meget ventet opdatering, du kan nu redigere kommentarer, der er efterladt med FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Terminologi

#### Hvad er Nyt

Kommentarer efterladt med FastComments kan nu redigeres - uanset om du er logget ind eller ej.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Editing Demo"></video>

Forståeligt, har det været en af vores mest anmodede funktioner, og vi er glade for at nå denne milepæl med vores brugere.

#### Hvordan Det Fungerer

Logget ind brugere kan altid redigere deres kommentarer. For anonyme kommentatorer giver vores servere et midlertidigt 24-timers vindue til at redigere deres kommentar efter
kommentering, så længe de ikke lukker deres browser. For eksempel betyder det, at en anonym kommentator kan kommentere, og derefter redigere deres kommentar for at rette eventuelle stavefejl, uden nogensinde at logge ind!

Hvis den anonyme kommentator lukker deres browser, vil de ikke være i stand til at redigere deres kommentar, medmindre de klikker på det magiske link, der er sendt til deres e-mail.

For ekstra sikkerhed vil den midlertidige redigeringsnøgle blive ugyldiggjort ved ethvert forsøg på at gætte nøglefejl.

#### Hvorfor Nu, efter så lang Tid?

Som med alle ændringer til widget'en på klientsiden skal vi være forsigtige med ikke at øge dens størrelse. Denne funktion tilføjer betydelig størrelse til kerne kommentarer codebase (omkring 1kb gzippet - omkring en 10% stigning).
Vi ønskede at sikre, at dette ikke nedsatte præstationen af FastComments og ville sikre, at det fungerede korrekt med vores live kommentering funktioner. Desuden ønskede vi, at funktionen skulle
imødekomme vores kunders mest almindelige brugssag - anonym kommentering.

#### Redigering af Live Kommentarer

Ligesom kommentering og afstemning - redigering foregår live. Hvis to brugere er på den samme side, og en bruger redigerer deres kommentar, vil den anden bruger se det blive opdateret.

#### Aktivering af Kommentar Redigering

Vi er færdige med at rulle kommentar redigering ud som standard for alle vores kunder. I øjeblikket kan det ikke slås fra.

#### Hvad Er Næste Skridt?

Vi planlægger at frigive muligheden for at slette kommentarer i en fremtidig opdatering.

#### Tredjeparts Integrationer

Redigering af en kommentar vil få begivenheden til at udbrede sig til alle integrationer, du har - som WordPress. Hvis du bruger vores WordPress-plugin, opdaterer tilføjelsen af en kommentar
din WordPress-installation i baggrunden, så du bevarer en kopi af dine data. Hvis du redigerer en kommentar, følger vi den samme logik og opdaterer kopien i din WordPress
installation. Dette gælder for andre integrationer, ikke kun WordPress.

#### Afslutningsvis

Vi ved, at denne funktion har været længe ventet af nogle. Som alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og frigive denne funktion korrekt.

Skål!

{{/isPost}}