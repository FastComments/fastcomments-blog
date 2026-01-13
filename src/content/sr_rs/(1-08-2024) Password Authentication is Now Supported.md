---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Podrška za autentifikaciju lozinkom je sada dostupna[/postlink]

{{#unless isPost}}
Sa ovom nadogradnjom, FastComments sada podržava tradicionalnu autentifikaciju zasnovanu na lozinkama pored postojećeg sistema zasnovanog na emailu.
{{/unless}}

{{#isPost}}

### Šta je novo

Od lansiranja, FastComments je autentifikovao korisnike putem čarobnih email linkova. To je bilo zato što smo mogli da konsolidujemo naše mehanizme prijave u isti sistem koji se koristi kada korisnik ostavi svoj prvi komentar i verifikuje/prijavi se putem linka zasnovanog na emailu. Međutim, nisu svi email serveri isti, i ponekad je primanje linka moglo potrajati nekoliko minuta. Ovo je bilo vrlo frustrirajuće za neke od naših korisnika.

Od kraja 2023. FastComments sada podržava autentifikaciju putem lozinki! Na stranici za prijavu sada su dostupne dve kartice - jedna za prijavu putem emaila i jedna za prijavu putem lozinke.

### Kako postaviti lozinku

Možete postaviti lozinku tako što ćete otići na [Moj Nalog -> Detalji o Nalog -> Promeni Lozinku](https://fastcomments.com/auth/my-account/edit-details/change-password).

Jednostavno zatražite link za resetovanje. Link će biti poslat na vašu email adresu, a kada kliknete na njega, moći ćete da postavite novu lozinku. Link funkcioniše samo jednom i ističe ako se ne koristi.

### Čuvanje i bezbednost lozinki

Lozinke se ne čuvaju. Umesto toga, lozinke se hešuju sa 11 krugova soli koristeći bcrypt. Paralelni pristup sistemu zasnovanom na lozinkama je ograničen i nadgledan kako bi se sprečili različiti oblici napada povezanih sa lozinkama.

### Budućnost

U budućnosti planiramo da podržimo i 2FA.

### Zaključak

Kao i sa svim većim izdanjima, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam ispod ako otkrijete neke probleme.

Živeli!

{{/isPost}}

---