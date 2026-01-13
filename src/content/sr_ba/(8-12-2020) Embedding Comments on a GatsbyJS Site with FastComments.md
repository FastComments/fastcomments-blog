---
[category:Integrations]
###### [postdate]
# [postlink]Ugrađivanje komentara na GatsbyJS sajtu pomoću FastComments[/postlink]

{{#unless isPost}}
Sada možete koristiti FastComments za ugrađivanje komentara na sajt napravljen sa Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

Nedavno smo lansirali naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponentu</a> za FastComments.

To otvara mnogo prilika - uključujući integraciju FastComments sa Gatsby.

#### Ako ste napisali svoj vlastiti wrapper

Ako ste napisali svoj vlastiti React wrapper za FastComments - razmislite o tome da ga zamenite našim novim. Održavaćemo ovu apstrakciju za vas - i sadrži mnogo
korisnih stvari poput <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatskog osvežavanja pri promenama konfiguracije</a>.

#### Kako to funkcioniše

Pošto FastComments ima React komponentu kao wrapper oko našeg osnovnog widget-a - sve što treba da uradite je da koristite našu React biblioteku za instanciranje widget-a na klijentskoj strani.

Potpuno podržavamo ovu komponentu i održavaćemo je ažurnom.

#### Primeri?

Počeli smo da postavljamo primere, koje možete pronaći <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ovde</a>.

#### Noćni režim

Jedan od primera koje imamo je "noćni režim" - renderovanje FastComments na sajtu sa crnom (ili vrlo tamnom) pozadinom: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Pored toga, pošto widget reaguje na promene u konfiguraciji, to znači da možete imati mod za prebacivanje teme vašeg sajta i lako reći fastcomments-react-u da se ažurira.

#### Na kraju

Nadamo se da ćete integraciju FastComments u vaš Gatsby sajt smatrati brzim i jednostavnim.

Pozdrav!

{{/isPost}}

---