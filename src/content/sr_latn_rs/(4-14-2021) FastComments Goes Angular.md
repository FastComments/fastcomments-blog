---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Ide Angular[/postlink]

{{#unless isPost}}
Potrebno je ugraditi komentare u aplikaciju razvijenu pomoću Angular-a? Tu smo za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke izraze

#### Šta je novo

FastComments sada ima Angular komponentu koja je na nivou funkcionalnosti sa našim VanillaJS widget-om.

Odlučili smo da biblioteku nazovemo ngx-fastcomments. GitHub repozitorijum sa izvorним kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer upotrebe widget-a u obliku Angular radnog prostora.

Možete ga pronaći na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ovde</a>.

#### Kako to funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Angular komponenta omotač oko postojećeg FastComments widget-a.

To znači da, ako dodamo funkcije našim postojećim komponentama ili ispravimo greške, koristićete te novitete odmah!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude osnova našeg poslovanja (zajedno sa osnovnim backend-om). To znači da smo ga dizajnirali da se proširuje baš kao što to radimo sada.

Iako bez ove nove Angular biblioteke, mogli ste integrisati FastComments u vašu aplikaciju tako što biste pisali svoju bibliotеку, to bi predstavljalo značajnu prepreku za usvajanje. Podrškom za Angular direktno, olakšavamo usvajanje FastComments za ove vrste korisnika.

#### Aplikacije sa jednom stranicom?

FastComments podržava SPA na svom jezgru. Komponenta prati promene na objekat konfiguracije koristeći detekciju promena. Na primer, ako ažurirate trenutnu stranicu (nazvanu urlId) widget će ponovo renderovati. To čini primene kao što su uključivanje tamnog režima ili dodavanje paginacije, lako za implementaciju.

#### Šta se menja za postojeće korisnike

Ništa se ne menja za postojeće korisnike - i **nema** ništa loše u tome da koristite VanillaJS verziju FastComments za nove projekte. ngx-fastcomments zavisi od VanillaJS verzije FastComments i oduvek će zavisiti. Ako objavimo nove komponente, pridržavaćemo se istog modela.

Naš VanillaJS widget je prvoklasni građanin FastComments-a. Ovo izdanje je potpuno *aditivno* našoj infrastrukturi.

Pored toga, VanillaJS widget ostaje sjajno rešenje za dodavanje ugrađenih komentara u svaku web stranicu koja ne koristi framework, kao što je statična stranica.

#### U zaključku

Objavljivanjem ngx-fastcomments biblioteke, i budućih biblioteka, nadamo se da ćemo olakšati programerima usvajanje FastComments-a uz korišćenje modernih razvojnih metodologija.

Živeli!

{{/isPost}}

---