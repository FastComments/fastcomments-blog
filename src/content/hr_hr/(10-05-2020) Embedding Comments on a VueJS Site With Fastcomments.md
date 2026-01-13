---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Umetanje komentara na VueJS stranici s FastComments[/postlink]

{{#unless isPost}}
Trebate umetnuti komentare u aplikaciju razvijenu s Vue? Tu smo da pomognemo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Što je novo

FastComments sada ima Vue komponentu koja je funkcionalno izjednačena s našim VanillaJS widgetom.

Odlučili smo nazvati biblioteku fastcomments-vue. GitHub repozitorij sa izvorni kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ovdje</a>.

Repozitorij također sadrži primjer korištenja widgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ovdje</a>.

#### Kako to funkcionira

Način na koji ova nova komponenta radi je da je Vue komponenta omotnica oko postojećeg FastComments widgeta.

To znači da ako dodamo značajke našim postojećim komponentama ili ispravimo greške, odmah ćete imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude temelj našeg poslovanja (uz core backend). To znači da smo ga dizajnirali da se proširuje na način na koji to radimo sada.

Iako bez ove nove Vue biblioteke, mogli ste integrirati FastComments u vašu aplikaciju pisanjam vlastite biblioteke, to bi bio velik izazov za usvajanje. Podržavanjem
Vue-a direktno, olakšavamo usvajanje FastComments za ovakve tipove kupaca.

#### Vue 3.0

Imamo komponentu izgrađenu posebno za Vue 3.0 pod nazivom <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacije jedne stranice?

FastComments podržava SPA-e u svom jezgru. Komponenta prati promjene u objektu konfiguracije - tako da ako ažurirate trenutnu stranicu (nazvanu urlId) widget
će se ponovno prikazati.

#### Što se mijenja za postojeće kupce

Za postojeće kupce se ništa ne mijenja - i **ništa** nije pogrešno u korištenju VanillaJS verzije FastComments za nove projekte. fastcomments-vue ovisi o VanillaJS
verziji FastComments i uvijek će. Ako objavimo Angular ili Vue komponente, slijedit ćemo isti model.

Naš VanillaJS widget je prvoklasni građanin FastComments-a. Ovo izdanje je potpuno *aditivno* našoj infrastrukturi.

Osim toga, VanillaJS widget i dalje ostaje sjajno rješenje za umetanje komentara u bilo koju web stranicu koja ne koristi okvir, poput statične stranice.

#### U zaključku

Objavljivanjem fastcomments-vue biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne
metodologije. 

Živjeli!

{{/isPost}}