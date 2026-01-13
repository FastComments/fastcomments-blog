---
[category:Integrations]
###### [postdate]
# [postlink]Ugradnja komentara na GatsbyJS sajtu koristeći FastComments[/postlink]

{{#unless isPost}}
Sada možete koristiti FastComments za ugradnju komentara na sajt napravljen sa Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

Nedavno smo pokrenuli naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponent</a> za FastComments.

Ovo otvara mnogo prilika - uključujući integraciju FastComments sa Gatsby.

#### Ako ste napisali svoj vlastiti omotač

Ako ste napisali svoj vlastiti React omotač za FastComments - razmislite o tome da ga zamenite našim novim. Održavaćemo ovu apstrakciju za vas - i sadrži mnogo
korisnih stvari poput <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatskog ponovnog učitavanja pri promeni konfiguracije</a>.

#### Kako to funkcioniše

Pošto FastComments ima React komponentu kao omotač oko našeg osnovnog vidgeta - samo je stvar korišćenja naše React biblioteke za instanciranje vidgeta na klijentskoj strani.

Potpuno podržavamo ovu komponentu i održavaćemo je ažuriranom.

#### Primeri?

Počeli smo sa postavljanjem primera, koje možete pronaći <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ovde</a>.

#### Noćni režim

Jedan od primera koje imamo je "noćni režim" - renderovanje FastComments na sajtu sa crnom (ili veoma tamnom) pozadinom: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Pored toga, pošto vidget reaguje na promene konfiguracije, to znači da možete imati režim za prebacivanje teme vašeg sajta i lako reći fastcomments-react da se ažurira.

#### U zaključku

Nadamo se da ćete integraciju FastComments u vaš Gatsby sajt pronaći brzom i jednostavnom.

Živeli!

{{/isPost}}