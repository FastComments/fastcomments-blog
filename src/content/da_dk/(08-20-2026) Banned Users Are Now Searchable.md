[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Bannede brugere er nu søgbare[/postlink]

{{#unless isPost}}
The Banned Users page now has a search row, so you can find a ban by email, name, who issued it, or the comment that caused it.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Banned Users‑siden under **Moderate Comments** har nu en søgerække over tabellen. Indtil nu var den eneste måde at navigere i den
liste gennem **Page**‑ og **Count Per Page**‑kontrollerne, hvilket er fint når du har et dusin bans, men smertefuldt når du har flere tusinde.

Der er tre kontroller: **Search By** vælger feltet, **Match** vælger **Contains** eller **Equals**, og **Value** er det, du leder efter.

### Hvad du kan søge efter

**Search By** tilbyder fem muligheder:

- **Any Field** – søger i alt nedenfor på én gang
- **Email** – den bannlyste adresse
- **Name** – kommentatorens navn
- **Banned By** – moderatoren, der udstedte bannet
- **Banned For Saying** – teksten i kommentaren, der fik brugeren bannlyst

De sidste fire svarer til kolonnerne med samme navn i tabellen, så dropdown‑listen læser det samme som det, den filtrerer.

### Indeholder vs Er lig med

**Indeholder** finder din værdi hvor som helst i feltet. **Er lig med** matcher hele feltet.

**Indeholder** er det, du vil bruge mest af tiden. Søger du efter `bademail.com`, finder du alle bans på det domæne, inklusive
wildcard‑bannet `*@bademail.com`, fordi wildcard‑bans gemmes med deres asterisk intakt.

**Er lig med** er til når du har den præcise værdi og ikke vil have næsten‑match. Søger du efter Email `spammer@example.com` med
**Er lig med**, får du kun den ene ban og intet andet.

Begge er case‑insensitive på alle felter. Det betyder mere, end det lyder: når et ban oprettes fra en
kommentar, bliver kun domænedelen af adressen gjort småbogstaver, så et ban kan faktisk blive gemt som `MixedCase@Example.com`.
Søger du efter `mixedcase@example.com`, finder du det.

### To søgninger, du bør kende til

**Banned For Saying** søger i kommentarteksten, der udløste bannet. Hvis en bestemt sætning eller et link cirkulerer,
kan du hente alle, der blev bannet for det, i én forespørgsel.

**Banned By** søger efter moderatoren, der udstedte bannet. Hvis du vil gennemgå en specifik moderators beslutninger, eller du
introducerer en ny person og vil se, hvad de har gjort, er det kun én søgning væk.

### Det virker med sideinddeling og deling

Søgeparameteren gemmes i sidens URL, så når du bladrer gennem resultaterne, forbliver den anvendt, og du kan sende en filtreret liste til en anden
moderator ved at kopiere URL’en, på samme måde som du allerede deler moderations‑links. Starter du en ny søgning, bringes du tilbage til
første side, og **Ryd** nulstiller til den fulde liste.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Afsnittet om at bannlyse brugere i Moderationsguiden</a> dækker søgerækken i detaljer.

### Afslutningsvis

Dette kom ud af at observere, hvordan siden faktisk bliver brugt. Bans akkumuleres stille i årevis, og så en dag skal du finde et specifikt ban, og der er ingen måde at gøre det på. Nu er der.

Lad os vide nedenfor, hvis der er et felt, du gerne vil kunne søge i, som ikke er på listen.

Skål!

{{/isPost}}

---