---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Ruting Transportni Sistem[/postlink]

{{#unless isPost}}
Uvodimo FastComments Automatski Ruting Transportni Sistem!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Ruting Transportni Sistem (FARTS) je naš transportni i servisni sloj. FARTS pomažu u prevazilaženju zagušenja, rutirajući
saobraćaj na osnovu korisničke lokacije i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB proksija, DB
replikacije, upravljanja SSL sertifikatima, obrnutog proksija i CDN-a koji koristi LRU keš na disku za keširanje resursa na ivici. Sistem podržava i tihe i glasne načine prelaska.
Tihi je poželjan u produkciji.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proksi i sloj replikacije za našu bazu podataka. Ovo omogućava da FastComments bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što omogućava našim FARTS-ima da budu konačno konzistentni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo preuzeli u ranim fazama bio je da vidimo da li možemo stvoriti fork MongoDB-a. Jedan od naših inženjera (Sloperators) je uspeo da
to postigne sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći od izgradnje vlastitog izolovanog sistema.

Poslednja stvar koju biste želeli sa nečim poput FART-a je da znate da je stigao, ali ne možete pratiti izvor. Dodali smo monitoring i dijagnostiku
da pratimo aktivno-aktivnu replikaciju na granularnom nivou.

## Rust na Skali

Deo motivacije za kreiranje FART-a bio je zamena nekih postojećih servisa pisanih u Javi. Nakon što smo to razmatrali neko vreme, odlučili smo da te usluge konsolidujemo u jedan Rust
servis kako bismo smanjili overhead u izvođenju. Ovo je bio prihvatljiv kompromis s obzirom na to da ne implementiramo FART često. FART se kompajlira sa LTO, tako da ga stvarno možemo osloboditi.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ovima itd, i na kraju smo se odlučili da async Rust + Mimalloc rade značajno
bolje na istom hardveru sa mnogo manjim zahtevima za memorijom, tako da je prelazak bio očigledan.

## FART Glavni

Svaka implementacija sadrži svoj FART Glavni. Glavni je odgovoran za orkestraciju crona, webhook-ova, itd.

## Uticaj na Klijente

FART sistem je u produkciji već oko godine dana. Tek nedavno smo uradili migraciju na Aktivno-Aktivnu implementaciju. Novi
sistem nam pruža povećanu vidljivost u latenciju širom sistema, kao i manji teret održavanja, tako da sada možemo provesti više vremena na funkcionalnostima.

FART tiho radi u pozadini, iako je njegova prisutnost uvek prisutna. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve upotrebe (većina korisničkih radnji koje rezultiraju promenama podataka biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracioni sistem koji koristimo za implementaciju samih servisa. FARTS dokumentacija preporučuje sloperators nikada ne verujte implementaciji, uvek proverite teret pre nego što objavite.

Post-implementacioni FART alarmi slede politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao bolje da se skalira i imati bolje vreme dostupnosti na duge staze sa ovim radom. Kako kaže FART priručnik: "Ako osetite nešto, recite nešto". Javite nam u komentarima ako otkrijete bilo kakve probleme.

{{/isPost}}