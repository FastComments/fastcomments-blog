---
[category:Features]
###### [postdate]
# [postlink]Ažuriranje upravljanja zakupcima[/postlink]

{{#unless isPost}}
FastComments je poboljšao interakciju za upravljanje vašim zakupcima!
{{/unless}}

{{#isPost}}

### Šta je novo

Od 11. decembra 2023. FastComments sada omogućava prelazak između zakupaca bez impersonacije drugih korisnika zakupaca.

### Ciljna publika

Ovo ažuriranje nije namenjeno komentarima ili administratorima sajta koji vode jedan sajt. Ovo koristi administratorima koji vode mnoge sajtove ili zakupce samo.

### Uticaj na administratore

Prethodno, kreiranje zakupaca i prebacivanje korisnika je bilo mukotrpno. Neki uobičajeni problemi su bili:

1. Morali ste da kreirate korisnika prilikom kreiranja vašeg zakupca, jer je taj korisnik "posedovao" zakupca.
2. To je značilo da ste morali da koristite novu email adresu za svaki sajt, čak i ako ste želeli da koristite jednu email adresu/nalog za mnoge pod-zakupce.
3. Prebacivanje između zakupaca zahtevalo je impersonaciju, što je značilo da su vaši korisnici morali biti duplicirani preko svih zakupaca, sa istim dozvolama, i tako dalje.

Sada:

1. Nije potrebno kreirati korisnika prilikom kreiranja zakupca.
2. Bilo koji Super Admin korisnik sa odgovarajućim dozvolama ima iste dozvole u svim pod-zakupcima.
3. Postoji `Switch` dugme na listi zakupaca koje zadržava vašeg trenutnog korisnika i dozvole, ali menja koji je zakupac na koji ste prijavljeni.
4. Ako ste administrator glavnog zakupca, imate dozvole moderatora u pod-zakupcima kada koristite komentar widget.

Događaji se i dalje beleže u Audit Log za zakupca na koji ste prešli.

### Impersonacija

I dalje možete impersonirati korisnike. Prebacite se na zakupca i idite na stranicu `Users`.

### Za programere & zamerke

Kada koristite `POST /tenants` API, polje `email` je sada opcionalno. Dokumentacija je ažurirana.

### Buduća ažuriranja

U budućnosti će biti još nekih administrativnih akcija na listi zakupaca, poput brisanja zakupaca i tako dalje.

### Na kraju

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}