---
[category:API & Development]
###### [postdate]
# [postlink]FastComments ide na React[/postlink]

{{#unless isPost}}
Trebate ugraditi komentare u aplikaciju razvijenu s Reactom? Mi smo tu za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Što je novo

FastComments sada ima React komponentu koja je izjednačena s našim VanillaJS widgetom.

Odlučili smo nazvati biblioteku fastcomments-react. Izvorni kod možete pronaći u GitHub repozitoriju <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ovdje</a>.

Repozitorij također sadrži primjer korištenja widgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ovdje</a>.

#### Kako to funkcionira

Način na koji ova nova komponenta funkcionira je da je React komponenta omotač oko postojećeg FastComments widgeta.
 
To znači da ako dodamo nove značajke našim postojećim komponentama ili ispravimo greške, vi ćete odmah imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da postane srž našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da se može proširivati točno onako kako to radimo sada.

Iako bez ove nove React biblioteke, mogli ste integrirati FastComments u svoju aplikaciju pisanjem vlastite biblioteke, to bi bila velika prepreka za usvajanje. Podržavanjem
Reacta direktno olakšavamo usvajanje FastComments za ovakve tipove korisnika.

#### Aplikacije s jednom stranicom?

FastComments u svojoj srži podržava SPA-e. Komponenta prati promjene u objektu konfiguracije - tako da, ako ažurirate trenutnu stranicu (nazvanu urlId), widget će
ponovno renderirati.

#### Što se mijenja za postojeće korisnike

Niće se promijeniti za postojeće korisnike - i **ništa** nije loše u korištenju VanillaJS verzije FastComments za nove projekte. fastcomments-react ovisi o VanillaJS
verziji FastComments i uvijek će. Ako objavimo Angular ili Vue komponente, slijedit ćemo isti model.

Naš VanillaJS widget je prvi građanin FastComments-a. Ovo izdanje je potpuno *dodatan* dio naše infrastrukture.

Osim toga, VanillaJS widget i dalje ostaje sjajno rješenje za ubacivanje ugrađenih komentara u bilo koju web stranicu koja ne koristi framework, poput statične stranice.

#### U zaključku

Objavljivanjem fastcomments-react biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne
metodologije. 

Živjeli!

{{/isPost}}

---