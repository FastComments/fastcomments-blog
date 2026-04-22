---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem automatskog usmjeravanja transporta FastComments[/postlink]

{{#unless isPost}}
Predstavljamo sistem automatskog usmjeravanja transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem automatskog usmjeravanja transporta FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomaže u preopterećenju, usmjeravajući
promet na osnovu lokacije korisnika i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geo-svesnog DNS sloja, DB proxy-a, DB
replikacije, upravljanja SSL certifikatima, reverznog proxy-a i CDN-a koji koristi LRU cache na disku za keširanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i replikacijski sloj za našu bazu podataka. Ovo omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju dosljedni. [Više detalja ovdje](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo preuzeli u ranim fazama bio je da vidimo možemo li kreirati aktivno-aktivni fork MongoDB-a. Jedan od naših inženjera (Sloperators) uspio je to ostvariti sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći od izgradnje vlastitog izoliranog sistema.

## Rust na Skali

Dio motivacije za kreiranje FART-a bio je zamjena nekih postojećih servisa napisanih u Javi. Nakon što smo to malo razmislili, odlučili smo da sve to spojimo u jedan Rust servis da smanjimo vrijeme izvođenja. Ovo je bio prihvatljiv kompromis jer ne raspoređujemo FART često. FART se kompajlira sa LTO, tako da zaista možemo maksimalno iskoristiti.

Proveli smo puno vremena pokušavajući fino podesiti stari Java sistem s različitim GC-ima itd., a na kraju smo jednostavno odlučili da async Rust + Mimalloc daje značajno
bolje performanse na istom hardveru s mnogo nižim zahtjevima memorije, tako da je prelazak bio očigledan.

Rust se pokazao kao veoma dobar za kod povezan sa mrežom koji koristi zajedničke gomile i brave. Ipak, nije imun na probleme tokom izvođenja.
Možda vrijedi napomenuti da je kod koji pišu LLM-ovi u Rust-u prilično sklon mrtvim zaključavanjima, a jedan od načina da se to zaobiđe je dizajnirati sisteme kao lako razumljive stanja mašine, umjesto samo gomile async/await.

## FART Master

Svaka implementacija sadrži svoj vlastiti FART Master. Master je odgovoran za orkestraciju kranova, webhook-ova i slično.

## Uticaj na kupce

FART sistem je u produkciji već otprilike godinu dana. Tek nedavno smo uradili migraciju na Aktivno-Aktivno implementaciju.
Postoji neki uticaj na čitanje vaših vlastitih pisanja širom regija, što je obuhvaćeno u gornjem linkovanom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako se njegovo prisustvo uvijek oseća. Nadamo se da ćete primijetiti da su naši sistemi brži za vaše slučajeve korištenja (uglavnom korisničke radnje koje rezultiraju promjenama u podacima biće brže u nekim regijama).

## Implementacije

Implementacija koristi isti globalni orkestracijski sistem koji koristimo za raspoređivanje samih servisa. FART dokumentacija preporučuje Sloperators da nikada ne vjeruju u implementaciju, uvijek provjerite sadržaj prije objavljivanja.

Post implementacijski FART upozorenja slijede politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Zaključak

Kažu da je internet niz cevi, ali zapravo je niz zvukova.

Kao i kod svih važnih izdanja, drago nam je što smo mogli posvetiti vrijeme optimizaciji, testiranju i pravilnom objavljivanju ove promjene. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebali bolje skalirati i imati bolju dostupnost na duže staze sa ovim radom. Kao što kaže FART priručnik: "Ako nešto osjetite, recite nešto". javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}

---