[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments er nu endnu hurtigere[/postlink]

{{#unless isPost}}
Vi har fjernet én netværksanmodning, når kommentarswidget'en indlæses, hvilket sænker indlæsningstiderne endnu mere.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

### Hvad er nyt

Hvordan FastComments har fungeret de sidste fem år eller deromkring er, at vi indlæser et lille script, iframe'en indlæses, derefter scriptet, der inkluderer dets styling, og så en anmodning til API'en for alt, der er nødvendigt for at tegne kommentarerne. Selvom det lyder som meget, er det meget kompakt sammenlignet med de fleste systemer!

Men nu er der endda én anmodning mindre. Iframe-svaret, der leverer widget'en, indeholder også kommentarerne og alle de data, brugeren har brug for i starten, så den sidste API-anmodning er væk.

API'en forbliver vedligeholdt for bagudkompatibilitet for alle, der er afhængige af den.

### Intet at konfigurere

Der er ingen indstilling for dette og ingen version at opgradere til. Hvis du indlejrer FastComments med vores script, har du det allerede.

Din egen side påvirkes på ingen måde. Widget'en indlæses stadig i en iframe og blokerer stadig ikke dit indhold, præcis som
før.

### Hvor det ikke gælder

Et par stier bruger ikke dette, og de opfører sig præcis som de altid har gjort:

- Søgemaskinecrawlere, som allerede gengiver kommentarer direkte på siden i stedet for i en iframe
- Brugeraktivitetsfeeds og hashtagfiltrering, som læser fra forskellige endpoints

### Afslutningsvis

Vi håber, du fortsat nyder at bruge vores platform, og at de forbedringer, vi laver, tilføjer værdi. :)

Skål!

{{/isPost}}