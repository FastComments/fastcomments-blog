---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Ugrađivanje komentara na VueJS sajtu sa FastComments[/postlink]

{{#unless isPost}}
Treba da ugradiš komentare u aplikaciju razvijenu sa Vue? Mi imamo rešenje.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

FastComments sada ima Vue komponentu koja je u skladu sa našim VanillaJS vidgetom.

Odlučili smo da biblioteku nazovemo fastcomments-vue. GitHub repozitorij sa izvornih kodom možeš pronaći <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ovde</a>.

Repozitorij takođe sadrži primer korišćenja vidžeta.

Dostupno je na NPM-u, koji možeš pronaći <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ovde</a>.

#### Kako to funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Vue komponenta omotač oko postojećeg FastComments vidžeta.
 
To znači da ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, odmah ćeš koje koristiš imati koristi od toga!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS vidget da bude osnova našeg poslovanja (zajedno sa osnovnim backend-om). To znači da smo ga dizajnirali da se proširuje, baš kao što činimo sada.

Iako bez ove nove Vue biblioteke, mogao si integrisati FastComments u svoju aplikaciju tako što bi napisao svoju biblioteka, to bi bio veliki izazov za usvajanje. Podrškom za Vue direktno, olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Vue 3.0

Imamo komponentu koja je posebno izgrađena za Vue 3.0 pod nazivom <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacije sa jednom stranom?

FastComments podržava SPAs u svom jezgru. Komponenta prati promene u konfig objekta - tako da ako ažuriraš trenutnu stranicu (nazvanu urlId) vidžet će se ponovo renderovati.

#### Šta se menja za postojeće korisnike

Ništa se ne menja za postojeće korisnike - i **ništa** nije loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-vue zavisi od VanillaJS verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, pratimo isti model.

Naš VanillaJS vidget je građanin prvog reda FastComments-a. Ovo izdanje je potpuno *aditivno* našoj infrastrukturi.

Pored toga, VanillaJS vidget i dalje ostaje sjajno rešenje za dodavanje ugrađenih komentara na bilo koju web stranicu koja ne koristi framework, poput statične stranice.

#### Na kraju

Objavljivanjem fastcomments-vue biblioteke, i budućih biblioteka, nadamo se da ćemo olakšati programerima usvajanje FastComments-a dok koriste moderne razvojne metodologije. 

Živeli!

{{/isPost}}