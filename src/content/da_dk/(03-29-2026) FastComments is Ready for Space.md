---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments er klar til rummet![/postlink]

{{#unless isPost}}
Vi har afsluttet vores aktive-aktive database migration, hvilket bringer ægte multi-region redundans til FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

### Hvad er nyt

Hver FastComments [point-of-presence](https://sophon.fastcomments.com/) tager nu skrivehandlinger lokalt og replikerer dem asynkront til
alle andre noder. Dette vil give øget holdbarhed over det tidligere system, samtidig med at moderationsværktøjerne bliver hurtigere 
for brugere i nogle regioner, med nogle kompromiser.

"Klart til rummet" er en smule optimistisk, men ideen er, at vi kunne deployere FastComments til forskellige planeter, og til sidst ville systemet være i synk. Brugere på Pluto ville dog skulle vente omkring en dag for at se ændringer reflekteret på deres kommende fakturasierside, da kun én
master pr. region i øjeblikket kan aggregere faktureringsinformation.

### Nogle historie, hvorfor ændringen

Da FastComments oprindeligt blev lanceret, havde vi en meget typisk arkitektur. Vi havde et proxy lag, et app lag, en database, nogle replikaer, og senere replikaer på tværs af regioner og cloud-udbydere for ekstra redundans.

Til sidst flyttede vi DB-replikaer til alle zoner, hvor de fleste af vores brugere er, og deployerede også appen der, og skabte vores eget DNS- og proxysystem (beskrevet i et senere blogindlæg) for at lede forespørgsler til den nærmeste appnode. Dette gør læsning hurtig, men skrivning langsommere, da man nu i stedet for at vente på en HTTP round trip til backend, venter på en HTTP round trip til en nær node, og den node kan muligvis lave flere database writes tilbage til primæren. Ikke godt!

For at bekæmpe dette omstrukturerede vi mange områder af applikationen for at tage et `readPreference` i funktionsargumenter, så kaldere kan beslutte, hvor gamle de er okay med deres læsninger, og oven i dette gjorde vi flere writes (som at skrive moderatorstatistikker ved moderatorhandlinger) til fire-and-forget. Ikke ideelt, men det fremskyndede tingene betydeligt.

Et problem, vi stødte på ved at køre Mongo globalt, er netværksopdelinger. Hvis tilstrækkeligt mange noder bliver afskåret, stopper læsningerne, da hver node bliver usikker på, om det er acceptabelt at servere læsninger. Der er nogle måder at omgå dette på, men kanttilfælde bliver rodede. Dette er ikke et teoretisk problem - det er sket tilstrækkeligt mange gange, hvilket har forårsaget 3AM siden, at vi blev trætte af det, selv ved at forsøge at justere Mongo til at være okay med replika-sæt valg usikkerhed op til et minut fra hinanden. Desværre var netværkene fra Sao Paulo til Falkenstein, for eksempel, bare ikke særlig gode på tværs af nogle af vores hostingudbydere. Justering af trafikstyring og sådant hjalp, men løste ikke problemet.

Den hellige gral løsning, forudsat at du er okay med visse kompromiser, er evnen til at accepterer writes lokalt på den node (som har anstændig hardware, RAID, osv., der sandsynligvis ikke vil gå ned) og fortælle brugeren, at deres data er gemt. Du kan også på det punkt-of-presence have en anden node som en hot replika for holdbarhed.

Så dette er, hvad vi endte med. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore, er alle deres egne replika-sæt og accepterer writes. EU-deployeringen (selvom der kun er tre PoPs) har den samme adfærd.

### Hvordan det fungerer

Nogle af dette er dækket i den tidligere sektion, men TL;DR er, at det er CRDT-lite. Vi har skabt en proxy (i Rust, fordi selvfølgelig) som sidder mellem applikationen og Mongo og gør det multi-master. Proxyt er peer-aware, administrerer checkpoints, replikering, overvågning og initial synkronisering. Det er en multi-master erstatning for Mongos replikationssystem, inklusive for nogle DDL kommandoer.

**Forskellen fra andre værktøjer** er, at dette **ikke tjekker oplog**. At tjekke oplog, eller bruge ændringsstrømme, ville ikke fungere, fordi de kun viser den endelige tilstand af objektet efter skrivningen, hvilket gør det umuligt at håndtere konflikter. Du skal fange hver `$set`, `$inc` operation og replikere den operation selv.

Dette er en domænespecifik løsning. Det ville ikke fungere for alle produkter. Du kunne sige, det er domændrevet design :). Det fungerer for os, fordi vi fra starten meget omhyggeligt kun `$set` de felter, vi ændrer på dokumenter - vi bruger aldrig Mongos `replaceOne`, for eksempel. Det samme gælder for tællere. Du **må aldrig** gøre `SET VOTES = 5`. I stedet ville du skrive `INCREMENT VOTES BY 5`, da dette muliggør eventual consistency. Distribuerede låse håndteres ved **at undgå dem helt**. Kun én node pr. klynge har et flag aktiveret til at køre crons. Selvom dette kan virke begrænset, kan vi købe servere med terabytes af RAM, så vi kan tage dette kompromis for at reducere risiko og kompleksitet.

### Læse dine egne skriver

For udviklere, der bruger API'en, burde du kunne læse dine egne skriver ligesom før (lave et API-kald for at oprette en kommentar, så liste kommentarer og se den nye optegning i den liste). **Forbeholdet** er, at du ikke kan gøre dette på tværs af regioner. Hvis din backend kun kører i én region,
som os-west, så burde du kunne læse dine egne skriver undtagen i tilfælde af, at mellem din skrivning og din læsning, går den node ned **og** din
DNS-cache opdateres til at pege på den næste nærmeste node. Forudsat dette ikke sker, er det pålideligt at læse dine egne skriver.

### Testning & migreringen

Omkring halvdelen af koden i systemet er testværktøj, rammeværk og tests. Alligevel var udgivelsen en smule bumpet, hvilket tog længere nedetid (1 time for EU og 20 minutter for os-global) end ønsket, men vi er glade for, at vi passerede denne milepæl og takker dig for din tålmodighed!

### Afslutning & hvad dette betyder for dig

FastComments burde nu være hurtigere og mere holdbart end nogensinde, og nu kan vi gå tilbage til at arbejde på funktioner :)

Skål!

{{/isPost}}

---