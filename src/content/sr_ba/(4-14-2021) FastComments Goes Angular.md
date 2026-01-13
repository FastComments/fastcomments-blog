---
[category:API & Development]

###### [postdate]
# [postlink]FastComments ide na Angular[/postlink]

{{#unless isPost}}
Trebate ugraditi komentare u aplikaciju razvijenu pomoću Angulara? Mi smo tu za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

FastComments sada ima Angular komponentu koja je izjednačena u funkcionalnosti sa našim VanillaJS widget-om.

Odlučili smo da biblioteku nazovemo ngx-fastcomments. GitHub repozitorij sa izvorni kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ovde</a>.

Repozitorij takođe sadrži primer korišćenja widget-a u obliku Angular radnog prostora.

Možete ga pronaći na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Angular komponenta omotač oko postojećeg FastComments widget-a.

To znači da, ako dodamo funkcionalnosti našim postojećim komponentama ili ispravimo greške, vi ćete odmah imati koristi od toga!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude srž našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da bude proširiv na upravo onaj način na koji sada radimo.

Iako bez ove nove Angular biblioteke, mogli ste integrisati FastComments u vašu aplikaciju pisajući svoju biblioteku, to bi predstavljalo veliki problem usvajanja. Podržavajući Angular direktno, olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Aplikacije jedne stranice?

FastComments podržava SPAs u svojoj srži. Komponenta prati promene u config objektu koristeći detekciju promena. Na primer, ako ažurirate trenutnu stranicu (koja se naziva urlId) widget će se ponovo renderovati. Ovo olakšava implementaciju slučajeva kao što su prebacivanje na tamni režim ili dodavanje paginacije.

#### Šta se menja za postojeće kupce 

Ništa se ne menja za postojeće kupce - i **nije** ništa loše u korišćenju VanillaJS verzije FastComments za nove projekte. ngx-fastcomments zavisi od VanillaJS verzije FastComments i uvek će tako biti. Ako objavimo nove komponente, pratićemo isti model.

Naš VanillaJS widget je građanin prve klase FastComments. Ovo izdanje je potpuno *dodatno* našoj infrastrukturi.

Osim toga, VanillaJS widget i dalje ostaje sjajno rešenje za ubacivanje ugrađenih komentara u bilo koju web stranicu koja ne koristi framework, kao što je statična stranica.

#### Na kraju

Objavljivanjem ngx-fastcomments biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne metodologije razvoja.

Živeli!

{{/isPost}}

---