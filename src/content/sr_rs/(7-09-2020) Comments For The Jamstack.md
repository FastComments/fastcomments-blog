---
[category:Integrations]
###### [postdate]
# [postlink]Komentari za Jamstack[/postlink]

{{#unless isPost}}
Ono što je staro ponovo je novo. Pred-renderovanje i pružanje sajtova preko CDN-a se sada naziva "JamStack" - ali ne moraju biti potpuno statični!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

<a href="https://jamstack.org/" target="_blank">Jamstack</a> je način pisanja veb sajta koji ne zavisi od tradicionalnog veb servera. Umesto toga, oni se
pružaju sa servera koje zovemo "CDN" za najbolje korisničko iskustvo (učitavaju se veoma brzo). Performanse su veliki prioritet za sajtove napisane sa Jamstack-om - baš kao i
FastComments.

#### Zašto FastComments funkcioniše sa Jamstack-om

FastComments zahteva samo mali (< 11kb trenutno) kod na dnu statične stranice na kojoj želite da dodate komentare. Tako, instalacija FastComments na tipičnom
Jamstack sajtu traje samo nekoliko sekundi, baš kao i na svakom statičnom sajtu.

#### Potencijalni problemi

Razumemo da Jamstack sajtovi ne počinju uvek kao nešto statično. Mogu biti napravljeni sa Preact, React, ili Vue, na primer. Napisali smo FastComments widget
u čistom JS-u, za maksimalnu interoperabilnost sa svim glavnim okvirima. Međutim, ako naiđete na probleme sa FastComments i vašim omiljenim okvirom,
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na kraju

Nadamo se da ćete otkriti da FastComments omogućava vašim korisnicima da komuniciraju sa vašim sajtom, daju povratne informacije i ostavljaju komentare na načine koje obično ne bi mogli na statičnom sajtu.
Na primer, ova stranica je pred-renderovana baš kao tradicionalni Jamstack sajt, i možete videti kako FastComments srećno radi na dnu.

Zdravlje! 

{{/isPost}}

---