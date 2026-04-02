---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]FastComments Automatski Sistem za Ruting Transporta[/postlink]

{{#unless isPost}}
Predstavljamo FastComments Automatski Sistem za Ruting Transporta!
{{/unless}}

{{#isPost}}

## Uvod

FastComments Automatski Sistem za Ruting Transporta (FARTS) je naš transportni i servisni sloj. FARTS pomažu u smanjenju zagušenja, rutirajući
saobraćaj na osnovu korisničke lokacije i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB proksija, DB
replikacije, upravljanja SSL sertifikatima, obrnutog proksija, i CDN-a koji koristi LRU keš na disku za keširanje resursa na ivici mreže.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proksi i replikacijski sloj za našu bazu podataka. Ovo omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju konzistentni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan od pristupa koji smo zapravo primenili na početku bio je da vidimo možemo li stvoriti aktivno-aktivni isječak MongoDB-a. Jedan od naših inženjera (Sloperators) je to zaista uspeo sa Opus 4.6, međutim, odlučili smo da su rizici povezani sa tim veći nego izgradnja našeg vlastitog izolovanog sistema.

## Rust u Velikim Razmerama

Deo motivacije za stvaranje FART-a bio je da se zamene neki postojeći servisi napisani u Javi. Nakon što smo o tome razmišljali neko vreme, odlučili smo da ih konsolidujemo u jedan Rust servis kako bismo smanjili troškove u radu. Ovo je bio prihvatljiv kompromis s obzirom na to da ne deploy-ujemo FART često. FART se kompajlira sa LTO, tako da ga zaista možemo pustiti da se razvija.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno odlučili da 
asinkroni Rust + Mimalloc značajno bolje funkcionišu na istom hardveru sa mnogo nižim zahtevima za memorijom, pa je prelazak bio očigledan.

Rust se pokazao zaista odličnim za kod vezan za mrežu koji koristi deljenje heap-ova i zaključavanje. Međutim, nije otporan na probleme tokom izvršenja.
Možda vredi napomenuti da je kod koji su napisali LLM-ovi u Rust-u prilično sklon deadlock-ovima, a jedan od načina da se to prevaziđe je dizajniranje sistema kao lakih za razumevanje stanja mašine, umesto samo gomila asinkronih/čeka.

## FART Glavni

Svaka implementacija sadrži svoj vlastiti FART Glavni. Glavni je odgovoran za orkestraciju cron poslova, webhooks i slično.

## Uticaj na Kupce

FART sistem je u produkciji već oko godinu dana. Tek nedavno smo izvršili migraciju na Aktivno-Aktivnu implementaciju.
Postoji neki uticaj na čitanje sopstvenih upisa širom regiona, što je pokriveno u blog postu povezanom iznad i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako se njegova prisutnost uvek oseća. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve upotrebe (najviše korisničke akcije koje rezultiraju promenama u podacima biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracioni sistem koji koristimo za implementaciju samih usluga. FART dokumentacija preporučuje Sloperators da nikada ne veruju u deploy, uvek proverite sadržaj pre otpuštanja.

Post-implementacione FART upozorenja prate eskalacionu politiku: prvo soba, zatim sprat, zatim zgrada.

## U Zaključku

Kažu da je internet niz cevi, ali zapravo je niz isparenja.

Kao i svi veliki izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebao bolje da se skalira i imati bolju dostupnost na duže staze sa ovim radom. Kao što kaže FART priručnik: "Ako mirišeš nešto, reci nešto". Javite nam u komentarima ako otkrijete bilo kakve probleme.

{{/isPost}}

---