---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem za automatsko usmeravanje transporta FastComments[/postlink]

{{#unless isPost}}
Upoznajte sistem za automatsko usmeravanje transporta FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem za automatsko usmeravanje transporta FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomažu u zagušenju, usmeravajući
saobraćaj na osnovu lokacije korisnika i potencijalno opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geografski svesnog DNS sloja, DB prokija, DB
replikacije, upravljanja SSL sertifikatima, reversnog prokija i CDN-a koji koristi LRU keš na disku za keširanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART sadrži ugrađeni proksi i replikacioni sloj za našu bazu podataka. To omogućava FastComments da bude Aktivno-Aktivno
sa globalnom dostupnošću pisanja, što osigurava da naši FARTS budu na kraju dosledni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Pristup koji smo zapravo usvojili na početku je bio da vidimo da li možemo da napravimo aktivno-aktivnu verziju MongoDB. Jedan od naših inženjera (Sloperators) je uspeo da to postigne sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći od izgradnje našeg izolovanog sistema.

## Rust na velikoj skali

Deo motivacije za kreiranje FART je bio da se zamene neki postojeći servisi napisani u Javi. Nakon što smo malo razmislili o tome, odlučili smo da ih konsoldujemo u jedan Rust servis kako bismo smanjili preklapanje u radu. Ovo je bio prihvatljiv kompromis s obzirom na to da ne deployujemo FART često. FART se kompajlira sa LTO, tako da ga možemo stvarno pustiti da se iskazuje.

Proveli smo mnogo vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc daje značajno bolje performanse na istom hardveru sa mnogo manjim zahtevima za memorijom, tako da je prelazak bio očigledan.

Rust se pokazao kao zaista sjajan za kod povezan sa mrežom koji koristi deljene heap-ove i brave. Međutim, nije imunitet na probleme u radu.
Možda je vredno napomenuti da je kod napisan od LLM-ova u Rust-u prilično podložan mrtvim blokadama, a način da se to zaobiđe je da se sistemi dizajniraju kao lako razumljive stanja mašine, umesto samo gomile async/await.

## FART Majstor

Svaka implementacija sadrži svog FART Majstora. Majstor je odgovoran za orkestraciju kranova, webhooks-a, i tako dalje.

## Uticaj na kupce

FART sistem je u proizvodnji već oko godine dana. Tek nedavno smo uradili migraciju na Aktivno-Aktivnu implementaciju.
Postoji neki uticaj na čitanje vlastitih pisanja širom regiona, što je obuhvaćeno u gore linkovanom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako je njegovo prisustvo uvek osetno. Nadamo se da ćete primetiti da su naši sistemi brži za vaše slučajeve korišćenja (većina korisničkih akcija koje rezultiraju promenama u podacima biće brža u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracioni sistem koji koristimo za deployovanje samih servisa. FART dokumentacija preporučuje Sloperators-u da nikada ne veruje u implementaciju, uvek proveri teret pre puštanja.

Post-implementacijska FART upozorenja prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na kraju

Kažu da je internet niz cevi, ali zapravo je to niz zvučnih signala.

Kao i kod svih većih izdanja, drago nam je da smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove promene. Uzbuđeni smo zbog onoga što dolazi. 
FastComments bi trebalo da se bolje skalira i ima bolje vreme rada na duže staze zahvaljujući ovom radu. Kao što kaže FART radna knjižica: "Ako nanjušite nešto, recite nešto". Javite nam ispod ako otkrijete bilo kakve probleme.

{{/isPost}}