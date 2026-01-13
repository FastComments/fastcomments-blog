---
[category:Moderacija]

###### [postdate]
# [postlink]Niti za komentare sada se mogu lako zatvoriti[/postlink]

{{#unless isPost}}
FastComments vam je oduvijek omogućio označavanje niti komentara kao samo za čitanje putem koda ili pravila prilagodbe, ali sada to može
biti lako učinjeno iz samog widgeta za komentare.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments vam je oduvijek omogućio označavanje niti komentara kao samo za čitanje putem koda ili pravila prilagodbe, ali sada to može
biti lako učinjeno iz samog widgeta za komentare.

U gornjem izborniku s tri točke u području komentara, administratori ili bilo tko s dozvolom za moderiranje sada će imati opciju
za **zatvaranje** niti komentara, a potencijalno i **ponovno otvaranje** u bilo kojem trenutku kasnije.

To se malo razlikuje od postavljanja niti `readonly` što ste možda radili do sada. Postavljanje niti `readonly`
znači da se apsolutno ništa ne može promijeniti na stranici - više nema komentara, nema glasova, nema uređivanja komentara, nema uklanjanja komentara.

Zatvaranje niti komentara je malo drugačije - komentari se ne mogu dodavati, ali korisnici i dalje mogu izbrisati svoje komentare ako žele.
Dodatno, glasovi se i dalje mogu dodavati ili uklanjati.

### U Živo

Kao i ostatak FastComments-a, zatvaranje i ponovno otvaranje niti komentara je u živo i odmah će utjecati na sve korisnike koji pregledavaju tu nit.

### Kako to dobiti

Ova značajka je implementirana za sve kupce!

### Prilagodbe teksta

Nova prijevodna oznaka, `THREAD_CLOSED`, s zadanom vrijednošću na engleskom `This comment thread has been closed for new comments.` je dodana.

Ovaj tekst se uvijek može prilagoditi putem UI-a za prilagodbu widgeta.

### Zaključno

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. Javite nam
u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---