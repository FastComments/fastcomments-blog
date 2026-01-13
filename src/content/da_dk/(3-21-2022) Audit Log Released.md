---
[category:Security]

###### [postdate]
# [postlink]Revisionslog Udgivet[/postlink]

{{#unless isPost}}FastComments giver nu en detaljeret log over alle ændringer foretaget via platformen.{{/unless}}

{{#isPost}}

### Hvad er Nyt

Fra og med marts inkluderer FastComments nu detaljeret revision med Pro-planen, og for alle eksisterende erhvervskunder.

Alle administrative handlinger, uanset om det er dataadgang, ændring af en kommentar eller genåbning af en bruger, bliver sporet og indekseret i revisionsloggen.

### Sådan Bruger Du Det

Revisionsloggen kan tilgås ved at gå til `Manage Data` og derefter `Audit Logs`. Et direkte link er [her](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

For at komme i gang, vil du se en side som følgende:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Revisionslog" />
</div>

Herfra kan du søge efter brugernavn, ip-adresse, type af handling eller ressource.

For eksempel, filtrering efter ressource:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Revisionslog Ressourcevalg" />
</div>

Vi kan også dykke ned i detaljerne for en post i revisionsloggen og endda se det relaterede objekt, der blev ændret.

For eksempel kan vi dykke ned i en post for at udelukke en bruger:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Detaljer om Revisionslog Post" />
</div>

Her kan vi se, hvem der banned brugeren (en bruger med brugernavnet `winrid`). Vi kan se, at det er en permanent udelukkelse, og vi har også bruger-id og e-mail, der er udelukket, sammen med teksten
de blev udelukket for.

Vi kan se IP-adressen, der oprettede udelukkelsen, men den oprindelige kommentators IP-adresse er bevidst udeladt af deres privatliv.

For at se alle hændelser fra `winrid`, kan vi blot klikke på filterikonen til højre, ved siden af deres brugernavn.

### Begrænsning af Adgang

Data i revisionsloggen kan kun tilgås af brugere med `Manage Data` tilladelsen.

### Bevaring

Alle poster i revisionsloggen opbevares i to år. Revisionsloggen bliver dog ryddet, når din konto slettes.

### API Adgang

[Dokumentation for Audit Log API er her.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Du vil finde, at revisionsloggen kan
sorteres og pagineres på et par forskellige måder afhængigt af dit brugstilfælde.

### Eksisterende Kunder

Hvis du er på Pro- eller en tilsvarende plan, vil du opdage, at revisionsloggen automatisk er blevet aktiveret! Hvis du gerne vil have adgang, bedes du kontakte din supportrepræsentant.

### Hvad er Udeladt

Den eneste type ændringer, der udelades, er faktiske kommentarer og deres stemmer. Dette skyldes, at vi har fundet ud af, at vores kunder primært er interesserede i den administrative
side ved revision, og ikke nødvendigvis interesseret i at revidere, hvad folk kommenterer. Disse typer handlinger tilføjer også betydelig støj til loggen.

Men hvis dette er et krav, så kontakt os, og vi kan drøfte at aktivere dette for dig.

### Afslutning

Vi håber, at du finder dette område af vores tilbud nyttigt, at brugerfladen er nem at bruge, og at API'en er hurtig. 

Skål!

{{/isPost}}

---