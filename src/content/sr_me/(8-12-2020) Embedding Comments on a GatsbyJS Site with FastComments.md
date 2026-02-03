---
[category:Integrations]
###### [postdate]
# [postlink]Ugrađivanje Komentara na GatsbyJS Sajtu sa FastComments[/postlink]

{{#unless isPost}}
Sada možete koristiti FastComments za ugrađivanje komentara na sajt napravljen sa Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

#### Šta je Novo

Nedavno smo lansirali naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponent</a> za FastComments.

To otvara mnogo mogućnosti - uključujući integraciju FastComments sa Gatsby.

#### Ako Ste Napisali Svoj Vlastiti Wrapper

Ako ste napisali svoj vlastiti React wrapper za FastComments - razmislite o tome da ga zamenite našim novim. Održavaćemo ovu apstrakciju za vas - i sadrži mnogo
korisnih stvari kao što su <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatsko učitavanje prilikom promene konfiguracije</a>.

#### Kako Funkcioniše

Pošto FastComments ima React komponentu kao omotač oko našeg osnovnog widget-a - samo je pitanje korišćenja naše React biblioteke za instanciranje widget-a na klijentskoj strani.

Potpuno podržavamo ovu komponentu i držaćemo je ažuriranom.

#### Primeri?

Počeli smo da postavljamo primere, koje možete pronaći <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ovde</a>.

#### Noćni Mod

Jedan od primera koji imamo je "noćni mod" - renderovanje FastComments na sajtu sa crnom (ili veoma tamnom) pozadinom: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Pored toga, pošto widget reaguje na promene konfiguracije, to znači da možete imati mod za prebacivanje teme vašeg sajta i lako reći fastcomments-react-u da se ažurira.

#### U Zaključku

Nadamo se da ćete integraciju FastComments u vaš Gatsby sajt pronaći brzom i jednostavnom.

Pozdrav!

{{/isPost}}

---