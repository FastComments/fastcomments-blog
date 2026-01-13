---
[category:Performance]
###### [postdate]
# [postlink]FastComments Opgraderet til HTTP/2[/postlink]

{{#unless isPost}}
Vi har foretaget nogle infrastruktur-opgraderinger, der forbedrer ydeevnen af FastComments endnu mere!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk fagterminologi

### Hvad er nyt

Siden lanceringen har FastComments været på HTTP/1.1. For nylig har vi skiftet vores hele infrastruktur
i alle regioner til HTTP/2.

### Påvirkning

Denne opdatering holder FastComments opdateret med moderne standarder, mens den leverer nogle
ydelsesforbedringer. Ulempen er, at nogle ældre browsere ikke længere understøttes.

### Forældede browsere og klienter

Du kan finde [understøttede browsere her](https://caniuse.com/http2). Hovedproblemet vil være IE11, som
kun har delvis understøttelse, men disse brugere bør skifte til Edge.

Chrome, Firefox og andre har understøttet HTTP/2 i årevis, så vi anser det for sikkert at foretage denne ændring.

### Ydelsesfordele

FastComments er allerede ret optimeret med hensyn til aktiver der serveres og deres rækkefølge. For eksempel
serverer kommentarsystemet kun et par anmodninger for at indlæse - den oprindelige iframe, så skriptet som inkluderer styling for at reducere antallet af anmodninger, og så
anmodningen til API'et for at få alle nødvendige oplysninger. Sammenlignet med mange andre tjenester er det ret kompakt.

Så, dette er ikke et tilfælde, hvor HTTP/2 virkelig hjælper meget. Den primære fordel ved HTTP/2 er at lave samtidige anmodninger.

Men HTTP/2 hjælper os med kompression! Headere sendes nu i et binært protokol, som
er mere kompakt, og visse plugins med mange aktiver vil indlæse meget hurtigere, da anmodningerne
kan pipelinedes parallelt.

### Afslutningsvis

Tak til vores kunder for deres tålmodighed med at implementere disse ændringer. Vi håber, I
fortsætter med at elske FastComments.

Skål!

{{/isPost}}