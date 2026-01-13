---
[category:Moderation]

###### [postdate]
# [postlink]Komentarni nizovi se sada lako mogu zatvoriti[/postlink]

{{#unless isPost}}
FastComments je oduvek omogućavao da komentarske nizove označite kao samo za čitanje putem koda ili pravila prilagodbe, ali sada to može lako
da se uradi iz samog komentarskog vidgeta.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je oduvek omogućavao da komentarske nizove označite kao samo za čitanje putem koda ili pravila prilagodbe, ali sada to može lako
da se uradi iz samog komentarskog vidgeta.

U gornjem meniju sa tri tačke u području komentara, administratori ili bilo ko sa dozvolom za moderaciju sada će imati opciju
da **zatvore** komentarni niz, i potencijalno da ga **ponovno otvore** kasnije u bilo kojem trenutku.

Ovo se malo razlikuje od postavljanja nizova kao `readonly` što ste možda radili do sada. Postavljanje niza kao `readonly`
znači da se apsolutno ništa ne može menjati na stranici - nema više komentara, nema glasova, nema uređivanja komentara, nema uklanjanja komentara.

Zatvaranje komentarnog niza je malo drugačije - komentari se ne mogu dodavati, ali korisnici mogu još uvek brisati svoje komentare ako žele.
Dodatno, glasovi se i dalje mogu ostaviti ili ukloniti.

### Uživo

Kao i ostatak FastComments, zatvaranje i ponovno otvaranje komentarnog niza je uživo i odmah će uticati na sve korisnike koji gledaju taj niz.

### Kako to dobiti

Ova funkcija je dostupna svim korisnicima!

### Prilagodbe teksta

Nova prevod, `THREAD_CLOSED`, sa podrazumevanom vrednošću na engleskom `This comment thread has been closed for new comments.` je dodata.

Ovaj tekst se uvek može prilagoditi putem UI prilagodbe widgea.

### Zaključak

Kao i svi veći izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---