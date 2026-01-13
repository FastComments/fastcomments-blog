---
[category:Moderation]

###### [postdate]
# [postlink]Komentarni nizi sada lako mogu biti zatvoreni[/postlink]

{{#unless isPost}}
FastComments je oduvek omogućavao označavanje komentarskih nizova kao read-only putem koda ili pravila prilagođavanja, ali sada to može biti lako
urađeno direktno iz samog komentatorskog vidžeta.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je oduvek omogućavao označavanje komentarskih nizova kao read-only putem koda ili pravila prilagođavanja, ali sada to može biti lako
urađeno direktno iz samog komentatorskog vidžeta.

U gornjem meniju sa tri tačke u području komentara, administratori ili bilo ko sa dozvolom za moderaciju sada će imati opciju
da **zatvore** komentarni niz, i potencijalno **ponovno otvore** ga kasnije u bilo momento.

Ovo se nešto razlikuje od postavljanja nizova `read-only` što ste možda radili do sada. Postavljanje niza `read-only`
znači da se apsolutno ništa ne može promeniti na stranici - nema više komentara, nema glasova, nema uređivanja komentara, nema uklanjanja komentara.

Zatvaranje komentarnih nizova je malo drugačije - komentari se ne mogu dodavati, ali korisnici još uvek mogu obrisati svoje komentare ako to žele.
Pored toga, glasovi mogu još uvek biti ostavljeni ili uklonjeni.

### UŽIVO

Kao i ostatak FastComments-a, zatvaranje i ponovno otvaranje komentarnih nizova je u realnom vremenu i trenutnu će uticati na bilo koje korisnike koji gledaju taj niz.

### Kako to dobiti

Ova funkcija je puštena svim korisnicima!

### Prilagođavanje teksta

Nova prevodna oznaka, `THREAD_CLOSED`, sa podrazumevanom vrednošću na engleskom `This comment thread has been closed for new comments.` je dodata.

Ovaj tekst se uvek može prilagoditi putem UI za prilagođavanje vidžeta.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i ispravno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---