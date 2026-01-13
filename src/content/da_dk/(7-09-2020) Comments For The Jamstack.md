---
[category:Integrations]
###### [postdate]
# [postlink]Kommentarer til Jamstack[/postlink]

{{#unless isPost}}
Det gamle er blevet nyt igen. Forudrendering og servering af sites fra en CDN kaldes nu "JamStack" - men de behøver ikke at være helt statiske!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk terminologi

<a href="https://jamstack.org/" target="_blank">Jamstack</a> er en måde at skrive et website på, der ikke er afhængig af en traditionel webserver. I stedet bliver de
serveret fra servere, som vi kalder en "CDN" for den bedste brugeroplevelse (de indlæses meget hurtigt). Ydeevne er en stor prioritet for sites skrevet med Jamstack - ligesom
FastComments.

#### Hvorfor FastComments virker med Jamstack

FastComments kræver kun et lille (< 11kb i øjeblikket) kodeuddrag nederst på den statiske side, hvor du ønsker at tilføje kommentarer. Således tager det kun et par sekunder at installere FastComments på et typisk
Jamstack-site, ligesom på ethvert statisk site.

#### Potentielle problemer

Vi forstår, at Jamstack-sider ikke altid starter som noget statisk. De kan for eksempel være lavet med Preact, React eller Vue. Skrevet i ren JS har vi bygget FastComments-widgeten
for maksimal interoperabilitet til at fungere med alle større rammer. Men hvis du støder på problemer med FastComments og den valgte ramme, så
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">lad os vide det</a>.

#### Afslutning

Vi håber, at du finder, at FastComments giver dine brugere mulighed for at interagere med dit site, give feedback og efterlade kommentarer på måder, de normalt ikke kunne på et statisk site.
For eksempel er denne side forudrenderet ligesom et traditionelt Jamstack-site, og du kan se FastComments fungerer gladeligt nederst.

Skål!

{{/isPost}}

---