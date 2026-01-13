---
[category:Features]

###### [postdate]

# [postlink]Profiler, Badges og Direkte Beskeder[/postlink]

{{#unless isPost}}I denne udgivelse har vi mange funktioner, der belønner samfund, der bruger FastComments, og hjælper dem med at kommunikere.{{/unless}}

{{#isPost}}

### Hvad er nyt
FastComments har officielt udgivet Brugerprofiler og relaterede funktioner.

### Brugerprofiler

En brugers profil består af deres navn, om de er online, deres seneste aktivitet og et sted at kommentere på deres profil.

Deres badges og fremgang med at tjene badges vises også her.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Brugerprofil" title="FastComments Brugerprofil"></video>
</div>

Brugere kan se deres egen profil ved at klikke på deres avatar i en kommentartråd eller [gå til deres konto side](https://fastcomments.com/auth/my-account).

Derudover kan du sende direkte beskeder til en bruger fra deres profil.

### Brugerprofil Modal
Når en brugers avatar er valgt, vil Profil Modal åbne. Dette er også blevet tilføjet for moderatorer til Kommentar Moderation siden.

### Belønning af Brugere med Badges

Badges er en anden nylig tilføjelse til FastComments, der giver dig mulighed for at belønne brugerne i dit samfund. At oprette et badge er let:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Opret et Badge" title="Opret et Badge" />
</div>

Badges kan tildeles baseret på følgende betingelser:

- Antal Kommenterer
- Antal Op- Stemmer Tjent
- Antal Modtagne Svar
- Antal Pinned Kommentarer
- Veteran (tid siden første kommentar)
- Kommentere Sent Om Natten
- Hurtig Svar Tid
- Svar på Specifik Side
- Moderatorer - Antal Slettede Kommentarer
- Moderatorer - Antal Godkendte Kommentarer
- Moderatorer - Antal Ikke Godkendte Kommentarer
- Moderatorer - Antal Gennemgåede Kommentarer
- Moderatorer - Antal Markeret Spam Kommentarer
- Moderatorer - Antal Markeret Ikke Spam Kommentarer

Som du kan se, er der mange typer situationer, vi kan belønne brugere for.

Vi kan definere flere *niveauer* af badges. For eksempel kunne vi tilføje `Kommentar Antal` badges med tærskler på 10, 100 og 1000 kommentarer. Når brugere
interagerer i dit fællesskab, vil deres tildelte badges **stakke** over tid.

Lad os ikke glemme *Moderatorer*. I mange samfund er dette et utaknemmeligt job. Giv dine moderatorer noget at vise frem ved at konfigurere Moderator badges til dem.

Vi understøtter også et par unikke tilfælde, som `Natteugle` og `Hurtig Svar Tid` badges for at anerkende medlemmer, der er aktive sent på natten eller svarer
hurtigt. `Hurtig Svar Tid` fungerer bedst, når de live funktioner i FastComments bruges.

Når nye badges oprettes, vil de automatisk blive tilføjet til eksisterende medlemmer af dit fællesskab, der kvalificerer sig.

### Direkte Beskeder

Kunder har bedt om muligheden for at sende direkte beskeder til brugerne siden lanceringen af FastComments. To år senere er vi glade for endelig at annoncere denne funktion og takker
dem, der har ventet tålmodigt.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direkte Beskeder" title="FastComments Direkte Beskeder"></video>
</div>

Direkte beskeder giver medlemmer i et fællesskab mulighed for at sende beskeder til hinanden privat, men det fungerer også som et nyttigt værktøj for Moderatorer og Administratorer til at kontakte kommentatorer.

Ligesom det meste af FastComments er alle direkte besked funktioner live.

#### Asynkrone Direkte Beskeder

Når du sender en besked til en bruger, kan de være offline. I så fald sender vi brugeren en e-mail og lader dem vide, at de har en ny besked.

#### Direkte Beskeder Via E-mail

Når en bruger modtager en besked via e-mail, har de mulighed for at svare ved at svare på den e-mail.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-mail" title="DM E-mail" />
</div>

Når de gør det, vil deres svar vises **live** for den anden bruger i Beskeder fanen af deres profil.

### Sikker SSO

FastComments Brugerprofiler er fuldt kompatible med eksisterende sikre SSO-installationer.

Ting som brugerens privatlivsindstillinger kan også konfigureres via `isProfileActivityPrivate` flaget i SSO payload.

Som standard er `isProfileActivityPrivate` sandt.

### Eksisterende Kunder

Vi har afsluttet udrulningen af denne funktion til alle eksisterende kunder på alle niveauer.

### Konfigurere Privatliv

Ved at se din profil er der muligheder for at:

- Deaktivere kommentering på din profil.
- Forhindre at din aktivitet kan ses af andre.
- Forhindre andre i at sende dig direkte beskeder.

### Indsamlede Data

Brugerprofiler oprettes baseret på data, vi har i dag, som deres navn, hvilke kommentarer de har efterladt for nylig, og så videre.

Vi vil ikke indsamle yderligere data for at udvide brugernes profiler. Vi kan lide at tænke på Brugerprofiler som en typisk brugers profil på et forum.

### Afslutning

Vi mener, at disse funktioner i høj grad udvider FastComments som en platform, og vi håber, du finder dem nyttige og nemme at bruge.

Skål!

{{/isPost}}