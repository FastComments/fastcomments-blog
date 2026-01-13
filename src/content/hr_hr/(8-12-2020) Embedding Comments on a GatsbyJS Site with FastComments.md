---
[category:Integrations]
###### [postdate]
# [postlink]Uključivanje komentara na GatsbyJS web stranici s FastComments[/postlink]

{{#unless isPost}}
Sada možete koristiti FastComments za uključivanje komentara na web stranicu izrađenu s Gatsbyjem!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Što je novo

Nedavno smo lansirali naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponentu</a> za FastComments.

To otvara brojne mogućnosti - uključujući integraciju FastComments s Gatsbyjem.

#### Ako ste napisali vlastiti omotač

Ako ste napisali vlastiti React omotač za FastComments - razmislite o zamjeni s našim novim. Održavat ćemo ovu apstrakciju za vas - a ona sadrži puno
korisnih stvari poput <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatskog ponovnog učitavanja prilikom promjena konfiguracije</a>.

#### Kako to funkcionira

Budući da FastComments ima React komponentu kao omotač oko našeg osnovnog widgeta - samo je potrebno koristiti našu React biblioteku za instanciranje widgeta na klijentskoj strani.

Potpuno podržavamo ovu komponentu i redovito ćemo je ažurirati.

#### Primjeri?

Počeli smo postavljati primjere, koje možete pronaći <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ovdje</a>.

#### Noćni način

Jedan od primjera koji imamo je "noćni način" - prikazivanje FastComments na web stranici s crnom (ili vrlo tamnom) pozadinom: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Osim toga, budući da widget reagira na promjene konfiguracije, to znači da možete imati mod za prebacivanje teme vaše web stranice i lako reći fastcomments-react da ažurira.

#### U zaključku

Nadamo se da će vam integracija FastComments u vašu Gatsby web stranicu biti brza i jednostavna.

Živjeli!

{{/isPost}}

---