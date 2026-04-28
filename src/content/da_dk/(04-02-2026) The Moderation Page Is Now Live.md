---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Moderationssiden er nu live[/postlink]

{{#unless isPost}}
FastComments moderationsside viser nu en live notifikation, når nye kommentarer ankommer, der matcher dine nuværende filtre.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Moderationssiden har altid været et kraftfuldt værktøj til at administrere kommentarer. Du kunne filtrere efter status, søge efter tekst, filtrere efter side
eller bruger og udføre massehandlinger. Men for at se nye kommentarer måtte du opdatere siden.

Ikke længere! Moderationssiden viser nu, når nye kommentarer ankommer, der matcher dine nuværende filtre. Et banner vises øverst i kommentarlisten, der fortæller dig, hvor mange nye kommentarer der venter, og klikker du på det, indlæses de inline uden en fuld sideopdatering.

Beskeden "nye kommentarer til dine filtre" skulle i de fleste tilfælde være næsten øjeblikkelig.

### Filtreringsvurdering

Transportlaget evaluerer alle moderationsfiltre på server-siden. Dette inkluderer statusfiltre (skal gennemgås, skal godkendes, spam, flaget,
bannet), stringfiltre (bruger-ID, side-URL, domæne), og endda tekstsøgning. Citeret tekst som `"exact phrase"` udfører en
nøjagtig case-insensitiv substring-match, mens unoterede termer udfører fuzzy case-insensitive match.

Det betyder, at hvis du filtrerer efter spamkommentarer, vil du ikke blive notificeret om godkendte kommentarer. Hvis du søger efter kommentarer,
der indeholder en specifik sætning, udløser kun matchende kommentarer banneret.

### Moderationsgrupper

Hvis din konto bruger moderationsgrupper til at begrænse, hvilke moderatorer der kan se hvilke kommentarer, håndhæves disse restriktioner fuldt ud
for live notifikationer. Transportlaget kalder tilbage til applikationsserveren for at opbygge filtreringen, som inkluderer gruppebegrænsninger
baseret på moderatorens tildelte grupper. Dette filter cachen i løbet af WebSocket-forbindelsen og opdateres, når
modatoren ændrer filtre.

### Missede begivenheder

Hvis en moderators forbindelse falder midlertidigt (netværksproblemer, laptop i dvale osv.), indhenter systemet automatisk ved genforbindelse, så
du ikke går glip af noget arbejde.

### Ydelse

Vi designede denne funktion til at have minimal indvirkning på moderationssidens indlæsningstid.

### Multi-region

Denne funktion fungerer problemfrit med vores globalt distribuerede arkitektur, så globalt distribuerede moderationsteam får det samme live-view.

### Afslutningsvis

Vi håber, at denne funktion sparer moderatorer tid og gør moderationsoplevelsen mere responsiv. Som altid takker vi vores kunder for
deres feedback og støtte.

Skål!

{{/isPost}}