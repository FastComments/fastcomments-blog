[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Bannlyste brugere er nu søgbare[/postlink]

{{#unless isPost}}
Bannlyste brugere-siden har nu en søgelinje, så du kan finde en ban ved e‑mail, navn, hvem der udstedte den, eller kommentaren der forårsagede den.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Bannlyste brugere-siden under Moderate Comments har nu en søgelinje over tabellen. Indtil nu var den eneste måde at navigere i den liste gennem side‑ og antal‑pr‑side‑kontrollerne, hvilket er fint når du har et dusin bans, men smertefuldt når du har flere tusinde.

Der er tre kontroller: **Search By** vælger feltet, **Match** vælger Contains eller Equals, og **Value** er det, du leder efter.

### Hvad du kan søge efter

**Search By** tilbyder fem muligheder:

- **Any Field** - søger alt nedenfor på én gang
- **Email** - den bannlyste adresse
- **Name** - navnet registreret på bannet
- **Banned By** - den moderator, der udstedte bannet
- **Banned For Saying** - teksten i kommentaren, der fik brugeren bannet

De sidste fire svarer til kolonnerne med samme navn i tabellen, så rullemenuen læser det samme som det, den filtrerer.

### Contains vs Equals

**Contains** finder din værdi hvor som helst i feltet. **Equals** matcher hele feltet.

Contains er den, du vil bruge mest af tiden. Søgning på `bademail.com` finder hver ban på det domæne, inklusive wildcard‑banen `*@bademail.com`, fordi wildcard‑bans gemmes med deres asterisk intakt.

Equals er til, når du har den præcise værdi og ikke vil have næsten‑match. Søgning på Email efter `spammer@example.com` med Equals returnerer den ene ban og intet andet.

Begge er case‑insensitive på alle felter. Dette betyder mere, end det lyder: når en ban oprettes fra en kommentar, bliver kun domænedelen af adressen gjort små bogstaver, så en ban kan ægte gemmes som `MixedCase@Example.com`. Søgning efter `mixedcase@example.com` finder den.

### To søgninger, der er værd at kende til

**Banned For Saying** søger i kommentarteksten, der udløste bannet. Hvis en bestemt sætning eller et link har cirkuleret, kan du hente alle, der blev bannet for det i én forespørgsel.

**Banned By** søger efter den moderator, der udstedte bannet. Hvis du vil gennemgå en specifik moderators beslutninger, eller du introducerer nogen og vil se, hvad de har gjort, er det kun én søgning væk.

### Det fungerer med sideinddeling og deling

Søgningen gemmes i sidens URL, så sideinddeling gennem resultater bevarer den, og du kan sende en filtreret liste til en anden moderator ved at kopiere URL'en, på samme måde som du allerede deler moderations‑links. Start af en ny søgning bringer dig tilbage til første side, og **Clear** nulstiller til den fulde liste.

### Navnesøgning matcher det du ser

Et ban gemmer navnet, som brugeren havde, da du bannede dem, men tabellen viser det navn, de har nu. De er ikke altid de samme, og et ban du oprettede ved at indtaste en e‑mailadresse har slet intet navn gemt.

Derfor løser Navnesøgning brugeren bag hvert ban og matcher på det navn, tabellen faktisk viser dig. Hvis nogen blev bannet som "OldHandle" og siden har omdøbt sig til "NewHandle", finder begge søgninger dem. Hvis du bannede en adresse, og tabellen viser et navn for den, fungerer søgning på det navn.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Afsnittet om at bannlyse brugere i Moderationsguiden</a> covers the search row in detail.

### Afslutningsvis

Denne opstod ved at observere, hvordan siden faktisk bliver brugt. Bans akkumuleres stille i årevis, og så en dag har du brug for at finde en specifik, men der er ingen måde at gøre det på. Nu er der.

Lad os vide nedenfor, hvis der er et felt, du gerne vil kunne søge i, som ikke er på listen.

Skål!

{{/isPost}}

---