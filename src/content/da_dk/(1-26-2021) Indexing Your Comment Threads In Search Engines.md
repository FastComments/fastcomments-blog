---
[category:Performance]
###### [postdate]
# [postlink]Indeksering af dine kommentarthreads i søgemaskiner[/postlink]

{{#unless isPost}}
Vi har forbedret de oplysninger, som søgemaskiner ser, når de crawler dit site med FastComments.
{{/unless}}

{{#isPost}}

## Hvad er nyt

Tidligere, når søgemaskiner crawlede websider med FastComments installeret, ville de kun indeksere den første side (de øverste 30) kommentarer.

Dette var fordi, at søgemaskinerne tidligere så det samme som du gjorde, når du besøgte dit site.

Nu, når en søgemaskine besøger dit site, vil alle kommentarer blive indlæst.

## Indvirkninger på Page Rank

Moderne søgemaskiner tager mange faktorer i betragtning, når de rangerer en side, herunder relevansen af indholdet på siden i forhold til hvad du søger efter, og endda ting som
sideindlæsningstiden for den side.

Denne ændring vil betyde, at hele indholdet af dine kommentarthreads er tilgængeligt for indeksering, hvilket potentielt kan øge relevansen af søgninger. Det viser også engagement, hvilket
er noget, som søgemaskinen kan bruge til at rangere.

En mulig ulempe er ydeevnen, da vi nu indlæser flere kommentarer, men i vores test fandt vi, at det ville tage mange hundrede, hvis ikke tusinde kommentarer
i en tråd for at bremse FastComments til det punkt, hvor dette ville påvirke dine sideindlæsningstider for at medføre en rangændring.

For eksempel får vores demopage med over 100 kommentarer stadig <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">en score på 99/100 fra Googles PageSpeed Insights</a>.

## De tests, vi udførte

Vi sikrede os, at søgemaskiner nu ser hele kommentarthreadet for en side, og vi testede ydeevnen ved at indlæse hele kommentarthreads på én gang.

## Indvirkning på eksisterende kunder

Hvis du er en eksisterende kunde, der bruger FastComments, er ændringen allerede anvendt på din konto, og der kræves ikke yderligere handling. Når søgemaskinerne genindekserer dine sider
bør alle kommentarer på disse sider blive indekseret.

## Afslutning

Vi håber, at du fandt denne opdatering og dens dokumentation nyttig. God kommentar!

{{/isPost}}