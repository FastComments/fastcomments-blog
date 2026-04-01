---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem automatskog usmjeravanja i transporta FastComments[/postlink]

{{#unless isPost}}
Predstavljamo sistem automatskog usmjeravanja i transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem automatskog usmjeravanja i transporta FastComments (FARTS) je naš transportni i servisni sloj. FART-ovi pomažu u zagušenju, usmjeravajući
saobraćaj na osnovu lokacije korisnika i potencijalnog opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svestan DNS sloj, DB proxy, DB
replikacija, upravljanje SSL sertifikatima, obrnutim proxyjem i CDN-om koji koristi LRU keš na disku za keširanje resursa na rubu. Sistem podržava i tihe i glasne režime prebacivanja.
Tihi je poželjan u proizvodnji.

## Aktivno-Aktivno

Najnovija verzija FART-a sadrži ugrađeni proxy i sloj replikacije za našu bazu podataka. Ovo omogućava da FastComments bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što omogućava našim FARTS-ima da budu na kraju konzistentni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan pristup koji smo zapravo primenili na početku je bio ispitivanje da li možemo da kreiramo fork MongoDB-a. Jedan od naših inženjera (Sloperators) je to zapravo uspeo
sa Opus 4.6, međutim odlučili smo da je rizik od toga veći nego da izgradimo sopstveni izolovani sistem.

Poslednja stvar koju biste želeli sa nečim poput FART-a je znati da je stigao, ali ne možete pratiti izvor. Dodali smo monitoring i dijagnostiku
za praćenje aktivno-aktivne replikacije na granularnom nivou.

## Rust na velikoj skali

Deo motivacije za kreiranje FART-a bio je zamena nekih postojećih servisa napisanih u Javi. Nakon što smo to razmatrali neko vreme, odlučili smo da ih konsolidujemo u jedan Rust
servis kako bismo smanjili režijske troškove u vremenu izvršavanja. Ovo je bio prihvatljiv kompromis jer FART ne implementiramo često. FART se kompajlira sa LTO, tako da ga stvarno možemo pustiti da radi.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc značajno
performirali bolje na istom hardveru sa mnogo manjim zahtevima za memorijom, tako da je prelazak bio očigledan.

## FART Glavni

Svaka implementacija sadrži svoj vlastiti FART Glavni. Glavni je odgovoran za orkestraciju cronova, webhooks-a i slično.

## Uticaj na korisnike

FART sistem je u produkciji već oko godinu dana. Samo smo nedavno izvršili migraciju na Aktivno-Aktivnu implementaciju. Novi
sistem daje nam povećanu vidljivost u latenciji kroz sistem, kao i manji teret održavanja, tako da sada možemo provesti više vremena na funkcijama.

FART tiho radi u pozadini, iako je njegova prisutnost uvek prisutna. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve korišćenja (uglavnom korisničke radnje koje rezultiraju promenama u podacima će biti brže u nekim regijama).

## Implementacije

Implementacija koristi isti globalni orkestracijski sistem koji koristimo za implementaciju samih servisa. FARTS dokumentacija preporučuje sloperators da nikada ne veruju u implementaciju, uvek provere sadržaj pre objavljivanja.

Nakon implementacije FART upozorenja prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na kraju

Kao i sa svim velikim izdanjima, drago nam je što smo mogli odvojiti vreme za optimizaciju, testiranje i pravilno objavljivanje ove promene. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao bolje da se skalira i imati bolju dostupnost na duge staze sa ovim radom. Kao što kaže FART priručnik: "Ako nešto miriše, reci nešto". Obavestite nas u komentaru ako otkrijete bilo kakve probleme.

{{/isPost}}