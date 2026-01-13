---
[category:Features]

###### [postdate]
# [postlink]FastComments Understøtter Nu Markdown[/postlink]

En rigere kommenteringsoplevelse er kommet til FastComments med brugen af Markdown!

{{#isPost}}

Markdown er et sæt konventioner til stilisering af tekst. For eksempel, for at skabe et fedt ord kan vi \*\*gøre dette\*\*.
At indsætte normale links betyder bare at indsætte den rå URL, og billeder fungerer som før.

Her er et Markdown cheat sheet, leveret af Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Hvilken Markdown-syntax Understøtter FastComments?

Vi understøtter fuldt ud Markdown, bortset fra overskrifter. Når vi definerer en overskrift, gengiver vi den blot som almindelig tekst, da de distraherer fra samtalens flow. Overskrifter
er for indhold som blogindlæg og dokumenter - ikke samtaler.

FastComments har altid understøttet billeder via [img]...[/img] syntaksen. Dette vil fortsat være understøttet, da det er lettere at forstå end Markdowns.

### Blande indhold

En enkelt kommentar kan indeholde alle former for formatering - markdown, links, billeder, kodeeksempler og tabeller.

### Undgå XSF/XSS Angreb

Tidligere sendte FastComments almindelig tekst over netværket og parserede det på klienten. Nu sendes HTML over netværket, og vi opretholder to versioner af hver kommentar
i vores database for at støtte funktioner som redigering af kommentarer.

At sende HTML direkte til kommentarer indebærer risici - så alle genererede kommentarer bliver parseret og renset for at forhindre cross-site og cross-frame angreb.

### Dataeksporter

Når du eksporterer kommentarer, vil du få den version, som brugeren så, da de skrev deres kommentar. Hvis du vil have den rå HTML, kontakt os.

### Præstationsbekymringer

Funktionskrav har en tendens til at bremse tingene. Det er ikke, hvad vi ønsker at gøre hos FastComments.
Tilføjelsen af denne funktion har **reduceret** størrelsen af vores klientside widget med ~400 bytes - fra 9.53kb til 9.12kb - hvilket betyder hurtigere sideindlæsninger.

Mens denne funktion teoretisk kunne bremse mekanismen for gemme kommentarer, har vi ikke set nogen præstationsforringelser og holder som altid øje med vores APIs.

### Hvordan får jeg det?

Markdown understøttelse er blevet udrullet til alle vores kunder automatisk. Du bør ikke se for mange ændringer i indholdet, der postes til din side - undtagen nu kan brugere gøre tekst fed, understrege og lave nogle fancy ting
som at oprette simple tabeller.

Som med alle funktionsudgivelser ser vi frem til feedback, og mens vi har meget automatiseret testning... hvis du ser nogen problemer - lad os vide det!

God fornøjelse med kommenteringen.

{{/isPost}}