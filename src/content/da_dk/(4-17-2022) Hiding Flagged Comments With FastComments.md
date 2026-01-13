---
[category:Moderation]

###### [postdate]

# [postlink]Skjul Flagede Kommentarer med FastComments[/postlink]

{{#unless isPost}}Flagging er blevet tilføjet til FastComments. Derudover kan kommentarer skjules baseret på, hvor mange gange de er blevet flaget.{{/unless}}

{{#isPost}}

### Hvad er Nyt

Brugere kan nu flagge kommentarer med kommentartråde hostet af FastComments. Moderatori kan filtrere efter flagede kommentarer samt se, hvor mange gange de er blevet flaget.

Platformen kan også konfigureres til automatisk at skjule kommentarer, når de er blevet flaget et bestemt antal gange.

### Kommentatorens Perspektiv

Når en bruger har en gyldig session, kan de flagge kommentarer via kommentarredigeringsmenuen. 

Dette er kompatibelt med følgende sessionstyper:

- Anonyme sessioner
- FastComments.com Bruger Session (Ved brug af 3. parts cookies)
- Sikker SSO
- Enkel SSO

Flagede kommentarer vil fortsætte med at blive vist, indtil den konfigurerede flagede tærskel er nået.

### For Moderatorer

Moderatorer kan se flagede kommentarer ved at anvende `Flagged` filteret, som også er tilgængeligt direkte [her](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Derudover er antallet af gange, en kommentar er blevet flaget, synligt for moderatorer og administratorer.

Bemærk:

- Nulstilling af det flagede antal for en kommentar, der blev `Un-Godkendt` via `Un-Godkendelses Tærskel`, vil `Gen-Godkende` kommentaren.
- `Gen-Godkendelse` af en `Flaget` kommentar vil **nulstille det flagede antal**.
- Dette er en funktion, der er skabt som en bekvemmelighed.

### Konfiguration

Konfigurering af automatisk skjulning af flagede kommentarer kan gøres på [Kommentar Moderationsindstillingsside](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Eksisterende Kunder

Vi har gennemført udrulningen af denne funktion til alle eksisterende kunder på alle niveauer. Automatisk skjulning af ikke-godkendte kommentarer er ikke aktiveret for nye eller eksisterende kunder.

### Afslutning

Vi håber, at du finder dette nye sæt af funktioner nyttige og nemme at bruge. 

Skål!

{{/isPost}}