---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Sada je podržana autentifikacija lozinkom[/postlink]

{{#unless isPost}}
Sa ovom ažuriranjem, FastComments sada podržava tradicionalnu autentifikaciju osnovanu na lozinkama pored postojećeg sistema zasnovanog na email-u.
{{/unless}}

{{#isPost}}

### Šta je novo

Od lansiranja, FastComments je autentifikovao korisnike putem magičnih email linkova. To je bilo zato što smo mogli konsolidovati naše mehanizme prijavljivanja u isti sistem koji se koristi kada korisnik ostavi svoj prvi komentar i verifikuje/se prijavi putem linka zasnovanog na email-u. Ipak, nisu svi email serveri isti, a ponekad je primanje linka moglo trajati i nekoliko minuta. To je za neke naše korisnike bilo veoma frustrirajuće.

Od kraja 2023. FastComments sada podržava autentifikaciju putem lozinki! Na stranici za prijavu sada postoje dva taba - jedan za prijavu putem email-a i jedan za prijavu putem lozinke.

### Kako postaviti lozinku

Možete postaviti lozinku tako što ćete otići na [Moj Nalog -> Detalji o Nalog -> Promena Lozinke](https://fastcomments.com/auth/my-account/edit-details/change-password).

Jednostavno zatražite link za resetovanje. Link će biti poslat na vaš email, a kada kliknete na njega, moći ćete da postavite novu lozinku. Link radi samo jednom i ističe ako se ne koristi.

### Čuvanje lozinki i sigurnost

Lozinke se ne čuvaju. Umesto toga, lozinke se heširaju sa 11 rundi soli koristeći bcrypt. Konkurencija prema sistemu zasnovanom na lozinkama je ograničena i nadgledana kako bi se sprečili različiti tipovi napada vezanih za lozinke.

### Budućnost

U budućnosti planiramo da podržimo i 2FA.

### Na kraju

Kao i svaka velika verzija, drago nam je da smo mogli odvojiti vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---