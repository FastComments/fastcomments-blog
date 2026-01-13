---
[category:API & Development]
###### [postdate]
# [postlink]FastComments ide na React[/postlink]

{{#unless isPost}}
Treba da ubacite komentare u aplikaciju razvijenu sa React? Mi imamo rešenje.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke pojmove

#### Šta je novo

FastComments sada ima React komponentu koja je jednaka našoj VanillaJS vidgeti po funkcionalnosti.

Odlučili smo da biblioteku nazovemo fastcomments-react. GitHub repozitorijum sa izvorni kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja vidgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji nova komponenta funkcioniše je da je React komponenta omotač oko postojeće FastComments vidgeta.

To znači da, ako dodamo funkcije postojećim komponentama ili popravimo greške, vi ćete odmah imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS vidget da bi bio osnova našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da se može proširivati baš na način na koji to radimo sada.

Iako bez ove nove React biblioteke, vi ste mogli integrisati FastComments u vašu aplikaciju tako što biste napisali svoju biblioteku, to bi bio veliki izazov za usvajanje. Podržavanjem React-a direktno, olakšavamo usvajanje FastComments za ovakve tipove korisnika.

#### Aplikacije jedne stranice?

FastComments podržava SPA (Single Page Applications) u svom osnovnom okviru. Komponenta prati promene u konfiguracionom objektu - tako da ako ažurirate trenutnu stranicu (koja se naziva urlId), vidget će se ponovo renderovati.

#### Šta se menja za postojeće korisnike

Za postojeće korisnike se ništa ne menja - i **ništa** nije loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-react zavisi od VanillaJS verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, postupit ćemo prema istom modelu.

Naš VanillaJS vidget je prvo razredni deo FastComments. Ovo izdanje je potpuno *dodato* našoj infrastrukturi.

Pored toga, VanillaJS vidget i dalje ostaje sjajno rešenje za umetanje ugrađenih komentara u bilo koju web stranicu koja ne koristi framework, kao što je statička stranica.

#### Na kraju

Objavljivanjem fastcomments-react biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima da usvoje FastComments dok koriste moderne razvojne metodologije.

Živeli!

{{/isPost}}

---