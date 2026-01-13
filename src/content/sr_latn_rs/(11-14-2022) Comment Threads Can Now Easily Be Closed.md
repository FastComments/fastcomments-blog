---
[category:Moderation]

###### [postdate]
# [postlink]Komentarska nit se sada može lako zatvoriti[/postlink]

{{#unless isPost}}
FastComments je uvek omogućavao da označite komentarske niti kao samo za čitanje putem koda ili pravila prilagođavanja, ali sada to može lako
da se uradi iz samog widget-a za komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek omogućavao da označite komentarske niti kao samo za čitanje putem koda ili pravila prilagođavanja, ali sada to može lako
da se uradi iz samog widget-a za komentare.

U gornjem meniju sa tri tačke u području komentara, administratori ili bilo ko ko ima dozvole za moderaciju sada će imati opciju
da **zatvore** komentarsku nit, a potencijalno da je **ponovno otvore** kasnije u bilo kom trenutku.

Ovo se malo razlikuje od podešavanja niti na `readonly` što ste možda radili do sada. Podešavanje niti na `readonly`
znači da se apsolutno ništa ne može promeniti na stranici - više nema komentara, nema glasova, nema uređivanja komentara, nema uklanjanja komentara.

Zatvaranje komentarske niti je malo drugačije - komentari se ne mogu dodavati, ali korisnici i dalje mogu obrisati svoje komentare ako žele.
Pored toga, glasovi se i dalje mogu ostaviti ili ukloniti.

### Uživo

Poput ostatka FastComments, zatvaranje i ponovo otvaranje komentarskih niti je u realnom vremenu i odmah će uticati na sve korisnike koji pregledaju tu nit.

### Kako dobiti

Ova funkcija je dostupna svim kupcima!

### Prilagođavanje teksta

Nova prevodna poruka, `THREAD_CLOSED`, sa podrazumevanom engleskom vrednošću `Ova komentarska nit je zatvorena za nove komentare.` je dodata.

Ovaj tekst se uvek može prilagoditi putem UI prilagođavanja widget-a.

### U zaključku

Poput svih većih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}