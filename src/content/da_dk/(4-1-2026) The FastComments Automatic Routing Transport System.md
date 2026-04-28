---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Det FastComments Automatiske Routing Transport System[/postlink]

{{#unless isPost}}
Introduktion af Det FastComments Automatiske Routing Transport System!
{{/unless}}

{{#isPost}}

## Introduktion

Det FastComments Automatiske Routing Transport System (FARTS) er vores transport- og service lag. FARTS hjælper med overbelastning, ruting 
trafik baseret på brugerens placering og potentielt belastning i fremtiden. Det består af flere forskellige systemer, et geo-bevidst DNS-lag, en DB proxy, DB 
replikation, SSL certifikathåndtering, omvendt proxy og CDN, der bruger en on-disk LRU cache for at cache aktiver ved kanten.

## Aktiv-Aktiv

Den nyeste version af FART indeholder et indbygget proxy- og replikeringslag til vores database. Dette gør det muligt for FastComments at være Aktiv-Aktiv 
med global skriveadgang, hvilket sikrer, at vores FARTS er i sidste ende konsistente. [Flere detaljer her](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

En tilgang, vi faktisk tog tidligt, var at se, om vi kunne lave en aktiv-aktiv gaffel af MongoDB. En af vores ingeniører (Sloperators) var faktisk i stand til at opnå dette med Opus 4.6, men vi besluttede, at risikoen for at gøre dette var højere end at bygge vores eget isolerede system.

## Rust i Skala

En del af motivationen for at skabe FART var at erstatte nogle eksisterende tjenester skrevet i Java. Efter at have overvejet det i et stykke tid, besluttede vi at konsolidere disse i en Rust-service for at sænke runtime overhead. Dette var et acceptabelt bytte, da vi ikke deployer FART ofte. FART er kompileret med LTO, så vi kan virkelig lade det køre.

Vi havde brugt meget tid på at forsøge at justere det gamle Java-system med forskellige GCs osv., og endte med at beslutte, at asynkron Rust + Mimalloc præsterede markant 
bedre på det samme hardware med meget lavere hukommelseskrav, så det var en no-brainer at skifte.

Rust viste sig at være rigtig godt til netværksrelateret kode, der bruger delte heaps og låse. Det er dog ikke ufølsomt over for runtime-problemer. 
Det er måske værd at nævne, at kode skrevet af LLM'er i Rust er rimeligt udsat for deadlocks, og en måde at omgå det på er at designe systemer som nemme at forstå tilstandsmaskiner, i stedet for bare bunker af async/await.

## FART Master

Hver deployment indeholder sin egen FART Master. Masteren er ansvarlig for at orkestrere crons, webhooks osv.

## Kundeindvirkning

FART-systemet har været i produktion i omtrent et år nu. Først for nylig gjorde vi migrationen til den Aktiv-Aktiv deployment. 
Der er en vis indvirkning for at læse dine egne skrivninger på tværs af regioner, hvilket er dækket i den ovenfor nævnte blogpost og [i dokumentationen](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART arbejder stille i baggrunden, selvom dets tilstedeværelse altid mærkes. Vi håber, at du finder, at vores systemer er hurtigere til dine brugssager (for det meste brugerhandlinger, der resulterer i ændringer i data, vil være hurtigere i nogle regioner).

## Deployment

Deployment bruger det samme globale orkestreringssystem, vi bruger til at deploye selve tjenesterne. FART-dokumentationen anbefaler, at Sloperators aldrig stoler på en deployment, altid verificerer payloaden, før den frigives.

Efter deployment følger FART-alarmene en eskaleringspolitik: først rummet, derefter etagen, så bygningen.

## Afslutning

De siger, at internettet er en række rør, men det er faktisk en række toots.

Som med alle store udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og ordentligt frigive denne ændring. Vi er spændte på, hvad der kommer ned ad pipeline.
FastComments burde skalere bedre og have bedre oppetid på lang sigt med dette arbejde. Som FART runbook siger: "Hvis du lugter noget, så sig noget". Lad os vide nedenfor, hvis du opdager nogen problemer.

{{/isPost}}