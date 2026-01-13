---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Annoncering af FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments bruger nu flere heuristikker, når det bestemmer, hvad der er og hvad der ikke er spam.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Fra den 16. november 2023 er FastComments begyndt at udvide, hvordan det bestemmer brugeres pålidelighed
for at reducere frustrationen ved at håndtere spamfiltre.

### Indvirkning på Brugere

Hvis du har været medlem af et eksisterende site i lang tid, og dine kommentarer er blevet fanget
af spamfilteret, så er denne ændring for dig.

Vi har haft adskillige rapporter om brugere på sites, der gør ting, som spamfiltre ikke kan lide, som at dele mange links osv., og disse
kommentarer ender i spam og bliver enten blokeret eller venter på moderatorens godkendelse afhængigt af siteopsætningen.

### Indvirkning på Siteadministratorer og Moderators

1. Du kan se færre kommentarer, der automatisk er markeret som spam fra dine mest aktive brugere.
2. Dette ændrer ikke spamdetektionen baseret på ord/udtryk blacklisten. Forbannet sprog og filtrerede sætninger vil stadig medføre, at kommentarer går til spam, hvis du har denne opsætning.

Tillidsfaktoren i sig selv er ikke i øjeblikket synlig for siteadministratorer eller moderators, men
dette er noget, vi vil udforske i fremtiden.

### Hvordan Tillidsfaktor Beregnes

Tillidsfaktor er et nummer fra `0` til `100` og opretholdes på et per-site basis.

Følgende variabler bruges til at bestemme tillidsfaktoren:

- Alderen på interaktionen med sitet.
- Antallet af godkendte kommentarer.
- Antallet af fastnede kommentarer.

Hvis du har været medlem af et site i over seks måneder, og du har efterladt over 50 godkendte kommentarer,
vil du have en perfekt tillidsscore på `100`.

Ellers er formlen som følger og vil udvikle sig over tid:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Hvor:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Du vil bemærke `* 20` her - fastnede kommentarer har en høj vægt. Hvis moderatorer fastsætter
dine kommentarer, betragtes du sandsynligvis som en ret betroet bruger.

### Til Udviklere & Gotchas

I API'en har `UserBadgeProgress` nu `autoTrustFactor` og `manualTrustFactor` eksponeret.

`autoTrustFactor` beregnes af os og kan ikke skrives via API'en.

Hvis du gerne vil konfigurere tillidsfaktor selv, kan du definere `manualTrustFactor`. Systemet
vil så bruge denne værdi i stedet, og vi vil fortsætte med at opretholde `autoTrustFactor` værdien separat.

### Misbrug af Tillidsfaktor

Som med alle ting forventer vi, at dette bliver misbrugt. Folk vil opbygge relationer med et fællesskab og derefter bruge
kontoen til at poste spam. Vi mener dog, at med fornuftige standardindstillinger (seks måneder, 50+ kommentarer) sætter vi barren
højt nok til, at dette ikke er det værd for de fleste spammere. Når de begynder at poste spam, kan deres konto straks
blive bandlyst af moderatorer. I fremtiden kan vi også lade moderatorer justere tillidsfaktoren.

### Afslutning

Som med alle større udgivelser, er vi glade for, at vi kunne tage tid til at optimere, teste og korrekt udgive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---