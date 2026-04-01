---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem za automatsko usmeravanje transporta FastComments[/postlink]

{{#unless isPost}}
Predstavljamo sistem za automatsko usmeravanje transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem za automatsko usmeravanje transporta FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomažu u zagušenju, usmeravajući
saobraćaj na osnovu lokacije korisnika i potencijalnog opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB proksi, DB
replikacije, upravljanja SSL sertifikatima, obrnutoj proksiji i CDN-u koji koristi LRU keš na disku za keširanje resursa na ivici. Sistem podržava kako tihe, tako i glasne režime prebacivanja.
Tihi je prepoznatljiv u produkciji.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proksi i replikacijski sloj za našu bazu podataka. To omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što omogućava našim FARTS-ima da budu na kraju dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan pristup koji smo zapravo ranije preuzeli bio je da vidimo možemo li stvoriti fork MongoDB-a. Jedan od naših inženjera (Sloperators) je to uspeo
da postigne sa Opus 4.6, međutim odlučili smo da je rizik od toga veći nego da izgradimo naš sopstveni izolovani sistem.

Poslednja stvar koju biste želeli s nečim poput FART-a je da znate da je stiglo, ali ne možete ući u trag izvoru. Dodali smo nadgledanje i dijagnostiku
za praćenje aktivno-aktivne replikacije na granularnom nivou.

## Rust na Skali

Jedan od motiva za kreiranje FART-a bio je zameniti neke postojeće servise napisane u Javi. Nakon što smo to razmatrali, odlučili smo da to konsolidujemo u jedan Rust
servis kako bismo smanjili vreme izvršenja. To je bilo prihvatljivo kompromis, s obzirom na to da ne implementiramo FART često. FART je kompajliran sa LTO, tako da ga zaista možemo pustiti da radi.

Proveli smo dosta vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc
pokazuje značajno bolje rezultate na istom hardveru sa mnogo manjim zahtevima za memorijom, tako da je prelazak bio očigledan.

## FART Master

Svaka implementacija sadrži svoj FART Master. Master je odgovoran za orkestraciju cronova, webhookova i slično.

## Uticaj na Klijente

FART sistem je u produkciji već oko godinu dana. Tek nedavno smo uradili migraciju na Aktivno-Aktivnu implementaciju. Novi
sistem nam pruža veću vidljivost u latenciju širom sistema, kao i manji teret održavanja, tako da sada možemo provesti više vremena na funkcijama.

FART radi tiho u pozadini, iako se njegova prisutnost uvek oseća. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve korišćenja (uglavnom korisničke akcije koje rezultiraju promenama u podacima biće brže u nekim regijama).

## Implementacije

Implementacija koristi isti globalni sistem orkestracije koji koristimo za implementaciju samih servisa. FARTS dokumentacija preporučuje da sloperators nikad ne veruju implementaciji, uvek verifikujte sadržaj pre nego što objavite.

Post-implementacione FART obaveštenja prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na Zaključku

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove promene. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao bolje da skalira i imati bolju dostupnost na duži rok s ovim radom. Kao što kaže FART priručnik: "Ako osetite neki miris, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}