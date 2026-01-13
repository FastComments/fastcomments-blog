---
[category:Integrations]
###### [postdate]
# [postlink]Komentari za Jamstack[/postlink]

{{#unless isPost}}
Ono što je staro postaje novo. Pre-renderiranje i posluživanje stranica s CDN-a sada se naziva "JamStack" - ali ne moraju biti potpuno statične!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

<a href="https://jamstack.org/" target="_blank">Jamstack</a> je način pisanja web stranice koji ne ovisi o tradicionalnom web serveru. Umjesto toga, one se
poslužuju s servera koje zovemo "CDN" za najbolje korisničko iskustvo (učitavaju se vrlo brzo). Performanse su ogromni prioritet za web stranice napisane s Jamstackom - baš kao i
FastComments.

#### Zašto FastComments radi s Jamstackom

FastComments zahtijeva samo mali (< 11kb trenutno) kod koji se nalazi na dnu statične stranice na kojoj želite dodati komentare. Tako instaliranje FastComments na tipičnu
Jamstack stranicu traje samo nekoliko sekundi, baš kao i svaka statična stranica.

#### Potencijalni problemi

Razumijemo da Jamstack stranice ne počinju uvijek kao nešto statično. Mogu biti izrađene s Preact-om, React-om ili Vue-om, na primjer. Napisali smo FastComments widget
u običnom JS-u za maksimalnu interoperabilnost s svim glavnim okvirima. Međutim, ako naiđete na probleme s FastComments i vašim odabranim okvirom, 
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Zaključak

Nadamo se da ćete otkriti da FastComments omogućuje vašim korisnicima interakciju s vašom stranicom, davanje povratnih informacija i ostavljanje komentara na načine na koje obično ne bi mogli na statičnoj stranici.
Na primjer, ova stranica je pre-renderirana baš kao tradicionalna Jamstack stranica, a možete vidjeti kako FastComments rado radi na dnu.

Živjeli!

{{/isPost}}

---