---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Sistem Za Rutiranje Transporta[/postlink]

{{#unless isPost}}
Predstavljamo FastComments Automatski Sistem Za Rutiranje Transporta!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Sistem Za Rutiranje Transporta (FARTS) je naš transportni i servisni sloj. FARTS pomaže u smanjenju gužvi, rutirajući
saobraćaj na osnovu lokacije korisnika i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geo-svesnog DNS sloja, DB proxy-a, DB
replikacije, upravljanja SSL sertifikatima, reverznog proxy-a i CDN-a koji koristi LRU keš na disku za čuvanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i sloj replikacije za našu bazu podataka. To omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Pristup koji smo zapravo preuzeli na početku bio je da proverimo da li možemo napraviti aktivno-aktivni fork MongoDB-a. Jedan od naših inženjera (Sloperators) uspeo je to da postigne sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći nego graditi sopstveni izolovani sistem.

## Rust na Skali

Deo motivacije za kreiranje FART-a bio je da se zamene neki postojeći servisi napisani u Javi. Nakon što smo na to gledali neko vreme, odlučili smo da ih konsolidujemo u jedan Rust servis kako bismo smanjili overhead pri izvršavanju. Ovo je bio prihvatljiv kompromis s obzirom da ne raspoređujemo FART često. FART se kompajlira sa LTO, tako da ga možemo zaista osloboditi.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno zaključili da async Rust + Mimalloc daje značajno bolje performanse na istom hardveru sa mnogo nižim zahtevima za memorijom, tako da je prelazak bio očigledan.

Rust se pokazao kao zaista odličan za kod vezan za mreže koji koristi zajedničke hrpe i zaključavanja. Međutim, nije imun na probleme u izvršavanju.
Možda je vredno napomenuti da je kod koji su napisali LLM-ovi u Rust-u prilično sklon mrtvim petljama, a način da se to prevaziđe je projektovanje sistema kao lako razumljivih stanja mašina, umesto samo gomila async/await.

## FART Glavni

Svaka implementacija sadrži svoj FART Glavni. Glavni je odgovoran za orkestriranje cron-a, webhook-a, i slično.

## Uticaj na Kupce

FART sistem je u produkciji već oko godinu dana. Tek smo skoro uradili migraciju na Aktivno-Aktivnu implementaciju.
Postoji određeni uticaj na čitanje vaših vlastitih zapisa širom regiona, o čemu se govori u gornjem povezanom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako se njegovo prisustvo uvek oseća. Nadamo se da ćemo naše sisteme učiniti bržim za vaše slučajeve upotrebe (pretežno korisničke akcije koje rezultiraju promenama u podacima biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracijski sistem koji koristimo za raspoređivanje samih servisa. FART dokumentacija preporučuje Sloperators da nikada ne veruju u implementaciju, uvek verifikujte teret pre nego što pustite.

Post-implementacijski FART upozorenja prate politiku eskalacije: prvo soba, zatim sprat, pa zgrada.

## Na Zaključku

Kažu da je internet niz cevi, ali zapravo je to niz fartova.

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove promene. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao bolje da se skalira i imati bolju dostupnost na duži put sa ovim radom. Kao što kaže FART priručnik: "Ako osetite nešto, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}