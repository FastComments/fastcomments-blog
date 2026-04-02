---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Moderationssiden Er Nu Live[/postlink]

{{#unless isPost}}
FastComments moderationsside viser nu en live meddelelse, når nye kommentarer ankommer, som matcher dine nuværende filtre.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Moderationssiden har altid været et kraftfuldt værktøj til at administrere kommentarer. Du kunne filtrere efter status, søge efter tekst, filtrere efter side
eller bruger og udføre massehandlinger. Men for at se nye kommentarer var du nødt til at opdatere siden.

Ikke længere! Moderationssiden viser nu, hvornår nye kommentarer ankommer, som matcher dine nuværende filtre. En banner vises øverst på kommentarliste, der fortæller dig, hvor mange nye kommentarer der venter, og ved at klikke på den indlæses de inline uden en full page refresh.

Beskeden "nye kommentarer til dine filtre" skal være næsten øjeblikkelig under de fleste omstændigheder.

### Filtrevaluering

Transportlaget evaluerer alle moderationsfiltre server-side. Dette inkluderer statusfiltre (kræver gennemgang, kræver godkendelse, spam, flagget,
forbudt), strengfiltre (bruger-ID, side-URL, domæne) og endda tekstsøgning. Citeret tekst som <div class="code">"nøjagtig sætning"</div> udfører en
nøjagtig case-insensitive substring match, mens unciterede termer gør fuzzy case-insensitive matching.

Dette betyder, at hvis du filtrerer efter spamkommentarer, vil du ikke få besked om godkendte kommentarer. Hvis du søger efter kommentarer,
der indeholder en specifik sætning, aktiverer kun matchende kommentarer banneret.

### Moderationsgrupper

Hvis din konto bruger moderationsgrupper til at begrænse, hvilke moderatorer der kan se hvilke kommentarer, håndhæves disse begrænsninger fuldt ud
for live meddelelser. Transportlaget kalder tilbage til applikationsserveren for at opbygge filteret, som inkluderer gruppebegrænsninger
baseret på moderatorens tildelte grupper. Dette filter caches i løbet af WebSocket-forbindelsen og opdateres, når
moderatoren ændrer filtre.

### Missede Begivenheder

Hvis en moderators forbindelse midlertidigt falder (netværksproblemer, bærbar computer i dvaletilstand osv.), indhenter systemet automatisk, når det genopretter forbindelsen, så
du ikke går glip af noget arbejde.

### Ydelse

Vi har designet denne funktion til at have minimal indflydelse på indlæsningstiden for moderationssiden.

### Multi-Region

Denne funktion fungerer problemfrit med vores globalt distribuerede arkitektur, så globalt distribuerede moderationsteams får det samme live-view.

### Afslutningsvis

Vi håber, at denne funktion sparer moderatorer tid og gør moderationsoplevelsen mere responsiv. Som altid takker vi vores kunder for
deres feedback og støtte.

Skål!

{{/isPost}}