---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Autentifikacija putem lozinke je sada podržana[/postlink]

{{#unless isPost}}
S ovom nadogradnjom FastComments sada podržava tradicionalnu autentifikaciju putem lozinke uz postojeći sustav temeljen na e-pošti.
{{/unless}}

{{#isPost}}

### Što je novo

Od lansiranja, FastComments se autentificirao putem čarobnih e-mail veza. To je bilo zato što smo mogli konsolidirati naše mehanizme prijave u isti sustav koji se koristi
kada korisnik ostavi svoj prvi komentar i potvrdi/prijavi se putem veze temeljenom na e-pošti. Međutim, nisu svi e-mail poslužitelji isti, a ponekad
primitak veze mogao bi trajati minute. To je bilo vrlo frustrirajuće za neke od naših korisnika.

Od kraja 2023. godine, FastComments sada podržava autentifikaciju putem lozinki! Na stranici za prijavu sada se nalaze dvije kartice - jedna za prijavu putem e-pošte i jedna za putem
lozinke.

### Kako postaviti lozinku

Možete postaviti lozinku odlaskom na [Moj račun -> Podaci o računu -> Promijeni lozinku](https://fastcomments.com/auth/my-account/edit-details/change-password).

Jednostavno zatražite poveznicu za resetiranje. Poveznica će biti poslana na vašu e-poštu, a nakon klika na nju moći ćete postaviti novu lozinku. Poveznica radi samo jednom i ističe ako se ne koristi.

### Pohrana lozinki i sigurnost

Lozinke se ne pohranjuju. Umjesto toga, lozinke su hashirane s 11-okruglim soljenjem koristeći bcrypt. Paralelni pristup sustavu temeljenom na lozinkama je ograničen
i nadgledan kako bi se spriječili različiti tipovi napada povezanih s lozinkama.

### Budućnost

U budućnosti planiramo podržati i 2FA.

### Zaključak

Kao i svi veliki izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---