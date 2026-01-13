---
[category:Features]
###### [postdate]
# [postlink]Ažuriranje upravljanja zakupcima[/postlink]

{{#unless isPost}}
FastComments je poboljšao interakciju za upravljanje vašim zakupcima!
{{/unless}}

{{#isPost}}

### Šta je novo

Od 11. decembra 2023. FastComments sada omogućava prebacivanje između zakupaca bez oponašanja drugih korisnika zakupaca.

### Ciljna publika

Ovo ažuriranje nije namenjeno komentatorima ili administratorima sajtova koji vode jedan sajt. Ovo koristi administratorima koji vode mnoge sajtove ili zakupce.

### Uticaj na administratore

Prethodno, kreiranje zakupaca i prebacivanje korisnika je bio problem. Neki uobičajeni problemi su bili:

1. Morali ste da kreirate korisnika prilikom kreiranja vašeg zakupca, jer je taj korisnik "posedovao" zakupca.
2. To je značilo da ste morali da koristite novu email adresu za svaki sajt, čak i ako ste želeli da koristite jednu email adresu/račun za mnogo pod-zakupaca.
3. Prebacivanje između zakupaca zahtevalo je oponašanje, što znači da su vaši korisnici morali da budu duplicirani između svih zakupaca, sa istim dozvolama, i tako dalje.

Sada:

1. Kreiranje korisnika nije potrebno prilikom kreiranja zakupca.
2. Svaki Super Admin korisnik sa odgovarajućim dozvolama ima iste dozvole u svim pod-zakupcima.
3. Postoji dugme `Switch` u listi zakupaca koje zadržava vaš trenutni korisnik i dozvole, ali menja koji zakupac ste prijavljeni.
4. Ako ste administrator glavnog zakupca, imate dozvole moderatora u pod-zakupcima kada koristite vidžet za komentare.

Događaji se još uvek beleže u Audit Log za zakupca na koji ste prebačeni.

### Oponašanje

Još uvek možete oponašati korisnike. Prebacite se na zakupca i idite na stranicu `Users`.

### Za programere i potaškoće

Kada koristite `POST /tenants` API, polje `email` je sada opcionalno. Dokumentacija je ažurirana.

### Buduća ažuriranja

U budućnosti će biti još nekih administrativnih akcija u listi zakupaca, kao što su brisanje zakupaca i slično.

### Kao zaključak

Kao i sa svim većim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---