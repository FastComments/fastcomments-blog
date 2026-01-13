---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migration Completed[/postlink]

{{#unless isPost}}
I forberedelse til det næste årti af udvikling, har vi migreret en af de største FastComments-komponenter til TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Sprog

### Hvad er Nyt

Hos FastComments værdsætter vi statisk typede sprog. Mere specifikt, kan jeg godt lide decent typesystemer med hurtige compilere. FastComments begyndte vi med sidstnævnte - eller ingen compiler. Mens vi havde to tjenester skrevet i moderne Java inden for det første år, blev de vigtigste backend- og frontend-biblioteker skrevet i CJS JS, der kørte på Node.

I forberedelse til det næste årti af udvikling, har vi migreret de største FastComments-komponenter til TypeScript.

Dette involverede migrering af over 130k linjer kode (100k af det er backend) på tværs af 1441 filer og rettelse af over 8000 compile-fejl.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

Dette blev gjort over to uger.

### Kodefrysning - Tak

Jeg vil gerne takke vores kunder for at håndtere eventuelle forsinkelser i fejlrettelser eller funktionsudgivelser, mens vi gennemførte en to ugers kodefrysning for at afslutte denne opgradering. Tak!

### Fejlrettelser

Som du kan forestille dig, har vi rettet en håndfuld fejl. Disse var for det meste relateret til spam-detektion og caching. 

### Brydende Ændringer

- Alle API-endepunkter returnerer nu status: 'failed' i stedet for en blanding af "failed" og "failure" som statusværdier. "success" forbliver uændret.
- Vi vil ikke længere som standard bruge den første widgetkonfiguration, hvis der ikke er et match, i stedet vil vi returnere den standard systemkonfiguration.

### Hvordan Var Det?

Vi fandt, at mange af værktøjerne i NPM-økosystemet, der skulle hjælpe med denne opgave, ikke fungerede særlig godt, som sædvanligt. Så vi brugte LLM'er til at generere scripts til at udføre en stor del af arbejdet. For eksempel, vi gjorde flittig brug af JSDoc, så vi kunne skrive scripts til at tage JSDoc og konvertere dem til typescript-grænseflader og type-definitioner og korrekt annotere funktionsargumenter og returtyper. Vi brugte også disse scripts til at migrere fra CJS til ESM, hvilket inkluderede omskrivning af imports, exports og detektering af almindelige runtime-problemer som `__dirname`.

Nævnede jeg runtime-problemer?

### Hvordan er TypeScript i 2025?

TypeScript er et dejligt sprog til at skrive forretningslogik. Men, Java har stadig bedre DevEx. Hvis Java, Go, eller Rust kompilerer, vil det sandsynligvis også fungere. Med TypeScript kan jeg gøre noget som:

    console.log(__dirname);

... og dette vil kompilere.

Men det vil ikke køre med moderne es-moduler. Din IDE vil endda gerne autocompletete `__dirname`, og så vil det bryde sammen ved runtime. Det føles som Spring DI, men værre.

Du kan også gøre ting som:

    context.someImportantMethodToCall;

Nu er dette en "udtalelse". Det er en gyldig "udtalelse". Ved første øjekast kunne du tænke, at vi kalder `someImportantMethodToCall`, men det gør vi ikke! Min IDE, i det mindste, advarer ikke om dette, og det samme gør compiler'en ikke. Koden vil bare ikke gøre noget (medmindre `someImportantMethodToCall` er en klassens `getter`, i hvilket tilfælde den implicit bliver kaldt...)

Løsningen er:

    context.someImportantMethodToCall();

Jeg tror, du sandsynligvis kan detektere dette med noget som eslint og en "no no side-effects" regel, men så trækker du en anden stor samling biblioteker ind for at holde dem opdaterede, og så skal eslint parse hele din kodebase ved hver build, værktøjerne er langsomme, og så videre - nej tak. Den produktivitetspåvirkning, vi har oplevet ved at håndtere langsomme værktøjer som eslint, har været mere betydningsfuld i min karriere i tidligere jobs end den produktivitets "boost", jeg nogensinde har fået fra de små ting, eslint retter/forhindrer med spacing osv. Der kommer nu hurtigere alternativer, hvilket er fantastisk.

TypeScript er virkelig dejligt på grund af sprogfunktioner som `Pick<User, 'username', 'email'>`. Dette, kombineret med type-inferens, giver en måde at have typesikre forespørgselsresultater fra databasen for delmængder af større objekter uden at skulle definere en klasse for hver form. `Pick` er noget, jeg er overrasket over, at Scala ikke har. Typeunioner er også virkelig dejlige.

Inkrementelle builds fungerer også rimeligt godt, vi har kun øget vores byggetider i CI med omkring 5 - 10 sekunder i gennemsnit, for at bygge det delte bibliotek, frontend og backend.

### Udviklings Tidslinje

For dem der er nysgerrige, her er vores progression:

- Dag Ét: Fundet 5564 fejl i 362 filer.
- Dag To: Fundet 4034 fejl i 239 filer.
- Dag Tre: Fundet 3784 fejl i 191 filer.
- Dag Fire: Fundet 2974 fejl i 169 filer.
- Dag Fem: Fundet 3000 fejl i 171 filer.
- Dag Seks: Fundet 2916 fejl i 165 filer.
- Dag Syv: Fundet 2618 fejl i 157 filer.
- Dag Otte: Fundet 2253 fejl i 109 filer.
- Dag Ni: Fundet 1605 fejl i 69 filer.
- Dag Ti: Fundet 686 fejl i 53 filer.
- Dag 11: Backend Unit Tests Bestået
- Dag 12: Begyndte at migrere frontend, 3118 fejl.
- Dag 13: Fundet 2172 fejl.
- Dag 14: Fundet 1224 fejl.
- Dag 15: Fundet 498 fejl.
- Dag 16: Alle compile-fejl rettet.
- Dag 17: Udgivet. E2E tests bestået. 30 minutters nedetid under uventede runtime-problemer. :)

### Fremtiden

Vi gjorde dette for at støtte udviklingen det næste årti. Systemet er nu stort nok til, at det er hurtigere at udvikle med et typesystem end uden.

Du kan også forvente, at vores TypeScript-bibliotek på NPM vil forbedres, som det allerede er begyndt på, da vi nu bruger dette bibliotek i vores server- og klientkode.

Vi vil også snart udgive genererede klient-SDK'er direkte fra serverkoden, hvilket var en primær motivation bag denne indsats.

### Afslutning

Som med alle større udgivelser, er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive disse ændringer. Lad os vide nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---