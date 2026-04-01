---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem automatskog usmeravanja transporta FastComments[/postlink]

{{#unless isPost}}
Predstavljamo sistem automatskog usmeravanja transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem automatskog usmeravanja transporta FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomažu u preopterećenju, usmeravajući
saobraćaj na osnovu korisničke lokacije i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB proxy-a, DB
replikacije, upravljanja SSL sertifikatima, obrnutog proxy-a, i CDN-a koji koristi LRU keš na disku za keširanje resursa na ivici. Sistem podržava i tihe i glasne režime prebacivanja.
Tihi je preferiran u proizvodnji.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i replikacioni sloj za našu bazu podataka. Ovo omogućava FastComments da budu aktivno-aktivni
sa globalnom dostupnošću pisanja, što omogućava našim FARTS da budu na kraju dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan pristup koji smo zapravo uzeli na početku bio je da vidimo da li možemo kreirati fork MongoDB-a. Jedan od naših inženjera (Sloperators) je zapravo uspeo
to da postigne sa Opus 4.6, međutim odlučili smo da je rizik od toga veći od izgradnje našeg sopstvenog izolovanog sistema.

Poslednja stvar koju biste želeli sa nečim kao što je FART je da znate da je stiglo, ali ne možete pratiti izvor. Dodali smo monitoring i dijagnostiku
da nadziramo aktivno-aktivnu replikaciju na granulanom nivou.

## Rust na velikoj skali

Deo motivacije za kreiranje FART-a bio je zamena nekih postojećih usluga pisanih u Javi. Nakon što smo malo razmislili o tome, odlučili smo da ih konsolidujemo u jednu Rust
uslugu kako bismo smanjili vreme izvršavanja. Ovo je bio prihvatljiv trgovinski odnos budući da FART ne deploy-ujemo često. FART se kompajlira sa LTO, tako da ga možemo stvarno osloboditi.

Potrošili smo dosta vremena pokušavajući da optimizujemo stari Java sistem sa raznim GC-ovima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc
imaju značajno bolje performanse na istom hardveru sa mnogo manje zahteva za memorijom, tako da je prelazak bio očigledan.

## FART Master

Svako implementiranje sadrži svoj FART Master. Master je odgovoran za orkestraciju crona, webhook-a, i tako dalje.

## Uticaj na korisnike

FART sistem je u proizvodnji već oko godinu dana. Tek nedavno smo izvršili migraciju na aktivno-aktivno implementaciju. Novi
sistem nam daje veću vidljivost u latenciju širom sistema, kao i manju održavanje, tako da možemo sada provesti više vremena na funkcijama.

FART tiho radi u pozadini, iako je njegova prisutnost uvek osetna. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve korišćenja (većina korisničkih akcija koje rezultiraju promenama u podacima će biti brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracijski sistem koji koristimo za implementaciju samih usluga. Dokumentacija FARTS preporučuje da sloperators nikada ne veruju u implementaciju, uvek verifikujte podatke pre otpuštanja.

Nakon implementacije, FART upozorenja prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na kraju

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebali imati bolje skaliranje i bolju dostupnost na duže staze sa ovim radom. Kao što kaže FART priručnik: "Ako osetite nešto, recite nešto". Obavestite nas ispod ako otkrijete bilo kakve probleme.

{{/isPost}}