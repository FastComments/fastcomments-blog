---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks Kommer til FastComments[/postlink]

{{#unless isPost}}
FastComments kan nu kalde dit API til oprettelse, opdatering og fjernelse af kommentarer.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Sprog

#### Hvad er Nyt

Med FastComments er det nu muligt at påkalde et API-endepunkt, hver gang en kommentar tilføjes, opdateres eller fjernes fra vores system.

Vi opnår dette med asynkrone webhooks over HTTP/HTTPS.

#### Hvordan man Bruger Det

Først skal du navigere til <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a>. Dette kan tilgås via Administrer Data -> Webhooks.

Derfra kan du specificere endepunkter for hver type af kommentbegivenhed.

For hver type begivenhed skal du sørge for at klikke på **Send Test Payload** for at sikre, at du har opsat din integration korrekt. Se næste afsnit, "Testning", for detaljer.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Webhooks Opsætnings Eksempel" title="Webhooks Opsætnings Eksempel" class="lozad" />
</div>

#### Testning

I <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> er der "Send Test Payload" knapper for hver
begivenhedstype (Opret, Opdater, Slet). Opret- og Opdater-begivenheder sender et dummy WebhookComment-objekt, mens testning af Slet vil sende et dummy anmodningslegeme med kun et ID.

Testen vil lave to opkald for at bekræfte svarkoden for "glad" (korrekt API-nøgle) og "ked af det" (ugyldig API-nøgle) scenarier.

Når testen sender en ugyldig API-nøgle, bør du returnere en statuskode på 401 for at testen helt kan bestå. Hvis du ikke korrekt tjekker værdien af tokenet, vil du
se en fejl som:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhooks Autentificering Testfejl" title="Webhooks Autentificering Testfejl" class="lozad" />
</div>

#### Kommentar Objekt Strukturen
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### "Opret" Begivenhed Strukturen

"opret" begivenhedens anmodningslegeme er et WebhookComment-objekt.

#### "Opdater" Begivenhed Strukturen

"opdater" begivenhedens anmodningslegeme er et WebhookComment-objekt.

#### "Slet" Begivenhed Strukturen

"slet" begivenhedens anmodningslegeme er et WebhookComment-objekt, **men kun indeholdende id**.

#### Hvorfor bruger Opret og Opdater begge HTTP PUT og ikke POST?

**Da alle vores anmodninger indeholder et ID**, bør gentagelse af den samme Opret eller Opdater anmodning **ikke skabe nye objekter på din side**. Dette betyder, at disse opkald er idempotente og bør være
PUT-begivenheder i henhold til HTTP-specifikationen.

#### Hvordan Det Virker

Alle ændringer til Kommentar-objektet i systemet udløser en begivenhed, der ender på en kø. Du kan overvåge denne kø i <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhooks admin</a> i tilfælde af,
at dit API går ned. Hvis en anmodning til dit API fejler, vil vi genopkø til den på et tidsplan. Denne tidsplan er 1 minut * antallet af forsøg. Hvis opkaldet fejler én gang, vil det prøve igen om et minut. Hvis det fejler to gange, vil det vente to minutter, og så videre.
Dette er for at sikre, at vi ikke overbelaster dit API, hvis du oplever belastningsrelaterede problemer.

#### Sikkerhed & API Token

I anmodningsoverskriften sender vi din <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> i parameteren kaldet "token".

Hvis du ikke korrekt tjekker denne parameter, vil din integration ikke blive markeret som Verificeret. Dette er en sikkerhedsforanstaltning for at sikre, at alle integrationer med FastComments er sikre.

#### Afslutning

Vi håber, at du finder FastComments Webhook integrationen let at forstå og hurtig at opsætte.

Hvis du har yderligere spørgsmål, er du velkommen til at kontakte <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kundesupportsiden</a>.

Skål!

{{/isPost}}