---
[category:Features]
###### [postdate]
# [postlink]Kommentatorer kan nu fjerne deres kommentarer[/postlink]

{{#unless isPost}}
En meget ventet opdatering, du kan nu slette dine kommentarer, som du har efterladt med FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

#### Hvad er nyt

Som for nylig annonceret - kommentarer efterladt med FastComments kan nu redigeres - uanset om du er logget ind eller ej.

<img src="images/fc-deleting-demo.gif" alt="Deleting Demo GIF (11mb)" title="Deleting Demo" />

Som en opfølgning er evnen til at slette dine kommentarer blevet frigivet. Forståeligt, ligesom redigering af kommentarer, har det været en af vores mest efterspurgte funktioner, og vi er glade for at nå dette mål med vores brugere.

#### Hvordan det fungerer

Fjernelse af kommentarer fungerer på samme måde som redigering - loggede brugere kan altid redigere og slette deres kommentarer. For anonyme kommentatorer giver vores servere et midlertidigt 24-timers vindue til at redigere eller slette deres kommentar efter
kommentering, så længe de ikke lukker deres browser. For eksempel betyder dette, at en anonym kommentator kan kommentere og derefter redigere deres kommentar for at rette eventuelle skrivefejl eller slette den, uden nogensinde at logge ind!

Hvis den anonyme kommentator lukker deres browser, vil de ikke kunne redigere eller slette deres kommentar, medmindre de klikker på det magiske link sendt til deres e-mail.

For ekstra sikkerhed vil den midlertidige redigeringsnøgle blive ugyldiggjort ved ethvert forsøg på at gætte nøglen forkert.

#### Hvorfor nu, efter så lang tid?

Rationalet for dette er det samme som for, hvorfor redigering tog så lang tid at blive frigivet. Vi ønskede at sikre, at dette ikke nedsatte ydeevnen for FastComments og ønskede at sikre, at det fungerede korrekt med vores live kommentarfunktioner. Desuden ønskede vi, at funktionen skulle imødekomme vores kunders mest almindelige brugstilfælde - anonyme kommentarer.

#### Sletning af live kommentarer

Ligesom at kommentere og stemme - sletning sker live. Hvis to brugere er på samme side, og en bruger sletter deres kommentar, vil den anden bruger se, at den bliver fjernet.

#### Aktivering af kommentar fjernelse

Vi har afsluttet udrulningen af kommentar redigering og sletning som standard for alle vores kunder. Lige nu kan det ikke slås fra.

#### Tredjepartsintegrationer

Sletning af en kommentar vil få begivenheden til at propagere til alle integrationer, du har - såsom WordPress. Hvis du bruger vores WordPress-plugin, så opdaterer tilføjelsen af en kommentar din WordPress-installation i baggrunden, så du bevarer en kopi af dine data. Hvis du fjerner kommentarer, følger vi den samme logik og fjerner den fra din WordPress-installation. Dette gælder for andre integrationer, ikke kun WordPress.

#### Afslutningsvis

Vi ved, at denne funktion har været længe ventet af nogle. Som med alle store udgivelser, er vi glade for, at vi kunne tage os tid til at optimere, teste og ordentligt frigive denne funktion.

Skål!

{{/isPost}}