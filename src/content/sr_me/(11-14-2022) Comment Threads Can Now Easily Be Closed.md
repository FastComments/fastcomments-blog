---
[category:Moderation]

###### [postdate]
# [postlink]Komentari sada mogu lako da se zatvore[/postlink]

{{#unless isPost}}
FastComments je uvek omogućavao da označite comment thread-ove kao readonly putem koda ili pravila prilagođavanja, ali sada to može lako
da se uradi direktno iz widget-a za komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek omogućavao da označite comment thread-ove kao readonly putem koda ili pravila prilagođavanja, ali sada to može lako
da se uradi direktno iz widget-a za komentare.

U meniju sa tri tačke na vrhu oblasti za komentare, administratori ili bilo ko sa dozvolom za moderaciju sada će imati mogućnost
da **zatvore** comment thread, i potencijalno **ponovno otvore** ga kasnije u bilo kom trenutku.

Ovo se malo razlikuje od postavljanja thread-ova na `readonly` što ste možda do sada radili. Postavljanje thread-a na `readonly`
znači da apsolutno ništa ne može da se menja na stranici - nema novih komentara, nema glasova, nema uređivanja komentara, nema brisanja komentara.

Zatvaranje comment thread-a je malo drugačije - komentari ne mogu biti dodati, ali korisnici još uvek mogu da obrišu svoje komentare ako to žele.
Pored toga, glasovi mogu i dalje da budu dati ili uklonjeni.

### Uživo

Kao i ostatak FastComments, zatvaranje i ponovno otvaranje comment thread-ova je uživo i odmah će uticati na sve korisnike koji gledaju taj thread.

### Kako to dobiti

Ova funkcija je puštena svim korisnicima!

### Prilagođavanje teksta

Nova prevodna vrednost, `THREAD_CLOSED`, sa podrazumevanom engleskom vrednošću `Ovaj thread za komentare je zatvoren za nove komentare.` je dodata.

Ovaj tekst uvek može biti prilagođen putem UI za prilagođavanje widget-a.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---