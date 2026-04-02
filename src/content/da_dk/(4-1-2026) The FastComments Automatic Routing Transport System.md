---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Det automatiske routing transport system fra FastComments[/postlink]

{{#unless isPost}}
Præsenterer det automatiske routing transport system fra FastComments!
{{/unless}}

{{#isPost}}

## Introduktion

Det automatiske routing transport system fra FastComments (FARTS) er vores transport- og servicelag. FARTS hjælper med overbelastning, ruter
trafik baseret på brugerens placering og potentielt belastning i fremtiden. Det består af flere forskellige systemer, et geo-bevidst DNS-lag, en DB-proxy, DB
replication, SSL cert management, reverse proxy, og CDN der bruger en on-disk LRU cache til at cache aktiver ved kanten.

## Aktiv-Aktiv

Den nyeste version af FART indeholder et indbygget proxy- og replikationslag til vores database. Dette gør det muligt for FastComments at være Aktiv-Aktiv
med global skrive tilgængelighed, hvilket sikrer, at vores FARTS er til sidst konsistente. [Flere detaljer her](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

En tilgang, vi faktisk tog tidligt, var at se, om vi kunne skabe en aktiv-aktiv forgrenings af MongoDB. En af vores ingeniører (Sloperators) lykkedes faktisk med dette med Opus 4.6, men vi besluttede, at risikoen ved at gøre dette var højere end at bygge vores eget isolerede system.

## Rust i skala

En del af motivationen for at skabe FART var at erstatte nogle eksisterende tjenester skrevet i Java. Efter at have overvejet det i et stykke tid, besluttede vi os for at konsolidere disse til en Rust-tjeneste for at mindske runtime overhead. Dette var et acceptabelt kompromis, da vi ikke ofte implementerer FART. FART kompileres med LTO, så vi kan virkelig lade det køre.

Vi havde brugt meget tid på at forsøge at optimere det gamle Java-system med forskellige GCs osv., og endte med blot at beslutte, at async Rust + Mimalloc ydede betydeligt
bedre på det samme hardware med langt lavere hukommelseskrav, så skiftet var en no-brainer.

Rust viste sig at være virkelig godt til netværksrelateret kode, der bruger delte heaps og låse. Det er dog ikke uigennemtrængeligt for runtime-problemer.
Det er måske værd at nævne, at kode skrevet af LLM'er i Rust er ret tilbøjelig til deadlocks, og en måde at komme rundt om det på er at designe systemer som letforståelige tilstands-maskiner i stedet for blot bunker af async/await.

## FART Master

Hver implementering indeholder sin egen FART Master. Masteren er ansvarlig for at orkestrere crons, webhooks og så videre.

## Kundeimpact

FART-systemet har været i produktion i omkring et år nu. Først for nylig gjorde vi migreringen til den Aktiv-Aktiv implementering.
Der er en vis indvirkning ved at læse dine egne skriverier på tværs af regioner, hvilket er dækket i det ovenfor linkede blogindlæg og [i dokumentationen](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART arbejder stille i baggrunden, men dens tilstedeværelse mærkes altid. Vi håber, at du finder vores systemer hurtigere til dine brugsscenarier (for det meste brugerhandlinger, der resulterer i ændringer i data, vil være hurtigere i nogle regioner).

## Implementeringer

Implementeringen bruger det samme globale orkestreringssystem, som vi bruger til at implementere selve tjenesterne. FART-dokumentationen anbefaler, at Sloperators aldrig stoler på en implementering, altid verificerer payloaden, før de frigiver.

Efter implementering følger FART-alarmene en eskalationspolitik: først rummet, så etage, derefter bygningen.

## Afslutning

De siger, at internettet er en række rør, men det er faktisk en række fis.

Ligesom alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne ændring. Vi er spændte på, hvad der kommer i røret.
FastComments burde skaler bedre og have bedre oppetid i det lange løb med dette arbejde. Som FART-runbooken siger: "Hvis du lugter noget, så sig noget". Lad os vide nedenfor, hvis du opdager nogen problemer.

{{/isPost}}