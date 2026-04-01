---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sustav automatskog usmjeravanja transporta FastComments[/postlink]

{{#unless isPost}}
Predstavljamo sustav automatskog usmjeravanja transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sustav automatskog usmjeravanja transporta FastComments (FARTS) je naš transportni i uslužni sloj. FARTs pomažu u preopterećenju, usmjeravajući
promet na temelju korisničke lokacije i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sustava, sloja DNS-a koji prepoznaje geografsku lokaciju, proxy-a za DB, replikaciju DB-a, upravljanje SSL certifikatima, obrnutog proxy-a i CDN-a koji koristi LRU keš na disku za pohranu resursa na rubu. Sustav podržava tihe i glasne načine za prebacivanje.
Tih način je preferiran u produkciji.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proxy i sloj replikacije za našu bazu podataka. To omogućava FastComments da bude Aktivno-Aktivno
s globalnom dostupnošću za pisanje, što omogućuje našim FARTS-ima da budu konačno dosljedni. [Više detalja ovdje](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo uzeli na početku bio je vidjeti možemo li stvoriti fork MongoDB-a. Jedan od naših inženjera (Sloperators) uspio je to ostvariti s Opus 4.6, međutim odlučili smo da je rizik od toga veći od izgradnje našeg vlastitog izoliranog sustava.

Zadnja stvar koju biste željeli s nečim poput FART-a je znati da je stiglo, ali ne možete pratiti izvor. Dodali smo nadzor i dijagnostiku
za praćenje aktivno-aktivne replikacije na granularnoj razini.

## Rust na Skali

Dio motivacije za stvaranje FART-a bio je zamjena nekih postojećih usluga napisanih u Javi. Nakon što smo o tome razmišljali neko vrijeme, odlučili smo ih konsolidirati u jednu Rust
uslugu kako bismo smanjili opterećenje u vrijeme izvođenja. Ovo je bila prihvatljiva trgovina jer FART ne implementiramo često. FART se kompajlira s LTO-om, pa ga stvarno možemo pustiti da radi.

Proveli smo puno vremena pokušavajući optimizirati stari Java sustav s različitim GC-ima itd., a na kraju smo jednostavno odlučili da async Rust + Mimalloc znatno
bolje performira na istom hardveru s mnogo manjim zahtjevima za memorijom, pa je prelazak bio očit izbor.

## FART Master

Svaka implementacija sadrži svoj vlastiti FART Master. Master je odgovoran za orkestraciju cronova, webhookova itd.

## Utjecaj na Kupce

Sustav FART je u produkciji već oko godinu dana. Tek smo nedavno izvršili migraciju na Aktivno-Aktivnu implementaciju. Novi
sustav daje nam veću vidljivost u latenciji širom sustava, kao i manji teret održavanja, tako da sada možemo više vremena posvetiti značajkama.

FART tiho radi u pozadini, iako je njegova prisutnost uvijek osjetljiva. Nadamo se da ćete primijetiti da su naši sustavi brži za vaše slučajeve korištenja (većina korisničkih akcija koje rezultiraju promjenama u podacima bit će brža u nekim regijama).

## Implementacije

Implementacija koristi isti globalni orkestracijski sustav koji koristimo za implementaciju samih usluga. FARTS dokumentacija preporučuje sloperators nikada ne vjeruju deploy-u, uvijek provjerite payload prije puštanja.

Nakon implementacije FART upozorenja slijede politiku eskalacije: prvo soba, zatim kat, zatim zgrada.

## Na Zaključku

Kao i svi veliki izdanja, drago nam je da smo mogli uzeti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove promjene. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebao bolje skalirati i imati bolju dostupnost na duže staze s ovim radom. Kao što kaže FART priručnik: "Ako osjetite nešto, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}