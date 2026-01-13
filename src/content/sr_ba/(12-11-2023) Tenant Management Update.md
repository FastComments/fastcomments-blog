---
[category:Features]
###### [postdate]
# [postlink]Ažuriranje upravljanja zakupcima[/postlink]

{{#unless isPost}}
FastComments je poboljšao interakciju za upravljanje vašim zakupcima!
{{/unless}}

{{#isPost}}

### Šta je novo

Od 11. decembra 2023. FastComments sada nudi mogućnost prebacivanja između zakupaca bez impersonacije drugih korisnika zakupaca.

### Ciljna publika

Ovo ažuriranje nije namenjeno komentatorima ili administratorima sajta koji vode jedinstveni sajt. Ovo koristi adminima koji vode mnogo sajtova ili samo zakupaca.

### Uticaj na administratore

Prethodno, kreiranje zakupaca i prebacivanje korisnika je bilo mučno. Neki uobičajeni problemi su bili:

1. Morali ste da kreirate korisnika prilikom kreiranja vašeg zakupca, pošto je taj korisnik "posedovao" zakupca.
2. To je značilo da ste morali da koristite novu email adresu za svaku lokaciju, čak i ako ste želeli da koristite jednu email/adresu za mnoge podzakupce.
3. Prebacivanje između zakupaca zahtevalo je impersonaciju, što je značilo da su vaši korisnici morali biti duplicirani između svih zakupaca, sa istim dozvolama i tako dalje.

Sada:

1. Nema potrebe za kreiranjem korisnika prilikom kreiranja zakupca.
2. Svaki Super Admin korisnik sa odgovarajućim dozvolama ima iste dozvole u svim podzakupcima.
3. Postoji `Switch` dugme na listi zakupaca koje zadržava vaš trenutni korisnik i dozvole, ali menja u kojem zakupcu ste prijavljeni.
4. Ako ste administrator roditeljskog zakupca, imate moderatorske dozvole u podzakupcima kada koristite widget za komentare.

Događaji se i dalje beleže u Audit Log za zakupca na koji ste prebacili.

### Impersonacija

Još uvek možete impersonirati korisnike. Prebacite se na zakupca i idite na stranicu `Users`.

### Za developere & zamke

Kada koristite `POST /tenants` API, `email` polje je sada opcionalno. Dokumentacija je ažurirana.

### Budeće ažuriranja

U budućnosti će biti još administrativnih akcija na listi zakupaca, poput brisanja zakupaca i slično.

### Na zaključku

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---