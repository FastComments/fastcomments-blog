---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Ide Angular[/postlink]

{{#unless isPost}}
Trebate da ugradite komentare u aplikaciju razvijenu sa Angular? Mi smo tu za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je novo

FastComments sada ima Angular komponentu koja je pogodna za upotrebu kao naš VanillaJS vidžet.

Odlučili smo da biblioteku nazovemo ngx-fastcomments. GitHub repozitorijum sa izvorom koda možete pronaći <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja vidžeta u obliku Angular radnog prostora.

Možete ga pronaći na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Angular komponenta omotač oko postojećeg FastComments vidžeta.

To znači da ako dodamo funkcije našim postojećim komponentama ili ispravimo greške, odmah ćete imati korist od toga!

#### Zašto Nova Komponenta?

Napisali smo FastComments VanillaJS vidžet da bude srž našeg poslovanja (zajedno sa centralnim backend-om). To znači da smo ga dizajnirali da se može proširivati na način na koji to sada radimo.

Iako bez ove nove Angular biblioteke, mogli ste integrisati FastComments u vašu aplikaciju tako što biste napisali vlastitu biblioteku, to bi bila značajna prepreka za usvajanje. Podržavanjem
Angularda direktno, olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Aplikacije Jednostavne Stranice?

FastComments podržava SPA na svom osnovnom nivou. Komponenta prati promene u konfiguracionom objektu koristeći detekciju promena. Na primer, ako ažurirate trenutnu stranicu (nazvanu urlId), vidžet
će se ponovo prikazati. To olakšava primene poput prebacivanja tamnog režima ili dodavanja paginacije.

#### Šta se menja za Postojeće Kupce

Ništa se ne menja za postojeće kupce - i nema **ništa** loše u korišćenju VanillaJS verzije FastComments za nove projekte. ngx-fastcomments zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo nove komponente, sledimo isti model.

Naš VanillaJS vidžet je prvoklasni građanin FastComments-a. Ovo izdanje je potpuno *dodato* našoj infrastrukturi.

Pored toga, VanillaJS vidžet i dalje ostaje odlično rešenje za ugradnju komentara u bilo koju web stranicu koja ne koristi okvir, kao što je statička stranica.

#### Na kraju

Objavljivanjem ngx-fastcomments biblioteke, i budućih biblioteka, nadamo se da ćemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne
metodologije.

Živeli!

{{/isPost}}

---