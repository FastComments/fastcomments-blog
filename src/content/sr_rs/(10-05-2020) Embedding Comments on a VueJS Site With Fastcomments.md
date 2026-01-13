---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Umetanje komentara na VueJS sajtu sa FastComments[/postlink]

{{#unless isPost}}
Potrebno je umetnuti komentare u aplikaciju razvijenu uz pomoć Vue? Imamo rešenje.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

FastComments sada ima Vue komponentu koja je na nivou mogućnosti sa našim VanillaJS vidgetom.

Odlučili smo da nazivamo biblioteku fastcomments-vue. GitHub repozitorijum sa izvorni kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja vidgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ovde</a>.

#### Kako to funkcioniše

Način na koji ova nova komponenta funkcioniše je da je Vue komponenta omotač oko postojećeg FastComments vidgeta.

To znači da ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, vi ćete odmah imati koristi od toga!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS vidget da bude jezgro našeg poslovanja (zajedno sa jezgrenom pozadinom). To znači da smo ga dizajnirali da bude proširiv baš kao što to radimo sada.

Dok biste bez ove nove Vue biblioteke mogli da integrišete FastComments u vašu aplikaciju tako što biste napisali svoju biblioteku, to bi bio veliki izazov za usvajanje. Direktnom podrškom za Vue olakšavamo usvajanje FastComments za ovakve tipove klijenata.

#### Vue 3.0

Imamo komponentu izgrađenu specifično za Vue 3.0 pod nazivom <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacije jedne strane?

FastComments podržava SPA (Single Page Applications) u svom osnovnom dizajnu. Komponenta prati promene u konfiguracionom objektu - tako da ako ažurirate trenutnu stranicu (nazvanu urlId), vidget će se ponovo renderovati.

#### Šta se menja za postojeće korisnike 

Ništa se ne menja za postojeće korisnike - i **nema** ništa loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-vue zavisi od VanillaJS verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, pratimo isti model.

Naš VanillaJS vidget je prvorazredna komponenta FastComments-a. Ovo izdanje je potpuno *dodatno* našoj infrastrukturi.

Pored toga, VanillaJS vidget i dalje ostaje odlično rešenje za umetanje komentara na bilo koju web stranicu koja ne koristi framework, kao što je statička stranica.

#### Na zaključak

Objavljivanjem fastcomments-vue biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne metodologije.

Pozdrav!

{{/isPost}}

---