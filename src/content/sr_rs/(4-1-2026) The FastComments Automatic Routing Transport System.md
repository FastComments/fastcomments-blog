---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Sistem Prenosa Rute[/postlink]

{{#unless isPost}}
Uvodimo FastComments Automatski Sistem Prenosa Rute!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Sistem Prenosa Rute (FARTS) je naš transportni i servisni sloj. FARTS pomaže u upravljanju saobraćajem, rutirajući
saobraćaj na osnovu lokacije korisnika i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geo-svesnog DNS sloja, DB proksija, DB
replikacije, upravljanja SSL sertifikatima, reverznog proksija i CDN-a koji koristi LRU keš na disku za keširanje sredstava na ivici.

## Aktivno-Aktivno

Najnovija verzija FART-a sadrži ugrađeni proksij i replikacijski sloj za našu bazu podataka. Ovo omogućava FastComments da budu Aktivno-Aktivni
sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju konzistentni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo uzeli u početku bio je da vidimo da li možemo da napravimo aktivno-aktivnu granu MongoDB-a. Jedan od naših inženjera (Sloperators) je to zapravo uspeo sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći nego da izgradimo naš vlastiti izolovani sistem.

## Rust u Velikom Obimu

Deo motivacije za stvaranje FART-a bio je da zamenimo neke postojeće usluge napisane u Javi. Nakon što smo se time bavili neko vreme, odlučili smo da ih konsolidujemo u jednu Rust uslugu kako bismo smanjili troškove izvršavanja. Ovo je bila prihvatljiva razmena s obzirom na to da ne implementiramo FART često. FART se kompilira sa LTO, tako da ga zaista možemo pustiti da ide.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo samo odlučili da async Rust + Mimalloc značajno
bolje funkcioniše na istom hardveru sa znatno manjim zahtevima za memorijom, tako da je prelazak bio očigledan.

Rust se pokazao kao zaista sjajan za kod koji je povezan sa mrežom i koristi deljene hrpe i zaključavanja. Međutim, nije imunitet na probleme tokom izvršavanja.
Možda vredi napomenuti da je kod koji su napisali LLM-ovi u Rustu prilično sklon mrtvim tačkama, a jedan od načina da se to izbegne je da se sistemi dizajniraju kao lako razumljive stanja mašine, umesto samo hrpe async/await.

## FART Glavni

Svaka implementacija sadrži svoj vlastiti FART Glavni. Glavni je odgovoran za orkestraciju cronova, вебхуков, i tako dalje.

## Uticaj na Kupce

FART sistem je u proizvodnji već oko godinu dana. Tek smo nedavno uradili migraciju na Aktivno-Aktivnu implementaciju.
Postoji neki uticaj na čitanje vaših vlastitih zapisa širom regiona, što je pokriveno u blog postu povezanom iznad i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako je njegova prisutnost uvek osetna. Nadamo se da će naši sistemi biti brži za vaše slučajeve korišćenja (uglavnom korisničke akcije koje rezultiraju promenama podataka biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni sistem orkestracije koji koristimo za implementaciju samih usluga. FART dokumentacija preporučuje da Sloperators nikada ne veruju implementaciji, uvek verifikuju payload pre puštanja.

Post implementacijski FART alarmi prate politiku eskalacije: prvo prostorija, zatim sprat, zatim zgrada.

## Na kraju

Kažu da je internet serija cevi, ali zapravo je serija zvukova.

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvoimo vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebao bolje da se skalira i imati bolju dostupnost na duži rok sa ovim radom. Kao što kaže FART priručnik: "Ako osetite nešto, recite nešto". Javite nam ispod ako otkrijete bilo kakve probleme.

{{/isPost}}