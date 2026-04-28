---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sustav automatskog usmjeravanja prometa FastComments[/postlink]

{{#unless isPost}}
Predstavljamo Sustav automatskog usmjeravanja prometa FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sustav automatskog usmjeravanja prometa FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomaže u smanjenju zagušenja, usmjeravajući
promet na temelju korisničke lokacije i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sustava, geo-svjesnog DNS sloja, DB proxy-a, replikacije DB-a, upravljanja SSL certifikatima, obratnog proxy-a i CDN-a koji koristi LRU cache na disku za pohranu resursa na rubu.

## Aktivna-aktivna

Najnovija verzija FART sadrži ugrađeni proxy i replikacijski sloj za našu bazu podataka. To omogućuje FastCommentsu da bude Aktivna-aktivna
s globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju konzistentni. [Više detalja ovdje](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo usvojili na početku bio je vidjeti možemo li stvoriti aktivnu-aktivnu granu MongoDB-a. Jedan od naših inženjera (Sloperators) uspio je to ostvariti s Opus 4.6, međutim, odlučili smo da su rizici povezani s tim veći od izgradnje našeg vlastitog izoliranog sustava.

## Rust u mjerilu

Dio motivacije za stvaranje FART-a bio je zamijeniti neke postojeće usluge napisane u Javi. Nakon što smo to duže vrijeme razmatrali, odlučili smo te usluge konsolidirati u jednu Rust uslugu kako bismo smanjili troškove tijekom izvođenja. Ovo je bila prihvatljiva zamjena s obzirom na to da FART ne implementiramo često. FART je kompiliran s LTO, tako da ga možemo stvarno brzo pokrenuti.

Potrošili smo puno vremena pokušavajući optimizirati stari Java sustav s različitim GC-ima itd., a na kraju smo samo odlučili da async Rust + Mimalloc ostvaruju znatno
bolje performanse na istom hardveru s puno manjim zahtjevima za memorijom, tako da je prelazak bio očit izbor.

Rust se pokazao zaista odličnim za kod povezan s mrežom koji koristi dijeljene hrpe i zaključavanja. Ipak, nije imuni na probleme tijekom izvođenja.
Možda je vrijedno reći da je kod napisan od strane LLM-ova u Rustu prilično sklon mrtvim zaključavanjima, a jedan od načina da se to izbjegne je dizajniranje sustava kao lako razumljivih stanja mašina, umjesto samo gomila async/await.

## FART Master

Svaka implementacija sadrži svoj vlastiti FART Master. Master je odgovoran za orkestraciju cronova, webhookova i tako dalje.

## Utjecaj na korisnike

Sustav FART je u produkciji već otprilike godinu dana. Tek smo nedavno izvršili migraciju na Aktivnu-aktivnu implementaciju.
Postoji neki utjecaj na čitanje vlastitih zapisa preko regija, što je pokriveno u gornje povezanoj objavi na blogu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART radi tiho u pozadini, iako se njegova prisutnost uvijek osjeća. Nadamo se da ćete primijetiti da su naši sustavi brži za vaše slučajeve korištenja (većinom korisničke akcije koje rezultiraju promjenama u podacima bit će brže u nekim regijama).

## Implementacije

Implementacija koristi isti globalni sustav orkestracije koji koristimo za implementaciju samih usluga. Dokumentacija FART preporučuje Sloperators nikada ne vjerovati u implementaciju, uvijek provjeriti sadržaj prije objavljivanja.

Post-implementacijski FART obavijesti slijede politiku eskalacije: prvo soba, zatim kat, zatim zgrada.

## Na kraju

Kažu da je internet niz cijevi, ali zapravo je niz ispuhivanja.

Kao i svi veći izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove promjene. Uzbuđeni smo zbog onoga što dolazi.
FastComments bi trebao bolje skalirati i imati bolju dostupnost na dugoročnom planu s ovim radom. Kao što kaže FART priručnik: "Ako osjetite nešto, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}