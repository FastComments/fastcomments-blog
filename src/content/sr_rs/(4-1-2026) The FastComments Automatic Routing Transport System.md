---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Sistem Rute Transporta[/postlink]

{{#unless isPost}}
Predstavljamo FastComments Automatski Sistem Rute Transporta!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Sistem Rute Transporta (FARTS) je naš transportni i servisni sloj. FARTS pomaže u preopterećenju, usmeravajući
saobraćaj na osnovu lokacije korisnika i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geo-svesnog DNS sloja, DB proxy-a, DB
replikacije, upravljanja SSL sertifikatima, reverznog proxy-a i CDN-a koji koristi LRU keš na disku za čuvanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i sloj replikacije za našu bazu podataka. Ovo omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da naši FARTS budu na kraju dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo preuzeli na početku bio je da vidimo da li možemo da napravimo aktivno-aktivnu granu MongoDB-a. Jedan od naših inženjera (Sloperators) bio je u mogućnosti da to zaista postigne sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći nego da izgradimo naš vlastiti izolovani sistem.

## Rust u Velikom Obimu

Deo motivacije za kreiranje FART bila je zamena nekih postojećih servisa napisanih u Javi. Nakon što smo o tome razmišljali neko vreme, odlučili smo da ih konsolidujemo u jedan Rust servis kako bismo smanjili troškove izvršenja. Ovo je bila prihvatljiva kompenzacija s obzirom na to da ne postavljamo FART često. FART se kompajlira sa LTO, tako da ga zaista možemo pustiti da radi.

Proveli smo mnogo vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., a na kraju smo jednostavno odlučili da async Rust + Mimalloc daje značajno
bolje rezultate na istom hardveru sa mnogo nižim zahtevima za memoriju, tako da je prelazak bio očigledan.

Rust se pokazao kao izuzetno dobar za kod povezan sa mrežom koji koristi zajedničke hrpe i zaključavanja. Međutim, nije nepobediv pred problemima tokom izvršenja.
Možda vredi napomenuti da je kod napisan od strane LLM-a u Rustu prilično sklon mrtvim lokovima, a način da se to izbegne je dizajnirati sisteme kao lake za razumevanje stanja mašine, umesto samo gomile async/await.

## FART Master

Svaka implementacija sadrži svoj vlastiti FART Master. Master je odgovoran za orkestraciju cron-a, webhooks-a i slično.

## Uticaj na Kupce

FART sistem je u produkciji već oko godinu dana. Tek nedavno smo izvršili migraciju na Aktivno-Aktivnu implementaciju.
Postoji neki uticaj na čitanje vaših sopstvenih zapisa širom regiona, što je pokriveno u blog postu linkovanom iznad i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako se njegovo prisustvo uvek oseća. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve korišćenja (uglavnom korisničke akcije koje rezultiraju promenama u podacima biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracioni sistem koji koristimo za postavljanje samih servisa. FART dokumentacija preporučuje da Sloperators nikada ne veruju implementaciji, uvek proverite payload pre objavljivanja.

Post-implementacione FART alarmi prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na Zaključku

Kažu da je internet niz cevi, ali zapravo je to niz ispuhivanja.

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao da se bolje skalira i da ima bolju dostupnost na duže staze zahvaljujući ovom radu. Kako kaže FART runbook: "Ako osetite nešto, recite nešto". Javite nam ispod ako otkrijete bilo kakve probleme.

{{/isPost}}