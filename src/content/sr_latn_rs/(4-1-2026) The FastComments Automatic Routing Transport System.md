---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Sistem Transporta i Rutingovanja[/postlink]

{{#unless isPost}}
Predstavljamo FastComments Automatski Sistem Transporta i Rutingovanja!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Sistem Transporta i Rutingovanja (FARTS) je naš transportni i servisni sloj. FARTS pomaže u smanjenju gužvi, rutirajući
trafik na osnovu lokacije korisnika i potencijalnog opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB proxy-a, DB
replikacije, upravljanja SSL sertifikatima, reverznog proxy-a i CDN-a koji koristi LRU keš na disku za čuvanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i sloj replikacije za našu bazu podataka. Ovo omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS naposletku dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan pristup koji smo zapravo imali na početku je bio da vidimo da li možemo kreirati aktivno-aktivnu forku MongoDB-a. Jedan od naših inženjera (Sloperators) uspeo je da to ostvari sa Opus 4.6, međutim, odlučili smo da je rizik od ovoga veći od izgradnje našeg sopstvenog izolovanog sistema.

## Rust na Velikim Razmerama

Deo motivacije za kreiranje FART-a bio je da zamenimo neke postojeće servise napisane u Javi. Nakon što smo malo razmislili o tome, odlučili smo da konsolidujemo
ove servise u jedan Rust servis kako bismo smanjili prekomernu potrošnju resursa. Ovo je bilo prihvatljivo, s obzirom da FART ne uvodimo često. FART se kompajlira sa LTO, tako da možemo zaista da ga pustimo da radi.

Proveli smo mnogo vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo samo odlučili da async Rust + Mimalloc pružaju značajno
bolje performanse na istom hardveru sa mnogo nižim zahtevima za memorijom, tako da je prelazak bio očigledan.

Rust se pokazao kao izuzetno dobar za kod vezan za mrežu koji koristi deljene hrpe i brave. Međutim, nije neosetljiv na probleme u toku izvršenja.
Možda je vredno napomenuti da je kod napisan od strane LLM-a u Rust-u prilično podložan mrtvim blokadama i način za izbegavanje toga je da se dizajniraju sistemi kao lako razumljive state mašine, umesto samo gomile async/await.

## FART Master

Svaka implementacija sadrži svoj vlastiti FART Master. Master je odgovoran za orkestraciju cron poslova, webhook-a, i slično.

## Uticaj na Kupce

FART sistem je u upotrebi već oko godinu dana. Tek nedavno smo izvršili migraciju na Aktivno-Aktivnu implementaciju.
Postoji određeni uticaj na čitanje vlastitih zapisa širom regiona, koji je pokriven u gornjem linkovanom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako je njegovo prisustvo uvek osetno. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve upotrebe (pretežno korisničke akcije koje rezultiraju promenama u podacima biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni sistem orkestracije koji koristimo za implementaciju samih servisa. FART dokumentacija preporučuje Sloperators da nikada ne veruju implementaciji, uvek proveravaju sadržaj pre objavljivanja.

Obaveštenja nakon implementacije FART prate politiku eskalacije: prvo prostorija, zatim sprat, zatim zgrada.

## Na Zaključku

Kažu da je internet niz cevi, ali zapravo je niz toots.
 
Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove promene. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebalo da se bolje skalira i ima bolju dostupnost na duge staze sa ovim radom. Kao što kaže FART runbook: "Ako nanjuš nešto, reci nešto". Javite nam u komentarima ako otkrijete bilo kakve probleme.

{{/isPost}}