---
[category:Integrations]
###### [postdate]
# [postlink]Ubacivanje komentara na GatsbyJS sajtu uz FastComments[/postlink]

{{#unless isPost}}
Sada možete koristiti FastComments za ubacivanje komentara na sajtu napravljenom u Gatsby-ju!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

U nedavnom smo lansirali naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponent</a> za FastComments.

To otvara mnogo mogućnosti - uključujući integraciju FastComments sa Gatsby-jem.

#### Ako ste napisali svoj vlastiti omotač

Ako ste napisali svoj vlastiti React omotač za FastComments - razmislite o tome da ga zamenite našim novim. Održavaćemo ovu apstrakciju za vas - i sadrži mnogo
korisnih funkcija poput <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatskog ponovnog učitavanja na promene konfiguracije</a>.

#### Kako to funkcioniše

Pošto FastComments ima React komponentu kao omotač oko našeg osnovnog vidžeta - samo je pitanje korišćenja naše React biblioteke da instancirate vidžet na klijentskoj strani.

Puno podržavamo ovu komponentu i održavaćemo je ažuriranom.

#### Primeri?

Počeli smo da postavljamo primere, koje možete pronaći <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ovde</a>.

#### Noćni režim

Jedan od primera koje imamo je "noćni režim" - prikazivanje FastComments na sajtu sa crnom (ili veoma tamnom) pozadinom: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Pored toga, pošto vidžet reaguje na promene konfiguracije, to znači da možete imati režim za prebacivanje teme vašeg sajta i lako reći fastcomments-react da se ažurira.

#### Na kraju

Nadamo se da ćete pronaći integraciju FastComments u vaš Gatsby sajt brzu i jednostavnu.

Živeli!

{{/isPost}}

---