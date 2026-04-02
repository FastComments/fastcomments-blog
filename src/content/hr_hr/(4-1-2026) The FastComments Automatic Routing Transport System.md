---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Brzi Komentari Automatizirani Sustav Ruting Transporta[/postlink]

{{#unless isPost}}
Uvodimo Brzi Komentari Automatizirani Sustav Ruting Transporta!
{{/unless}}

{{#isPost}}

## Uvod

Brzi Komentari Automatizirani Sustav Ruting Transporta (FARTS) je naš transportni i servisni sloj. FARTS pomaže u smanjenju zagušenja, usmjeravajući
promet na temelju lokacije korisnika i potencijalnog opterećenja u budućnosti. Sastoji se od nekoliko različitih sustava, geo-svjesnog DNS sloja, DB proxyja, DB
replikacije, upravljanja SSL certifikatima, obrnjenog proxyja i CDN-a koji koristi LRU cache na disku za pohranu resursa na rubu.

## Aktivno-Aktivno

Najnovija verzija FART-a sadrži ugrađeni proxy i replikacijski sloj za našu bazu podataka. To omogućava Brzim Komentarima da budu Aktivno-Aktivni
s globalnom dostupnošću pisanja, što osigurava da naši FARTS budu na kraju dosljedni. [Više detalja ovdje](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Pristup koji smo zapravo usvojili u ranim fazama bio je pokušati stvoriti aktivno-aktivni fork MongoDB-a. Jedan od naših inženjera (Sloperators) uspio je to
ostvariti s Opus 4.6, međutim, odlučili smo da je rizik od toga veći od izgradnje vlastitog izoliranog sustava.

## Rust u Velikom Scale-u

Dio motivacije za stvaranje FART-a bio je zamjena nekih postojećih usluga napisanih u Javi. Nakon što smo o tome razmišljali neko vrijeme, odlučili smo
da ih konsolidiramo u jednu Rust uslugu kako bismo smanjili troškove izvedbe. Ovo je bio prihvatljiv kompromis s obzirom na to da FART ne isporučujemo često. FART se kompajlira s LTO, tako da ga možemo stvarno pustiti da ide.

Proveli smo puno vremena pokušavajući optimizirati stari Java sustav s različitim GC-ima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc
ima značajno bolje performanse na istom hardveru s puno manjim zahtjevima za memorijom, tako da je prelazak bio logičan.

Rust se pokazao stvarno odličnim za kod povezan s mrežom koji koristi zajedničke heapove i brave. Međutim, nije neosjetljiv na probleme s izvršavanjem. 
Možda vrijedi napomenuti da je kod koji su napisali LLM-ovi u Rustu prilično sklon mrtvim lokovima, a način za izbjegavanje toga je dizajniranje sustava kao
lakih za razumijevanje stanja, umjesto samo hrpe async/await.

## FART Majstor

Svaka isporuka sadrži svoj vlastiti FART Majstor. Majstor je odgovoran za orkestraciju cronova, webhookova i slično.

## Utjecaj na Kupce

FART sustav je u produkciji već oko godinu dana. Tek smo nedavno izvršili migraciju na Aktivno-Aktivnu isporuku. 
Postoji određeni utjecaj pri čitanju vlastitih zapisa kroz regije, što je pokriveno u gornjem povezanom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako je njegova prisutnost uvijek osjetna. Nadamo se da ćete pronaći naše sustave bržima za vaše slučajeve korištenja
(uglavnom korisničke radnje koje rezultiraju promjenama podataka bit će brže u nekim regijama).

## Isporuke

Isporuka koristi isti globalni orkestracijski sustav koji koristimo za isporuku samih usluga. FART dokumentacija preporučuje da Sloperators nikad ne vjeruju
isporuci, uvijek provjeravajte sadržaj prije puštanja.

Post-ispod FART upozorenja slijede politiku eskalacije: prvo prostorija, zatim kat, zatim zgrada.

## Na Kraj

Kažu da je internet niz cijevi, ali zapravo je to niz ispuštanja.

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vrijeme da optimiziramo, testiramo i ispravno objavimo ovu promjenu. Uzbuđeni smo zbog svega što dolazi.
Brzi Komentari trebali bi bolje skalirati i imati bolju dostupnost na duge staze s ovim radom. Kao što kaže FART priručnik: "Ako osjetite nešto, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}