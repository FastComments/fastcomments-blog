---
[category:Features]
###### [postdate]
# [postlink]Ažuriranje upravljanja korisnicima[/postlink]

{{#unless isPost}}
FastComments je poboljšao interakciju za upravljanje vašim korisnicima!
{{/unless}}

{{#isPost}}

### Šta je novo

Od 11. decembra 2023, FastComments sada ima mogućnost prebacivanja između korisnika bez da se imitira drugi korisnički račun.

### Ciljna publika

Ovo ažuriranje nije namenjeno komentatorima ili administratorima sajta koji vode jedan sajt. Ovo koristi samo administratorima koji vode više sajtova ili korisnika.

### Uticaj na administratore

Prethodno, kreiranje korisnika i prebacivanje bilo je frustrirajuće. Neki uobičajeni problemi su bili:

1. Morali ste da kreirate korisnika prilikom kreiranja vašeg korisnika, jer je taj korisnik "posedovao" korisnika.
2. To je značilo da ste morali da koristite novu email adresu za svaki sajt, čak i ako ste želeli da koristite jedan email/račun za mnoge pod-korisnike.
3. Prebacivanje između korisnika zahtevalo je imitaciju, što je značilo da ste morali duplicirati korisnike preko svih korisnika, sa istim dozvolama, itd.

Sada:

1. Kreiranje korisnika nije potrebno prilikom kreiranja korisnika.
2. Svaki Super Admin korisnik sa odgovarajućim dozvolama ima iste dozvole u svim pod-korisnicima.
3. Postoji dugme `Switch` u listi korisnika koje zadržava vaš trenutni korisnički račun i dozvole, ali menja korisnika na kojem ste prijavljeni.
4. Ako ste administrator roditeljske korisničke grupe, imate moderatorske dozvole u pod-korisnicima prilikom korišćenja komentatorskog widgeta. 

Događaji se i dalje beleže u Audit Log za korisničku grupu kojoj ste prebačeni.

### Imitacija

Još uvek možete imitirati korisnike. Prebacite se na korisničku grupu i idite na stranicu `Users`.

### Za programere & nedoumice

Kada koristite `POST /tenants` API, polje `email` je sada opcionalno. Dokumentacija je ažurirana.

### Buduća ažuriranja

U budućnosti će biti još nekih administrativnih akcija u listi korisnika, kao što su brisanje korisnika i tako dalje.

### Zaključak

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---