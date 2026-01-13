---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Ugradnja komentara na VueJS sajtu sa FastComments[/postlink]

{{#unless isPost}}
Treba da ugradite komentare u aplikaciju razvijenu pomoću Vue? Tu smo da vam pomognemo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

FastComments sada ima Vue komponentu koja je u skladu sa našim VanillaJS widget-om.

Odlučili smo da biblioteku nazovemo fastcomments-vue. GitHub repozitorijum sa izvorom koda možete pronaći <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja widget-a.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Vue komponenta omotač oko postojećeg FastComments widget-a.
 
To znači da, ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, vi ćete odmah imati koristi od toga!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude jezgro našeg poslovanja (uz glavni backend). To znači da smo ga dizajnirali da se može proširiti baš kao što radimo sada.

Iako bez ove nove Vue biblioteke, mogli ste integrisati FastComments u vašu aplikaciju pisanjem svoje vlastite biblioteke, to bi predstavljalo značajnu prepreku za usvajanje. Podržavanjem
Vue direktno, olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Vue 3.0

Imamo komponentu koja je posebno napravljena za Vue 3.0 pod nazivom <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacije jedne stranice?

FastComments podržava SPA-e u svom jezgru. Komponenta prati promene u konfiguracionom objektu - tako da, ako ažurirate trenutnu stranicu (koja se zove urlId), widget će ponovo renderovati.

#### Šta se menja za postojeće korisnike 

Ništa se ne menja za postojeće korisnike - i **nema** ništa loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-vue zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, sledićemo isti model.

Naš VanillaJS widget je građanin prvog reda FastComments-a. Ovo izdanje je potpuno *dodato* našoj infrastrukturi.

Pored toga, VanillaJS widget i dalje ostaje odlično rešenje za dodavanje ugrađenih komentara na svaku web stranicu koja ne koristi framework, kao što je statička stranica.

#### Na kraju

Objavljivanjem fastcomments-vue biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima da usvoje FastComments dok koriste savremene
metodologije razvoja.

Živeli!

{{/isPost}}