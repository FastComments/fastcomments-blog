---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Autentifikacija putem lozinke je sada podržana[/postlink]

{{#unless isPost}}
Sa ovim ažuriranjem, FastComments sada podržava tradicionalnu autentifikaciju zasnovanu na lozinkama, pored postojećeg sistema zasnovanog na e-pošti.
{{/unless}}

{{#isPost}}

### Šta je novo

Od lansiranja, FastComments je autentifikovao putem magičnih linkova u e-pošti. To je bilo zato što smo mogli da konsolidujemo mehanizme prijavljivanja u isti sistem koji se koristi kada korisnik ostavi svoj prvi komentar i verifikuje se/prijavi putem linka zasnovanog na e-pošti. Međutim, nisu svi e-mail serveri isti, i ponekad je primanje linka moglo da traje i po nekoliko minuta. To je bilo veoma frustrirajuće za neke od naših korisnika.

Krajem 2023. godine, FastComments sada podržava autentifikaciju putem lozinki! Na stranici za prijavu sada postoje dve kartice - jedna za prijavu putem e-pošte i jedna za prijavu putem lozinke.

### Kako postaviti lozinku

Možete postaviti lozinku tako što ćete otići na [Moj nalog -> Detalji naloga -> Promeni lozinku](https://fastcomments.com/auth/my-account/edit-details/change-password).

Jednostavno zatražite link za resetovanje. Link će biti poslat na vašu e-poštu, a kada kliknete na njega, moći ćete da postavite novu lozinku. Link funkcioniše samo jednom i ističe ako se ne koristi.

### Čuvanje lozinki i sigurnost

Lozinke se ne čuvaju. Umesto toga, lozinke se heširaju uz pomoć 11-rundnog soli koristeći bcrypt. Paralelni pristup sistemu zasnovanom na lozinkama je ograničen i nadgledan kako bi se sprečile razne vrste napada povezanih sa lozinkama.

### Budućnost

U budućnosti planiramo da podržimo i 2FA.

### Na kraju

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam ispod ako otkrijete bilo kakve probleme.

Pozdrav! 

{{/isPost}}