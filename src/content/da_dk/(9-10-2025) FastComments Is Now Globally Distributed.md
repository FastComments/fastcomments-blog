---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Er Nu Globalt Distribueret[/postlink]

{{#unless isPost}}
FastComments har overgået til en ny arkitektur for bedre global ydeevne.
{{/unless}}

{{#isPost}}

### Nyt

Tidligere havde FastComments en meget traditionel arkitektur for en webapplikation. Vi havde vores applikationsservere, databaser og nogle andre tjenester. Dette var
duplikeret på tværs af to regioner (us-west og eu). Hvis du var i Frankrig og ønskede at se en kommentartråd til en kunde, der var hostet i vores
globale datacenter, skulle dine anmodninger gå hele vejen til us-west for kommentardataene.

Ikke længere! Nu er kommentardata og alle medieaktiver replikeret globalt for kunder i vores globale udrulning, og for kunder
i vores EU-udrulning har vi tre tilstedeværelsespunkter i EU, hvor data bliver replikeret. Dine anmodninger går til den nærmeste node i
EU.

### Sådan Fungerede Det Tidligere

Undtaget databaserne, som havde flere live-replikaer på tværs af regioner og cloud-udbydere, var alle tjenester udrullet på én instans pr. servicetype. 
Dette betød, at vi for hver region havde én applikationsserver, én pubsub-server og én medieserver. Planen var at skalere vertikalt, så længe vi kunne, da dette holdt tingene enkle. At skrive kode var let - du vidste altid, at du kunne "læse dine egne skriverier", når du ramte databasen. Infrastruktur var nemt,
bortset fra sikkerhedsopdateringer, som ville tage et minuts nedetid.

### Problemet

Problemet opstod åbenlyst, når vi ramte kapacitet. Så vi ville optimere, og til sidst skulle vi gå op i instansstørrelse for den pågældende service.

Dette begyndte at blive omkostningsmæssigt uholdbart på Linode, hvor en $144 instans er omtrent svarende, baseret på vores passmark testning, til en $20 OVH node, og selv hvis
vi skiftede hostingudbydere, ville vi have enkeltfejlspunkter overalt - og udbydere som OVH har en tendens til at have længere opløsningstid end Linode
for vedligeholdelsesproblemer.

### RiR :)

I de første par år blev PubSub og Mediatjenesterne hos FastComments skrevet i Java. Java blev valgt for at være relativt højtydende for den indsats,
der blev lagt i det, og efter mange års tuning af GC, forsøg med G1GC, Shenandoah og Z1, besluttede vi at stoppe med Java. Den hukommelsesmæssige overhead var simpelthen for meget, og da disse
tjenester var meget stagnante, når de var komplette, blegede fordelene ved Java. Desuden havde disse tjenester tendens til at skulle håndtere problemet med den "donnende strøm", hvilket betød,
at JVM'en forsøgte at håndtere peak-trafik, når JIT'en overhovedet ikke var startet endnu. Disse tjenester var prima kandidater til at skifte til C++ eller Rust.

Rust blev valgt, da vi ikke er C++-eksperter, og at lave en fejl i netkoden kunne udsætte en kundes data for en anden. Rust hjælper os med at forhindre disse typer problemer.

Vi ønskede at konsolidere disse tjenester alligevel, så selvom vi kunne have lavet *en anden* gennemgang for at optimere dem måske med GraalVM, besluttede vi at flytte til Rust og være færdige med det.

Migrationen var ikke uden problemer. Disse tjenester skal afslutte SSL, understøtte HTTP 1.1, HTTP/2 osv. De gør ting som at håndtere mange datastrømme samtidigt,
læse medier fra en edge-on-disk lru-cache, S3, databaser og kommunikere i et netværk. Java-økosystemet, Vertx og Netty, var meget gode til disse ting. Vi skubber biblioteksøkosystemet til sin grænse, og ikke at have en masse erfaring med Rust-bibliotekerne betød, at vi havde
nogle forsøg og fejl. Dette forårsagede noget nedetid, og vi undskylder for det.

Vi eksperimenterede også med forskellige hukommelsesadministratorer og endte med mimalloc til vores brugerdefinerede DNS-servere og libc til transportlaget. Vi kører ikke Nginx eller Apache, i stedet
bruger vi vores egen kombination af en brugerdefineret DNS-server, der ruter kunder globalt baseret på et in-memory indeks, der bliver genopbygget ugentligt fra Maxmind, og vores transportlag i Rust, som opretholder et netværk
med de andre transportinstanser. Transportlaget afslutter SSL, håndterer pubsub-arbejdet og er vores CDN. Fordelen ved dette er mindre overhead, når vi flytter ting mellem
tjenester, og mindre infrastruktur-overhead/abstraktion. Ulempen er synlighed, så gode målinger er vigtige.

Hvad angår den resulterende ydeevne, brugte Rust-tjenesterne cirka 10-30% af hukommelsen i forhold til Java-tjenesterne, på trods af alt vores arbejde. Jeg læser bøger som Java Concurrency in Practice for sjov, så
selvom jeg ikke er ekspert ved jeg en ting eller to om at skrive hurtige JVM-tjenester, og det var meget lettere at opnå dette med Rust. Derudover ville spikes af meddelelser til store antal
abonnenter knap registrere CPU-forbruget, når JVM-tjenesterne ville bruge 40% af deres tid i GC, på trods af at vi skrev vores kode mere som en spilmotor og mindre
som din typiske server. Jeg kan ikke sige, at jeg er en stor Rust-fan, men for tjenester der laver meget arbejde og ikke ændrer sig meget efter den indledende udvikling, er det perfekt. Vores hovedforretningslogik
forbliver i TypeScript.

### Den Nye Arkitektur

Den nye arkitektur har ikke længere nogle "kæledyr"-noder. I stedet er hver server en komplet klon med alle de samme tjenester og næsten identisk konfiguration. De kører hver især
transportlaget, DNS, applikationsserveren og en kopi af databasen. Alle noder opretholder fuld disk kryptering med automatisk oplåsning med Dropbear.

Hver server kører den routerende transport, som afslutter anmodninger og håndterer dem som enten en websocket, http-strøm eller cdn-anmodning. Disse servere forbindes til hinanden, og en given server giver et kort over det globale netværk til sin lokale DNS-server for at fortælle DNS i realtid, hvor hver live node er globalt.

Én fordel ved den nye arkitektur er redundans. Hvis en kunde i én region rammer os meget hårdt, forbliver de andre regioner online.

Applikationskoden skal nu være meget opmærksom på, hvilke forespørgsler der kan ramme den nærmeste node, eller hvilke der skal gå til den primære database, som måske er langt væk. At lave en fejl
kan drastisk nedsætte ydeevnen. Dette betyder også, at skrivninger fra nogle regioner kan være langsomme, og dette kræver omhyggelig tuning og optimering. Vi følger nu et mønster internt
i koden, hvor alle metoder, der rammer databasen, tager et readPreference-argument, så kaldere helt op til toppen skal beslutte eksplicit, hvordan de vil forespørge.

Fordelen er meget god horisontal skalering for læsninger. FastComments er meget læseintensiv, men vi må ikke glemme vores moderatorer! Moderatorer arbejder dag ud og dag ind på tværs af kloden,
og vi ønsker, at deres oplevelse forbliver god. Som en del af denne udrulning har vi arbejdet med nogle af dem for at sikre, at moderationsværktøjerne forbliver hurtige.

Vi kan også hånd-vælge hardware, hvilket er sjovt og givende. De nye servere er en blanding af i5-13500 og Ryzen 5 5600X-bokse, og EU kører på nogle ældre Xeons. I vores benchmarks var alle disse
meget hurtigere end de dyrere servere, vi tidligere har undersøgt hos andre udbydere. Ulempen er mere opsætningsarbejde, men vi har automatiseret dette, sammen med SMART diskovervågning for fejl osv.

At gøre disse typer ting betyder, at vi kan fortsætte med at tilbyde konkurrencedygtige priser.

### Udrulningen

Udrulningen i de seneste måneder, mens vi omskriver tjenesterne og skifter til nye hostingudbydere, har været bumpet, vi takker dig for din tålmodighed.

Ved den indledende udrulning viste vores målinger os en stigning i anmodninger, der tager > 100ms. Vi prøver at undgå mange anmodninger, der tager så lang tid for noget.

<div class="text-center">
    <div class="sm">Gradvis Fremskridt</div>
    <img src="images/slow-reqs.png" alt="Langsomme Anmodninger" title="Langsomme Anmodninger" />
</div>

Vi gør stadig gradvise fremskridt med at forbedre ydeevnen for nogle regioner. Tak til alle der hidtil har givet feedback.

### Overvejelser Når Du Bruger API'en

API'en forbliver stærkt konsistent - du kan læse dine egne skriverier - for at opretholde bagudkompatibilitet og holde tingene enkle for udviklere. For at tillade
udviklere at vælge ydeevne over konsistens planlægger vi at eksponere readPreference parameteren. Fordelen er, at vi muligvis også tilbyder en kredit-rabat for
disse API-opkald.

Alle de offentlige endpoints, som til at betjene den offentlige kommentardrop, læser altid fra den nærmeste (lokale) database på den pågældende node.

### Hvorfor Ikke Bare Bruge Et Regulært CDN

Kommentartrådene er ikke statiske, de er live, og at anvende en livestream over de stillestående statiske data virker heller ikke, da du når du ser en tråd som
en anonym bruger får en "anonym session". I denne anonyme session kan du gøre ting som at blokere og flagge andre brugere, og du skal vise,
om den anonyme bruger kunne lide en given kommentar, osv. Kommentartråde kan også være låst bag SSO, autentifikation eller brugergrupper.

Endelig, den slags "progressiv forbedring", hvor de dynamiske data kortlægges til de statiske data fra CDN'et giver dig en dårlig oplevelse, hvor indhold hopper rundt eller ændres efter et par sekunder.
Vi foretrækker ikke at gøre det.

### Hvem Har Mine Data Nu

Dine data er ikke længere gemt på Linode. De replikeres live mellem Hetzner og OVH med fuld disk kryptering, og al kommunikation mellem backend-servere
foregår med TLS. Vi opretholder et par legacy Linode-instanser til udgående webhook-proxyer, men ingen data eller medier forbliver gemt på Linode.

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne ændring. FastComments burde skalere bedre og have
bedre oppetid på lang sigt med dette arbejde. Lad os vide nedenfor, hvis du opdager nogen problemer.

{{/isPost}}

---