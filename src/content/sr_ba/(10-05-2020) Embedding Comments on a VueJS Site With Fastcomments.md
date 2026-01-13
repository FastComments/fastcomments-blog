---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Uključivanje komentara na VueJS sajtu sa FastComments[/postlink]

{{#unless isPost}}
Treba da uključite komentare u aplikaciju razvijenu pomoću Vue? Imamo rešenje za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

FastComments sada ima Vue komponentu koja je u skladu sa našim VanillaJS vidgetom.

Odlučili smo da biblioteku nazovemo fastcomments-vue. Možete pronaći GitHub repozitorij sa izvornošću <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ovde</a>.

Repozitorij takođe sadrži primer korišćenja vidgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji ova nova komponenta funkcioniše je taj da je Vue komponenta omotač oko postojećeg FastComments vidgeta.
 
To znači da, ako dodamo funkcije našim postojećim komponentama ili ispravimo greške, vi ćete odmah imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS vidget da bude srž našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da se proširuje baš na način na koji to radimo sada.

Iako bez ove nove Vue biblioteke, mogli biste integrisati FastComments u vašu aplikaciju tako što biste napisali svoju biblioteku, to bi bila velika prepreka za usvajanje. Podržavajući Vue direktno, olakšavamo usvajanje FastComments za ovakve tipove korisnika.

#### Vue 3.0

Imamo komponentu koja je posebno izrađena za Vue 3.0 pod nazivom <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Aplikacije jedne strane?

FastComments podržava SPA kao srž. Komponenta prati promene u objektu konfiguracije - tako da, ako ažurirate trenutnu stranicu (koja se zove urlId), vidget će se ponovo prikazati.

#### Šta se menja za postojeće kupce 

Ništa se ne menja za postojeće kupce - i **ništa** nije loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-vue zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako oslobodimo Angular ili Vue komponente, sledimo isti model.

Naš VanillaJS vidget je prvoklasni građanin FastComments-a. Ovo izdanje je potpuno *dodato* našoj infrastrukturi.

Pored toga, VanillaJS vidget i dalje ostaje odlično rešenje za uključivanje ugrađenih komentara na svaku vebu stranicu koja ne koristi framework, poput statičke stranice.

#### Zaključak

Izdavanjem fastcomments-vue biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne 
metodologije razvoja.

Živeli!

{{/isPost}}

---