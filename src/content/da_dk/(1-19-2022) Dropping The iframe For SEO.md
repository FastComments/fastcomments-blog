---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]At droppe iframe til SEO[/postlink]

{{#unless isPost}}
Vi har forbedret synligheden af dine kommentarer for søgemaskiner og øget sandsynligheden for, at indholdet vil blive tilskrevet din side.
{{/unless}}

{{#isPost}}

## Hvad er Nyt

Tidligere ville FastComments gengive dine kommentartråde i et iframe, når de blev gennemgået af søgemaskiner. Dette skyldes, at applikationen kræver brug af iframes til, hvordan vi bruger cookies til brugersessioner.

Dette præsenterer dog et problem for søgemaskiner, da de ikke garanterer, at indholdet i iframen vil blive tilskrevet din side.

Nu, når kommentarer gengives, vil embed-scriptet tjekke, om siden indlæses af en crawler. Hvis det er tilfældet, vil det ikke bruge et iframe!

## Hvor Mange Kommentarer Vises

Op til 2.000 kommentarer vil blive vist til søgemaskiner for en side. De vil blive sorteret baseret på din standardkonfigurerede sorteringsrækkefølge.

## Den Test Vi Udførte

Vi har sikret, at søgemaskiner nu ser hele kommentartråden for en side, og vi testede ydeevnen ved at indlæse hele kommentartråde på én gang.

## Indvirkning på Eksisterende Kunder

Hvis du er en eksisterende kunde, der bruger FastComments, er ændringen allerede anvendt på din konto, og der kræves ingen yderligere handling. Når søgemaskiner genindekserer dine sider, bør alle kommentarer på disse sider blive indekseret.

## Afslutning

Vi håber, du fandt denne opdatering og dens dokumentation nyttig. God kommentar aktivitet!

{{/isPost}}