---
[category:Integrations]
###### [postdate]
# [postlink]Komentari Za Jamstack[/postlink]

{{#unless isPost}}
Što je staro, ponovo je novo. Pred-renderovanje i posluživanje sajtova sa CDN-a sada se zove "JamStack" - ali ne moraju biti potpuno statični!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

<a href="https://jamstack.org/" target="_blank">Jamstack</a> je način pisanja veb sajta koji ne zavisi od tradicionalnog veb servera. Umesto toga, oni se
poslužuju sa servera koje zovemo "CDN" za najbolje korisničko iskustvo (učitavaju se veoma brzo). Performanse su ogromni prioritet za sajtove napisane sa Jamstack-om - baš kao
FastComments.

#### Zašto FastComments Radi Sa Jamstack-om

FastComments zahteva samo mali (< 11kb trenutno) kod na dnu statične stranice kojoj želite da dodate komentare. Tako da, instalacija FastComments na tipičan
Jamstack sajt traje samo nekoliko sekundi kao bilo koji statični sajt.

#### Potencijalni Problemi

Razumemo da Jamstack sajtovi ne počinju uvek kao nešto statično. Mogu biti napravljeni sa Preact, React, ili Vue na primer. Napisali smo FastComments widget
u vanilla JS, za maksimalnu interoperabilnost sa svim glavnim framework-ima. Ipak, ako naiđete na probleme sa FastComments i vašim omiljenim framework-om,
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na Kraj

Nadamo se da ćete shvatiti da FastComments omogućava vašim korisnicima da komuniciraju sa vašim sajtom, daju povratne informacije, i ostavljaju komentare na način na koji to obično ne bi mogli na statičnom sajtu.
Na primer, ova stranica je pred-renderovana baš kao tradicioni Jamstack sajt, i možete videti kako FastComments uspešno radi na dnu.

Živeli!

{{/isPost}}

---