---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Det hurtige kommentarers automatiske routings transport system[/postlink]

{{#unless isPost}}
Præsenterer det hurtige kommentarers automatiske routings transport system!
{{/unless}}

{{#isPost}}

## Introduktion

Det hurtige kommentarers automatiske routings transport system (FARTS) er vores transport- og servicelag. FARTS hjælper med trafikpropper, ruting
trafik baseret på brugerens placering og potentielt belastning i fremtiden. Det består af flere forskellige systemer, et geo-bevidst DNS-lag, en DB proxy, DB
replikation, SSL certifikathåndtering, reverse proxy og CDN, der bruger en on-disk LRU cache til at cache aktiver ved kanten. Systemet understøtter både stille og højlydt failover-tilstande.
Stille er foretrukket i produktion.

## Aktiv-Aktiv

Den seneste version af FART indeholder et indbygget proxy- og replikationslag til vores database. Dette gør det muligt for FastComments at være Aktiv-Aktiv
med global skrivekapacitet, hvilket gør det muligt for vores FARTS at være endeligt konsistente. [Flere detaljer her](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

En tilgang, vi rent faktisk tog tidligt, var at se, om vi kunne lave en gaffel af MongoDB. En af vores ingeniører (Sloperators) var i stand til
faktisk at opnå dette med Opus 4.6, men vi besluttede, at risikoen ved at gøre dette var højere end at bygge vores eget isolerede system.

Det sidste, du ønsker med noget som FART, er at vide, at det er ankommet, men du kan ikke spore kilden. Vi har tilføjet overvågning og diagnostik
til at overvåge den aktiv-aktiv replikation på et granulært niveau.

## Rust i skala

En del af motivationen for at skabe FART var at erstatte nogle eksisterende tjenester skrevet i Java. Efter at have gennemtænkt det i et stykke tid, besluttede vi at konsolidere disse til én Rust
tjeneste for at mindske runtime-overhead. Dette var et acceptabelt kompromis, da vi ikke ofte deployerer FART. FART er kompileret med LTO, så vi kan virkelig lade det køre.

Vi havde brugt meget tid på at tune det gamle Java-system med forskellige GC'er osv., og besluttede til sidst, at async Rust + Mimalloc ydede betydeligt
bedre på det samme hardware med meget lavere hukommelseskrav, så det var en no-brainer at skifte.

## FART Master

Hver deployment indeholder sin egen FART Master. Masteren er ansvarlig for at orkestrere crons, webhooks osv.

## Kundeindvirkning

FART-systemet har været i produktion i omkring et år nu. Først for nylig gjorde vi migreringen til den Aktiv-Aktiv deployment. Det nye
system giver os øget synlighed i latens på tværs af systemet samt en lavere vedligeholdelsesbyrde, så vi nu kan bruge mere tid på funktioner.

FART arbejder stille i baggrunden, men dets tilstedeværelse mærkes altid. Vi håber, at du finder, at vores systemer er hurtigere til dine brugssituationer (for det meste brugers handlinger, der resulterer i ændringer i data, vil være hurtigere i nogle regioner).

## Deployments

Deployment bruger det samme globale orkestreringssystem, vi bruger til at deployere selve tjenesterne. FARTS-dokumentationen anbefaler, at sloperators aldrig stoler på en deployment, altid verificerer payloaden før frigivelse.

Post deployment FART-advarsler følger en eskaleringspolitik: først rummet, så etagen, så bygningen.

## Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og ordentligt frigive denne ændring. Vi er begejstrede for, hvad der kommer ned ad pipeline.
Det hurtige kommentarer bør skaleres bedre og have bedre oppetid på lang sigt med dette arbejde. Som FART-handbogen siger: "Hvis du lugter noget, sig noget". Lad os vide det nedenfor, hvis du opdager eventuelle problemer.

{{/isPost}}