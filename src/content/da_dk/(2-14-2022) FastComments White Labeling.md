---
[category:API & Development]

###### [postdate]
# [postlink]FastComments White Labeling[/postlink]

{{#unless isPost}}
White Labeling, med fuld API-integration og automatiseringsværktøjer, kommer til FastComments.
{{/unless}}

{{#isPost}}

## Hvad er nyt

FastComments kan nu integreres med andre applikationer og tredjepartsforhandlere via White Labeling. White Labeling giver dig mulighed for at oprette FastComments-konti (kaldet lejer), brugere, moderatorer og mere.

Vi tilbyder nu en [omfattende API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) til at automatisere integrationen
med tredjeparter.

Du kan nu, via API'en:

- Oprette kunder (barn lejer), der administreres af din lejer.
- Administrere pakkerne tilgængelige for dine kunder og hvordan du vil håndtere fakturering.
- Tilføje og administrere brugere i dine administrerede lejere.
- Tilføje og administrere moderatorer i dine administrerede lejere.
- Invitere moderatorer og sende log-in links til lejerbrugere.

## Fakturering

Med fakturering er der to muligheder:

1. Gennem FastComments Flex bliver brugen af dine barn lejer automatisk samlet og faktureret til den overordnede lejer. Dette kan overvåges via [Billing Analytics Page](https://fastcomments.com/auth/my-account/analytics/billing).
2. Gennem FastComments Pro får du adgang til at oprette et fast antal barn lejer til en fast månedlig pris.

## Debranding

Administrerede lejere kan få debranding aktiveret, hvilket fjerner vores logoer fra kommentarswidgeten.

## Hvordan man får White Labeling

I øjeblikket tilbyder FastComments Flex og Pro planer adgang til White Labeling API'et.

## Scripts og Eksempler

Et eksempel på et script, som bruger API'en til at opsætte en lejer med brugere og moderatorer [er tilgængeligt her](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Omfattende Validering

Hver API-ressource indeholder omfattende valideringer og begrænsninger, med nyttige fejlfindingmeddelelser, der guider dig til korrekt brug.

<div class="code"><div class="title">Detaljeret Fejl Eksempel</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "En bruger med den id findes ikke i denne lejer. Opret brugeren først og gør dem derefter til en moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Andre Anvendelsesmuligheder

API'erne for [lejerbrugere](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) og [moderatorer](https://docs.fastcomments.com/guide-api.html#moderator-structure) kan også bruges til 
at tilføje og administrere disse ressourcer i din egen lejer, uanset white labeling.

## Dokumentation

Du kan finde den fulde dokumentation om White Labeling og hvordan man bruger API'en [her](https://docs.fastcomments.com/guide-white-labeling.html).

## Afslutning

Vi håber, du fandt denne opdatering og dens dokumentation nyttig. God integration!

{{/isPost}}