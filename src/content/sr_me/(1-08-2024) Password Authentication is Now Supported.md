---
[category:Bezbednost]
[category:Karakteristike]
###### [postdate]
# [postlink]Podrška za autentifikaciju lozinkom je sada dostupna[/postlink]

{{#unless isPost}}
Sa ovom ažuriranjem, FastComments sada podržava tradicionalnu autentifikaciju zasnovanu na lozinkama pored postojećeg sistema zasnovanog na e-pošti.
{{/unless}}

{{#isPost}}

### Šta je novo

Od lansiranja, FastComments se autentifikovao putem magičnih email linkova. Ovo je bilo zato što smo mogli da konsolidujemo naše mehanizme prijave u isti sistem koji se koristi kada korisnik ostavlja svoj prvi komentar i verifikuje/prijavljuje se putem linka zasnovanog na e-pošti. Međutim, nisu svi email serveri isti, i ponekad je primanje linka moglo potrajati minuta. Ovo je bilo vrlo frustrirajuće za neke od naših korisnika.

Krajem 2023. godine, FastComments sada podržava autentifikaciju putem lozinki! Na stranici za prijavljivanje sada postoje dva taba - jedan za prijavu putem e-pošte i jedan za prijavu putem lozinke.

### Kako postaviti lozinku

Možete postaviti lozinku odlaskom na [Moj Nalog -> Detalji o Nalogu -> Promeni Lozinku](https://fastcomments.com/auth/my-account/edit-details/change-password).

Jednostavno zatražite link za resetovanje. Link će biti poslat na vašu e-poštu, a nakon što kliknete na njega, bićete u mogućnosti da postavite novu lozinku. Link funkcioniše samo jednom i ističe ako se ne koristi.

### Skladištenje lozinki i bezbednost

Lozinke se ne skladište. Umesto toga, lozinke se haširaju sa 11 krugova soli koristeći bcrypt. Konkurentnost prema sistemu zasnovanom na lozinkama je ograničena
i praćena kako bi se sprečili razni tipovi napada vezanih za lozinke.

### Budućnost

U budućnosti planiramo da podržimo i 2FA.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---