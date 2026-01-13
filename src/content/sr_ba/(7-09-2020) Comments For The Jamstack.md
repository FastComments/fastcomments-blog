---
[category:Integrations]
###### [postdate]
# [postlink]Komentari za Jamstack[/postlink]

{{#unless isPost}}
Što je staro, ponovo je novo. Pre-renderovanje i serviranje sajtova iz CDN-a sada se naziva "JamStack" - ali ne moraju biti potpuno statični!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

<a href="https://jamstack.org/" target="_blank">Jamstack</a> je način pisanja veb sajta koji ne zavisi od tradicionalnog veb servera. Umesto toga, servira se sa servera koje zovemo "CDN" za najbolje korisničko iskustvo (učitavaju se veoma brzo). Performanse su veliki prioritet za sajtove napisane sa Jamstack-om - baš kao i
FastComments.

#### Zašto FastComments radi sa Jamstack-om

FastComments zahteva samo mali (< 11kb trenutno) deo koda na dnu statične stranice kojoj želite da dodate komentare. Tako da, instalacija FastComments na tipičnom
Jamstack sajtu traje samo nekoliko sekundi kao i na bilo kom statičnom sajtu.

#### Potencijalni problemi

Razumemo da Jamstack sajtovi ne počinju uvek kao nešto statično. Mogu biti napravljeni sa Preact, React ili Vue na primer. Napisali smo FastComments widget
u vanilla JS-u za maksimalnu interoperabilnost kako bi radio sa svim glavnim okvirima. Međutim, ako naiđete na probleme sa FastComments i vašim odabranim okvirom, onda
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na kraju

Nadamo se da ćete pronaći da FastComments omogućava vašim korisnicima da interaguju sa vašim sajtom, daju povratne informacije i ostavljaju komentare na načine na koje to inače ne bi mogli na statičnom sajtu.
Na primer, ova stranica je pre-renderovana baš kao tradicionalni Jamstack sajt, i možete videti da FastComments uspešno radi na dnu.

Živeli!

{{/isPost}}

---