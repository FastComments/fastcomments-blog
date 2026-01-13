---
[category:Features]
###### [postdate]
# [postlink]Ažuriranje upravljanja najmoprimcima[/postlink]

{{#unless isPost}}
FastComments je poboljšao interakciju za upravljanje vašim najmoprimcima!
{{/unless}}

{{#isPost}}

### Što je novo

Od 11. prosinca 2023. FastComments sada nudi mogućnost prebacivanja između najmoprimaca bez imitacije drugih korisnika najmoprimaca.

### Ciljna publika

Ova ažuriranja nisu namijenjena komentatorima ili administratorima stranica koji vode jednu stranicu. Ovo koristi administratorima koji vode mnoge stranice ili samo najmoprimce.

### Utjecaj na administratore

Ranije je stvaranje najmoprimaca i prebacivanje korisnika bilo problematično. Neki uobičajeni problemi bili su:

1. Morali ste stvoriti korisnika prilikom stvaranja svog najmoprimca, jer je taj korisnik "posjedovao" najmoprimca.
2. To je značilo da ste morali koristiti novu e-poštu za svaku stranicu, čak i ako ste željeli koristiti jednu e-poštu/račun za mnoge pod-najmoprimce.
3. Prebacivanje najmoprimaca zahtijevalo je imitaciju, što znači da su vaši korisnici morali biti duplicirani među svim najmoprimcima, s istim dozvolama i tako dalje.

Sada:

1. Nije potrebno stvaranje korisnika prilikom stvaranja najmoprimca.
2. Bilo koji korisnik Super Admin s odgovarajućim dozvolama ima iste dozvole u svim pod-najmoprimcima.
3. Postoji gumb `Switch` u popisu najmoprimaca koji zadržava vaš trenutni korisnički račun i dozvole, ali mijenja u kojem najmoprimcu ste prijavljeni.
4. Ako ste administrator glavnog najmoprimca, imate dozvole moderatora u pod-najmoprimcima kada koristite komentarni widget.

Događaji se i dalje bilježe u Audit Log za najmoprimca na koji ste prebačeni.

### Imitacija

Još uvijek možete imitirati korisnike. Prebacite se na najmoprimca i idite na stranicu `Users`.

### Za programere & zamke

Kada koristite `POST /tenants` API, polje `email` je sada opcionalno. Dokumentacija je ažurirana.

### Buduća ažuriranja

U budućnosti će biti još nekih administrativnih radnji u popisu najmoprimaca, kao što su brisanje najmoprimaca i slično.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---