---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments er klar til rummet![/postlink]

{{#unless isPost}}
Vi har afsluttet vores aktiv-aktiv database migration, hvilket bringer ægte multi-region redundans til FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

### Hvad er nyt

Hver FastComments [point-of-presence](https://sophon.fastcomments.com/) tager nu skriver lokalt og replikerer dem asynkront til alle andre noder. Dette vil give øget holdbarhed over det tidligere system og gøre moderationsværktøjerne hurtigere for brugere i nogle regioner, med nogle kompromiser.

" klar til rummet" er lidt optimistisk, men idéen er, at vi kunne deployere FastComments til forskellige planeter, og til sidst ville systemet være synkroniseret. Brugere på Pluto ville dog skulle vente omkring en dag for at se ændringer afspejles på deres kommende fakturaside, da kun én master per region i øjeblikket kan aggregere faktureringsoplysninger.

### Nogle historiske baggrunde, hvorfor ændringen

Da FastComments oprindeligt blev lanceret, havde vi en meget typisk arkitektur. Vi havde et proxylag, et applikationslag, en database, nogle replikaer, og senere replikaer på tværs af regioner og cloud-udbydere for ekstra redundans.

Til sidst flyttede vi DB-replikaerne til alle zoner, hvor de fleste af vores brugere er, og implementerede også appen der, og skabte vores eget DNS- og proxiesystem (beskrevet i et senere blogindlæg) til at rute anmodninger til den nærmeste appnode. Dette gør læsninger hurtige, men skriver langsommere, da du nu i stedet for at vente på én HTTP-round trip til backend, venter på en HTTP-round trip til en nær node, og den node kan lave flere database-skriver tilbage til den primære. Ikke godt!

Så for at bekæmpe dette omstrukturerede vi mange områder af applikationen for at tage en `readPreference` i funktionsargumenter, så kaldere kan beslutte, hvor gamle de er okay med, at deres læsninger er, og oven i dette gjorde flere skriver (som at skrive moderatørovervågning ved moderatørhandlinger) fire-and-forget. Ikke ideelt, men det gjorde tingene betydeligt hurtigere.

Et problem, vi stødte på, mens vi kørte Mongo globalt, er netværkskløfter. Hvis nok noder bliver afskåret, stopper læsningerne, da hver node bliver usikker på, om det er acceptabelt at serve læsninger. Der er nogle måder at omgå dette på, men kanttilfælde bliver besværlige. Dette er ikke et teoretisk problem - det skete så mange gange, at vi fik 3AM-sider, så vi blev trætte af det, selv når vi forsøgte at justere Mongo til at være okay med replikerings- og valg-usikkerhed op til et minut ad gangen. Desværre var netværket fra Sao Paulo til Falkenstein, for eksempel, bare ikke særlig godt på tværs af nogle af vores hostingudbydere. Justering af trafikstyring og sådanne hjælper, men løser ikke problemet.

Den hellige gral løsning, forudsat at du er okay med visse kompromiser, er muligheden for at acceptere skriver lokalt på den node (som har anstændig hardware, RAID osv., som sandsynligvis ikke vil gå ned) og fortælle brugeren, at deres data er gemt. Du kan også i den point-of-presence stadig have en anden node som en hot-replika for holdbarhed.

Så dette er, hvad vi endte med. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore, er alle deres egne replikaer og accepterer skriver. EU-implementeringen (selvom der kun er tre PoPs) har den samme adfærd.

### Hvordan det fungerer

Nogle af dette er dækket i den foregående sektion, men TL;DR er, at det er CRDT-lite. Vi har oprettet en proxy (i Rust, fordi selvfølgelig) der sidder mellem applikationen og Mongo og gør det multi-master. Proxyen er peer-aware, håndterer checkpoints, replikation, overvågning og initial sync. Det er en multi-master erstatning for Mongos replikationssystem, inklusive for nogle DDL-kommandoer.

**Forskellen fra andre værktøjer** er, at dette **ikke** tailer oplog. Tailing af oplog, eller brug af ændringsstrømme, ville ikke fungere, fordi de kun viser dig den endelige tilstand af objektet efter skriveriet, hvilket gør det umuligt at håndtere konflikter. Du skal fange hver `$set`, `$inc` operation og replikere den operation selv.

Dette er en domænespecifik løsning. Det ville ikke fungere for alle produkter. Du kunne sige, at det er domændriven design :). Det fungerer for os, fordi vi fra starten meget forsigtigt kun `$set` de felter, vi ændrer på dokumenter - vi bruger aldrig Mongos `replaceOne`, for eksempel. Samme med tællere. Du **gør aldrig** `SET VOTES = 5`. I stedet ville du skrive `INCREMENT VOTES BY 5`, da dette tillader eventual consistency. Distribuerede låse håndteres af **don't**. Kun én node per cluster har et flag sat til at køre crons. Selvom dette måske virker begrænset, kan vi købe servere med terabytes RAM, så vi kan tage dette kompromis for at reducere risikoen og kompleksiteten.

### Læse dine egne skriver

For udviklere, der bruger API'en, skal du være i stand til at læse dine egne skriver ligesom før (lav et API-kald for at oprette en kommentar, og derefter liste kommentarer og se den nye post i den liste). **Udfordringen** er, at du ikke kan gøre dette på tværs af regioner. Hvis din backend kun kører i én region, som os-west, skal du kunne læse dine egne skriver, undtagen i tilfælde af at mellem dit skriver og dit læse, går den node ned **og** dit DNS-cache opdateres til at pege på den næste nærmeste node. Forudsat at dette ikke sker, er det pålideligt at læse dine egne skriver.

[Du kan også fastsætte, hvilken point-of-presence du rammer. Flere oplysninger her.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Test & Migration

Cirka halvdelen af koden i systemet er testværktøj, framework og tests. Alligevel var frigivelsen en smule humpet, og tog længere nedetid (1 time for EU og 20 minutter for os-global) end ønsket, men vi er glade for, at vi har passeret denne milepæl og takker for din tålmodighed!

### Afslutning & Hvad dette betyder for dig

FastComments skulle nu være hurtigere og mere holdbart end nogensinde, og nu kan vi gå tilbage til at arbejde på funktioner :)

Skål!

{{/isPost}}

---