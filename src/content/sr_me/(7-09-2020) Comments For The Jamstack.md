---
[category:Integracije]
###### [postdate]
# [postlink]Komentari za Jamstack[/postlink]

{{#unless isPost}}
Što je staro, opet je novo. Pre-renderovanje i serviranje sajtova sa CDN-a sada se zove "JamStack" - ali ne moraju biti potpuno statični!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

<a href="https://jamstack.org/" target="_blank">Jamstack</a> je način pisanja veba koji ne zavisi od tradicionalnog veb servera. Umesto toga, serviraju se
sa servera koje nazivamo "CDN" za najbolji korisnički doživljaj (učitavaju se jako brzo). Performanse su ogromni prioritet za sajtove pisane sa Jamstack-om - baš kao i
FastComments.

#### Zašto FastComments Radi Sa Jamstack-om

FastComments zahteva samo mali (< 11kb trenutno) kod na dnu statične stranice kojoj želite da dodate komentare. Tako, instaliranje FastComments-a na tipičnom
Jamstack sajtu traje samo nekoliko sekundi, baš kao i svaki statični sajt.

#### Potencijalni Problemi

Razumemo da Jamstack sajtovi ne počinju uvek kao nešto statično. Mogu biti napravljeni sa Preact, React, ili Vue, na primer. Napisali smo FastComments widget
u čistom JS-u, za maksimalnu interoperabilnost sa svim glavnim okvirima. Međutim, ako naiđete na probleme sa FastComments-om i vašim omiljenim okvirom, 
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Zaključak

Nadamo se da ćete primetiti da FastComments omogućava vašim korisnicima da interaguju sa vašim sajtom, daju povratne informacije i ostavljaju komentare na načine na koje inače ne bi mogli na statičnom sajtu.
Na primer, ova stranica je pre-renderovana baš kao tradicioni Jamstack sajt, i možete videti kako FastComments srećno radi na dnu.

Živeli!

{{/isPost}}

---