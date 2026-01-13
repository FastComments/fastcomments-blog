---
[category:Features]
###### [postdate]
# [postlink]Spoiler Support Added[/postlink]

{{#unless isPost}}
Brugere kan nu tilføje spoilers i deres kommentarer, som er skjult indtil de bliver hoveret med musen.
{{/unless}}

{{#isPost}}

### Hvad er Nyt
Brugere af FastComments kan nu klikke på en "SPOILER" knap for at tilføje spoilers til deres kommentarer. De kan også skrive `<spoiler>nogle tekst</spoiler>` tags direkte, hvis de ønsker det.
Bemærk, at værktøjslinjeindstillingen for spoilers er deaktiveret som standard.

### Tænding af Spoilers

I Widget Tilpasning kan du blot aktivere `Spoilers` indstillingen og trykke på gem. Dokumentation er [her](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
Vi har aktiveret dem til dette blogindlæg for at demonstrere funktionen.

### For Udviklere & Gotchas

Den standard spoiler styling understøtter lys og mørke tilstande. Hvis du skriver brugerdefineret CSS for maskeret tekst, så husk at dække
mørk tilstand også, hvis din side understøtter det.

### Afslutning

Ligesom alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---