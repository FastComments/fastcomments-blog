---
[category:API & Development]
###### [postdate]
# [postlink]Kommentar Menu Opdatering[/postlink]

{{#unless isPost}}
Denne opdatering er primært for udviklere, der tilpasser FastComments. Vi har foretaget nogle API-ændringer og lavet nogle optimeringer.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Sprog

### Hvad er Nyt

Nogle FastComments-lejere tilpasser kommentar-widgeten. Dette skaber en kontrakt
mellem dine tilpasninger og vores implementering. Vi gør vores bedste for ikke at bryde denne
kontrakt, men som en del af denne meddelelse har vi en lille brydende ændring.

### For Udviklere

En CSS-vælger til kommentar-menuen er blevet ændret.

Gammel:

    .comment .menu .menu-content

Ny:

    .menu-content

### Eksisterende Lejere

Hvis du allerede bruger "menu-content"-vælgeren - tillykke! Vi har gennemgået alle vores
lejere, der bruger denne vælger og opdateret deres widget-konfigurationer for at forhindre brud.

Lad os vide, hvis du oplever nogen problemer.

### Begrundelse

Siden kommentar-widgeten blev oprettet, har kommentar-menuen udelukkende været en CSS-drevet dropdown. Dette
er en enkel og hurtig måde at implementere en dropdown-menu, der heller ikke kræver meget kode - et designmål
for FastComments.

Dog har den gennem årene samlet problemer.

For det første, når kommentarområdet har en specifik højde og er scrollbart, som med Streaming Chat,
er det svært at få adgang til menuen mod bunden, da menuen vil forsøge at gå ud over
det scrollbare indholdsområde. Dette gør en del af menuen usynlig og kræver, at du
bevæger musen og overfører den igen over menuen for at udføre det arbejde, du lige forsøgte at få gjort. Vi følte,
at det var frustrerende at bruge.

Nogle løsninger blev lavet, som at vende menupunktets retning **op**,
men dette fungerer heller ikke, hvis widget-højden ikke er høj nok, og der er mange handlingspunkter
i menuen - som for administratorer. I dette tilfælde ville det være ideelt at sænke menuen ned
forbi det scrollbare indholdsområde.

### Størrelsesfordele

En fordel ved denne ændring er, at vi var i stand til at abstrahere meget kode til et asynkront indlæsningsmodul. Dette vil
give os mulighed for at udvide de handlinger, du kan udføre på kommentar-data uden at gøre
den indledende indlæsning af widgeten overbelastet. Dette introducerer et netværksopkald første gang, du holder musen over
redigeringsmenuen, men den indledende pakke er meget lille (< 1kb), så dette bør ikke være meget mærkbart.

Det er meget svært at fortsætte med at udvikle software og samtidig mindske dens størrelse over tid. Normalt starter software
hurtigt og bliver langsomt. Så vi er altid glade for at arbejde hen imod at holde FastComments hurtigt:

    Før: 28.76kb gzippet (108.02kb i alt)
    Efter: 28.39kb gzippet (105.79kb i alt)

Mindre kode betyder også mindre kode for din browser at analysere ved sideindlæsning. Effekten af dette vil udvide sig, efterhånden som flere funktioner tilføjes.

### Ydelsesfordele

Den gamle menu gengav alle menupunkter og indlæste alle udvidelser for at se, om udvidelserne
hadde elementer at tilføje, og gengav dem også - for hver kommentar - så indholdet var klar til din mus.

Der er normalt kun 30 - 100 objekter, så dette plejer ikke at være et stort problem, men effekten voksede. Det nye system fjerner denne bekymring,
da menuen nu kun gengives efter behov.

Byttet er, at den nye menu er positioneret og gengivet ved hjælp af JS for at opnå det, vi ønsker. Vi vil
fortsætte med at optimere det, som vi kan, men det fungerer i øjeblikket godt.

### Afslutning

Tak til vores kunder for deres tålmodighed med at udrulle disse ændringer. Vi håber, du
fortsætter med at elske FastComments.

Skål!

{{/isPost}}

---