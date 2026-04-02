---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Sistem za automatski transport i usmjeravanje FastComments[/postlink]

{{#unless isPost}}
Upoznajte sistem za automatski transport i usmjeravanje FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Sistem za automatski transport i usmjeravanje FastComments (FARTS) je naš transportni i servisni sloj. FARTS pomaže u smanjenju zagušenja, usmjeravajući saobraćaj na osnovu lokacije korisnika i potencijalnog opterećenja u budućnosti. Sastoji se od nekoliko različitih sistema, geo-svjesnog DNS sloja, DB proxy-a, replikacije baze podataka, upravljanja SSL certifikatima, obrnutog proxy-a i CDN-a koji koristi LRU keš na disku za keširanje resursa na ivici.

## Aktivno-Aktivno

Najnovija verzija FART-a sadrži ugrađeni proxy i replikacioni sloj za našu bazu podataka. Ovo omogućava FastComments da bude Aktivno-Aktivno sa globalnom dostupnošću pisanja, što osigurava da su naši FARTS na kraju dosljedni. [Više detalja ovde](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Jedan pristup koji smo zapravo preuzeli na početku bio je vidjeti možemo li stvoriti aktivno-aktivni fork MongoDB-a. Jedan od naših inženjera (Sloperators) je to zapravo uspio ostvariti sa Opus 4.6, međutim, odlučili smo da je rizik od toga veći nego izgraditi naš vlastiti izolovani sistem.

## Rust na skali

Jedan deo motivacije za kreiranje FART-a bio je zamjena nekih postojećih servisa napisanih u Javi. Nakon što smo razmislili o tome, odlučili smo da ih konsolidujemo u jedan Rust servis kako bismo smanjili opterećenje u vreme izvršenja. Ovo je bio prihvatljiv kompromis pošto ne primjenjujemo FART često. FART se kompajlira sa LTO, tako da zaista možemo da ga oslobodimo.

Proveli smo puno vremena pokušavajući da optimizujemo stari Java sistem sa različitim GC-ima itd., i na kraju smo jednostavno odlučili da async Rust + Mimalloc daju značajno bolje performanse na istom hardveru sa mnogo nižim zahtjevima za memorijom, pa je prelazak bio očigledan.

Rust se pokazao kao izuzetno dobar za kod povezan sa mrežom koji koristi deljene heapove i brave. Međutim, nije neprobojan za probleme prilikom izvršavanja.
Možda je vredno napomenuti da je kod napisan od strane LLM-ova u Rust-u prilično podložan mrtvim blokadama, a način da se to izbegne je projektovanje sistema kao laganih za razumevanje stanja mašine, umesto da budu samo gomile async/await.

## FART Master

Svaka implementacija sadrži svoj sopstveni FART Master. Master je odgovoran za orkestraciju kronskih zadataka, webhooks-a i slično.

## Uticaj na korisnike

FART sistem je u produkciji već oko godinu dana. Tek smo nedavno izvršili migraciju na Aktivno-Aktivnu implementaciju.
Postoji neki uticaj na čitanje vaših sopstvenih pisanja preko regiona, što je pokriveno u gorenavedenom blog postu i [u dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART tiho radi u pozadini, iako se njegova prisutnost uvek oseća. Nadamo se da će naši sistemi biti brži za vaše slučajeve upotrebe (većina korisničkih akcija koje rezultiraju promenama podataka biće brže u nekim regionima).

## Implementacije

Implementacija koristi isti globalni orkestracioni sistem koji koristimo za implementaciju samih servisa. FART dokumentacija preporučuje Sloperators da nikada ne veruju jednoj implementaciji, uvek potvrdite payload pre nego što pustite.

Nakon implementacije, FART upozorenja prate politiku eskalacije: prvo soba, zatim sprat, zatim zgrada.

## Na kraju

Kažu da je internet serija cevi, ali zapravo je serija isparavanja.

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vreme za optimizaciju, testiranje i pravilno izdavanje ove promene. Uzbuđeni smo zbog onoga što dolazi. FastComments bi trebalo da se bolje skalira i ima bolju dostupnost na duži rok zahvaljujući ovom radu. Kao što kaže FART runbook: "Ako nešto osetite, recite nešto". Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}